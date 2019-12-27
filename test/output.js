(window.webpackJsonp = window.webpackJsonp || []).push([
    ["bundle_report_lazy"], {
        "../node_modules/@tencent/dui/lib/common/version.js": function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = "dui-0x1"
        },
        "../node_modules/@tencent/dui/lib/components/Loading/Spin.js": function(e, t, o) {
            "use strict";
            var n = this && this.__extends || function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e /************************** 33:39 **************************/ ) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(o("react")),
                i = a(o("../node_modules/prop-types/index.js"));
            o("../node_modules/@tencent/dui/lib/utils/style.js").injectStyle("components/Loading/style/spin.css", ".dui-spin{position:relative;width:100%;height:100%}.dui-spin-container{position:absolute;left:50%;top:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:48px;height:48px}.dui-spin-circle{border-radius:50%;width:100%;height:100%;-webkit-animation:dui-spin-rotate .8s linear infinite;animation:dui-spin-rotate .8s linear infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.dui-spin-circle-light{border:4px solid hsla(0,0%,100%,.4);border-top-color:#fff}.dui-spin-circle-dark{border:4px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.32)}@-webkit-keyframes dui-spin-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes dui-spin-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}");
            var l = o("../node_modules/@tencent/dui/lib/utils/theme.js"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.rootRef = r.createRef(), t.themedRender = function(e) {
                            var o = t.props,
                                n = o.prefixCls,
                                a = o.className,
                                i = o.style,
                                l = o.type,
                                s = e(n, a),
                                u = e(n + "-circle", n + "-circle-" + l);
                            return r.createElement("div", {
                                className: s,
                                style: i,
                                ref: t.rootRef
                            }, r.createElement("div", {
                                className: e(n + "-container"),
                                style: t.calcContainerTransform()
                            }, r.createElement("div", {
                                className: u
                            })))
                        }, t
                    }
                    return n(t, e), t.prototype.calcContainerTransform = function() {
                        var e = this.rootRef.current;
                        if (e) {
                            var t = e.clientWidth,
                                o = e.clientHeight;
                            return {
                                transform: "translate(-50%,-50%) scale(" + Math.min(t, o) / 48 + ")"
                            }
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.forceUpdate()
                    }, t.prototype.render = function() {
                        return l.consumeTheme(this.themedRender)
                    }, t
                }(r.PureComponent);
            t.default = s, s.defaultProps = {
                prefixCls: "dui-spin",
                type: "dark"
            }, s.propTypes = {
                prefixCls: i.string,
                style: i.object,
                className: i.string,
                type: i.oneOf(["light", "dark"])
            }
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/Container.js": function(e, t, o) {
            "use strict";
            var n = this && this.__extends || function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                a = this && this.__assign || function() {
                    return (a = Object.assign || function(e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(o("react")),
                l = r(o("../node_modules/prop-types/index.js")),
                s = o("../node_modules/@tencent/dui/lib/components/Snackbar/context.js"),
                u = o("../node_modules/@tencent/dui/lib/utils/theme.js"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.ref = i.createRef(), t.themedRender = function(e) {
                            var o = t.props,
                                n = o.prefixCls,
                                r = o.className,
                                l = o.style,
                                u = o.children,
                                c = e(n, r);
                            return i.createElement("div", {
                                className: c,
                                style: a({
                                    position: "relative"
                                }, l),
                                ref: t.ref
                            }, i.createElement(s.ContainerContext.Provider, {
                                value: t.ref.current
                            }, u))
                        }, t
                    }
                    return n(t, e), t.prototype.componentDidMount = function() {
                        this.forceUpdate()
                    }, t.prototype.render = function() {
                        return u.consumeTheme(this.themedRender)
                    }, t
                }(i.Component);
            t.default = c, c.defaultProps = {
                prefixCls: "dui-snackbar-container"
            }, c.propTypes = {
                prefixCls: l.string,
                style: l.object,
                className: l.string
            }
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/Snackbar.js": function(e, t, o) {
            "use strict";
            var n = this && this.__extends || function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                a = this && this.__assign || function() {
                    return (a = Object.assign || function(e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t.default = e, t
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = r(o("react")),
                s = r(o("../node_modules/prop-types/index.js")),
                u = i(o("react-dom")),
                c = o("../node_modules/@tencent/dui/lib/utils/helper.js"),
                d = o("../node_modules/@tencent/dui/lib/utils/keepDom.js"),
                p = i(o("../node_modules/@tencent/dui/lib/components/Loading/Spin.js")),
                _ = o("../node_modules/@tencent/dui/lib/components/Snackbar/context.js"),
                f = o("../node_modules/@tencent/dui/lib/utils/theme.js"),
                m = o("../node_modules/@tencent/dui/lib/components/Snackbar/queue.js"),
                b = o("../node_modules/@tencent/dui/lib/components/Snackbar/constant.js"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selfRef = l.createRef(), t.handleClickAction = function() {
                            t.props.onClickAction(), t.handleClose()
                        }, t.handleClose = function() {
                            t.props.onClose()
                        }, t.themedRender = function(e) {
                            var o, n = t.props,
                                r = n.prefixCls,
                                i = n.className,
                                s = n.style,
                                c = n.action,
                                _ = n.children,
                                f = n.message,
                                E = n.visible,
                                h = n.closable,
                                O = n.type,
                                v = n.zIndex,
                                T = n.showIcon,
                                g = e(r + "-message");
                            if (!d.decideKeepDom.call(t, b.SNACKBAR_LEAVING_TRANSITION_DURATION, E)) return null;
                            var R = t.getContainerDom(),
                                A = e(r, i, r + "-top", r + "-" + O, ((o = {})[r + "-with-icon"] = T, o[r + "-hidden"] = !E, o[r + "-in-container"] = R !== document.body, o));
                            return u.default.createPortal(l.createElement("div", {
                                className: A,
                                style: a({
                                    zIndex: v,
                                    marginTop: m.getMarginTop(t) + "px"
                                }, s),
                                ref: t.selfRef
                            }, "loading" === O && T ? l.createElement(p.default, {
                                className: e(r + "-loading-indicator"),
                                type: "light"
                            }) : null, l.createElement("span", {
                                className: g
                            }, _ || f), c || h ? l.createElement("span", {
                                className: e(r + "-controls")
                            }, t.renderAction(e), h ? l.createElement("span", {
                                className: e(r + "-close"),
                                onClick: t.handleClose
                            }) : null) : null), R)
                        }, t
                    }
                    return n(t, e), t.prototype.getContainerDom = function() {
                        return this.context || this.props.containerDom
                    }, t.prototype.componentDidMount = function() {
                        this.fixShrinkedWidthForIE(), this.updateQueue()
                    }, t.prototype.componentDidUpdate = function() {
                        this.fixShrinkedWidthForIE(), this.updateQueue()
                    }, t.prototype.updateQueue = function() {
                        var e = this.props.visible;
                        m.updateVisibleSnackbars(e, this)
                    }, t.prototype.fixShrinkedWidthForIE = function() {
                        var e = this.props,
                            t = e.visible,
                            o = e.style;
                        if (t && c.isIE()) {
                            var n = this.selfRef.current;
                            if (n && !(o && "width" in o)) {
                                var a = n.style.left;
                                n.style.left = "-9999px";
                                var r = n.getBoundingClientRect().width;
                                n.style.width = r + "px", n.style.left = a
                            }
                        }
                    }, t.prototype.renderAction = function(e) {
                        var t = this,
                            o = this.props,
                            n = o.prefixCls,
                            a = o.action;
                        return a ? Array.isArray(a) && a.length > 0 && a[0].text ? l.createElement("span", {
                            className: e(n + "-actions")
                        }, a.map(function(o, a) {
                            return l.createElement("span", {
                                key: a,
                                className: e(n + "-action"),
                                onClick: function() {
                                    o.onClick && o.onClick(), t.handleClose()
                                }
                            }, o.text)
                        })) : l.createElement("span", {
                            className: e(n + "-action"),
                            onClick: this.handleClickAction
                        }, a) : null
                    }, t.prototype.render = function() {
                        return f.consumeTheme(this.themedRender)
                    }, t.contextType = _.ContainerContext, t
                }(l.Component);
            t.default = E, E.defaultProps = {
                prefixCls: "dui-snackbar",
                onClickAction: c.emptyFn,
                closable: !1,
                type: "info",
                onClose: c.emptyFn,
                showIcon: !0,
                containerDom: document.body
            }, E.propTypes = {
                prefixCls: s.string,
                style: s.object,
                className: s.string,
                action: s.any,
                message: s.node,
                visible: s.bool,
                duration: s.number,
                onClickAction: s.func,
                closable: s.bool,
                type: s.oneOf(["info", "success", "error", "loading"]),
                onClose: s.func,
                zIndex: s.number,
                showIcon: s.bool,
                containerDom: s.object
            }
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/constant.js": function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SNACKBAR_LEAVING_TRANSITION_DURATION = 200
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/context.js": function(e, t, o) {
            "use strict";
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(o("react"));
            t.ContainerContext = a.createContext(null)
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/index.js": function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(o("../node_modules/@tencent/dui/lib/components/Snackbar/Snackbar.js"));
            t.Snackbar = a.default, o("../node_modules/@tencent/dui/lib/utils/style.js").injectStyle("components/Snackbar/style/index.css", "@-webkit-keyframes dui-snackbar-slide-in{0%{opacity:0;-webkit-transform:translate(-50%,-20px);transform:translate(-50%,-20px)}to{opacity:1;-webkit-transform:translate(-50%);transform:translate(-50%)}}@keyframes dui-snackbar-slide-in{0%{opacity:0;-webkit-transform:translate(-50%,-20px);transform:translate(-50%,-20px)}to{opacity:1;-webkit-transform:translate(-50%);transform:translate(-50%)}}@-webkit-keyframes dui-snackbar-slide-in-container{0%{opacity:0;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}to{opacity:1;-webkit-transform:translate(-50%);transform:translate(-50%)}}@keyframes dui-snackbar-slide-in-container{0%{opacity:0;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}to{opacity:1;-webkit-transform:translate(-50%);transform:translate(-50%)}}.dui-snackbar{-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;z-index:10000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;left:50%;height:36px;border-radius:4px;padding:10px 10px 10px 12px;font-size:14px;background-color:rgba(0,0,0,.8);white-space:nowrap;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-animation:dui-snackbar-slide-in .4s cubic-bezier(.4,0,.2,1);animation:dui-snackbar-slide-in .4s cubic-bezier(.4,0,.2,1);-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.dui-snackbar-with-icon:before{content:\"\";display:inline-block;width:14px;height:14px;margin-right:6px;background-position:50%;background-repeat:no-repeat}.dui-snackbar-error:before,.dui-snackbar-info:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%23fff' d='M7 14A7 7 0 117 0a7 7 0 010 14zM6.5 3a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-1zm0 6a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z' opacity='.96'/%3E%3C/svg%3E\")}.dui-snackbar-success:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%23fff' d='M7 14A7 7 0 107 0a7 7 0 000 14zM5.89 8.234l4.087-4.088a.5.5 0 01.707 0l.53.53a.5.5 0 010 .708L6.29 10.307a.5.5 0 01-.707 0l-.305-.304-2.12-1.994a.5.5 0 01-.012-.718l.525-.525a.5.5 0 01.702-.005L5.89 8.234z' opacity='.96'/%3E%3C/svg%3E\")}.dui-snackbar-error{background-color:#ff7272}.dui-snackbar-loading:before{content:none}.dui-snackbar-loading-indicator{width:14px;height:14px;margin-right:6px}.dui-snackbar-hidden{opacity:0;-webkit-transform:translateX(-50%) translateY(-20px);transform:translateX(-50%) translateY(-20px)}.dui-snackbar-top{top:105px}.dui-snackbar-bottom{bottom:105px}.dui-snackbar-in-container{-webkit-animation-name:dui-snackbar-slide-in-container;animation-name:dui-snackbar-slide-in-container;position:absolute;top:14px}.dui-snackbar-in-container.dui-snackbar-hidden{-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}.dui-snackbar-message{color:#fff}.dui-snackbar-controls{margin-left:40px;line-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.dui-snackbar-controls>:not(:last-child){margin-right:7px}.dui-snackbar-action,.dui-snackbar-close{display:inline-block;border-radius:2px;cursor:pointer}.dui-snackbar-action:hover,.dui-snackbar-close:hover{background-color:rgba(0,0,0,.24)}.dui-snackbar-action:active,.dui-snackbar-close:active{background-color:rgba(0,0,0,.64)}.dui-snackbar-actions>:not(:first-child){margin-left:7px}.dui-snackbar-action{color:#1e6fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 4px;font-weight:500}.dui-snackbar-error .dui-snackbar-action,.dui-snackbar-error .dui-snackbar-close{color:#fff}.dui-snackbar-error .dui-snackbar-action:active,.dui-snackbar-error .dui-snackbar-close:active{background-color:rgba(0,0,0,.4)}.dui-snackbar-close{width:20px;height:20px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23fff' d='M8.814 8.04l4.11 4.14-.814.82L8 8.86 3.89 13l-.814-.82 4.1-4.14L3 3.82 3.814 3 8 7.22 12.186 3l.814.82-4.186 4.22z'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat}");
            var r = n(o("../node_modules/@tencent/dui/lib/components/Snackbar/show.js")),
                i = n(o("../node_modules/@tencent/dui/lib/components/Snackbar/Container.js"));
            a.default.show = r.default, a.default.Container = i.default, t.default = a.default
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/queue.js": function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o("../node_modules/@tencent/dui/lib/components/Snackbar/constant.js"),
                a = 50;

            function r(e) {
                var t = e.getContainerDom();
                return t.__dui_visible_snackbars__ = t.__dui_visible_snackbars__ || [], t.__dui_visible_snackbars__
            }

            function i(e) {
                return r(e).findIndex(function(t) {
                    return t.instance === e
                })
            }

            function l(e) {
                var t = e[e.length - 1];
                return t ? t.marginTop + a : 0
            }
            t.updateVisibleSnackbars = function(e, t) {
                var o = i(t),
                    a = r(t);
                e && -1 === o && a.push({
                    instance: t,
                    marginTop: l(a)
                }), e || -1 === o || setTimeout(function() {
                    var e = i(t); - 1 !== e && a.splice(e, 1)
                }, n.SNACKBAR_LEAVING_TRANSITION_DURATION)
            }, t.getMarginTop = function(e) {
                var t = i(e),
                    o = r(e);
                return -1 !== t ? o[t].marginTop : l(o)
            }
        },
        "../node_modules/@tencent/dui/lib/components/Snackbar/show.js": function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(o("../node_modules/@tencent/dui/lib/components/Snackbar/Snackbar.js")),
                r = o("../node_modules/@tencent/dui/lib/utils/show.js"),
                i = o("../node_modules/@tencent/dui/lib/utils/helper.js"),
                l = o("../node_modules/@tencent/dui/lib/components/Snackbar/constant.js");
            t.default = i.wrapWithConfigDefaults(function(e) {
                var t = e.autoClose,
                    o = void 0 === t || t;
                delete e.autoClose;
                var n = r.showWithTransition({
                    Component: a.default,
                    transitionDuration: l.SNACKBAR_LEAVING_TRANSITION_DURATION,
                    autoClose: o,
                    props: e,
                    injectClosePropNames: ["onClose"]
                });
                if (!o) return n
            })
        },
        "../node_modules/@tencent/dui/lib/utils/helper.js": function(e, t, o) {
            "use strict";
            var n, a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.emptyFn = function() {}, t.falseFn = function() {
                return !1
            }, t.trueFn = function() {
                return !0
            }, t.castInto = function(e, t) {
                return e > t[1] ? t[1] : e < t[0] ? t[0] : e
            }, t.roundByStep = function e(t, o) {
                if (t < 0) return -e(-t, o);
                var n = t % o;
                return n < o / 2 ? t - n : t - n + o
            }, t.createStringParamFunc = function(e) {
                return function() {
                    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                    var n = t.map(function(e) {
                        return Number(e)
                    });
                    return e.apply(void 0, n)
                }
            }, t.isIE = function() {
                if ("boolean" === typeof n) return n;
                var e = navigator.userAgent;
                return n = !(!/compatible/.test(e) || !/MSIE/.test(e)) || !(!/Trident/.test(e) || !/rv:11\.0/.test(e))
            }, t.assert = function(e, t) {
                if (!e) throw new Error(t)
            }, t.inject = function(e, t) {
                return function() {
                    for (var o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
                    var a = e.apply(null, o.concat(t));
                    return !1 !== a && t(), a
                }
            }, t.wrapWithConfigDefaults = function(e) {
                var t = {},
                    o = function(o) {
                        var n = a(a({}, t), o);
                        return e(n)
                    };
                return o.configDefaults = function(e) {
                    t = e
                }, o
            }
        },
        "../node_modules/@tencent/dui/lib/utils/keepDom.js": function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decideKeepDom = function(e, t) {
                var o = this,
                    n = !t && this._ALC_HELPER_prevVisible;
                return this._ALC_HELPER_prevVisible = t, !!t || !!n && (setTimeout(function() {
                    o.forceUpdate()
                }, e), !0)
            }
        },
        "../node_modules/@tencent/dui/lib/utils/show.js": function(e, t, o) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t.default = e, t
                },
                r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = a(o("react")),
                l = r(o("react-dom")),
                s = o("../node_modules/@tencent/dui/lib/utils/helper.js");
            t.showWithTransition = function(e) {
                var t, o = e.Component,
                    a = e.transitionDuration,
                    r = e.autoClose,
                    u = e.props,
                    c = e.forcedProps,
                    d = e.injectClosePropNames,
                    p = void 0 === d ? [] : d,
                    _ = e.deepInjectClose,
                    f = void 0 === _ ? [] : _,
                    m = document.createElement("div");
                document.body.appendChild(m);
                var b = !1;
                p.forEach(function(e) {
                    h(u, e)
                }), f.forEach(function(e) {
                    var t = e[0],
                        o = e[1];
                    Array.isArray(t) ? t.forEach(function(e) {
                        return h(e, o)
                    }) : h(t, o)
                });
                var E = n(n(n({}, u), c), {
                    visible: !0
                });

                function h(e, t) {
                    var o = e[t] || s.emptyFn;
                    e[t] = s.inject(o, O)
                }

                function O() {
                    b || (b = !0, clearTimeout(t), v(E = n(n({}, E), {
                        visible: !1
                    })), setTimeout(function() {
                        m.remove()
                    }, a))
                }

                function v(e) {
                    l.default.render(i.createElement(o, n({}, e)), m)
                }
                return v(E), r && (t = setTimeout(O, u.duration || 2e3)), {
                    update: function(e) {
                        b || v(E = n(n(n(n({}, E), e), c), {
                            visible: !0
                        }))
                    },
                    close: O
                }
            }
        },
        "../node_modules/@tencent/dui/lib/utils/style.js": function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(o("../node_modules/@tencent/dui/lib/common/version.js"));
            t.injectStyle = function(e, t) {
                var o = a.default+"-" + e;
                if (window.__dui_style_registry__ = window.__dui_style_registry__ || {}, !window.__dui_style_registry__[o]) {
                    window.__dui_style_registry__[o] = !0;
                    var n = document.createElement("style");
                    n.setAttribute("type", "text/css"), n.innerText = t, document.head.appendChild(n)
                }
            }
        },
        "../node_modules/@tencent/dui/lib/utils/theme.js": function(e, t, o) {
            "use strict";
            var n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t.default = e, t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(o("react")),
                i = a(o("../node_modules/classnames/index.js"));
            o("../node_modules/@tencent/dui/lib/utils/style.js").injectStyle("common/global.css", "[class*=dui]{font-family:PingFang SC,Microsoft YaHei,\u9ed1\u4f53,\u5b8b\u4f53,sans-serif}"), o("../node_modules/@tencent/dui/lib/utils/polyfill.js");
            var l = r.createContext(null);

            function s(e) {
                return function() {
                    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                    return function(e, t) {
                        if (!t || !e) return t;
                        var o = t.split(/\s+/);
                        return o.concat.apply(o, o.map(function(t) {
                            return e[t]
                        }).filter(function(e) {
                            return e
                        })).join(" ")
                    }(e, i.default.apply(void 0, t))
                }
            }
            t.consumeTheme = function(e) {
                return r.createElement(l.Consumer, null, function(t) {
                    var o = s(t);
                    return e(o)
                })
            }, t.createThemedClassNames = s, t.default = l
        },
        "../node_modules/@tencent/jank-sdk/lib/default.json": function(e) {
            e.exports = {
                HeartbeatConfig: {
                    Interval: 1e3,
                    IntervalLimit: 3e3,
                    Panel: !1,
                    TriggerLimit: 10,
                    Record: !1,
                    SaveAllRecord: !1,
                    StopOnPageHidden: !0
                },
                PageActiveConfig: {
                    Limit: 18e4
                }
            }
        },
        "../node_modules/@tencent/jank-sdk/lib/index.js": function(e, t, o) {
            "use strict";
            var n, a, r = o("../node_modules/@tencent/jank-sdk/lib/default.json"),
                i = function() {
                    function e() {
                        this._listeners = {}
                    }
                    return e.prototype._hasEventListener = function(e, t) {
                        return void 0 !== this._listeners[e] && this._listeners[e].indexOf(t) > -1
                    }, e.prototype.addEventListener = function(e, t) {
                        this._hasEventListener(e, t) || (void 0 === this._listeners[e] && (this._listeners[e] = []), this._listeners[e].push(t))
                    }, e.prototype.removeEventListener = function(e, t) {
                        if (this._hasEventListener(e, t)) {
                            var o = this._listeners[e].indexOf(t);
                            this._listeners[e].splice(o, 1)
                        }
                    }, e.prototype.dispatchEvent = function(e, t) {
                        if (void 0 !== this._listeners[e])
                            for (var o = 0; o < this._listeners[e].length; o++) this._listeners[e][o].call(this, t)
                    }, e
                }(),
                l = function() {
                    function e(e) {
                        this._app = e, this._initStage(), this._record = [], this._draw = this._draw.bind(this), this._app.heartbeatMonitor.addEventListener("jank", this._draw), this._app.heartbeatMonitor.addEventListener("heart", this._draw)
                    }
                    return e.prototype._initStage = function() {
                        this._canvas = document.createElement("canvas"), this._canvas.width = 70, this._canvas.height = 70, Object.assign(this._canvas.style, {
                            position: "absolute",
                            right: 0,
                            top: 0,
                            zIndex: 1e10,
                            backgroundColor: "#d6eaf8"
                        }), this._shadowCanvas = this._canvas.cloneNode(), this._ctx = this._canvas.getContext("2d"), this._shadowCtx = this._shadowCanvas.getContext("2d"), document.body.appendChild(this._canvas)
                    }, e.prototype._draw = function(e) {
                        var t;
                        this._ctx.clearRect(0, 0, 70, 70);
                        var o = Math.max(0, 70 - e / this._app.config.HeartbeatConfig.Interval * 25),
                            n = this._app.config.HeartbeatConfig.IntervalLimit;
                        this._ctx.drawImage(this._shadowCanvas, -10, 0), t = e > n ? "rgb(253, 0, 0)" : "rgb(253, " + (250 - Math.min(e, n) / n * 250) + ", 0)", this._ctx.beginPath(), this._ctx.fillStyle = t, this._ctx.rect(60, o, 10, 70 - o), this._ctx.fill(), this._ctx.closePath(), this._shadowCtx.clearRect(0, 0, 70, 70), this._shadowCtx.drawImage(this._canvas, 0, 0), this._record.push(e)
                    }, e
                }(),
                s = function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                u = function(e) {
                    function t(t) {
                        var o = e.call(this) || this;
                        return o._heartbeatPanel = null, o._handleVisibilityChange = function() {
                            var e = document[n];
                            "hidden" === e ? o.stop() : o.start(), o.dispatchEvent("pageVisiableChange", e)
                        }, o._tick = function() {
                            o._timeoutTimer = null;
                            var e = Date.now() - o._preHeartBeatTime;
                            e - o._app.config.HeartbeatConfig.Interval / 2 > o._app.config.HeartbeatConfig.IntervalLimit ? (o._triggerTimes++, o.dispatchEvent("jank", e)) : o.dispatchEvent("heart", e), null === o._timeoutTimer && o._onSetTimeout()
                        }, o._app = t, o._status = "uninit", o._preHeartBeatTime = 0, o._timeoutTimer = null, o._triggerTimes = 0, o
                    }
                    return s(t, e), t.prototype._init = function() {
                        if (this._app.config.HeartbeatConfig.StopOnPageHidden) {
                            if ("undefined" !== typeof document.hidden) a = "visibilitychange", n = "visibilityState";
                            else if ("undefined" !== typeof document.mozHidden) a = "mozvisibilitychange", n = "mozVisibilityState";
                            else if ("undefined" !== typeof document.msHidden) a = "msvisibilitychange", n = "msVisibilityState";
                            else {
                                if ("undefined" === typeof document.webkitHidden) return;
                                a = "webkitvisibilitychange", n = "webkitVisibilityState"
                            }
                            document.addEventListener(a, this._handleVisibilityChange)
                        }
                        this._app.config.HeartbeatConfig.Panel && (this._heartbeatPanel = new l(this._app))
                    }, t.prototype._onSetTimeout = function() {
                        0 !== this._app.config.HeartbeatConfig.TriggerLimit && this._triggerTimes >= this._app.config.HeartbeatConfig.TriggerLimit ? this._status = "finish" : (this._preHeartBeatTime = Date.now(), this._timeoutTimer = setTimeout(this._tick, this._app.config.HeartbeatConfig.Interval))
                    }, t.prototype.start = function() {
                        this._app.config.HeartbeatConfig.StopOnPageHidden && document.hidden || ("uninit" === this._status && this._init(), "finish" !== this._status && "run" !== this._status && (this._timeoutTimer ? console.warn("[jank] timeout exist") : (this._status = "run", this._onSetTimeout())))
                    }, t.prototype.stop = function() {
                        "finish" !== this._status && "stop" !== this._status && (clearTimeout(this._timeoutTimer), this._timeoutTimer = null, this._status = "stop")
                    }, t
                }(i),
                c = navigator.userAgent.toLowerCase(),
                d = "pc" === (/(android)/.test(c) ? "android" : /(iphone|ipad|ipod)/.test(c) ? "ios" : "pc"),
                p = function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                _ = function(e) {
                    function t(t) {
                        var o = e.call(this) || this;
                        return o._timer = 0, o._lastActive = 0, o._check = function() {
                            d ? document.body.addEventListener("mousemove", o._handle) : document.body.addEventListener("touchstart", o._handle)
                        }, o._handle = function() {
                            d ? document.body.removeEventListener("mousemove", o._handle) : document.body.removeEventListener("touchstart", o._handle), o.start()
                        }, o._app = t, o._timeInterval = o._app.config.PageActiveConfig.Limit, o
                    }
                    return p(t, e), t.prototype.start = function() {
                        this._lastActive = Date.now(), this._timer = setTimeout(this._check, this._timeInterval)
                    }, t.prototype.stop = function() {
                        clearTimeout(this._timer)
                    }, t.prototype.lastActive = function() {
                        return this._lastActive
                    }, t
                }(i),
                f = function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }();
            var m = new(function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._queue = [], t._taskStack = [], t._count = 0, t
                }
                return f(t, e), t.prototype._runTask = function() {
                    this.dispatchEvent("runTask")
                }, t.prototype._overTask = function() {
                    this._queue.push(this._parse()), this._taskStack = [], this._count = 0, this._queue.length > 5 && (this._queue = this._queue.slice(-5)), this.dispatchEvent("overTask")
                }, t.prototype._parse = function() {
                    for (var e, t = [], o = [], n = 0; n < this._taskStack.length; n++)
                        if ((e = this._taskStack[n]).sub = [], void 0 === t[0] || t[0].id !== e.id || t[0].type === e.type)(t[0] ? t[0].sub : o).push(e), t.unshift(e);
                        else {
                            var a = t.shift();
                            a.time = e.end - a.start, a.start = a.start, delete a.type
                        } return o
                }, Object.defineProperty(t.prototype, "queue", {
                    get: function() {
                        return this._queue
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "task", {
                    get: function() {
                        return this._queue[this._queue.length - 1]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.start = function(e) {
                    0 === this._count && this._runTask(), this._count++, this._taskStack.push({
                        id: e,
                        start: Date.now(),
                        type: 0
                    })
                }, t.prototype.end = function(e) {
                    this._taskStack.push({
                        id: e,
                        end: Date.now(),
                        type: 1
                    }), this._count--, 0 === this._count && this._overTask()
                }, t.prototype.clear = function() {
                    0 === this._count ? this._queue.length = 0 : console.warn("\u5806\u6808\u8bb0\u5f55\u6267\u884c\u8fc7\u7a0b\u4e2d\u65e0\u6cd5\u6e05\u9664")
                }, t
            }(i));
            var b = function(e) {
                return function(t, o, n) {
                    ! function(e, t, o, n) {
                        var a;
                        try {
                            if (a = e.toString().match(/^(class|function)\s(\w+)[\(\s]/), "[object Array]" !== Object.prototype.toString.apply(a)) return console.warn("proxy function error", a), n
                        } catch (i) {
                            return console.warn("proxy function error", i), n
                        }
                        var r = a[2];
                        if ("string" !== typeof r) return n;
                        e.prototype[o + "-decorators"] = n.value, n.value = function() {
                            m.start(r + "-" + o);
                            var t = e.prototype[o + "-decorators"].apply(this, arguments);
                            return m.end(r + "-" + o), t
                        }
                    }(e, 0, o, n)
                }
            };
            var E, h, O = function(e, t) {
                if (!t) {
                    var o = void 0;
                    try {
                        if (o = e.toString().match(/^(function)\s(\w+)[\(\s]/), "[object Array]" !== Object.prototype.toString.apply(o)) return console.warn("proxy function error"), e
                    } catch (n) {
                        return console.warn("proxy function error", n), e
                    }
                    if (null === o) return e;
                    t = o[2]
                }
                return "string" !== typeof t ? e : function() {
                    m.start("" + t);
                    var o = e.apply(this, arguments);
                    return m.end("" + t), o
                }
            };
            ! function(e) {
                e.REGISTER = "jank_register", e.HEARTBEAT = "jank_heartbeat", e.ASK_AMOUNT = "jank_ask_amount", e.UNREGISTER = "jank_unregister"
            }(E || (E = {})),
            function(e) {
                e.CONFIRM = "jank_confirm", e.HEARTBEAT = "jank_heartbeat", e.REPLY_AMOUNT = "jank_reply_amount"
            }(h || (h = {}));
            var v, T = function() {
                var e = function(t, o) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                        })(t, o)
                };
                return function(t, o) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }();
            ! function(e) {
                e[e.UNINIT = 0] = "UNINIT", e[e.RUNNING = 1] = "RUNNING", e[e.FINISH = 2] = "FINISH"
            }(v || (v = {}));
            var g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._status = v.UNINIT, t._controller = null, t._resolve = null, t._reject = null, t._handleMessage = function(e) {
                        var o = e.data;
                        switch (o.type) {
                            case h.CONFIRM:
                                break;
                            case h.HEARTBEAT:
                                t._heartbeat();
                                break;
                            case h.REPLY_AMOUNT:
                                t._replyAmount(o.data);
                                break;
                            default:
                                console.error("unknown response message in tabs amount")
                        }
                    }, t._handleBeforeunload = function() {
                        t._unregister()
                    }, t
                }
                return T(t, e), t.prototype._sendMessage = function(e) {
                    this._controller && this._controller.postMessage && this._controller.postMessage(e)
                }, t.prototype._replyAmount = function(e) {
                    void 0 === e && this._reject("unknown error"), 0 === e.retcode ? this._resolve(e.result) : this._reject(e.result), this._resolve = null, this._reject = null
                }, t.prototype._register = function() {
                    this._sendMessage({
                        type: E.REGISTER
                    })
                }, t.prototype._unregister = function() {
                    this._sendMessage({
                        type: E.UNREGISTER
                    })
                }, t.prototype._heartbeat = function() {
                    this._sendMessage({
                        type: E.HEARTBEAT
                    })
                }, t.prototype._askAmount = function() {
                    this._sendMessage({
                        type: E.ASK_AMOUNT
                    })
                }, t.prototype._addEventListener = function() {
                    navigator.serviceWorker && navigator.serviceWorker.addEventListener("message", this._handleMessage), window.addEventListener("beforeunload", this._handleBeforeunload)
                }, t.prototype.start = function() {
                    this._status == v.UNINIT ? navigator.serviceWorker ? navigator.serviceWorker.controller ? (this._controller = navigator.serviceWorker.controller, this._status = v.RUNNING, this._register(), this._addEventListener()) : console.error("please register service by business code") : console.error("can't use service-worker in this client") : console.error("only can start tabs amount once")
                }, t.prototype.end = function() {
                    this._status = v.FINISH, this._unregister()
                }, t.prototype.amount = function() {
                    var e = this;
                    return null !== this._resolve || null !== this._reject ? Promise.reject("repeat request") : (this._askAmount(), new Promise(function(t, o) {
                        e._resolve = t, e._reject = o
                    }))
                }, t
            }(i);
            o.d(t, "b", function() {
                return b
            }), o.d(t, "c", function() {
                return O
            });
            var R = function() {
                    var e = function(t, o) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                            })(t, o)
                    };
                    return function(t, o) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                    }
                }(),
                A = function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var o = e.call(this) || this;
                        return t.HeartbeatConfig && Object.assign(r.HeartbeatConfig, t.HeartbeatConfig), t.PageActiveConfig && Object.assign(r.PageActiveConfig, t.PageActiveConfig), o._config = Object.assign(r, t), o._initHeartbeatMonitor(), o._initPageActiveMonitor(), o._initTabsAmountMonitor(), o._traceStack = m, o
                    }
                    return R(t, e), t.prototype._initHeartbeatMonitor = function() {
                        this._heartbeatMonitor = new u(this)
                    }, t.prototype._initPageActiveMonitor = function() {
                        this._pageActiveMonitor = new _(this)
                    }, t.prototype._initTabsAmountMonitor = function() {
                        this._tabsAmountMonitor = new g
                    }, Object.defineProperty(t.prototype, "config", {
                        get: function() {
                            return this._config
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "heartbeatMonitor", {
                        get: function() {
                            return this._heartbeatMonitor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pageActiveMonitor", {
                        get: function() {
                            return this._pageActiveMonitor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tabsAmountMonitor", {
                        get: function() {
                            return this._tabsAmountMonitor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "traceStack", {
                        get: function() {
                            return this._traceStack
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i);
            t.a = A
        },
        "../node_modules/classnames/index.js": function(e, t, o) {
            var n;
            ! function() {
                "use strict";
                var o = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var r = typeof n;
                            if ("string" === r || "number" === r) e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var i = a.apply(null, n);
                                i && e.push(i)
                            } else if ("object" === r)
                                for (var l in n) o.call(n, l) && n[l] && e.push(l)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                    return a
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        "../node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
            "use strict";
            var n = o("../node_modules/prop-types/lib/ReactPropTypesSecret.js");

            function a() {}

            function r() {}
            r.resetWarningCache = a, e.exports = function() {
                function e(e, t, o, a, r, i) {
                    if (i !== n) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var o = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: r,
                    resetWarningCache: a
                };
                return o.PropTypes = o, o
            }
        },
        "../node_modules/prop-types/index.js": function(e, t, o) {
            e.exports = o("../node_modules/prop-types/factoryWithThrowingShims.js")()
        },
        "../node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        "./src/base/report/alloyreport-debug.js": function(e, t, o) {
            o("../node_modules/core-js/modules/es.regexp.constructor.js"), o("../node_modules/core-js/modules/es.regexp.to-string.js"), o("../node_modules/core-js/modules/es.string.match.js"), o("../node_modules/core-js/modules/es.string.replace.js"), o("../node_modules/core-js/modules/es.regexp.constructor.js"), o("../node_modules/core-js/modules/es.regexp.to-string.js"), o("../node_modules/core-js/modules/es.string.match.js"), o("../node_modules/core-js/modules/es.string.replace.js"),
                function(e) {
                    function t(n) {
                        if (o[n]) return o[n].exports;
                        var a = o[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
                    }
                    var o = {};
                    t.m = e, t.c = o, t.p = "http://s.url.cn/pub/js/", t(0)
                }([function(e, t, o) {
                    var n = o(1),
                        a = o(2),
                        r = o(6),
                        i = {
                            initAlloyData: function(e) {
                                r.AlloyDataEnvs.setEnvs(e) || console.error("options for AlloyData are invalid")
                            },
                            AlloyDataAPM: n.reportFunction,
                            AlloyDataADT: a.reportFunction
                        };
                    window && !window.__AlloyData && (window.__AlloyData = i), e.exports = i
                }, function(e, t, o) {
                    var n = o(2),
                        a = o(5);
                    e.exports = {
                        type: "apm",
                        reportFunction: function() {
                            (function() {
                                var e = (window && (window.performance || window.webkitPerformance || window.msPerformance) || {}).timing,
                                    t = e && e.navigationStart,
                                    o = a.getTimingKeys();
                                if ("number" == typeof t)
                                    for (var r = 0; r < o.length; r++) {
                                        var i = o[r],
                                            l = e[i];
                                        "number" == typeof l && (l > 0 && (l -= t), n.reportFunction({
                                            pointid: a.getTiming(i),
                                            pointvalue: l
                                        }))
                                    } else removeEvent(eventName, loadHandler)
                            })(),
                            function() {
                                var e = window && (window.performance || window.webkitPerformance || window.msPerformance) || {},
                                    t = null;
                                if (e && e.getEntries ? t = e.getEntries() : e && e.getEntriesByType && (t = e.getEntriesByType("resource")), t && t.length) {
                                    for (var o = t.length, r = [], i = 0; i < o; i++) {
                                        var l = t[i].initiatorType,
                                            s = a.getResource(l);
                                        "undefined" == typeof r[s] && (r[s] = 0), r[s] = r[s] + 1
                                    }
                                    var u = a.getResourceValues();
                                    for (i = 0; i < u.length; i++) {
                                        var c = u[i],
                                            d = 0;
                                        r[c] && (d = r[c]), n.reportFunction({
                                            pointid: c,
                                            pointvalue: d
                                        })
                                    }
                                }
                            }()
                        }
                    }
                }, function(e, t, o) {
                    var n = o(3),
                        a = o(5),
                        r = o(6),
                        i = {
                            platform: a.getPlatform(n.platform),
                            browser: a.getBrowser(n.browser)
                        };
                    e.exports = {
                        type: "adt",
                        reportFunction: function(e, t) {
                            if (!e) throw "params can not be null";
                            var o = {},
                                a = r.AlloyDataEnvs.getEnvs(),
                                l = {
                                    projectID: e.projectID,
                                    pageName: e.pageName,
                                    secretKey: e.secretKey
                                };
                            if (r.AlloyDataEnvs.checkEnvs(l)) a = l;
                            else if (!r.AlloyDataEnvs.checkEnvs(a)) throw "Init AlloyData by window.report.initAlloyData firstly";
                            for (var s in o.apn = n.networkType(), o.projectid = a.projectID, o.pagename = a.pageName, o.secretkey = a.secretKey, i) i.hasOwnProperty(s) && (o[s] = i[s]);
                            for (var s in e) e.hasOwnProperty(s) && (o[s] = e[s]);
                            window.AlloyReport && window.AlloyReport.tdw && window.AlloyReport.tdw(o, t, "dc05239")
                        }
                    }
                }, function(e, t, o) {
                    var n = o(4);
                    "undefined" == typeof window && (window = {});
                    window.console = window.console || {
                        log: function() {},
                        error: function() {},
                        warn: function() {}
                    };
                    var a = function() {
                        var e = function(e) {
                            var t = document && document.cookie && document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                            return t ? decodeURIComponent(t[2]) : ""
                        }("uin") || "";
                        return e.replace(/^o0*/, "")
                    }();
                    e.exports = {
                        uin: a,
                        inArray: function(e, t) {
                            for (var o = 0; o < e.length; o++)
                                if (t === e[o]) return !0;
                            return !1
                        },
                        networkType: function() {
                            var e = -1;
                            return window && window.mqq && mqq.device && mqq.device.getNetworkType && mqq.support("mqq.device.getNetworkType") && mqq.device.getNetworkType(function(t) {
                                    e = t
                                }),
                                function() {
                                    return e
                                }
                        }(),
                        platform: function() {
                            var e = window && window.navigator && window.navigator.userAgent,
                                t = "unknown";
                            return e && e.match(/android/i) ? t = "android" : e && e.match(/(iphone)|(ipad)|(itouch)/i) ? t = "ios" : e && (t = "pc"), t
                        }(),
                        browser: function() {
                            var e = n.browser;
                            return (e.isIE ? "IE" : e.isChrome && "Chrome") || e.isFirefox && "Firefox" || e.isSafari && "Safari" || e.isEdgeChromium && "EdgeChromium" || e.isEdge && "Edge" || "unknown"
                        }()
                    }
                }, function(e, t) {
                    e.exports = function() {
                        var e = window.navigator.userAgent.toLowerCase(),
                            t = /rv:([\d.]+)\) like gecko/.test(e) || /msie ([\d.]+)/.test(e) || /Trident/.test(e),
                            o = /chrome\/([\d.]+)/.test(e),
                            n = /opera/.test(e),
                            a = /webkit/.test(e),
                            r = /firefox/.test(e) && !/(compatible|webkit)/.test(e),
                            i = /edge/.test(e),
                            l = o && i,
                            s = /(ipad)/i.test(e),
                            u = /(mobile)/i.test(e) && !s,
                            c = /Mac OS X/i.test(e) && !u,
                            d = /android|adr/i.test(e),
                            p = /(iphone|ipad|ipod)/.test(e),
                            _ = /MSAppHost/i.test(e),
                            f = !u && /QQBrowser/i.test(e) && !/QBCore/i.test(e),
                            m = u && /MQQBrowser/i.test(e) && !/TBS/i.test(e),
                            b = u ? m : f,
                            E = window.location.href.indexOf("__wxjs_environment=miniprogram") > -1 || /MicroMessenger/i.test(e) && /miniProgram/i.test(e),
                            h = window.location.href.indexOf("__wxjs_environment=qqminiprogram") > -1 || /QQ/i.test(e) && /MiniApp/i.test(e),
                            O = E || h,
                            v = /(wxwork)/i.test(e),
                            T = v,
                            g = /MicroMessenger/i.test(e) && !v && !E,
                            R = g,
                            A = /TIM/i.test(e),
                            y = /QQ/i.test(e) && !v && !g && !b && !A && !h,
                            I = A || y,
                            w = A || /QQ/i.test(e),
                            S = /QBCore/i.test(e) && /TIM2.0/i.test(e);
                        return {
                            browser: {
                                isIE: t,
                                isChrome: o,
                                isOpera: n,
                                isSafari: a,
                                isFirefox: r,
                                isEdge: i,
                                isEdgeChromium: l,
                                isPCQQBrowser: f,
                                isMobileQQBrowser: m,
                                isQQBrowser: b
                            },
                            platform: {
                                isPad: s,
                                isMobile: u,
                                isMac: c,
                                isAndroid: d,
                                isIOS: p,
                                isWindow: /(win64|wow64|win32|wow32)/i.test(e)
                            },
                            host: {
                                isWindowStore: _,
                                isWxMiniProgram: E,
                                isQQMiniProgram: h,
                                isMiniProgram: O,
                                isWxWork: v,
                                isWeWork: T,
                                isWeChat: g,
                                isWechat: R,
                                isTim: A,
                                isQQ: y,
                                isTimOrQQ: I,
                                isTimOrQQFamily: w,
                                isPCTim: S
                            }
                        }
                    }()
                }, function(e, t) {
                    e.exports = function() {
                        var e = {
                                unknown: -1,
                                pc: 1,
                                ios: 2,
                                android: 3
                            },
                            t = {
                                unknown: -1,
                                Chrome: 1,
                                Firefox: 2,
                                IE: 3,
                                Edge: 4,
                                Safari: 5,
                                EdgeChromium: 6
                            },
                            o = {
                                other: -100,
                                css: -101,
                                script: -102,
                                img: -103,
                                xmlhttprequest: -104,
                                link: -105,
                                iframe: -106
                            },
                            n = {
                                connectEnd: -1,
                                connectStart: -2,
                                domComplete: -3,
                                domContentLoadedEventEnd: -4,
                                domContentLoadedEventStart: -5,
                                domInteractive: -6,
                                domLoading: -7,
                                domainLookupEnd: -8,
                                domainLookupStart: -9,
                                fetchStart: -10,
                                loadEventEnd: -11,
                                loadEventStart: -12,
                                navigationStart: -13,
                                redirectEnd: -14,
                                redirectStart: -15,
                                requestStart: -16,
                                responseEnd: -17,
                                responseStart: -18,
                                secureConnectionStart: -19,
                                unloadEventEnd: -20,
                                unloadEventStart: -21,
                                domContentLoaded: -22,
                                domContentLoadedStart: -23,
                                domContentLoadedEnd: -24
                            },
                            a = function(e, t, o) {
                                var n = t[e];
                                return "undefined" == typeof n && (n = "undefined" == typeof o ? -1 : o), n
                            };
                        return {
                            getPlatform: function(t) {
                                return a(t, e)
                            },
                            getBrowser: function(e) {
                                return a(e, t)
                            },
                            getTiming: function(e) {
                                return a(e, n)
                            },
                            getTimingKeys: function() {
                                return function(e) {
                                    var t = [];
                                    for (var o in e) e.hasOwnProperty(o) && t.push(o);
                                    return t
                                }(n)
                            },
                            getResource: function(e) {
                                return a(e, o)
                            },
                            getResourceValues: function() {
                                return function(e) {
                                    var t = [];
                                    for (var o in e) e.hasOwnProperty(o) && t.push(e[o]);
                                    return t
                                }(o)
                            }
                        }
                    }()
                }, function(e, t) {
                    var o = function() {
                        var e = {},
                            t = function(e, t) {
                                return "string" == typeof e && (!t || e.length === t)
                            },
                            o = function(e) {
                                return !!(e && (t(e.projectID) || function(e) {
                                    return "number" == typeof e
                                }(e.projectID)) && t(e.pageName) && t(e.secretKey))
                            };
                        return {
                            checkEnvs: o,
                            getEnvs: function() {
                                if (!o(e)) return null;
                                var t = e;
                                return {
                                    projectID: parseInt(String(t.projectID)),
                                    pageName: t.pageName,
                                    secretKey: t.secretKey
                                }
                            },
                            setEnvs: function(t) {
                                return !!o(t) && (e = {
                                    projectID: parseInt(String(t.projectID)),
                                    pageName: t.pageName,
                                    secretKey: t.secretKey
                                }, !0)
                            }
                        }
                    }();
                    e.exports = {
                        AlloyDataEnvs: o
                    }
                }])
        },
        "./src/external/report/index.ts": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./src/base/index.ts"),
                a = o("../node_modules/@tencent/tencent-doc-report/lib/index.browser.js"),
                r = (o("./src/base/report/alloyreport-debug.js"), o("../node_modules/core-js/modules/es.symbol.js"), o("../node_modules/core-js/modules/es.symbol.description.js"), o("../node_modules/core-js/modules/es.symbol.iterator.js"), o("../node_modules/core-js/modules/es.array.concat.js"), o("../node_modules/core-js/modules/es.array.from.js"), o("../node_modules/core-js/modules/es.array.iterator.js"), o("../node_modules/core-js/modules/es.array.map.js"), o("../node_modules/core-js/modules/es.function.name.js"), o("../node_modules/core-js/modules/es.object.to-string.js"), o("../node_modules/core-js/modules/es.regexp.to-string.js"), o("../node_modules/core-js/modules/es.string.iterator.js"), o("../node_modules/core-js/modules/web.dom-collections.for-each.js"), o("../node_modules/core-js/modules/web.dom-collections.iterator.js"), o("./src/core/behavior/index.ts")),
                i = o("./src/external/report/alloyreport.ts");
            o("../node_modules/core-js/modules/es.object.assign.js"), o("../node_modules/core-js/modules/es.object.keys.js");

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var s = navigator.userAgent.toLowerCase(),
                u = /android|adr/i.test(s),
                c = /(iphone|ipad|ipod)/.test(s),
                d = /(ipad)/i.test(s),
                p = /(mobile)/i.test(s) && !d;

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, o = new Array(e.length); t < e.length; t++) o[t] = e[t];
                        return o
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var f, m, b = n.a.config.report,
                E = b.MONITOR_POINTS,
                h = b.TDW_MODULE,
                O = b.TDW_ACTION,
                v = b.TDW_VER5_VALUE,
                T = b.getTdwObj3Value,
                g = b.SENTRY_ERROR_TYPE,
                R = {
                    CHECK_MUTATION_ERROR: function(e, t) {
                        var o = T(h.MUTATION, e);
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.CHECK_MUTATION + "_" + v.CHECK_MUTATION_ERROR,
                            obj3Value: o,
                            ver5Value: String(e.operationType),
                            detail: [e, t, t && t.stack]
                        }), Object(i.g)({
                            errorType: g.CHECK_MUTATION_ERROR,
                            message: e,
                            error: t
                        })
                    },
                    CHECK_MUTATION_RESULT_ERROR: function(e) {
                        var t = T(h.MUTATION, e);
                        i.a.monitor(E.CHECK_MUTATION_FAIL_MAP[e.operationType]);
                        var o, n = O.CHECK_MUTATION + "-" + e.operationType;
                        switch (e.operationType) {
                            case r.a.Mutation.MUTATION_OPERATION_TYPE.HISTORY:
                                o = void 0 !== e.id ? e.id.toString() : "-1";
                                break;
                            default:
                                o = void 0 !== e.parentRequestId ? e.parentRequestId.toString() : "-1"
                        }
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: n,
                            obj3Value: t,
                            ver5Value: o,
                            detail: [e]
                        }), e.operationType !== r.a.Mutation.MUTATION_OPERATION_TYPE.HISTORY && Object(i.g)({
                            errorType: g.CHECK_MUTATION_ERROR,
                            message: e
                        })
                    },
                    MERGE_GRID_RANGE_ERROR: function(e) {
                        i.a.monitor(E.MERGE_GRID_RANGE_ERROR), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.OPERATION,
                            actionValue: O.MERGE_GRID_RANGE_ERROR,
                            detail: e
                        })
                    },
                    RUN_MUTATION_ERROR: function(e, t) {
                        var o = T(h.MUTATION, t);
                        if (e.message && 0 === e.message.indexOf("ApiCheckError")) {
                            var n = i.b.DEBUG,
                                a = t.operationType === r.a.Mutation.MUTATION_OPERATION_TYPE.HISTORY && -1 !== e.message.indexOf("\u5408\u5e76\u5355\u5143\u683c\u5df2\u7ecf\u5b58\u5728");
                            a && (n = i.b.INFO), a || i.a.monitor(E.CHECK_MUTATION_FAIL_MAP[t.operationType]), Object(i.d)({
                                level: n,
                                moduleValue: h.MUTATION,
                                actionValue: O.CHECK_MUTATION + "_" + v.CHECK_MUTATION_FAIL,
                                obj3Value: o,
                                ver5Value: String(t.operationType),
                                detail: [t, e, e && e.stack]
                            }), a || t.operationType !== r.a.Mutation.MUTATION_OPERATION_TYPE.HISTORY && Object(i.g)({
                                errorType: g.CHECK_MUTATION_ERROR,
                                message: t,
                                error: e
                            })
                        } else i.a.monitor(E.RUN_MUTATION_ERROR_MAP[t.operationType]), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.RUN_MUTATION + "_" + v.RUN_MUTATION_ERROR,
                            obj3Value: o,
                            ver5Value: String(t.operationType),
                            detail: [t, e, e && e.stack]
                        }), t.operationType !== r.a.Mutation.MUTATION_OPERATION_TYPE.HISTORY && Object(i.g)({
                            errorType: g.RUN_MUTATION_ERROR,
                            message: t,
                            error: e
                        })
                    },
                    AFTER_MUTATION_RUN_CATCH_ERROR: function(e, t) {
                        var o = T(h.MUTATION, t);
                        i.a.monitor(33660169), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "mutation",
                            actionValue: "afterMutationRun",
                            obj3Value: o,
                            ver5Value: "1",
                            detail: [t]
                        }), Object(i.g)({
                            errorType: "afterMutationRunError",
                            error: e
                        })
                    },
                    AFTER_MUTATION_RUN_DATA_CHANGE_CATCH_ERROR: function(e, t) {
                        var o = T(h.MUTATION, t);
                        i.a.monitor(33660170), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "mutation",
                            actionValue: "afterMutationRunDataChange",
                            obj3Value: o,
                            ver5Value: "1",
                            detail: [t, e && e.stack]
                        })
                    },
                    COMMIT_EMPTY_MUTATION: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "mutation",
                            actionValue: "commitEmptyMutation",
                            detail: e
                        })
                    },
                    DO_BEHAVIOR_AFTER_SHUTDOWN: function() {
                        i.a.monitor(34280469), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "doBehaviorAfterShutDown",
                            ver5Value: "1"
                        })
                    },
                    COMMIT_MUTATION_CATCH_ERROR: function(e, t) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "mutation",
                            actionValue: "commitMutation",
                            ver5Value: "1",
                            detail: e
                        }), Object(i.g)({
                            errorType: "SerializeMutationError",
                            error: t
                        })
                    },
                    COMMIT_MUTATION: function(e) {
                        i.a.monitor(33659447), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "mutation",
                            actionValue: "commitMutation",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    CACHE_DATA_FLOW_COMMIT_MUTATION: function(e) {
                        i.a.monitor(33637651), Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "mutation",
                            actionValue: "commitMutation",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    PAGE_LOAD: function(e) {
                        i.a.monitor(33631971), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "init",
                            actionValue: "pageLoaded",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    DUPLICATE_SHEET_ID: function(e) {
                        i.a.monitor(33955439), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "init",
                            actionValue: "duplicateSheetId",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    SERIALIZE_MUTATION: function(e, t) {
                        console.log(t), i.a.monitor(33611128), Object(i.g)({
                            errorType: "serializeMutationError",
                            error: t
                        }), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "mutation",
                            actionValue: "serializeMutation",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    GET_COLLAB_MUTATIONS: function(e) {
                        i.a.monitor(33614885), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "mutation",
                            actionValue: "getCollabMutations",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    CREATE_ZIPKETFRAME: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "keyframe",
                            actionValue: "createZipKeyframe",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    APPLY_NEW_CHANGES_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChangesError",
                            detail: e
                        })
                    },
                    LOAD_REQUEST: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "loadRequest",
                            actionValue: "local",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_ERROR: function(e, t) {
                        console.error(t), Object(i.g)({
                            errorType: "loadRequestError",
                            message: "loadRequestError",
                            error: t
                        }), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "local",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_NOT_LOADED: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "local",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_LEVEL_INFO: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "applyBehavior",
                            actionValue: "local",
                            ver5Value: "3",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_LEVEL_IMPORTANT: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "4";
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "local",
                            ver5Value: t,
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_LEVEL_IMPORTANT_MONITOR: function() {
                        i.a.monitor(33686607)
                    },
                    REQUEST_SIZE_OVER_LIMIT: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "applyLocal",
                            actionValue: "requestSizeOverLimit",
                            detail: e
                        })
                    },
                    FOLLOW_REQUEST_MUTATIONS: function(e) {
                        i.a.monitor(33641617), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "mutation",
                            actionValue: "followRequestMutations",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    SERIALIZE_MUTATION_CATCH_ERROR: function(e, t) {
                        console.log(t), i.a.monitor(E.SERIALIZE_MUTATION_ERROR), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.SERIALIZE_MUTATION,
                            obj3Value: T(h.MUTATION, e),
                            ver5Value: v.SERIALIZE_MUTATION_ERROR,
                            detail: [e]
                        }), Object(i.g)({
                            errorType: g.SERIALIZE_MUTATION_ERROR,
                            message: e,
                            error: t
                        })
                    },
                    DESERIALIZE_MUTATION_FAIL: function(e) {
                        i.a.monitor(E.DESERIALIZE_MUTATION_FAIL), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.DESERIALIZE_MUTATION_FAIL,
                            ver5Value: v.DESERIALIZE_MUTATION_FAIL,
                            detail: e
                        })
                    },
                    DESERIALIZE_MUTATION_FAIL_OLD: function(e) {
                        i.a.monitor(E.DESERIALIZE_MUTATION_FAIL_OLD), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.DESERIALIZE_MUTATION_FAIL,
                            ver5Value: v.DESERIALIZE_MUTATION_FAIL_OLD,
                            detail: e
                        })
                    },
                    DESERIALIZE_MUTATION_CATCH_ERROR: function(e, t) {
                        console.error("Deserialize mutation error: ", data, t), i.a.monitor(E.DESERIALIZE_MUTATION_ERROR), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.DESERIALIZE_MUTATION_ERROR,
                            ver5Value: v.DESERIALIZE_MUTATION_ERROR,
                            detail: e
                        }), Object(i.g)({
                            errorType: g.DESERIALIZE_MUTATION_ERROR,
                            message: e,
                            error: t
                        })
                    },
                    DESERIALIZE_MUTATION_CATCH_ERROR_OLD: function(e, t) {
                        i.a.monitor(E.DESERIALIZE_MUTATION_ERROR_OLD), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.DESERIALIZE_MUTATION_ERROR,
                            ver5Value: v.DESERIALIZE_MUTATION_ERROR_OLD,
                            detail: e
                        }), Object(i.g)({
                            errorType: g.DESERIALIZE_MUTATION_ERROR_OLD,
                            message: e,
                            error: t
                        })
                    },
                    GENERATE_MUTATION_1: function() {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.GENERATE_MUTATION,
                            ver5Value: v.GENERATE_MUTATION_PASTE_INSERT_ERROR_NO_OPTION,
                            detail: ["no opt"]
                        })
                    },
                    GENERATE_MUTATION_2: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.GENERATE_MUTATION,
                            ver5Value: v.GENERATE_MUTATION_PASTE_INSERT_ERROR_NO_EXPANSION,
                            detail: e
                        })
                    },
                    GENERATE_MUTATION_3: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: h.MUTATION,
                            actionValue: O.GENERATE_MUTATION,
                            ver5Value: v.GENERATE_MUTATION_PASTE_SETRANGE_ERROR_NO_GRIDRANGE,
                            detail: e
                        })
                    },
                    DO_KEYFRAME_CATCH_ERROR_1: function(e, t) {
                        i.a.monitor(33614378), Object(i.g)({
                            errorType: "doKeyframeErrorVersion3",
                            error: t
                        }), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "doKeyframeError1",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    DO_KEYFRAME_CATCH_ERROR_2: function(e) {
                        i.a.monitor(33614380), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "doKeyframeError2",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    DO_KEYFRAME_CATCH_ERROR_3: function(e) {
                        i.a.monitor(33614379), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "doKeyframeError3",
                            ver5Value: "3",
                            detail: [e, e && e.stack]
                        }), Object(i.g)({
                            errorType: "doKeyframeErrorNoVersion",
                            error: e
                        })
                    },
                    DO_KEYFRAME: function(e) {
                        i.a.monitor(33637702), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "doKeyframe0",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    DO_MUTATIONS: function(e) {
                        i.a.monitor(33614886), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "mutation",
                            actionValue: "doMutations",
                            ver5Value: "1"
                        }), Object(i.g)({
                            errorType: "doMutationsError",
                            message: e
                        })
                    },
                    ZIP_KEYFRAME: function() {
                        i.a.monitor(34364018), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "keyframe",
                            actionValue: "zip",
                            ver5Value: "1"
                        })
                    },
                    ZIP_KEYFRAME_CATCH_ERROR: function(e) {
                        i.a.monitor(34364008), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "keyframe",
                            actionValue: "zip",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    COPY_PASTE: function() {
                        console.log("textarea onPaste"), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "copyPaste",
                            actionValue: "onPaste"
                        })
                    },
                    CHOOSE_FORMAT_ERROR: function(e, t) {
                        console.warn(t), i.a.monitor(3437448), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "numberFormat",
                            actionValue: "chooseFormatError",
                            detail: e
                        })
                    },
                    PARSE_FORMAT_ERROR: function(e, t) {
                        console.warn(t), i.a.monitor(3437447), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "numberFormat",
                            actionValue: "parseFormatError",
                            detail: e
                        })
                    },
                    RETRY_SENDMESSAGE: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "retrySendMessage",
                            detail: e
                        })
                    },
                    MOVE_MESSAGEINFO_COMMITING_QUEUE: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "moveMessageIntoCommitingQueue",
                            detail: e
                        })
                    },
                    RETRY_COMMIT: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "retryCommit",
                            detail: e
                        })
                    },
                    SEND_USERCHANGE: function(e, t, o) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: t,
                            ver5Value: "1",
                            obj3Value: String(o),
                            detail: e
                        })
                    },
                    SEND_USERCHANGE_1: function(e, t, o) {
                        i.a.monitor(33639350), Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: t,
                            ver5Value: "0",
                            obj3Value: String(o),
                            detail: e
                        })
                    },
                    ACCEPT_COMMIT: function(e) {
                        i.a.monitor(33639758), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "acceptCommit",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    HANDLE_COMMIT_ERROR: function(e, t, o) {
                        var n = {
                            101: 33612294,
                            102: 33612295,
                            103: 33612296,
                            104: 33612297,
                            105: 33612298,
                            106: 33612299,
                            10000: 33612314,
                            10001: 33612323,
                            40000: 33612311,
                            40001: 33612312,
                            40002: 33612315,
                            40003: 33612316,
                            40005: 33612317,
                            40006: 33712774,
                            40020: 33612313,
                            40021: 33612318,
                            40022: 33612319,
                            40023: 33612320,
                            40024: 33688491,
                            40025: 33688492,
                            40026: 33688493,
                            40027: 33713210,
                            40028: 33688494,
                            40029: 34872598,
                            40030: 34872599,
                            40034: 34786084,
                            40035: 34642726,
                            40036: 34846274,
                            40037: 34884339,
                            40100: 34872600,
                            41001: 33612321,
                            41002: 33612322,
                            60007: 33612290,
                            60018: 33612308,
                            60019: 33612309,
                            60020: 33612310,
                            60002: 33612280,
                            60003: 33612286,
                            60004: 33612281,
                            60005: 33612282,
                            60008: 33612287,
                            60011: 33612283,
                            60013: 33612284,
                            60014: 33612285,
                            60015: 33612291,
                            60016: 33612288,
                            60017: 33612289,
                            60021: 33631110,
                            60022: 33631111
                        };
                        n[t] ? (i.a.monitor(n[t]), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "handleCommitError",
                            ver5Value: t.toString(),
                            detail: [].concat(_(e), [t.toString(), o])
                        })) : (i.a.monitor(33698546), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "handleCommitError",
                            ver5Value: "unKnownError",
                            detail: [].concat(_(e), [t.toString(), o])
                        }))
                    },
                    HANDLE_TASK_DUPLICATE: function(e) {
                        i.a.monitor(33612330), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "handleTaskDuplicate",
                            detail: e
                        })
                    },
                    TASK_DUPLICATE_VERSION_TOO_LOW: function(e) {
                        i.a.monitor(34884808), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "handleTaskDuplicateVersionTooLow",
                            detail: e
                        })
                    },
                    HANDLE_NEW_CHANGES: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "handleNewChanges",
                            detail: e
                        })
                    },
                    COMMITING_QUEUE_BLOCK: function(e) {
                        i.a.monitor(33714439), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "commitingQueueBlock",
                            detail: e
                        })
                    },
                    APPLY_NEWCHANGES_VERROR: function(e, t) {
                        var o = {
                            collab: "1",
                            missing: "2"
                        };
                        o[t] && Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChangesVError",
                            ver5Value: o[t],
                            detail: e
                        });
                        var n = {
                            collab: 33685595,
                            missing: 33685596
                        };
                        n[t] && i.a.monitor(n[t])
                    },
                    DUPLICATE_MESSAGE: function(e) {
                        i.a.monitor(33629759), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "DuplicateMessage",
                            detail: e
                        })
                    },
                    APPLY_NEWCHANGES_CATCH_ERROR: function(e) {
                        i.a.monitor(33612332), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChanges",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    APPLY_NEWCHANGES: function(e) {
                        i.a.monitor(33638469), Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChanges",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    APPLY_NEWCHANGES_VERROR2: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChangesVError",
                            ver5Value: "4",
                            detail: e
                        }), i.a.monitor(33707992)
                    },
                    APPLY_NEWCHANGES_VERROR5: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChangesVError",
                            ver5Value: "5",
                            detail: e
                        }), i.a.monitor(33707990)
                    },
                    APPLY_NEWCHANGES_VERROR6: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "applyNewChangesVError",
                            ver5Value: "6",
                            detail: e
                        }), i.a.monitor(33707991)
                    },
                    SWITCH_CHANEL_STATUS: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "switchChanelStatus",
                            detail: e
                        })
                    },
                    HANDLE_FETCH_RESULT: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "handleFetchResult",
                            detail: e
                        })
                    },
                    FETCH_USERCHANGES_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "fetchUserChangesError",
                            detail: e
                        }), i.a.monitor(33633746)
                    },
                    FETCH_AND_APPLY_MISSCHANGES: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "fetchAndApplyMisschanges",
                            detail: e
                        })
                    },
                    EMPTY_KEYFRAME_BY_AUTOEXPAND: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "emptyKeyframeByAutoExpand",
                            detail: e
                        })
                    },
                    ADD_USER_CHANGE: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "addUserChange",
                            detail: e
                        })
                    },
                    CLEAR_OFFLINE_DATA_SIZE: function(e, t) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "clearOfflineStoreSize",
                            ver5Value: e + "",
                            detail: t
                        })
                    },
                    UPDATE_BASEVERSION: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "updateBaseVersion",
                            detail: e
                        })
                    },
                    UPDATE_BASEVERSION_ERROR: function(e) {
                        i.a.monitor(34860419), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "updateBaseVersionError",
                            detail: e
                        })
                    },
                    ACCEPT_COMMIT_2: function(e, t) {
                        i.a.monitor(33639756), Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: t,
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    FETCH_USERCHANGE_ARGUMENT: function(e) {
                        i.a.monitor(33612380), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "fetchUserChangesArgument",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    FETCH_USERCHANGES: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "fetchUserChanges",
                            detail: e
                        })
                    },
                    FETCH_USERCHANGES_3: function(e) {
                        i.a.monitor(33612438), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "fetchUserChanges",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    INIT_DATA_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "userchange",
                            actionValue: "initDataError",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    STORE_DATA_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "userchange",
                            actionValue: "storeDataError",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    NOT_SUPPORT_INDEXEDDB: function(e) {
                        i.a.monitor(33639031), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "notSupportIndexedDB",
                            detail: ["indexedDB is no supported."]
                        })
                    },
                    OPEN_INDEXED_DB: function(e) {
                        i.a.monitor(33709943);
                        var t = e.code,
                            o = e.message,
                            n = e.name;
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "openIndexedDB",
                            ver5Value: "2",
                            detail: ["indexedDB open failed.", t, o, n]
                        })
                    },
                    NOT_SUPPORT_INDEXEDDB_2: function(e) {
                        var t = e.code,
                            o = e.message,
                            n = e.name;
                        i.a.monitor(33624010), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "openIndexedDB",
                            ver5Value: "1",
                            detail: ["indexedDB open failed.", t, o, n]
                        })
                    },
                    NOT_SUPPORT_INDEXEDDB_3: function() {
                        i.a.monitor(33639030), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "openIndexedDB",
                            ver5Value: "0",
                            detail: ["indexedDB open success."]
                        })
                    },
                    UPDATE_INDEXED_DB: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "updateIndexedDB",
                            detail: e
                        })
                    },
                    STORE_UNVALIABLE_WHEN_SET: function(e) {
                        i.a.monitor(33624016), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "storeUnvaliableWhenSet",
                            detail: e
                        })
                    },
                    INDEXDB_SET_VALUE: function(e) {
                        i.a.monitor(33624019), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "setValue",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    INDEXDB_SET_VALUE_ONERROR: function(e) {
                        i.a.monitor(33624017), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "setValue",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    CHANGE_DATAKEY: function(e) {
                        i.a.monitor(33692488), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "changeDataKey",
                            detail: e
                        })
                    },
                    STORE_UNVALIABLE_WHEN_UPDATE: function(e) {
                        i.a.monitor(33624030), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "storeUnvaliableWhenUpdate",
                            detail: e
                        })
                    },
                    INDEXEDDB_UPDATE_VALUE: function(e) {
                        i.a.monitor(33648382), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "updateValue",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    INDEXEDDB_UPDATE_VALUE_2: function(e) {
                        i.a.monitor(33624031), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "updateValue",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    INDEXEDDB_UPDATE_VALUE_3: function(e) {
                        i.a.monitor(33624032), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "updateValue",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    INDEXEDDB_UPDATE_VALUE_4: function(e) {
                        i.a.monitor(33624033), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "updateValue",
                            ver5Value: "3",
                            detail: e
                        })
                    },
                    DELETE_DATA_ERROR: function(e) {
                        i.a.monitor(33624034), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "deleteDataError",
                            detail: e
                        })
                    },
                    DELETE_VALUE: function(e) {
                        i.a.monitor(33624036), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "deleteValue",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    DELETE_VALUE_2: function(e) {
                        i.a.monitor(33624035), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "deleteValue",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    CLEAR_DATA_ERROR: function(e) {
                        i.a.monitor(33624037), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "clearDataError",
                            detail: e
                        })
                    },
                    CLEAR_DATA: function(e) {
                        i.a.monitor(33624039), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "clearData",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    CLEAR_DATA_2: function(e) {
                        i.a.monitor(33624038), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "clearData",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    GET_DATA_ERROR: function(e) {
                        i.a.monitor(33624047), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "getDataError",
                            detail: e
                        })
                    },
                    GET_DATA: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "getData",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    GET_DATA_ERROR_2: function(e) {
                        i.a.monitor(33624049), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "getData",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    GET_DATA_SUCC: function(e) {
                        i.a.monitor(33624048), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "indexeddb",
                            actionValue: "getData",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    NETWORK_ERROR: function() {
                        i.a.monitor(33612270), Object(i.g)({
                            errorType: "90sNoSocket"
                        }), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "socket",
                            actionValue: "networkError",
                            ver5Value: "90sNoSocket"
                        })
                    },
                    LONG_TIME_HIDDEN_1: function() {
                        i.a.monitor(34813929), Object(i.g)({
                            errorType: "LONG_TIME_HIDDEN_1"
                        }), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "socket",
                            actionValue: "roomstatechange",
                            ver5Value: "LONG_TIME_HIDDEN_1"
                        })
                    },
                    LONG_TIME_HIDDEN_2: function() {
                        i.a.monitor(34813930), Object(i.g)({
                            errorType: "LONG_TIME_HIDDEN_2"
                        }), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "socket",
                            actionValue: "roomstatechange",
                            ver5Value: "LONG_TIME_HIDDEN_2"
                        })
                    },
                    ACCEPT_MESSAGE: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "socket",
                            actionValue: "message",
                            detail: e
                        })
                    },
                    ROOM_STATE_CHANGE: function(e, t) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "socket",
                            actionValue: "roomstatechange",
                            ver5Value: t.valueOf(),
                            detail: e
                        })
                    },
                    HANDLE_SHUTDOWN: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "socket",
                            actionValue: "handleShutDown",
                            ver5Value: e
                        })
                    },
                    RELOAD_TIP: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "reloadTip",
                            ver5Value: e,
                            detail: [e]
                        })
                    },
                    RELOAD_TIP_DEBUG: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "messageCenter",
                            actionValue: "reloadTip",
                            ver5Value: e,
                            detail: [e]
                        })
                    },
                    SWITCH_SHEET_IN_PREVIEW: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "sheetbar",
                            actionValue: "switchSheetInPreview",
                            detail: e
                        })
                    },
                    PREVIEW_SERVER_SHEET_DATA: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "sheetbar",
                            actionValue: "previewServerSheetData",
                            detail: e
                        })
                    },
                    PREVIEW_SERVER_SHEET_DATA_ON_RESPONSE: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "sheetbar",
                            actionValue: "previewServerSheetDataOnResponse",
                            detail: e
                        })
                    },
                    SWITCH_SHEET_ON_SUCCESS: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "sheetbar",
                            actionValue: "switchSheetOnSuccess",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    SWITCH_SHEET_ON_FAIL: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "sheetbar",
                            actionValue: "switchSheetOnFail",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    DUPLICATE_SHEET_ID_2: function(e) {
                        i.a.monitor(33955440), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "sheetsbar",
                            actionValue: "duplicateSheetId",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    DUPLICATE_SHEET_ID_3: function(e) {
                        i.a.monitor(34098881), Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "sheetsbar",
                            actionValue: "duplicateSheetId",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    FETCH_DATA_ERROR: function(e) {
                        i.a.monitor(33701460), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "fullMember",
                            actionValue: "fetchDataError",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    FETCH_DATA_ERROR_2: function(e, t, o) {
                        var n = {
                            100000: 33711861,
                            100002: 33711862,
                            100003: 33711863,
                            200105: 33711864,
                            200200: 33711865,
                            200011: 33715032
                        };
                        t && n[o] ? i.a.monitor(n[o]) : i.a.monitor(33711866), Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "fullMember",
                            actionValue: "fetchDataError",
                            ver5Value: "2",
                            detail: e
                        })
                    },
                    K2S_CONVERTER: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "fullMember",
                            actionValue: "k2sConverter",
                            detail: e
                        })
                    },
                    INIT_OFFLINE_STORE_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "indexeddb",
                            actionValue: "initOfflineStore",
                            ver5Value: "1",
                            detail: e
                        })
                    },
                    GET_OFFLINE_DATA: function(e) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "getOfflineData",
                            ver5Value: "OfflinData",
                            detail: e
                        })
                    },
                    CHANGEDATAKEY_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "changeDataKeyCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782646)
                    },
                    SETDATA_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "setDataCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782647)
                    },
                    UPDATEDATA_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "updateDataCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782648)
                    },
                    DELETEDATA_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "deleteDataCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782654)
                    },
                    CLEARDATA_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "clearDataCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782655)
                    },
                    GETDATA_CATCH_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "indexeddb",
                            actionValue: "getDataCatchError",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33782678)
                    },
                    SWITCH_SHEET_SERVER_FAIL: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "switchSheet",
                            actionValue: "serverFail",
                            detail: e
                        }), i.a.monitor(33701441)
                    },
                    SWITCH_SHEET_FRONT_FAIL: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "switchSheet",
                            actionValue: "frontFail",
                            detail: e
                        }), i.a.monitor(33701442)
                    },
                    PARSE_KEYFRAME_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "parse",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33639871)
                    },
                    UNZIP_KEYFRAME_ERROR: function(e, t) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "unzip",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33639872), Object(i.g)({
                            errorType: "keyframeUnzipError",
                            error: t
                        })
                    },
                    PARSE_KEYFRAME_ERROR_2: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "parse",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33639871)
                    },
                    UNZIP_KEYFRAME: function(e, t) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "keyframe",
                            actionValue: "unzip",
                            ver5Value: "1",
                            detail: e
                        }), i.a.monitor(33639872), Object(i.g)({
                            errorType: "keyframeUnzipError",
                            error: t
                        })
                    },
                    MESSAGECENTER_DATA_ERROR_TIP: function(e, t) {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "dataErrorTip",
                            ver5Value: t,
                            detail: e
                        })
                    },
                    NET_OFFLINE_ERROR_TIP: function() {
                        Object(i.d)({
                            level: i.b.INFO,
                            moduleValue: "messageCenter",
                            actionValue: "netOfflineErrorTip"
                        }), i.a.monitor(33697418)
                    },
                    MESSAGECENTER_DATA_ERROR_TIP_IMPORTANT: function(e) {
                        Object(i.d)({
                            level: i.b.IMPORTANT,
                            moduleValue: "messageCenter",
                            actionValue: "dataErrorTip",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_UNDO: function(e) {
                        Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "undo",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_REDO: function(e) {
                        Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "redo",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    APPLY_BEHAVIOR_LOCAL: function(e) {
                        Object(i.c)({
                            level: i.b.IMPORTANT,
                            moduleValue: "applyBehavior",
                            actionValue: "local",
                            ver5Value: "0",
                            detail: e
                        })
                    },
                    CREATE_WORKER_ERROR: function(e) {
                        Object(i.g)({
                            error: e,
                            errorType: "web-worker",
                            message: "\u521b\u5efaworker\u5931\u8d25"
                        })
                    },
                    UPDATE_SMART_SELECTION_ERROR: function(e, t) {
                        Object(i.g)({
                            errorType: "UpdateSmartSelectionError",
                            message: e,
                            error: t
                        })
                    },
                    INVERT_MUTATION_ERROR: function(e, t) {
                        Object(i.g)({
                            errorType: "InvertMutationError",
                            message: e,
                            error: t
                        })
                    },
                    FILL_DRAG: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_drag"
                        })
                    },
                    FILL_SERIES: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_series"
                        })
                    },
                    FILL_COPY: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_copy"
                        })
                    },
                    FILL_OPTION: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_option"
                        })
                    },
                    FILL_OPTION_COPY: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_option_copy"
                        })
                    },
                    FILL_OPTION_SERIES: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_option_series"
                        })
                    },
                    FILL_FORMAT: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_format"
                        })
                    },
                    FILL_WITHOUT_FORMAT: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill",
                            action: "fill_without_format"
                        })
                    },
                    MOBILE_FILL_SERIES: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill_mobile",
                            action: "mobile_fill_series"
                        })
                    },
                    MOBILE_FILL_COP: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill_mobile",
                            action: "mobile_fill_copy"
                        })
                    },
                    CLK_FILL_SUCCESS: function() {
                        Object(a.tdw)({
                            module: "doc_excel_editor",
                            opername: "excel_fill_mobile",
                            action: "clk_fill_success"
                        })
                    },
                    LOAD_DATA_SUCC: function(e, t, o) {
                        var a = window,
                            r = a.clientVars,
                            s = a.performance;
                        if (("undefined" === typeof r || !r.isSnapshot) && s && s.timing) {
                            var u = s.timing,
                                c = e.getTime() - u.navigationStart,
                                d = t.getTime() - u.navigationStart,
                                p = {};
                            u.responseStart - u.requestStart > 0 && (p[1] = u.responseStart - u.requestStart), u.responseStart - u.navigationStart > 0 && (p[2] = u.responseStart - u.navigationStart), u.responseEnd - u.navigationStart > 0 && (p[3] = u.responseEnd - u.navigationStart), p[4] = c, p[5] = d;
                            var _ = e.getTime() - u.fetchStart;
                            if (4 === o) return;
                            ! function(e, t) {
                                if ("object" === l(e)) {
                                    for (var o = {
                                            flag1: 21558,
                                            flag2: 1,
                                            flag3: t
                                        }, n = 0, a = Object.keys(e); n < a.length; n++) {
                                        var r = a[n];
                                        o[r] = e[r]
                                    }
                                    var i = Object.assign({
                                        appid: 20201
                                    }, o);
                                    Oe.huatuo(i)
                                }
                            }(p, o);
                            var f = {
                                sheet: {
                                    PC: {
                                        open: [33556929, 33556932, 33556933, 33556934],
                                        blank: [33556931, 33556935, 33556936, 33556937],
                                        template: [33561163, 33561164, 33561165, 33561166],
                                        preview: [33561162, 33561159, 33561160, 33561161]
                                    },
                                    Android: {
                                        open: [33557617, 33557629, 33557630, 33557631],
                                        blank: [33557621, 33557623, 33557624, 33557625],
                                        template: [33561171, 33561172, 33561173, 33561174],
                                        preview: [33561167, 33561168, 33561169, 33561170]
                                    },
                                    IOS: {
                                        open: [33557618, 33557632, 33557633, 33557634],
                                        blank: [33557622, 33557626, 33557627, 33557628],
                                        template: [33561179, 33561180, 33561181, 33561182],
                                        preview: [33561175, 33561176, 33561177, 33561178]
                                    }
                                }
                            };
                            f["sheet-without-ssr-data"] = f.sheet;
                            var m, b, E = "",
                                h = "";
                            m = 0 === window.isSheetHasRightSsrData ? "sheet-without-ssr-data" : "sheet", E = n.a.util.userAgent.isMobile ? n.a.util.userAgent.isAndroid ? "Android" : "IOS" : "PC", r.preview && (h = "preview"), r && !0 === r.newPad && (h = "undefined" !== typeof r.tid && "20001" !== r.tid ? "template" : "blank"), _ < 2e3 ? b = 1 : _ < 3e3 ? b = 2 : _ < 5e3 && (b = 3);
                            var O = m && f[m] && f[m][E];
                            if (O) {
                                var v = [O.open[0]];
                                b && v.push(O.open[b]), h && (v.push(O[h][0]), b && v.push(O[h][b])), i.a.monitor(v)
                            }
                        }
                    },
                    SWITCH_SHEET_SUCC: function(e) {
                        i.a.monitor({
                            success: {
                                PC: 33556930,
                                Android: 33557619,
                                IOS: 33557620
                            },
                            fail: {
                                PC: 33560365,
                                Android: 33560689,
                                IOS: 33560690
                            }
                        } [e][n.a.util.userAgent.isMobile ? n.a.util.userAgent.isAndroid ? "Android" : "IOS" : "PC"])
                    },
                    REPORT_FOR_PLATFORM: function(e) {
                        ! function(e) {
                            var t;
                            e && e.PC && e.Android && e.IOS && (p ? u ? t = "Android" : c && (t = "IOS") : t = "PC", t && Oe.monitor(e[t]))
                        }(e)
                    },
                    REPORT_FILES_TIMES: function() {
                        var e = function() {
                            if (!performance || !performance.getEntries) return null;
                            var e;
                            try {
                                e = performance.getEntries()
                            } catch (o) {
                                return null
                            }
                            var t = [];
                            return e.map(function(e) {
                                e.name && e.duration && (-1 === e.name.indexOf("js/spread-sheet") && -1 === e.name.indexOf("js/bundle-vendors") && -1 === e.name.indexOf("js/bundle-core") && -1 === e.name.indexOf("js/core-sheet") || t.push({
                                    name: e.name,
                                    duration: e.duration
                                }))
                            }), t
                        }();
                        Object(a.tdw)({
                            opername: "excel_performance",
                            module: "files",
                            action: "load_time",
                            obj1: JSON.stringify(e)
                        })
                    },
                    REPORT_FOR_QUICK_LOOK: function(e) {
                        var t;
                        t = "success" === e ? {
                            PC: 33986901,
                            Mobile: 33986902,
                            IOS: 33986903,
                            Android: 33986904,
                            All: 33986900
                        } : {
                            PC: 33987060,
                            Mobile: 33987061,
                            IOS: 33987062,
                            Android: 33987063,
                            All: 33987059
                        };
                        try {
                            var o;
                            n.a.util.userAgent.isMobile ? (o = "Mobile", i.a.monitor(t[o]), n.a.util.userAgent.isAndroid ? o = "Android" : n.a.util.userAgent.isIOS && (o = "IOS")) : o = "PC", i.a.monitor(t[o]), i.a.monitor(t.All), "success" === e ? Object(a.tdw)({
                                opername: "doc_core",
                                module: "visit",
                                action: "quick_look_succ"
                            }) : Object(a.tdw)({
                                opername: "doc_core",
                                module: "visit",
                                action: "quick_look_fail"
                            })
                        } catch (r) {
                            console.error(r)
                        }
                    },
                    SHEET_STATUS_REPORT: function(e) {
                        if (e) {
                            e.getBasicFilter() && Object(a.tdw)({
                                opername: "doc_excel_editor",
                                module: "excel_filter",
                                action: "excel_contain_filter"
                            });
                            var t = e.getMerges(),
                                o = !1,
                                n = [];
                            if (t.forEach(function(e) {
                                    0 === e.startRowIndex && (o = !0), n.push([e.startRowIndex, e.startColIndex])
                                }), o && Object(a.tdw)({
                                    opername: "doc_excel_editor",
                                    module: "excel_merge",
                                    action: "top_row_merge"
                                }), n.length > 0) {
                                var r = 0,
                                    i = 0,
                                    l = 0,
                                    s = 0,
                                    u = 0,
                                    c = 0;
                                n.forEach(function(t) {
                                    var o = t[0],
                                        n = t[1],
                                        a = e.data.rowData[o] && e.data.rowData[o].values[n];
                                    if (a) {
                                        var d = a.getUserEnteredFormat();
                                        if (d) {
                                            var p = d.getHorizontalAlign(),
                                                _ = d.getVerticalAlign();
                                            p && "left" !== p || (r += 1), "center" === p && (i += 1), "right" === p && (l += 1), "top" === _ && (s += 1), _ && "middle" !== _ || (u += 1), "bottom" === _ && (c += 1)
                                        }
                                    }
                                }), Object(a.tdw)({
                                    opername: "doc_excel_editor",
                                    module: "excel_merge",
                                    action: "merge_align",
                                    ver5: "h_align_left:".concat(r, ",h_align_center:").concat(i, ",h_align_right:").concat(l, ",v_align_top:").concat(s, ",v_align_middle:").concat(u, ",v_align_bottom:").concat(c)
                                })
                            }
                            var d = e.getProperties().getGridProperties();
                            if (d) {
                                var p = d.frozenColCount,
                                    _ = d.frozenRowCount;
                                1 === p && Object(a.tdw)({
                                    opername: "doc_excel_editor",
                                    module: "excel_freeze",
                                    action: "include_first_column_freeze"
                                }), 1 === _ && Object(a.tdw)({
                                    opername: "doc_excel_editor",
                                    module: "excel_freeze",
                                    action: "include_first_row_freeze"
                                }), (_ > 1 || p > 1) && Object(a.tdw)({
                                    opername: "doc_excel_editor",
                                    module: "excel_freeze",
                                    action: "include_freeze_range"
                                })
                            }
                        }
                    },
                    REPORT_FOR_QL_PV: function() {
                        var e = i.a.monitor;
                        try {
                            var t, o = {
                                PC: 34024799,
                                Mobile: 34024802,
                                IOS: 34024801,
                                Android: 34024800,
                                All: 34024798
                            };
                            n.a.util.userAgent.isMobile ? (e(o[t = "Mobile"]), n.a.util.userAgent.isAndroid ? t = "Android" : n.a.util.userAgent.isIOS && (t = "IOS")) : t = "PC", e(o[t]), e(o.All);
                            var r = n.a.util.query.getQuery("tdsourcetag");
                            r || (r = localStorage.getItem("tdsourcetag")), r && (n.a.util.cookie.setCookie("adtag", r), localStorage.setItem("tdsourcetag", r)), Object(a.tdw)({
                                opername: "doc_core",
                                module: "visit",
                                action: "detail_page_quicklook",
                                source3: r || ""
                            })
                        } catch (l) {
                            e(3410984)
                        }
                    },
                    REPORT_FOR_PV: function() {
                        var e = i.a.monitor;
                        try {
                            var t, o = {
                                    sheet: {
                                        PC: 3410973,
                                        Mobile: 3410974,
                                        IOS: 3410975,
                                        Android: 3410976,
                                        All: 3410982
                                    },
                                    All: 3410983,
                                    readonly: 34640922,
                                    editable: 34640921
                                },
                                r = o.sheet;
                            n.a.util.userAgent.isMobile ? (e(r[t = "Mobile"]), n.a.util.userAgent.isAndroid ? t = "Android" : n.a.util.userAgent.isIOS && (t = "IOS")) : t = "PC", e(r[t]), e(r.All), e(o.All), window.CoreSheet.sheetConfig.gEditable ? e(o.editable) : e(o.readonly), window.clientVars.preview && Object(a.tdw)({
                                opername: "doc_pcview",
                                module: "open",
                                action: "pre_req"
                            });
                            var l = n.a.util.query.getQuery("tdsourcetag");
                            l || (l = localStorage.getItem("tdsourcetag")), l && (n.a.util.cookie.setCookie("adtag", l), localStorage.setItem("tdsourcetag", l)), Object(a.tdw)({
                                opername: "doc_core",
                                module: "visit",
                                action: "detail_page",
                                source3: l || "",
                                ver10: window.clientVars.preview ? "qqpreview" : ""
                            }, {
                                immediate: !0
                            }), e(33635051), e(33635108)
                        } catch (s) {
                            e(3410984)
                        }
                    },
                    RESET_DEFAULT_TDW_DATA: function() {
                        Object(a.resetDefaultTdwData)()
                    },
                    INVER_MUTATION_ERROR: function(e, t) {
                        Object(i.g)({
                            errorType: "InvertMutationError",
                            message: e,
                            error: t
                        })
                    },
                    PARSE_PUSH_MESSAGE_ERROR: function(e) {
                        Object(i.d)({
                            level: i.b.DEBUG,
                            moduleValue: "socket",
                            actionValue: "parsePushMessageError",
                            ver5Value: "1",
                            detail: e
                        })
                    }
                },
                A = (o("../node_modules/core-js/modules/es.map.js"), o("../node_modules/core-js/modules/es.string.match.js"), o("../node_modules/core-js/modules/es.string.starts-with.js"), o("./src/core/data/index.ts")),
                y = window,
                I = !1;

            function w() {
                if (!I && y.__AlloyData) try {
                    var e = y.__AlloyData.initAlloyData;
                    e && (e({
                        projectID: 1,
                        pageName: "tdoc-excel",
                        secretKey: "c42e0a7431f6c258bc6d7ea5d1d44178e5f18d651b66405843e30a6c2500b34d"
                    }), I = !0)
                } catch (t) {
                    console.log("debug alloyreport for alloydata error")
                }
            }

            function S() {
                var e;
                w(), y.__AlloyData && (e = y.__AlloyData).AlloyDataADT.apply(e, arguments)
            }

            function D(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function V(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function j(e, t, o) {
                return t && V(e.prototype, t), o && V(e, o), e
            }! function(e) {
                e.PC = "PC", e.ANDROID = "Android", e.IOS = "IOS"
            }(f || (f = {})),
            function(e) {
                e.TIM = "TIM", e.QQ = "QQ", e.IPAD = "iPad", e.OTHER = "other"
            }(m || (m = {}));
            var N = n.a.config.report,
                M = N.SPEED_REPORT_POINTS,
                C = N.REG_JS_LOAD_FILE,
                k = N.REG_CSS_LOAD_FILE,
                P = N.JS_LOAD_FILE_MAP,
                x = N.CSS_LOAD_FILE_MAP,
                L = N.SPEED_REPORT_LOG,
                U = N.TDW_REPORT_ACTION,
                F = N.CONFIG,
                H = N.reportSpeedFlag;

            function B() {
                return n.a.util.userAgent.isMobile ? n.a.util.userAgent.isAndroid ? f.ANDROID : f.IOS : f.PC
            }
            var G = function() {
                    var e = m.OTHER;
                    return n.a.util.userAgent.isTim ? e = m.TIM : n.a.util.userAgent.isQQ ? e = m.QQ : n.a.util.userAgent.isPad && (e = m.IPAD), e
                }(),
                K = B(),
                W = {},
                q = !1;
            W.alloyExcelFirstRender = {
                initDefaultReportData: function(e) {
                    if (!q) {
                        q = !0;
                        var t = e.timing.requestStart;
                        if (e.speedReportData.set(M.RUN_STARTER_JS_TIME, e.performanceData._starterRunFinish), e.speedReportData.set(M.DNS, e.timing.domainLookupEnd - e.timing.domainLookupStart), e.speedReportData.set(M.HTML_TTFB, e.timing.responseStart - t), e.speedReportData.set(M.HTML_LOAD, e.timing.responseEnd - e.timing.responseStart), e.speedReportData.set(M.WHITE_SCREEN, e.performanceData.jsStartRun - t), e.speedReportData.set(M.NAVIGATION_TO_FETCH, e.timing.fetchStart - e.timing.navigationStart), e.speedReportData.set(M.FETCH_TO_REQUEST, e.timing.requestStart - e.timing.fetchStart), e.speedReportData.set(M.HTML_TO_REQUEST, n.a.window._loadStartTime - t), e.speedReportData.set(M.CORE_TO_REQUEST, e.performanceData.jsStartRun - t), e.speedReportData.set(M.BOOT_START, e.performanceData.bootStart - t), e.speedReportData.set(M.BOOT_END, e.performanceData.bootEnd - t), e.speedReportData.set(M.HTML_TTFB, e.timing.responseStart - t), e.speedReportData.set(M.SPREAD_TO_REQUEST, e.performanceData.spreadStartRun - t), e.speedReportData.set(M.SPREAD_INIT_START, e.performanceData.spreadInitStart - t), e.speedReportData.set(M.SPREAD_INIT_DATA_START, e.performanceData.spreadInitDataStart - t), e.speedReportData.set(M.SPREAD_INIT_DATA_END, e.performanceData.spreadInitDataEnd - t), e.speedReportData.set(M.SPREAD_INIT_END, e.performanceData.spreadInitEnd - t), e.speedReportData.set(M.DATA_START, e.performanceData.dataStart - t), e.speedReportData.set(M.DATA_END, e.performanceData.dataEnd - t), e.speedReportData.set(M.VIEW_START, e.performanceData.viewStart - t), e.speedReportData.set(M.VIEW_NEW_START, e.performanceData.viewNewStart - t), e.speedReportData.set(M.VIEW_NEW_END, e.performanceData.viewNewEnd - t), e.speedReportData.set(M.VIEW_END, e.performanceData.viewEnd - t), e.speedReportData.set(M.SPREAD_INIT_FINISHED, e.performanceData.spreadInitFinished - t), e.speedReportData.set(M.SYNC_JS_RUN, e.timing.domContentLoadedEventEnd - e.performanceData.jsStartRun), e.speedReportData.set(M.DOM_CONTENT_LOAD, e.timing.domContentLoadedEventEnd - e.timing.navigationStart), e.speedReportData.set(M.DOM_CONTENT_LOAD_WORKER, e.timing.domContentLoadedEventEnd - e.timing.navigationStart), n.a.window.quickLookRenderEnd && n.a.window.quickLookRenderStart) {
                            var o = n.a.window.quickLookRenderEnd - e.timing.requestStart;
                            e.speedReportData.set(M.FIRST_SCREEN, o), e.speedReportData.set(M.QUICKLOOK, o), e.speedReportData.set(M.RENDER_CACHE_IMG, n.a.window.quickLookRenderEnd - n.a.window.quickLookRenderStart), n.a.report.run(F.REPORT_FOR_QUICK_LOOK, "success")
                        } else e.speedReportData.set(M.FIRST_SCREEN, e.performanceData.initAfterCanvasLoaded - e.timing.fetchStart), n.a.report.run(F.REPORT_FOR_QUICK_LOOK, "fail");
                        if (e.speedReportData.set(M.RENDER_OVER, e.performanceData.afterCanvasRenderOver - e.timing.fetchStart), e.speedReportData.set(M.INTERACTABLE, e.performanceData.initAfterCanvasLoaded - e.timing.fetchStart), e.speedReportData.set(M.INTERACTABLE_WORKER, e.performanceData.initAfterCanvasLoaded - e.timing.fetchStart), e.setFirstScreenTime(e.speedReportData.get(M.FIRST_SCREEN) || 0), "preload" === window.loadMode) {
                            window.performance.mark("prealoadInteractable"), window.performance.measure("prealoadInteractableDuration", "userOpenTime", "prealoadInteractable");
                            var a = window.performance.getEntriesByType("measure");
                            a && a.length > 0 && (e.speedReportData.set(M.INTERACTABLE, a[0].duration), e.speedReportData.set(M.INTERACTABLE_WORKER, a[0].duration))
                        }
                        if (performance.getEntries) {
                            for (var r, i, l = performance.getEntriesByType("resource"), s = 0, u = 0, c = 0, d = 0, p = 0, _ = l.length; p < _; p++) "script" === (r = l[p]).initiatorType && (i = r.name.match(C)) && P[i[0]] && (e.speedReportData.set(P[i[0]], Math.round(r.duration)), s = 0 === s ? r.startTime : Math.min(s, r.startTime), u = 0 === u ? r.responseEnd : Math.max(u, r.responseEnd)), "link" === r.initiatorType && (i = r.name.match(k)) && x[i[0]] && (e.speedReportData.set(x[i[0]], Math.round(r.duration)), c = 0 === c ? r.startTime : Math.min(c, r.startTime), d = 0 === d ? r.responseEnd : Math.max(d, r.responseEnd)), "xmlhttprequest" === r.initiatorType && r.name.startsWith("https://docs.qq.com/dop-api/opendoc") && (e.speedReportData.set(M.LOAD_CGI_DATA_SERVER_COST_TIME, r.responseStart - r.requestStart), n.a.window._loadDataTime = r.responseEnd - r.connectStart);
                            e.speedReportData.set(M.TOTAL_JS_LOAD, Math.round(u - s)), e.speedReportData.set(M.TOTAL_CSS_LOAD, Math.round(d - c))
                        }
                        e.speedReportData.set(M.LOAD_CGI_DATA_TIME, n.a.window._loadDataTime), G === m.TIM ? e.speedReportData.set(M.LOAD_CGI_DATA_TIME_TIM, n.a.window._loadDataTime) : G === m.QQ ? e.speedReportData.set(M.LOAD_CGI_DATA_TIME_QQ, n.a.window._loadDataTime) : G === m.IPAD ? e.speedReportData.set(M.LOAD_CGI_DATA_TIME_PAD, n.a.window._loadDataTime) : e.speedReportData.set(M.LOAD_CGI_DATA_TIME_OTHER, n.a.window._loadDataTime), e.speedReportData.set(M.LOAD_CGI_DATA_TIME_MINUS_RUN_STARTER_JS_TIME, n.a.window._loadDataTime - e.performanceData._starterRunFinish)
                    }
                },
                initCgiSpeedTest: function(e) {
                    var t = performance.getEntriesByName("https://docs.qq.com/" + e).shift();
                    if (!t) return !1;
                    var o = {
                        name: e,
                        ttfb: t.responseStart - t.connectStart | 0,
                        ttlb: t.responseEnd - t.connectStart | 0,
                        bodySize: t.decodedBodySize,
                        terminal: G,
                        platform: B(),
                        netWork: n.a.window.navigator.connection.effectiveType,
                        afterOpenDoc: n.a.window.TestCgiSpeed.isAfterOpenDoc()
                    };
                    return Object(a.tdw)({
                        opername: "excel_performance",
                        module: "excel_detail",
                        action: e,
                        ver5: o.ttfb,
                        obj3: JSON.stringify(o)
                    }), !0
                }
            };
            var Q, z, Y, Z = function() {
                    function e() {
                        D(this, e), this.data = new Map, window.__speedReportData = {}
                    }
                    return j(e, [{
                        key: "get",
                        value: function(e) {
                            return this.data.get(e)
                        }
                    }, {
                        key: "getAll",
                        value: function() {
                            return this.data
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            this.data.set(e, t), window.__speedReportData[e] = t
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            this.data.delete(e)
                        }
                    }]), e
                }(),
                J = new(function() {
                    function e() {
                        D(this, e), this.performanceData = window.performanceData || {}, this.speedReportData = new Z, this.sig = "", this.initReportFlag = !1, this.FIRST_SCREEN_TIME = 0, this.init()
                    }
                    return j(e, [{
                        key: "setFirstScreenTime",
                        value: function(e) {
                            this.FIRST_SCREEN_TIME = e
                        }
                    }, {
                        key: "getFirstScreenTime",
                        value: function() {
                            return this.FIRST_SCREEN_TIME
                        }
                    }, {
                        key: "getSig",
                        value: function() {
                            if (this.sig) return this.sig;
                            try {
                                this.sig = n.a.window.clientVars.collab_client_vars.client.sig
                            } catch (e) {}
                            return this.sig
                        }
                    }, {
                        key: "mark",
                        value: function(e, t) {
                            return this.speedReportData.set(e, t)
                        }
                    }, {
                        key: "getSpeedData",
                        value: function(e) {
                            var t = this;
                            if (!Array.isArray(e)) return this.speedReportData.get(e);
                            var o = [];
                            return e.forEach(function(e) {
                                o.push(t.getSpeedData(e))
                            }), o
                        }
                    }, {
                        key: "hasInitReport",
                        value: function() {
                            return this.initReportFlag
                        }
                    }, {
                        key: "getSpeedDataAll",
                        value: function() {
                            return this.speedReportData
                        }
                    }, {
                        key: "initTiming",
                        value: function() {
                            var e = window && (window.performance || window.webkitPerformance || window.msPerformance) || {};
                            this.timing = e.timing
                        }
                    }, {
                        key: "init",
                        value: function() {
                            H && this.initTiming()
                        }
                    }, {
                        key: "startInitReport",
                        value: function() {
                            var e = this,
                                t = {},
                                o = A.a.Utils.sheetStatusUtils.getSheetCellsNum(n.a.window.SpreadsheetApp.spreadsheet.getActiveSheetId());
                            Object(a.tdw)({
                                opername: "quality_doc",
                                module: "excel_detail",
                                action: "open_time_cost",
                                ver5: this.getSpeedData(M.WHITE_SCREEN),
                                ver6: this.getFirstScreenTime(),
                                ver7: this.getSpeedData(M.INTERACTABLE) || 0,
                                ver8: JSON.stringify(o)
                            });
                            var r = this.speedReportData.get(M.FIRST_SCREEN) || 0,
                                i = this.speedReportData.get(M.INTERACTABLE) || 0;
                            if (this.speedReportData.getAll().forEach(function(r, i) {
                                    U[i] && (Object(a.tdw)({
                                        opername: "excel_performance",
                                        module: "start",
                                        action: U[i],
                                        ver5: r,
                                        ver6: e.getSig(),
                                        ver7: e.getFirstScreenTime(),
                                        ver8: JSON.stringify(o)
                                    }), e.speedReportData.delete(i)), t[i] = r, L[i] && n.a.flowlog.info(L[i] + ": " + r)
                                }), this.huatuoReport(t), n.a.util.userAgent.isMiniProgram) {
                                var l = +n.a.util.query.getQuery("miniapp_ts");
                                l && Object(a.tdw)({
                                    opername: "miniapp_performance",
                                    module: "detail",
                                    action: "navagationStart",
                                    ver5: this.timing.navigationStart - l,
                                    ver8: this.timing.navigationStart + "-" + n.a.util.query.getQuery("miniapp_ts")
                                })
                            }
                            n.a.util.timer.wait(5e3).run(function() {
                                console.warn("%c" + L[M.FIRST_SCREEN] + ": " + r, "color: red; font-size: 14px;"), console.warn("%c" + L[M.INTERACTABLE] + ": " + i, "color: red; font-size: 14px;")
                            })
                        }
                    }, {
                        key: "runDefaultReport",
                        value: function() {
                            W.alloyExcelFirstRender.initDefaultReportData(this), this.startInitReport(), this.initReportFlag = !0, n.a.window.TestCgiSpeed && !1 !== n.a.window.TestCgiSpeed.sampleFlag && n.a.window.TestCgiSpeed.urls.forEach(function(e) {
                                !0 !== W.alloyExcelFirstRender.initCgiSpeedTest(e) && n.a.util.timer.wait(3e3).run(function() {
                                    W.alloyExcelFirstRender.initCgiSpeedTest(e)
                                })
                            })
                        }
                    }, {
                        key: "huatuoReport",
                        value: function(e) {
                            var t = {
                                appid: 20533,
                                flag1: 22213,
                                flag2: 1,
                                flag3: 1,
                                platform: K
                            };
                            for (var o in e)
                                if (L[o]) {
                                    var a = L[o] + ": " + e[o];
                                    console.warn("%c" + a, "color: green; font-size: 14px;"), S({
                                        pointid: o,
                                        pointvalue: e[o]
                                    })
                                } e = Object.assign({}, t, {
                                speedTime: e
                            }), n.a.report.huatuo(e, !0)
                        }
                    }, {
                        key: "runReport",
                        value: function(e, t, o, r) {
                            if (!M[e]) throw new Error("TDW_REPORT_ACTION[SPEED_REPORT_POINT] is not existed");
                            W.alloyExcelFirstRender.initDefaultReportData(this);
                            var i = o - t,
                                l = this.getSpeedData(e) || 0;
                            if (this.speedReportData.set(e, l + i), !r) {
                                var s = A.a.Utils.sheetStatusUtils.getSheetCellsNum(n.a.window.SpreadsheetApp.spreadsheet.getActiveSheetId()),
                                    u = this.getSpeedData(e) || 0,
                                    c = {};
                                c[e] = u, this.huatuoReport(c), U[e] && (Object(a.tdw)({
                                    opername: "excel_performance",
                                    module: "start",
                                    action: U[e],
                                    ver5: u,
                                    ver6: this.getSig(),
                                    ver7: this.getFirstScreenTime(),
                                    ver8: JSON.stringify(s)
                                }), this.speedReportData.delete(e)), n.a.flowlog.info(L[e] + ": " + u)
                            }
                        }
                    }, {
                        key: "run",
                        value: function(e) {
                            if (W[e]) {
                                for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                                W[e].apply(this, o)
                            }
                        }
                    }]), e
                }()),
                X = o("../node_modules/@tencent/jank-sdk/lib/index.js"),
                $ = o("../node_modules/@tencent/dui/lib/components/Snackbar/index.js"),
                ee = o.n($);
            ! function(e) {
                e.REPORT = "report", e.MONITOR = "monitor", e.CLOSE = "close"
            }(Q || (Q = {})),
            function(e) {
                e[e.STOP = 0] = "STOP", e[e.WAIT = 1] = "WAIT", e[e.RUN = 2] = "RUN"
            }(z || (z = {})),
            function(e) {
                e.ERROR = "error"
            }(Y || (Y = {}));
            var te = {
                moduleValue: "jank",
                actionValue: "heartbeat"
            };

            function oe(e, t, o, a) {
                var r = {
                    opername: e,
                    module: t,
                    action: o,
                    obj3: a,
                    ver3: A.a.Utils.sheetStatusUtils.getSheetCellsNum(window.SpreadsheetApp.spreadsheet.getActiveSheetId()).isLarge
                };
                n.a.report.tdwSingleReport(r)
            }
            var ne, ae, re = {
                    permission_click: 34206089,
                    share_click: 34206090,
                    smartSplit_calc: 34206079,
                    record_enter: 34206073,
                    search_traverse: 34206078,
                    fullScreen_click: 34206091,
                    sheetbar_addSheet: 34206084,
                    sheetbar_removeSheet: 34206085,
                    keyframeMutation_copySheet: 34206077,
                    sheetbar_switchSheet: 34206074,
                    sheetbar_moveSheet: 34206086,
                    applyMutation_undo: 34206083,
                    applyMutation_redo: 34206082,
                    applyMutation_local_0: 34206032,
                    applyMutation_local_1: 34206033,
                    applyMutation_local_2: 34206034,
                    applyMutation_local_3: 34206035,
                    applyMutation_local_4: 34206036,
                    applyMutation_local_5: 34206037,
                    applyMutation_local_6: 34206038,
                    applyMutation_local_7: 34206039,
                    applyMutation_local_8: 34206040,
                    applyMutation_local_9: 34206041,
                    applyMutation_local_10: 34206042,
                    applyMutation_local_11: 34206043,
                    applyMutation_local_12: 34206044,
                    applyMutation_local_13: 34206045,
                    applyMutation_local_14: 34206046,
                    applyMutation_local_15: 34206047,
                    applyMutation_local_16: 34206048,
                    applyMutation_local_17: 34206049,
                    applyMutation_local_18: 34206050,
                    applyMutation_local_19: 34206051,
                    applyMutation_local_20: 34206052,
                    applyMutation_local_21: 34206053,
                    applyMutation_local_22: 34206054,
                    applyMutation_local_23: 34206055,
                    applyMutation_local_24: 34206056,
                    applyMutation_local_25: 34206057,
                    applyMutation_local_26: 34206058,
                    applyMutation_local_27: 34206059,
                    applyMutation_local_28: 34206060,
                    applyMutation_local_29: 34206061,
                    applyMutation_local_30: 34206062,
                    applyMutation_local_31: 34206063,
                    applyMutation_local_32: 34206064,
                    applyMutation_local_33: 34206065,
                    applyMutation_local_34: 34206066,
                    applyMutation_local_35: 34206067,
                    applyMutation_local_36: 34206068,
                    applyMutation_local_37: 34206069,
                    applyMutation_local_38: 34206070,
                    applyMutation_local_39: 34206071,
                    keyframe_export: 34206072,
                    keyframe_createKeyframe: 34206080,
                    keyframeMutation_switchRecordSheet: 34206075,
                    copy_analysis: 34206076,
                    quickOpen_init: 34206093,
                    quickOpen_snapshot: 34206094,
                    view_collaborator: 34206088,
                    view_scale: 34206087,
                    view_resize: 34206092,
                    unknown_module_unknown_action: 34206106,
                    jank_heartbeat: 34206133,
                    "applyMutation_collab_-1": 34206191,
                    applyMutation_collab_0: 34206151,
                    applyMutation_collab_1: 34206152,
                    applyMutation_collab_2: 34206153,
                    applyMutation_collab_3: 34206154,
                    applyMutation_collab_4: 34206155,
                    applyMutation_collab_5: 34206156,
                    applyMutation_collab_6: 34206157,
                    applyMutation_collab_7: 34206158,
                    applyMutation_collab_8: 34206159,
                    applyMutation_collab_9: 34206160,
                    applyMutation_collab_10: 34206161,
                    applyMutation_collab_11: 34206162,
                    applyMutation_collab_12: 34206163,
                    applyMutation_collab_13: 34206164,
                    applyMutation_collab_14: 34206165,
                    applyMutation_collab_15: 34206166,
                    applyMutation_collab_16: 34206167,
                    applyMutation_collab_17: 34206168,
                    applyMutation_collab_18: 34206169,
                    applyMutation_collab_19: 34206170,
                    applyMutation_collab_20: 34206171,
                    applyMutation_collab_21: 34206172,
                    applyMutation_collab_22: 34206173,
                    applyMutation_collab_23: 34206174,
                    applyMutation_collab_24: 34206175,
                    applyMutation_collab_25: 34206176,
                    applyMutation_collab_26: 34206177,
                    applyMutation_collab_27: 34206178,
                    applyMutation_collab_28: 34206179,
                    applyMutation_collab_29: 34206180,
                    applyMutation_collab_30: 34206181,
                    applyMutation_collab_31: 34206182,
                    applyMutation_collab_32: 34206183,
                    applyMutation_collab_33: 34206184,
                    applyMutation_collab_34: 34206185,
                    applyMutation_collab_35: 34206186,
                    applyMutation_collab_36: 34206187,
                    applyMutation_collab_37: 34206188,
                    applyMutation_collab_38: 34206189,
                    applyMutation_collab_39: 34206190,
                    messageOfflineStore_apply: 34206135,
                    messageOfflineStore_followAndApply: 34206136,
                    messageCenter_fetchAndApplyCollabNewChanges: 34206206,
                    page_refresh: 34206195
                },
                ie = {
                    3: 33580565,
                    4: 33580566,
                    5: 33581294,
                    6: 33581295,
                    7: 33581296,
                    8: 33581297,
                    9: 33581298,
                    10: 33580569
                },
                le = {
                    3: 33580552,
                    4: 33580553,
                    5: 33580554,
                    6: 33580555,
                    7: 33580556,
                    8: 33580557,
                    9: 33580558,
                    10: 33580559
                },
                se = {
                    3: 33580573,
                    4: 33580574,
                    5: 33580575,
                    6: 33580576,
                    7: 33580577,
                    8: 33580578,
                    9: 33580579,
                    10: 33580580
                },
                ue = 34462711,
                ce = 34462712,
                de = 34462713,
                pe = 34462710,
                _e = 34462784;
            ne = n.a.util.userAgent.isIOS ? ie : n.a.util.userAgent.isAndroid ? le : se, ae = n.a.util.userAgent.isMac ? ue : n.a.util.userAgent.isMobile ? ce : n.a.util.userAgent.isPad ? de : n.a.util.userAgent.isPc ? pe : _e;
            var fe = o("./src/external/report/jank/config.json");

            function me(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var be = !1,
                Ee = 10,
                he = function() {
                    function e() {
                        var t = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._stack = [], this._status = Q.CLOSE, this._jankKey = "", this._isJankKeyLocked = !1, this._reportedTimes = 0, this._handleHeart = function(e) {
                            t._stack = [], t._isJankKeyLocked = !1, t.log(te), t._stop === z.WAIT && (t._stop = z.RUN)
                        }, this._handleJank = function(e) {
                            t._reportedTimes++, t._report(e) && e > 6e3 && (n.a.report.monitor(34861173), ee.a.show && ee.a.show({
                                message: "\u4e3a\u4e86\u6709\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u5efa\u8bae\u5173\u95ed\u4e0d\u5e38\u7528\u7684\u8f6f\u4ef6\u6216\u7f51\u9875\u3002",
                                style: {
                                    zIndex: 10003
                                },
                                autoClose: !0,
                                closable: !1,
                                duration: 3e3
                            })), t._stop === z.WAIT && (t._stop = z.RUN), t.closeMonitor(), t._reportedTimes >= 10 && t.startMonitor()
                        }, this._handlePageVisiableChange = function(e) {
                            "hidden" === e ? t.closeMonitor() : t.restartReport()
                        }, this._handleOverTask = function() {
                            var e = t._sdk.traceStack.task;
                            e[0] && e[0].time > 3e3 && (Ee--, oe("excel_jank_trace", "trace", e[0].id, e[0].time), Ee <= 0 && t._sdk.traceStack.removeEventListener("overTask", t._handleOverTask))
                        }, this._sdk = new X.a(fe), this._sdk.heartbeatMonitor.addEventListener("jank", this._handleJank), this._sdk.heartbeatMonitor.addEventListener("heart", this._handleHeart), this._sdk.heartbeatMonitor.addEventListener("pageVisiableChange", this._handlePageVisiableChange), this._sdk.traceStack.addEventListener("overTask", this._handleOverTask)
                    }
                    var t, o, a;
                    return t = e, (o = [{
                        key: "_report",
                        value: function(e) {
                            if (!window.AlloyReport) return !1;
                            if (!i.e) return !1;
                            if (this._handleMonitor(e), Date.now() - this._sdk.pageActiveMonitor.lastActive() > 1e5) return window.AlloyReport.monitor(ae), !0;
                            if (e >= 3e3 && e < 4e3 && n.a.report.monitor(ne[3]), e >= 4e3 && e < 5e3 && n.a.report.monitor(ne[4]), e >= 5e3 && e < 6e3 && n.a.report.monitor(ne[5]), e >= 6e3 && e < 7e3 && n.a.report.monitor(ne[6]), e >= 7e3 && e < 8e3 && n.a.report.monitor(ne[7]), e >= 8e3 && e < 9e3 && n.a.report.monitor(ne[8]), e >= 9e3 && e < 1e4 && n.a.report.monitor(ne[9]), e >= 1e3 && n.a.report.monitor(ne[10]), this._jankKey && re[this._jankKey] ? n.a.report.monitor(re[this._jankKey]) : n.a.report.monitor(34206107), this._stop != z.RUN) return e < 1e4 ? n.a.report.monitor(34026365) : n.a.report.monitor(34026364), !0;
                            if (!window.SpreadsheetApp.sheetStatus.permission.gEditable) return e < 1e4 ? n.a.report.monitor(34026367) : n.a.report.monitor(34026366), !0;
                            if ("page_refresh" === this._jankKey) return !1;
                            if (be) return !0;
                            be = !0;
                            var t = {
                                opername: "excel_crash_4",
                                module: "crash",
                                obj3: e,
                                ver5: this._jankKey
                            };
                            t.action = e > 3e3 && e <= 1e4 ? "crash_default" : "crash_stutters";
                            var o = A.a.Utils.sheetStatusUtils.getSheetCellsNum(window.SpreadsheetApp.spreadsheet.getActiveSheetId());
                            return t.ver3 = JSON.stringify(o), n.a.report.tdwSingleReport(t), n.a.report.monitor(34813221), !0
                        }
                    }, {
                        key: "_handleMonitor",
                        value: function(e) {
                            if (this._status === Q.MONITOR) try {
                                this.log({
                                    moduleValue: "jank",
                                    actionValue: "heartbeat",
                                    level: Y.ERROR
                                });
                                var t, o = this._stack;
                                window.log && window.log.info("\u5361\u987f\u65e5\u5fd7\u5f00\u59cb_V2============");
                                for (var n = 0; n < this._stack.length; n++) {
                                    var a = o[n],
                                        r = o[n + 1];
                                    if (a.jankLogOptions.level === Y.ERROR ? window.log && window.log.error(new Date(a.time) + Object(i.f)(a.jankLogOptions)) : window.log && window.log.info(new Date(a.time) + Object(i.f)(a.jankLogOptions)), n === this._stack.length - 1) break;
                                    r.time - a.time > 3e3 && (t = a)
                                }
                                window.log && window.log.info("\u5361\u987f\u65e5\u5fd7\u7ed3\u675f================="), t || (t = o[o.length - 2]);
                                var l = t && t.jankLogOptions.moduleValue || "unknown_module",
                                    s = t && t.jankLogOptions.actionValue || "unknown_action";
                                this._isJankKeyLocked || (this._jankKey = l + "_" + s), window.log && window.log.info("\u5361\u987f\uff0c", this._jankKey, e), console.log("\u7f57\u76d8\u5361\u987f\u4e0a\u62a5", l, s, e, this._jankKey), oe("excel_jank_type", l, s, e), window.log && window.log.report("jank_V2_" + this._jankKey, {
                                    query: {
                                        sessionId: window.log.var.sessionId
                                    }
                                })
                            } catch (u) {
                                console.error("jank report error", u)
                            }
                        }
                    }, {
                        key: "init",
                        value: function(e) {}
                    }, {
                        key: "log",
                        value: function(e) {
                            if (this._status === Q.MONITOR) {
                                this._stack.length > 500 && this._stack.shift();
                                var t = window.SpreadsheetApp && window.SpreadsheetApp.messageCenter && window.SpreadsheetApp.messageCenter.currentVersion || -1,
                                    o = window.SpreadsheetApp && window.SpreadsheetApp.spreadsheet && window.SpreadsheetApp.spreadsheet.getActiveSheetId() || "unknown";
                                e.baseVersion = t, e.activeSheetId = o, this._stack.push({
                                    jankLogOptions: e,
                                    time: (new Date).getTime()
                                }), this._isJankKeyLocked || (e.lockJankKey ? (this._jankKey = e.moduleValue + "_" + e.actionValue, this._isJankKeyLocked = !0) : this._jankKey = e.moduleValue + "_" + e.actionValue)
                            }
                        }
                    }, {
                        key: "startMonitor",
                        value: function() {
                            this._reportedTimes >= 10 || (this._status = Q.MONITOR, this._stack = [], this._isJankKeyLocked = !1, this.log(te), this._sdk.heartbeatMonitor.start(), this._sdk.pageActiveMonitor.start())
                        }
                    }, {
                        key: "closeMonitor",
                        value: function() {
                            this._sdk.heartbeatMonitor.stop(), this._sdk.pageActiveMonitor.stop(), this._stack = [], this._status = Q.CLOSE, this._isJankKeyLocked = !1
                        }
                    }, {
                        key: "stopReport",
                        value: function() {
                            this._stop = z.STOP
                        }
                    }, {
                        key: "restartReport",
                        value: function() {
                            this._stop = z.WAIT
                        }
                    }]) && me(t.prototype, o), a && me(t, a), e
                }(),
                Oe = t.default = {
                    run: function(e) {
                        if (R[e]) {
                            for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                            R[e].apply(R, o)
                        }
                    },
                    CONFIG: n.a.config.report.CONFIG,
                    speed: J,
                    jank: new he,
                    tdwReport: Object(X.c)(a.tdw, "tdwReport"),
                    tdwSingleReport: Object(X.c)(a.tdwSingle, "tdwSingleReport"),
                    monitor: a.AlloyReport.monitor,
                    huatuo: a.AlloyReport.huatuo,
                    retcode: a.AlloyReport.retcode,
                    reportPerformanceForAlloyData: function() {
                        w(), y.__AlloyData && y.__AlloyData.AlloyDataAPM()
                    },
                    reportPointValueForAlloyData: S
                }
        },
        "./src/external/report/jank/config.json": function(e) {
            e.exports = {
                HeartbeatConfig: {
                    Interval: 1e3,
                    IntervalLimit: 3e3,
                    Panel: !1,
                    TriggerLimit: 10,
                    Record: !1,
                    SaveAllRecord: !1,
                    StopOnPageHidden: !0
                },
                PageActiveConfig: {
                    Limit: 8e4
                }
            }
        }
    }
]);
//# sourceMappingURL=bundle_report_lazy-86eab7ee1b.js.map
//# {"line":33,"column":39}