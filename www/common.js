(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-05b9bd31.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-05b9bd31.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getOverlay; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");

var lastId = 0;
function createOverlay(element, opts) {
    var doc = element.ownerDocument;
    connectListeners(doc);
    Object.assign(element, opts);
    element.classList.add('ion-page-invisible');
    var overlayIndex = lastId++;
    element.overlayIndex = overlayIndex;
    if (!element.hasAttribute('id')) {
        element.id = "ion-overlay-" + overlayIndex;
    }
    getAppRoot(doc).appendChild(element);
    return element.componentOnReady();
}
function connectListeners(doc) {
    if (lastId === 0) {
        lastId = 1;
        doc.addEventListener('ionBackButton', function (ev) {
            var lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss) {
                ev.detail.register(100, function () {
                    return lastOverlay.dismiss(undefined, BACKDROP);
                });
            }
        });
        doc.addEventListener('keyup', function (ev) {
            if (ev.key === 'Escape') {
                var lastOverlay = getOverlay(doc);
                if (lastOverlay && lastOverlay.backdropDismiss) {
                    lastOverlay.dismiss(undefined, BACKDROP);
                }
            }
        });
    }
}
function dismissOverlay(doc, data, role, overlayTag, id) {
    var overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
}
function getOverlays(doc, overlayTag) {
    var overlays = Array.from(getAppRoot(doc).children).filter(function (c) { return c.overlayIndex > 0; });
    if (overlayTag === undefined) {
        return overlays;
    }
    overlayTag = overlayTag.toUpperCase();
    return overlays.filter(function (c) { return c.tagName === overlayTag; });
}
function getOverlay(doc, overlayTag, id) {
    var overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(function (o) { return o.id === id; });
}
function present(overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var animationBuilder, completed;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (overlay.presented) {
                        return [2 /*return*/];
                    }
                    overlay.presented = true;
                    overlay.willPresent.emit();
                    animationBuilder = (overlay.enterAnimation)
                        ? overlay.enterAnimation
                        : overlay.config.get(name, overlay.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
                    return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                case 1:
                    completed = _a.sent();
                    if (completed) {
                        overlay.didPresent.emit();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function dismiss(overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var animationBuilder, err_1;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!overlay.presented) {
                        return [2 /*return*/, false];
                    }
                    overlay.presented = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    overlay.willDismiss.emit({ data: data, role: role });
                    animationBuilder = (overlay.leaveAnimation)
                        ? overlay.leaveAnimation
                        : overlay.config.get(name, overlay.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
                    return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                case 2:
                    _a.sent();
                    overlay.didDismiss.emit({ data: data, role: role });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    overlay.el.remove();
                    return [2 /*return*/, true];
            }
        });
    });
}
function getAppRoot(doc) {
    return doc.querySelector('ion-app') || doc.body;
}
function overlayAnimation(overlay, animationBuilder, baseEl, opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var aniRoot, animation, _a;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!overlay.animation) return [3 /*break*/, 1];
                    overlay.animation.destroy();
                    overlay.animation = undefined;
                    return [2 /*return*/, false];
                case 1:
                    baseEl.classList.remove('ion-page-invisible');
                    aniRoot = baseEl.shadowRoot || overlay.el;
                    _a = overlay;
                    return [4 /*yield*/, overlay.animationCtrl.create(animationBuilder, aniRoot, opts)];
                case 2:
                    animation = _a.animation = _b.sent();
                    overlay.animation = animation;
                    if (!overlay.animated) {
                        animation.duration(0);
                    }
                    if (overlay.keyboardClose) {
                        animation.beforeAddWrite(function () {
                            var activeElement = baseEl.ownerDocument.activeElement;
                            if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                                activeElement.blur();
                            }
                        });
                    }
                    return [4 /*yield*/, animation.playAsync()];
                case 3:
                    _b.sent();
                    animation.destroy();
                    overlay.animation = undefined;
                    return [2 /*return*/, animation.hasCompleted];
            }
        });
    });
}
function eventMethod(element, eventName) {
    var resolve;
    var promise = new Promise(function (r) { return resolve = r; });
    onceEvent(element, eventName, function (event) {
        resolve(event.detail);
    });
    return promise;
}
function onceEvent(element, eventName, callback) {
    var handler = function (ev) {
        element.removeEventListener(eventName, handler);
        callback(ev);
    };
    element.addEventListener(eventName, handler);
}
function isCancel(role) {
    return role === 'cancel' || role === BACKDROP;
}
var BACKDROP = 'backdrop';



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");

var iosTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 158).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/ios.transition.js")); };
var mdTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 159).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/build/md.transition.js")); };
function transition(opts) {
    return new Promise(function (resolve, reject) {
        opts.queue.write(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, function (error) {
                afterTransition(opts);
                reject(error);
            });
        });
    });
}
function beforeTransition(opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
}
function runTransition(opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var animationBuilder, ani;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
                case 1:
                    animationBuilder = _a.sent();
                    ani = (animationBuilder)
                        ? animation(animationBuilder, opts)
                        : noAnimation(opts);
                    return [2 /*return*/, ani];
            }
        });
    });
}
function afterTransition(opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
}
function getAnimationBuilder(opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var builder, _a;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                        return [2 /*return*/, undefined];
                    }
                    if (opts.animationBuilder) {
                        return [2 /*return*/, opts.animationBuilder];
                    }
                    if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                    return [4 /*yield*/, iosTransitionAnimation()];
                case 1:
                    _a = (_b.sent()).iosTransitionAnimation;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, mdTransitionAnimation()];
                case 3:
                    _a = (_b.sent()).mdTransitionAnimation;
                    _b.label = 4;
                case 4:
                    builder = _a;
                    return [2 /*return*/, builder];
            }
        });
    });
}
function animation(animationBuilder, opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var trns;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitForReady(opts, true)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, opts.animationCtrl.create(animationBuilder, opts.baseEl, opts)];
                case 2:
                    trns = _a.sent();
                    fireWillEvents(opts.window, opts.enteringEl, opts.leavingEl);
                    return [4 /*yield*/, playTransition(trns, opts)];
                case 3:
                    _a.sent();
                    if (trns.hasCompleted) {
                        fireDidEvents(opts.window, opts.enteringEl, opts.leavingEl);
                    }
                    return [2 /*return*/, {
                            hasCompleted: trns.hasCompleted,
                            animation: trns
                        }];
            }
        });
    });
}
function noAnimation(opts) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var enteringEl, leavingEl;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    enteringEl = opts.enteringEl;
                    leavingEl = opts.leavingEl;
                    return [4 /*yield*/, waitForReady(opts, false)];
                case 1:
                    _a.sent();
                    fireWillEvents(opts.window, enteringEl, leavingEl);
                    fireDidEvents(opts.window, enteringEl, leavingEl);
                    return [2 /*return*/, {
                            hasCompleted: true
                        }];
            }
        });
    });
}
function waitForReady(opts, defaultDeep) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var deep, promises;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                    promises = deep ? [
                        deepReady(opts.enteringEl),
                        deepReady(opts.leavingEl),
                    ] : [
                        shallowReady(opts.enteringEl),
                        shallowReady(opts.leavingEl),
                    ];
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function notifyViewReady(viewIsReady, enteringEl) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!viewIsReady) return [3 /*break*/, 2];
                    return [4 /*yield*/, viewIsReady(enteringEl)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function playTransition(trans, opts) {
    var progressCallback = opts.progressCallback;
    var promise = new Promise(function (resolve) { return trans.onFinish(resolve); });
    if (progressCallback) {
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        trans.play();
    }
    return promise;
}
function fireWillEvents(win, enteringEl, leavingEl) {
    lifecycle(win, leavingEl, "ionViewWillLeave");
    lifecycle(win, enteringEl, "ionViewWillEnter");
}
function fireDidEvents(win, enteringEl, leavingEl) {
    lifecycle(win, enteringEl, "ionViewDidEnter");
    lifecycle(win, leavingEl, "ionViewDidLeave");
}
function lifecycle(win, el, eventName) {
    if (el) {
        var CEvent = win.CustomEvent;
        var event = new CEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(event);
    }
}
function shallowReady(el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
}
function deepReady(el) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var element, stencilEl;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = el;
                    if (!element) return [3 /*break*/, 4];
                    if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, element.componentOnReady()];
                case 1:
                    stencilEl = _a.sent();
                    if (stencilEl != null) {
                        return [2 /*return*/];
                    }
                    _a.label = 2;
                case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function setPageHidden(el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
}
function setZIndex(enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js ***!
  \***********************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GESTURE_CONTROLLER; });
