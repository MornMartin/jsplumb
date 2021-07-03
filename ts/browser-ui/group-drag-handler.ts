
import {ElementDragHandler} from "./element-drag-handler"
import {GhostProxyingDragHandler} from "./drag-manager"
import {BrowserJsPlumbInstance} from "./browser-jsplumb-instance"
import { jsPlumbDOMElement} from './element-facade'
import {DragEventParams, Drag, DragStopEventParams} from "./collicat"
import {SELECTOR_MANAGED_ELEMENT, UIGroup} from "@jsplumb/core"
import { PointXY } from "@jsplumb/util"
import {EVENT_REVERT, SELECTOR_GROUP} from "./constants"


export class GroupDragHandler extends ElementDragHandler implements GhostProxyingDragHandler {

    selector: string = [">" , SELECTOR_GROUP, SELECTOR_MANAGED_ELEMENT].join(" ")

    doRevalidate:(el:jsPlumbDOMElement) => void

    constructor(protected instance:BrowserJsPlumbInstance) {
        super(instance)

        this.doRevalidate = this._revalidate.bind(this)
    }

    reset() {
        this.drag.off(EVENT_REVERT, this.doRevalidate)
    }

    private _revalidate(el:any) {
        this.instance.revalidate(el)
    }

    init(drag:Drag) {
        this.drag = drag
        drag.on(EVENT_REVERT, this.doRevalidate)
    }

    useGhostProxy(container:any, dragEl:Element) {
        let group = (dragEl as jsPlumbDOMElement)._jsPlumbParentGroup
        return group == null ? false : group.ghost === true
    }

    /**
     * Makes the element that acts as a ghost proxy.
     * @param el
     */
    makeGhostProxy (el: Element):Element {
        // do not believe an IDE if it tells you this method can be static. It can't.
        const jel = el as unknown as jsPlumbDOMElement
        const newEl = jel.cloneNode(true)
        newEl._jsPlumbParentGroup = jel._jsPlumbParentGroup
        return newEl
    }

    onDrag(params: DragEventParams) {
        super.onDrag(params)
    }

    onDragAbort(el: jsPlumbDOMElement):void {
        return null
    }

    onStop(params: DragStopEventParams) {

        const jel = params.el as unknown as jsPlumbDOMElement
        const originalElement = params.drag.getDragElement(true)

        let originalGroup:UIGroup<Element> = jel._jsPlumbParentGroup,
            out = super.onStop(params),
            currentGroup:UIGroup<Element> = jel._jsPlumbParentGroup

        if (currentGroup === originalGroup) {
            this._pruneOrOrphan(params, true)
        } else {
            if (originalGroup.ghost) {
                const o1 = this.instance.getOffset(this.instance.getGroupContentArea(currentGroup))
                const o2 = this.instance.getOffset(this.instance.getGroupContentArea(originalGroup))
                const o = { x:o2.x + params.pos.x - o1.x, y:o2.y + params.pos.y - o1.y}
                originalElement.style.left = o.x + "px"
                originalElement.style.top = o.y + "px"
            }
        }

        this.instance.revalidate(originalElement)

        return out
    }

    private _isInsideParent(_el:jsPlumbDOMElement, pos:PointXY):boolean {
        let p = _el.offsetParent,
            s = this.instance.getSize(p),
            ss = this.instance.getSize(_el),
            leftEdge = pos.x,
            rightEdge = leftEdge + ss.w,
            topEdge = pos.y,
            bottomEdge = topEdge + ss.h

        return rightEdge > 0 && leftEdge < s.w && bottomEdge > 0 && topEdge < s.h
    }

    private _pruneOrOrphan(params:DragStopEventParams, doNotTransferToAncestor:boolean):[string, PointXY] {

        const jel = params.el as unknown as jsPlumbDOMElement
        let orphanedPosition = null
        if (!this._isInsideParent(jel, params.pos)) {
            let group = jel._jsPlumbParentGroup
            if (group.prune) {
                if (jel._isJsPlumbGroup) {
                    // remove the group from the instance
                    this.instance.removeGroup(jel._jsPlumbGroup)
                } else {
                    // instruct the group to remove the element from itself and also from the DOM.
                    group.remove(params.el, true)
                }

            } else if (group.orphan) {
                orphanedPosition = this.instance.groupManager.orphan(params.el, doNotTransferToAncestor)
                if (jel._isJsPlumbGroup) {
                    // remove the nested group from the parent
                    group.removeGroup(jel._jsPlumbGroup)
                } else {
                    // remove the element from the group's DOM element.
                    group.remove(params.el)
                }

            }
        }

        return orphanedPosition
    }

}
