import { PointXY, Size, Grid } from '@jsplumb/util';
import { EventManager } from "./event-manager";
import { jsPlumbDOMElement } from './element-facade';
import { BrowserJsPlumbInstance } from "./browser-jsplumb-instance";
export interface DragStartEventParams {
    e: MouseEvent;
    el: jsPlumbDOMElement;
    pos: PointXY;
    drag: Drag;
    size: Size;
}
export interface DragEventParams extends DragStartEventParams {
    originalPos: PointXY;
}
export declare type RevertEventParams = jsPlumbDOMElement;
export interface BeforeStartEventParams extends DragStartEventParams {
}
export interface DragStopEventParams extends DragEventParams {
    finalPos: PointXY;
    selection: Array<[jsPlumbDOMElement, PointXY, Drag, Size]>;
}
export declare function isInsideParent(instance: BrowserJsPlumbInstance, _el: HTMLElement, pos: PointXY): boolean;
export declare const EVENT_START = "start";
export declare const EVENT_BEFORE_START = "beforeStart";
export declare const EVENT_DRAG = "drag";
export declare const EVENT_DROP = "drop";
export declare const EVENT_OVER = "over";
export declare const EVENT_OUT = "out";
export declare const EVENT_STOP = "stop";
declare abstract class Base {
    protected el: jsPlumbDOMElement;
    protected k: Collicat;
    abstract _class: string;
    uuid: string;
    private enabled;
    scopes: Array<string>;
    protected constructor(el: jsPlumbDOMElement, k: Collicat);
    setEnabled(e: boolean): void;
    isEnabled(): boolean;
    toggleEnabled(): void;
    addScope(scopes: string): void;
    removeScope(scopes: string): void;
    toggleScope(scopes: string): void;
}
export declare type GhostProxyGenerator = (el: Element) => Element;
export declare enum ContainmentType {
    notNegative = "notNegative",
    parent = "parent",
    parentEnclosed = "parentEnclosed"
}
export interface DragHandlerOptions {
    selector?: string;
    start?: (p: DragStartEventParams) => any;
    stop?: (p: DragStopEventParams) => any;
    drag?: (p: DragEventParams) => any;
    beforeStart?: (beforeStartParams: BeforeStartEventParams) => void;
    dragInit?: (el: Element) => any;
    dragAbort?: (el: Element) => any;
    ghostProxy?: GhostProxyGenerator | boolean;
    makeGhostProxy?: GhostProxyGenerator;
    useGhostProxy?: (container: any, dragEl: jsPlumbDOMElement) => boolean;
    ghostProxyParent?: Element;
    constrainFunction?: ConstrainFunction | boolean;
    revertFunction?: RevertFunction;
    filter?: string;
    filterExclude?: boolean;
    snapThreshold?: number;
    grid?: Grid;
    containment?: ContainmentType;
    containmentPadding?: number;
}
export interface DragParams extends DragHandlerOptions {
    rightButtonCanDrag?: boolean;
    consumeStartEvent?: boolean;
    clone?: boolean;
    scroll?: boolean;
    trackScroll?: boolean;
    multipleDrop?: boolean;
    canDrag?: Function;
    consumeFilteredEvents?: boolean;
    events?: Record<string, Function>;
    parent?: any;
    ignoreZoom?: boolean;
    scope?: string;
}
export declare class Drag extends Base {
    _class: string;
    rightButtonCanDrag: boolean;
    consumeStartEvent: boolean;
    clone: boolean;
    scroll: boolean;
    trackScroll: boolean;
    private _downAt;
    private _posAtDown;
    private _pagePosAtDown;
    private _pageDelta;
    private _moving;
    private _lastPosition;
    private _lastScrollValues;
    private _initialScroll;
    _size: Size;
    private _currentParentPosition;
    private _ghostParentPosition;
    private _dragEl;
    private _multipleDrop;
    private _ghostProxyOffsets;
    private _ghostDx;
    private _ghostDy;
    _isConstrained: boolean;
    _ghostProxyParent: jsPlumbDOMElement;
    _useGhostProxy: Function;
    _ghostProxyFunction: GhostProxyGenerator;
    _activeSelectorParams: DragParams;
    _availableSelectors: Array<DragParams>;
    _canDrag: Function;
    private _consumeFilteredEvents;
    private _parent;
    private _ignoreZoom;
    _filters: Record<string, [Function, boolean]>;
    _constrainRect: {
        w: number;
        h: number;
    };
    _elementToDrag: jsPlumbDOMElement;
    downListener: (e: MouseEvent) => void;
    moveListener: (e: MouseEvent) => void;
    upListener: (e?: MouseEvent) => void;
    scrollTracker: (e: Event) => void;
    listeners: Record<string, Array<Function>>;
    constructor(el: jsPlumbDOMElement, params: DragParams, k: Collicat);
    private _trackScroll;
    on(evt: string, fn: Function): void;
    off(evt: string, fn: Function): void;
    private _upListener;
    private _downListener;
    private _moveListener;
    private mark;
    private unmark;
    moveBy(dx: number, dy: number, e?: MouseEvent): void;
    abort(): void;
    getDragElement(retrieveOriginalElement?: boolean): jsPlumbDOMElement;
    stop(e?: MouseEvent, force?: boolean): void;
    private _dispatch;
    private resolveGrid;
    /**
     * Snap the given position to a grid, if the active selector has declared a grid.
     * @param pos
     */
    private toGrid;
    setUseGhostProxy(val: boolean): void;
    private _doConstrain;
    _testFilter(e: any): boolean;
    addFilter(f: Function | string, _exclude?: boolean): void;
    removeFilter(f: Function | string): void;
    clearAllFilters(): void;
    addSelector(params: DragHandlerOptions, atStart?: boolean): void;
    destroy(): void;
}
export declare type ConstrainFunction = (desiredLoc: PointXY, dragEl: HTMLElement, constrainRect: Size, size: Size) => PointXY;
export declare type RevertFunction = (dragEl: HTMLElement, pos: PointXY) => boolean;
export interface CollicatOptions {
    zoom?: number;
    css?: Record<string, string>;
    inputFilterSelector?: string;
}
export interface jsPlumbDragManager {
    getZoom(): number;
    setZoom(z: number): void;
    getInputFilterSelector(): string;
    setInputFilterSelector(selector: string): void;
    draggable(el: jsPlumbDOMElement, params: DragParams): Drag;
    destroyDraggable(el: jsPlumbDOMElement): void;
}
export declare class Collicat implements jsPlumbDragManager {
    eventManager: EventManager;
    private zoom;
    css: Record<string, string>;
    inputFilterSelector: string;
    constructor(options?: CollicatOptions);
    getZoom(): number;
    setZoom(z: number): void;
    private _prepareParams;
    /**
     * Gets the selector identifying which input elements to filter from drag events.
     * @returns Current input filter selector.
     */
    getInputFilterSelector(): string;
    /**
     * Sets the selector identifying which input elements to filter from drag events.
     * @param selector Input filter selector to set.
     * @returns Current instance; method may be chained.
     */
    setInputFilterSelector(selector: string): this;
    draggable(el: jsPlumbDOMElement, params: DragParams): Drag;
    destroyDraggable(el: jsPlumbDOMElement): void;
}
export {};
//# sourceMappingURL=collicat.d.ts.map