var GestureController = /** @class */ (function () {
    function GestureController(doc) {
        this.doc = doc;
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    GestureController.prototype.createGesture = function (config) {
        return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
    };
    GestureController.prototype.createBlocker = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
    };
    GestureController.prototype.start = function (gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    };
    GestureController.prototype.capture = function (gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        var requestedStart = this.requestedStart;
        var maxPriority = -10000;
        requestedStart.forEach(function (value) {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            var event = new CustomEvent('ionGestureCaptured', { detail: gestureName });
            this.doc.body.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    };
    GestureController.prototype.release = function (id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    };
    GestureController.prototype.disableGesture = function (gestureName, id) {
        var set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    };
    GestureController.prototype.enableGesture = function (gestureName, id) {
        var set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    };
    GestureController.prototype.disableScroll = function (id) {
        this.disabledScroll.add(id);
        if (this.disabledScroll.size === 1) {
            this.doc.body.classList.add(BACKDROP_NO_SCROLL);
        }
    };
    GestureController.prototype.enableScroll = function (id) {
        this.disabledScroll.delete(id);
        if (this.disabledScroll.size === 0) {
            this.doc.body.classList.remove(BACKDROP_NO_SCROLL);
        }
    };
    GestureController.prototype.canStart = function (gestureName) {
        if (this.capturedId !== undefined) {
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    };
    GestureController.prototype.isCaptured = function () {
        return this.capturedId !== undefined;
    };
    GestureController.prototype.isScrollDisabled = function () {
        return this.disabledScroll.size > 0;
    };
    GestureController.prototype.isDisabled = function (gestureName) {
        var disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    };
    GestureController.prototype.newID = function () {
        this.gestureId++;
        return this.gestureId;
    };
    return GestureController;
}());
var GestureDelegate = /** @class */ (function () {
    function GestureDelegate(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    GestureDelegate.prototype.canStart = function () {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    };
    GestureDelegate.prototype.start = function () {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    };
    GestureDelegate.prototype.capture = function () {
        if (!this.ctrl) {
            return false;
        }
        var captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    };
    GestureDelegate.prototype.release = function () {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    };
    GestureDelegate.prototype.destroy = function () {
        this.release();
        this.ctrl = undefined;
    };
    return GestureDelegate;
}());
var BlockerDelegate = /** @class */ (function () {
    function BlockerDelegate(ctrl, id, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    BlockerDelegate.prototype.block = function () {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var gesture = _a[_i];
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    };
    BlockerDelegate.prototype.unblock = function () {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var gesture = _a[_i];
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    };
    BlockerDelegate.prototype.destroy = function () {
        this.unblock();
        this.ctrl = undefined;
    };
    return BlockerDelegate;
}());
var BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
var GESTURE_CONTROLLER = new GestureController(document);



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey;
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getData = function (url) {
        return this.http.get(API_URL + "/" + url + "&apiKey=" + API_KEY);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.html":
/*!*************************************!*\
  !*** ./src/app/news/news.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let article of data?.articles\" (click)=\"onGotoNewsDetail(article)\">\n      <!-- <ion-card *ngFor=\"let article of data?.articles\" (click)=\"onGotoNewsDetail(article)\"> -->\n      <ion-card-content>\n        <p>\n          <ion-img [src]=\"article.urlToImage\"></ion-img>\n        </p>\n        <ion-card-title>{{article.title}}</ion-card-title>\n        <p>{{article.content}}</p>\n      </ion-card-content>\n      <!-- </ion-card> -->\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPage = /** @class */ (function () {
    function NewsPage(newsService, router) {
        this.newsService = newsService;
        this.router = router;
        this.slideOpts = {
            effect: 'cube'
        };
    }
    NewsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService
            .getData('top-headlines?language=en')
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    NewsPage.prototype.onGotoNewsDetail = function (article) {
        this.newsService.currentArticle = article;
        this.router.navigate(['/news-detail']);
    };
    NewsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")],
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map