'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var communityCore = require('@jsplumb/community-core');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function matchesSelector(el, selector, ctx) {
  ctx = ctx || el.parentNode;
  var possibles = ctx.querySelectorAll(selector);

  for (var i = 0; i < possibles.length; i++) {
    if (possibles[i] === el) {
      return true;
    }
  }

  return false;
}
function consume(e, doNotPreventDefault) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.returnValue = false;
  }

  if (!doNotPreventDefault && e.preventDefault) {
    e.preventDefault();
  }
}
/*
 * Function: sizeElement
 * Helper to size and position an element. You would typically use
 * this when writing your own Connector or Endpoint implementation.
 *
 * Parameters:
 *  x - [int] x position for the element origin
 *  y - [int] y position for the element origin
 *  w - [int] width of the element
 *  h - [int] height of the element
 *
 */

function sizeElement(el, x, y, w, h) {
  if (el) {
    el.style.height = h + "px";
    el.height = h;
    el.style.width = w + "px";
    el.width = w;
    el.style.left = x + "px";
    el.style.top = y + "px";
  }
}
function findParent(el, selector, container) {
  var pn = el;

  while (pn != null && pn !== container) {
    if (matchesSelector(pn, selector)) {
      return pn;
    } else {
      pn = pn.parentNode;
    }
  }
}
function getEventSource(e) {
  return e.srcElement || e.target;
}

function _setClassName(el, cn, classList) {
  cn = communityCore.fastTrim(cn);

  if (typeof el.className.baseVal !== "undefined") {
    el.className.baseVal = cn;
  } else {
    el.className = cn;
  } // recent (i currently have  61.0.3163.100) version of chrome do not update classList when you set the base val
  // of an svg element's className. in the long run we'd like to move to just using classList anyway


  try {
    var cl = el.classList;

    if (cl != null) {
      while (cl.length > 0) {
        cl.remove(cl.item(0));
      }

      for (var i = 0; i < classList.length; i++) {
        if (classList[i]) {
          cl.add(classList[i]);
        }
      }
    }
  } catch (e) {
    // not fatal
    communityCore.log("JSPLUMB: cannot set class list", e);
  }
} //
// get the class name for either an html element or an svg element.


function _getClassName(el) {
  return typeof el.className.baseVal === "undefined" ? el.className : el.className.baseVal;
}

function _classManip(el, classesToAdd, classesToRemove) {
  var cta = classesToAdd == null ? [] : communityCore.isArray(classesToAdd) ? classesToAdd : classesToAdd.split(/\s+/);
  var ctr = classesToRemove == null ? [] : communityCore.isArray(classesToRemove) ? classesToRemove : classesToRemove.split(/\s+/);

  var className = _getClassName(el),
      curClasses = className.split(/\s+/);

  var _oneSet = function _oneSet(add, classes) {
    for (var i = 0; i < classes.length; i++) {
      if (add) {
        if (curClasses.indexOf(classes[i]) === -1) {
          curClasses.push(classes[i]);
        }
      } else {
        var idx = curClasses.indexOf(classes[i]);

        if (idx !== -1) {
          curClasses.splice(idx, 1);
        }
      }
    }
  };

  _oneSet(true, cta);

  _oneSet(false, ctr);

  _setClassName(el, curClasses.join(" "), curClasses);
}

function getClass(el) {
  return _getClassName(el);
}
function addClass(el, clazz) {
  if (el != null && clazz != null && clazz.length > 0) {
    if (el.classList) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(communityCore.fastTrim(clazz).split(/\s+/)));
    } else {
      _classManip(el, clazz);
    }
  }
}
function hasClass(el, clazz) {
  if (el.classList) {
    return el.classList.contains(clazz);
  } else {
    return _getClassName(el).indexOf(clazz) !== -1;
  }
}
function removeClass(el, clazz) {
  if (el != null && clazz != null && clazz.length > 0) {
    if (el.classList) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(communityCore.fastTrim(clazz).split(/\s+/)));
    } else {
      _classManip(el, null, clazz);
    }
  }
}
function toggleClass(el, clazz) {
  if (el != null && clazz != null && clazz.length > 0) {
    if (el.classList) {
      el.classList.toggle(clazz);
    } else {
      if (this.hasClass(el, clazz)) {
        this.removeClass(el, clazz);
      } else {
        this.addClass(el, clazz);
      }
    }
  }
}
function createElement(tag, style, clazz, atts) {
  return createElementNS(null, tag, style, clazz, atts);
}
function createElementNS(ns, tag, style, clazz, atts) {
  var e = ns == null ? document.createElement(tag) : document.createElementNS(ns, tag);
  var i;
  style = style || {};

  for (i in style) {
    e.style[i] = style[i];
  }

  if (clazz) {
    e.className = clazz;
  }

  atts = atts || {};

  for (i in atts) {
    e.setAttribute(i, "" + atts[i]);
  }

  return e;
}
function offsetRelativeToRoot(el) {
  var box = el.getBoundingClientRect(),
      body = document.body,
      docElem = document.documentElement,
      // (2)
  scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
      scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
      // (3)
  clientTop = docElem.clientTop || body.clientTop || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      // (4)
  top = box.top + scrollTop - clientTop,
      left = box.left + scrollLeft - clientLeft;
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

var svgAttributeMap = {
  "stroke-linejoin": "stroke-linejoin",
  "stroke-dashoffset": "stroke-dashoffset",
  "stroke-linecap": "stroke-linecap"
};
var STROKE_DASHARRAY = "stroke-dasharray";
var DASHSTYLE = "dashstyle";
var FILL = "fill";
var STROKE = "stroke";
var STROKE_WIDTH = "stroke-width";
var LINE_WIDTH = "strokeWidth";
var ns = {
  svg: "http://www.w3.org/2000/svg"
};
function _attr(node, attributes) {
  for (var i in attributes) {
    node.setAttribute(i, "" + attributes[i]);
  }
}
function _node(name, attributes) {
  attributes = attributes || {};
  attributes.version = "1.1";
  attributes.xmlns = ns.svg;
  return createElementNS(ns.svg, name, null, null, attributes);
}
function _pos(d) {
  return "position:absolute;left:" + d[0] + "px;top:" + d[1] + "px";
}
function _applyStyles(parent, node, style, dimensions, uiComponent) {
  node.setAttribute(FILL, style.fill ? style.fill : communityCore.NONE);
  node.setAttribute(STROKE, style.stroke ? style.stroke : communityCore.NONE);

  if (style.strokeWidth) {
    node.setAttribute(STROKE_WIDTH, style.strokeWidth);
  } // in SVG there is a stroke-dasharray attribute we can set, and its syntax looks like
  // the syntax in VML but is actually kind of nasty: values are given in the pixel
  // coordinate space, whereas in VML they are multiples of the width of the stroked
  // line, which makes a lot more sense.  for that reason, jsPlumb is supporting both
  // the native svg 'stroke-dasharray' attribute, and also the 'dashstyle' concept from
  // VML, which will be the preferred method.  the code below this converts a dashstyle
  // attribute given in terms of stroke width into a pixel representation, by using the
  // stroke's lineWidth.


  if (style[DASHSTYLE] && style[LINE_WIDTH] && !style[STROKE_DASHARRAY]) {
    var sep = style[DASHSTYLE].indexOf(",") === -1 ? " " : ",",
        parts = style[DASHSTYLE].split(sep),
        styleToUse = "";
    parts.forEach(function (p) {
      styleToUse += Math.floor(p * style.strokeWidth) + sep;
    });
    node.setAttribute(STROKE_DASHARRAY, styleToUse);
  } else if (style[STROKE_DASHARRAY]) {
    node.setAttribute(STROKE_DASHARRAY, style[STROKE_DASHARRAY]);
  } // extra attributes such as join type, dash offset.


  for (var i in svgAttributeMap) {
    if (style[i]) {
      node.setAttribute(svgAttributeMap[i], style[i]);
    }
  }
}
function _appendAtIndex(svg, path, idx) {
  if (svg.childNodes.length > idx) {
    svg.insertBefore(path, svg.childNodes[idx]);
  } else {
    svg.appendChild(path);
  }
}

function _isInsideParent(instance, _el, pos) {
  var p = _el.parentNode,
      s = instance.getSize(p),
      ss = instance.getSize(_el),
      leftEdge = pos[0],
      rightEdge = leftEdge + ss[0],
      topEdge = pos[1],
      bottomEdge = topEdge + ss[1];
  return rightEdge > 0 && leftEdge < s[0] && bottomEdge > 0 && topEdge < s[1];
}

var CLASS_DRAG_SELECTED = "jtk-drag-selected";
var CLASS_DRAG_ACTIVE = "jtk-drag-active";
var CLASS_DRAGGED = "jtk-dragged";
var CLASS_DRAG_HOVER = "jtk-drag-hover";
var ATTR_NOT_DRAGGABLE = "jtk-not-draggable";
var EVT_DRAG_MOVE = "drag:move";
var EVT_DRAG_STOP = "drag:stop";
var EVT_DRAG_START = "drag:start";
var EVT_MOUSEDOWN = "mousedown";
var EVT_MOUSEUP = "mouseup";
var EVT_REVERT = "revert";
var EVT_ZOOM = "zoom";
var DragManager =
/*#__PURE__*/
function () {
  // elementids mapped to the draggable to which they belong.
  function DragManager(instance) {
    var _this = this;

    _classCallCheck(this, DragManager);

    this.instance = instance;

    _defineProperty(this, "collicat", void 0);

    _defineProperty(this, "drag", void 0);

    _defineProperty(this, "_draggables", {});

    _defineProperty(this, "_dlist", []);

    _defineProperty(this, "_elementsWithEndpoints", {});

    _defineProperty(this, "_draggablesForElements", {});

    _defineProperty(this, "handlers", []);

    _defineProperty(this, "_filtersToAdd", []);

    // create a delegated drag handler
    this.collicat = this.instance.createDragManager({
      zoom: this.instance.getZoom(),
      css: {
        noSelect: this.instance.dragSelectClass,
        delegatedDraggable: "jtk-delegated-draggable",
        droppable: "jtk-droppable",
        draggable: "jtk-draggable",
        drag: "jtk-drag",
        selected: "jtk-drag-selected",
        active: "jtk-drag-active",
        hover: "jtk-drag-hover",
        ghostProxy: "jtk-ghost-proxy"
      },
      revert: function revert(dragEl, pos) {
        var _el = dragEl; // if drag el not removed from DOM (pruned by a group), and it has a group which has revert:true, then revert.

        return _el.parentNode != null && _el[communityCore.PARENT_GROUP_KEY] && _el[communityCore.PARENT_GROUP_KEY].revert ? !_isInsideParent(_this.instance, _el, pos) : false;
      }
    });
    this.instance.bind(EVT_ZOOM, function (z) {
      _this.collicat.setZoom(z);
    });
  }

  _createClass(DragManager, [{
    key: "addHandler",
    value: function addHandler(handler, dragOptions) {
      var _this2 = this;

      var o = communityCore.extend({
        selector: handler.selector
      }, dragOptions || {});
      this.handlers.push(handler);
      o.start = communityCore.wrap(o.start, function (p) {
        return handler.onStart(p);
      });
      o.drag = communityCore.wrap(o.drag, function (p) {
        return handler.onDrag(p);
      });
      o.stop = communityCore.wrap(o.stop, function (p) {
        return handler.onStop(p);
      });

      o.beforeStart = (handler.onBeforeStart || function (p) {}).bind(handler);

      o.dragInit = function (el) {
        return handler.onDragInit(el);
      };

      o.dragAbort = function (el) {
        return handler.onDragAbort(el);
      };

      if (handler.useGhostProxy) {
        o.useGhostProxy = handler.useGhostProxy;
        o.makeGhostProxy = handler.makeGhostProxy;
      }

      if (this.drag == null) {
        this.drag = this.collicat.draggable(this.instance.getContainer(), o);

        this._filtersToAdd.forEach(function (filterToAdd) {
          return _this2.drag.addFilter(filterToAdd[0], filterToAdd[1]);
        });

        this.drag.on(EVT_REVERT, function (el) {
          _this2.instance.revalidate(el);
        });
      } else {
        this.drag.addSelector(o);
      }

      handler.init(this.drag);
    }
  }, {
    key: "addFilter",
    value: function addFilter(filter, exclude) {
      if (this.drag == null) {
        this._filtersToAdd.push([filter, exclude === true]);
      } else {
        this.drag.addFilter(filter, exclude);
      }
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      if (this.drag != null) {
        this.drag.removeFilter(filter);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.handlers.forEach(function (handler) {
        handler.reset();
      });

      if (this.drag != null) {
        this.collicat.destroyDraggable(this.instance.getContainer());
      }

      delete this.drag;
    }
  }]);

  return DragManager;
}();

var ElementDragHandler =
/*#__PURE__*/
function () {
  function ElementDragHandler(instance) {
    _classCallCheck(this, ElementDragHandler);

    this.instance = instance;

    _defineProperty(this, "selector", "> [jtk-managed]");

    _defineProperty(this, "_dragOffset", null);

    _defineProperty(this, "_groupLocations", []);

    _defineProperty(this, "_intersectingGroups", []);

    _defineProperty(this, "_currentDragParentGroup", null);

    _defineProperty(this, "_posseByElementIdMap", {});

    _defineProperty(this, "_posseMap", {});

    _defineProperty(this, "_currentPosse", null);

    _defineProperty(this, "_currentPosseOffsets", new Map());

    _defineProperty(this, "_currentPosseSizes", new Map());

    _defineProperty(this, "_dragSelection", []);

    _defineProperty(this, "_dragSelectionOffsets", new Map());

    _defineProperty(this, "_dragSizes", new Map());

    _defineProperty(this, "drag", void 0);
  }

  _createClass(ElementDragHandler, [{
    key: "onDragInit",
    value: function onDragInit(el) {
      return null;
    }
  }, {
    key: "onDragAbort",
    value: function onDragAbort(el) {
      return null;
    }
  }, {
    key: "onStop",
    value: function onStop(params) {
      var _this = this;

      var _one = function _one(_el, pos) {
        var redrawResult = _this.instance._draw(_el, pos);

        _this.instance.fire(EVT_DRAG_STOP, {
          el: _el,
          e: params.e,
          pos: pos,
          r: redrawResult
        });

        _this.instance.removeClass(_el, CLASS_DRAGGED);

        _this.instance.select({
          source: _el
        }).removeClass(_this.instance.elementDraggingClass + " " + _this.instance.sourceElementDraggingClass, true);

        _this.instance.select({
          target: _el
        }).removeClass(_this.instance.elementDraggingClass + " " + _this.instance.targetElementDraggingClass, true);
      };

      var dragElement = params.drag.getDragElement();

      _one(dragElement, {
        left: params.finalPos[0],
        top: params.finalPos[1]
      });

      this._dragSelectionOffsets.forEach(function (v, k) {
        if (v[1] !== params.el) {
          var pp = {
            left: params.finalPos[0] + v[0].left,
            top: params.finalPos[1] + v[0].top
          };

          _one(v[1], pp);
        }
      }); // do the contents of the drag selection


      if (this._intersectingGroups.length > 0) {
        // we only support one for the time being
        var targetGroup = this._intersectingGroups[0].group;
        var intersectingElement = this._intersectingGroups[0].intersectingElement;
        var currentGroup = intersectingElement[communityCore.PARENT_GROUP_KEY];

        if (currentGroup !== targetGroup) {
          if (currentGroup != null) {
            if (currentGroup.overrideDrop(intersectingElement, targetGroup)) {
              return;
            }
          }

          this.instance.groupManager.addToGroup(targetGroup, intersectingElement, false);
        }
      }

      this._cleanup();
    }
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      var _this2 = this;

      this._groupLocations.forEach(function (groupLoc) {
        _this2.instance.removeClass(groupLoc.el, CLASS_DRAG_ACTIVE);

        _this2.instance.removeClass(groupLoc.el, CLASS_DRAG_HOVER);
      });

      this._currentDragParentGroup = null;
      this._groupLocations.length = 0;
      this.instance.hoverSuspended = false;
      this._dragOffset = null;

      this._dragSelectionOffsets.clear();

      this._dragSizes.clear();

      this._currentPosseOffsets.clear();

      this._currentPosseSizes.clear();

      this._currentPosse = null;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "init",
    value: function init(drag) {
      this.drag = drag;
    }
  }, {
    key: "onDrag",
    value: function onDrag(params) {
      var _this3 = this;

      var el = params.drag.getDragElement();
      var finalPos = params.finalPos || params.pos;
      var elSize = this.instance.getSize(el);
      var ui = {
        left: finalPos[0],
        top: finalPos[1]
      };
      this._intersectingGroups.length = 0;

      if (this._dragOffset != null) {
        ui.left += this._dragOffset.left;
        ui.top += this._dragOffset.top;
      }

      var _one = function _one(el, bounds, e) {
        // keep track of the ancestors of each intersecting group we find. if
        var ancestorsOfIntersectingGroups = new Set();

        _this3._groupLocations.forEach(function (groupLoc) {
          if (!ancestorsOfIntersectingGroups.has(groupLoc.group.id) && _this3.instance.geometry.intersects(bounds, groupLoc.r)) {
            // when a group intersects it should only get the hover class if one of its descendants does not also intersect.
            // groupLocations is already sorted by level of nesting
            // we don't add the css class to the current group (but we do still add the group to the list of intersecting groups)
            if (groupLoc.group !== _this3._currentDragParentGroup) {
              _this3.instance.addClass(groupLoc.el, CLASS_DRAG_HOVER);
            }

            _this3._intersectingGroups.push({
              group: groupLoc.group,
              intersectingElement: params.drag.getDragElement(true),
              d: 0
            }); // store all this group's ancestor ids in a set, which will preclude them from being added as an intersecting group


            _this3.instance.groupManager.getAncestors(groupLoc.group).forEach(function (g) {
              return ancestorsOfIntersectingGroups.add(g.id);
            });
          } else {
            _this3.instance.removeClass(groupLoc.el, CLASS_DRAG_HOVER);
          }
        });

        _this3.instance._draw(el, {
          left: bounds.x,
          top: bounds.y
        }, null);

        _this3.instance.fire(EVT_DRAG_MOVE, {
          el: el,
          e: params.e,
          pos: {
            left: bounds.x,
            top: bounds.y
          }
        });
      };

      var elBounds = {
        x: ui.left,
        y: ui.top,
        w: elSize[0],
        h: elSize[1]
      };

      _one(el, elBounds, params.e);

      this._dragSelectionOffsets.forEach(function (v, k) {
        var s = _this3._dragSizes.get(k);

        var _b = {
          x: elBounds.x + v[0].left,
          y: elBounds.y + v[0].top,
          w: s[0],
          h: s[1]
        };
        v[1].style.left = _b.x + "px";
        v[1].style.top = _b.y + "px";

        _one(v[1], _b, params.e);
      });

      this._currentPosseOffsets.forEach(function (v, k) {
        var s = _this3._currentPosseSizes.get(k);

        var _b = {
          x: elBounds.x + v[0].left,
          y: elBounds.y + v[0].top,
          w: s[0],
          h: s[1]
        };
        v[1].style.left = _b.x + "px";
        v[1].style.top = _b.y + "px";

        _one(v[1], _b, params.e);
      });
    }
  }, {
    key: "onStart",
    value: function onStart(params) {
      var _this4 = this;

      var el = params.drag.getDragElement();
      var elOffset = this.instance.getOffset(el);

      if (el._jsPlumbParentGroup) {
        this._dragOffset = this.instance.getOffset(el.offsetParent);
        this._currentDragParentGroup = el._jsPlumbParentGroup;
      }

      var cont = true;
      var nd = el.getAttribute(ATTR_NOT_DRAGGABLE);

      if (this.instance.elementsDraggable === false || nd != null && nd !== "false") {
        cont = false;
      }

      if (cont) {
        this._groupLocations.length = 0;
        this._intersectingGroups.length = 0;
        this.instance.hoverSuspended = true; // reset the drag selection offsets array

        this._dragSelectionOffsets.clear();

        this._dragSizes.clear();

        this._dragSelection.forEach(function (jel) {
          var id = _this4.instance.getId(jel);

          var off = _this4.instance.getOffset(jel);

          _this4._dragSelectionOffsets.set(id, [{
            left: off.left - elOffset.left,
            top: off.top - elOffset.top
          }, jel]);

          _this4._dragSizes.set(id, _this4.instance.getSize(jel));
        });

        var _one = function _one(_el) {
          // if drag el not a group
          if (!_el._isJsPlumbGroup || _this4.instance.allowNestedGroups) {
            var isNotInAGroup = !_el[communityCore.PARENT_GROUP_KEY];
            var membersAreDroppable = isNotInAGroup || _el[communityCore.PARENT_GROUP_KEY].dropOverride !== true;
            var isGhostOrNotConstrained = !isNotInAGroup && (_el[communityCore.PARENT_GROUP_KEY].ghost || _el[communityCore.PARENT_GROUP_KEY].constrain !== true); // in order that there could be other groups this element can be dragged to, it must satisfy these conditions:
            // it's not in a group, OR
            // it hasnt mandated its element can't be dropped on other groups
            // it hasn't mandated its elements are constrained to the group, unless ghost proxying is turned on.

            if (isNotInAGroup || membersAreDroppable && isGhostOrNotConstrained) {
              _this4.instance.groupManager.forEach(function (group) {
                // prepare a list of potential droppable groups.
                // get the group pertaining to the dragged element. this is null if the element being dragged is not a UIGroup.
                var elementGroup = _el[communityCore.GROUP_KEY];

                if (group.droppable !== false && group.enabled !== false && _el[communityCore.GROUP_KEY] !== group && !_this4.instance.groupManager.isDescendant(group, elementGroup)) {
                  var groupEl = group.el,
                      s = _this4.instance.getSize(groupEl),
                      o = _this4.instance.getOffset(groupEl),
                      boundingRect = {
                    x: o.left,
                    y: o.top,
                    w: s[0],
                    h: s[1]
                  };

                  _this4._groupLocations.push({
                    el: groupEl,
                    r: boundingRect,
                    group: group
                  }); // dont add the active class to the element/group's current parent (if any)


                  if (group !== _this4._currentDragParentGroup) {
                    _this4.instance.addClass(groupEl, CLASS_DRAG_ACTIVE);
                  }
                }
              }); // sort group locations so that nested groups will be processed first in a drop


              _this4._groupLocations.sort(function (a, b) {
                if (_this4.instance.groupManager.isDescendant(a.group, b.group)) {
                  return -1;
                } else if (_this4.instance.groupManager.isAncestor(b.group, a.group)) {
                  return 1;
                } else {
                  return 0;
                }
              });
            }
          }

          _this4.instance.select({
            source: _el
          }).addClass(_this4.instance.elementDraggingClass + " " + _this4.instance.sourceElementDraggingClass, true);

          _this4.instance.select({
            target: _el
          }).addClass(_this4.instance.elementDraggingClass + " " + _this4.instance.targetElementDraggingClass, true); // if this event listener returns false it will be piped all the way back to the drag manager and cause
          // the drag to be aborted.


          return _this4.instance.fire(EVT_DRAG_START, {
            el: _el,
            e: params.e
          });
        };

        var elId = this.instance.getId(el);
        this._currentPosse = this._posseByElementIdMap[elId];

        if (this._currentPosse && !this.isActivePosseMember(this._currentPosse, el)) {
          // clear the current posse if this element is not an active member, ie. cannot instigate a drag for all members.
          this._currentPosse = null;
        }

        var dragStartReturn = _one(el); // process the original drag element.


        if (dragStartReturn === false) {
          this._cleanup();

          return false;
        }

        if (this._currentPosse != null) {
          this._currentPosseOffsets.clear();

          this._currentPosseSizes.clear();

          this._currentPosse.members.forEach(function (jel) {
            var off = _this4.instance.getOffset(jel.el);

            _this4._currentPosseOffsets.set(jel.elId, [{
              left: off.left - elOffset.left,
              top: off.top - elOffset.top
            }, jel.el]);

            _this4._currentPosseSizes.set(jel.elId, _this4.instance.getSize(jel.el));

            _one(jel.el);
          });
        }
      }

      return cont;
    }
  }, {
    key: "addToDragSelection",
    value: function addToDragSelection(el) {
      var candidate = this.instance.getElement(el);

      if (this._dragSelection.indexOf(candidate) === -1) {
        this.instance.addClass(candidate, CLASS_DRAG_SELECTED);

        this._dragSelection.push(candidate);
      }
    }
  }, {
    key: "clearDragSelection",
    value: function clearDragSelection() {
      var _this5 = this;

      this._dragSelection.forEach(function (el) {
        return _this5.instance.removeClass(el, CLASS_DRAG_SELECTED);
      });

      this._dragSelection.length = 0;
    }
  }, {
    key: "removeFromDragSelection",
    value: function removeFromDragSelection(el) {
      var _this6 = this;

      var domElement = this.instance.getElement(el);
      this._dragSelection = this._dragSelection.filter(function (e) {
        var out = e !== domElement;

        if (!out) {
          _this6.instance.removeClass(e, CLASS_DRAG_SELECTED);
        }

        return out;
      });
    }
  }, {
    key: "toggleDragSelection",
    value: function toggleDragSelection(el) {
      var domElement = this.instance.getElement(el);
      var isInSelection = this._dragSelection.indexOf(domElement) !== -1;

      if (isInSelection) {
        this.removeFromDragSelection(domElement);
      } else {
        this.addToDragSelection(domElement);
      }
    }
  }, {
    key: "getDragSelection",
    value: function getDragSelection() {
      return this._dragSelection;
    }
  }, {
    key: "addToPosse",
    value: function addToPosse(spec) {
      var _this7 = this;

      var details = ElementDragHandler.decodePosseSpec(spec);
      var posse = this._posseMap[details.id];

      if (posse == null) {
        posse = {
          id: details.id,
          members: new Set()
        };
        this._posseMap[details.id] = posse;
      }

      for (var _len = arguments.length, els = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        els[_key - 1] = arguments[_key];
      }

      this.removeFromPosse.apply(this, els);
      els.forEach(function (el) {
        var elId = el.getAttribute("id");
        posse.members.add({
          elId: elId,
          el: el,
          active: details.active
        });
        _this7._posseByElementIdMap[elId] = posse;
      });
    }
  }, {
    key: "removeFromPosse",
    value: function removeFromPosse() {
      var _this8 = this;

      for (var _len2 = arguments.length, els = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        els[_key2] = arguments[_key2];
      }

      els.forEach(function (el) {
        var id = _this8.instance.getId(el);

        var posse = _this8._posseByElementIdMap[id];

        if (posse != null) {
          var s = new Set();
          var p;
          var e = posse.members.values();

          while (!(p = e.next()).done) {
            if (p.value.el !== el) {
              s.add(p.value);
            }
          }

          posse.members = s;
          delete _this8._posseByElementIdMap[id];
        }
      });
    }
  }, {
    key: "setPosseState",
    value: function setPosseState(state) {
      var _this9 = this;

      for (var _len3 = arguments.length, els = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        els[_key3 - 1] = arguments[_key3];
      }

      var elementIds = els.map(function (el) {
        return el.getAttribute("id");
      });
      elementIds.forEach(function (id) {
        communityCore.optional(_this9._posseByElementIdMap[id]).map(function (posse) {
          communityCore.optional(Array.from(posse.members).find(function (m) {
            return m.elId === id;
          })).map(function (member) {
            member.active = state;
          });
        });
      });
    }
  }, {
    key: "isActivePosseMember",
    value: function isActivePosseMember(posse, el) {
      var details = Array.from(posse.members).find(function (m) {
        return m.el === el;
      });

      if (details !== null) {
        return details.active === true;
      } else {
        return false;
      }
    }
  }], [{
    key: "decodePosseSpec",
    value: function decodePosseSpec(spec) {
      if (communityCore.isString(spec)) {
        return {
          id: spec,
          active: true
        };
      } else {
        return {
          id: spec.id,
          active: spec.active
        };
      }
    }
  }]);

  return ElementDragHandler;
}();

var FloatingAnchor =
/*#__PURE__*/
function (_Anchor) {
  _inherits(FloatingAnchor, _Anchor);

  function FloatingAnchor(instance, params) {
    var _this;

    _classCallCheck(this, FloatingAnchor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloatingAnchor).call(this, instance, params)); // this is the anchor that this floating anchor is referenced to for
    // purposes of calculating the orientation.

    _this.instance = instance;

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "refCanvas", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "xDir", void 0);

    _defineProperty(_assertThisInitialized(_this), "yDir", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastResult", void 0);

    _this.ref = params.reference; // the canvas this refers to.

    _this.refCanvas = params.referenceCanvas;
    _this.size = instance.getSize(_this.refCanvas); // these are used to store the current relative position of our
    // anchor wrt the reference anchor. they only indicate
    // direction, so have a value of 1 or -1 (or, very rarely, 0). these
    // values are written by the compute method, and read
    // by the getOrientation method.

    _this.xDir = 0;
    _this.yDir = 0; // temporary member used to store an orientation when the floating
    // anchor is hovering over another anchor.
    // clear from parent. we want floating anchor orientation to always be computed.

    _this.orientation = null;
    _this._lastResult = null; // set these to 0 each; they are used by certain types of connectors in the loopback case,
    // when the connector is trying to clear the element it is on. but for floating anchor it's not
    // very important.

    _this.x = 0;
    _this.y = 0;
    _this.isFloating = true;
    return _this;
  }

  _createClass(FloatingAnchor, [{
    key: "compute",
    value: function compute(params) {
      var xy = params.xy;
      this._lastResult = [xy[0] + this.size[0] / 2, xy[1] + this.size[1] / 2, 0, 0]; // return origin of the element. we may wish to improve this so that any object can be the drag proxy.

      return this._lastResult;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation(_endpoint) {
      if (this.orientation) {
        return this.orientation;
      } else {
        var o = this.ref.getOrientation(_endpoint); // here we take into account the orientation of the other
        // anchor: if it declares zero for some direction, we declare zero too. this might not be the most awesome. perhaps we can come
        // up with a better way. it's just so that the line we draw looks like it makes sense. maybe this wont make sense.

        return [Math.abs(o[0]) * this.xDir * -1, Math.abs(o[1]) * this.yDir * -1];
      }
    }
    /**
     * notification the endpoint associated with this anchor is hovering
     * over another anchor; we want to assume that anchor's orientation
     * for the duration of the hover.
     */

  }, {
    key: "over",
    value: function over(anchor, endpoint) {
      this.orientation = anchor.getOrientation(endpoint);
    }
    /**
     * notification the endpoint associated with this anchor is no
     * longer hovering over another anchor; we should resume calculating
     * orientation as we normally do.
     */

  }, {
    key: "out",
    value: function out() {
      this.orientation = null;
    }
  }, {
    key: "getCurrentLocation",
    value: function getCurrentLocation(params) {
      return this._lastResult == null ? this.compute(params) : this._lastResult;
    }
  }]);

  return FloatingAnchor;
}(communityCore.Anchor);

function _makeFloatingEndpoint(paintStyle, referenceAnchor, endpoint, referenceCanvas, sourceElement, instance, scope) {
  var floatingAnchor = new FloatingAnchor(instance, {
    reference: referenceAnchor,
    referenceCanvas: referenceCanvas
  }); //setting the scope here should not be the way to fix that mootools issue.  it should be fixed by not
  // adding the floating endpoint as a droppable.  that makes more sense anyway!
  // TRANSIENT MANAGE

  var ep = instance.newEndpoint({
    paintStyle: paintStyle,
    endpoint: endpoint,
    anchor: floatingAnchor,
    source: sourceElement,
    scope: scope
  });
  ep.paint({});
  return ep;
}

function selectorFilter(evt, _el, selector, _instance, negate) {
  var t = evt.target || evt.srcElement,
      ok = false,
      sel = _instance.getSelector(_el, selector);

  for (var j = 0; j < sel.length; j++) {
    if (sel[j] === t) {
      ok = true;
      break;
    }
  }

  return negate ? !ok : ok;
}

var DRAG_ACTIVE_OR_HOVER_SELECTOR = communityCore.cls(CLASS_DRAG_ACTIVE, CLASS_DRAG_HOVER);
var EndpointDragHandler =
/*#__PURE__*/
function () {
  function EndpointDragHandler(instance) {
    _classCallCheck(this, EndpointDragHandler);

    this.instance = instance;

    _defineProperty(this, "jpc", void 0);

    _defineProperty(this, "existingJpc", void 0);

    _defineProperty(this, "ep", void 0);

    _defineProperty(this, "endpointRepresentation", void 0);

    _defineProperty(this, "_activeDefinition", void 0);

    _defineProperty(this, "placeholderInfo", {
      id: null,
      element: null
    });

    _defineProperty(this, "floatingElement", void 0);

    _defineProperty(this, "floatingEndpoint", void 0);

    _defineProperty(this, "_stopped", void 0);

    _defineProperty(this, "inPlaceCopy", void 0);

    _defineProperty(this, "endpointDropTargets", []);

    _defineProperty(this, "currentDropTarget", null);

    _defineProperty(this, "payload", void 0);

    _defineProperty(this, "floatingConnections", {});

    _defineProperty(this, "_forceReattach", void 0);

    _defineProperty(this, "_forceDetach", void 0);

    _defineProperty(this, "mousedownHandler", void 0);

    _defineProperty(this, "mouseupHandler", void 0);

    _defineProperty(this, "selector", ".jtk-endpoint");

    var container = instance.getContainer();
    this.mousedownHandler = this._mousedownHandler.bind(this);
    this.mouseupHandler = this._mouseupHandler.bind(this);
    instance.on(container, EVT_MOUSEDOWN, "[jtk-source]", this.mousedownHandler);
    instance.on(container, "mouseup", "[jtk-source]", this.mouseupHandler);
  }

  _createClass(EndpointDragHandler, [{
    key: "_mousedownHandler",
    value: function _mousedownHandler(e) {
      if (e.which === 3 || e.button === 2) {
        return;
      }

      var targetEl = findParent(e.target || e.srcElement, "[jtk-managed]", this.instance.getContainer());

      if (targetEl == null) {
        return;
      }

      var elid = this.instance.getId(targetEl),
          sourceDef = this._getSourceDefinition(targetEl, e),
          sourceElement = e.currentTarget,
          def;

      if (sourceDef) {
        consume(e);
        this._activeDefinition = sourceDef; // at this point we have a mousedown event on an element that is configured as a drag source.

        def = sourceDef.def; // if maxConnections reached

        var sourceCount = this.instance.select({
          source: elid
        }).length;

        if (sourceDef.maxConnections >= 0 && sourceCount >= sourceDef.maxConnections) {
          consume(e); // TODO this is incorrect - "self"

          if (def.onMaxConnections) {
            def.onMaxConnections({
              element: self,
              maxConnections: sourceDef.maxConnections
            }, e);
          }

          e.stopImmediatePropagation && e.stopImmediatePropagation();
          return false;
        } // find the position on the element at which the mouse was pressed; this is where the endpoint
        // will be located.


        var elxy = BrowserJsPlumbInstance.getPositionOnElement(e, targetEl, this.instance.getZoom()); // we need to override the anchor in here, and force 'isSource', but we don't want to mess with
        // the params passed in, because after a connection is established we're going to reset the endpoint
        // to have the anchor we were given.

        var tempEndpointParams = {};
        communityCore.extend(tempEndpointParams, def);
        tempEndpointParams.isTemporarySource = true;
        tempEndpointParams.anchor = [elxy[0], elxy[1], 0, 0];

        if (def.scope) {
          tempEndpointParams.scope = def.scope;
        } // add an endpoint to the element that is the connection source, using the anchor that will position it where
        // the mousedown event occurred.


        this.ep = this.instance.addEndpoint(targetEl, tempEndpointParams); // mark delete on empty

        this.ep.deleteOnEmpty = true; // keep a reference to the anchor we want to use if the connection is finalised.

        this.ep._originalAnchor = def.anchor || this.instance.Defaults.anchor; // if unique endpoint and it's already been created, push it onto the endpoint we create. at the end
        // of a successful connection we'll switch to that endpoint.
        // TODO this is the same code as the programmatic endpoints create on line 1050 ish

        if (def.uniqueEndpoint) {
          if (!sourceDef.endpoint) {
            sourceDef.endpoint = this.ep;
            this.ep.deleteOnEmpty = false;
          } else {
            this.ep.finalEndpoint = sourceDef.endpoint;
          }
        } // add to the list of endpoints that are a candidate for deletion if no activity has occurred on them.
        // a mouseup listener on the canvas cleans anything up from this list if it has no connections.
        // the list is then cleared.


        sourceElement._jsPlumbOrphanedEndpoints = sourceElement._jsPlumbOrphanedEndpoints || [];

        sourceElement._jsPlumbOrphanedEndpoints.push(this.ep); // optionally check for attributes to extract from the source element


        var payload = {};

        if (def.extract) {
          for (var att in def.extract) {
            var v = targetEl.getAttribute(att);

            if (v) {
              payload[def.extract[att]] = v;
            }
          }
        } // and then trigger its mousedown event, which will kick off a drag, which will start dragging
        // a new connection from this endpoint. The entry point is the `onStart` method in this class.


        this.instance.trigger(this.ep.endpoint.canvas, EVT_MOUSEDOWN, e, payload);
      }
    } //
    // cleans up any endpoints added from a mousedown on a source that did not result in a connection drag
    // replaces what in previous versions was a mousedown/mouseup handler per element.
    //

  }, {
    key: "_mouseupHandler",
    value: function _mouseupHandler(e) {
      var el = e.currentTarget || e.srcElement;

      if (el._jsPlumbOrphanedEndpoints) {
        communityCore.each(el._jsPlumbOrphanedEndpoints, this.instance.maybePruneEndpoint.bind(this.instance));
        el._jsPlumbOrphanedEndpoints.length = 0;
      }

      this._activeDefinition = null;
    }
    /**
     * At the beginning of a drag, this method can be used to perform some setup in a handler, and if it returns a DOM
     * element, that element will be the one used for dragging.
     * @param el The element that will be dragged unless we return something different.
     */

  }, {
    key: "onDragInit",
    value: function onDragInit(el) {
      var ipco = this.instance.getOffset(el),
          ips = this.instance.getSize(el);

      this._makeDraggablePlaceholder(ipco, ips);

      this.placeholderInfo.element.jtk = el.jtk;
      return this.placeholderInfo.element;
    }
  }, {
    key: "onDragAbort",
    value: function onDragAbort(el) {
      this._cleanupDraggablePlaceholder();
    }
    /**
     * Makes the element that is the placeholder for dragging. this element gets `managed` by the instance, and `unmanaged` when dragging
     * ends.
     * @param ipco
     * @param ips
     * @private
     */

  }, {
    key: "_makeDraggablePlaceholder",
    value: function _makeDraggablePlaceholder(ipco, ips) {
      this.placeholderInfo = this.placeholderInfo || {};
      var n = createElement("div", {
        position: "absolute"
      });
      this.instance.appendElement(n, this.instance.getContainer());
      var id = this.instance.getId(n);
      this.instance.setPosition(n, ipco);
      n.style.width = ips[0] + "px";
      n.style.height = ips[1] + "px";
      this.instance.manage(n); // TRANSIENT MANAGE
      // create and assign an id, and initialize the offset.

      this.placeholderInfo.id = id;
      this.placeholderInfo.element = n;
      return n;
    }
  }, {
    key: "_cleanupDraggablePlaceholder",
    value: function _cleanupDraggablePlaceholder() {
      if (this.placeholderInfo.element) {
        this.instance.unmanage(this.placeholderInfo.element, true);
        delete this.placeholderInfo.element;
        delete this.placeholderInfo.id;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var c = this.instance.getContainer();
      this.instance.off(c, EVT_MOUSEUP, this.mouseupHandler);
      this.instance.off(c, EVT_MOUSEDOWN, this.mousedownHandler);
    }
  }, {
    key: "init",
    value: function init(drag) {}
  }, {
    key: "onStart",
    value: function onStart(p) {
      var _this = this;

      this.currentDropTarget = null;
      this._stopped = false;
      var dragEl = p.drag.getDragElement();
      this.endpointRepresentation = dragEl.jtk.endpoint.endpoint;
      this.ep = dragEl.jtk.endpoint;

      if (!this.ep) {
        return false;
      }

      this.jpc = this.ep.connectorSelector(); // -------------------------------- now a bunch of tests about whether or not to proceed -------------------------

      var _continue = true; // if not enabled, return

      if (!this.ep.enabled) {
        _continue = false;
      } // if no connection and we're not a source - or temporarily a source, as is the case with makeSource - return.


      if (this.jpc == null && !this.ep.isSource && !this.ep.isTemporarySource) {
        _continue = false;
      } // otherwise if we're full and not allowed to drag, also return false.


      if (this.ep.isSource && this.ep.isFull() && !(this.jpc != null && this.ep.dragAllowedWhenFull)) {
        _continue = false;
      } // if the connection was setup as not detachable or one of its endpoints
      // was setup as connectionsDetachable = false, or Defaults.connectionsDetachable
      // is set to false...


      if (this.jpc != null && !this.jpc.isDetachable(this.ep)) {
        // .. and the endpoint is full
        if (this.ep.isFull()) {
          _continue = false;
        } else {
          // otherwise, if not full, set the connection to null, and we will now proceed
          // to drag a new connection.
          this.jpc = null;
        }
      }

      var beforeDrag = this.instance.checkCondition(this.jpc == null ? "beforeDrag" : "beforeStartDetach", {
        endpoint: this.ep,
        source: this.ep.element,
        sourceId: this.ep.elementId,
        connection: this.jpc
      });

      if (beforeDrag === false) {
        _continue = false;
      } // else we might have been given some data. we'll pass it in to a new connection as 'data'.
      // here we also merge in the optional payload we were given on mousedown.
      else if (_typeof(beforeDrag) === "object") {
          communityCore.extend(beforeDrag, this.payload || {});
        } else {
          // or if no beforeDrag data, maybe use the payload on its own.
          beforeDrag = this.payload || {};
        }

      if (_continue === false) {
        this._stopped = true;
        return false;
      } // ---------------------------------------------------------------------------------------------------------------------
      // ok to proceed.
      // clear hover for all connections for this endpoint before continuing.


      for (var i = 0; i < this.ep.connections.length; i++) {
        this.instance.setHover(this.ep, false);
      } // clear this list. we'll reconstruct it based on whether its an existing or new connection.s


      this.endpointDropTargets.length = 0;
      this.ep.addClass("endpointDrag");
      this.instance.isConnectionBeingDragged = true; // if we're not full but there was a connection, make it null. we'll create a new one.

      if (this.jpc && !this.ep.isFull() && this.ep.isSource) {
        this.jpc = null;
      }

      this.instance.updateOffset({
        elId: this.ep.elementId
      }); // ----------------    make the element we will drag around, and position it -----------------------------

      var canvasElement = this.endpointRepresentation.canvas; // store the id of the dragging div and the source element. the drop function will pick these up.

      this.instance.setAttributes(canvasElement, {
        "dragId": this.placeholderInfo.id,
        "elId": this.ep.elementId
      }); // ------------------- create an endpoint that will be our floating endpoint ------------------------------------

      var endpointToFloat = this.ep.dragProxy || this.ep.endpoint;

      if (this.ep.dragProxy == null && this.ep.connectionType != null) {
        var aae = this.instance.deriveEndpointAndAnchorSpec(this.ep.connectionType);

        if (aae.endpoints[1]) {
          endpointToFloat = aae.endpoints[1];
        }
      }

      var centerAnchor = communityCore.makeAnchorFromSpec(this.instance, "Center");
      centerAnchor.isFloating = true;
      this.floatingEndpoint = _makeFloatingEndpoint(this.ep.getPaintStyle(), centerAnchor, endpointToFloat, canvasElement, this.placeholderInfo.element, this.instance, this.ep.scope);
      var _savedAnchor = this.floatingEndpoint.anchor;
      this.floatingEndpoint.deleteOnEmpty = true;
      this.floatingElement = this.floatingEndpoint.endpoint.canvas;
      var scope = this.ep.scope;
      var boundingRect; // get the list of potential drop targets for this endpoint, which excludes the source of the new connection.

      this.instance.getContainer().querySelectorAll(".jtk-endpoint[jtk-scope-" + this.ep.scope + "]").forEach(function (candidate) {
        if ((_this.jpc != null || candidate !== canvasElement) && candidate !== _this.floatingElement) {
          var o = _this.instance.getOffset(candidate),
              s = _this.instance.getSize(candidate);

          boundingRect = {
            x: o.left,
            y: o.top,
            w: s[0],
            h: s[1]
          };

          _this.endpointDropTargets.push({
            el: candidate,
            r: boundingRect,
            endpoint: candidate.jtk.endpoint
          });

          _this.instance.addClass(candidate, CLASS_DRAG_ACTIVE);
        }
      }); // at this point we are in fact uncertain about whether or not the given endpoint is a source/target. it may not have been
      // specifically configured as one

      var selectors = [];
      var isSourceDrag = this.jpc && this.jpc.endpoints[0] === this.ep;

      if (!isSourceDrag) {
        selectors.push("[jtk-target][jtk-scope-" + this.ep.scope + "]");
      } else {
        selectors.push("[jtk-source][jtk-scope-" + this.ep.scope + "]");
      }

      this.instance.getContainer().querySelectorAll(selectors.join(",")).forEach(function (candidate) {
        var o = _this.instance.getOffset(candidate),
            s = _this.instance.getSize(candidate);

        boundingRect = {
          x: o.left,
          y: o.top,
          w: s[0],
          h: s[1]
        };
        var d = {
          el: candidate,
          r: boundingRect // look for at least one target definition that is not disabled on the given element.

        };
        var targetDefinitionIdx = isSourceDrag ? -1 : communityCore.findWithFunction(candidate._jsPlumbTargetDefinitions, function (tdef) {
          return tdef.enabled !== false && (tdef.def.allowLoopback !== false || candidate !== _this.ep.element) && (_this._activeDefinition == null || _this._activeDefinition.def.allowLoopback !== false || candidate !== _this.ep.element);
        }); // look for at least one source definition that is not disabled on the given element.

        var sourceDefinitionIdx = isSourceDrag ? communityCore.findWithFunction(candidate._jsPlumbSourceDefinitions, function (sdef) {
          return sdef.enabled !== false && (sdef.def.allowLoopback !== false || candidate !== _this.ep.element) && (_this._activeDefinition == null || _this._activeDefinition.def.allowLoopback !== false || candidate !== _this.ep.element);
        }) : -1; // if there is at least one enabled target definition (if appropriate), add this element to the drop targets

        if (targetDefinitionIdx !== -1) {
          if (candidate._jsPlumbTargetDefinitions[targetDefinitionIdx].def.rank != null) {
            d.rank = candidate._jsPlumbTargetDefinitions[targetDefinitionIdx].def.rank;
          }

          _this.endpointDropTargets.push(d);

          _this.instance.addClass(candidate, CLASS_DRAG_ACTIVE); // TODO get from defaults.

        } // if there is at least one enabled source definition (if appropriate), add this element to the drop targets


        if (sourceDefinitionIdx !== -1) {
          if (candidate._jsPlumbSourceDefinitions[sourceDefinitionIdx].def.rank != null) {
            d.rank = candidate._jsPlumbSourceDefinitions[sourceDefinitionIdx].def.rank;
          }

          _this.endpointDropTargets.push(d);

          _this.instance.addClass(candidate, CLASS_DRAG_ACTIVE); // TODO get from defaults.

        }
      });
      this.endpointDropTargets.sort(function (a, b) {
        if (a.el[communityCore.IS_GROUP_KEY] && !b.el[communityCore.IS_GROUP_KEY]) {
          return 1;
        } else if (!a.el[communityCore.IS_GROUP_KEY] && b.el[communityCore.IS_GROUP_KEY]) {
          return -1;
        } else {
          if (a.rank != null && b.rank != null) {
            if (a.rank > b.rank) {
              return -1;
            } else if (a.rank < b.rank) {
              return 1;
            } else ;
          } else {
            return 0;
          }
        }
      });
      this.instance.setHover(this.ep, false);

      if (this.jpc == null) {
        // create a connection. one end is this endpoint, the other is a floating endpoint.
        this.jpc = this.instance._newConnection({
          sourceEndpoint: this.ep,
          targetEndpoint: this.floatingEndpoint,
          source: this.ep.element,
          // for makeSource with parent option.  ensure source element is represented correctly.
          target: this.placeholderInfo.element,
          anchors: [this.ep.anchor, this.floatingEndpoint.anchor],
          paintStyle: this.ep.connectorStyle,
          // this can be null. Connection will use the default.
          hoverPaintStyle: this.ep.connectorHoverStyle,
          connector: this.ep.connector,
          // this can also be null. Connection will use the default.
          overlays: this.ep.connectorOverlays,
          type: this.ep.connectionType,
          cssClass: this.ep.connectorClass,
          hoverClass: this.ep.connectorHoverClass,
          scope: scope,
          data: beforeDrag
        });
        this.jpc.pending = true;
        this.jpc.addClass(this.instance.draggingClass);
        this.floatingEndpoint.addClass(this.instance.draggingClass);
        this.floatingEndpoint.anchor = _savedAnchor; // fire an event that informs that a connection is being dragged

        this.instance.fire("connectionDrag", this.jpc); // register the new connection on the drag manager. This connection, at this point, is 'pending',
        // and has as its target a temporary element (the 'placeholder'). If the connection subsequently
        // becomes established, the anchor manager is informed that the target of the connection has
        // changed.
        // TODO is this still necessary.

        this.instance.router.newConnection(this.jpc);
      } else {
        this.existingJpc = true;
        this.instance.setHover(this.jpc, false); // new anchor idx

        var anchorIdx = this.jpc.endpoints[0].id === this.ep.id ? 0 : 1; // detach from the connection while dragging is occurring. mark as a 'transient' detach, ie. dont delete
        // the endpoint if there are no other connections and it would otherwise have been cleaned up.

        this.ep.detachFromConnection(this.jpc, null, true); // attach the connection to the floating endpoint.

        this.floatingEndpoint.addConnection(this.jpc); // fire an event that informs that a connection is being dragged. we do this before
        // replacing the original target with the floating element info.

        this.instance.fire(communityCore.EVENT_CONNECTION_DRAG, this.jpc); // now we replace ourselves with the temporary div we created above

        this.instance.sourceOrTargetChanged(this.jpc.endpoints[anchorIdx].elementId, this.placeholderInfo.id, this.jpc, this.placeholderInfo.element, anchorIdx); // store the original endpoint and assign the new floating endpoint for the drag.

        this.jpc.suspendedEndpoint = this.jpc.endpoints[anchorIdx]; // PROVIDE THE SUSPENDED ELEMENT, BE IT A SOURCE OR TARGET (ISSUE 39)

        this.jpc.suspendedElement = this.jpc.endpoints[anchorIdx].element;
        this.jpc.suspendedElementId = this.jpc.endpoints[anchorIdx].elementId;
        this.jpc.suspendedElementType = anchorIdx === 0 ? communityCore.SOURCE : communityCore.TARGET;
        this.instance.setHover(this.jpc.suspendedEndpoint, false);
        this.floatingEndpoint.referenceEndpoint = this.jpc.suspendedEndpoint;
        this.jpc.endpoints[anchorIdx] = this.floatingEndpoint;
        this.jpc.addClass(this.instance.draggingClass);
        this.jpc.floatingIndex = anchorIdx;
        this.jpc.floatingEndpoint = this.floatingEndpoint;
        this.jpc.floatingId = this.placeholderInfo.id;
        this.jpc.floatingEndpoint.addClass(this.instance.draggingClass);
      }

      this._registerFloatingConnection(this.placeholderInfo, this.jpc, this.floatingEndpoint); // tell jsplumb about it


      this.instance.currentlyDragging = true;
    }
  }, {
    key: "onBeforeStart",
    value: function onBeforeStart(beforeStartParams) {
      this.payload = beforeStartParams.e.payload || {};
    }
  }, {
    key: "onDrag",
    value: function onDrag(params) {
      if (this._stopped) {
        return true;
      }

      if (this.placeholderInfo.element) {
        var floatingElementSize = this.instance.getSize(this.floatingElement);
        var _ui = {
          left: params.pos[0],
          top: params.pos[1]
        };
        this.instance.repaint(this.placeholderInfo.element, _ui);

        var boundingRect = {
          x: params.pos[0],
          y: params.pos[1],
          w: floatingElementSize[0],
          h: floatingElementSize[1]
        },
            newDropTarget,
            idx,
            _cont;

        for (var i = 0; i < this.endpointDropTargets.length; i++) {
          if (this.instance.geometry.intersects(boundingRect, this.endpointDropTargets[i].r)) {
            newDropTarget = this.endpointDropTargets[i];
            break;
          }
        }

        if (newDropTarget !== this.currentDropTarget && this.currentDropTarget != null) {
          idx = this.getFloatingAnchorIndex(this.jpc);
          this.instance.removeClass(this.currentDropTarget.el, CLASS_DRAG_HOVER);

          if (this.currentDropTarget.endpoint) {
            this.currentDropTarget.endpoint.endpoint.removeClass(this.instance.endpointDropAllowedClass);
            this.currentDropTarget.endpoint.endpoint.removeClass(this.instance.endpointDropForbiddenClass);
          }

          this.jpc.endpoints[idx].anchor.out();
        }

        if (newDropTarget != null) {
          this.instance.addClass(newDropTarget.el, CLASS_DRAG_HOVER);
          idx = this.getFloatingAnchorIndex(this.jpc);

          if (newDropTarget.endpoint != null) {
            _cont = newDropTarget.endpoint.isTarget && idx !== 0 || this.jpc.suspendedEndpoint && newDropTarget.endpoint.referenceEndpoint && newDropTarget.endpoint.referenceEndpoint.id === this.jpc.suspendedEndpoint.id;

            if (_cont) {
              var bb = this.instance.checkCondition(communityCore.CHECK_DROP_ALLOWED, {
                sourceEndpoint: this.jpc.endpoints[idx],
                targetEndpoint: newDropTarget.endpoint.endpoint,
                connection: this.jpc
              });
              newDropTarget.endpoint.endpoint[(bb ? "add" : "remove") + "Class"](this.instance.endpointDropAllowedClass);
              newDropTarget.endpoint.endpoint[(bb ? "remove" : "add") + "Class"](this.instance.endpointDropForbiddenClass);
              this.jpc.endpoints[idx].anchor.over(newDropTarget.endpoint.anchor, newDropTarget.endpoint);
            } else {
              newDropTarget = null;
            }
          }
        }

        this.currentDropTarget = newDropTarget; // always repaint the source endpoint, because only continuous/dynamic anchors cause the endpoint
        // to be repainted, so static anchors need to be told (or the endpoint gets dragged around)

        this.ep.paint({
          anchorLoc: this.ep.anchor.getCurrentLocation({
            element: this.ep
          })
        });
      }
    }
  }, {
    key: "_maybeCleanup",
    value: function _maybeCleanup(ep) {
      if (ep._mtNew && ep.connections.length === 0) {
        this.instance.deleteEndpoint(ep);
      } else {
        delete ep._mtNew;
      }
    }
  }, {
    key: "_reattachOrDiscard",
    value: function _reattachOrDiscard(originalEvent) {
      var existingConnection = this.jpc.suspendedEndpoint != null;
      var idx = this.getFloatingAnchorIndex(this.jpc); // if no drop target,

      if (existingConnection && this._shouldReattach(originalEvent)) {
        if (idx === 0) {
          this.jpc.source = this.jpc.suspendedElement;
          this.jpc.sourceId = this.jpc.suspendedElementId;
        } else {
          this.jpc.target = this.jpc.suspendedElement;
          this.jpc.targetId = this.jpc.suspendedElementId;
        } // is this an existing connection? try to reattach, if desired.


        this._doForceReattach(idx);

        return true;
      } else {
        // otherwise throw it away (and throw away any endpoints attached to it that should be thrown away when they are no longer
        // connected to any edges.
        this._discard(idx, originalEvent);

        return false;
      }
    }
  }, {
    key: "onStop",
    value: function onStop(p) {
      var _this2 = this;

      var originalEvent = p.e;
      this.instance.isConnectionBeingDragged = false;
      this.instance.currentlyDragging = false;
      var classesToRemove = communityCore.classList(CLASS_DRAG_HOVER, CLASS_DRAG_ACTIVE);
      this.instance.getContainer().querySelectorAll(DRAG_ACTIVE_OR_HOVER_SELECTOR).forEach(function (el) {
        _this2.instance.removeClass(el, classesToRemove);
      });

      if (this.jpc && this.jpc.endpoints != null) {
        var existingConnection = this.jpc.suspendedEndpoint != null;
        var idx = this.getFloatingAnchorIndex(this.jpc);
        var suspendedEndpoint = this.jpc.suspendedEndpoint;
        var dropEndpoint;
        var discarded = false; // 1. is there a drop target?

        if (this.currentDropTarget != null) {
          // get the drop endpoint.
          dropEndpoint = this._getDropEndpoint(p, this.jpc);

          if (dropEndpoint == null) {
            // no drop endpoint resolved. either reattach, or discard.
            discarded = !this._reattachOrDiscard(p.e);
          } else {
            // if we are dropping back on the original endpoint, force a reattach.
            if (suspendedEndpoint && suspendedEndpoint.id === dropEndpoint.id) {
              this._doForceReattach(idx);
            } else {
              if (!dropEndpoint.enabled) {
                // if endpoint disabled, either reattach or discard
                discarded = !this._reattachOrDiscard(p.e);
              } else if (dropEndpoint.isFull()) {
                // if endpoint full, fire an event, then either reattach or discard
                dropEndpoint.fire(communityCore.EVENT_MAX_CONNECTIONS, {
                  endpoint: this,
                  connection: this.jpc,
                  maxConnections: this.instance.Defaults.maxConnections
                }, originalEvent);

                this._reattachOrDiscard(p.e);
              } else {
                if (idx === 0) {
                  this.jpc.floatingElement = this.jpc.source;
                  this.jpc.floatingId = this.jpc.sourceId;
                  this.jpc.floatingEndpoint = this.jpc.endpoints[0];
                  this.jpc.floatingIndex = 0;
                  this.jpc.source = dropEndpoint.element;
                  this.jpc.sourceId = dropEndpoint.elementId;
                } else {
                  this.jpc.floatingElement = this.jpc.target;
                  this.jpc.floatingId = this.jpc.targetId;
                  this.jpc.floatingEndpoint = this.jpc.endpoints[1];
                  this.jpc.floatingIndex = 1;
                  this.jpc.target = dropEndpoint.element;
                  this.jpc.targetId = dropEndpoint.elementId;
                }

                var _doContinue = true;
                /*
                    if this is an existing connection and detach is not allowed we won't continue. The connection's
                    endpoints have been reinstated; everything is back to how it was.
                */

                if (existingConnection && this.jpc.suspendedEndpoint.id !== dropEndpoint.id) {
                  if (!this.jpc.isDetachAllowed(this.jpc) || !this.jpc.endpoints[idx].isDetachAllowed(this.jpc) || !this.jpc.suspendedEndpoint.isDetachAllowed(this.jpc) || !this.instance.checkCondition("beforeDetach", this.jpc)) {
                    _doContinue = false;
                  }
                }
                /*
                    now check beforeDrop.  this will be available only on Endpoints that are setup to
                    have a beforeDrop condition (although, secretly, under the hood all Endpoints and
                    the Connection have them, because they are on jsPlumbUIComponent.  shhh!), because
                    it only makes sense to have it on a target endpoint.
                */


                _doContinue = _doContinue && dropEndpoint.isDropAllowed(this.jpc.sourceId, this.jpc.targetId, this.jpc.scope, this.jpc, dropEndpoint);

                if (_doContinue) {
                  this._drop(dropEndpoint, idx, originalEvent, _doContinue);
                } else {
                  discarded = !this._reattachOrDiscard(p.e);
                }
              }
            }
          }
        } else {
          // no drop target: either reattach, or discard.
          discarded = !this._reattachOrDiscard(p.e);
        } // originally, the rewrite had this test. but in the case that a connection was detached via the mouse and the endpoint remained in place,
        // that endpoint's classes were not cleaned up.
        //if (!discarded) {


        this.instance.refreshEndpoint(this.ep);
        this.ep.removeClass("endpointDrag");
        this.ep.removeClass(this.instance.draggingClass); //}
        // common clean up

        this._cleanupDraggablePlaceholder();

        this.jpc.removeClass(this.instance.draggingClass);
        delete this.jpc.suspendedEndpoint;
        delete this.jpc.suspendedElement;
        delete this.jpc.suspendedElementType;
        delete this.jpc.suspendedElementId;
        delete this.jpc.suspendedIndex;
        delete this.jpc.floatingElement;
        delete this.jpc.floatingEndpoint;
        delete this.jpc.floatingId;
        delete this.jpc.floatingIndex;
        delete this.jpc.pending;

        if (dropEndpoint != null) {
          this._maybeCleanup(dropEndpoint);
          /* makeTarget sets this flag, to tell us we have been replaced and should delete this object. */


          if (dropEndpoint.deleteAfterDragStop) {
            this.instance.deleteEndpoint(dropEndpoint);
          } else {
            dropEndpoint.paint({
              recalc: false
            });
          }
        }
      }
    }
    /**
     * Lookup a source definition on the given element.
     * @param fromElement Element to lookup the source definition
     * @param evt Associated mouse event - for instance, the event that started a drag.
     * @param ignoreFilter Used when we're getting a source definition to possibly use as a drop target, ie. when a
     * connection's source endpoint is being dragged. in that scenario we don't want to filter - we want the source to basically
     * behave as a target.
     * @private
     */

  }, {
    key: "_getSourceDefinition",
    value: function _getSourceDefinition(fromElement, evt, ignoreFilter) {
      var sourceDef;

      if (fromElement._jsPlumbSourceDefinitions) {
        for (var i = 0; i < fromElement._jsPlumbSourceDefinitions.length; i++) {
          sourceDef = fromElement._jsPlumbSourceDefinitions[i];

          if (sourceDef.enabled !== false) {
            if (!ignoreFilter && sourceDef.def.filter) {
              var r = communityCore.isString(sourceDef.def.filter) ? selectorFilter(evt, fromElement, sourceDef.def.filter, this.instance, sourceDef.def.filterExclude) : sourceDef.def.filter(evt, fromElement);

              if (r !== false) {
                return sourceDef;
              }
            } else {
              return sourceDef;
            }
          }
        }
      }
    }
    /**
     * Lookup a target definition on the given element.
     * @param fromElement Element to lookup the source definition
     * @param evt Associated mouse event - for instance, the event that started a drag.
     * @private
     */

  }, {
    key: "_getTargetDefinition",
    value: function _getTargetDefinition(fromElement, evt) {
      var targetDef;

      if (fromElement._jsPlumbTargetDefinitions) {
        for (var i = 0; i < fromElement._jsPlumbTargetDefinitions.length; i++) {
          targetDef = fromElement._jsPlumbTargetDefinitions[i];

          if (targetDef.enabled !== false) {
            if (targetDef.def.filter) {
              var r = communityCore.isString(targetDef.def.filter) ? selectorFilter(evt, fromElement, targetDef.def.filter, this.instance, targetDef.def.filterExclude) : targetDef.def.filter(evt, fromElement);

              if (r !== false) {
                return targetDef;
              }
            } else {
              return targetDef;
            }
          }
        }
      }
    }
  }, {
    key: "_getDropEndpoint",
    value: function _getDropEndpoint(p, jpc) {
      var dropEndpoint;

      if (this.currentDropTarget.endpoint == null) {
        // find a suitable target definition, by matching the source of the drop element with the targets registered on the
        // drop target, and also the floating index (if set) of the connection
        var targetDefinition = jpc.floatingIndex == null || jpc.floatingIndex === 1 ? this._getTargetDefinition(this.currentDropTarget.el, p.e) : null; // need to figure the conditions under which each of these should be tested

        if (targetDefinition == null) {
          targetDefinition = jpc.floatingIndex == null || jpc.floatingIndex === 0 ? this._getSourceDefinition(this.currentDropTarget.el, p.e, true) : null;
        }

        if (targetDefinition == null) {
          return null;
        } // if no cached endpoint, or there was one but it has been cleaned up
        // (ie. detached), create a new one


        var eps = this.instance.deriveEndpointAndAnchorSpec(jpc.getType().join(" "), true);
        var pp = eps.endpoints ? communityCore.extend(p, {
          endpoint: targetDefinition.def.endpoint || eps.endpoints[1]
        }) : p;

        if (eps.anchors) {
          pp = communityCore.extend(pp, {
            anchor: targetDefinition.def.anchor || eps.anchors[1]
          });
        }

        if (targetDefinition.def.parameters != null) {
          pp.parameters = targetDefinition.def.parameters;
        }

        if (targetDefinition.def.portId != null) {
          pp.portId = targetDefinition.def.portId;
        }

        dropEndpoint = this.instance.addEndpoint(this.currentDropTarget.el, pp);
        dropEndpoint._mtNew = true;
        dropEndpoint.deleteOnEmpty = true;

        if (dropEndpoint.anchor.positionFinder != null) {
          var finalPos = p.finalPos || p.pos;
          var dropPosition = {
            left: finalPos[0],
            top: finalPos[1]
          };
          var elPosition = this.instance.getOffset(this.currentDropTarget.el),
              elSize = this.instance.getSize(this.currentDropTarget.el),
              ap = dropEndpoint.anchor.positionFinder(dropPosition, elPosition, elSize, dropEndpoint.anchor.constructorParams);
          dropEndpoint.anchor.x = ap[0];
          dropEndpoint.anchor.y = ap[1]; // now figure an orientation for it..kind of hard to know what to do actually. probably the best thing i can do is to
          // support specifying an orientation in the anchor's spec. if one is not supplied then i will make the orientation
          // be what will cause the most natural link to the source: it will be pointing at the source, but it needs to be
          // specified in one axis only, and so how to make that choice? i think i will use whichever axis is the one in which
          // the target is furthest away from the source.
        }
      } else {
        dropEndpoint = this.currentDropTarget.endpoint;
      }

      if (dropEndpoint) {
        dropEndpoint.removeClass(this.instance.endpointDropAllowedClass);
        dropEndpoint.removeClass(this.instance.endpointDropForbiddenClass);
      }

      return dropEndpoint;
    }
  }, {
    key: "_doForceReattach",
    value: function _doForceReattach(idx) {
      // TODO check this logic. why in this case is this a transient detach?
      //this.jpc.endpoints[idx].detachFromConnection(this.jpc, null, true)
      this.floatingEndpoint.detachFromConnection(this.jpc, null, true);
      this.jpc.endpoints[idx] = this.jpc.suspendedEndpoint;
      this.instance.setHover(this.jpc, false);
      this.jpc._forceDetach = true; // if (idx === 0) {
      //     this.jpc.source = this.jpc.suspendedEndpoint.element
      //     this.jpc.sourceId = this.jpc.suspendedEndpoint.elementId
      // } else {
      //     this.jpc.target = this.jpc.suspendedEndpoint.element
      //     this.jpc.targetId = this.jpc.suspendedEndpoint.elementId
      // }
      // this.jpc.suspendedEndpoint.addConnection(this.jpc)
      //
      // // TODO checkSanity
      // if (idx === 1) {
      //     this.jpc.updateConnectedClass()
      // }
      // else {
      //     this.instance.sourceOrTargetChanged(this.jpc.floatingId, this.jpc.sourceId, this.jpc, this.jpc.source)
      // }

      this.jpc.suspendedEndpoint.addConnection(this.jpc);
      this.instance.sourceOrTargetChanged(this.jpc.floatingId, this.jpc.suspendedEndpoint.elementId, this.jpc, this.jpc.suspendedEndpoint.element, idx);
      this.instance.deleteEndpoint(this.floatingEndpoint);
      this.instance.repaint(this.jpc.source);
      delete this.jpc._forceDetach;
    }
  }, {
    key: "_shouldReattach",
    value: function _shouldReattach(originalEvent) {
      return this.jpc.isReattach() || this.jpc._forceReattach || !communityCore.functionChain(true, false, [[this.jpc.endpoints[0], communityCore.IS_DETACH_ALLOWED, [this.jpc]], [this.jpc.endpoints[1], communityCore.IS_DETACH_ALLOWED, [this.jpc]], [this.jpc, communityCore.IS_DETACH_ALLOWED, [this.jpc]], [this.instance, communityCore.CHECK_CONDITION, [communityCore.BEFORE_DETACH, this.jpc]]]);
    }
  }, {
    key: "_maybeReattach",
    value: function _maybeReattach(idx, originalEvent) {
      this.instance.setHover(this.jpc, false);

      if (this.jpc.suspendedEndpoint) {
        // this.jpc._forceDetach ||  <-- why was this one of the tests in the line below?
        if (this.jpc.isReattach() || this.jpc._forceReattach || !this.instance.deleteConnection(this.jpc, {
          originalEvent: originalEvent
        })) {
          this.jpc.endpoints[idx] = this.jpc.suspendedEndpoint;
          this.instance.setHover(this.jpc, false);
          this.jpc._forceDetach = true;
          this.jpc.suspendedEndpoint.addConnection(this.jpc);
          this.instance.sourceOrTargetChanged(this.jpc.floatingId, this.jpc.suspendedEndpoint.elementId, this.jpc, this.jpc.suspendedEndpoint.element, idx);
          this.instance.repaint(this.jpc.source);
          this.jpc._forceDetach = false;
        }
      } else {
        this.instance.deleteEndpoint(this.jpc.endpoints[idx]); //, originalEvent:originalEvent})

        if (this.jpc.pending) {
          this.instance.fire("connectionAborted", this.jpc, originalEvent);
        }
      }
    }
  }, {
    key: "_discard",
    value: function _discard(idx, originalEvent) {
      if (this.jpc.pending) {
        this.instance.fire("connectionAborted", this.jpc, originalEvent);
      } else {
        if (idx === 0) {
          this.jpc.source = this.jpc.suspendedEndpoint.element;
          this.jpc.sourceId = this.jpc.suspendedEndpoint.elementId;
        } else {
          this.jpc.target = this.jpc.suspendedEndpoint.element;
          this.jpc.targetId = this.jpc.suspendedEndpoint.elementId;
        }

        this.jpc.endpoints[idx] = this.jpc.suspendedEndpoint;
      }

      if (this.jpc.floatingEndpoint) {
        this.jpc.floatingEndpoint.detachFromConnection(this.jpc);
      }

      this.instance.deleteConnection(this.jpc, {
        originalEvent: originalEvent,
        force: true
      });
    } //
    // drops the current connection on the given endpoint
    //

  }, {
    key: "_drop",
    value: function _drop(dropEndpoint, idx, originalEvent, optionalData) {
      // remove this jpc from the current endpoint, which is a floating endpoint that we will
      // subsequently discard.
      this.jpc.endpoints[idx].detachFromConnection(this.jpc); // if there's a suspended endpoint, detach it from the connection.

      if (this.jpc.suspendedEndpoint) {
        this.jpc.suspendedEndpoint.detachFromConnection(this.jpc);
      }

      this.jpc.endpoints[idx] = dropEndpoint;
      dropEndpoint.addConnection(this.jpc); // copy our parameters in to the connection:

      var params = dropEndpoint.getParameters();

      for (var aParam in params) {
        this.jpc.setParameter(aParam, params[aParam]);
      }

      if (this.jpc.suspendedEndpoint) {
        var suspendedElementId = this.jpc.suspendedEndpoint.elementId;
        this.instance.fireMoveEvent({
          index: idx,
          originalSourceId: idx === 0 ? suspendedElementId : this.jpc.sourceId,
          newSourceId: idx === 0 ? dropEndpoint.elementId : this.jpc.sourceId,
          originalTargetId: idx === 1 ? suspendedElementId : this.jpc.targetId,
          newTargetId: idx === 1 ? dropEndpoint.elementId : this.jpc.targetId,
          originalSourceEndpoint: idx === 0 ? this.jpc.suspendedEndpoint : this.jpc.endpoints[0],
          newSourceEndpoint: idx === 0 ? dropEndpoint : this.jpc.endpoints[0],
          originalTargetEndpoint: idx === 1 ? this.jpc.suspendedEndpoint : this.jpc.endpoints[1],
          newTargetEndpoint: idx === 1 ? dropEndpoint : this.jpc.endpoints[1],
          connection: this.jpc
        }, originalEvent);
      }

      if (idx === 1) {
        this.jpc.updateConnectedClass();
      } else {
        this.instance.sourceOrTargetChanged(this.jpc.floatingId, this.jpc.sourceId, this.jpc, this.jpc.source, 0);
      } // when makeSource has uniqueEndpoint:true, we want to create connections with new endpoints
      // that are subsequently deleted. So makeSource sets `finalEndpoint`, which is the Endpoint to
      // which the connection should be attached. The `detachFromConnection` call below results in the
      // temporary endpoint being cleaned up.


      if (this.jpc.endpoints[0].finalEndpoint) {
        var _toDelete = this.jpc.endpoints[0];

        _toDelete.detachFromConnection(this.jpc);

        this.jpc.endpoints[0] = this.jpc.endpoints[0].finalEndpoint;
        this.jpc.endpoints[0].addConnection(this.jpc);
      } // if optionalData was given, merge it onto the connection's data.


      if (communityCore.IS.anObject(optionalData)) {
        this.jpc.mergeData(optionalData);
      }

      if (this.jpc.endpoints[0]._originalAnchor) {
        var newSourceAnchor = communityCore.makeAnchorFromSpec(this.instance, this.jpc.endpoints[0]._originalAnchor, this.jpc.endpoints[0].elementId);
        this.jpc.endpoints[0].setAnchor(newSourceAnchor, true);
        delete this.jpc.endpoints[0]._originalAnchor;
      } // finalise will inform the anchor manager and also add to
      // connectionsByScope if necessary.


      this.instance._finaliseConnection(this.jpc, null, originalEvent, false);

      this.instance.setHover(this.jpc, false); // SP continuous anchor flush

      this.instance.revalidate(this.jpc.endpoints[0].element);
    }
  }, {
    key: "_registerFloatingConnection",
    value: function _registerFloatingConnection(info, conn, ep) {
      this.floatingConnections[info.id] = conn; // only register for the target endpoint; we will not be dragging the source at any time
      // before this connection is either discarded or made into a permanent connection.

      communityCore.addToList(this.instance.endpointsByElement, info.id, ep);
    }
  }, {
    key: "getFloatingAnchorIndex",
    value: function getFloatingAnchorIndex(jpc) {
      return jpc.endpoints[0].isFloating() ? 0 : jpc.endpoints[1].isFloating() ? 1 : -1;
    }
  }]);

  return EndpointDragHandler;
}();

var GroupDragHandler =
/*#__PURE__*/
function (_ElementDragHandler) {
  _inherits(GroupDragHandler, _ElementDragHandler);

  function GroupDragHandler(instance) {
    var _this;

    _classCallCheck(this, GroupDragHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupDragHandler).call(this, instance));
    _this.instance = instance;

    _defineProperty(_assertThisInitialized(_this), "selector", "> [jtk-group] [jtk-managed]");

    _defineProperty(_assertThisInitialized(_this), "doRevalidate", void 0);

    _this.doRevalidate = _this._revalidate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GroupDragHandler, [{
    key: "reset",
    value: function reset() {
      this.drag.off(EVT_REVERT, this.doRevalidate);
    }
  }, {
    key: "_revalidate",
    value: function _revalidate(el) {
      this.instance.revalidate(el);
    }
  }, {
    key: "init",
    value: function init(drag) {
      this.drag = drag;
      drag.on(EVT_REVERT, this.doRevalidate);
    }
  }, {
    key: "useGhostProxy",
    value: function useGhostProxy(container, dragEl) {
      var group = dragEl._jsPlumbParentGroup;
      return group == null ? false : group.ghost === true;
    }
  }, {
    key: "makeGhostProxy",
    value: function makeGhostProxy(el) {
      var newEl = el.cloneNode(true);
      newEl._jsPlumbParentGroup = el._jsPlumbParentGroup;
      return newEl;
    }
  }, {
    key: "onDrag",
    value: function onDrag(params) {
      _get(_getPrototypeOf(GroupDragHandler.prototype), "onDrag", this).call(this, params);
    }
  }, {
    key: "onDragAbort",
    value: function onDragAbort(el) {
      return null;
    }
  }, {
    key: "onStop",
    value: function onStop(params) {
      var originalElement = params.drag.getDragElement(true);

      var originalGroup = params.el[communityCore.PARENT_GROUP_KEY],
          out = _get(_getPrototypeOf(GroupDragHandler.prototype), "onStop", this).call(this, params),
          currentGroup = params.el[communityCore.PARENT_GROUP_KEY];

      if (currentGroup === originalGroup) {
        this._pruneOrOrphan(params);
      } else {
        if (originalGroup.ghost) {
          var o1 = this.instance.getOffset(currentGroup.getContentArea());
          var o2 = this.instance.getOffset(originalGroup.getContentArea());
          var o = {
            left: o2.left + params.pos[0] - o1.left,
            top: o2.top + params.pos[1] - o1.top
          };
          originalElement.style.left = o.left + "px";
          originalElement.style.top = o.top + "px";
        }
      }

      this.instance.revalidate(originalElement);
      return out;
    }
  }, {
    key: "_isInsideParent",
    value: function _isInsideParent(_el, pos) {
      var p = _el.offsetParent,
          s = this.instance.getSize(p),
          ss = this.instance.getSize(_el),
          leftEdge = pos[0],
          rightEdge = leftEdge + ss[0],
          topEdge = pos[1],
          bottomEdge = topEdge + ss[1];
      return rightEdge > 0 && leftEdge < s[0] && bottomEdge > 0 && topEdge < s[1];
    }
  }, {
    key: "_pruneOrOrphan",
    value: function _pruneOrOrphan(params) {
      var orphanedPosition = null;

      if (!this._isInsideParent(params.el, params.pos)) {
        var group = params.el[communityCore.PARENT_GROUP_KEY];

        if (group.prune) {
          if (params.el._isJsPlumbGroup) {
            // remove the group from the instance
            this.instance.removeGroup(params.el._jsPlumbGroup);
          } else {
            // instruct the group to remove the element from itself and also from the DOM.
            group.remove(params.el, true);
          }
        } else if (group.orphan) {
          orphanedPosition = this.instance.groupManager.orphan(params.el);

          if (params.el._isJsPlumbGroup) {
            // remove the nested group from the parent
            group.removeGroup(params.el._jsPlumbGroup);
          } else {
            // remove the element from the group's DOM element.
            group.remove(params.el);
          }
        }
      }

      return orphanedPosition;
    }
  }]);

  return GroupDragHandler;
}(ElementDragHandler);

function _touch(target, pageX, pageY, screenX, screenY, clientX, clientY) {
  return new Touch({
    target: target,
    identifier: communityCore.uuid(),
    pageX: pageX,
    pageY: pageY,
    screenX: screenX,
    screenY: screenY,
    clientX: clientX || screenX,
    clientY: clientY || screenY
  });
}
/**
 * Create a synthetic touch list from the given list of Touch objects.
 * @returns {Array}
 * @private
 */


function _touchList() {
  var list = [];
  list.push.apply(list, arguments);

  list.item = function (index) {
    return this[index];
  };

  return list;
}
/**
 * Create a Touch object and then insert it into a synthetic touch list, returning the list.
 * @param target
 * @param pageX
 * @param pageY
 * @param screenX
 * @param screenY
 * @param clientX
 * @param clientY
 * @returns {Array}
 * @private
 */


function _touchAndList(target, pageX, pageY, screenX, screenY, clientX, clientY) {
  return _touchList(_touch(target, pageX, pageY, screenX, screenY, clientX, clientY));
}

function matchesSelector$1(el, selector, ctx) {
  ctx = ctx || el.parentNode;
  var possibles = ctx.querySelectorAll(selector);

  for (var i = 0; i < possibles.length; i++) {
    if (possibles[i] === el) {
      return true;
    }
  }

  return false;
}

function _gel(el) {
  return typeof el == "string" || el.constructor === String ? document.getElementById(el) : el;
}

function _t(e) {
  return e.srcElement || e.target;
} //
// gets path info for the given event - the path from target to obj, in the event's bubble chain. if doCompute
// is false we just return target for the path.
//


function _pi(e, target, obj, doCompute) {
  if (!doCompute) return {
    path: [target],
    end: 1
  };else if (typeof e.path !== "undefined" && e.path.indexOf) {
    return {
      path: e.path,
      end: e.path.indexOf(obj)
    };
  } else {
    var out = {
      path: [],
      end: -1
    },
        _one = function _one(el) {
      out.path.push(el);

      if (el === obj) {
        out.end = out.path.length - 1;
      } else if (el.parentNode != null) {
        _one(el.parentNode);
      }
    };

    _one(target);

    return out;
  }
}

function _d(l, fn) {
  var i = 0,
      j;

  for (i = 0, j = l.length; i < j; i++) {
    if (l[i] == fn) break;
  }

  if (i < l.length) l.splice(i, 1);
}

var guid = 1;
var isTouchDevice = "ontouchstart" in document.documentElement || navigator.maxTouchPoints != null && navigator.maxTouchPoints > 0;
var isMouseDevice = "onmousedown" in document.documentElement;
var touchMap = {
  "mousedown": "touchstart",
  "mouseup": "touchend",
  "mousemove": "touchmove"
};
var PAGE = "page";
var SCREEN = "screen";
var CLIENT = "client";

function _genLoc(e, prefix) {
  if (e == null) return [0, 0];

  var ts = _touches(e),
      t = _getTouch(ts, 0);

  return [t[prefix + "X"], t[prefix + "Y"]];
}

function pageLocation(e) {
  if (e == null) return [0, 0];
  return _genLoc(e, PAGE);
}

function _screenLocation(e) {
  return _genLoc(e, SCREEN);
}

function _clientLocation(e) {
  return _genLoc(e, CLIENT);
}

function _getTouch(touches, idx) {
  return touches.item ? touches.item(idx) : touches[idx];
}

function _touches(e) {
  return e.touches && e.touches.length > 0 ? e.touches : e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches : e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches : [e];
}

function _touchCount(e) {
  return _touches(e).length;
}

function _bind(obj, type, fn, originalFn) {
  _store(obj, type, fn);

  originalFn.__tauid = fn.__tauid;

  if (obj.addEventListener) {
    obj.addEventListener(type, fn, false);
  } else if (obj.attachEvent) {
    var key = type + fn.__tauid;
    obj["e" + key] = fn; // TODO look at replacing with .call(..)

    obj[key] = function () {
      obj["e" + key] && obj["e" + key](window.event);
    };

    obj.attachEvent("on" + type, obj[key]);
  }
}

function _unbind(obj, type, fn) {
  var _this = this;

  if (fn == null) return;

  _each(obj, function (el) {
    var _el = _gel(el);

    _unstore(_el, type, fn); // it has been bound if there is a tauid. otherwise it was not bound and we can ignore it.


    if (fn.__tauid != null) {
      if (_el.removeEventListener) {
        _el.removeEventListener(type, fn, false);

        if (isTouchDevice && touchMap[type]) _el.removeEventListener(touchMap[type], fn, false);
      } else if (_this.detachEvent) {
        var key = type + fn.__tauid;
        _el[key] && _el.detachEvent("on" + type, _el[key]);
        _el[key] = null;
        _el["e" + key] = null;
      }
    } // if a touch event was also registered, deregister now.


    if (fn.__taTouchProxy) {
      _unbind(obj, fn.__taTouchProxy[1], fn.__taTouchProxy[0]);
    }
  });
}

function _each(obj, fn) {
  if (obj == null) return; // if a list (or list-like), use it. if a string, get a list
  // by running the string through querySelectorAll. else, assume
  // it's an Element.

  var entries = typeof obj === "string" ? document.querySelectorAll(obj) : obj.length != null ? obj : [obj];

  for (var i = 0; i < entries.length; i++) {
    fn(entries[i]);
  }
}

function _store(obj, event, fn) {
  var g = guid++;
  obj.__ta = obj.__ta || {};
  obj.__ta[event] = obj.__ta[event] || {}; // store each handler with a unique guid.

  obj.__ta[event][g] = fn; // set the guid on the handler.

  fn.__tauid = g;
  return g;
}

function _unstore(obj, event, fn) {
  obj.__ta && obj.__ta[event] && delete obj.__ta[event][fn.__tauid]; // a handler might have attached extra functions, so we unbind those too.

  if (fn.__taExtra) {
    for (var i = 0; i < fn.__taExtra.length; i++) {
      _unbind(obj, fn.__taExtra[i][0], fn.__taExtra[i][1]);
    }

    fn.__taExtra.length = 0;
  } // a handler might have attached an unstore callback


  fn.__taUnstore && fn.__taUnstore();
}

function _curryChildFilter(children, obj, fn, evt) {
  if (children == null) return fn;else {
    var c = children.split(","),
        _fn = function _fn(e) {
      _fn.__tauid = fn.__tauid;

      var t = _t(e);

      var target = t; // t is the target element on which the event occurred. it is the
      // element we will wish to pass to any callbacks.

      var pathInfo = _pi(e, t, obj, children != null);

      if (pathInfo.end != -1) {
        for (var p = 0; p < pathInfo.end; p++) {
          target = pathInfo.path[p];

          for (var i = 0; i < c.length; i++) {
            if (matchesSelector$1(target, c[i], obj)) {
              fn.apply(target, [e, target]);
            }
          }
        }
      }
    };

    registerExtraFunction(fn, evt, _fn);
    return _fn;
  }
}

function registerExtraFunction(fn, evt, newFn) {
  fn.__taExtra = fn.__taExtra || [];

  fn.__taExtra.push([evt, newFn]);
}

var DefaultHandler = function DefaultHandler(obj, evt, fn, children) {
  if (isTouchDevice && touchMap[evt]) {
    var tfn = _curryChildFilter(children, obj, fn, touchMap[evt]);

    _bind(obj, touchMap[evt], tfn, fn);
  }

  if (evt === communityCore.EVENT_FOCUS && obj.getAttribute(communityCore.ATTRIBUTE_TABINDEX) == null) {
    obj.setAttribute(communityCore.ATTRIBUTE_TABINDEX, "1");
  }

  _bind(obj, evt, _curryChildFilter(children, obj, fn, evt), fn);
};

var SmartClickHandler = function SmartClickHandler(obj, evt, fn, children) {
  if (obj.__taSmartClicks == null) {
    var down = function down(e) {
      obj.__tad = pageLocation(e);
    },
        up = function up(e) {
      obj.__tau = pageLocation(e);
    },
        click = function click(e) {
      if (obj.__tad && obj.__tau && obj.__tad[0] === obj.__tau[0] && obj.__tad[1] === obj.__tau[1]) {
        for (var i = 0; i < obj.__taSmartClicks.length; i++) {
          obj.__taSmartClicks[i].apply(_t(e), [e]);
        }
      }
    };

    DefaultHandler(obj, communityCore.EVENT_MOUSEDOWN, down, children);
    DefaultHandler(obj, communityCore.EVENT_MOUSEUP, up, children);
    DefaultHandler(obj, communityCore.EVENT_CLICK, click, children);
    obj.__taSmartClicks = [];
  } // store in the list of callbacks


  obj.__taSmartClicks.push(fn); // the unstore function removes this function from the object's listener list for this type.


  fn.__taUnstore = function () {
    _d(obj.__taSmartClicks, fn);
  };
};

var _tapProfiles = {
  "tap": {
    touches: 1,
    taps: 1
  },
  "dbltap": {
    touches: 1,
    taps: 2
  },
  "contextmenu": {
    touches: 2,
    taps: 1
  }
};

function meeHelper(type, evt, obj, target) {
  for (var i in obj.__tamee[type]) {
    if (obj.__tamee[type].hasOwnProperty(i)) {
      obj.__tamee[type][i].apply(target, [evt]);
    }
  }
}

var TapHandler =
/*#__PURE__*/
function () {
  function TapHandler() {
    _classCallCheck(this, TapHandler);
  }

  _createClass(TapHandler, null, [{
    key: "generate",
    value: function generate(clickThreshold, dblClickThreshold) {
      return function (obj, evt, fn, children) {
        // if event is contextmenu, for devices which are mouse only, we want to
        // use the default bind.
        if (evt == communityCore.EVENT_CONTEXTMENU && isMouseDevice) DefaultHandler(obj, evt, fn, children);else {
          // the issue here is that this down handler gets registered only for the
          // child nodes in the first registration. in fact it should be registered with
          // no child selector and then on down we should cycle through the registered
          // functions to see if one of them matches. on mouseup we should execute ALL of
          // the functions whose children are either null or match the element.
          if (obj.__taTapHandler == null) {
            var tt = obj.__taTapHandler = {
              tap: [],
              dbltap: [],
              contextmenu: [],
              down: false,
              taps: 0,
              downSelectors: []
            };

            var down = function down(e) {
              var target = _t(e),
                  pathInfo = _pi(e, target, obj, children != null),
                  finished = false;

              for (var p = 0; p < pathInfo.end; p++) {
                if (finished) return;
                target = pathInfo.path[p];

                for (var i = 0; i < tt.downSelectors.length; i++) {
                  if (tt.downSelectors[i] == null || matchesSelector$1(target, tt.downSelectors[i], obj)) {
                    tt.down = true;
                    setTimeout(clearSingle, clickThreshold);
                    setTimeout(clearDouble, dblClickThreshold);
                    finished = true;
                    break; // we only need one match on mousedown
                  }
                }
              }
            },
                up = function up(e) {
              if (tt.down) {
                var target = _t(e),
                    currentTarget,
                    pathInfo;

                tt.taps++;

                var tc = _touchCount(e);

                for (var eventId in _tapProfiles) {
                  if (_tapProfiles.hasOwnProperty(eventId)) {
                    var p = _tapProfiles[eventId];

                    if (p.touches === tc && (p.taps === 1 || p.taps === tt.taps)) {
                      for (var i = 0; i < tt[eventId].length; i++) {
                        pathInfo = _pi(e, target, obj, tt[eventId][i][1] != null);

                        for (var pLoop = 0; pLoop < pathInfo.end; pLoop++) {
                          currentTarget = pathInfo.path[pLoop]; // this is a single event registration handler.

                          if (tt[eventId][i][1] == null || matchesSelector$1(currentTarget, tt[eventId][i][1], obj)) {
                            tt[eventId][i][0].apply(currentTarget, [e]);
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
                clearSingle = function clearSingle() {
              tt.down = false;
            },
                clearDouble = function clearDouble() {
              tt.taps = 0;
            };

            DefaultHandler(obj, "mousedown", down);
            DefaultHandler(obj, "mouseup", up);
          } // add this child selector (it can be null, that's fine).


          obj.__taTapHandler.downSelectors.push(children);

          obj.__taTapHandler[evt].push([fn, children]); // the unstore function removes this function from the object's listener list for this type.


          fn.__taUnstore = function () {
            _d(obj.__taTapHandler[evt], fn);
          };
        }
      };
    }
  }]);

  return TapHandler;
}();

var MouseEnterExitHandler =
/*#__PURE__*/
function () {
  function MouseEnterExitHandler() {
    _classCallCheck(this, MouseEnterExitHandler);
  }

  _createClass(MouseEnterExitHandler, null, [{
    key: "generate",
    value: function generate() {
      var activeElements = [];
      return function (obj, evt, fn, children) {
        if (!obj.__tamee) {
          // __tamee holds a flag saying whether the mouse is currently "in" the element, and a list of
          // both mouseenter and mouseexit functions.
          obj.__tamee = {
            over: false,
            mouseenter: [],
            mouseexit: [] // register over and out functions

          };

          var over = function over(e) {
            var t = _t(e);

            if (children == null && t == obj && !obj.__tamee.over || matchesSelector$1(t, children, obj) && (t.__tamee == null || !t.__tamee.over)) {
              meeHelper(communityCore.EVENT_MOUSEENTER, e, obj, t);
              t.__tamee = t.__tamee || {};
              t.__tamee.over = true;
              activeElements.push(t);
            }
          },
              out = function out(e) {
            var t = _t(e); // is the current target one of the activeElements? and is the
            // related target NOT a descendant of it?


            for (var i = 0; i < activeElements.length; i++) {
              if (t == activeElements[i] && !matchesSelector$1(e.relatedTarget || e.toElement, "*", t)) {
                t.__tamee.over = false;
                activeElements.splice(i, 1);
                meeHelper(communityCore.EVENT_MOUSEEXIT, e, obj, t);
              }
            }
          };

          _bind(obj, communityCore.EVENT_MOUSEOVER, _curryChildFilter(children, obj, over, communityCore.EVENT_MOUSEOVER), over);

          _bind(obj, communityCore.EVENT_MOUSEOUT, _curryChildFilter(children, obj, out, communityCore.EVENT_MOUSEOUT), out);
        }

        fn.__taUnstore = function () {
          delete obj.__tamee[evt][fn.__tauid];
        };

        _store(obj, evt, fn);

        obj.__tamee[evt][fn.__tauid] = fn;
      };
    }
  }]);

  return MouseEnterExitHandler;
}();

var EventManager =
/*#__PURE__*/
function () {
  function EventManager(params) {
    _classCallCheck(this, EventManager);

    _defineProperty(this, "clickThreshold", void 0);

    _defineProperty(this, "dblClickThreshold", void 0);

    _defineProperty(this, "tapHandler", void 0);

    _defineProperty(this, "mouseEnterExitHandler", void 0);

    _defineProperty(this, "smartClicks", void 0);

    params = params || {};
    this.clickThreshold = params.clickThreshold || 250;
    this.dblClickThreshold = params.dblClickThreshold || 450;
    this.mouseEnterExitHandler = MouseEnterExitHandler.generate();
    this.tapHandler = TapHandler.generate(this.clickThreshold, this.dblClickThreshold);
    this.smartClicks = params.smartClicks;
  }

  _createClass(EventManager, [{
    key: "_doBind",
    value: function _doBind(obj, evt, fn, children) {
      var _this2 = this;

      if (fn == null) return;

      _each(obj, function (el) {
        var _el = _gel(el);

        if (_this2.smartClicks && evt === communityCore.EVENT_CLICK) SmartClickHandler(_el, evt, fn, children);else if (evt === communityCore.EVENT_TAP || evt === communityCore.EVENT_DBL_TAP || evt === communityCore.EVENT_CONTEXTMENU) {
          _this2.tapHandler(_el, evt, fn, children);
        } else if (evt === communityCore.EVENT_MOUSEENTER || evt == communityCore.EVENT_MOUSEEXIT) _this2.mouseEnterExitHandler(_el, evt, fn, children);else DefaultHandler(_el, evt, fn, children);
      });
    }
  }, {
    key: "on",
    value: function on(el, event, children, fn) {
      var _c = fn == null ? null : children,
          _f = fn == null ? children : fn;

      this._doBind(el, event, _f, _c);

      return this;
    }
  }, {
    key: "off",
    value: function off(el, event, fn) {
      _unbind(el, event, fn);

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(el, event, originalEvent, payload) {
      // MouseEvent undefined in old IE; that's how we know it's a mouse event.  A fine Microsoft paradox.
      var originalIsMouse = isMouseDevice && (typeof MouseEvent === "undefined" || originalEvent == null || originalEvent.constructor === MouseEvent);
      var eventToBind = isTouchDevice && !isMouseDevice && touchMap[event] ? touchMap[event] : event,
          bindingAMouseEvent = !(isTouchDevice && !isMouseDevice && touchMap[event]);

      var pl = pageLocation(originalEvent),
          sl = _screenLocation(originalEvent),
          cl = _clientLocation(originalEvent);

      _each(el, function (__el) {
        var _el = _gel(__el);

        var evt;
        originalEvent = originalEvent || {
          screenX: sl[0],
          screenY: sl[1],
          clientX: cl[0],
          clientY: cl[1]
        };

        var _decorate = function _decorate(_evt) {
          if (payload) {
            _evt.payload = payload;
          }
        };

        var eventGenerators = {
          "TouchEvent": function TouchEvent(evt) {
            var touchList = _touchAndList(_el, pl[0], pl[1], sl[0], sl[1], cl[0], cl[1]),
                init = evt.initTouchEvent || evt.initEvent;

            init(eventToBind, true, true, window, null, sl[0], sl[1], cl[0], cl[1], false, false, false, false, touchList, touchList, touchList, 1, 0);
          },
          "MouseEvents": function MouseEvents(evt) {
            evt.initMouseEvent(eventToBind, true, true, window, 0, sl[0], sl[1], cl[0], cl[1], false, false, false, false, 1, _el);
          }
        };
        var ite = !bindingAMouseEvent && !originalIsMouse && isTouchDevice && touchMap[event],
            evtName = ite ? "TouchEvent" : "MouseEvents";
        evt = document.createEvent(evtName);
        eventGenerators[evtName](evt);

        _decorate(evt);

        _el.dispatchEvent(evt);
      });

      return this;
    }
  }]);

  return EventManager;
}();

function getOffsetRect(elem) {
  var o = offsetRelativeToRoot(elem);
  return [o.left, o.top];
}

function findDelegateElement(parentElement, childElement, selector) {
  if (matchesSelector(childElement, selector, parentElement)) {
    return childElement;
  } else {
    var currentParent = childElement.parentNode;

    while (currentParent != null && currentParent !== parentElement) {
      if (matchesSelector(currentParent, selector, parentElement)) {
        return currentParent;
      } else {
        currentParent = currentParent.parentNode;
      }
    }
  }
}

function _getPosition(el) {
  return [el.offsetLeft, el.offsetTop];
}

function _getSize(el) {
  return [el.offsetWidth, el.offsetHeight];
}

function _setPosition(el, pos) {
  el.style.left = pos[0] + "px";
  el.style.top = pos[1] + "px";
}

/**
 * Finds all elements matching the given selector, for the given parent. In order to support "scoped root" selectors,
 * ie. things like "> .someClass", that is .someClass elements that are direct children of `parentElement`, we have to
 * jump through a small hoop here: when a delegate draggable is registered, we write a `katavorio-draggable` attribute
 * on the element on which the draggable is registered. Then when this method runs, we grab the value of that attribute and
 * prepend it as part of the selector we're looking for.  So "> .someClass" ends up being written as
 * "[katavorio-draggable='...' > .someClass]", which works with querySelectorAll.
 *
 * @param availableSelectors
 * @param parentElement
 * @param childElement
 * @returns {*}
 */
function findMatchingSelector(availableSelectors, parentElement, childElement) {
  var el = null;
  var draggableId = parentElement.getAttribute("katavorio-draggable"),
      prefix = draggableId != null ? "[katavorio-draggable='" + draggableId + "'] " : "";

  for (var i = 0; i < availableSelectors.length; i++) {
    el = findDelegateElement(parentElement, childElement, prefix + availableSelectors[i].selector);

    if (el != null) {
      if (availableSelectors[i].filter) {
        var matches = matchesSelector(childElement, availableSelectors[i].filter, el),
            exclude = availableSelectors[i].filterExclude === true;

        if (exclude && !matches || matches) {
          return null;
        }
      }

      return [availableSelectors[i], el];
    }
  }

  return null;
}

var DEFAULT_GRID_X = 10;
var DEFAULT_GRID_Y = 10;

var TRUE = function TRUE() {
  return true;
};

var FALSE = function FALSE() {
  return false;
};

var _classes = {
  delegatedDraggable: "katavorio-delegated-draggable",
  // elements that are the delegated drag handler for a bunch of other elements
  draggable: "katavorio-draggable",
  // draggable elements
  droppable: "katavorio-droppable",
  // droppable elements
  drag: "katavorio-drag",
  // elements currently being dragged
  selected: "katavorio-drag-selected",
  // elements in current drag selection
  active: "katavorio-drag-active",
  // droppables that are targets of a currently dragged element
  hover: "katavorio-drag-hover",
  // droppables over which a matching drag element is hovering
  noSelect: "katavorio-drag-no-select",
  // added to the body to provide a hook to suppress text selection
  ghostProxy: "katavorio-ghost-proxy",
  // added to a ghost proxy element in use when a drag has exited the bounds of its parent.
  clonedDrag: "katavorio-clone-drag" // added to a node that is a clone of an element created at the start of a drag

};
var _events = ["stop", "start", "drag", "drop", "over", "out", "beforeStart"];

var _devNull = function _devNull() {};

var _each$1 = function _each(obj, fn) {
  if (obj == null) return;
  obj = !communityCore.IS.aString(obj) && obj.tagName == null && obj.length != null ? obj : [obj];

  for (var i = 0; i < obj.length; i++) {
    fn.apply(obj[i], [obj[i]]);
  }
}; //
// filters out events on all input elements, like textarea, checkbox, input, select.
// Collicat has a default list of these.
//


var _inputFilter = function _inputFilter(e, el, collicat) {
  var t = e.srcElement || e.target;
  return !matchesSelector(t, collicat.getInputFilterSelector(), el);
};

var Base =
/*#__PURE__*/
function () {
  function Base(el, k) {
    _classCallCheck(this, Base);

    this.el = el;
    this.k = k;

    _defineProperty(this, "_class", void 0);

    _defineProperty(this, "uuid", communityCore.uuid());

    _defineProperty(this, "enabled", true);

    _defineProperty(this, "scopes", []);
  }

  _createClass(Base, [{
    key: "setEnabled",
    value: function setEnabled(e) {
      this.enabled = e;
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.enabled;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this.enabled = !this.enabled;
    }
  }, {
    key: "addScope",
    value: function addScope(scopes) {
      var m = {};

      _each$1(this.scopes, function (s) {
        m[s] = true;
      });

      _each$1(scopes ? scopes.split(/\s+/) : [], function (s) {
        m[s] = true;
      });

      this.scopes.length = 0;

      for (var i in m) {
        this.scopes.push(i);
      }
    }
  }, {
    key: "removeScope",
    value: function removeScope(scopes) {
      var m = {};

      _each$1(this.scopes, function (s) {
        m[s] = true;
      });

      _each$1(scopes ? scopes.split(/\s+/) : [], function (s) {
        delete m[s];
      });

      this.scopes.length = 0;

      for (var i in m) {
        this.scopes.push(i);
      }
    }
  }, {
    key: "toggleScope",
    value: function toggleScope(scopes) {
      var m = {};

      _each$1(this.scopes, function (s) {
        m[s] = true;
      });

      _each$1(scopes ? scopes.split(/\s+/) : [], function (s) {
        if (m[s]) delete m[s];else m[s] = true;
      });

      this.scopes.length = 0;

      for (var i in m) {
        this.scopes.push(i);
      }
    }
  }]);

  return Base;
}();

function getConstrainingRectangle(el) {
  return [el.parentNode.scrollWidth, el.parentNode.scrollHeight];
}

var Drag =
/*#__PURE__*/
function (_Base) {
  _inherits(Drag, _Base);

  // a map of { spec -> [ fn, exclusion ] } entries.
  function Drag(el, params, k) {
    var _this;

    _classCallCheck(this, Drag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drag).call(this, el, k));

    _defineProperty(_assertThisInitialized(_this), "_class", void 0);

    _defineProperty(_assertThisInitialized(_this), "rightButtonCanDrag", void 0);

    _defineProperty(_assertThisInitialized(_this), "consumeStartEvent", void 0);

    _defineProperty(_assertThisInitialized(_this), "clone", void 0);

    _defineProperty(_assertThisInitialized(_this), "scroll", void 0);

    _defineProperty(_assertThisInitialized(_this), "_downAt", void 0);

    _defineProperty(_assertThisInitialized(_this), "_posAtDown", void 0);

    _defineProperty(_assertThisInitialized(_this), "_pagePosAtDown", void 0);

    _defineProperty(_assertThisInitialized(_this), "_pageDelta", [0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_moving", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialScroll", [0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_size", void 0);

    _defineProperty(_assertThisInitialized(_this), "_currentParentPosition", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ghostParentPosition", void 0);

    _defineProperty(_assertThisInitialized(_this), "_dragEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "_multipleDrop", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ghostProxyOffsets", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ghostDx", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ghostDy", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ghostProxyParent", void 0);

    _defineProperty(_assertThisInitialized(_this), "_isConstrained", false);

    _defineProperty(_assertThisInitialized(_this), "_useGhostProxy", void 0);

    _defineProperty(_assertThisInitialized(_this), "_activeSelectorParams", void 0);

    _defineProperty(_assertThisInitialized(_this), "_availableSelectors", []);

    _defineProperty(_assertThisInitialized(_this), "_ghostProxyFunction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_snapThreshold", void 0);

    _defineProperty(_assertThisInitialized(_this), "_grid", void 0);

    _defineProperty(_assertThisInitialized(_this), "_allowNegative", void 0);

    _defineProperty(_assertThisInitialized(_this), "_constrain", void 0);

    _defineProperty(_assertThisInitialized(_this), "_revertFunction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_canDrag", void 0);

    _defineProperty(_assertThisInitialized(_this), "_consumeFilteredEvents", void 0);

    _defineProperty(_assertThisInitialized(_this), "_parent", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ignoreZoom", void 0);

    _defineProperty(_assertThisInitialized(_this), "_filters", {});

    _defineProperty(_assertThisInitialized(_this), "_constrainRect", void 0);

    _defineProperty(_assertThisInitialized(_this), "_matchingDroppables", []);

    _defineProperty(_assertThisInitialized(_this), "_intersectingDroppables", []);

    _defineProperty(_assertThisInitialized(_this), "_elementToDrag", void 0);

    _defineProperty(_assertThisInitialized(_this), "downListener", void 0);

    _defineProperty(_assertThisInitialized(_this), "moveListener", void 0);

    _defineProperty(_assertThisInitialized(_this), "upListener", void 0);

    _defineProperty(_assertThisInitialized(_this), "listeners", {
      "start": [],
      "drag": [],
      "stop": [],
      "over": [],
      "out": [],
      "beforeStart": [],
      "revert": []
    });

    _this._class = _this.k.css.draggable;
    addClass(_this.el, _this._class);
    _this.downListener = _this._downListener.bind(_assertThisInitialized(_this));
    _this.upListener = _this._upListener.bind(_assertThisInitialized(_this));
    _this.moveListener = _this._moveListener.bind(_assertThisInitialized(_this));
    _this.rightButtonCanDrag = params.rightButtonCanDrag === true;
    _this.consumeStartEvent = params.consumeStartEvent !== false;
    _this._dragEl = _this.el;
    _this.clone = params.clone === true;
    _this.scroll = params.scroll === true;
    _this._multipleDrop = params.multipleDrop !== false;
    _this._grid = params.grid;
    _this._allowNegative = params.allowNegative;
    _this._revertFunction = params.revert;
    _this._canDrag = params.canDrag || TRUE;
    _this._consumeFilteredEvents = params.consumeFilteredEvents;
    _this._parent = params.parent;
    _this._ignoreZoom = params.ignoreZoom === true;
    _this._ghostProxyParent = params.ghostProxyParent;

    if (params.ghostProxy === true) {
      _this._useGhostProxy = TRUE;
    } else {
      if (params.ghostProxy && typeof params.ghostProxy === "function") {
        _this._useGhostProxy = params.ghostProxy;
      } else {
        _this._useGhostProxy = function (container, dragEl) {
          if (_this._activeSelectorParams && _this._activeSelectorParams.useGhostProxy) {
            return _this._activeSelectorParams.useGhostProxy(container, dragEl);
          } else {
            return false;
          }
        };
      }
    }

    if (params.makeGhostProxy) {
      _this._ghostProxyFunction = params.makeGhostProxy;
    } else {
      _this._ghostProxyFunction = function (el) {
        if (_this._activeSelectorParams && _this._activeSelectorParams.makeGhostProxy) {
          return _this._activeSelectorParams.makeGhostProxy(el);
        } else {
          return el.cloneNode(true);
        }
      };
    }

    if (params.selector) {
      var draggableId = _this.el.getAttribute("katavorio-draggable");

      if (draggableId == null) {
        draggableId = "" + new Date().getTime();

        _this.el.setAttribute("katavorio-draggable", draggableId);
      }

      _this._availableSelectors.push(params);
    }

    _this._snapThreshold = params.snapThreshold;

    _this._setConstrain(typeof params.constrain === "function" ? params.constrain : params.constrain || params.containment);

    _this.k.eventManager.on(_this.el, "mousedown", _this.downListener);

    return _this;
  }

  _createClass(Drag, [{
    key: "on",
    value: function on(evt, fn) {
      if (this.listeners[evt]) {
        this.listeners[evt].push(fn);
      }
    }
  }, {
    key: "off",
    value: function off(evt, fn) {
      if (this.listeners[evt]) {
        var l = [];

        for (var i = 0; i < this.listeners[evt].length; i++) {
          if (this.listeners[evt][i] !== fn) {
            l.push(this.listeners[evt][i]);
          }
        }

        this.listeners[evt] = l;
      }
    }
  }, {
    key: "_upListener",
    value: function _upListener(e) {
      if (this._downAt) {
        this._downAt = null;
        this.k.eventManager.off(document, "mousemove", this.moveListener);
        this.k.eventManager.off(document, "mouseup", this.upListener);
        removeClass(document.body, _classes.noSelect);
        this.unmark(e);
        this.stop(e);
        this._moving = false;

        if (this.clone) {
          this._dragEl && this._dragEl.parentNode && this._dragEl.parentNode.removeChild(this._dragEl);
          this._dragEl = null;
        } else {
          if (this._revertFunction && this._revertFunction(this._dragEl, _getPosition(this._dragEl)) === true) {
            _setPosition(this._dragEl, this._posAtDown);

            this._dispatch("revert", this._dragEl);
          }
        }
      }
    }
  }, {
    key: "_downListener",
    value: function _downListener(e) {
      if (e.defaultPrevented) {
        return;
      }

      var isNotRightClick = this.rightButtonCanDrag || e.which !== 3 && e.button !== 2;

      if (isNotRightClick && this.isEnabled() && this._canDrag()) {
        var _f = this._testFilter(e) && _inputFilter(e, this.el, this.k);

        if (_f) {
          this._activeSelectorParams = null;
          this._elementToDrag = null;

          if (this._availableSelectors.length === 0) {
            console.log("JSPLUMB: no available drag selectors");
          }

          var eventTarget = e.target || e.srcElement;
          var match = findMatchingSelector(this._availableSelectors, this.el, eventTarget);

          if (match != null) {
            this._activeSelectorParams = match[0];
            this._elementToDrag = match[1];
          }

          if (this._activeSelectorParams == null || this._elementToDrag == null) {
            return;
          } // dragInit gives a handler a chance to provide the actual element to drag. in the case of the endpoint stuff, for instance,
          // this is the drag placeholder. but for element drag the current value of `_elementToDrag` is the one we want to use.


          var initial = this._activeSelectorParams.dragInit ? this._activeSelectorParams.dragInit(this._elementToDrag) : null;

          if (initial != null) {
            this._elementToDrag = initial;
          }

          if (this.clone) {
            // here when doing a makeSource endpoint we dont end up with the right
            this._dragEl = this._elementToDrag.cloneNode(true);
            addClass(this._dragEl, _classes.clonedDrag);

            this._dragEl.setAttribute("id", null);

            this._dragEl.style.position = "absolute";

            if (this._parent != null) {
              var _p2 = _getPosition(this.el);

              this._dragEl.style.left = _p2[0] + "px";
              this._dragEl.style.top = _p2[1] + "px";

              this._parent.appendChild(this._dragEl);
            } else {
              // the clone node is added to the body; getOffsetRect gives us a value
              // relative to the body.
              var b = offsetRelativeToRoot(this._elementToDrag);
              this._dragEl.style.left = b[0] + "px";
              this._dragEl.style.top = b[1] + "px";
              document.body.appendChild(this._dragEl);
            }
          } else {
            this._dragEl = this._elementToDrag;
          }

          if (this.consumeStartEvent) {
            consume(e);
          }

          this._downAt = pageLocation(e);

          if (this._dragEl && this._dragEl.parentNode) {
            this._initialScroll = [this._dragEl.parentNode.scrollLeft, this._dragEl.parentNode.scrollTop];
          } //


          this.k.eventManager.on(document, "mousemove", this.moveListener);
          this.k.eventManager.on(document, "mouseup", this.upListener); //k.markSelection(this)

          addClass(document.body, _classes.noSelect);

          this._dispatch("beforeStart", {
            el: this.el,
            pos: this._posAtDown,
            e: e,
            drag: this
          });
        } else if (this._consumeFilteredEvents) {
          consume(e);
        }
      }
    }
  }, {
    key: "_moveListener",
    value: function _moveListener(e) {
      if (this._downAt) {
        if (!this._moving) {
          var dispatchResult = this._dispatch("start", {
            el: this.el,
            pos: this._posAtDown,
            e: e,
            drag: this
          });

          if (dispatchResult !== false) {
            if (!this._downAt) {
              return;
            }

            this.mark(dispatchResult);
            this._moving = true;
          } else {
            this.abort();
          }
        } // it is possible that the start event caused the drag to be aborted. So we check
        // again that we are currently dragging.


        if (this._downAt) {
          var _pos = pageLocation(e),
              dx = _pos[0] - this._downAt[0],
              dy = _pos[1] - this._downAt[1],
              _z = this._ignoreZoom ? 1 : this.k.getZoom();

          if (this._dragEl && this._dragEl.parentNode) {
            dx += this._dragEl.parentNode.scrollLeft - this._initialScroll[0];
            dy += this._dragEl.parentNode.scrollTop - this._initialScroll[1];
          }

          dx /= _z;
          dy /= _z;
          this.moveBy(dx, dy, e);
        }
      }
    }
  }, {
    key: "mark",
    value: function mark(payload) {
      this._posAtDown = _getPosition(this._dragEl);
      this._pagePosAtDown = getOffsetRect(this._dragEl);
      this._pageDelta = [this._pagePosAtDown[0] - this._posAtDown[0], this._pagePosAtDown[1] - this._posAtDown[1]];
      this._size = _getSize(this._dragEl);
      addClass(this._dragEl, this.k.css.drag);
      var cs;
      cs = getConstrainingRectangle(this._dragEl);
      this._constrainRect = {
        w: cs[0],
        h: cs[1]
      };
      this._ghostDx = 0;
      this._ghostDy = 0;
    }
  }, {
    key: "unmark",
    value: function unmark(e) {
      if (this._isConstrained && this._useGhostProxy(this._elementToDrag, this._dragEl)) {
        this._ghostProxyOffsets = [this._dragEl.offsetLeft - this._ghostDx, this._dragEl.offsetTop - this._ghostDy];

        this._dragEl.parentNode.removeChild(this._dragEl);

        this._dragEl = this._elementToDrag;
      } else {
        this._ghostProxyOffsets = null;
      }

      removeClass(this._dragEl, this.k.css.drag);
      this._isConstrained = false;
    }
  }, {
    key: "moveBy",
    value: function moveBy(dx, dy, e) {
      var desiredLoc = this.toGrid([this._posAtDown[0] + dx, this._posAtDown[1] + dy]),
          cPos = this._doConstrain(desiredLoc, this._dragEl, this._constrainRect, this._size); // if we should use a ghost proxy...


      if (this._useGhostProxy(this.el, this._dragEl)) {
        // and the element has been dragged outside of its parent bounds
        if (desiredLoc[0] !== cPos[0] || desiredLoc[1] !== cPos[1]) {
          // ...if ghost proxy not yet created
          if (!this._isConstrained) {
            // create it
            var gp = this._ghostProxyFunction(this._elementToDrag);

            addClass(gp, _classes.ghostProxy);

            if (this._ghostProxyParent) {
              this._ghostProxyParent.appendChild(gp); // find offset between drag el's parent the ghost parent
              // this._currentParentPosition = _getPosition(this._elementToDrag.parentNode, true)
              // this._ghostParentPosition = _getPosition(this._ghostProxyParent, true)


              this._currentParentPosition = getOffsetRect(this._elementToDrag.parentNode);
              this._ghostParentPosition = getOffsetRect(this._ghostProxyParent);
              this._ghostDx = this._currentParentPosition[0] - this._ghostParentPosition[0];
              this._ghostDy = this._currentParentPosition[1] - this._ghostParentPosition[1];
            } else {
              this._elementToDrag.parentNode.appendChild(gp);
            } // the ghost proxy is the drag element


            this._dragEl = gp; // set this flag so we dont recreate the ghost proxy

            this._isConstrained = true;
          } // now the drag position can be the desired position, as the ghost proxy can support it.


          cPos = desiredLoc;
        } else {
          // if the element is not outside of its parent bounds, and ghost proxy is in place,
          if (this._isConstrained) {
            // remove the ghost proxy from the dom
            this._dragEl.parentNode.removeChild(this._dragEl); // reset the drag element to the original element


            this._dragEl = this._elementToDrag; // clear this flag.

            this._isConstrained = false;
            this._currentParentPosition = null;
            this._ghostParentPosition = null;
            this._ghostDx = 0;
            this._ghostDy = 0;
          }
        }
      }

      var rect = {
        x: cPos[0],
        y: cPos[1],
        w: this._size[0],
        h: this._size[1]
      },
          pageRect = {
        x: rect.x + this._pageDelta[0],
        y: rect.y + this._pageDelta[1],
        w: rect.w,
        h: rect.h
      };

      _setPosition(this._dragEl, [cPos[0] + this._ghostDx, cPos[1] + this._ghostDy]);

      this._dispatch("drag", {
        el: this.el,
        pos: cPos,
        e: e,
        drag: this
      });
      /* test to see if the parent needs to be scrolled (future)
       if (scroll) {
       var pnsl = dragEl.parentNode.scrollLeft, pnst = dragEl.parentNode.scrollTop
       console.log("scroll!", pnsl, pnst)
       }*/

    }
  }, {
    key: "abort",
    value: function abort() {
      if (this._downAt != null) {
        this._upListener();
      }
    }
  }, {
    key: "getDragElement",
    value: function getDragElement(retrieveOriginalElement) {
      return retrieveOriginalElement ? this._elementToDrag || this.el : this._dragEl || this.el;
    }
  }, {
    key: "stop",
    value: function stop(e, force) {
      if (force || this._moving) {
        var positions = [],
            sel = [],
            dPos = _getPosition(this._dragEl);

        if (sel.length > 0) {
          for (var i = 0; i < sel.length; i++) {
            var _p3 = _getPosition(sel[i].el);

            positions.push([sel[i].el, {
              left: _p3[0],
              top: _p3[1]
            }, sel[i]]);
          }
        } else {
          positions.push([this._dragEl, {
            left: dPos[0],
            top: dPos[1]
          }, this]);
        }

        this._dispatch("stop", {
          el: this._dragEl,
          pos: this._ghostProxyOffsets || dPos,
          finalPos: dPos,
          e: e,
          drag: this,
          selection: positions
        });
      } else if (!this._moving) {
        this._activeSelectorParams.dragAbort ? this._activeSelectorParams.dragAbort(this._elementToDrag) : null;
      }
    }
  }, {
    key: "notifyStart",
    value: function notifyStart(e) {
      this._dispatch("start", {
        el: this.el,
        pos: _getPosition(this._dragEl),
        e: e,
        drag: this
      });
    }
  }, {
    key: "_dispatch",
    value: function _dispatch(evt, value) {
      var result = null;

      if (this._activeSelectorParams && this._activeSelectorParams[evt]) {
        result = this._activeSelectorParams[evt](value);
      } else if (this.listeners[evt]) {
        for (var i = 0; i < this.listeners[evt].length; i++) {
          try {
            var v = this.listeners[evt][i](value);

            if (v != null) {
              result = v;
            }
          } catch (e) {}
        }
      }

      return result;
    }
  }, {
    key: "_snap",
    value: function _snap(pos, gridX, gridY, thresholdX, thresholdY) {
      var _dx = Math.floor(pos[0] / gridX),
          _dxl = gridX * _dx,
          _dxt = _dxl + gridX,
          _x = Math.abs(pos[0] - _dxl) <= thresholdX ? _dxl : Math.abs(_dxt - pos[0]) <= thresholdX ? _dxt : pos[0];

      var _dy = Math.floor(pos[1] / gridY),
          _dyl = gridY * _dy,
          _dyt = _dyl + gridY,
          _y = Math.abs(pos[1] - _dyl) <= thresholdY ? _dyl : Math.abs(_dyt - pos[1]) <= thresholdY ? _dyt : pos[1];

      return [_x, _y];
    }
  }, {
    key: "resolveGrid",
    value: function resolveGrid() {
      var out = [this._grid, this._snapThreshold ? this._snapThreshold : DEFAULT_GRID_X / 2, this._snapThreshold ? this._snapThreshold : DEFAULT_GRID_Y / 2];

      if (this._activeSelectorParams != null && this._activeSelectorParams.grid != null) {
        out[0] = this._activeSelectorParams.grid;

        if (this._activeSelectorParams.snapThreshold != null) {
          out[1] = this._activeSelectorParams.snapThreshold;
          out[2] = this._activeSelectorParams.snapThreshold;
        }
      }

      return out;
    }
  }, {
    key: "toGrid",
    value: function toGrid(pos) {
      var _this$resolveGrid = this.resolveGrid(),
          _this$resolveGrid2 = _slicedToArray(_this$resolveGrid, 3),
          grid = _this$resolveGrid2[0],
          thresholdX = _this$resolveGrid2[1],
          thresholdY = _this$resolveGrid2[2];

      if (grid == null) {
        // if there's no grid, return the desired position.
        return pos;
      } else {
        var tx = grid ? grid[0] / 2 : thresholdX,
            ty = grid ? grid[1] / 2 : thresholdY;
        return this._snap(pos, grid[0], grid[1], tx, ty);
      }
    } // snap (x:number, y:number):PointArray {
    //
    //     const [grid, thresholdX, thresholdY] = this.resolveGrid()
    //
    //     if (this._dragEl == null) {
    //         return
    //     }
    //     x = x || (grid ? grid[0] : DEFAULT_GRID_X)
    //     y = y || (grid ? grid[1] : DEFAULT_GRID_Y)
    //
    //     const p = _getPosition(this._dragEl),
    //         tx = grid ? grid[0] / 2 : thresholdX,
    //         ty = grid ? grid[1] / 2 : thresholdY,
    //         snapped = this._snap(p, x, y, tx, ty)
    //
    //     _setPosition(this._dragEl, snapped)
    //     return snapped
    // }

  }, {
    key: "setUseGhostProxy",
    value: function setUseGhostProxy(val) {
      this._useGhostProxy = val ? TRUE : FALSE;
    }
  }, {
    key: "_negativeFilter",
    value: function _negativeFilter(pos) {
      return this._allowNegative === false ? [Math.max(0, pos[0]), Math.max(0, pos[1])] : pos;
    }
  }, {
    key: "_setConstrain",
    value: function _setConstrain(value) {
      var _this2 = this;

      this._constrain = typeof value === "function" ? value : value ? function (pos, dragEl, _constrainRect, _size) {
        return _this2._negativeFilter([Math.max(0, Math.min(_constrainRect.w - _size[0], pos[0])), Math.max(0, Math.min(_constrainRect.h - _size[1], pos[1]))]);
      } : function (pos) {
        return _this2._negativeFilter(pos);
      };
    }
    /**
     * Sets whether or not the Drag is constrained. A value of 'true' means constrain to parent bounds; a function
     * will be executed and returns true if the position is allowed.
     * @param value
     */

  }, {
    key: "setConstrain",
    value: function setConstrain(value) {
      this._setConstrain(value);
    }
  }, {
    key: "_doConstrain",
    value: function _doConstrain(pos, dragEl, _constrainRect, _size) {
      if (this._activeSelectorParams != null && this._activeSelectorParams.constrain && typeof this._activeSelectorParams.constrain === "function") {
        return this._activeSelectorParams.constrain(pos, dragEl, _constrainRect, _size);
      } else {
        return this._constrain(pos, dragEl, _constrainRect, _size);
      }
    }
    /**
     * Sets a function to call on drag stop, which, if it returns true, indicates that the given element should
     * revert to its position before the previous drag.
     * @param fn
     */

  }, {
    key: "setRevert",
    value: function setRevert(fn) {
      this._revertFunction = fn;
    }
  }, {
    key: "_assignId",
    value: function _assignId(obj) {
      if (typeof obj === "function") {
        obj._katavorioId = communityCore.uuid();
        return obj._katavorioId;
      } else {
        return obj;
      }
    }
  }, {
    key: "_testFilter",
    value: function _testFilter(e) {
      for (var key in this._filters) {
        var f = this._filters[key];
        var rv = f[0](e);

        if (f[1]) {
          rv = !rv;
        }

        if (!rv) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "addFilter",
    value: function addFilter(f, _exclude) {
      var _this3 = this;

      if (f) {
        var key = this._assignId(f);

        this._filters[key] = [function (e) {
          var t = e.srcElement || e.target;
          var m;

          if (communityCore.IS.aString(f)) {
            m = matchesSelector(t, f, _this3.el);
          } else if (typeof f === "function") {
            m = f(e, _this3.el);
          }

          return m;
        }, _exclude !== false];
      }
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(f) {
      var key = typeof f === "function" ? f._katavorioId : f;
      delete this._filters[key];
    }
  }, {
    key: "clearAllFilters",
    value: function clearAllFilters() {
      this._filters = {};
    }
  }, {
    key: "addSelector",
    value: function addSelector(params, atStart) {
      if (params.selector) {
        if (atStart) {
          this._availableSelectors.unshift(params);
        } else {
          this._availableSelectors.push(params);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.k.eventManager.off(this.el, "mousedown", this.downListener);
      this.k.eventManager.off(document, "mousemove", this.moveListener);
      this.k.eventManager.off(document, "mouseup", this.upListener);
      this.downListener = null;
      this.upListener = null;
      this.moveListener = null;
    }
  }]);

  return Drag;
}(Base);
var DEFAULT_INPUT_FILTER_SELECTOR = "input,textarea,select,button,option";
var Collicat =
/*#__PURE__*/
function () {
  function Collicat(options) {
    _classCallCheck(this, Collicat);

    _defineProperty(this, "eventManager", void 0);

    _defineProperty(this, "zoom", 1);

    _defineProperty(this, "css", {});

    _defineProperty(this, "inputFilterSelector", void 0);

    _defineProperty(this, "constrain", void 0);

    _defineProperty(this, "revert", void 0);

    options = options || {};
    this.inputFilterSelector = options.inputFilterSelector || DEFAULT_INPUT_FILTER_SELECTOR;
    this.eventManager = new EventManager();
    this.zoom = options.zoom || 1;

    var _c = options.css || {};

    communityCore.extend(this.css, _c);
    this.constrain = options.constrain;
    this.revert = options.revert;
  }

  _createClass(Collicat, [{
    key: "getZoom",
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: "setZoom",
    value: function setZoom(z) {
      this.zoom = z;
    }
  }, {
    key: "_prepareParams",
    value: function _prepareParams(p) {
      p = p || {};

      if (p.constrain == null && this.constrain != null) {
        p.constrain = this.constrain;
      }

      if (p.revert == null && this.revert != null) {
        p.revert = this.revert;
      }

      var _p = {
        events: {}
      },
          i;

      for (i in p) {
        _p[i] = p[i];
      } // events


      for (i = 0; i < _events.length; i++) {
        _p.events[_events[i]] = p[_events[i]] || _devNull;
      }

      return _p;
    }
    /**
     * Gets the selector identifying which input elements to filter from drag events.
     * @method getInputFilterSelector
     * @return {String} Current input filter selector.
     */

  }, {
    key: "getInputFilterSelector",
    value: function getInputFilterSelector() {
      return this.inputFilterSelector;
    }
    /**
     * Sets the selector identifying which input elements to filter from drag events.
     * @method setInputFilterSelector
     * @param {String} selector Input filter selector to set.
     * @return {Collicat} Current instance; method may be chained.
     */

  }, {
    key: "setInputFilterSelector",
    value: function setInputFilterSelector(selector) {
      this.inputFilterSelector = selector;
      return this;
    }
  }, {
    key: "draggable",
    value: function draggable(el, params) {
      if (el._katavorioDrag == null) {
        var _p4 = this._prepareParams(params);

        var d = new Drag(el, _p4, this);
        addClass(el, _classes.delegatedDraggable);
        el._katavorioDrag = d;
        return d;
      } else {
        return el._katavorioDrag;
      }
    }
  }, {
    key: "destroyDraggable",
    value: function destroyDraggable(el) {
      if (el._katavorioDrag) {
        // current selection? are we handling that?
        el._katavorioDrag.destroy();

        delete el._katavorioDrag;
      }
    }
  }]);

  return Collicat;
}();

var DEFAULT_LIST_OPTIONS = {
  deriveAnchor: function deriveAnchor(edge, index, ep, conn) {
    return {
      top: ["TopRight", "TopLeft"],
      bottom: ["BottomRight", "BottomLeft"]
    }[edge][index];
  }
};
var jsPlumbListManager =
/*#__PURE__*/
function () {
  function jsPlumbListManager(instance, params) {
    var _this = this;

    _classCallCheck(this, jsPlumbListManager);

    this.instance = instance;

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "count", void 0);

    _defineProperty(this, "lists", void 0);

    this.count = 0;
    this.lists = {};
    this.options = params || {};
    this.instance.bind("manageElement", function (p) {
      //look for [jtk-scrollable-list] elements and attach scroll listeners if necessary
      var scrollableLists = _this.instance.getSelector(p.el, "[jtk-scrollable-list]");

      for (var i = 0; i < scrollableLists.length; i++) {
        _this.addList(scrollableLists[i]);
      }
    });
    this.instance.bind("unmanageElement", function (p) {
      _this.removeList(p.el);
    });
    this.instance.bind("connection", function (c, evt) {
      if (evt == null) {
        // not added by mouse. look for an ancestor of the source and/or target element that is a scrollable list, and run
        // its scroll method.
        _this._maybeUpdateParentList(c.source);

        _this._maybeUpdateParentList(c.target);
      }
    });
  }

  _createClass(jsPlumbListManager, [{
    key: "addList",
    value: function addList(el, options) {
      var dp = communityCore.extend({}, DEFAULT_LIST_OPTIONS);
      communityCore.extend(dp, this.options);
      options = communityCore.extend(dp, options || {});
      var id = [this.instance._instanceIndex, this.count++].join("_");
      this.lists[id] = new jsPlumbList(this.instance, el, options, id);
      return this.lists[id];
    }
  }, {
    key: "removeList",
    value: function removeList(el) {
      var list = this.lists[el._jsPlumbList];

      if (list) {
        list.destroy();
        delete this.lists[el._jsPlumbList];
      }
    }
  }, {
    key: "_maybeUpdateParentList",
    value: function _maybeUpdateParentList(el) {
      var parent = el.parentNode,
          container = this.instance.getContainer();

      while (parent != null && parent !== container) {
        if (parent._jsPlumbList != null && this.lists[parent._jsPlumbList] != null) {
          parent._jsPlumbScrollHandler && parent._jsPlumbScrollHandler();
          return;
        }

        parent = parent.parentNode;
      }
    }
  }]);

  return jsPlumbListManager;
}();
var jsPlumbList =
/*#__PURE__*/
function () {
  function jsPlumbList(instance, el, options, id) {
    _classCallCheck(this, jsPlumbList);

    this.instance = instance;
    this.el = el;
    this.options = options;

    _defineProperty(this, "_scrollHandler", void 0);

    el._jsPlumbList = id;
    instance.setAttribute(el, "jtk-scrollable-list", "true");
    this._scrollHandler = this.scrollHandler.bind(this);
    el._jsPlumbScrollHandler = this._scrollHandler;
    instance.on(el, "scroll", this._scrollHandler);

    this._scrollHandler(); // run it once; there may be connections already.

  } //
  // Derive an anchor to use for the current situation. In contrast to the way we derive an endpoint, here we use `anchor` from the options, if present, as
  // our first choice, and then `deriveAnchor` as our next choice. There is a default `deriveAnchor` implementation that uses TopRight/TopLeft for top and
  // BottomRight/BottomLeft for bottom.
  //
  // edge - "top" or "bottom"
  // index - 0 when endpoint is connection source, 1 when endpoint is connection target
  // ep - the endpoint that is being proxied
  // conn - the connection that is being proxied
  //


  _createClass(jsPlumbList, [{
    key: "deriveAnchor",
    value: function deriveAnchor(edge, index, ep, conn) {
      return this.options.anchor ? this.options.anchor : this.options.deriveAnchor(edge, index, ep, conn);
    } //
    // Derive an endpoint to use for the current situation. We'll use a `deriveEndpoint` function passed in to the options as our first choice,
    // followed by `endpoint` (an endpoint spec) from the options, and failing either of those we just use the `type` of the endpoint that is being proxied.
    //
    // edge - "top" or "bottom"
    // index - 0 when endpoint is connection source, 1 when endpoint is connection target
    // endpoint - the endpoint that is being proxied
    // connection - the connection that is being proxied
    //

  }, {
    key: "deriveEndpoint",
    value: function deriveEndpoint(edge, index, ep, conn) {
      return this.options.deriveEndpoint ? this.options.deriveEndpoint(edge, index, ep, conn) : this.options.endpoint ? this.options.endpoint : ep.endpoint.getType();
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      var _this2 = this;

      var children = this.instance.getSelector(this.el, "[jtk-managed]");
      var elId = this.instance.getId(this.el);

      var _loop = function _loop(i) {
        if (children[i].offsetTop < _this2.el.scrollTop) {
          if (!children[i]._jsPlumbProxies) {
            children[i]._jsPlumbProxies = children[i]._jsPlumbProxies || [];

            _this2.instance.select({
              source: children[i]
            }).each(function (c) {
              _this2.instance.proxyConnection(c, 0, _this2.el, elId, function () {
                return _this2.deriveEndpoint("top", 0, c.endpoints[0], c);
              }, function () {
                return _this2.deriveAnchor("top", 0, c.endpoints[0], c);
              });

              children[i]._jsPlumbProxies.push([c, 0]);
            });

            _this2.instance.select({
              target: children[i]
            }).each(function (c) {
              _this2.instance.proxyConnection(c, 1, _this2.el, elId, function () {
                return _this2.deriveEndpoint("top", 1, c.endpoints[1], c);
              }, function () {
                return _this2.deriveAnchor("top", 1, c.endpoints[1], c);
              });

              children[i]._jsPlumbProxies.push([c, 1]);
            });
          }
        } //
        else if (children[i].offsetTop + children[i].offsetHeight > _this2.el.scrollTop + _this2.el.offsetHeight) {
            if (!children[i]._jsPlumbProxies) {
              children[i]._jsPlumbProxies = children[i]._jsPlumbProxies || [];

              _this2.instance.select({
                source: children[i]
              }).each(function (c) {
                _this2.instance.proxyConnection(c, 0, _this2.el, elId, function () {
                  return _this2.deriveEndpoint("bottom", 0, c.endpoints[0], c);
                }, function () {
                  return _this2.deriveAnchor("bottom", 0, c.endpoints[0], c);
                });

                children[i]._jsPlumbProxies.push([c, 0]);
              });

              _this2.instance.select({
                target: children[i]
              }).each(function (c) {
                _this2.instance.proxyConnection(c, 1, _this2.el, elId, function () {
                  return _this2.deriveEndpoint("bottom", 1, c.endpoints[1], c);
                }, function () {
                  return _this2.deriveAnchor("bottom", 1, c.endpoints[1], c);
                });

                children[i]._jsPlumbProxies.push([c, 1]);
              });
            }
          } else if (children[i]._jsPlumbProxies) {
            for (var j = 0; j < children[i]._jsPlumbProxies.length; j++) {
              _this2.instance.unproxyConnection(children[i]._jsPlumbProxies[j][0], children[i]._jsPlumbProxies[j][1], elId);
            }

            delete children[i]._jsPlumbProxies;
          }

        _this2.instance.revalidate(children[i]);
      };

      for (var i = 0; i < children.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.instance.off(this.el, "scroll", this._scrollHandler);
      delete this.el._jsPlumbScrollHandler;
      var children = this.instance.getSelector(this.el, "[jtk-managed]");
      var elId = this.instance.getId(this.el);

      for (var i = 0; i < children.length; i++) {
        if (children[i]._jsPlumbProxies) {
          for (var j = 0; j < children[i]._jsPlumbProxies.length; j++) {
            this.instance.unproxyConnection(children[i]._jsPlumbProxies[j][0], children[i]._jsPlumbProxies[j][1], elId);
          }

          delete children[i]._jsPlumbProxies;
        }
      }
    }
  }]);

  return jsPlumbList;
}();

var HTMLElementOverlay =
/*#__PURE__*/
function () {
  function HTMLElementOverlay(instance, overlay) {
    _classCallCheck(this, HTMLElementOverlay);

    this.instance = instance;
    this.overlay = overlay;

    _defineProperty(this, "htmlElementOverlay", void 0);

    this.htmlElementOverlay = overlay;
  }

  _createClass(HTMLElementOverlay, null, [{
    key: "createElement",
    value: function createElement$1(o) {
      return createElement("div", {}, o.instance.overlayClass + " " + (o.cssClass ? o.cssClass : ""));
    }
  }, {
    key: "getElement",
    value: function getElement(o, component, elementCreator) {
      if (o.canvas == null) {
        if (elementCreator && component) {
          o.canvas = elementCreator(component);
        } else {
          o.canvas = HTMLElementOverlay.createElement(o);
        }

        o.canvas.style.position = "absolute";
        o.instance.appendElement(o.canvas, o.instance.getContainer());
        o.instance.getId(o.canvas);
        var ts = "translate(-50%, -50%)";
        o.canvas.style.webkitTransform = ts;
        o.canvas.style.mozTransform = ts;
        o.canvas.style.msTransform = ts;
        o.canvas.style.oTransform = ts;
        o.canvas.style.transform = ts;

        if (!o.isVisible()) {
          o.canvas.style.display = "none";
        }

        o.canvas.jtk = {
          overlay: o
        };
      }

      return o.canvas;
    }
  }, {
    key: "destroy",
    value: function destroy(o) {
      var el = HTMLElementOverlay.getElement(o);
      el.parentNode.removeChild(el);
      delete o.canvas;
      delete o.cachedDimensions;
    }
  }, {
    key: "_getDimensions",
    value: function _getDimensions(o, forceRefresh) {
      if (o.cachedDimensions == null || forceRefresh) {
        o.cachedDimensions = [1, 1];
      }

      return o.cachedDimensions;
    }
  }]);

  return HTMLElementOverlay;
}();

var SVGElementOverlay =
/*#__PURE__*/
function () {
  function SVGElementOverlay() {
    _classCallCheck(this, SVGElementOverlay);
  }

  _createClass(SVGElementOverlay, null, [{
    key: "ensurePath",
    value: function ensurePath(o) {
      if (o.path == null) {
        o.path = _node("path", {});
        var parent = null;

        if (o.component instanceof communityCore.Connection) {
          var connector = o.component.getConnector();
          parent = connector != null ? connector.canvas : null;
        } else if (o.component instanceof communityCore.Endpoint) {
          var endpoint = o.component.endpoint;
          parent = endpoint != null ? endpoint.svg : endpoint;
        }

        if (parent != null) {
          _appendAtIndex(parent, o.path, 1);
        }

        o.instance.addClass(o.path, o.instance.overlayClass);
        o.path.jtk = {
          overlay: o
        };
      }

      return o.path;
    }
  }, {
    key: "paint",
    value: function paint(o, path, params, extents) {
      this.ensurePath(o);
      var offset = [0, 0];

      if (extents.xmin < 0) {
        offset[0] = -extents.xmin;
      }

      if (extents.ymin < 0) {
        offset[1] = -extents.ymin;
      }

      var a = {
        "d": path,
        //this.makePath(params.d),
        stroke: params.stroke ? params.stroke : null,
        fill: params.fill ? params.fill : null,
        transform: "translate(" + offset[0] + "," + offset[1] + ")",
        "pointer-events": "visibleStroke"
      };

      _attr(o.path, a);
    }
  }, {
    key: "destroy",
    value: function destroy(o, force) {
      var _o = o;

      if (_o.path != null && _o.path.parentNode != null) {
        _o.path.parentNode.removeChild(_o.path);
      }

      if (_o.bgPath != null && _o.bgPath.parentNode != null) {
        _o.bgPath.parentNode.removeChild(_o.bgPath);
      }

      delete _o.path;
      delete _o.bgPath;
    }
  }]);

  return SVGElementOverlay;
}();

var SvgComponent =
/*#__PURE__*/
function () {
  function SvgComponent() {
    _classCallCheck(this, SvgComponent);
  }

  _createClass(SvgComponent, null, [{
    key: "paint",
    value: function paint(connector, useDivWrapper, paintStyle, extents) {
      if (paintStyle != null) {
        var xy = [connector.x, connector.y],
            wh = [connector.w, connector.h],
            p;

        if (extents != null) {
          if (extents.xmin < 0) {
            xy[0] += extents.xmin;
          }

          if (extents.ymin < 0) {
            xy[1] += extents.ymin;
          }

          wh[0] = extents.xmax + (extents.xmin < 0 ? -extents.xmin : 0);
          wh[1] = extents.ymax + (extents.ymin < 0 ? -extents.ymin : 0);
        }

        if (useDivWrapper) {
          sizeElement(connector.canvas, xy[0], xy[1], wh[0], wh[1]);
          xy[0] = 0;
          xy[1] = 0;
          p = _pos([0, 0]);

          _attr(connector.svg, {
            "style": p,
            "width": "" + (wh[0] || 0),
            "height": "" + (wh[1] || 0)
          });
        } else {
          p = _pos([xy[0], xy[1]]);

          _attr(connector.canvas, {
            "style": p,
            "width": "" + (wh[0] || 0),
            "height": "" + (wh[1] || 0)
          });
        }
      }
    }
  }]);

  return SvgComponent;
}();

/**
 * Renderer for a connector that uses an `svg` element in the DOM.
 */

var SvgElementConnector =
/*#__PURE__*/
function () {
  function SvgElementConnector() {
    _classCallCheck(this, SvgElementConnector);
  }

  _createClass(SvgElementConnector, null, [{
    key: "paint",
    value: function paint(connector, paintStyle, extents) {
      this.getConnectorElement(connector);
      SvgComponent.paint(connector, false, paintStyle, extents);
      var segments = connector.getSegments();
      var p = "",
          offset = [0, 0];

      if (extents.xmin < 0) {
        offset[0] = -extents.xmin;
      }

      if (extents.ymin < 0) {
        offset[1] = -extents.ymin;
      }

      if (segments.length > 0) {
        p = connector.getPathData();
        var a = {
          d: p,
          transform: "translate(" + offset[0] + "," + offset[1] + ")",
          "pointer-events": "visibleStroke"
        },
            outlineStyle = null,
            d = [connector.x, connector.y, connector.w, connector.h]; // outline style.  actually means drawing an svg object underneath the main one.

        if (paintStyle.outlineStroke) {
          var outlineWidth = paintStyle.outlineWidth || 1,
              outlineStrokeWidth = paintStyle.strokeWidth + 2 * outlineWidth;
          outlineStyle = communityCore.extend({}, paintStyle);
          outlineStyle.stroke = paintStyle.outlineStroke;
          outlineStyle.strokeWidth = outlineStrokeWidth;

          if (connector.bgPath == null) {
            connector.bgPath = _node("path", a);
            connector.instance.addClass(connector.bgPath, connector.instance.connectorOutlineClass);

            _appendAtIndex(connector.canvas, connector.bgPath, 0);
          } else {
            _attr(connector.bgPath, a);
          }

          _applyStyles(connector.canvas, connector.bgPath, outlineStyle);
        }

        if (connector.path == null) {
          connector.path = _node("path", a);

          _appendAtIndex(connector.canvas, connector.path, paintStyle.outlineStroke ? 1 : 0);
        } else {
          _attr(connector.path, a);
        }

        _applyStyles(connector.canvas, connector.path, paintStyle);
      }
    }
  }, {
    key: "getConnectorElement",
    value: function getConnectorElement(c) {
      if (c.canvas != null) {
        return c.canvas;
      } else {
        var svg = _node("svg", {
          "style": "",
          "width": "0",
          "height": "0",
          "pointer-events": "none",
          "position": "absolute"
        });

        c.canvas = svg;
        c.instance.appendElement(c.canvas, c.instance.getContainer()); // TODO BG CANVAS! does it even need to be a canvas? i suppose not.

        if (c.cssClass != null) {
          c.instance.addClass(svg, c.cssClass);
        }

        c.instance.addClass(svg, c.instance.connectorClass);
        svg.jtk = svg.jtk || {};
        svg.jtk.connector = c;
        return svg;
      }
    }
  }]);

  return SvgElementConnector;
}();

/**
 * Superclass for endpoint renderers that use an `svg` element wrapped in a `div` in the DOM.
 * Type specific subclasses are expected to implement a `makeNode` and `updateNode` method,
 * which respectively create the type-specific elements, and update them at paint time.
 */

var SvgEndpoint =
/*#__PURE__*/
function () {
  function SvgEndpoint() {
    _classCallCheck(this, SvgEndpoint);
  }

  _createClass(SvgEndpoint, null, [{
    key: "getEndpointElement",
    value: function getEndpointElement(ep) {
      if (ep.canvas != null) {
        return ep.canvas;
      } else {
        var svg = _node("svg", {
          "style": "",
          "width": "0",
          "height": "0",
          "pointer-events": "none",
          "position": "absolute"
        });

        ep.svg = svg;
        var canvas = createElement("div", {
          position: "absolute"
        });
        ep.canvas = canvas;
        var classes = ep.classes.join(" ");
        ep.instance.addClass(canvas, classes);
        var scopes = ep.endpoint.scope.split(/\s/);

        for (var i = 0; i < scopes.length; i++) {
          ep.instance.setAttribute(canvas, "jtk-scope-" + scopes[i], "true");
        }

        if (!ep.instance._suspendDrawing) {
          sizeElement(canvas, 0, 0, 1, 1);
        } //(ep as any).canvas = svg


        ep.instance.appendElement(canvas, ep.instance.getContainer());
        canvas.appendChild(svg); // TODO BG CANVAS! does it even need to be a canvas? i suppose not.

        if (ep.cssClass != null) {
          ep.instance.addClass(canvas, ep.cssClass);
        }

        ep.instance.addClass(canvas, ep.instance.endpointClass);
        canvas.jtk = canvas.jtk || {};
        canvas.jtk.endpoint = ep.endpoint;
        return canvas;
      }
    }
  }, {
    key: "paint",
    value: function paint(ep, handlers, paintStyle) {
      this.getEndpointElement(ep);
      SvgComponent.paint(ep, true, paintStyle); //

      var s = communityCore.extend({}, paintStyle);

      if (s.outlineStroke) {
        s.stroke = s.outlineStroke;
      } //


      if (ep.node == null) {
        ep.node = handlers.makeNode(ep, s);
        ep.svg.appendChild(ep.node);
      } else if (handlers.updateNode != null) {
        handlers.updateNode(ep, ep.node);
      }

      _applyStyles(ep.canvas, ep.node, s, [ep.x, ep.y, ep.w, ep.h]);
    }
  }]);

  return SvgEndpoint;
}();

var endpointMap = {};
function registerEndpointRenderer(name, fns) {
  endpointMap[name] = fns;
}

function _genLoc$1(prefix, e) {
  if (e == null) {
    return [0, 0];
  }

  var ts = _touches$1(e),
      t = _getTouch$1(ts, 0);

  return [t[prefix + "X"], t[prefix + "Y"]];
}

var _pageLocation = _genLoc$1.bind(null, "page");

function _getTouch$1(touches, idx) {
  return touches.item ? touches.item(idx) : touches[idx];
}

function _touches$1(e) {
  var _e = e;
  return _e.touches && _e.touches.length > 0 ? _e.touches : _e.changedTouches && _e.changedTouches.length > 0 ? _e.changedTouches : _e.targetTouches && _e.targetTouches.length > 0 ? _e.targetTouches : [_e];
}

function setVisible(component, v) {
  if (component.canvas) {
    component.canvas.style.display = v ? "block" : "none";
  }
}

function cleanup(component) {
  if (component.canvas) {
    component.canvas.parentNode.removeChild(component.canvas);
  }

  delete component.canvas;
  delete component.svg;
}

function getEndpointCanvas(ep) {
  return ep.canvas;
}

function getLabelElement(o) {
  return HTMLElementOverlay.getElement(o);
}

function getCustomElement(o) {
  return HTMLElementOverlay.getElement(o, o.component, function (c) {
    var el = o.create(c);
    o.instance.addClass(el, o.instance.overlayClass);
    return el;
  });
} // ------------------------------------------------------------------------------------------------------------

/**
 * JsPlumbInstance that renders to the DOM in a browser, and supports dragging of elements/connections.
 *
 */


var BrowserJsPlumbInstance =
/*#__PURE__*/
function (_JsPlumbInstance) {
  _inherits(BrowserJsPlumbInstance, _JsPlumbInstance);

  /**
   * Whether or not elements should be draggable. This can be provided in the constructor arguments, or simply toggled on the
   * class. The default value is `true`.
   */
  function BrowserJsPlumbInstance(_instanceIndex, defaults, helpers) {
    var _this;

    _classCallCheck(this, BrowserJsPlumbInstance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BrowserJsPlumbInstance).call(this, _instanceIndex, defaults, helpers)); // by default, elements are draggable

    _this._instanceIndex = _instanceIndex;

    _defineProperty(_assertThisInitialized(_this), "dragManager", void 0);

    _defineProperty(_assertThisInitialized(_this), "_connectorClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_connectorDblClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_endpointClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_endpointDblClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_overlayClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_overlayDblClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_connectorMouseover", void 0);

    _defineProperty(_assertThisInitialized(_this), "_connectorMouseout", void 0);

    _defineProperty(_assertThisInitialized(_this), "_endpointMouseover", void 0);

    _defineProperty(_assertThisInitialized(_this), "_endpointMouseout", void 0);

    _defineProperty(_assertThisInitialized(_this), "_overlayMouseover", void 0);

    _defineProperty(_assertThisInitialized(_this), "_overlayMouseout", void 0);

    _defineProperty(_assertThisInitialized(_this), "_elementClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "_elementMouseenter", void 0);

    _defineProperty(_assertThisInitialized(_this), "_elementMouseexit", void 0);

    _defineProperty(_assertThisInitialized(_this), "_elementMousemove", void 0);

    _defineProperty(_assertThisInitialized(_this), "eventManager", void 0);

    _defineProperty(_assertThisInitialized(_this), "listManager", void 0);

    _defineProperty(_assertThisInitialized(_this), "draggingClass", "jtk-dragging");

    _defineProperty(_assertThisInitialized(_this), "elementDraggingClass", "jtk-element-dragging");

    _defineProperty(_assertThisInitialized(_this), "hoverClass", "jtk-hover");

    _defineProperty(_assertThisInitialized(_this), "sourceElementDraggingClass", "jtk-source-element-dragging");

    _defineProperty(_assertThisInitialized(_this), "targetElementDraggingClass", "jtk-target-element-dragging");

    _defineProperty(_assertThisInitialized(_this), "hoverSourceClass", "jtk-source-hover");

    _defineProperty(_assertThisInitialized(_this), "hoverTargetClass", "jtk-target-hover");

    _defineProperty(_assertThisInitialized(_this), "dragSelectClass", "jtk-drag-select");

    _defineProperty(_assertThisInitialized(_this), "elementsDraggable", void 0);

    _defineProperty(_assertThisInitialized(_this), "elementDragHandler", void 0);

    _defineProperty(_assertThisInitialized(_this), "svg", {
      node: function node(name, attributes) {
        return _node(name, attributes);
      },
      attr: function attr(node, attributes) {
        return _attr(node, attributes);
      },
      pos: function pos(d) {
        return _pos(d);
      }
    });

    _this.elementsDraggable = defaults && defaults.elementsDraggable !== false;
    _this.eventManager = new EventManager();
    _this.dragManager = new DragManager(_assertThisInitialized(_this));
    _this.listManager = new jsPlumbListManager(_assertThisInitialized(_this));

    _this.dragManager.addHandler(new EndpointDragHandler(_assertThisInitialized(_this)));

    var groupDragOptions = {
      constrain: function constrain(desiredLoc, dragEl, constrainRect, size) {
        var x = desiredLoc[0],
            y = desiredLoc[1];

        if (dragEl[communityCore.PARENT_GROUP_KEY] && dragEl[communityCore.PARENT_GROUP_KEY].constrain) {
          x = Math.max(desiredLoc[0], 0);
          y = Math.max(desiredLoc[1], 0);
          x = Math.min(x, constrainRect.w - size[0]);
          y = Math.min(y, constrainRect.h - size[1]);
        }

        return [x, y];
      }
    };

    _this.dragManager.addHandler(new GroupDragHandler(_assertThisInitialized(_this)), groupDragOptions);

    _this.elementDragHandler = new ElementDragHandler(_assertThisInitialized(_this));

    _this.dragManager.addHandler(_this.elementDragHandler, defaults && defaults.dragOptions); // ---


    var _connClick = function _connClick(event, e) {
      if (!e.defaultPrevented) {
        var connectorElement = findParent(getEventSource(e), communityCore.SELECTOR_CONNECTOR, this.getContainer());
        this.fire(event, connectorElement.jtk.connector.connection, e);
      }
    };

    _this._connectorClick = _connClick.bind(_assertThisInitialized(_this), communityCore.EVENT_CLICK);
    _this._connectorDblClick = _connClick.bind(_assertThisInitialized(_this), communityCore.EVENT_DBL_CLICK);

    var _connectorHover = function _connectorHover(state, e) {
      var el = getEventSource(e).parentNode;

      if (el.jtk && el.jtk.connector) {
        this.setConnectorHover(el.jtk.connector, state);
        this.fire(state ? communityCore.EVENT_CONNECTION_MOUSEOVER : communityCore.EVENT_CONNECTION_MOUSEOUT, el.jtk.connector.connection, e);
      }
    };

    _this._connectorMouseover = _connectorHover.bind(_assertThisInitialized(_this), true);
    _this._connectorMouseout = _connectorHover.bind(_assertThisInitialized(_this), false); // ---

    var _epClick = function _epClick(event, e, endpointElement) {
      if (!e.defaultPrevented) {
        this.fire(event, endpointElement.jtk.endpoint, e);
      }
    };

    _this._endpointClick = _epClick.bind(_assertThisInitialized(_this), communityCore.EVENT_ENDPOINT_CLICK);
    _this._endpointDblClick = _epClick.bind(_assertThisInitialized(_this), communityCore.EVENT_ENDPOINT_DBL_CLICK);

    var _endpointHover = function _endpointHover(state, e) {
      var el = getEventSource(e);

      if (el.jtk && el.jtk.endpoint) {
        this.setEndpointHover(el.jtk.endpoint, state);
        this.fire(state ? communityCore.EVENT_ENDPOINT_MOUSEOVER : communityCore.EVENT_ENDPOINT_MOUSEOUT, el.jtk.endpoint, e);
      }
    };

    _this._endpointMouseover = _endpointHover.bind(_assertThisInitialized(_this), true);
    _this._endpointMouseout = _endpointHover.bind(_assertThisInitialized(_this), false); // ---

    var _oClick = function _oClick(method, e) {
      consume(e);

      var overlayElement = findParent(getEventSource(e), communityCore.SELECTOR_OVERLAY, this.getContainer());
      var overlay = overlayElement.jtk.overlay;

      if (overlay) {
        overlay[method](e);
      }
    };

    _this._overlayClick = _oClick.bind(_assertThisInitialized(_this), communityCore.EVENT_CLICK);
    _this._overlayDblClick = _oClick.bind(_assertThisInitialized(_this), communityCore.EVENT_DBL_CLICK);

    var _overlayHover = function _overlayHover(state, e) {
      var overlayElement = findParent(getEventSource(e), communityCore.SELECTOR_OVERLAY, this.getContainer());
      var overlay = overlayElement.jtk.overlay;

      if (overlay) {
        this.setOverlayHover(overlay, state);
      }
    };

    _this._overlayMouseover = _overlayHover.bind(_assertThisInitialized(_this), true);
    _this._overlayMouseout = _overlayHover.bind(_assertThisInitialized(_this), false); // ---

    var _elementClick = function _elementClick(event, e, target) {
      if (!e.defaultPrevented) {
        this.fire(e.detail === 1 ? communityCore.EVENT_ELEMENT_CLICK : communityCore.EVENT_ELEMENT_DBL_CLICK, target, e);
      }
    };

    _this._elementClick = _elementClick.bind(_assertThisInitialized(_this), communityCore.EVENT_ELEMENT_CLICK);

    var _elementHover = function _elementHover(state, e) {
      this.fire(state ? communityCore.EVENT_ELEMENT_MOUSE_OVER : communityCore.EVENT_ELEMENT_MOUSE_OUT, getEventSource(e), e);
    };

    _this._elementMouseenter = _elementHover.bind(_assertThisInitialized(_this), true);
    _this._elementMouseexit = _elementHover.bind(_assertThisInitialized(_this), false);

    var _elementMousemove = function _elementMousemove(e) {
      if (!e.defaultPrevented) {
        var element = findParent(getEventSource(e), communityCore.SELECTOR_MANAGED_ELEMENT, this.getContainer());
        this.fire(communityCore.EVENT_ELEMENT_MOUSE_MOVE, element, e);
      }
    };

    _this._elementMousemove = _elementMousemove.bind(_assertThisInitialized(_this)); // ------------

    _this._attachEventDelegates();

    return _this;
  }

  _createClass(BrowserJsPlumbInstance, [{
    key: "addDragFilter",
    value: function addDragFilter(filter, exclude) {
      this.dragManager.addFilter(filter, exclude);
    }
  }, {
    key: "removeDragFilter",
    value: function removeDragFilter(filter) {
      this.dragManager.removeFilter(filter);
    }
  }, {
    key: "getElement",
    value: function getElement(el) {
      if (el == null) {
        return null;
      }

      return typeof el === "string" ? document.getElementById(el) : el;
    }
  }, {
    key: "getElementById",
    value: function getElementById(elId) {
      return document.getElementById(elId);
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      element.parentNode && element.parentNode.removeChild(element);
    }
  }, {
    key: "appendElement",
    value: function appendElement(el, parent) {
      if (parent) {
        parent.appendChild(el);
      }
    }
  }, {
    key: "_getAssociatedElements",
    value: function _getAssociatedElements(el) {
      var els = el.querySelectorAll(communityCore.SELECTOR_MANAGED_ELEMENT);
      var a = [];
      Array.prototype.push.apply(a, els);
      return a;
    }
  }, {
    key: "shouldFireEvent",
    value: function shouldFireEvent(event, value, originalEvent) {
      return true;
    }
  }, {
    key: "getClass",
    value: function getClass$1(el) {
      return getClass(el);
    }
  }, {
    key: "addClass",
    value: function addClass$1(el, clazz) {
      addClass(el, clazz);
    }
  }, {
    key: "hasClass",
    value: function hasClass$1(el, clazz) {
      return hasClass(el, clazz);
    }
  }, {
    key: "removeClass",
    value: function removeClass$1(el, clazz) {
      removeClass(el, clazz);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass$1(el, clazz) {
      toggleClass(el, clazz);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(el, name, value) {
      el.setAttribute(name, value);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(el, name) {
      return el.getAttribute(name);
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(el, atts) {
      for (var i in atts) {
        el.setAttribute(i, atts[i]);
      }
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(el, attName) {
      el.removeAttribute && el.removeAttribute(attName);
    }
  }, {
    key: "on",
    value: function on(el, event, callbackOrSelector, callback) {
      if (callback == null) {
        this.eventManager.on(el, event, callbackOrSelector);
      } else {
        this.eventManager.on(el, event, callbackOrSelector, callback);
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(el, event, callback) {
      this.eventManager.off(el, event, callback);
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(el, event, originalEvent, payload) {
      this.eventManager.trigger(el, event, originalEvent, payload);
    }
  }, {
    key: "_getOffsetRelativeToRoot",
    value: function _getOffsetRelativeToRoot(el) {
      return offsetRelativeToRoot(el);
    }
  }, {
    key: "_getOffset",
    value: function _getOffset(el) {
      var container = this.getContainer();

      var out = {
        left: el.offsetLeft,
        top: el.offsetTop
      },
          op = el !== container && el.offsetParent !== container ? el.offsetParent : null,
          _maybeAdjustScroll = function _maybeAdjustScroll(offsetParent) {
        if (offsetParent != null && offsetParent !== document.body && (offsetParent.scrollTop > 0 || offsetParent.scrollLeft > 0)) {
          out.left -= offsetParent.scrollLeft;
          out.top -= offsetParent.scrollTop;
        }
      };

      while (op != null) {
        out.left += op.offsetLeft;
        out.top += op.offsetTop;

        _maybeAdjustScroll(op);

        op = op.offsetParent === container ? null : op.offsetParent;
      } // if container is scrolled and the element (or its offset parent) is not absolute or fixed, adjust accordingly.


      if (container != null && (container.scrollTop > 0 || container.scrollLeft > 0)) {
        var pp = el.offsetParent != null ? this.getStyle(el.offsetParent, communityCore.PROPERTY_POSITION) : communityCore.STATIC,
            p = this.getStyle(el, communityCore.PROPERTY_POSITION);

        if (p !== communityCore.ABSOLUTE && p !== communityCore.FIXED && pp !== communityCore.ABSOLUTE && pp !== communityCore.FIXED) {
          out.left -= container.scrollLeft;
          out.top -= container.scrollTop;
        }
      }

      return out;
    }
  }, {
    key: "_getSize",
    value: function _getSize(el) {
      return [el.offsetWidth, el.offsetHeight];
    }
  }, {
    key: "getStyle",
    value: function getStyle(el, prop) {
      if (_typeof(window.getComputedStyle) !== communityCore.UNDEFINED) {
        return getComputedStyle(el, null).getPropertyValue(prop);
      } else {
        return el.currentStyle[prop];
      }
    }
  }, {
    key: "getSelector",
    value: function getSelector(ctx, spec) {
      var sel = null;

      if (arguments.length === 1) {
        if (!communityCore.isString(ctx)) {
          var nodeList = document.createDocumentFragment();
          nodeList.appendChild(ctx);
          return nodeList.childNodes;
        }

        sel = document.querySelectorAll(ctx);
      } else {
        sel = ctx.querySelectorAll(spec);
      }

      return sel;
    }
  }, {
    key: "setPosition",
    value: function setPosition(el, p) {
      el.style.left = p.left + "px";
      el.style.top = p.top + "px";
    }
  }, {
    key: "setDraggable",
    value: function setDraggable(element, draggable) {
      if (draggable) {
        this.removeAttribute(element, communityCore.ATTRIBUTE_NOT_DRAGGABLE);
      } else {
        this.setAttribute(element, communityCore.ATTRIBUTE_NOT_DRAGGABLE, communityCore.TRUE);
      }
    }
  }, {
    key: "isDraggable",
    value: function isDraggable(el) {
      var d = this.getAttribute(el, communityCore.ATTRIBUTE_NOT_DRAGGABLE);
      return d == null || d === communityCore.FALSE;
    }
    /*
     * toggles the draggable state of the given element(s).
     * el is either an id, or an element object, or a list of ids/element objects.
     */

  }, {
    key: "toggleDraggable",
    value: function toggleDraggable(el) {
      var state = this.isDraggable(el);
      this.setDraggable(el, !state);
      return !state;
    }
  }, {
    key: "_attachEventDelegates",
    value: function _attachEventDelegates() {
      var currentContainer = this.getContainer();
      this.eventManager.on(currentContainer, communityCore.EVENT_CLICK, communityCore.SELECTOR_OVERLAY, this._overlayClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_DBL_CLICK, communityCore.SELECTOR_OVERLAY, this._overlayDblClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_CLICK, communityCore.SELECTOR_CONNECTOR, this._connectorClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_DBL_CLICK, communityCore.SELECTOR_CONNECTOR, this._connectorDblClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_CLICK, communityCore.SELECTOR_ENDPOINT, this._endpointClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_DBL_CLICK, communityCore.SELECTOR_ENDPOINT, this._endpointDblClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_CLICK, communityCore.SELECTOR_MANAGED_ELEMENT, this._elementClick);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOVER, communityCore.SELECTOR_CONNECTOR, this._connectorMouseover);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOUT, communityCore.SELECTOR_CONNECTOR, this._connectorMouseout);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOVER, communityCore.SELECTOR_ENDPOINT, this._endpointMouseover);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOUT, communityCore.SELECTOR_ENDPOINT, this._endpointMouseout);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOVER, communityCore.SELECTOR_OVERLAY, this._overlayMouseover);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOUT, communityCore.SELECTOR_OVERLAY, this._overlayMouseout);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOVER, communityCore.SELECTOR_MANAGED_ELEMENT, this._elementMouseenter);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEOUT, communityCore.SELECTOR_MANAGED_ELEMENT, this._elementMouseexit);
      this.eventManager.on(currentContainer, communityCore.EVENT_MOUSEMOVE, communityCore.SELECTOR_MANAGED_ELEMENT, this._elementMousemove);
    }
  }, {
    key: "_detachEventDelegates",
    value: function _detachEventDelegates() {
      var currentContainer = this.getContainer();

      if (currentContainer) {
        this.eventManager.off(currentContainer, communityCore.EVENT_CLICK, this._connectorClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_DBL_CLICK, this._connectorDblClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_CLICK, this._endpointClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_DBL_CLICK, this._endpointDblClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_CLICK, this._overlayClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_DBL_CLICK, this._overlayDblClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_CLICK, this._elementClick);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOVER, this._connectorMouseover);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOUT, this._connectorMouseout);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOVER, this._endpointMouseover);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOUT, this._endpointMouseout);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOVER, this._overlayMouseover);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEOUT, this._overlayMouseout);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEENTER, this._elementMouseenter);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEEXIT, this._elementMouseexit);
        this.eventManager.off(currentContainer, communityCore.EVENT_MOUSEMOVE, this._elementMousemove);
      }
    }
  }, {
    key: "setContainer",
    value: function setContainer(c) {
      this._detachEventDelegates();

      if (this.dragManager != null) {
        this.dragManager.reset();
      }

      var newContainer = this.getElement(c);
      this.setAttribute(newContainer, communityCore.ATTRIBUTE_CONTAINER, communityCore.uuid().replace("-", "")); // move all endpoints, connectors, and managed elements

      var currentContainer = this.getContainer();

      if (currentContainer != null) {
        currentContainer.removeAttribute(communityCore.ATTRIBUTE_CONTAINER);
        var children = Array.from(currentContainer.childNodes).filter(function (cn) {
          var cl = cn.classList;
          return cl && (cl.contains(communityCore.CLASS_CONNECTOR) || cl.contains(communityCore.CLASS_ENDPOINT) || cl.contains(communityCore.CLASS_OVERLAY)) || cn.getAttribute && cn.getAttribute(communityCore.ATTRIBUTE_MANAGED) != null;
        });
        children.forEach(function (el) {
          newContainer.appendChild(el);
        });
      }

      _get(_getPrototypeOf(BrowserJsPlumbInstance.prototype), "setContainer", this).call(this, newContainer);

      if (this.eventManager != null) {
        this._attachEventDelegates();
      }

      if (this.dragManager != null) {
        this.dragManager.addHandler(new EndpointDragHandler(this));
        this.dragManager.addHandler(new GroupDragHandler(this));
        this.elementDragHandler = new ElementDragHandler(this);
        this.dragManager.addHandler(this.elementDragHandler);
      }
    }
  }, {
    key: "reset",
    value: function reset(silently) {
      _get(_getPrototypeOf(BrowserJsPlumbInstance.prototype), "reset", this).call(this, silently);

      var container = this.getContainer();
      var els = container.querySelectorAll([communityCore.SELECTOR_MANAGED_ELEMENT, communityCore.SELECTOR_ENDPOINT, communityCore.SELECTOR_CONNECTOR, communityCore.SELECTOR_OVERLAY].join(","));
      els.forEach(function (el) {
        return el.parentNode && el.parentNode.removeChild(el);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._detachEventDelegates();

      if (this.dragManager != null) {
        this.dragManager.reset();
      }

      this.clearDragSelection();

      _get(_getPrototypeOf(BrowserJsPlumbInstance.prototype), "destroy", this).call(this);
    }
  }, {
    key: "unmanage",
    value: function unmanage(el, removeElement) {
      this.removeFromDragSelection(el);

      _get(_getPrototypeOf(BrowserJsPlumbInstance.prototype), "unmanage", this).call(this, el, removeElement);
    }
  }, {
    key: "addToDragSelection",
    value: function addToDragSelection() {
      var _this2 = this;

      for (var _len = arguments.length, el = new Array(_len), _key = 0; _key < _len; _key++) {
        el[_key] = arguments[_key];
      }

      el.forEach(function (_el) {
        return _this2.elementDragHandler.addToDragSelection(_el);
      });
    }
  }, {
    key: "clearDragSelection",
    value: function clearDragSelection() {
      this.elementDragHandler.clearDragSelection();
    }
  }, {
    key: "removeFromDragSelection",
    value: function removeFromDragSelection() {
      var _this3 = this;

      for (var _len2 = arguments.length, el = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        el[_key2] = arguments[_key2];
      }

      el.forEach(function (_el) {
        return _this3.elementDragHandler.removeFromDragSelection(_el);
      });
    }
  }, {
    key: "toggleDragSelection",
    value: function toggleDragSelection() {
      var _this4 = this;

      for (var _len3 = arguments.length, el = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        el[_key3] = arguments[_key3];
      }

      el.forEach(function (_el) {
        return _this4.elementDragHandler.toggleDragSelection(_el);
      });
    }
  }, {
    key: "getDragSelection",
    value: function getDragSelection() {
      return this.elementDragHandler.getDragSelection();
    } // ------------ posses

    /**
     * Adds the given element(s) to the given posse.
     * @param spec Either the ID of some posse, in which case the elements are all added as 'active', or an object of the form
     * { id:"someId", active:boolean }. In the latter case, `active`, if true, which is the default, indicates whether
     * dragging the given element(s) should cause all the elements in the posse to be dragged. If `active` is false it means the
     * given element(s) is "passive" and should only move when an active member of the posse is dragged.
     * @param els Elements to add to the posse.
     */

  }, {
    key: "addToPosse",
    value: function addToPosse(spec) {
      var _this$elementDragHand;

      for (var _len4 = arguments.length, els = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        els[_key4 - 1] = arguments[_key4];
      }

      (_this$elementDragHand = this.elementDragHandler).addToPosse.apply(_this$elementDragHand, [spec].concat(els));
    }
    /**
     * Removes the given element(s) from any posse they may be in. You don't need to supply the posse id, as elements
     * can only be in one posse anyway.
     * @param els Elements to remove from posses.
     */

  }, {
    key: "removeFromPosse",
    value: function removeFromPosse() {
      var _this$elementDragHand2;

      (_this$elementDragHand2 = this.elementDragHandler).removeFromPosse.apply(_this$elementDragHand2, arguments);
    }
    /**
     * Sets the active/passive state for the given element(s).You don't need to supply the posse id, as elements
     * can only be in one posse anyway.
     * @param state true for active, false for passive.
     * @param els
     */

  }, {
    key: "setPosseState",
    value: function setPosseState(state) {
      var _this$elementDragHand3;

      for (var _len5 = arguments.length, els = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        els[_key5 - 1] = arguments[_key5];
      }

      (_this$elementDragHand3 = this.elementDragHandler).setPosseState.apply(_this$elementDragHand3, [state].concat(els));
    }
    /**
     * Consumes the given event.
     * @param e
     * @param doNotPreventDefault
     */

  }, {
    key: "consume",
    value: function consume$1(e, doNotPreventDefault) {
      consume(e, doNotPreventDefault);
    }
  }, {
    key: "addList",
    value: function addList(el, options) {
      return this.listManager.addList(el, options);
    }
  }, {
    key: "removeList",
    value: function removeList(el) {
      this.listManager.removeList(el);
    }
    /**
     * Helper method for other libs/code to get a DragManager.
     * @param options
     */

  }, {
    key: "createDragManager",
    value: function createDragManager(options) {
      return new Collicat(options);
    }
  }, {
    key: "rotate",
    value: function rotate(elementId, rotation, doNotRepaint) {
      if (this._managedElements[elementId]) {
        this._managedElements[elementId].el.style.transform = "rotate(" + rotation + "deg)";
        this._managedElements[elementId].el.style.transformOrigin = "center center";
        return _get(_getPrototypeOf(BrowserJsPlumbInstance.prototype), "rotate", this).call(this, elementId, rotation, doNotRepaint);
      }

      return {
        c: new Set(),
        e: new Set()
      };
    }
  }, {
    key: "getPath",
    value: function getPath(segment, isFirstSegment) {
      return {
        "Straight": function Straight(isFirstSegment) {
          return (isFirstSegment ? "M " + segment.x1 + " " + segment.y1 + " " : "") + "L " + segment.x2 + " " + segment.y2;
        },
        "Bezier": function Bezier(isFirstSegment) {
          var b = segment;
          return (isFirstSegment ? "M " + b.x2 + " " + b.y2 + " " : "") + "C " + b.cp2x + " " + b.cp2y + " " + b.cp1x + " " + b.cp1y + " " + b.x1 + " " + b.y1;
        },
        "Arc": function Arc(isFirstSegment) {
          var a = segment;
          var laf = a.sweep > Math.PI ? 1 : 0,
              sf = a.anticlockwise ? 0 : 1;
          return (isFirstSegment ? "M" + a.x1 + " " + a.y1 + " " : "") + "A " + a.radius + " " + a.radius + " 0 " + laf + "," + sf + " " + a.x2 + " " + a.y2;
        }
      }[segment.type](isFirstSegment);
    }
  }, {
    key: "addOverlayClass",
    value: function addOverlayClass(o, clazz) {
      if (communityCore.isLabelOverlay(o)) {
        o.instance.addClass(getLabelElement(o), clazz);
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        o.instance.addClass(SVGElementOverlay.ensurePath(o), clazz);
      } else if (communityCore.isCustomOverlay(o)) {
        o.instance.addClass(getCustomElement(o), clazz);
      } else {
        throw "Could not add class to overlay of type [" + o.type + "]";
      }
    } //

  }, {
    key: "removeOverlayClass",
    value: function removeOverlayClass(o, clazz) {
      if (communityCore.isLabelOverlay(o)) {
        o.instance.removeClass(getLabelElement(o), clazz);
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        o.instance.removeClass(SVGElementOverlay.ensurePath(o), clazz);
      } else if (communityCore.isCustomOverlay(o)) {
        o.instance.removeClass(getCustomElement(o), clazz);
      } else {
        throw "Could not remove class from overlay of type [" + o.type + "]";
      }
    }
  }, {
    key: "paintOverlay",
    value: function paintOverlay(o, params, extents) {
      //
      if (communityCore.isLabelOverlay(o)) {
        getLabelElement(o);
        var XY = o.component.getXY();
        o.canvas.style.left = XY.x + params.d.minx + "px";
        o.canvas.style.top = XY.y + params.d.miny + "px";
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        var path = isNaN(params.d.cxy.x) || isNaN(params.d.cxy.y) ? "M 0 0" : "M" + params.d.hxy.x + "," + params.d.hxy.y + " L" + params.d.tail[0].x + "," + params.d.tail[0].y + " L" + params.d.cxy.x + "," + params.d.cxy.y + " L" + params.d.tail[1].x + "," + params.d.tail[1].y + " L" + params.d.hxy.x + "," + params.d.hxy.y;
        SVGElementOverlay.paint(o, path, params, extents);
      } else if (communityCore.isCustomOverlay(o)) {
        getCustomElement(o);

        var _XY = o.component.getXY();

        o.canvas.style.left = _XY.x + params.d.minx + "px"; // wont work for endpoint. abstracts

        o.canvas.style.top = _XY.y + params.d.miny + "px";
      } else {
        throw "Could not paint overlay of type [" + o.type + "]";
      }
    }
  }, {
    key: "setOverlayVisible",
    value: function setOverlayVisible(o, visible) {
      if (communityCore.isLabelOverlay(o)) {
        getLabelElement(o).style.display = visible ? "block" : "none";
      } else if (communityCore.isCustomOverlay(o)) {
        getCustomElement(o).style.display = visible ? "block" : "none";
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        o.path.style.display = visible ? "block" : "none";
      }
    }
  }, {
    key: "moveOverlayParent",
    value: function moveOverlayParent(o, newParent) {
      if (communityCore.isLabelOverlay(o)) {
        o.instance.appendElement(getLabelElement(o), this.getContainer());
      } else if (communityCore.isCustomOverlay(o)) {
        o.instance.appendElement(getCustomElement(o), this.getContainer());
      } // else if (isArrowOverlay(o) || isDiamondOverlay(o) || isPlainArrowOverlay(o)){
      //     // dont need to do anything with other types. seemingly. but why not.
      // }

    }
  }, {
    key: "reattachOverlay",
    value: function reattachOverlay(o, c) {
      if (communityCore.isLabelOverlay(o)) {
        o.instance.appendElement(getLabelElement(o), this.getContainer());
      } else if (communityCore.isCustomOverlay(o)) {
        o.instance.appendElement(getCustomElement(o), this.getContainer());
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        this.appendElement(SVGElementOverlay.ensurePath(o), c.connector.canvas);
      }
    }
  }, {
    key: "setOverlayHover",
    value: function setOverlayHover(o, hover) {
      var method = hover ? "addClass" : "removeClass";
      var canvas;

      if (communityCore.isLabelOverlay(o)) {
        canvas = getLabelElement(o);
      } else if (communityCore.isCustomOverlay(o)) {
        canvas = getCustomElement(o);
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        canvas = SVGElementOverlay.ensurePath(o);
      }

      if (canvas != null) {
        if (this.hoverClass != null) {
          this[method](canvas, this.hoverClass);
        }

        this.setHover(o.component, hover);
      }
    }
  }, {
    key: "destroyOverlay",
    value: function destroyOverlay(o) {
      if (communityCore.isLabelOverlay(o)) {
        var el = getLabelElement(o);
        el.parentNode.removeChild(el);
        delete o.canvas;
        delete o.cachedDimensions;
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        SVGElementOverlay.destroy(o);
      } else if (communityCore.isCustomOverlay(o)) {
        var _el2 = getCustomElement(o);

        _el2.parentNode.removeChild(_el2);

        delete o.canvas;
        delete o.cachedDimensions;
      }
    }
  }, {
    key: "drawOverlay",
    value: function drawOverlay(o, component, paintStyle, absolutePosition) {
      if (o.type === communityCore.LabelOverlay.labelType || o.type === communityCore.CustomOverlay.customType) {
        //  TO DO - move to a static method, or a shared method, etc.  (? future me doesnt know what that means.)
        var td = HTMLElementOverlay._getDimensions(o); //._getDimensions()


        if (td != null && td.length === 2) {
          var cxy = {
            x: 0,
            y: 0
          };

          if (absolutePosition) {
            cxy = {
              x: absolutePosition[0],
              y: absolutePosition[1]
            };
          } else if (component instanceof communityCore.EndpointRepresentation) {
            var locToUse = o.location.constructor === Array ? o.location : o.endpointLocation || [o.location, o.location];
            cxy = {
              x: locToUse[0] * component.w,
              y: locToUse[1] * component.h
            };
          } else {
            var loc = o.location,
                absolute = false;

            if (communityCore.IS.aString(o.location) || o.location < 0 || o.location > 1) {
              loc = parseInt("" + o.location, 10);
              absolute = true;
            }

            cxy = component.pointOnPath(loc, absolute); // a connection
          }

          var minx = cxy.x - td[0] / 2,
              miny = cxy.y - td[1] / 2;
          return {
            component: o,
            d: {
              minx: minx,
              miny: miny,
              td: td,
              cxy: cxy
            },
            minX: minx,
            maxX: minx + td[0],
            minY: miny,
            maxY: miny + td[1]
          };
        } else {
          return {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0
          };
        }
      } else if (communityCore.isArrowOverlay(o) || communityCore.isDiamondOverlay(o) || communityCore.isPlainArrowOverlay(o)) {
        return o.draw(component, paintStyle, absolutePosition);
      } else {
        throw "Could not draw overlay of type [" + o.type + "]";
      }
    }
  }, {
    key: "updateLabel",
    value: function updateLabel(o) {
      if (communityCore.isFunction(o.label)) {
        var lt = o.label(this);

        if (lt != null) {
          getLabelElement(o).innerHTML = lt.replace(/\r\n/g, "<br/>");
        } else {
          getLabelElement(o).innerHTML = "";
        }
      } else {
        if (o.labelText == null) {
          o.labelText = o.label;

          if (o.labelText != null) {
            getLabelElement(o).innerHTML = o.labelText.replace(/\r\n/g, "<br/>");
          } else {
            getLabelElement(o).innerHTML = "";
          }
        }
      }
    }
  }, {
    key: "setHover",
    value: function setHover(component, hover) {
      component._hover = hover;

      if (component instanceof communityCore.Endpoint && component.endpoint != null) {
        this.setEndpointHover(component, hover);
      } else if (component instanceof communityCore.Connection && component.connector != null) {
        this.setConnectorHover(component.connector, hover);
      }
    } // ------------------------------- connectors ---------------------------------------------------------

  }, {
    key: "paintConnector",
    value: function paintConnector(connector, paintStyle, extents) {
      SvgElementConnector.paint(connector, paintStyle, extents);
    }
  }, {
    key: "setConnectorHover",
    value: function setConnectorHover(connector, h, doNotCascade) {
      if (h === false || !this.currentlyDragging && !this.isHoverSuspended()) {
        var method = h ? "addClass" : "removeClass";
        var canvas = connector.canvas;

        if (canvas != null) {
          if (this.hoverClass != null) {
            this[method](canvas, this.hoverClass);
          }
        }

        if (connector.connection.hoverPaintStyle != null) {
          connector.connection.paintStyleInUse = h ? connector.connection.hoverPaintStyle : connector.connection.paintStyle;

          if (!this._suspendDrawing) {
            connector.connection.paint(connector.connection.paintStyleInUse);
          }
        }

        if (!doNotCascade) {
          this.setEndpointHover(connector.connection.endpoints[0], h, true);
          this.setEndpointHover(connector.connection.endpoints[1], h, true);
        }
      }
    }
  }, {
    key: "destroyConnection",
    value: function destroyConnection(connection) {
      if (connection.connector != null) {
        cleanup(connection.connector);
      }
    }
  }, {
    key: "addConnectorClass",
    value: function addConnectorClass(connector, clazz) {
      if (connector.canvas) {
        this.addClass(connector.canvas, clazz);
      }
    }
  }, {
    key: "removeConnectorClass",
    value: function removeConnectorClass(connector, clazz) {
      if (connector.canvas) {
        this.removeClass(connector.canvas, clazz);
      }
    }
  }, {
    key: "getConnectorClass",
    value: function getConnectorClass(connector) {
      if (connector.canvas) {
        return connector.canvas.className.baseVal;
      } else {
        return "";
      }
    }
  }, {
    key: "setConnectorVisible",
    value: function setConnectorVisible(connector, v) {
      setVisible(connector, v);
    }
  }, {
    key: "applyConnectorType",
    value: function applyConnectorType(connector, t) {
      if (connector.canvas && t.cssClass) {
        var classes = Array.isArray(t.cssClass) ? t.cssClass : [t.cssClass];
        this.addClass(connector.canvas, classes.join(" "));
      }
    }
  }, {
    key: "addEndpointClass",
    value: function addEndpointClass(ep, c) {
      var canvas = getEndpointCanvas(ep.endpoint);

      if (canvas != null) {
        this.addClass(canvas, c);
      }
    }
  }, {
    key: "applyEndpointType",
    value: function applyEndpointType(ep, t) {
      if (t.cssClass) {
        var canvas = getEndpointCanvas(ep.endpoint);

        if (canvas) {
          var classes = Array.isArray(t.cssClass) ? t.cssClass : [t.cssClass];
          this.addClass(canvas, classes.join(" "));
        }
      }
    }
  }, {
    key: "destroyEndpoint",
    value: function destroyEndpoint(ep) {
      cleanup(ep.endpoint);
    }
  }, {
    key: "paintEndpoint",
    value: function paintEndpoint(ep, paintStyle) {
      var renderer = endpointMap[ep.endpoint.getType()];

      if (renderer != null) {
        SvgEndpoint.paint(ep.endpoint, renderer, paintStyle);
      } else {
        console.log("JSPLUMB: no endpoint renderer found for type [" + ep.endpoint.getType() + "]");
      }
    }
  }, {
    key: "removeEndpointClass",
    value: function removeEndpointClass(ep, c) {
      var canvas = getEndpointCanvas(ep.endpoint);

      if (canvas != null) {
        this.removeClass(canvas, c);
      }
    }
  }, {
    key: "getEndpointClass",
    value: function getEndpointClass(ep) {
      var canvas = getEndpointCanvas(ep.endpoint);

      if (canvas != null) {
        return canvas.className;
      } else {
        return "";
      }
    }
  }, {
    key: "refreshEndpoint",
    value: function refreshEndpoint(endpoint) {
      if (endpoint.endpoint != null) {
        var c = getEndpointCanvas(endpoint.endpoint);

        if (c != null) {
          if (endpoint.connections.length > 0) {
            addClass(c, this.endpointConnectedClass);
          } else {
            removeClass(c, this.endpointConnectedClass);
          }

          if (endpoint.isFull()) {
            addClass(c, this.endpointFullClass);
          } else {
            removeClass(c, this.endpointFullClass);
          }
        }
      }
    }
  }, {
    key: "setEndpointHover",
    value: function setEndpointHover(endpoint, h, doNotCascade) {
      if (endpoint != null && (h === false || !this.currentlyDragging && !this.isHoverSuspended())) {
        var method = h ? "addClass" : "removeClass";
        var canvas = getEndpointCanvas(endpoint.endpoint);

        if (canvas != null) {
          if (this.hoverClass != null) {
            this[method](canvas, this.hoverClass);
          }
        }

        if (endpoint.hoverPaintStyle != null) {
          endpoint.paintStyleInUse = h ? endpoint.hoverPaintStyle : endpoint.paintStyle;

          if (!this._suspendDrawing) {
            this.paintEndpoint(endpoint, endpoint.paintStyleInUse);
          }
        }

        if (!doNotCascade) {
          // instruct attached connections to set hover, unless doNotCascade was true.
          for (var i = 0; i < endpoint.connections.length; i++) {
            this.setConnectorHover(endpoint.connections[i].connector, h, true);
          }
        }
      }
    }
  }, {
    key: "setEndpointVisible",
    value: function setEndpointVisible(ep, v) {
      setVisible(ep.endpoint, v);
    }
  }], [{
    key: "getPositionOnElement",
    value: function getPositionOnElement(evt, el, zoom) {
      var box = _typeof(el.getBoundingClientRect) !== communityCore.UNDEFINED ? el.getBoundingClientRect() : {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
          body = document.body,
          docElem = document.documentElement,
          scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
          scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
          clientTop = docElem.clientTop || body.clientTop || 0,
          clientLeft = docElem.clientLeft || body.clientLeft || 0,
          pst = 0,
          psl = 0,
          top = box.top + scrollTop - clientTop + pst * zoom,
          left = box.left + scrollLeft - clientLeft + psl * zoom,
          cl = _pageLocation(evt),
          w = box.width || el.offsetWidth * zoom,
          h = box.height || el.offsetHeight * zoom,
          x = (cl[0] - left) / w,
          y = (cl[1] - top) / h;

      return [x, y];
    }
  }]);

  return BrowserJsPlumbInstance;
}(communityCore.JsPlumbInstance);

var register = function register() {
  registerEndpointRenderer("Dot", {
    // TODO `instance` not needed here
    makeNode: function makeNode(ep, style) {
      return _node("circle", {
        "cx": ep.w / 2,
        "cy": ep.h / 2,
        "r": ep.radius
      });
    },
    updateNode: function updateNode(ep, node) {
      _attr(node, {
        "cx": "" + ep.w / 2,
        "cy": "" + ep.h / 2,
        "r": "" + ep.radius
      });
    }
  });
};

var register$1 = function register() {
  registerEndpointRenderer("Rectangle", {
    makeNode: function makeNode(ep, style) {
      return _node("rect", {
        "width": ep.w,
        "height": ep.h
      });
    },
    updateNode: function updateNode(ep, node) {
      _attr(node, {
        "width": ep.w,
        "height": ep.h
      });
    }
  });
};

var BLANK_ATTRIBUTES = {
  "width": 10,
  "height": 0,
  "fill": "transparent",
  "stroke": "transparent"
};
var register$2 = function register() {
  registerEndpointRenderer("Blank", {
    makeNode: function makeNode(ep, style) {
      return _node("rect", BLANK_ATTRIBUTES);
    },
    updateNode: function updateNode(ep, node) {
      _attr(node, BLANK_ATTRIBUTES);
    }
  });
};

register();
register$2();
register$1();
var _jsPlumbInstanceIndex = 0;

function getInstanceIndex() {
  var i = _jsPlumbInstanceIndex + 1;
  _jsPlumbInstanceIndex++;
  return i;
}
function newInstance(defaults, helpers) {
  return new BrowserJsPlumbInstance(getInstanceIndex(), defaults, helpers);
}
function ready(f) {
  var _do = function _do() {
    if (/complete|loaded|interactive/.test(document.readyState) && typeof document.body !== "undefined" && document.body != null) {
      f();
    } else {
      setTimeout(_do, 9);
    }
  };

  _do();
}

exports.BrowserJsPlumbInstance = BrowserJsPlumbInstance;
exports.Collicat = Collicat;
exports.Drag = Drag;
exports.EventManager = EventManager;
exports.newInstance = newInstance;
exports.ready = ready;
exports.registerEndpointRenderer = registerEndpointRenderer;
