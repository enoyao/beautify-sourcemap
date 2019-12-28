self.System = self.System || (() => {
    const t = {},
        e = {},
        n = t => t.replace( /************************** 4:27 **************************/ /^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js"),
        o = {
            register(r, i) {
                const s = n(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                    a = {},
                    c = i((t, e) => e ? a[t] = e : Object.assign(a, t), o);
                t[s] = Promise.all(r.map((t, e) => o.import(n(t)).then(c.setters[e]))).then(() => (c.execute(), a)).catch(t => {
                    throw t.message = `evaluating module ${s}: ${t.message}`, t
                }), e[s] && (e[s](t[s]), delete e[s])
            },
            import: n => t[n] || (t[n] = new Promise((t, o) => {
                const r = setTimeout(() => {
                    o(new Error(`could not resolve ${n}`))
                }, 1e4);
                e[n] = e => {
                    clearTimeout(r), t(e)
                }
            }))
        };
    return o
})(), System.register([], (function(t, e) {
    "use strict";
    return {
        execute: function() {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function n(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function o(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (o = function(t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, o)
                    }

                    function o() {
                        return r(t, arguments, s(this).constructor)
                    }
                    return o.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(o, t)
                })(t)
            }

            function r(t, e, n) {
                return (r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (ji) {
                        return !1
                    }
                }() ? Reflect.construct : function(t, e, n) {
                    var o = [null];
                    o.push.apply(o, e);
                    var r = new(Function.bind.apply(t, o));
                    return n && i(r, n.prototype), r
                }).apply(null, arguments)
            }

            function i(t, e) {
                return (i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            t({
                $: function(t, e) {
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:82");
                    const o = {
                        type: (n.method || "GET").toUpperCase(),
                        url: n.action,
                        container: null,
                        target: n
                    };
                    if (Object.assign(o, e), "GET" === o.type) {
                        if (n.querySelector("input[type=file]")) return;
                        if ("string" != typeof o.url) throw new Error("invariant: app/assets/modules/github/pjax.js:97");
                        const t = xr(o.url);
                        t.search += (t.search ? "&" : "") + De(n), o.url = t.toString()
                    } else o.data = new FormData(n);
                    gr(o), t.preventDefault()
                },
                A: ge,
                B: J,
                C: z,
                D: function(t, e) {
                    0 === Object.keys(To.children).length && document.addEventListener("keydown", _o);
                    var n = function(t) {
                        return t.split(",").map((function(t) {
                            return t.split(" ")
                        }))
                    }(e || t.getAttribute("data-hotkey") || "").map((function(e) {
                        return To.insert(e).add(t)
                    }));
                    xo.set(t, n)
                },
                E: function(t) {
                    var e = xo.get(t);
                    if (e && e.length) {
                        var n = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                var a = i.value;
                                a && a.delete(t)
                            }
                        } catch (c) {
                            o = !0, r = c
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                    }
                    0 === Object.keys(To.children).length && document.removeEventListener("keydown", _o)
                },
                G: function(t, e, n) {
                    function o(e) {
                        const {
                            currentTarget: r
                        } = e;
                        r && (r.removeEventListener(t, n), r.removeEventListener("blur", o))
                    }
                    Ne(e, (function(e) {
                        e.addEventListener(t, n), e.addEventListener("blur", o)
                    }))
                },
                H: function() {
                    return Promise.resolve()
                },
                I: u,
                J: function(t, e) {
                    return 1 === t ? e : e.endsWith("y") ? `${e.substring(0,e.length-1)}ies` : `${e}s`
                },
                K: function(t, e, n) {
                    var o = n || HTMLInputElement,
                        r = t.elements.namedItem(e);
                    if (r instanceof o) return r;
                    throw new a("Element not found by name: <".concat(o.name, "> ").concat(e))
                },
                M: De,
                O: Ho,
                P: function(t, e) {
                    if ("boolean" == typeof e) {
                        if (!(t instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                        t.checked = e
                    } else {
                        if ("checkbox" === t.type) throw new TypeError("checkbox can't be set to string value");
                        t.value = e
                    }
                    Se(t, "change", !1)
                },
                Q: async function(t, e, n = !1) {
                    const o = Xo.get(t);
                    o && o.abort();
                    if (Bo("PAGE_STALE_CHECK")) {
                        const o = t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                        !n && o && o === t && (Wo[d(o, "data-url")] = e)
                    }
                    return Ko(t, e)
                },
                R: Io,
                S: Yo,
                U: function(t) {
                    ze.push(t)
                },
                V: async function() {
                    await async function() {
                        const t = document.querySelector("link[rel=sso-session]"),
                            e = document.querySelector("meta[name=sso-expires-around]");
                        if (!(t instanceof HTMLLinkElement)) return !0;
                        if (! function(t) {
                                if (!(t instanceof HTMLMetaElement)) return !0;
                                const e = parseInt(t.content);
                                return (new Date).getTime() / 1e3 > e
                            }(e)) return !0;
                        const n = t.href,
                            o = await at(n, {
                                headers: {
                                    Accept: "application/json"
                                }
                            });
                        return await o.json()
                    }() || (nr || (nr = async function() {
                        const t = l(document, "link[rel=sso-modal]", HTMLLinkElement),
                            e = await Yo({
                                content: lt(document, t.href),
                                dialogClass: "sso-modal"
                            });
                        let n = null;
                        const o = window.external;
                        if (o.ssoComplete = function(t) {
                                t.error ? (n = !1, er(n)) : (n = !0, er(n), function(t) {
                                    const e = document.querySelector("meta[name=sso-expires-around]");
                                    e && e.setAttribute("content", t)
                                }(t.expiresAround), window.focus()), o.ssoComplete = null
                            }, await
                            function(t) {
                                return new Promise(e => {
                                    t.addEventListener("dialog:remove", e, {
                                        once: !0
                                    })
                                })
                            }(e), !n) throw new Error("sso prompt canceled")
                    }().then(or).catch(or)), await nr)
                },
                W: function(t, e, n = {
                    wait: null
                }) {
                    zo.set(t, {
                        keypressed: !1,
                        inputed: !1,
                        timer: void 0,
                        listener: e,
                        wait: null != n.wait ? n.wait : 100
                    }), t.addEventListener("keydown", Zo), t.addEventListener("keyup", Qo), t.addEventListener("input", tr)
                },
                X: function(t, e) {
                    t.removeEventListener("keydown", Zo), t.removeEventListener("keyup", Qo), t.removeEventListener("input", tr);
                    const n = zo.get(t);
                    n && (null != n.timer && n.listener === e && clearTimeout(n.timer), zo.delete(t))
                },
                Z: Oo,
                _: function(t, e) {
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/pjax.js:39");
                    if (0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
                    if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;
                    if (n.href.indexOf("#") > -1 && kr(n) === kr(location)) return;
                    if (t.defaultPrevented) return;
                    const o = {
                        url: n.href,
                        container: null,
                        target: n
                    };
                    Object.assign(o, e), pr(n, "pjax:click", {
                        options: o,
                        relatedEvent: t
                    }) && (gr(o), t.preventDefault(), pr(n, "pjax:clicked", {
                        options: o
                    }))
                },
                a: l,
                a$: vi,
                a0: mr,
                a2: Eo,
                a3: sr,
                a4: ir,
                a5: function() {
                    return fr
                },
                a6: Hr,
                a7: So,
                a8: function(t, e) {
                    return new Promise((function(n, o) {
                        ! function r(i) {
                            at(t, e).then((function(t) {
                                switch (t.status) {
                                    case 200:
                                        n(t);
                                        break;
                                    case 202:
                                        setTimeout(() => r(1.5 * i), i);
                                        break;
                                    default:
                                        o(new nt(t))
                                }
                            }), o)
                        }(1e3)
                    }))
                },
                a9: function(t) {
                    const e = t.split("‍");
                    let n = 0;
                    for (const o of e) {
                        const t = Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length;
                        n += t
                    }
                    return n / e.length
                },
                aA: Bo,
                aB: wi,
                aC: gi,
                aD: je,
                aE: No,
                aF: $o,
                aG: function(t, e) {
                    bi(t), wi(t, e)
                },
                aI: function(t) {
                    const e = t.getAttribute("data-hydro-click-payload") || "",
                        n = t.getAttribute("data-hydro-click-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    Ee({
                        hydroEventPayload: e,
                        hydroEventHmac: n,
                        hydroClientContext: o
                    }, !0)
                },
                aJ: async function(t) {
                    const e = (n = t, "low" === n || "medium" === n || "high" === n || "two_factor" === n ? n : null);
                    var n;
                    if (!e) throw new Error("invariant violation: level");
                    return "true" === await ct(`/sessions/in_sudo?requested_access_level=${e}`, {
                        headers: {
                            accept: "application/json"
                        }
                    }) || async function() {
                        if (Ui) return !1;
                        Ui = !0, Xi = !1;
                        const t = (await async function() {
                            const t = document.body;
                            if (!t) throw new Error("invariant violation: body");
                            const e = l(document, "link[rel=sudo-modal]", HTMLLinkElement),
                                n = document.querySelector(".js-sudo-prompt");
                            if (n instanceof HTMLTemplateElement) return n;
                            if (e) {
                                const n = await lt(document, function(t) {
                                    const e = new URL(t, window.location.origin),
                                        n = new URLSearchParams(e.search.slice(1));
                                    return n.set("webauthn-support", $i()), e.search = n.toString(), e.toString()
                                }(e.href));
                                return t.appendChild(n), l(document, ".js-sudo-prompt", HTMLTemplateElement)
                            }
                            throw new Error("couldn't load sudo prompt")
                        }()).content.cloneNode(!0);
                        if (!(t instanceof DocumentFragment)) throw new Error("invariant violation: content instanceof DocumentFragment");
                        const e = await Yo({
                            content: t
                        });
                        return await new Promise(t => {
                            e.addEventListener("dialog:remove", (function() {
                                Ui = !1, t()
                            }), {
                                once: !0
                            })
                        }), Xi
                    }()
                },
                aK: async function(t, e) {
                    if (Xo.get(t)) return;
                    const n = new XMLHttpRequest,
                        o = d(t, "data-url"),
                        r = t.hasAttribute("data-retain-focus");
                    n.open("GET", o), n.setRequestHeader("Accept", "text/html"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), null != e && n.setRequestHeader("X-Request-Purpose", e);
                    Xo.set(t, n);
                    try {
                        const e = await
                        function(t, e) {
                            return new Promise((n, o) => {
                                t.onload = () => {
                                    200 === t.status ? n(t.responseText) : o(new Error(`XMLHttpRequest ${t.statusText}`))
                                }, t.onerror = o, t.send(e || null)
                            })
                        }(n);
                        if (No(t, r)) throw new Error("element had interactions");
                        return Bo("PAGE_STALE_CHECK") && (Wo[o] = e), Ko(t, e, r)
                    } catch (i) {
                        "XMLHttpRequest abort" !== i.message && console.warn("Failed to update content", t, i)
                    } finally {
                        Xo.delete(t)
                    }
                },
                aL: ei,
                aM: function() {
                    const t = Ie[Be() - 1];
                    if (t) return t.url
                },
                aN: function() {
                    const t = Ie[Be() + 1];
                    if (t) return t.url
                },
                aO: function(t, e) {
                    const n = t.closest("[data-pjax-container]");
                    if (!n) throw new Error(`no pjax container for ${function(t){const e=[];let n=t;for(;n&&(e.push(ar(n)),!(n instanceof window.Window))&&9!==n.nodeType&&!n.id;){if(n.parentNode instanceof Document){e.push("#document");break}if(!(n.parentNode instanceof HTMLElement))break;n=n.parentNode}return e.reverse().join(" > ")}(t)}`);
                    const o = Lr(n),
                        r = xr(t.href);
                    return r.search += `${r.search?"&":""}_pjax=${encodeURIComponent(o)}`, at(r.href, {
                        headers: Object.assign({
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": o
                        }, e && e.headers)
                    })
                },
                aP: function(t, e) {
                    cr.set(t, e), n = e, n.catch(() => {});
                    var n
                },
                aQ: Xe,
                aR: function(t) {
                    return Wi.get(t)
                },
                aS: rr,
                aT: function(t) {
                    const e = t.getAttribute("data-details-container") || ".js-details-container",
                        n = c(t, e).classList;
                    return n.contains("Details--on") || n.contains("open")
                },
                aU: $i,
                aV: async function() {
                    return window.PublicKeyCredential && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable() ? "supported" : "unsupported"
                },
                aW: Bi,
                aX: async function(t) {
                    const e = Oi(ji, Vi, t),
                        n = await navigator.credentials.get(e);
                    return Oi(Di, Fi, n)
                },
                a_: function(t, e, n) {
                    let o = t.value.substring(0, t.selectionEnd || 0),
                        r = t.value.substring(t.selectionEnd || 0);
                    o = o.replace(e, n), r = r.replace(e, n), t.value = o + r, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    }))
                },
                aa: Uo,
                ab: Q,
                ac: function(t) {
                    return at(t.action, {
                        method: t.method,
                        body: new FormData(t)
                    })
                },
                ad: function(t, e) {
                    for (const n in e) {
                        const o = e[n],
                            r = t.elements.namedItem(n);
                        r instanceof HTMLInputElement ? r.value = o : r instanceof HTMLTextAreaElement && (r.value = o)
                    }
                },
                ae: Ir,
                af: Yr,
                ag: Ve,
                ah: zr,
                ai: function(t) {
                    const e = rr(t);
                    e && Yr(e)
                },
                aj: function(t, e) {
                    window.ga("provide", t, e)
                },
                ak: function(t) {
                    window.ga("set", {
                        location: t
                    })
                },
                al: function(t) {
                    window.ga("set", {
                        title: t
                    })
                },
                am: function(t, e) {
                    window.ga("set", t, e)
                },
                an: function(t, e = {
                    page: ""
                }) {
                    e.page = t || "", window.ga("send", "pageview", e)
                },
                ao: function(t, e, n = {}) {
                    window.ga("create", t, e, n), window.ga("set", "transport", "sendBeacon" in window.navigator ? "beacon" : "xhr")
                },
                ap: function(t, e = {}) {
                    window.ga(() => {
                        window.ga("require", t, e)
                    })
                },
                aq: function(t) {
                    void 0 === t.interactive && (t.interactive = !0);
                    window.ga("send", "event", t.category, t.action, t.label, t.value, {
                        nonInteraction: !t.interactive
                    })
                },
                as: ti,
                at: function(t) {
                    let e = t;
                    "string" == typeof e && (e = e.replace(/,/g, ""));
                    return parseFloat(e)
                },
                au: function(t) {
                    return `${t}`.replace(/(^|[^\w.])(\d{4,})/g, (t, e, n) => e + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,"))
                },
                av: function(t, e) {
                    const n = 1 === t ? "data-singular-string" : "data-plural-string",
                        o = e.getAttribute(n);
                    if (null == o) return;
                    e.textContent = o
                },
                aw: function(t, e) {
                    const n = t.selectionEnd || 0,
                        o = t.value.substring(0, n),
                        r = t.value.substring(n),
                        i = "" === t.value || o.match(/\n$/) ? "" : "\n";
                    t.value = o + i + e + r, t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus()
                },
                ax: function(t, e) {
                    const n = new URL(t, window.location.origin),
                        o = e ? Object.assign({}, e) : {},
                        r = n.hash.match(/^#csrf-token=([A-Za-z0-9+/=]+)$/);
                    if (!r) throw new TypeError("Expected csrfRequest(url) to have an associated #csrf-token");
                    n.hash = "";
                    const i = n.toString();
                    o.mode = "same-origin";
                    const s = new Request(i, o);
                    return s.headers.append("Scoped-CSRF-Token", r[1]), s
                },
                az: et,
                b: function(t, e) {
                    t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", Z), t.removeEventListener("compositionend", Z), t.removeEventListener("keydown", G), e.removeEventListener("click", Y)
                },
                b0: Ae,
                b1: _e,
                b2: function(t) {
                    Je.push(t)
                },
                b3: en,
                b5: function(t) {
                    const e = zo.get(t);
                    e && e.listener.call(null, t)
                },
                b6: nn,
                b7: async function(t) {
                    return Wi.get(t) || Ki(await (e = t, n = "codeEditor:ready", new Promise(t => {
                        e.addEventListener(n, t, {
                            once: !0
                        })
                    })));
                    var e, n
                },
                b8: rn,
                b9: function(t) {
                    const e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    }
                },
                ba: function() {
                    return new Promise(window.requestAnimationFrame)
                },
                bc: Gi,
                bd: Co,
                be: async function(t) {
                    const e = Oi(ji, qi, t),
                        n = await navigator.credentials.create(e);
                    return Oi(Di, Ri, n)
                },
                c: function(t, e) {
                    t.addEventListener("compositionstart", Z), t.addEventListener("compositionend", Z), t.addEventListener("keydown", G), e.addEventListener("click", Y)
                },
                d: d,
                e: Ot,
                i: function(t, e = 0, {
                    start: n = !1,
                    middle: o = !1,
                    once: r = !1
                } = {}) {
                    return Q(t, e, {
                        start: n,
                        middle: o,
                        once: r
                    })
                },
                j: async function(t, e) {
                    const n = it(t, e);
                    n.headers.set("Accept", "application/json");
                    const o = await self.fetch(n),
                        r = new nt(o);
                    return rt(o, r), o.json()
                },
                k: Ht,
                l: me,
                m: c,
                n: at,
                o: Ee,
                q: Ce,
                r: function(t) {
                    const e = t.getAttribute("data-hydro-view") || "",
                        n = t.getAttribute("data-hydro-view-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    Ee({
                        hydroEventPayload: e,
                        hydroEventHmac: n,
                        hydroClientContext: o
                    }, !0)
                },
                s: lt,
                t: Ne,
                u: function(t, e) {
                    function n(t) {
                        const {
                            currentTarget: o
                        } = t;
                        o && (o.removeEventListener("input", e), o.removeEventListener("blur", n))
                    }
                    Ne(t, (function(t) {
                        t.addEventListener("input", e), t.addEventListener("blur", n)
                    }))
                },
                v: We,
                w: Ze,
                x: ct,
                y: on,
                z: ve
            });
            var a = function(t) {
                function e(t) {
                    var o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (o = n(this, s(e).call(this, t))).name = "QueryError", o.framesToPop = 1, o
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && i(t, e)
                }(e, t), e
            }(o(Error));

            function c(t, e, n) {
                var o = n || HTMLElement,
                    r = t.closest(e);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(e))
            }

            function l(t, e, n) {
                var o = n || HTMLElement,
                    r = t.querySelector(e);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(e))
            }

            function u(t, e, n) {
                var o = n || HTMLElement,
                    r = [],
                    i = !0,
                    s = !1,
                    a = void 0;
                try {
                    for (var c, l = t.querySelectorAll(e)[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                        var u = c.value;
                        u instanceof o && r.push(u)
                    }
                } catch (d) {
                    s = !0, a = d
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return r
            }

            function d(t, e) {
                var n = t.getAttribute(e);
                if (null != n) return n;
                throw new a("Attribute not found on element: ".concat(e))
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const f = new WeakMap,
                h = t => "function" == typeof t && f.has(t),
                p = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                m = (t, e, n = null) => {
                    for (; e !== n;) {
                        const n = e.nextSibling;
                        t.removeChild(e), e = n
                    }
                },
                g = {},
                v = {},
                w = `{{lit-${String(Math.random()).slice(2)}}}`,
                b = `\x3c!--${w}--\x3e`,
                y = new RegExp(`${w}|${b}`),
                E = "$lit$";
            class T {
                constructor(t, e) {
                    this.parts = [], this.element = e;
                    const n = [],
                        o = [],
                        r = document.createTreeWalker(e.content, 133, null, !1);
                    let i = 0,
                        s = -1,
                        a = 0;
                    const {
                        strings: c,
                        values: {
                            length: l
                        }
                    } = t;
                    for (; a < l;) {
                        const t = r.nextNode();
                        if (null !== t) {
                            if (s++, 1 === t.nodeType) {
                                if (t.hasAttributes()) {
                                    const e = t.attributes,
                                        {
                                            length: n
                                        } = e;
                                    let o = 0;
                                    for (let t = 0; t < n; t++) x(e[t].name, E) && o++;
                                    for (; o-- > 0;) {
                                        const e = c[a],
                                            n = A.exec(e)[2],
                                            o = n.toLowerCase() + E,
                                            r = t.getAttribute(o);
                                        t.removeAttribute(o);
                                        const i = r.split(y);
                                        this.parts.push({
                                            type: "attribute",
                                            index: s,
                                            name: n,
                                            strings: i
                                        }), a += i.length - 1
                                    }
                                }
                                "TEMPLATE" === t.tagName && (o.push(t), r.currentNode = t.content)
                            } else if (3 === t.nodeType) {
                                const e = t.data;
                                if (e.indexOf(w) >= 0) {
                                    const o = t.parentNode,
                                        r = e.split(y),
                                        i = r.length - 1;
                                    for (let e = 0; e < i; e++) {
                                        let n, i = r[e];
                                        if ("" === i) n = L();
                                        else {
                                            const t = A.exec(i);
                                            null !== t && x(t[2], E) && (i = i.slice(0, t.index) + t[1] + t[2].slice(0, -E.length) + t[3]), n = document.createTextNode(i)
                                        }
                                        o.insertBefore(n, t), this.parts.push({
                                            type: "node",
                                            index: ++s
                                        })
                                    }
                                    "" === r[i] ? (o.insertBefore(L(), t), n.push(t)) : t.data = r[i], a += i
                                }
                            } else if (8 === t.nodeType)
                                if (t.data === w) {
                                    const e = t.parentNode;
                                    null !== t.previousSibling && s !== i || (s++, e.insertBefore(L(), t)), i = s, this.parts.push({
                                        type: "node",
                                        index: s
                                    }), null === t.nextSibling ? t.data = "" : (n.push(t), s--), a++
                                } else {
                                    let e = -1;
                                    for (; - 1 !== (e = t.data.indexOf(w, e + 1));) this.parts.push({
                                        type: "node",
                                        index: -1
                                    }), a++
                                }
                        } else r.currentNode = o.pop()
                    }
                    for (const u of n) u.parentNode.removeChild(u)
                }
            }
            const x = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                },
                k = t => -1 !== t.index,
                L = () => document.createComment(""),
                A = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class _ {
                constructor(t, e, n) {
                    this.__parts = [], this.template = t, this.processor = e, this.options = n
                }
                update(t) {
                    let e = 0;
                    for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
                    for (const n of this.__parts) void 0 !== n && n.commit()
                }
                _clone() {
                    const t = p ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = [],
                        n = this.template.parts,
                        o = document.createTreeWalker(t, 133, null, !1);
                    let r, i = 0,
                        s = 0,
                        a = o.nextNode();
                    for (; i < n.length;)
                        if (r = n[i], k(r)) {
                            for (; s < r.index;) s++, "TEMPLATE" === a.nodeName && (e.push(a), o.currentNode = a.content), null === (a = o.nextNode()) && (o.currentNode = e.pop(), a = o.nextNode());
                            if ("node" === r.type) {
                                const t = this.processor.handleTextExpression(this.options);
                                t.insertAfterNode(a.previousSibling), this.__parts.push(t)
                            } else this.__parts.push(...this.processor.handleAttributeExpressions(a, r.name, r.strings, this.options));
                            i++
                        } else this.__parts.push(void 0), i++;
                    return p && (document.adoptNode(t), customElements.upgrade(t)), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const S = ` ${w} `;
            class C {
                constructor(t, e, n, o) {
                    this.strings = t, this.values = e, this.type = n, this.processor = o
                }
                getHTML() {
                    const t = this.strings.length - 1;
                    let e = "",
                        n = !1;
                    for (let o = 0; o < t; o++) {
                        const t = this.strings[o],
                            r = t.lastIndexOf("\x3c!--");
                        n = (r > -1 || n) && -1 === t.indexOf("--\x3e", r + 1);
                        const i = A.exec(t);
                        e += null === i ? t + (n ? S : b) : t.substr(0, i.index) + i[1] + i[2] + E + i[3] + w
                    }
                    return e += this.strings[t], e
                }
                getTemplateElement() {
                    const t = document.createElement("template");
                    return t.innerHTML = this.getHTML(), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const j = t => null === t || !("object" == typeof t || "function" == typeof t),
                D = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
            class M {
                constructor(t, e, n) {
                    this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];
                    for (let o = 0; o < n.length - 1; o++) this.parts[o] = this._createPart()
                }
                _createPart() {
                    return new H(this)
                }
                _getValue() {
                    const t = this.strings,
                        e = t.length - 1;
                    let n = "";
                    for (let o = 0; o < e; o++) {
                        n += t[o];
                        const e = this.parts[o];
                        if (void 0 !== e) {
                            const t = e.value;
                            if (j(t) || !D(t)) n += "string" == typeof t ? t : String(t);
                            else
                                for (const e of t) n += "string" == typeof e ? e : String(e)
                        }
                    }
                    return n += t[e], n
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }
            class H {
                constructor(t) {
                    this.value = void 0, this.committer = t
                }
                setValue(t) {
                    t === g || j(t) && t === this.value || (this.value = t, h(t) || (this.committer.dirty = !0))
                }
                commit() {
                    for (; h(this.value);) {
                        const t = this.value;
                        this.value = g, t(this)
                    }
                    this.value !== g && this.committer.commit()
                }
            }
            class O {
                constructor(t) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = t
                }
                appendInto(t) {
                    this.startNode = t.appendChild(L()), this.endNode = t.appendChild(L())
                }
                insertAfterNode(t) {
                    this.startNode = t, this.endNode = t.nextSibling
                }
                appendIntoPart(t) {
                    t.__insert(this.startNode = L()), t.__insert(this.endNode = L())
                }
                insertAfterPart(t) {
                    t.__insert(this.startNode = L()), this.endNode = t.endNode, t.endNode = this.startNode
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    const t = this.__pendingValue;
                    t !== g && (j(t) ? t !== this.value && this.__commitText(t) : t instanceof C ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : D(t) ? this.__commitIterable(t) : t === v ? (this.value = v, this.clear()) : this.__commitText(t))
                }
                __insert(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode)
                }
                __commitNode(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t)
                }
                __commitText(t) {
                    const e = this.startNode.nextSibling,
                        n = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
                    e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t
                }
                __commitTemplateResult(t) {
                    const e = this.options.templateFactory(t);
                    if (this.value instanceof _ && this.value.template === e) this.value.update(t.values);
                    else {
                        const n = new _(e, t.processor, this.options),
                            o = n._clone();
                        n.update(t.values), this.__commitNode(o), this.value = n
                    }
                }
                __commitIterable(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const e = this.value;
                    let n, o = 0;
                    for (const r of t) n = e[o], void 0 === n && (n = new O(this.options), e.push(n), 0 === o ? n.appendIntoPart(this) : n.insertAfterPart(e[o - 1])), n.setValue(r), n.commit(), o++;
                    o < e.length && (e.length = o, this.clear(n && n.endNode))
                }
                clear(t = this.startNode) {
                    m(this.startNode.parentNode, t.nextSibling, this.endNode)
                }
            }
            class N {
                constructor(t, e, n) {
                    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
                    this.element = t, this.name = e, this.strings = n
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    if (this.__pendingValue === g) return;
                    const t = !!this.__pendingValue;
                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = g
                }
            }
            class I extends M {
                constructor(t, e, n) {
                    super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1]
                }
                _createPart() {
                    return new P(this)
                }
                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }
            class P extends H {}
            let q = !1;
            try {
                const t = {
                    get capture() {
                        return q = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch (zi) {}
            class R {
                constructor(t, e, n) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = t => this.handleEvent(t)
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; h(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = g, t(this)
                    }
                    if (this.__pendingValue === g) return;
                    const t = this.__pendingValue,
                        e = this.value,
                        n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                        o = null != t && (null == e || n);
                    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o && (this.__options = V(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = g
                }
                handleEvent(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                }
            }
            const V = t => t && (q ? {
                capture: t.capture,
                passive: t.passive,
                once: t.once
            } : t.capture);
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const F = new class {
                handleAttributeExpressions(t, e, n, o) {
                    const r = e[0];
                    if ("." === r) {
                        return new I(t, e.slice(1), n).parts
                    }
                    return "@" === r ? [new R(t, e.slice(1), o.eventContext)] : "?" === r ? [new N(t, e.slice(1), n)] : new M(t, e, n).parts
                }
                handleTextExpression(t) {
                    return new O(t)
                }
            };
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            function B(t) {
                let e = $.get(t.type);
                void 0 === e && (e = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, $.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (void 0 !== n) return n;
                const o = t.strings.join(w);
                return n = e.keyString.get(o), void 0 === n && (n = new T(t, t.getTemplateElement()), e.keyString.set(o, n)), e.stringsArray.set(t.strings, n), n
            }
            const $ = new Map,
                U = new WeakMap;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            t("f", (t, e, n) => {
                let o = U.get(e);
                void 0 === o && (m(e, e.firstChild), U.set(e, o = new O(Object.assign({
                    templateFactory: B
                }, n))), o.appendInto(e)), o.setValue(t), o.commit()
            });
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            t("g", (t, ...e) => new C(t, e, "html", F));

            function X(t, e) {
                (function(t, e) {
                    const n = t.scrollTop,
                        o = n + t.clientHeight,
                        r = e.offsetTop,
                        i = r + e.clientHeight;
                    return r >= n && i <= o
                })(t, e) || (t.scrollTop = e.offsetTop)
            }
            let W = !1;
            const K = !!navigator.userAgent.match(/Macintosh/);

            function G(t) {
                if (t.shiftKey || t.metaKey || t.altKey) return;
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                if (W) return;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                if (n) switch (t.key) {
                    case "Enter":
                    case "Tab":
                        (function(t, e) {
                            const n = e.querySelector('[aria-selected="true"]');
                            return !!n && ("true" === n.getAttribute("aria-disabled") || (n.click(), !0))
                        })(0, n) && t.preventDefault();
                        break;
                    case "Escape":
                        J(e, n);
                        break;
                    case "ArrowDown":
                        z(e, n, 1), t.preventDefault();
                        break;
                    case "ArrowUp":
                        z(e, n, -1), t.preventDefault();
                        break;
                    case "n":
                        K && t.ctrlKey && (z(e, n, 1), t.preventDefault());
                        break;
                    case "p":
                        K && t.ctrlKey && (z(e, n, -1), t.preventDefault())
                }
            }

            function Y(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(e)
            }

            function z(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                const o = e.querySelector('[aria-selected="true"]'),
                    r = Array.from(e.querySelectorAll('[role="option"]')),
                    i = r.indexOf(o);
                let s = 1 === n ? 0 : r.length - 1;
                if (o && i >= 0) {
                    const t = i + n;
                    t >= 0 && t < r.length && (s = t)
                }
                const a = r[s];
                if (a)
                    for (const c of r) a === c ? (t.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), X(e, a)) : c.setAttribute("aria-selected", "false")
            }

            function J(t, e) {
                t.removeAttribute("aria-activedescendant");
                for (const n of e.querySelectorAll('[aria-selected="true"]')) n.setAttribute("aria-selected", "false")
            }

            function Z(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                W = "compositionstart" === t.type;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                n && J(e, n)
            }

            function Q(t, e = 0, {
                start: n = !0,
                middle: o = !0,
                once: r = !1
            } = {}) {
                var i, s = 0,
                    a = !1,
                    c = function c(...l) {
                        if (!a) {
                            var u = Date.now() - s;
                            s = Date.now(), n ? (n = !1, t(...l), r && c.cancel()) : (o && u < e || !o) && (clearTimeout(i), i = setTimeout((function() {
                                s = Date.now(), t(...l), r && c.cancel()
                            }), o ? e - u : e))
                        }
                    };
                return c.cancel = function() {
                    clearTimeout(i), a = !0
                }, c
            }
            class tt extends Error {
                constructor(t, e) {
                    super(`${t} for HTTP ${e.status}`), this.response = e
                }
            }

            function et(t, e) {
                const n = t.createElement("template");
                return n.innerHTML = e, t.importNode(n.content, !0)
            }
            class nt extends Error {
                constructor(t) {
                    super(), this.response = t, this.framesToPop = 1
                }
            }
            const ot = window.AbortError || class extends Error {};

            function rt(t, e) {
                if (t.status >= 200 && t.status < 300) return t; {
                    const n = t.statusText ? ` ${t.statusText}` : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
            }

            function it(t, e) {
                const n = e ? Object.assign({}, e) : {};
                n.credentials || (n.credentials = "same-origin");
                const o = new Request(t, n);
                if (o.headers.append("X-Requested-With", "XMLHttpRequest"), /#csrf-token=/.test(o.url)) throw new TypeError("URL with encoded CSRF token was passed to fetch() without using the csrfRequest(url) helper");
                return o
            }
            async function st(t, e) {
                const n = await self.fetch(t);
                if (e && e.aborted) throw new ot("The operation was aborted");
                return n
            }
            async function at(t, e) {
                const n = it(t, e),
                    o = await st(n, e && e.signal);
                return rt(o, new nt(o)), o
            }
            async function ct(t, e) {
                const n = it(t, e),
                    o = await st(n, e && e.signal);
                return rt(o, new nt(o)), o.text()
            }
            async function lt(t, e, n) {
                const o = it(e, n),
                    r = await st(o, n && n.signal);
                return rt(r, new nt(r)),
                    function(t, e) {
                        const n = e.headers.get("content-type") || "";
                        if (!n.startsWith("text/html")) throw new tt(`expected response with text/html, but was ${n}`, e);
                        const o = e.headers.get("x-html-safe");
                        if (!o) throw new tt("missing X-HTML-Safe nonce", e);
                        if (o !== t) throw new tt("response X-HTML-Safe nonce did not match", e)
                    }(function(t) {
                        const e = t.querySelector("meta[name=html-safe-nonce]");
                        if (null == e || !(e instanceof HTMLMetaElement)) throw new Error("could not find html-safe-nonce on document");
                        const n = e.content;
                        if (n) return n;
                        throw new Error("could not find html-safe-nonce on document")
                    }(t), r), et(t, await r.text())
            }

            function ut() {
                if (!(this instanceof ut)) return new ut;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            var dt = window.document.documentElement,
                ft = dt.matches || dt.webkitMatchesSelector || dt.mozMatchesSelector || dt.oMatchesSelector || dt.msMatchesSelector;
            ut.prototype.matchesSelector = function(t, e) {
                return ft.call(t, e)
            }, ut.prototype.querySelectorAll = function(t, e) {
                return e.querySelectorAll(t)
            }, ut.prototype.indexes = [];
            var ht = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            ut.prototype.indexes.push({
                name: "ID",
                selector: function(t) {
                    var e;
                    if (e = t.match(ht)) return e[0].slice(1)
                },
                element: function(t) {
                    if (t.id) return [t.id]
                }
            });
            var pt = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            ut.prototype.indexes.push({
                name: "CLASS",
                selector: function(t) {
                    var e;
                    if (e = t.match(pt)) return e[0].slice(1)
                },
                element: function(t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
                    }
                }
            });
            var mt, gt = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            ut.prototype.indexes.push({
                name: "TAG",
                selector: function(t) {
                    var e;
                    if (e = t.match(gt)) return e[0].toUpperCase()
                },
                element: function(t) {
                    return [t.nodeName.toUpperCase()]
                }
            }), ut.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, mt = "function" == typeof window.Map ? window.Map : function() {
                function t() {
                    this.map = {}
                }
                return t.prototype.get = function(t) {
                    return this.map[t + " "]
                }, t.prototype.set = function(t, e) {
                    this.map[t + " "] = e
                }, t
            }();
            var vt = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function wt(t, e) {
                var n, o, r, i, s, a, c = (t = t.slice(0).concat(t.default)).length,
                    l = e,
                    u = [];
                do {
                    if (vt.exec(""), (r = vt.exec(l)) && (l = r[3], r[2] || !l))
                        for (n = 0; n < c; n++)
                            if (s = (a = t[n]).selector(r[1])) {
                                for (o = u.length, i = !1; o--;)
                                    if (u[o].index === a && u[o].key === s) {
                                        i = !0;
                                        break
                                    } i || u.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                } while (r);
                return u
            }

            function bt(t, e) {
                var n, o, r;
                for (n = 0, o = t.length; n < o; n++)
                    if (r = t[n], e.isPrototypeOf(r)) return r
            }

            function yt(t, e) {
                return t.id - e.id
            }
            ut.prototype.logDefaultIndexUsed = function() {}, ut.prototype.add = function(t, e) {
                var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                    d = this.selectors;
                if ("string" == typeof t) {
                    for (n = {
                            id: this.uid++,
                            selector: t,
                            data: e
                        }, c = wt(this.indexes, t), o = 0; o < c.length; o++) i = (l = c[o]).key, (s = bt(u, r = l.index)) || ((s = Object.create(r)).map = new mt, u.push(s)), r === this.indexes.default && this.logDefaultIndexUsed(n), (a = s.map.get(i)) || (a = [], s.map.set(i, a)), a.push(n);
                    this.size++, d.push(t)
                }
            }, ut.prototype.remove = function(t, e) {
                if ("string" == typeof t) {
                    var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                        d = {},
                        f = 1 === arguments.length;
                    for (n = wt(this.indexes, t), r = 0; r < n.length; r++)
                        for (o = n[r], i = u.length; i--;)
                            if (a = u[i], o.index.isPrototypeOf(a)) {
                                if (c = a.map.get(o.key))
                                    for (s = c.length; s--;)(l = c[s]).selector !== t || !f && l.data !== e || (c.splice(s, 1), d[l.id] = !0);
                                break
                            } this.size -= Object.keys(d).length
                }
            }, ut.prototype.queryAll = function(t) {
                if (!this.selectors.length) return [];
                var e, n, o, r, i, s, a, c, l = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(", "), t);
                for (e = 0, o = d.length; e < o; e++)
                    for (i = d[e], n = 0, r = (s = this.matches(i)).length; n < r; n++) l[(c = s[n]).id] ? a = l[c.id] : (a = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = a, u.push(a)), a.elements.push(i);
                return u.sort(yt)
            }, ut.prototype.matches = function(t) {
                if (!t) return [];
                var e, n, o, r, i, s, a, c, l, u, d, f = this.activeIndexes,
                    h = {},
                    p = [];
                for (e = 0, r = f.length; e < r; e++)
                    if (c = (a = f[e]).element(t))
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = a.map.get(c[n]))
                                for (o = 0, s = l.length; o < s; o++) !h[d = (u = l[o]).id] && this.matchesSelector(t, u.selector) && (h[d] = !0, p.push(u));
                return p.sort(yt)
            };
            var Et = {},
                Tt = {},
                xt = new WeakMap,
                kt = new WeakMap,
                Lt = new WeakMap,
                At = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function _t(t, e, n) {
                var o = t[e];
                return t[e] = function() {
                    return n.apply(t, arguments), o.apply(t, arguments)
                }, t
            }

            function St() {
                xt.set(this, !0)
            }

            function Ct() {
                xt.set(this, !0), kt.set(this, !0)
            }

            function jt() {
                return Lt.get(this) || null
            }

            function Dt(t, e) {
                At && Object.defineProperty(t, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: e || At.get
                })
            }

            function Mt(t) {
                var e = (1 === t.eventPhase ? Tt : Et)[t.type];
                if (e) {
                    var n = function(t, e, n) {
                        var o = [],
                            r = e;
                        do {
                            if (1 !== r.nodeType) break;
                            var i = t.matches(r);
                            if (i.length) {
                                var s = {
                                    node: r,
                                    observers: i
                                };
                                n ? o.unshift(s) : o.push(s)
                            }
                        } while (r = r.parentElement);
                        return o
                    }(e, t.target, 1 === t.eventPhase);
                    if (n.length) {
                        _t(t, "stopPropagation", St), _t(t, "stopImmediatePropagation", Ct), Dt(t, jt);
                        for (var o = 0, r = n.length; o < r && !xt.get(t); o++) {
                            var i = n[o];
                            Lt.set(t, i.node);
                            for (var s = 0, a = i.observers.length; s < a && !kt.get(t); s++) i.observers[s].data.call(i.node, t)
                        }
                        Lt.delete(t), Dt(t)
                    }
                }
            }

            function Ht(t, e, n) {
                var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
                    r = o ? Tt : Et,
                    i = r[t];
                i || (i = new ut, r[t] = i, document.addEventListener(t, Mt, o)), i.add(e, n)
            }

            function Ot(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const Nt = new WeakMap;
            t("h", (t => (...e) => {
                const n = t(...e);
                return f.set(n, !0), n
            })((...t) => e => {
                let n = Nt.get(e);
                void 0 === n && (n = {
                    lastRenderedIndex: 2147483647,
                    values: []
                }, Nt.set(e, n));
                const o = n.values;
                let r = o.length;
                n.values = t;
                for (let i = 0; i < t.length && !(i > n.lastRenderedIndex); i++) {
                    const s = t[i];
                    if (j(s) || "function" != typeof s.then) {
                        e.setValue(s), n.lastRenderedIndex = i;
                        break
                    }
                    i < r && s === o[i] || (n.lastRenderedIndex = 2147483647, r = 0, Promise.resolve(s).then(t => {
                        const o = n.values.indexOf(s);
                        o > -1 && o < n.lastRenderedIndex && (n.lastRenderedIndex = o, e.setValue(t), e.commit())
                    }))
                }
            }));
            var It = null,
                Pt = null,
                qt = [];

            function Rt(t, e) {
                var n = [];

                function o() {
                    var t = n;
                    n = [], e(t)
                }
                return function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    n.push(r), 1 === n.length && Vt(t, o)
                }
            }

            function Vt(t, e) {
                Pt || (Pt = new MutationObserver(Ft)), It || (It = t.createElement("div"), Pt.observe(It, {
                    attributes: !0
                })), qt.push(e), It.setAttribute("data-twiddle", "" + Date.now())
            }

            function Ft() {
                var t = qt;
                qt = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }), 0)
                }
            }
            var Bt = new WeakMap,
                $t = new WeakMap,
                Ut = new WeakMap,
                Xt = new WeakMap;

            function Wt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = o[0],
                        i = o[1],
                        s = o[2];
                    r === Qt ? (Kt(s, i), Gt(s, i)) : r === te ? Yt(s, i) : r === ee && zt(t.observers, i)
                }
            }

            function Kt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Bt.get(e);
                    if (n || (n = [], Bt.set(e, n)), -1 === n.indexOf(t.id)) {
                        var o = void 0;
                        if (t.initialize && (o = t.initialize.call(void 0, e)), o) {
                            var r = $t.get(e);
                            r || (r = {}, $t.set(e, r)), r["" + t.id] = o
                        }
                        n.push(t.id)
                    }
                }
            }

            function Gt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Xt.get(e);
                    if (n || (n = [], Xt.set(e, n)), -1 === n.indexOf(t.id)) {
                        t.elements.push(e);
                        var o = $t.get(e),
                            r = o ? o["" + t.id] : null;
                        if (r && r.add && r.add.call(void 0, e), t.subscribe) {
                            var i = t.subscribe.call(void 0, e);
                            if (i) {
                                var s = Ut.get(e);
                                s || (s = {}, Ut.set(e, s)), s["" + t.id] = i
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function Yt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = Xt.get(e);
                    if (n) {
                        var o = t.elements.indexOf(e);
                        if (-1 !== o && t.elements.splice(o, 1), -1 !== (o = n.indexOf(t.id))) {
                            var r = $t.get(e),
                                i = r ? r["" + t.id] : null;
                            if (i && i.remove && i.remove.call(void 0, e), t.subscribe) {
                                var s = Ut.get(e),
                                    a = s ? s["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(o, 1)
                        }
                        0 === n.length && Xt.delete(e)
                    }
                }
            }

            function zt(t, e) {
                var n = Xt.get(e);
                if (n) {
                    for (var o = n.slice(0), r = 0; r < o.length; r++) {
                        var i = t[o[r]];
                        if (i) {
                            var s = i.elements.indexOf(e); - 1 !== s && i.elements.splice(s, 1);
                            var a = $t.get(e),
                                c = a ? a["" + i.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = Ut.get(e),
                                u = l ? l["" + i.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), i.remove && i.remove.call(void 0, e)
                        }
                    }
                    Xt.delete(e)
                }
            }
            var Jt = null;

            function Zt(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }
            var Qt = 1,
                te = 2,
                ee = 3;

            function ne(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    "childList" === r.type ? (oe(t, e, r.addedNodes), re(t, e, r.removedNodes)) : "attributes" === r.type && ie(t, e, r.target)
                }(function(t) {
                    if (null === Jt) {
                        var e = t.createElement("div"),
                            n = t.createElement("div"),
                            o = t.createElement("div");
                        e.appendChild(n), n.appendChild(o), e.innerHTML = "", Jt = o.parentNode !== n
                    }
                    return Jt
                })(t.ownerDocument) && function(t, e) {
                    for (var n = 0; n < t.observers.length; n++) {
                        var o = t.observers[n];
                        if (o)
                            for (var r = o.elements, i = 0; i < r.length; i++) {
                                var s = r[i];
                                s.parentNode || e.push([ee, s])
                            }
                    }
                }(t, e)
            }

            function oe(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if (Zt(r))
                        for (var i = t.selectorSet.matches(r), s = 0; s < i.length; s++) {
                            var a = i[s].data;
                            e.push([Qt, r, a])
                        }
                    if ("querySelectorAll" in r)
                        for (var c = t.selectorSet.queryAll(r), l = 0; l < c.length; l++)
                            for (var u = c[l], d = u.data, f = u.elements, h = 0; h < f.length; h++) e.push([Qt, f[h], d])
                }
            }

            function re(t, e, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if ("querySelectorAll" in r) {
                        e.push([ee, r]);
                        for (var i = r.querySelectorAll("*"), s = 0; s < i.length; s++) e.push([ee, i[s]])
                    }
                }
            }

            function ie(t, e, n) {
                if (Zt(n))
                    for (var o = t.selectorSet.matches(n), r = 0; r < o.length; r++) {
                        var i = o[r].data;
                        e.push([Qt, n, i])
                    }
                if ("querySelectorAll" in n) {
                    var s = Xt.get(n);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var c = t.observers[s[a]];
                            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([te, n, c]))
                        }
                }
            }
            var se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                ae = 0;

            function ce(t) {
                this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new ut, this.mutationObserver = new MutationObserver(de.bind(this, this)), this._scheduleAddRootNodes = Rt(this.ownerDocument, ue.bind(this, this)), this._handleThrottledChangedTargets = Rt(this.ownerDocument, he.bind(this, this)), this.rootNode.addEventListener("change", fe.bind(this, this), !1),
                    function(t, e) {
                        var n = t.readyState;
                        "interactive" === n || "complete" === n ? Vt(t, e) : t.addEventListener("DOMContentLoaded", Vt(t, e))
                    }(this.ownerDocument, le.bind(this, this))
            }

            function le(t) {
                t.mutationObserver.observe(t.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), t._scheduleAddRootNodes()
            }

            function ue(t) {
                var e = [];
                oe(t, e, [t.rootNode]), Wt(t, e)
            }

            function de(t, e) {
                var n = [];
                ne(t, n, e), Wt(t, n)
            }

            function fe(t, e) {
                t._handleThrottledChangedTargets(e.target)
            }

            function he(t, e) {
                var n = [];
                ! function(t, e, n) {
                    for (var o = 0; o < n.length; o++)
                        for (var r = n[o], i = r.form ? r.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < i.length; s++) ie(t, e, i[s])
                }(t, n, e), Wt(t, n)
            }
            ce.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, ce.prototype.observe = function(t, e) {
                var n = void 0;
                "function" == typeof e ? n = {
                    selector: t,
                    initialize: e
                } : "object" === (void 0 === e ? "undefined" : se(e)) ? (n = e).selector = t : n = t;
                var o = this,
                    r = {
                        id: ae++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            o._abortObserving(r)
                        }
                    };
                return this.selectorSet.add(r.selector, r), this.observers[r.id] = r, this._scheduleAddRootNodes(), r
            }, ce.prototype._abortObserving = function(t) {
                for (var e = t.elements, n = 0; n < e.length; n++) Yt(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, ce.prototype.triggerObservers = function(t) {
                var e = [];
                ! function(t, e, n) {
                    if ("querySelectorAll" in n) {
                        ie(t, e, n);
                        for (var o = n.querySelectorAll("*"), r = 0; r < o.length; r++) ie(t, e, o[r])
                    }
                }(this, e, t), Wt(this, e)
            };
            var pe = void 0;

            function me() {
                var t;
                return (pe || (pe = new ce(window.document)), t = pe).observe.apply(t, arguments)
            }

            function ge(t, e) {
                const n = t.head;
                if (!n) return "";
                for (const o of n.getElementsByTagName("meta"))
                    if (o.name === e) return o.content;
                return ""
            }

            function ve(t) {
                const e = ge(t, "expected-hostname");
                return !!e && e.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
            }
            const we = t("a1", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(t => {
                    document.addEventListener("DOMContentLoaded", () => {
                        t()
                    })
                })),
                be = t("p", "complete" === document.readyState ? Promise.resolve() : new Promise(t => {
                    window.addEventListener("load", t)
                }));
            let ye = [];

            function Ee(t, e = !1) {
                void 0 === t.timestamp && (t.timestamp = (new Date).getTime()), ye.push(t), e ? xe() : async function() {
                    await be, null == Te && (Te = window.requestIdleCallback(xe))
                }()
            }
            let Te = null;

            function xe() {
                if (Te = null, ve(document)) return;
                const t = ge(document, "browser-stats-url");
                if (!t) return;
                const e = JSON.stringify({
                    stats: ye
                });
                navigator.sendBeacon && navigator.sendBeacon(t, e), ye = []
            }
            var ke;
            ke = "function" == typeof FormData && "entries" in FormData.prototype ? function(t) {
                return Array.from(new FormData(t).entries())
            } : function(t) {
                for (var e = [], n = t.elements, o = 0; o < n.length; o++) {
                    var r = n[o],
                        i = r.tagName.toUpperCase();
                    if ("SELECT" === i || "TEXTAREA" === i || "INPUT" === i) {
                        var s = r.type,
                            a = r.name;
                        if (a && !r.disabled && "submit" !== s && "reset" !== s && "button" !== s && ("radio" !== s && "checkbox" !== s || r.checked))
                            if ("SELECT" === i)
                                for (var c = r.getElementsByTagName("option"), l = 0; l < c.length; l++) {
                                    var u = c[l];
                                    u.selected && e.push([a, u.value])
                                } else "file" === s ? (console.warn("form-data-entries could not serialize <input type=file>", r), e.push([a, ""])) : e.push([a, r.value])
                    }
                }
                return e
            };
            var Le = t("ay", ke);

            function Ae(t) {
                const e = t.closest("form");
                if (!(e instanceof HTMLFormElement)) return;
                let n = _e(e);
                if (t.name) {
                    const o = t.matches("input[type=submit]") ? "Submit" : "",
                        r = t.value || o;
                    n || (n = document.createElement("input"), n.type = "hidden", n.classList.add("is-submit-button-value"), e.prepend(n)), n.name = t.name, n.value = r
                } else n && n.remove()
            }

            function _e(t) {
                const e = t.querySelector("input.is-submit-button-value");
                return e instanceof HTMLInputElement ? e : null
            }

            function Se(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function Ce(t, e) {
                e && (! function(t, e) {
                    if (!(t instanceof HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(e instanceof HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== e.type) throw new TypeError("The specified element is not a submit button.");
                    if (!t || t !== e.form) throw new Error("The specified element is not owned by the form element.")
                }(t, e), Ae(e)), Se(t, "submit", !0) && t.submit()
            }

            function je(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }

            function De(t) {
                const e = new URLSearchParams;
                for (const [n, o] of Le(t)) e.append(n, o);
                return e.toString()
            }
            Ht("click", "[data-hydro-click]", (function(t) {
                const e = t.currentTarget;
                Ee({
                    hydroEventPayload: e.getAttribute("data-hydro-click") || "",
                    hydroEventHmac: e.getAttribute("data-hydro-click-hmac") || "",
                    hydroClientContext: e.getAttribute("data-hydro-client-context") || ""
                }, !0)
            }));
            let Me = !1;
            const He = new ut;

            function Oe(t) {
                const e = t.target;
                if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of He.matches(e)) n.data.call(null, e)
            }

            function Ne(t, e) {
                Me || (Me = !0, document.addEventListener("focus", Oe, !0)), He.add(t, e), document.activeElement && document.activeElement.matches(t) && e(document.activeElement)
            }
            const Ie = [];
            let Pe, qe, Re = 0;

            function Ve() {
                return Pe
            }

            function Fe() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (ji) {
                    return 0
                }
            }

            function Be() {
                return Fe() - 1 + Re
            }

            function $e(t) {
                Pe = t;
                const e = location.href;
                Ie[Be()] = {
                    url: e,
                    state: Pe
                }, Ie.length = Fe(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function Ue() {
                return (new Date).getTime()
            }

            function Xe(t, e, n) {
                Re = 0;
                const o = Object.assign({}, {
                    _id: Ue()
                }, t);
                history.pushState(o, e, n), $e(o)
            }

            function We(t, e, n) {
                const o = Object.assign({}, {
                    _id: Ve()._id
                }, t);
                history.replaceState(o, e, n), $e(o)
            }

            function Ke(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            Pe = function() {
                const t = {
                    _id: (new Date).getTime()
                };
                return $e(t), t
            }(), window.addEventListener("popstate", (function(t) {
                const e = t.state;
                e && e._id && (e._id < (Ve()._id || NaN) ? Re-- : Re++, $e(e))
            }), !0), window.addEventListener("hashchange", (function() {
                if (Fe() > Ie.length) {
                    const t = {
                        _id: Ue()
                    };
                    history.replaceState(t, "", location.href), $e(t)
                }
            }), !0);
            class Ge extends Error {
                constructor(t, e) {
                    super(t), this.response = e
                }
            }

            function Ye() {
                let t, e;
                return [new Promise((function(n, o) {
                    t = n, e = o
                })), t, e]
            }
            const ze = [],
                Je = [];

            function Ze(t, e) {
                qe || (qe = new ut, document.addEventListener("submit", Qe)), qe.add(t, e)
            }

            function Qe(t) {
                if (!(t.target instanceof HTMLFormElement)) return;
                const e = t.target,
                    n = qe && qe.matches(e);
                if (!n || 0 === n.length) return;
                const o = function(t) {
                        const e = {
                            method: t.method || "GET",
                            url: t.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === e.method.toUpperCase()) {
                            const n = function(t) {
                                const e = new URLSearchParams;
                                for (const o of Le(t)) {
                                    var n = Ke(o, 2);
                                    const t = n[0],
                                        r = n[1];
                                    e.append(t, r)
                                }
                                return e.toString()
                            }(t);
                            n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                        } else e.body = new FormData(t);
                        return e
                    }(e),
                    r = Ke(Ye(), 3),
                    i = r[0],
                    s = r[1],
                    a = r[2];
                t.preventDefault(), async function(t, e, n, o) {
                    let r = !1;
                    for (const i of t) {
                        const t = Ke(Ye(), 2),
                            s = t[0],
                            a = t[1],
                            c = () => (r = !0, a(), o),
                            l = {
                                text: c,
                                json: () => (n.headers.set("Accept", "application/json"), c()),
                                html: () => (n.headers.set("Accept", "text/html"), c())
                            };
                        await Promise.race([s, i.data.call(null, e, l, n)])
                    }
                    return r
                }(n, e, o, i).then(async t => {
                    if (t) {
                        for (const t of Je) await t(e);
                        (async function(t) {
                            const e = await window.fetch(t.url, {
                                    method: t.method,
                                    body: null !== t.body ? t.body : void 0,
                                    headers: t.headers,
                                    credentials: "same-origin"
                                }),
                                n = {
                                    url: e.url,
                                    status: e.status,
                                    statusText: e.statusText,
                                    headers: e.headers,
                                    text: "",
                                    get json() {
                                        const t = JSON.parse(this.text);
                                        return delete this.json, this.json = t, this.json
                                    },
                                    get html() {
                                        return delete this.html, this.html = function(t, e) {
                                            const n = t.createElement("template");
                                            return n.innerHTML = e, t.importNode(n.content, !0)
                                        }(document, this.text), this.html
                                    }
                                },
                                o = await e.text();
                            if (n.text = o, e.ok) return n;
                            throw new Ge("request failed", n)
                        })(o).then(s, a).catch(() => {}).then(() => {
                            for (const t of ze) t(e)
                        })
                    } else e.submit()
                }, t => {
                    e.submit(), setTimeout(() => {
                        throw t
                    })
                })
            }
            var tn = t("ar", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});

            function en() {
                throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
            }

            function nn(t) {
                return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
            }

            function on(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }

            function rn(t) {
                return t && t.default || t
            }
            t("b4", Object.freeze({
                commonjsGlobal: tn,
                commonjsRequire: en,
                unwrapExports: nn,
                createCommonjsModule: on,
                getCjsExportFromNamespace: rn
            }));
            class sn extends CustomEvent {
                constructor(t, e) {
                    super(t, e), this.relatedTarget = e.relatedTarget
                }
            }
            const an = new WeakMap;

            function cn(t, e) {
                const n = new XMLHttpRequest;
                return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/html; fragment"),
                    function(t, e) {
                        const n = an.get(t);
                        n && n.abort();
                        an.set(t, e);
                        const o = () => an.delete(t),
                            r = function(t) {
                                return new Promise((e, n) => {
                                    t.onload = function() {
                                        t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                                    }, t.onerror = n, t.send()
                                })
                            }(e);
                        return r.then(o, o), r
                    }(t, n)
            }

            function ln(t, e) {
                (function(t, e) {
                    const n = t.scrollTop,
                        o = n + t.clientHeight,
                        r = e.offsetTop,
                        i = r + e.clientHeight;
                    return r >= n && i <= o
                })(t, e) || (t.scrollTop = e.offsetTop)
            }
            let un = !1;
            const dn = !!navigator.userAgent.match(/Macintosh/);

            function fn(t) {
                if (t.shiftKey || t.metaKey || t.altKey) return;
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                if (un) return;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                if (n) switch (t.key) {
                    case "Enter":
                    case "Tab":
                        (function(t, e) {
                            const n = e.querySelector('[aria-selected="true"]');
                            return !!n && ("true" === n.getAttribute("aria-disabled") || (n.click(), !0))
                        })(0, n) && t.preventDefault();
                        break;
                    case "Escape":
                        mn(e, n);
                        break;
                    case "ArrowDown":
                        pn(e, n, 1), t.preventDefault();
                        break;
                    case "ArrowUp":
                        pn(e, n, -1), t.preventDefault();
                        break;
                    case "n":
                        dn && t.ctrlKey && (pn(e, n, 1), t.preventDefault());
                        break;
                    case "p":
                        dn && t.ctrlKey && (pn(e, n, -1), t.preventDefault())
                }
            }

            function hn(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(e)
            }

            function pn(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                const o = e.querySelector('[aria-selected="true"]'),
                    r = Array.from(e.querySelectorAll('[role="option"]')),
                    i = r.indexOf(o);
                let s = 1 === n ? 0 : r.length - 1;
                if (o && i >= 0) {
                    const t = i + n;
                    t >= 0 && t < r.length && (s = t)
                }
                const a = r[s];
                if (a)
                    for (const c of r) a === c ? (t.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), ln(e, a)) : c.setAttribute("aria-selected", "false")
            }

            function mn(t, e) {
                t.removeAttribute("aria-activedescendant");
                for (const n of e.querySelectorAll('[aria-selected="true"]')) n.setAttribute("aria-selected", "false")
            }

            function gn(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement)) return;
                un = "compositionstart" === t.type;
                const n = document.getElementById(e.getAttribute("aria-owns") || "");
                n && mn(e, n)
            }
            class vn {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function(t, e) {
                        let n;
                        return function() {
                            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                            clearTimeout(n), n = setTimeout(() => {
                                clearTimeout(n), t(...r)
                            }, e)
                        }
                    }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }
                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }
                sibling(t) {
                    const e = Array.from(this.results.querySelectorAll('[role="option"]')),
                        n = this.results.querySelector('[aria-selected="true"]'),
                        o = e.indexOf(n),
                        r = t ? e[o + 1] : e[o - 1],
                        i = t ? e[0] : e[e.length - 1];
                    return r || i
                }
                onKeydown(t) {
                    "Escape" === t.key && this.container.open && (this.container.open = !1, t.stopPropagation(), t.preventDefault())
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                }
                onCommit(t) {
                    let {
                        target: e
                    } = t;
                    const n = e;
                    if (!(n instanceof HTMLElement)) return;
                    if (this.container.open = !1, n instanceof HTMLAnchorElement) return;
                    const o = n.getAttribute("data-autocomplete-value") || n.textContent;
                    this.container.value = o
                }
                onResultsMouseDown() {
                    this.interactingWithList = !0
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = "".concat(this.results.id, "-option-").concat(t++)
                }
                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) return void(this.container.open = !1);
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href),
                        o = new URLSearchParams(n.search.slice(1));
                    o.append("q", t), n.search = o.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), cn(this.input, n.toString()).then(t => {
                        this.results.innerHTML = t, this.identifyOptions();
                        const e = !!this.results.querySelector('[role="option"]');
                        this.container.open = e, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }).catch(() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })
                }
                open() {
                    var t, e;
                    this.results.hidden && (t = this.input, e = this.results, t.addEventListener("compositionstart", gn), t.addEventListener("compositionend", gn), t.addEventListener("keydown", fn), e.addEventListener("click", hn), this.results.hidden = !1, this.container.setAttribute("aria-expanded", "true"))
                }
                close() {
                    var t, e;
                    this.results.hidden || (t = this.input, e = this.results, t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", gn), t.removeEventListener("compositionend", gn), t.removeEventListener("keydown", fn), e.removeEventListener("click", hn), this.results.hidden = !0, this.input.removeAttribute("aria-activedescendant"), this.container.setAttribute("aria-expanded", "false"))
                }
            }
            const wn = new WeakMap;
            class AutocompleteElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const t = this.getAttribute("aria-owns");
                    if (!t) return;
                    const e = this.querySelector("input"),
                        n = document.getElementById(t);
                    e instanceof HTMLInputElement && n && (e.setAttribute("aria-owns", t), wn.set(this, new vn(this, e, n)), this.setAttribute("role", "combobox"), this.setAttribute("aria-haspopup", "listbox"), this.setAttribute("aria-expanded", "false"), e.setAttribute("aria-autocomplete", "list"), e.setAttribute("aria-controls", t), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const t = wn.get(this);
                    t && (t.destroy(), wn.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const o = wn.get(this);
                    if (o) switch (t) {
                        case "open":
                            null === n ? o.close() : o.open();
                            break;
                        case "value":
                            null !== n && (o.input.value = n), this.dispatchEvent(new sn("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: o.input
                            }))
                    }
                }
            }
            window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("L", AutocompleteElement);
            const bn = "data-close-dialog",
                yn = `[${bn}]`;

            function En(t) {
                let e = Array.from(t.querySelectorAll("[autofocus]")).filter(xn)[0];
                e || (e = t, t.setAttribute("tabindex", "-1")), e.focus()
            }

            function Tn(t) {
                const e = t.currentTarget;
                e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (_n(e, !1), t.stopPropagation()) : "Tab" === t.key && function(t) {
                    if (!(t.currentTarget instanceof Element)) return;
                    const e = t.currentTarget.querySelector("details-dialog");
                    if (!e) return;
                    t.preventDefault();
                    const n = Array.from(e.querySelectorAll("*")).filter(xn);
                    if (0 === n.length) return;
                    const o = t.shiftKey ? -1 : 1,
                        r = e.contains(document.activeElement) ? document.activeElement : null;
                    let i = -1 === o ? -1 : 0;
                    if (r) {
                        const t = n.indexOf(r); - 1 !== t && (i = t + o)
                    }
                    i < 0 ? i = n.length - 1 : i %= n.length;
                    n[i].focus()
                }(t))
            }

            function xn(t) {
                return t.tabIndex >= 0 && !t.disabled && function(t) {
                    return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                }(t)
            }

            function kn(t) {
                const e = t.querySelector("details-dialog");
                return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function Ln(t) {
                if (!(t.currentTarget instanceof Element)) return;
                const e = t.currentTarget.closest("details[open]");
                e && (kn(e) || (t.preventDefault(), t.stopPropagation()))
            }

            function An(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (n instanceof DetailsDialogElement)
                    if (e.hasAttribute("open")) document.activeElement && Dn.set(n, {
                        details: e,
                        activeElement: document.activeElement
                    }), En(n), e.addEventListener("keydown", Tn);
                    else {
                        for (const e of n.querySelectorAll("form")) e instanceof HTMLFormElement && e.reset();
                        const t = function(t, e) {
                            const n = Dn.get(e);
                            return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                        }(e, n);
                        t && t.focus(), e.removeEventListener("keydown", Tn)
                    }
            }

            function _n(t, e) {
                e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : kn(t) && t.removeAttribute("open"))
            }

            function Sn(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (!(n instanceof DetailsDialogElement)) return;
                const o = n.querySelector("include-fragment:not([src])");
                if (!o) return;
                const r = n.src;
                null !== r && (o.addEventListener("loadend", () => {
                    e.hasAttribute("open") && En(n)
                }), o.setAttribute("src", r))
            }

            function Cn(t, e, n) {
                jn(t), e && t.addEventListener("toggle", Sn, {
                    once: !0
                }), e && n && t.addEventListener("mouseover", Sn, {
                    once: !0
                })
            }

            function jn(t) {
                t.removeEventListener("toggle", Sn), t.removeEventListener("mouseover", Sn)
            }
            const Dn = new WeakMap;
            class DetailsDialogElement extends HTMLElement {
                static get CLOSE_ATTR() {
                    return bn
                }
                static get CLOSE_SELECTOR() {
                    return yn
                }
                constructor() {
                    super(), Dn.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", (function(t) {
                        let e = t.target;
                        if (!(e instanceof Element)) return;
                        const n = e.closest("details");
                        n && e.closest(yn) && _n(n, !1)
                    }))
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = Dn.get(this);
                    if (!t) return;
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", Ln, {
                        capture: !0
                    })), e.addEventListener("toggle", An), t.details = e, Cn(e, this.src, this.preload)
                }
                disconnectedCallback() {
                    const t = Dn.get(this);
                    if (!t) return;
                    const e = t.details;
                    if (!e) return;
                    e.removeEventListener("toggle", An), jn(e);
                    const n = e.querySelector("summary");
                    n && n.removeEventListener("click", Ln, {
                        capture: !0
                    }), t.details = null
                }
                toggle(t) {
                    const e = Dn.get(this);
                    if (!e) return;
                    const n = e.details;
                    n && _n(n, t)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const t = Dn.get(this);
                    if (!t) return;
                    const e = t.details;
                    e && Cn(e, this.src, this.preload)
                }
            }
            t("bb", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));
            class FilterInputElement extends HTMLElement {
                constructor() {
                    super(), this.currentQuery = null, this.filter = null, this.debounceInputChange = function(t) {
                        let e;
                        return function() {
                            clearTimeout(e), e = setTimeout(() => {
                                clearTimeout(e), t()
                            }, 300)
                        }
                    }(() => Mn(this, !0)), this.boundFilterResults = () => {
                        Mn(this, !1)
                    }
                }
                static get observedAttributes() {
                    return ["aria-owns"]
                }
                attributeChangedCallback(t, e) {
                    e && "aria-owns" === t && Mn(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const t = this.input;
                    t && (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }
                reset() {
                    const t = this.input;
                    t && (t.value = "", t.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })))
                }
            }
            async function Mn(t, e = !1) {
                const n = t.input;
                if (!n) return;
                const o = n.value.trim(),
                    r = t.getAttribute("aria-owns");
                if (!r) return;
                const i = document.getElementById(r);
                if (!i) return;
                const s = i.hasAttribute("data-filter-list") ? i : i.querySelector("[data-filter-list]");
                if (!s) return;
                if (t.dispatchEvent(new CustomEvent("filter-input-start", {
                        bubbles: !0
                    })), e && t.currentQuery === o) return;
                t.currentQuery = o;
                const a = t.filter || Hn,
                    c = s.childElementCount;
                let l = 0,
                    u = !1;
                for (const h of Array.from(s.children)) {
                    if (!(h instanceof HTMLElement)) continue;
                    const t = a(h, On(h), o);
                    !0 === t.hideNew && (u = t.hideNew), h.hidden = !t.match, t.match && l++
                }
                const d = i.querySelector("[data-filter-new-item]"),
                    f = !!d && o.length > 0 && !u;
                d instanceof HTMLElement && (d.hidden = !f, f && function(t, e) {
                        const n = t.querySelector("[data-filter-new-item-text]");
                        n && (n.textContent = e);
                        const o = t.querySelector("[data-filter-new-item-value]");
                        (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && (o.value = e)
                    }(d, o)),
                    function(t, e) {
                        const n = t.querySelector("[data-filter-empty-state]");
                        n instanceof HTMLElement && (n.hidden = e)
                    }(i, l > 0 || f), t.dispatchEvent(new CustomEvent("filter-input-updated", {
                        bubbles: !0,
                        detail: {
                            count: l,
                            total: c
                        }
                    }))
            }

            function Hn(t, e, n) {
                return {
                    match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()),
                    hideNew: e === n
                }
            }

            function On(t) {
                return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim()
            }
            t("Y", FilterInputElement), window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement, window.customElements.define("filter-input", FilterInputElement));
            const Nn = new WeakMap;

            function In(t, e) {
                setTimeout((function() {
                    e.dispatchEvent(new Event(t))
                }), 0)
            }

            function Pn(t) {
                return qn(t).then((function(e) {
                    const n = t.parentNode;
                    n && (t.insertAdjacentHTML("afterend", e), n.removeChild(t))
                }), (function() {
                    t.classList.add("is-error")
                }))
            }

            function qn(t) {
                const e = t.src;
                let n = Nn.get(t);
                return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), Nn.set(t, {
                    src: e,
                    data: n
                }), n)
            }
            class IncludeFragmentElement extends HTMLElement {
                constructor() {
                    super()
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t, e.href
                    }
                    return ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get accept() {
                    return this.getAttribute("accept")
                }
                set accept(t) {
                    this.setAttribute("accept", t)
                }
                get data() {
                    return qn(this)
                }
                attributeChangedCallback(t) {
                    "src" === t && this._attached && Pn(this)
                }
                connectedCallback() {
                    this._attached = !0, this.src && Pn(this)
                }
                disconnectedCallback() {
                    this._attached = !1
                }
                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "text/html"
                        }
                    })
                }
                load() {
                    return Promise.resolve().then(() => (In("loadstart", this), this.fetch(this.request()))).then(t => {
                        if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of ".concat(t.status));
                        const e = t.headers.get("Content-Type");
                        if (!(function(t) {
                                return t && !!t.split(",").find(t => t.match(/^\s*\*\/\*/))
                            }(this.accept) || e && e.match(this.accept ? this.accept : /^text\/html/))) throw new Error("Failed to load resource: expected ".concat(this.accept || "text/html", " but was ").concat(e));
                        return t
                    }).then(t => t.text()).then(t => (In("load", this), In("loadend", this), t), t => {
                        throw In("error", this), In("loadend", this), t
                    })
                }
                fetch(t) {
                    return fetch(t)
                }
            }
            t("F", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
            const Rn = new WeakMap;
            class RemoteInputElement extends HTMLElement {
                constructor() {
                    super();
                    const t = Vn.bind(null, this, !0),
                        e = {
                            currentQuery: null,
                            oninput: Fn(t),
                            fetch: t,
                            controller: null
                        };
                    Rn.set(this, e)
                }
                static get observedAttributes() {
                    return ["src"]
                }
                attributeChangedCallback(t, e) {
                    e && "src" === t && Vn(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
                    const e = Rn.get(this);
                    e && (t.addEventListener("focus", e.fetch), t.addEventListener("change", e.fetch), t.addEventListener("input", e.oninput))
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Rn.get(this);
                    e && (t.removeEventListener("focus", e.fetch), t.removeEventListener("change", e.fetch), t.removeEventListener("input", e.oninput))
                }
                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
            }
            async function Vn(t, e) {
                const n = t.input;
                if (!n) return;
                const o = Rn.get(t);
                if (!o) return;
                const r = n.value;
                if (e && o.currentQuery === r) return;
                o.currentQuery = r;
                const i = t.src;
                if (!i) return;
                const s = document.getElementById(t.getAttribute("aria-owns") || "");
                if (!s) return;
                const a = new URL(i, window.location.href),
                    c = new URLSearchParams(a.search);
                let l;
                c.append(t.getAttribute("param") || "q", r), a.search = c.toString(), o.controller ? o.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "")), o.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                };
                let u = "";
                try {
                    l = await async function(t, e, n) {
                        try {
                            const o = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), o
                        } catch (o) {
                            throw "AbortError" !== o.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), o
                        }
                    }(t, a.toString(), {
                        signal: o.controller.signal,
                        credentials: "same-origin",
                        headers: {
                            accept: "text/html; fragment"
                        }
                    }), u = await l.text(), t.removeAttribute("loading"), o.controller = null
                } catch (d) {
                    return void("AbortError" !== d.name && (t.removeAttribute("loading"), o.controller = null))
                }
                l && l.ok ? (s.innerHTML = u, t.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                }))) : t.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                }))
            }

            function Fn(t) {
                let e;
                return function() {
                    clearTimeout(e), e = setTimeout(() => {
                        clearTimeout(e), t()
                    }, 300)
                }
            }
            t("T", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));
            const Bn = new WeakMap;
            let $n = null;

            function Un(t, e) {
                return t.closest("task-lists") === e.closest("task-lists")
            }

            function Xn(t) {
                if (t.currentTarget !== t.target) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".contains-task-list");
                if (!n) return;
                if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", e.textContent.trim()), !e.parentElement) return;
                const o = Array.from(e.parentElement.children),
                    r = o.indexOf(e),
                    i = Bn.get(e);
                i && i.sortStarted(n), $n = {
                    didDrop: !1,
                    dragging: e,
                    dropzone: e,
                    sourceList: n,
                    sourceSibling: o[r + 1] || null,
                    sourceIndex: r
                }
            }

            function Wn(t) {
                if (!$n) return;
                const e = t.currentTarget;
                e instanceof Element && (Un($n.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), $n.dropzone !== e && ($n.dragging.classList.add("is-dragging"), $n.dropzone = e, ! function(t, e) {
                    if (t.parentNode === e.parentNode) {
                        let n = t;
                        for (; n;) {
                            if (n === e) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }($n.dragging, e) ? e.after($n.dragging) : e.before($n.dragging))) : t.stopPropagation())
            }

            function Kn(t) {
                if (!$n) return;
                t.preventDefault(), t.stopPropagation();
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                if ($n.didDrop = !0, !$n.dragging.parentElement) return;
                let n = Array.from($n.dragging.parentElement.children).indexOf($n.dragging);
                const o = e.closest(".contains-task-list");
                if (!o) return;
                if ($n.sourceIndex === n && $n.sourceList === o) return;
                $n.sourceList === o && $n.sourceIndex < n && n++;
                const r = {
                        list: $n.sourceList,
                        index: $n.sourceIndex
                    },
                    i = {
                        list: o,
                        index: n
                    },
                    s = Bn.get($n.dragging);
                s && s.sortFinished({
                    src: r,
                    dst: i
                })
            }

            function Gn() {
                $n && ($n.dragging.classList.remove("is-dragging"), $n.dragging.classList.remove("is-ghost"), $n.didDrop || $n.sourceList.insertBefore($n.dragging, $n.sourceSibling), $n = null)
            }

            function Yn(t) {
                if (!$n) return;
                const e = t.currentTarget;
                e instanceof Element && (Un($n.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
            }
            const zn = new WeakMap;
            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", t => {
                        const e = t.target;
                        e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: no(e),
                                checked: e.checked
                            }
                        }))
                    }), zn.set(this, new MutationObserver(io.bind(null, this)))
                }
                connectedCallback() {
                    const t = zn.get(this);
                    t && t.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), io(this)
                }
                disconnectedCallback() {
                    const t = zn.get(this);
                    t && t.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e !== n) switch (t) {
                        case "disabled":
                            so(this)
                    }
                }
            }
            const Jn = document.createElement("template");
            Jn.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
            const Zn = new WeakMap;

            function Qn(t) {
                if (Zn.get(t)) return;
                Zn.set(t, !0);
                const e = t.closest("task-lists");
                if (!(e instanceof TaskListsElement)) return;
                if (e.querySelectorAll(".task-list-item").length <= 1) return;
                const n = Jn.content.cloneNode(!0),
                    o = n.querySelector(".handle");
                if (t.prepend(n), !o) throw new Error("handle not found");
                o.addEventListener("mouseenter", fo), o.addEventListener("mouseleave", ho),
                    function(t, e, n) {
                        Bn.set(t, {
                            sortStarted: e,
                            sortFinished: n
                        }), t.addEventListener("dragstart", Xn), t.addEventListener("dragenter", Wn), t.addEventListener("dragend", Gn), t.addEventListener("drop", Kn), t.addEventListener("dragover", Yn)
                    }(t, lo, uo), t.addEventListener("mouseenter", to), t.addEventListener("mouseleave", eo)
            }

            function to(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
            }

            function eo(t) {
                const e = t.currentTarget;
                e instanceof Element && e.classList.remove("hovered")
            }

            function no(t) {
                const e = oo(t);
                if (!e) throw new Error(".contains-task-list not found");
                const n = Array.from(e.children).indexOf(t.closest(".task-list-item"));
                return [ao(e), n]
            }

            function oo(t) {
                const e = t.parentElement;
                return e ? e.closest(".contains-task-list") : null
            }

            function ro(t) {
                return oo(t) === function t(e) {
                    const n = oo(e);
                    return n ? t(n) || n : null
                }(t)
            }

            function io(t) {
                const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of e) ro(n) && Qn(n);
                so(t)
            }

            function so(t) {
                for (const e of t.querySelectorAll(".task-list-item")) e.classList.toggle("enabled", !t.disabled);
                for (const e of t.querySelectorAll(".task-list-item-checkbox")) e instanceof HTMLInputElement && (e.disabled = t.disabled)
            }

            function ao(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
            }
            const co = new WeakMap;

            function lo(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                co.set(e, Array.from(e.querySelectorAll("ol, ul")))
            }

            function uo(t) {
                let {
                    src: e,
                    dst: n
                } = t;
                const o = e.list.closest("task-lists");
                if (!o) return;
                const r = co.get(o);
                r && (co.delete(o), o.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(e.list), e.index],
                        dst: [r.indexOf(n.list), n.index]
                    }
                })))
            }

            function fo(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                if (!n) return;
                const o = n.closest("task-lists");
                o instanceof TaskListsElement && o.sortable && !o.disabled && n.setAttribute("draggable", "true")
            }

            function ho(t) {
                if ($n) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }

            function po(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function mo(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function go(t, e, n) {
                return e && mo(t.prototype, e), n && mo(t, n), t
            }

            function vo(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement));
            var wo = function() {
                function t(e) {
                    po(this, t), vo(this, "parent", void 0), vo(this, "children", []), this.parent = e
                }
                return go(t, [{
                    key: "delete",
                    value: function(t) {
                        var e = this.children.indexOf(t);
                        return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), 0 === this.children.length && this.parent.delete(this), !0)
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        return this.children.push(t), this
                    }
                }]), t
            }();

            function bo(t) {
                if (!(t instanceof HTMLElement)) return !1;
                var e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable
            }

            function yo(t) {
                bo(t) ? t.focus() : (t instanceof HTMLAnchorElement && t.href || "BUTTON" === t.tagName || "SUMMARY" === t.tagName || function(t) {
                    if (!(t instanceof HTMLElement)) return !1;
                    var e = t.nodeName.toLowerCase(),
                        n = (t.getAttribute("type") || "").toLowerCase();
                    return "input" === e && ("checkbox" === n || "radio" === n)
                }(t)) && t.click()
            }

            function Eo(t) {
                return "".concat(t.ctrlKey ? "Control+" : "").concat(t.altKey ? "Alt+" : "").concat(t.metaKey ? "Meta+" : "").concat(t.key)
            }
            var To = new(function() {
                    function t(e) {
                        po(this, t), vo(this, "parent", null), vo(this, "children", {}), this.parent = e || null
                    }
                    return go(t, [{
                        key: "get",
                        value: function(t) {
                            return this.children[t]
                        }
                    }, {
                        key: "insert",
                        value: function(e) {
                            for (var n = this, o = 0; o < e.length; o += 1) {
                                var r = e[o],
                                    i = n.get(r);
                                if (o === e.length - 1) return i instanceof t && (n.delete(i), i = null), i || (i = new wo(n), n.children[r] = i), i;
                                i instanceof wo && (i = null), i || (i = new t(n), n.children[r] = i), n = i
                            }
                            return n
                        }
                    }, {
                        key: "delete",
                        value: function(t) {
                            for (var e in this.children) {
                                if (this.children[e] === t) {
                                    var n = delete this.children[e];
                                    return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this), n
                                }
                            }
                            return !1
                        }
                    }]), t
                }()),
                xo = new WeakMap,
                ko = To,
                Lo = null;

            function Ao() {
                Lo = null, ko = To
            }

            function _o(t) {
                if (!(t.target instanceof Node && bo(t.target))) {
                    null != Lo && clearTimeout(Lo), Lo = setTimeout(Ao, 1500);
                    var e = ko.get(Eo(t));
                    if (e) return ko = e, e instanceof wo ? (yo(e.children[e.children.length - 1]), t.preventDefault(), void Ao()) : void 0;
                    Ao()
                }
            }

            function So() {
                const t = document.getElementById("ajax-error-message");
                t && t.classList.add("visible")
            }

            function Co() {
                const t = document.getElementById("ajax-error-message");
                t && t.classList.remove("visible")
            }

            function jo() {}
            Ht("deprecatedAjaxError", "[data-remote]", (function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/ajax-error.js:26");
                const e = t.detail,
                    {
                        error: n,
                        text: o
                    } = e;
                t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (So(), t.stopImmediatePropagation()) : setTimeout((function() {
                    t.defaultPrevented || So()
                }), 0))
            })), Ht("deprecatedAjaxSend", "[data-remote]", (function() {
                Co()
            })), Ht("click", ".js-ajax-error-dismiss", (function() {
                Co()
            }));
            class Do {
                constructor() {
                    this.previousReceiver = {
                        resolve: jo,
                        reject: jo
                    }
                }
                push(t) {
                    return this.previousReceiver.resolve = this.previousReceiver.reject = jo, new Promise((e, n) => {
                        const o = {
                            resolve: e,
                            reject: n
                        };
                        this.previousReceiver = o, t.then((function(...t) {
                            o.resolve(...t)
                        }), (function(...t) {
                            o.reject(...t)
                        }))
                    })
                }
            }
            t("N", Do);
            class Mo {
                constructor(t) {
                    this.closed = !1, this.unsubscribe = () => {
                        t(), this.closed = !0
                    }
                }
            }

            function Ho(t, e, n, o = !1) {
                return t.addEventListener(e, n, o), new Mo(() => {
                    t.removeEventListener(e, n, o)
                })
            }

            function Oo(...t) {
                return new Mo(() => {
                    for (const e of t) e.unsubscribe()
                })
            }

            function No(t, e = !1) {
                return Io(t) || function(t, e) {
                    const n = function(t) {
                        if (qo instanceof Element) return qo;
                        if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;
                        return null
                    }(t);
                    return null != n && !(e && n === t) && (je(n) && n === t || t.contains(n) && ! function(t) {
                        if (!(Ro instanceof Element)) return !1;
                        const e = t.closest(Vo);
                        if (!e) return !1;
                        const n = Ro.closest(Vo);
                        return e === n
                    }(n))
                }(t, e) || function(t) {
                    return t.matches(":active")
                }(t) || function(t) {
                    return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"))
                }(t)
            }

            function Io(t) {
                for (const e of t.querySelectorAll("input, textarea"))
                    if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Po(e)) return !0;
                return !1
            }

            function Po(t) {
                if (t instanceof HTMLInputElement && ("checkbox" === t.type || "radio" === t.type)) {
                    if (t.checked !== t.defaultChecked) return !0
                } else if (t.value !== t.defaultValue) return !0;
                return !1
            }
            let qo, Ro;
            document.addEventListener("mouseup", (function(t) {
                Ro = t.target
            }));
            const Vo = "a[href], button, details:not([open]) summary";
            let Fo;

            function Bo(t) {
                return Fo || (Fo = ge(document, "enabled-features").split(",")), -1 !== Fo.indexOf(t)
            }

            function $o(t, e) {
                return Uo(function(t) {
                    if (t.activeElement !== t.body) return t.activeElement;
                    var e = t.querySelectorAll(":hover"),
                        n = e.length;
                    if (n) return e[n - 1]
                }(t), e)
            }

            function Uo(t, e) {
                var n = t;
                if (!n) return Promise.resolve(e());
                var o = n.ownerDocument.documentElement;
                var r = function(t) {
                    for (var e = []; t;) {
                        var n = t.getBoundingClientRect(),
                            o = n.top,
                            r = n.left;
                        e.push({
                            element: t,
                            top: o,
                            left: r
                        }), t = t.parentElement
                    }
                    return e
                }(n);
                return Promise.resolve(e()).then((function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (o.contains(n.element)) return n
                        }
                    }(r);
                    if (e) {
                        n = e.element;
                        var i = e.top,
                            s = e.left,
                            a = n.getBoundingClientRect(),
                            c = a.top,
                            l = a.left;
                        ! function(t, e, n) {
                            var o = t.ownerDocument,
                                r = o.defaultView;

                            function i(t) {
                                return t.offsetParent ? {
                                    top: t.scrollTop,
                                    left: t.scrollLeft
                                } : {
                                    top: r.pageYOffset,
                                    left: r.pageXOffset
                                }
                            }

                            function s(t, e, n) {
                                if (0 === e && 0 === n) return [0, 0];
                                var s = i(t),
                                    a = s.top + n,
                                    c = s.left + e;
                                t === o || t === r || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(c, a) : (t.scrollTop = a, t.scrollLeft = c);
                                var l = i(t);
                                return [l.left - s.left, l.top - s.top]
                            }

                            function a(t) {
                                var e = t;
                                if (e.offsetParent && e !== o.body) {
                                    for (; e !== o.body;) {
                                        if (!e.parentElement) return;
                                        e = e.parentElement;
                                        var n = r.getComputedStyle(e),
                                            i = n.position,
                                            s = n.overflowY,
                                            a = n.overflowX;
                                        if ("fixed" === i || "auto" === s || "auto" === a || "scroll" === s || "scroll" === a) break
                                    }
                                    return e
                                }
                            }
                            var c = a(t),
                                l = 0,
                                u = 0;
                            for (; c;) {
                                var d = s(c, e - l, n - u);
                                if (l += d[0], u += d[1], l === e && u === n) break;
                                c = a(c)
                            }
                        }(n, l - s, c - i)
                    }
                    return t
                }))
            }
            const Xo = new WeakMap,
                Wo = t("aZ", {});

            function Ko(t, e, n = !1) {
                return $o(document, () => {
                    const o = et(document, e.trim()),
                        r = n && t === t.ownerDocument.activeElement ? o.querySelector("*") : null,
                        i = Array.from(t.querySelectorAll("details[open][id]")).map(t => t.id);
                    "DETAILS" === t.tagName && t.id && t.hasAttribute("open") && i.push(t.id);
                    for (const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const t = d(e, "data-updatable-content-scroll-position-id");
                        Go.set(t, e.scrollTop)
                    }
                    for (const t of i) {
                        const e = o.querySelector(`#${t}`);
                        e && e.setAttribute("open", "")
                    }
                    t.replaceWith(o), r && r.focus()
                })
            }
            const Go = new Map;
            async function Yo(t) {
                const e = l(document, "#site-details-dialog", HTMLTemplateElement).content.cloneNode(!0);
                if (!(e instanceof DocumentFragment)) throw new Error("invariant violation: clonedDetails instanceof HTMLElement");
                const n = l(e, "details"),
                    o = l(n, "details-dialog"),
                    r = l(n, ".js-details-dialog-spinner");
                if (t.detailsClass && n.classList.add(...t.detailsClass.split(" ")), t.dialogClass && o.classList.add(...t.dialogClass.split(" ")), !document.body) throw new Error("invariant violation: document.body");
                document.body.append(e);
                const i = await t.content;
                return r.remove(), o.prepend(i), n.addEventListener("toggle", () => {
                    n.hasAttribute("open") || (Ot(o, "dialog:remove"), n.remove())
                }), o
            }
            me(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(t) {
                    const e = t.getAttribute("data-updatable-content-scroll-position-id");
                    if (!e) return;
                    const n = Go.get(e);
                    null != n && (t.scrollTop = n)
                }
            });
            const zo = new WeakMap;

            function Jo(t) {
                const e = zo.get(t);
                e && (null != e.timer && clearTimeout(e.timer), e.timer = window.setTimeout(() => {
                    null != e.timer && (e.timer = null), e.inputed = !1, e.listener.call(null, t)
                }, e.wait))
            }

            function Zo(t) {
                const {
                    currentTarget: e
                } = t;
                if (!(e && e instanceof Element)) return;
                const n = zo.get(e);
                n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer))
            }

            function Qo(t) {
                const {
                    currentTarget: e
                } = t;
                if (!e || !(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                const n = zo.get(e);
                n && (n.keypressed = !1, n.inputed && Jo(e))
            }

            function tr(t) {
                const {
                    currentTarget: e
                } = t;
                if (!e || !(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                const n = zo.get(e);
                n && (n.inputed = !0, n.keypressed || Jo(e))
            }

            function er(t) {
                const e = document.querySelector(".sso-modal");
                e && (e.classList.remove("success", "error"), t ? e.classList.add("success") : e.classList.add("error"))
            }
            me(".js-sso-modal-complete", (function(t) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const e = t.getAttribute("data-error"),
                        n = t.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: e,
                        expiresAround: n
                    }), window.close()
                } else {
                    const e = t.getAttribute("data-fallback-url");
                    e && (window.location.href = e)
                }
            }));
            let nr = null;

            function or() {
                nr = null
            }

            function rr(t, e = location.hash) {
                return ir(t, sr(e))
            }

            function ir(t, e) {
                return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0]
            }

            function sr(t) {
                try {
                    return decodeURIComponent(t.slice(1))
                } catch (e) {
                    return ""
                }
            }

            function ar(t) {
                if (t instanceof window.Window) return "window";
                if (t instanceof window.Document) return "#document";
                const e = [t.nodeName.toLowerCase()];
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/inspect.js:58");
                const n = t.id;
                if (n && e.push(`#${n}`), "function" == typeof t.getAttribute && t.getAttribute("class")) {
                    const n = (t.getAttribute("class") || "").trim().split(/\s+/).join(".");
                    n && e.push(`.${n}`)
                }
                return e.join("")
            }
            const cr = new WeakMap;

            function lr(t, e) {
                const n = function(t, e) {
                    const n = u(t, "link[rel=pjax-prefetch]", HTMLLinkElement);
                    for (const o of n)
                        if (o.href === e) return o
                }(t, e);
                if (n) {
                    const t = cr.get(n);
                    return n.remove(), cr.delete(n), t
                }
            }
            const ur = {
                    container: null,
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0
                },
                dr = 20;
            let fr;
            const hr = new Do;

            function pr(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }

            function mr(t) {
                gr({
                    url: t.url,
                    container: t.container,
                    replace: t.replace
                })
            }

            function gr(t) {
                const e = {
                    url: "",
                    container: null
                };
                if (Object.assign(e, ur, t), "string" != typeof e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:132");
                e.requestUrl = e.url;
                const n = xr(e.url),
                    o = n.hash,
                    r = e.container;
                if (!r) throw new Error("invariant: app/assets/modules/github/pjax.js:137");
                const i = Lr(r);
                if ("GET" === e.type && (n.search += `${n.search?"&":""}_pjax=${encodeURIComponent(i)}`, e.url = n.toString()), fr || (fr = {
                        id: Er(),
                        url: window.location.href,
                        title: document.title,
                        container: i,
                        fragment: e.fragment
                    }, We(fr, fr.title, fr.url)), mr.options = e, "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:273");
                let s = lr(r, e.requestUrl);
                if (!s) {
                    if (!e.url) throw new Error("invariant: app/assets/modules/github/pjax.js:277");
                    s = at(e.url, {
                        method: e.type,
                        body: e.data,
                        headers: {
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": i
                        }
                    })
                }
                if (!0 === e.push && !0 !== e.replace) {
                    if (a = fr.id, c = Tr(r), Cr[a] = c, Dr.push(a), Mr(jr, 0), Mr(Dr, dr), "string" != typeof e.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:292");
                    Xe(null, "", e.requestUrl)
                }
                var a, c;
                pr(r, "pjax:start", {
                    url: e.url
                }), pr(r, "pjax:send"), hr.push(s).then((async function(t) {
                    const n = fr,
                        s = function() {
                            for (const t of document.getElementsByTagName("meta")) {
                                const e = t.getAttribute("http-equiv");
                                if (e && "X-PJAX-VERSION" === e.toUpperCase()) return t.content
                            }
                        }(),
                        a = t.headers.get("X-PJAX-Version"),
                        c = function(t, e, n) {
                            if ("string" != typeof n.requestUrl) throw new Error("invariant: app/assets/modules/github/pjax.js:540");
                            const o = {
                                    url: Sr(e, n.requestUrl),
                                    title: ""
                                },
                                r = /<html/i.test(t);
                            if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                            let i, s;
                            if (r) {
                                const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                    n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                                i = e ? Array.from(et(document, e[0]).childNodes) : [], s = n ? Array.from(et(document, n[0]).childNodes) : []
                            } else i = s = Array.from(et(document, t).childNodes);
                            if (0 === s.length) return o;
                            const a = Ar(i, "title", HTMLTitleElement);
                            let c;
                            if (o.title = a.length > 0 ? a[a.length - 1].textContent : "", n.fragment) {
                                if ("body" === n.fragment) c = s;
                                else {
                                    const t = Ar(s, n.fragment, Element);
                                    c = t.length > 0 ? [t[0]] : []
                                }
                                if (c.length && ("body" === n.fragment ? o.contents = c : o.contents = c.flatMap(t => Array.from(t.childNodes)), !o.title)) {
                                    const t = c[0];
                                    t instanceof Element && (o.title = t.getAttribute("title") || t.getAttribute("data-title") || "")
                                }
                            } else r || (o.contents = s);
                            if (o.contents) {
                                o.contents = o.contents.filter((function(t) {
                                    return !(t instanceof Element) || !t.matches("title")
                                }));
                                for (const e of o.contents)
                                    if (e instanceof Element)
                                        for (const t of e.querySelectorAll("title")) t.remove();
                                const t = Ar(o.contents, "script[src]", HTMLScriptElement);
                                for (const e of t) e.remove();
                                if (o.scripts = t, !o.contents) throw new Error("invariant: app/assets/modules/github/pjax.js:632");
                                o.contents = o.contents.filter(e => -1 === t.indexOf(e))
                            }
                            o.title && (o.title = o.title.trim());
                            return o
                        }(await t.text(), t, e),
                        {
                            contents: l
                        } = c,
                        d = xr(c.url);
                    if (o && (d.hash = o, c.url = d.href), s && a && s !== a) return void vr(c.url);
                    if (!l) return void vr(c.url);
                    fr = {
                        id: null != e.id ? e.id : Er(),
                        url: c.url,
                        title: c.title,
                        container: i,
                        fragment: e.fragment
                    }, !0 !== e.push && !0 !== e.replace || We(fr, c.title, c.url);
                    const f = document.activeElement,
                        h = null != e.container && e.container.contains(f);
                    if (f && h) try {
                        f.blur()
                    } catch (ji) {}
                    c.title && (document.title = c.title), pr(r, "pjax:beforeReplace", {
                        contents: l,
                        state: fr,
                        previousState: n
                    }), _r(r, l);
                    const p = u(r, "input[autofocus], textarea[autofocus]").pop();
                    p && document.activeElement !== p && p.focus(),
                        function(t) {
                            if (!t) return;
                            const e = u(document, "script[src]", HTMLScriptElement);
                            for (const n of t) {
                                const {
                                    src: t
                                } = n;
                                if (e.some(e => e.src === t)) return;
                                const o = document.createElement("script"),
                                    r = n.getAttribute("type");
                                r && (o.type = r), o.src = t, document.head && document.head.appendChild(o)
                            }
                        }(c.scripts);
                    let m = e.scrollTo;
                    if (o) {
                        const t = rr(document, o);
                        if (t) {
                            m = t.getBoundingClientRect().top + window.pageYOffset
                        }
                    }
                    "number" == typeof m && window.scrollTo(window.pageXOffset, m), pr(r, "pjax:success"), pr(r, "pjax:complete"), pr(r, "pjax:end")
                }), (function(t) {
                    let n = e.requestUrl;
                    if ("string" != typeof n) throw new Error("invariant: app/assets/modules/github/pjax.js:150");
                    t.response && (n = Sr(t.response, n));
                    const o = pr(r, "pjax:error");
                    "GET" === e.type && o && vr(n), pr(r, "pjax:complete"), pr(r, "pjax:end")
                }))
            }

            function vr(t) {
                fr && We(null, "", fr.url), window.location.replace(t)
            }
            let wr = !0;
            const br = window.location.href,
                yr = window.history.state;

            function Er() {
                return (new Date).getTime()
            }

            function Tr(t) {
                const e = t.cloneNode(!0);
                return [Lr(t), Array.from(e.childNodes), Date.now()]
            }

            function xr(t) {
                const e = document.createElement("a");
                return e.href = t, e
            }

            function kr(t) {
                return t.href.replace(/#.*/, "")
            }

            function Lr(t) {
                if (t.id) return `#${t.id}`;
                throw new Error("pjax container has no id")
            }

            function Ar(t, e, n) {
                let o = [];
                for (const r of t) r instanceof Element && (r instanceof n && r.matches(e) && o.push(r), o = o.concat(u(r, e, n)));
                return o
            }

            function _r(t, e) {
                t.innerHTML = "";
                for (const n of e) null != n && t.appendChild(n)
            }

            function Sr(t, e) {
                const n = t.headers.get("X-PJAX-URL");
                return n ? ((o = xr(n)).search = o.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), o.href.replace(/\?($|#)/, "$1")) : e;
                var o
            }
            yr && yr.container && (fr = yr), "state" in window.history && (wr = !1);
            const Cr = {},
                jr = [],
                Dr = [];

            function Mr(t, e) {
                for (; t.length > e;) delete Cr[t.shift()]
            }

            function Hr(t) {
                return ! function(t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0
                }(t)
            }
            window.addEventListener("popstate", (function(t) {
                wr || hr.push(Promise.resolve(new Response));
                const e = fr,
                    n = t.state;
                let o;
                if (n && n.container) {
                    if (wr && br === n.url) return;
                    if (e) {
                        if (e.id === n.id) return;
                        o = e.id < n.id ? "forward" : "back"
                    }
                    const [t, r, i] = Cr[n.id] || [], s = document.querySelector(t || n.container);
                    if (s) {
                        e && function(t, e, n) {
                            let o, r;
                            Cr[e] = n, "forward" === t ? (o = Dr, r = jr) : (o = jr, r = Dr);
                            o.push(e);
                            const i = r.pop();
                            i && delete Cr[i];
                            Mr(o, dr)
                        }(o, e.id, Tr(s)), pr(s, "pjax:popstate", {
                            state: n,
                            direction: o,
                            cachedAt: i
                        });
                        const t = {
                            id: n.id,
                            url: n.url,
                            container: s,
                            push: !1,
                            fragment: n.fragment || "",
                            scrollTo: !1
                        };
                        r ? (pr(s, "pjax:start"), fr = n, n.title && (document.title = n.title), pr(s, "pjax:beforeReplace", {
                            contents: r,
                            state: n,
                            previousState: e
                        }), _r(s, r), pr(s, "pjax:end")) : gr(t), s.offsetHeight
                    } else vr(location.href)
                }
                wr = !1
            }));
            const Or = [];
            let Nr = 0;

            function Ir(t) {
                !async function() {
                    Or.push(t), await we,
                        function() {
                            const t = Nr;
                            Nr = Or.length, Pr(Or.slice(t), null, window.location.href)
                        }()
                }()
            }

            function Pr(t, e, n) {
                const o = window.location.hash.slice(1),
                    r = {
                        oldURL: e,
                        newURL: n,
                        target: o ? document.getElementById(o) : null
                    };
                for (const i of t) i.call(null, r)
            }
            Ir.clear = () => {
                Or.length = Nr = 0
            };
            let qr = window.location.href;
            window.addEventListener("popstate", (function() {
                qr = window.location.href
            })), window.addEventListener("hashchange", (function(t) {
                const e = window.location.href;
                try {
                    Pr(Or, t.oldURL || qr, e)
                } finally {
                    qr = e
                }
            }));
            let Rr = null;
            document.addEventListener("pjax:start", (function() {
                Rr = window.location.href
            })), document.addEventListener("pjax:end", (function() {
                Pr(Or, Rr, window.location.href)
            }));
            let Vr = !1;
            const Fr = [];

            function Br() {
                Fr.length ? Vr || (window.addEventListener("resize", $r, {
                    passive: !0
                }), document.addEventListener("scroll", $r, {
                    passive: !0
                }), Vr = !0) : function() {
                    const t = {
                        passive: !0
                    };
                    window.removeEventListener("resize", $r, t), document.removeEventListener("scroll", $r, t), Vr = !1
                }()
            }

            function $r() {
                for (const t of Fr)
                    if (t.element.offsetHeight > 0) {
                        const {
                            element: e,
                            placeholder: n,
                            top: o
                        } = t, r = e.getBoundingClientRect();
                        if (n) {
                            const i = n.getBoundingClientRect();
                            e.classList.contains("is-stuck") ? i.top > parseInt(String(o)) ? Xr(t) : Wr(t) : r.top <= parseInt(String(o)) && Ur(t)
                        } else r.top <= parseInt(String(o)) ? Ur(t) : Xr(t)
                    }
            }

            function Ur({
                element: t,
                placeholder: e,
                top: n
            }) {
                if (e) {
                    const o = t.getBoundingClientRect();
                    t.style.top = n.toString(), t.style.left = `${o.left}px`, t.style.width = `${o.width}px`, t.style.marginTop = "0", t.style.position = "fixed", e.style.display = "block"
                }
                t.classList.add("is-stuck")
            }

            function Xr({
                element: t,
                placeholder: e
            }) {
                e && (t.style.position = "static", t.style.marginTop = e.style.marginTop, e.style.display = "none"), t.classList.remove("is-stuck")
            }

            function Wr({
                element: t,
                placeholder: e,
                offsetParent: n,
                top: o
            }) {
                if (e) {
                    const r = t.getBoundingClientRect(),
                        i = e.getBoundingClientRect();
                    if (t.style.left = `${i.left}px`, t.style.width = `${i.width}px`, n) {
                        const e = n.getBoundingClientRect();
                        e.bottom < r.height + parseInt(String(o)) && (t.style.top = `${e.bottom-r.height}px`)
                    }
                }
            }

            function Kr(t) {
                if (function(t) {
                        const {
                            position: e
                        } = window.getComputedStyle(t);
                        return /sticky/.test(e)
                    }(t)) return null;
                const e = t.previousElementSibling;
                if (e && e.classList.contains("is-placeholder")) {
                    if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/sticky.js:173");
                    return e
                }
                const n = document.createElement("div");
                if (n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(t).height, n.className = t.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), !t.parentNode) throw new Error("invariant: app/assets/modules/github/sticky.js:185");
                return t.parentNode.insertBefore(n, t)
            }
            async function Gr(t) {
                await be,
                function(t) {
                    const e = Kr(t),
                        n = window.getComputedStyle(t).position;
                    t.style.position = "static";
                    const o = t.offsetParent;
                    t.style.position = "fixed";
                    const r = window.getComputedStyle(t).top,
                        i = {
                            element: t,
                            placeholder: e,
                            offsetParent: o,
                            top: "auto" === r ? 0 : r
                        };
                    t.style.position = n, Fr.push(i)
                }(t), $r(), Br()
            }

            function Yr(t) {
                const e = t.ownerDocument;
                t.scrollIntoView(), e && e.defaultView && e.defaultView.scrollBy(0, -zr(e))
            }

            function zr(t) {
                $r();
                const e = t.querySelectorAll(".js-sticky-offset-scroll"),
                    n = t.querySelectorAll(".js-position-sticky");
                return Math.max(0, ...Array.from(e).map(t => {
                    const {
                        top: e,
                        height: n
                    } = t.getBoundingClientRect();
                    return 0 === e ? n : 0
                })) + Math.max(0, ...Array.from(n).map(t => {
                    const {
                        top: e,
                        height: n
                    } = t.getBoundingClientRect(), o = parseInt(getComputedStyle(t).top);
                    if (!t.parentElement) return 0;
                    const r = t.parentElement.getBoundingClientRect().top;
                    return e === o && r < 0 ? n : 0
                }))
            }
            me(".js-sticky", {
                    constructor: HTMLElement,
                    add(t) {
                        Gr(t)
                    },
                    remove(t) {
                        ! function(t) {
                            const e = Fr.map(t => t.element).indexOf(t);
                            Fr.splice(e, 1)
                        }(t), Br()
                    }
                }),
                function() {
                    var t = function(t) {
                        this.w = t || []
                    };
                    t.prototype.set = function(t) {
                        this.w[t] = !0
                    }, t.prototype.encode = function() {
                        for (var t = [], e = 0; e < this.w.length; e++) this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
                        for (e = 0; e < t.length; e++) t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
                        return t.join("") + "~"
                    };
                    var e = new t;

                    function n(t) {
                        e.set(t)
                    }
                    var o = function(e, n) {
                            var o = new t(i(e));
                            o.set(n), e.set(se, o.w)
                        },
                        r = function(n) {
                            n = i(n), n = new t(n);
                            for (var o = e.w.slice(), r = 0; r < n.w.length; r++) o[r] = o[r] || n.w[r];
                            return new t(o).encode()
                        },
                        i = function(t) {
                            return t = t.get(se), a(t) || (t = []), t
                        },
                        s = function(t) {
                            return "function" == typeof t
                        },
                        a = function(t) {
                            return "[object Array]" == Object.prototype.toString.call(Object(t))
                        },
                        c = function(t) {
                            return null != t && -1 < (t.constructor + "").indexOf("String")
                        },
                        l = function(t, e) {
                            return 0 == t.indexOf(e)
                        },
                        u = function(t) {
                            return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
                        },
                        d = function(t) {
                            var e = x.createElement("img");
                            return e.width = 1, e.height = 1, e.src = t, e
                        },
                        f = function() {},
                        h = function(t) {
                            return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (n(28), t)
                        },
                        p = function(t, e, o, r) {
                            try {
                                t.addEventListener ? t.addEventListener(e, o, !!r) : t.attachEvent && t.attachEvent("on" + e, o)
                            } catch (ji) {
                                n(27)
                            }
                        },
                        m = /^[\w\-:/.?=&%!]+$/,
                        g = function(t, e, n, o) {
                            t && (n ? (o = "", e && m.test(e) && (o = ' id="' + e + '"'), m.test(t) && x.write("<script" + o + ' src="' + t + '"><\/script>')) : ((n = x.createElement("script")).type = "text/javascript", n.async = !0, n.src = t, o && (n.onload = o), e && (n.id = e), (t = x.getElementsByTagName("script")[0]).parentNode.insertBefore(n, t)))
                        },
                        v = function() {
                            return "https:" == x.location.protocol
                        },
                        w = function(t, e) {
                            return (t = t.match("(?:&|#|\\?)" + h(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length ? t[1] : ""
                        },
                        b = function() {
                            var t = "" + x.location.hostname;
                            return 0 == t.indexOf("www.") ? t.substring(4) : t
                        },
                        y = function(t, e) {
                            if (1 == e.length && null != e[0] && "object" == typeof e[0]) return e[0];
                            for (var n = {}, o = Math.min(t.length + 1, e.length), r = 0; r < o; r++) {
                                if ("object" == typeof e[r]) {
                                    for (var i in e[r]) e[r].hasOwnProperty(i) && (n[i] = e[r][i]);
                                    break
                                }
                                r < t.length && (n[t[r]] = e[r])
                            }
                            return n
                        },
                        E = function() {
                            this.keys = [], this.values = {}, this.m = {}
                        };
                    E.prototype.set = function(t, e, n) {
                        this.keys.push(t), n ? this.m[":" + t] = e : this.values[":" + t] = e
                    }, E.prototype.get = function(t) {
                        return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.values[":" + t]
                    }, E.prototype.map = function(t) {
                        for (var e = 0; e < this.keys.length; e++) {
                            var n = this.keys[e],
                                o = this.get(n);
                            o && t(n, o)
                        }
                    };
                    var T = window,
                        x = document,
                        k = window,
                        L = function(t) {
                            var e = k._gaUserPrefs;
                            if (e && e.ioo && e.ioo() || t && !0 === k["ga-disable-" + t]) return !0;
                            try {
                                var n = k.external;
                                if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
                            } catch (Fi) {}
                            return !1
                        },
                        A = function(t) {
                            var e = [],
                                n = x.cookie.split(";");
                            t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
                            for (var o = 0; o < n.length; o++) {
                                var r = n[o].match(t);
                                r && e.push(r[1])
                            }
                            return e
                        },
                        _ = function(t, e, o, r, i, s) {
                            if (!(i = !L(i) && !(j.test(x.location.hostname) || "/" == o && C.test(r)))) return !1;
                            if (e && 1200 < e.length && (e = e.substring(0, 1200), n(24)), o = t + "=" + e + "; path=" + o + "; ", s && (o += "expires=" + new Date((new Date).getTime() + s).toGMTString() + "; "), r && "none" != r && (o += "domain=" + r + ";"), r = x.cookie, x.cookie = o, !(r = r != x.cookie)) t: {
                                for (t = A(t), r = 0; r < t.length; r++)
                                    if (e == t[r]) {
                                        r = !0;
                                        break t
                                    } r = !1
                            }
                            return r
                        },
                        S = function(t) {
                            return h(t).replace(/\(/g, "%28").replace(/\)/g, "%29")
                        },
                        C = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
                        j = /(^|\.)doubleclick\.net$/i,
                        D = function() {
                            return (dt || v() ? "https:" : "http:") + "//www.google-analytics.com"
                        },
                        M = function(t) {
                            this.name = "len", this.message = t + "-8192"
                        },
                        H = function(t, e, n) {
                            if (n = n || f, 2036 >= e.length) O(t, e, n);
                            else {
                                if (!(8192 >= e.length)) throw P("len", e.length), new M(e.length);
                                I(t, e, n) || N(t, e, n) || O(t, e, n)
                            }
                        },
                        O = function(t, e, n) {
                            var o = d(t + "?" + e);
                            o.onload = o.onerror = function() {
                                o.onload = null, o.onerror = null, n()
                            }
                        },
                        N = function(t, e, n) {
                            var o = T.XMLHttpRequest;
                            if (!o) return !1;
                            var r = new o;
                            return "withCredentials" in r && (r.open("POST", t, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                                4 == r.readyState && (n(), r = null)
                            }, r.send(e), !0)
                        },
                        I = function(t, e, n) {
                            return !!T.navigator.sendBeacon && (!!T.navigator.sendBeacon(t, e) && (n(), !0))
                        },
                        P = function(t, e, n) {
                            1 <= 100 * Math.random() || L("?") || (t = ["t=error", "_e=" + t, "_v=j48", "sr=1"], e && t.push("_f=" + e), n && t.push("_m=" + h(n.substring(0, 100))), t.push("aip=1"), t.push("z=" + Y()), O(D() + "/collect", t.join("&"), f))
                        },
                        q = function(t) {
                            var e = T.gaData = T.gaData || {};
                            return e[t] = e[t] || {}
                        },
                        R = function() {
                            this.M = []
                        };

                    function V(t) {
                        if (100 != t.get(Ie) && Zn(et(t, xe)) % 1e4 >= 100 * nt(t, Ie)) throw "abort"
                    }

                    function F(t) {
                        if (L(et(t, Ae))) throw "abort"
                    }

                    function B() {
                        var t = x.location.protocol;
                        if ("http:" != t && "https:" != t) throw "abort"
                    }

                    function $(t) {
                        try {
                            T.navigator.sendBeacon ? n(42) : T.XMLHttpRequest && "withCredentials" in new T.XMLHttpRequest && n(40)
                        } catch (Pi) {}
                        t.set(ie, r(t), !0), t.set(yt, nt(t, yt) + 1);
                        var e = [];
                        Q.map((function(n, o) {
                            o.F && (null != (n = t.get(n)) && n != o.defaultValue && ("boolean" == typeof n && (n *= 1), e.push(o.F + "=" + h("" + n))))
                        })), e.push("z=" + z()), t.set(vt, e.join("&"), !0)
                    }

                    function U(t) {
                        var e = et(t, Re) || D() + "/collect",
                            n = et(t, bt);
                        if (!n && t.get(wt) && (n = "beacon"), n) {
                            var o = et(t, vt),
                                r = (r = t.get(gt)) || f;
                            "image" == n ? O(e, o, r) : "xhr" == n && N(e, o, r) || "beacon" == n && I(e, o, r) || H(e, o, r)
                        } else H(e, et(t, vt), t.get(gt));
                        e = t.get(Ae), n = (e = q(e)).hitcount, e.hitcount = n ? n + 1 : 1, e = t.get(Ae), delete q(e).pending_experiments, t.set(gt, f, !0)
                    }

                    function X(t) {
                        var e;
                        (T.gaData = T.gaData || {}).expId && t.set(zt, (T.gaData = T.gaData || {}).expId), (T.gaData = T.gaData || {}).expVar && t.set(Jt, (T.gaData = T.gaData || {}).expVar);
                        var n = t.get(Ae);
                        if (n = q(n).pending_experiments) {
                            var o = [];
                            for (e in n) n.hasOwnProperty(e) && n[e] && o.push(encodeURIComponent(e) + "." + encodeURIComponent(n[e]));
                            e = o.join("!")
                        } else e = void 0;
                        e && t.set(Zt, e, !0)
                    }

                    function W() {
                        if (T.navigator && "preview" == T.navigator.loadPurpose) throw "abort"
                    }

                    function K(t) {
                        var e = T.gaDevIds;
                        a(e) && 0 != e.length && t.set("&did", e.join(","), !0)
                    }

                    function G(t) {
                        if (!t.get(Ae)) throw "abort"
                    }
                    R.prototype.add = function(t) {
                        this.M.push(t)
                    }, R.prototype.D = function(t) {
                        try {
                            for (var e = 0; e < this.M.length; e++) {
                                var n = t.get(this.M[e]);
                                n && s(n) && n.call(T, t)
                            }
                        } catch (Fi) {}(e = t.get(gt)) != f && s(e) && (t.set(gt, f, !0), setTimeout(e, 10))
                    };
                    var Y = function() {
                            return Math.round(2147483647 * Math.random())
                        },
                        z = function() {
                            try {
                                var t = new Uint32Array(1);
                                return T.crypto.getRandomValues(t), 2147483647 & t[0]
                            } catch (e) {
                                return Y()
                            }
                        };

                    function J(t) {
                        var e = nt(t, ne);
                        if (500 <= e && n(15), "transaction" != (o = et(t, mt)) && "item" != o) {
                            var o = nt(t, re),
                                r = (new Date).getTime(),
                                i = nt(t, oe);
                            if (0 == i && t.set(oe, r), 0 < (i = Math.round(2 * (r - i) / 1e3)) && (o = Math.min(o + i, 20), t.set(oe, r)), 0 >= o) throw "abort";
                            t.set(re, --o)
                        }
                        t.set(ne, ++e)
                    }
                    var Z = function() {
                            this.data = new E
                        },
                        Q = new E,
                        tt = [];
                    Z.prototype.get = function(t) {
                        var e = it(t),
                            n = this.data.get(t);
                        return e && null == n && (n = s(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n
                    };
                    var et = function(t, e) {
                            return null == (t = t.get(e)) ? "" : "" + t
                        },
                        nt = function(t, e) {
                            return null == (t = t.get(e)) || "" === t ? 0 : 1 * t
                        };
                    Z.prototype.set = function(t, e, n) {
                        if (t)
                            if ("object" == typeof t)
                                for (var o in t) t.hasOwnProperty(o) && ot(this, o, t[o], n);
                            else ot(this, t, e, n)
                    };
                    var ot = function(t, e, n, o) {
                            if (null != n) switch (e) {
                                case Ae:
                                    _n.test(n)
                            }
                            var r = it(e);
                            r && r.o ? r.o(t, e, n, o) : t.data.set(e, n, o)
                        },
                        rt = function(t, e, n, o, r) {
                            this.name = t, this.F = e, this.Z = o, this.o = r, this.defaultValue = n
                        },
                        it = function(t) {
                            var e = Q.get(t);
                            if (!e)
                                for (var n = 0; n < tt.length; n++) {
                                    var o = tt[n],
                                        r = o[0].exec(t);
                                    if (r) {
                                        e = o[1](r), Q.set(e.name, e);
                                        break
                                    }
                                }
                            return e
                        },
                        st = function(t, e, n, o, r) {
                            return t = new rt(t, e, n, o, r), Q.set(t.name, t), t.name
                        },
                        at = function(t, e) {
                            tt.push([new RegExp("^" + t + "$"), e])
                        },
                        ct = function(t, e, n) {
                            return st(t, e, n, void 0, lt)
                        },
                        lt = function() {},
                        ut = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || "ga",
                        dt = !1,
                        ft = ct("apiVersion", "v"),
                        ht = ct("clientVersion", "_v");
                    st("anonymizeIp", "aip");
                    var pt = st("adSenseId", "a"),
                        mt = st("hitType", "t"),
                        gt = st("hitCallback"),
                        vt = st("hitPayload");
                    st("nonInteraction", "ni"), st("currencyCode", "cu"), st("dataSource", "ds");
                    var wt = st("useBeacon", void 0, !1),
                        bt = st("transport");
                    st("sessionControl", "sc", ""), st("sessionGroup", "sg"), st("queueTime", "qt");
                    var yt = st("_s", "_s");
                    st("screenName", "cd");
                    var Et = st("location", "dl", ""),
                        Tt = st("referrer", "dr"),
                        xt = st("page", "dp", "");
                    st("hostname", "dh");
                    var kt = st("language", "ul"),
                        Lt = st("encoding", "de");
                    st("title", "dt", (function() {
                        return x.title || void 0
                    })), at("contentGroup([0-9]+)", (function(t) {
                        return new rt(t[0], "cg" + t[1])
                    }));
                    var At = st("screenColors", "sd"),
                        _t = st("screenResolution", "sr"),
                        St = st("viewportSize", "vp"),
                        Ct = st("javaEnabled", "je"),
                        jt = st("flashVersion", "fl");
                    st("campaignId", "ci"), st("campaignName", "cn"), st("campaignSource", "cs"), st("campaignMedium", "cm"), st("campaignKeyword", "ck"), st("campaignContent", "cc");
                    var Dt = st("eventCategory", "ec"),
                        Mt = st("eventAction", "ea"),
                        Ht = st("eventLabel", "el"),
                        Ot = st("eventValue", "ev"),
                        Nt = st("socialNetwork", "sn"),
                        It = st("socialAction", "sa"),
                        Pt = st("socialTarget", "st"),
                        qt = st("l1", "plt"),
                        Rt = st("l2", "pdt"),
                        Vt = st("l3", "dns"),
                        Ft = st("l4", "rrt"),
                        Bt = st("l5", "srt"),
                        $t = st("l6", "tcp"),
                        Ut = st("l7", "dit"),
                        Xt = st("l8", "clt"),
                        Wt = st("timingCategory", "utc"),
                        Kt = st("timingVar", "utv"),
                        Gt = st("timingLabel", "utl"),
                        Yt = st("timingValue", "utt");
                    st("appName", "an"), st("appVersion", "av", ""), st("appId", "aid", ""), st("appInstallerId", "aiid", ""), st("exDescription", "exd"), st("exFatal", "exf");
                    var zt = st("expId", "xid"),
                        Jt = st("expVar", "xvar"),
                        Zt = st("exp", "exp"),
                        Qt = st("_utma", "_utma"),
                        te = st("_utmz", "_utmz"),
                        ee = st("_utmht", "_utmht"),
                        ne = st("_hc", void 0, 0),
                        oe = st("_ti", void 0, 0),
                        re = st("_to", void 0, 20);
                    at("dimension([0-9]+)", (function(t) {
                        return new rt(t[0], "cd" + t[1])
                    })), at("metric([0-9]+)", (function(t) {
                        return new rt(t[0], "cm" + t[1])
                    })), st("linkerParam", void 0, void 0, (function(t) {
                        var e = ln(t = t.get(xe), 0);
                        return "_ga=1." + h(e + "." + t)
                    }), lt);
                    var ie = st("usage", "_u"),
                        se = st("_um");
                    st("forceSSL", void 0, void 0, (function() {
                        return dt
                    }), (function(t, e, o) {
                        n(34), dt = !!o
                    }));
                    var ae = st("_j1", "jid");
                    at("\\&(.*)", (function(t) {
                        var e = new rt(t[0], t[1]),
                            n = function(t) {
                                var e;
                                return Q.map((function(n, o) {
                                    o.F == t && (e = o)
                                })), e && e.name
                            }(t[0].substring(1));
                        return n && (e.Z = function(t) {
                            return t.get(n)
                        }, e.o = function(t, e, o, r) {
                            t.set(n, o, r)
                        }, e.F = void 0), e
                    }));
                    var ce = ct("_oot"),
                        le = st("previewTask"),
                        ue = st("checkProtocolTask"),
                        de = st("validationTask"),
                        fe = st("checkStorageTask"),
                        he = st("historyImportTask"),
                        pe = st("samplerTask"),
                        me = st("_rlt"),
                        ge = st("buildHitTask"),
                        ve = st("sendHitTask"),
                        we = st("ceTask"),
                        be = st("devIdTask"),
                        ye = st("timingTask"),
                        Ee = st("displayFeaturesTask"),
                        Te = ct("name"),
                        xe = ct("clientId", "cid"),
                        ke = ct("clientIdTime"),
                        Le = st("userId", "uid"),
                        Ae = ct("trackingId", "tid"),
                        _e = ct("cookieName", void 0, "_ga"),
                        Se = ct("cookieDomain"),
                        Ce = ct("cookiePath", void 0, "/"),
                        je = ct("cookieExpires", void 0, 63072e3),
                        De = ct("legacyCookieDomain"),
                        Me = ct("legacyHistoryImport", void 0, !0),
                        He = ct("storage", void 0, "cookie"),
                        Oe = ct("allowLinker", void 0, !1),
                        Ne = ct("allowAnchor", void 0, !0),
                        Ie = ct("sampleRate", "sf", 100),
                        Pe = ct("siteSpeedSampleRate", void 0, 1),
                        qe = ct("alwaysSendReferrer", void 0, !1),
                        Re = st("transportUrl"),
                        Ve = st("_r", "_r");

                    function Fe(t, e, o, r) {
                        e[t] = function() {
                            try {
                                return r && n(r), o.apply(this, arguments)
                            } catch (ji) {
                                throw P("exc", t, ji && ji.name), ji
                            }
                        }
                    }
                    var Be = function(t, e, n) {
                            this.V = t, this.fa = e, this.$ = !1, this.oa = n, this.ea = 1
                        },
                        $e = function(t, e) {
                            var n;
                            if (t.fa && t.$) return 0;
                            if (t.$ = !0, e) {
                                if (t.oa && nt(e, t.oa)) return nt(e, t.oa);
                                if (0 == e.get(Pe)) return 0
                            }
                            return 0 == t.V ? 0 : (void 0 === n && (n = z()), 0 == n % t.V ? Math.floor(n / t.V) % t.ea + 1 : 0)
                        };
                    var Ue = function(t) {
                            var e = {};
                            if (Xe(e) || We(e)) {
                                var n = e[qt];
                                null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (Ke(e, Vt), Ke(e, $t), Ke(e, Bt), Ke(e, Rt), Ke(e, Ft), Ke(e, Ut), Ke(e, Xt), t(e)) : p(T, "load", (function() {
                                    Ue(t)
                                }), !1))
                            }
                        },
                        Xe = function(t) {
                            var e;
                            if (!(e = (e = T.performance || T.webkitPerformance) && e.timing)) return !1;
                            var n = e.navigationStart;
                            return 0 != n && (t[qt] = e.loadEventStart - n, t[Vt] = e.domainLookupEnd - e.domainLookupStart, t[$t] = e.connectEnd - e.connectStart, t[Bt] = e.responseStart - e.requestStart, t[Rt] = e.responseEnd - e.responseStart, t[Ft] = e.fetchStart - n, t[Ut] = e.domInteractive - n, t[Xt] = e.domContentLoadedEventStart - n, !0)
                        },
                        We = function(t) {
                            if (T.top != T) return !1;
                            var e = T.external,
                                n = e && e.onloadT;
                            return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[qt] = n, !0)
                        },
                        Ke = function(t, e) {
                            var n = t[e];
                            (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
                        },
                        Ge = function(t) {
                            return function(e) {
                                if ("pageview" == e.get(mt) && !t.I) {
                                    t.I = !0;
                                    var n = function(t) {
                                        var e = Math.min(nt(t, Pe), 100);
                                        return !(Zn(et(t, xe)) % 100 >= e)
                                    }(e);
                                    e = 0 < w(e.get(Et), "gclid").length, (n || e) && Ue((function(e) {
                                        t.send(n ? "timing" : "adtiming", e)
                                    }))
                                }
                            }
                        },
                        Ye = !1,
                        ze = function(t) {
                            if ("cookie" == et(t, He)) {
                                var e = et(t, _e),
                                    o = Qe(t),
                                    r = nn(et(t, Ce)),
                                    i = en(et(t, Se)),
                                    s = 1e3 * nt(t, je),
                                    a = et(t, Ae);
                                if ("auto" != i) _(e, o, r, i, a, s) && (Ye = !0);
                                else {
                                    var c;
                                    if (n(32), o = [], 4 != (i = b().split(".")).length || (c = i[i.length - 1], parseInt(c, 10) != c)) {
                                        for (c = i.length - 2; 0 <= c; c--) o.push(i.slice(c).join("."));
                                        o.push("none"), c = o
                                    } else c = ["none"];
                                    for (var l = 0; l < c.length; l++)
                                        if (i = c[l], t.data.set(Se, i), o = Qe(t), _(e, o, r, i, a, s)) return void(Ye = !0);
                                    t.data.set(Se, "auto")
                                }
                            }
                        },
                        Je = function(t) {
                            if ("cookie" == et(t, He) && !Ye && (ze(t), !Ye)) throw "abort"
                        },
                        Ze = function(t) {
                            if (t.get(Me)) {
                                var e = et(t, Se),
                                    o = et(t, De) || b(),
                                    r = rn("__utma", o, e);
                                r && (n(19), t.set(ee, (new Date).getTime(), !0), t.set(Qt, r.R), (e = rn("__utmz", o, e)) && r.hash == e.hash && t.set(te, e.R))
                            }
                        },
                        Qe = function(t) {
                            var e = S(et(t, xe)),
                                n = en(et(t, Se)).split(".").length;
                            return 1 < (t = on(et(t, Ce))) && (n += "-" + t), ["GA1", n, e].join(".")
                        },
                        tn = function(t, e, n) {
                            for (var o, r = [], i = [], s = 0; s < t.length; s++) {
                                var a = t[s];
                                a.H[n] == e ? r.push(a) : null == o || a.H[n] < o ? (i = [a], o = a.H[n]) : a.H[n] == o && i.push(a)
                            }
                            return 0 < r.length ? r : i
                        },
                        en = function(t) {
                            return 0 == t.indexOf(".") ? t.substr(1) : t
                        },
                        nn = function(t) {
                            return t ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf("/") && (t = "/" + t), t) : "/"
                        },
                        on = function(t) {
                            return "/" == (t = nn(t)) ? 1 : t.split("/").length
                        };

                    function rn(t, e, n) {
                        "none" == e && (e = "");
                        var o = [],
                            r = A(t);
                        t = "__utma" == t ? 6 : 2;
                        for (var i = 0; i < r.length; i++) {
                            var s = ("" + r[i]).split(".");
                            s.length >= t && o.push({
                                hash: s[0],
                                R: r[i],
                                O: s
                            })
                        }
                        if (0 != o.length) return 1 == o.length ? o[0] : sn(e, o) || sn(n, o) || sn(null, o) || o[0]
                    }

                    function sn(t, e) {
                        var n;
                        null == t ? n = t = 1 : (n = Zn(t), t = Zn(l(t, ".") ? t.substring(1) : "." + t));
                        for (var o = 0; o < e.length; o++)
                            if (e[o].hash == n || e[o].hash == t) return e[o]
                    }
                    var an = new RegExp(/^https?:\/\/([^\/:]+)/),
                        cn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

                    function ln(t, e) {
                        var n = new Date,
                            o = T.navigator,
                            r = o.plugins || [];
                        for (t = [t, o.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0; e < r.length; ++e) t.push(r[e].description);
                        return Zn(t.join("."))
                    }
                    var un = function(t) {
                        n(48), this.target = t, this.T = !1
                    };
                    un.prototype.ca = function(t, e) {
                        if (t.tagName) {
                            if ("a" == t.tagName.toLowerCase()) return void(t.href && (t.href = dn(this, t.href, e)));
                            if ("form" == t.tagName.toLowerCase()) return fn(this, t)
                        }
                        if ("string" == typeof t) return dn(this, t, e)
                    };
                    var dn = function(t, e, n) {
                            (r = cn.exec(e)) && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : "")), t = t.target.get("linkerParam");
                            var o = e.indexOf("?"),
                                r = e.indexOf("#");
                            return n ? e += (-1 == r ? "#" : "&") + t : (n = -1 == o ? "?" : "&", e = -1 == r ? e + (n + t) : e.substring(0, r) + n + t + e.substring(r)), e.replace(/&+_ga=/, "&_ga=")
                        },
                        fn = function(t, e) {
                            if (e && e.action) {
                                var n = t.target.get("linkerParam").split("=")[1];
                                if ("get" == e.method.toLowerCase()) {
                                    t = e.childNodes || [];
                                    for (var o = 0; o < t.length; o++)
                                        if ("_ga" == t[o].name) return void t[o].setAttribute("value", n);
                                    (t = x.createElement("input")).setAttribute("type", "hidden"), t.setAttribute("name", "_ga"), t.setAttribute("value", n), e.appendChild(t)
                                } else "post" == e.method.toLowerCase() && (e.action = dn(t, e.action))
                            }
                        };

                    function hn(t, e) {
                        if (e == x.location.hostname) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (t[n] instanceof RegExp) {
                                if (t[n].test(e)) return !0
                            } else if (0 <= e.indexOf(t[n])) return !0;
                        return !1
                    }
                    un.prototype.S = function(t, e, o) {
                        function r(o) {
                            try {
                                var r;
                                o = o || T.event;
                                t: {
                                    var s = o.target || o.srcElement;
                                    for (o = 100; s && 0 < o;) {
                                        if (s.href && s.nodeName.match(/^a(?:rea)?$/i)) {
                                            r = s;
                                            break t
                                        }
                                        s = s.parentNode, o--
                                    }
                                    r = {}
                                }("http:" == r.protocol || "https:" == r.protocol) && hn(t, r.hostname || "") && r.href && (r.href = dn(i, r.href, e))
                            } catch (a) {
                                n(26)
                            }
                        }
                        var i = this;
                        this.T || (this.T = !0, p(x, "mousedown", r, !1), p(x, "keyup", r, !1)), o && p(x, "submit", (function(e) {
                            if ((e = (e = e || T.event).target || e.srcElement) && e.action) {
                                var n = e.action.match(an);
                                n && hn(t, n[1]) && fn(i, e)
                            }
                        }))
                    };
                    var pn, mn = /^(GTM|OPT)-[A-Z0-9]+$/,
                        gn = /;_gaexp=[^;]*/g,
                        vn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
                        wn = function(t, e, o) {
                            this.U = ae, this.aa = e, (e = o) || (e = (e = et(t, Te)) && "t0" != e ? Tn.test(e) ? "_gat_" + S(et(t, Ae)) : "_gat_" + S(e) : "_gat"), this.Y = e, $e(new Be(10), t) && (n(30), this.pa = !0)
                        },
                        bn = function(t, e) {
                            e.get(t.U) || ("1" == A(t.Y)[0] ? e.set(t.U, "", !0) : e.set(t.U, "" + Y(), !0))
                        },
                        yn = function(t, e) {
                            if (e.get(t.U)) {
                                var n = 6e5;
                                t.pa && (n /= 10), _(t.Y, "1", e.get(Ce), e.get(Se), e.get(Ae), n)
                            }
                        },
                        En = function(t, e) {
                            if (e.get(t.U)) {
                                var n = new E,
                                    o = function(t) {
                                        it(t).F && n.set(it(t).F, e.get(t))
                                    };
                                o(ft), o(ht), o(Ae), o(xe), o(Le), o(t.U), n.set(it(ie).F, r(e));
                                var i = t.aa;
                                n.map((function(t, e) {
                                    i += h(t) + "=", i += h("" + e) + "&"
                                })), i += "z=" + Y(), d(i), e.set(t.U, "", !0)
                            }
                        },
                        Tn = /^gtm\d+$/,
                        xn = function(t, e) {
                            var n;
                            (t = t.b).get("dcLoaded") || (o(t, 29), (e = e || {})[_e] && (n = S(e[_e])), function(t, e) {
                                var n = e.get(ge);
                                e.set(ge, (function(e) {
                                    bn(t, e);
                                    var o = n(e);
                                    return yn(t, e), o
                                }));
                                var o = e.get(ve);
                                e.set(ve, (function(e) {
                                    var n = o(e);
                                    return En(t, e), n
                                }))
                            }(e = new wn(t, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), t), t.set("dcLoaded", !0))
                        },
                        kn = function(t) {
                            if (!t.get("dcLoaded") && "cookie" == t.get(He)) {
                                o(t, 51);
                                var e = new wn(t);
                                bn(e, t), yn(e, t), t.get(e.U) && (t.set(Ve, 1, !0), t.set(Re, D() + "/r/collect", !0))
                            }
                        },
                        Ln = function(t) {
                            return t ? (1 * t).toFixed(3) : "0"
                        },
                        An = function(t) {
                            var e = T.performance;
                            if (e && e.getEntriesByName) {
                                n(35);
                                var o = "https://www.google-analytics.com/analytics.js?wpid=" + t;
                                g(o, void 0, void 0, (function() {
                                    try {
                                        var r = 1,
                                            i = e.getEntriesByName("https://www.google-analytics.com/analytics.js");
                                        i && 0 != i.length || (i = e.getEntriesByName("http://www.google-analytics.com/analytics.js"), r = 0);
                                        var s = e.getEntriesByName(o);
                                        if (i && 1 == i.length && s && 1 == s.length) {
                                            n(37);
                                            var a = i[0],
                                                c = s[0],
                                                l = {
                                                    tid: t,
                                                    ad: Ln(a.duration),
                                                    bd: Ln(c.duration),
                                                    ar: Ln(a.responseEnd - a.requestStart),
                                                    br: Ln(c.responseEnd - c.requestStart),
                                                    an: Ln(a.domainLookupEnd - a.domainLookupStart),
                                                    bn: Ln(c.domainLookupEnd - c.domainLookupStart),
                                                    ac: Ln(a.connectEnd - a.connectStart),
                                                    bc: Ln(c.connectEnd - c.connectStart),
                                                    as: r
                                                };
                                            r = [];
                                            for (var u in r.push("_v=j48"), r.push("id=10"), l) l.hasOwnProperty(u) && r.push(u + "=" + h(l[u]));
                                            r.push("z=" + Y()), O("https://www.google-analytics.com/u/d", r.join("&"), f)
                                        }
                                    } catch (d) {}
                                }))
                            }
                        },
                        _n = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
                        Sn = function(t) {
                            function e(t, e) {
                                i.b.data.set(t, e)
                            }

                            function o(t, n) {
                                e(t, n), i.filters.add(t)
                            }

                            function r(t, e, o) {
                                $e(new Be(1e4, !0, e), i.b) && (t = A(t)) && 0 < t.length && n(o)
                            }
                            var i = this;
                            this.b = new Z, this.filters = new R, e(Te, t[Te]), e(Ae, u(t[Ae])), e(_e, t[_e]), e(Se, t[Se] || b()), e(Ce, t[Ce]), e(je, t[je]), e(De, t[De]), e(Me, t[Me]), e(Oe, t[Oe]), e(Ne, t[Ne]), e(Ie, t[Ie]), e(Pe, t[Pe]), e(qe, t[qe]), e(He, t[He]), e(Le, t[Le]), e(ke, t[ke]), e(ft, 1), e(ht, "j48"), o(ce, F), o(le, W), o(ue, B), o(de, G), o(fe, Je), o(he, Ze), o(pe, V), o(me, J), o(we, X), o(be, K), o(Ee, kn), o(ge, $), o(ve, U), o(ye, Ge(this)), Cn(this.b, t[xe]), jn(this.b), this.b.set(pt, function() {
                                    var t = T.gaGlobal = T.gaGlobal || {};
                                    return t.hid = t.hid || Y()
                                }()),
                                function(t, e, n) {
                                    if (!pn) {
                                        var o;
                                        o = x.location.hash;
                                        var r = T.name,
                                            i = /^#?gaso=([^&]*)/;
                                        (r = (o = (o = o && o.match(i) || r && r.match(i)) ? o[1] : A("GASO")[0] || "") && o.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (_("GASO", "" + o, n, e, t, 0), window._udo || (window._udo = e), window._utcp || (window._utcp = n), t = r[1], g("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + Y(), "_gasojs")), pn = !0
                                    }
                                }(this.b.get(Ae), this.b.get(Se), this.b.get(Ce)), this.ra = new Be(1e4, !0, "gaexp10"), r("_gid", "gacookie11", 41), r("_gaid", "gacookie12", 44)
                        },
                        Cn = function(t, e) {
                            if ("cookie" == et(t, He)) {
                                var o;
                                Ye = !1;
                                t: {
                                    var r = A(et(t, _e));
                                    if (r && !(1 > r.length)) {
                                        o = [];
                                        for (var i = 0; i < r.length; i++) {
                                            var s, a = (s = r[i].split(".")).shift();
                                            ("GA1" == a || "1" == a) && 1 < s.length ? (1 == (a = s.shift().split("-")).length && (a[1] = "1"), a[0] *= 1, a[1] *= 1, s = {
                                                H: a,
                                                s: s.join(".")
                                            }) : s = void 0, s && o.push(s)
                                        }
                                        if (1 == o.length) {
                                            n(13), o = o[0].s;
                                            break t
                                        }
                                        if (0 != o.length) {
                                            if (n(14), r = en(et(t, Se)).split(".").length, 1 == (o = tn(o, r, 0)).length) {
                                                o = o[0].s;
                                                break t
                                            }
                                            r = on(et(t, Ce)), o = (o = tn(o, r, 1))[0] && o[0].s;
                                            break t
                                        }
                                        n(12)
                                    }
                                    o = void 0
                                }
                                o || (o = et(t, Se), null != (o = rn("__utma", r = et(t, De) || b(), o)) ? (n(10), o = o.O[1] + "." + o.O[2]) : o = void 0), o && (t.data.set(xe, o), Ye = !0)
                            }
                            if (o = t.get(Ne), (i = w(x.location[o ? "href" : "search"], "_ga")) && (t.get(Oe) ? -1 == (o = i.indexOf(".")) ? n(22) : (r = i.substring(o + 1), "1" != i.substring(0, o) ? n(22) : -1 == (o = r.indexOf(".")) ? n(22) : (i = r.substring(0, o)) != ln(o = r.substring(o + 1), 0) && i != ln(o, -1) && i != ln(o, -2) ? n(23) : (n(11), t.data.set(xe, o))) : n(21)), e && (n(9), t.data.set(xe, h(e))), !t.get(xe))
                                if (e = (e = T.gaGlobal && T.gaGlobal.vid) && -1 != e.search(/^(?:utma\.)?\d+\.\d+$/) ? e : void 0) n(17), t.data.set(xe, e);
                                else {
                                    for (n(8), o = (e = T.navigator.userAgent + (x.cookie ? x.cookie : "") + (x.referrer ? x.referrer : "")).length, r = T.history.length; 0 < r;) e += r-- ^ o++;
                                    t.data.set(xe, [Y() ^ 2147483647 & Zn(e), Math.round((new Date).getTime() / 1e3)].join("."))
                                } ze(t)
                        },
                        jn = function(t) {
                            var e = T.navigator,
                                o = T.screen,
                                r = x.location;
                            if (t.set(Tt, function(t) {
                                    var e = x.referrer;
                                    if (/^https?:\/\//i.test(e)) {
                                        if (t) return e;
                                        t = "//" + x.location.hostname;
                                        var n = e.indexOf(t);
                                        if ((5 == n || 6 == n) && ("/" == (t = e.charAt(n + t.length)) || "?" == t || "" == t || ":" == t)) return;
                                        return e
                                    }
                                }(t.get(qe))), r) {
                                var i = r.pathname || "";
                                "/" != i.charAt(0) && (n(31), i = "/" + i), t.set(Et, r.protocol + "//" + r.hostname + i + r.search)
                            }
                            o && t.set(_t, o.width + "x" + o.height), o && t.set(At, o.colorDepth + "-bit");
                            o = x.documentElement;
                            var s = (i = x.body) && i.clientWidth && i.clientHeight,
                                a = [];
                            if (o && o.clientWidth && o.clientHeight && ("CSS1Compat" === x.compatMode || !s) ? a = [o.clientWidth, o.clientHeight] : s && (a = [i.clientWidth, i.clientHeight]), o = 0 >= a[0] || 0 >= a[1] ? "" : a.join("x"), t.set(St, o), t.set(jt, function() {
                                    var t, e, n;
                                    if ((n = (n = T.navigator) ? n.plugins : null) && n.length)
                                        for (var o = 0; o < n.length && !e; o++) {
                                            var r = n[o]; - 1 < r.name.indexOf("Shockwave Flash") && (e = r.description)
                                        }
                                    if (!e) try {
                                        e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version")
                                    } catch (s) {}
                                    if (!e) try {
                                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                                    } catch (s) {}
                                    if (!e) try {
                                        e = (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                                    } catch (s) {}
                                    return e && (t = e.match(/[\d]+/g)) && 3 <= t.length && (e = t[0] + "." + t[1] + " r" + t[2]), e || void 0
                                }()), t.set(Lt, x.characterSet || x.charset), t.set(Ct, e && "function" == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(kt, (e && (e.language || e.browserLanguage) || "").toLowerCase()), r && t.get(Ne) && (e = x.location.hash)) {
                                for (e = e.split(/[?&#]+/), r = [], o = 0; o < e.length; ++o)(l(e[o], "utm_id") || l(e[o], "utm_campaign") || l(e[o], "utm_source") || l(e[o], "utm_medium") || l(e[o], "utm_term") || l(e[o], "utm_content") || l(e[o], "gclid") || l(e[o], "dclid") || l(e[o], "gclsrc")) && r.push(e[o]);
                                0 < r.length && (e = "#" + r.join("&"), t.set(Et, t.get(Et) + e))
                            }
                        };
                    Sn.prototype.get = function(t) {
                        return this.b.get(t)
                    }, Sn.prototype.set = function(t, e) {
                        this.b.set(t, e)
                    };
                    var Dn = {
                        pageview: [xt],
                        event: [Dt, Mt, Ht, Ot],
                        social: [Nt, It, Pt],
                        timing: [Wt, Kt, Yt, Gt]
                    };
                    Sn.prototype.send = function(t) {
                        var e, n;
                        1 > arguments.length || ("string" == typeof arguments[0] ? (e = arguments[0], n = [].slice.call(arguments, 1)) : (e = arguments[0] && arguments[0][mt], n = arguments), e && ((n = y(Dn[e] || [], n))[mt] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, $e(this.ra, this.b) && An(this.b.get(Ae))))
                    }, Sn.prototype.ma = function(t, e) {
                        var n = this;
                        Fn(t, n, e) || ($n(t, (function() {
                            Fn(t, n, e)
                        })), Bn(String(n.get(Te)), t, void 0, e, !0))
                    };
                    var Mn, Hn, On, Nn, In = function(t) {
                            return "prerender" != x.visibilityState && (t(), !0)
                        },
                        Pn = function(t) {
                            if (!In(t)) {
                                n(16);
                                var e = !1,
                                    o = function() {
                                        if (!e && In(t)) {
                                            e = !0;
                                            var n = o,
                                                r = x;
                                            r.removeEventListener ? r.removeEventListener("visibilitychange", n, !1) : r.detachEvent && r.detachEvent("onvisibilitychange", n)
                                        }
                                    };
                                p(x, "visibilitychange", o)
                            }
                        },
                        qn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
                        Rn = function(t) {
                            if (s(t[0])) this.u = t[0];
                            else {
                                var e = qn.exec(t[0]);
                                if (null != e && 4 == e.length && (this.c = e[1] || "t0", this.K = e[2] || "", this.C = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.C) throw "abort";
                                if (this.i && (!c(e) || "" == e)) throw "abort";
                                if (this.g && (!c(e) || "" == e || !s(t))) throw "abort";
                                if (Vn(this.c) || Vn(this.K)) throw "abort";
                                if (this.g && "t0" != this.c) throw "abort"
                            }
                        };

                    function Vn(t) {
                        return 0 <= t.indexOf(".") || 0 <= t.indexOf(":")
                    }
                    Mn = new E, On = new E, Nn = new E, Hn = {
                        ec: 45,
                        ecommerce: 46,
                        linkid: 47
                    };
                    var Fn = function(t, e, n) {
                            e == Gn || e.get(Te);
                            var o = Mn.get(t);
                            return !!s(o) && (e.plugins_ = e.plugins_ || new E, !!e.plugins_.get(t) || (e.plugins_.set(t, new o(e, n || {})), !0))
                        },
                        Bn = function(t, e, o, r, i) {
                            if (!s(Mn.get(e)) && !On.get(e)) {
                                if (Hn.hasOwnProperty(e) && n(Hn[e]), mn.test(e)) {
                                    if (n(52), !(t = Gn.j(t))) return !0;
                                    r = {
                                        id: e,
                                        B: (o = r || {}).dataLayer || "dataLayer",
                                        ia: !!t.get("anonymizeIp"),
                                        na: i,
                                        G: !1
                                    }, t.get("&gtm") == e && (r.G = !0);
                                    var a = String(t.get("name"));
                                    "t0" != a && (r.target = a), L(String(t.get("trackingId"))) || (r.ja = String(t.get(xe)), r.ka = Number(t.get(ke)), o = o.palindrome ? vn : gn, o = (o = x.cookie.replace(/^|(; +)/g, ";").match(o)) ? o.sort().join("").substring(1) : void 0, r.la = o, r.qa = w(t.b.get(Et) || "", "gclid")), t = r.B, o = (new Date).getTime(), T[t] = T[t] || [], o = {
                                        "gtm.start": o
                                    }, i || (o.event = "gtm.js"), T[t].push(o), o = function(t) {
                                        function e(t, e) {
                                            e && (n += "&" + t + "=" + h(e))
                                        }
                                        var n = "https://www.google-analytics.com/gtm/js?id=" + h(t.id);
                                        return "dataLayer" != t.B && e("l", t.B), e("t", t.target), e("cid", t.ja), e("cidt", t.ka), e("gac", t.la), e("aip", t.ia), t.na && e("m", "sync"), e("cycle", t.G), t.qa && e("gclid", t.qa), n
                                    }(r)
                                }!o && Hn.hasOwnProperty(e) ? (n(39), o = e + ".js") : n(43), o && (o && 0 <= o.indexOf("/") || (o = (dt || v() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + o), t = (r = Wn(o)).protocol, o = x.location.protocol, ("https:" == t || t == o || "http:" == t && "http:" == o) && Xn(r) && (g(r.url, void 0, i), On.set(e, !0)))
                            }
                        },
                        $n = function(t, e) {
                            var n = Nn.get(t) || [];
                            n.push(e), Nn.set(t, n)
                        },
                        Un = function(t, e) {
                            Mn.set(t, e), e = Nn.get(t) || [];
                            for (var n = 0; n < e.length; n++) e[n]();
                            Nn.set(t, [])
                        },
                        Xn = function(t) {
                            var e = Wn(x.location.href);
                            return !!l(t.url, "https://www.google-analytics.com/gtm/js?id=") || !(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) && (t.host == e.host && t.port == e.port || (e = "http:" == t.protocol ? 80 : 443, !("www.google-analytics.com" != t.host || (t.port || e) != e || !l(t.path, "/plugins/"))))
                        },
                        Wn = function(t) {
                            function e(t) {
                                var e = (t.hostname || "").split(":")[0].toLowerCase(),
                                    n = (t.protocol || "").toLowerCase();
                                n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                                return t = t.pathname || "", l(t, "/") || (t = "/" + t), [e, "" + n, t]
                            }
                            var n = x.createElement("a");
                            n.href = x.location.href;
                            var o = (n.protocol || "").toLowerCase(),
                                r = e(n),
                                i = n.search || "",
                                s = o + "//" + r[0] + (r[1] ? ":" + r[1] : "");
                            return l(t, "//") ? t = o + t : l(t, "/") ? t = s + t : !t || l(t, "?") ? t = s + r[2] + (t || i) : 0 > t.split("/")[0].indexOf(":") && (t = s + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + t), n.href = t, o = e(n), {
                                protocol: (n.protocol || "").toLowerCase(),
                                host: o[0],
                                port: o[1],
                                path: o[2],
                                query: n.search || "",
                                url: t || ""
                            }
                        },
                        Kn = {
                            ga: function() {
                                Kn.f = []
                            }
                        };
                    Kn.ga(), Kn.D = function(t) {
                        var e = Kn.J.apply(Kn, arguments);
                        e = Kn.f.concat(e);
                        for (Kn.f = []; 0 < e.length && !Kn.v(e[0]) && (e.shift(), !(0 < Kn.f.length)););
                        Kn.f = Kn.f.concat(e)
                    }, Kn.J = function(t) {
                        for (var e = [], n = 0; n < arguments.length; n++) try {
                            var o = new Rn(arguments[n]);
                            o.g ? Un(o.a[0], o.a[1]) : (o.i && (o.ha = Bn(o.c, o.a[0], o.X, o.W)), e.push(o))
                        } catch (ji) {}
                        return e
                    }, Kn.v = function(t) {
                        try {
                            if (t.u) t.u.call(T, Gn.j("t0"));
                            else {
                                var e = t.c == ut ? Gn : Gn.j(t.c);
                                if (t.A) "t0" != t.c || Gn.create.apply(Gn, t.a);
                                else if (t.ba) Gn.remove(t.c);
                                else if (e)
                                    if (t.i) {
                                        if (t.ha && (t.ha = Bn(t.c, t.a[0], t.X, t.W)), !Fn(t.a[0], e, t.W)) return !0
                                    } else if (t.K) {
                                    var n = t.C,
                                        o = t.a,
                                        r = e.plugins_.get(t.K);
                                    r[n].apply(r, o)
                                } else e[t.C].apply(e, t.a)
                            }
                        } catch (i) {}
                    };
                    var Gn = function(t) {
                        n(1), Kn.D.apply(Kn, [arguments])
                    };
                    Gn.h = {}, Gn.P = [], Gn.L = 0, Gn.answer = 42;
                    var Yn = [Ae, Se, Te];
                    Gn.create = function(t) {
                        var e = y(Yn, [].slice.call(arguments));
                        e[Te] || (e[Te] = "t0");
                        var n = "" + e[Te];
                        return Gn.h[n] ? Gn.h[n] : (e = new Sn(e), Gn.h[n] = e, Gn.P.push(e), e)
                    }, Gn.remove = function(t) {
                        for (var e = 0; e < Gn.P.length; e++)
                            if (Gn.P[e].get(Te) == t) {
                                Gn.P.splice(e, 1), Gn.h[t] = null;
                                break
                            }
                    }, Gn.j = function(t) {
                        return Gn.h[t]
                    }, Gn.getAll = function() {
                        return Gn.P.slice(0)
                    }, Gn.N = function() {
                        "ga" != ut && n(49);
                        var t = T[ut];
                        if (!t || 42 != t.answer) {
                            if (Gn.L = t && t.l, Gn.loaded = !0, Fe("create", e = T[ut] = Gn, e.create), Fe("remove", e, e.remove), Fe("getByName", e, e.j, 5), Fe("getAll", e, e.getAll, 6), Fe("get", e = Sn.prototype, e.get, 7), Fe("set", e, e.set, 4), Fe("send", e, e.send), Fe("requireSync", e, e.ma), Fe("get", e = Z.prototype, e.get), Fe("set", e, e.set), !v() && !dt) {
                                t: {
                                    for (var e = x.getElementsByTagName("script"), o = 0; o < e.length && 100 > o; o++) {
                                        var r = e[o].src;
                                        if (r && 0 == r.indexOf("https://www.google-analytics.com/analytics")) {
                                            n(33), e = !0;
                                            break t
                                        }
                                    }
                                    e = !1
                                }
                                e && (dt = !0)
                            }
                            v() || dt || !$e(new Be(1e4)) || (n(36), dt = !0), (T.gaplugins = T.gaplugins || {}).Linker = un, e = un.prototype, Un("linker", un), Fe("decorate", e, e.ca, 20), Fe("autoLink", e, e.S, 25), Un("displayfeatures", xn), Un("adfeatures", xn), t = t && t.q, a(t) ? Kn.D.apply(Gn, t) : n(50)
                        }
                    }, Gn.da = function() {
                        for (var t = Gn.getAll(), e = 0; e < t.length; e++) t[e].get(Te)
                    };
                    var zn = Gn.N,
                        Jn = T[ut];

                    function Zn(t) {
                        var e, n, o = 1;
                        if (t)
                            for (o = 0, n = t.length - 1; 0 <= n; n--) o = 0 != (e = 266338304 & (o = (o << 6 & 268435455) + (e = t.charCodeAt(n)) + (e << 14))) ? o ^ e >> 21 : o;
                        return o
                    }
                    Jn && Jn.r ? zn() : Pn(zn), Pn((function() {
                        Kn.D(["provide", "render", f])
                    }))
                }(window),
                function() {
                    var t = window,
                        e = "push",
                        n = "length",
                        o = "prototype",
                        r = function(t) {
                            if (t.get && t.set) {
                                this.clear();
                                var e = t.get("buildHitTask");
                                t.set("buildHitTask", d(this, e)), t.set("_rlt", f(this, t.get("_rlt")))
                            }
                        },
                        i = {
                            action: "pa",
                            promoAction: "promoa",
                            id: "ti",
                            affiliation: "ta",
                            revenue: "tr",
                            tax: "tt",
                            shipping: "ts",
                            coupon: "tcc",
                            step: "cos",
                            label: "col",
                            option: "col",
                            options: "col",
                            list: "pal",
                            listSource: "pls"
                        },
                        s = {
                            id: "id",
                            name: "nm",
                            brand: "br",
                            category: "ca",
                            variant: "va",
                            position: "ps",
                            price: "pr",
                            quantity: "qt",
                            coupon: "cc",
                            "dimension(\\d+)": "cd",
                            "metric(\\d+)": "cm"
                        },
                        a = {
                            id: "id",
                            name: "nm",
                            creative: "cr",
                            position: "ps"
                        },
                        c = function(t, e) {
                            this.name = t, this.source = e, this.e = []
                        },
                        l = "detail checkout checkout_option click add remove purchase refund".split(" ");
                    r[o].clear = function() {
                        this.b = void 0, this.f = [], this.a = [], this.g = [], this.d = void 0
                    }, r[o].h = function(t, e) {
                        var n = e || {};
                        "promo_click" == t ? n.promoAction = "click" : n.action = t, this.b = h(n)
                    }, r[o].j = function(t) {
                        (t = h(t)) && this.f[e](t)
                    }, r[o].i = function(t) {
                        var o = h(t);
                        if (o) {
                            var r, i = t.list || "";
                            t = t.listSource || "";
                            for (var s = 0; s < this.a[n]; s++)
                                if (this.a[s].name == i) {
                                    r = this.a[s];
                                    break
                                } r || (r = new c(i, t), this.a[e](r)), r.e[e](o)
                        }
                    }, r[o].c = function(t) {
                        (t = h(t)) && this.g[e](t)
                    };
                    var u = function(t, e, r) {
                        if ("[object Array]" == Object[o].toString.call(Object(t)))
                            for (var i = 0; i < t[n]; i++) e.call(r, t[i])
                    };
                    r[o].data = function(t) {
                        if (t && t.ecommerce) {
                            (t = t.ecommerce).promoView && u(t.promoView.promotions, this.c, this), t.promoClick && (this.h("promo_click", t.promoClick.actionField), u(t.promoClick.promotions, this.c, this));
                            for (var e = 0; e < l[n]; e++) {
                                var o = t[l[e]];
                                if (o) {
                                    this.h(l[e], o.actionField), u(o.products, this.j, this);
                                    break
                                }
                            }
                            u(t.impressions, this.i, this), t.currencyCode && (this.d = t.currencyCode)
                        }
                    };
                    var d = function(t, e) {
                            return function(o) {
                                var r, c, l;
                                for (t.b && p(i, t.b, o, "&"), r = 0; r < t.f[n]; r++) c = "&pr" + (r + 1), p(s, t.f[r], o, c);
                                for (r = 0; r < t.a[n]; r++) {
                                    c = "&il" + (r + 1), (l = t.a[r]).name && o.set(c + "nm", l.name, !0), l.source && o.set(c + "ls", l.source, !0);
                                    for (var u = 0; u < l.e[n]; u++) p(s, l.e[u], o, c + "pi" + (u + 1))
                                }
                                for (r = 0; r < t.g[n]; r++) c = "&promo" + (r + 1), p(a, t.g[r], o, c);
                                return t.d && o.set("&cu", t.d, !0), t.clear(), e(o)
                            }
                        },
                        f = function(t, e) {
                            return function(n) {
                                var o = t.b && t.b.action;
                                if ("purchase" != o && "refund" != o) return e(n)
                            }
                        },
                        h = function(t) {
                            var e = 0,
                                n = {};
                            if (t && "object" == typeof t)
                                for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o], e++);
                            return e ? n : void 0
                        },
                        p = function(t, e, n, o) {
                            for (var r in e)
                                if (e.hasOwnProperty(r))
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            var s = r.match("^" + i + "$");
                                            s && n.set(o + t[i] + s.slice(1).join(""), e[r], !0)
                                        }
                        };
                    ! function() {
                        t.gaplugins = t.gaplugins || {}, t.gaplugins.EC = r, r[o].setAction = r[o].h, r[o].addProduct = r[o].j, r[o].addImpression = r[o].i, r[o].addPromo = r[o].c, r[o].clear = r[o].clear, r[o].data = r[o].data;
                        var n = t.GoogleAnalyticsObject || "ga";
                        t[n] = t[n] || function() {
                            (t[n].q = t[n].q || [])[e](arguments)
                        }, t[n]("provide", "ec", r)
                    }()
                }(), window.ga || (window.ga = function() {
                    window.ga.q.push(arguments)
                }, window.ga.q = []);
            const Jr = "ontransitionend" in window;

            function Zr(t) {
                return "height" === getComputedStyle(t).transitionProperty
            }

            function Qr(t, e) {
                t.style.transition = "none", e(), t.offsetHeight, t.style.transition = ""
            }

            function ti(t, e) {
                const n = t.getAttribute("data-details-container") || ".js-details-container",
                    o = c(t, n);
                ! function(t, e) {
                    if (!Jr) return void e();
                    const n = Array.from(t.querySelectorAll(".js-transitionable"));
                    t.classList.contains("js-transitionable") && n.push(t);
                    for (const o of n) {
                        const t = Zr(o);
                        o instanceof HTMLElement && (o.addEventListener("transitionend", () => {
                            o.style.display = "", o.style.visibility = "", t && Qr(o, (function() {
                                o.style.height = ""
                            }))
                        }, {
                            once: !0
                        }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", t && Qr(o, (function() {
                            o.style.height = getComputedStyle(o).height
                        })), o.offsetHeight)
                    }
                    e();
                    for (const o of n)
                        if (o instanceof HTMLElement && Zr(o)) {
                            const t = getComputedStyle(o).height;
                            o.style.boxSizing = "", o.style.height = "0px" === t ? `${o.scrollHeight}px` : "0px"
                        }
                }(o, () => {
                    const n = null != e ? e : !o.classList.contains("open");
                    o.classList.toggle("open", n), o.classList.toggle("Details--on", n), t.setAttribute("aria-expanded", n.toString()), Promise.resolve().then(() => {
                        ! function(t) {
                            const e = t.querySelectorAll("input[autofocus], textarea[autofocus]"),
                                n = e[e.length - 1];
                            n instanceof HTMLElement && document.activeElement !== n && n.focus()
                        }(o),
                        function(t) {
                            t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"), t.addEventListener("mouseleave", () => {
                                t.classList.add("tooltipped"), t instanceof HTMLElement && t.blur()
                            }, {
                                once: !0
                            }))
                        }(t),
                        function(t) {
                            const e = t.closest(".js-edit-repository-meta");
                            e instanceof HTMLFormElement && e.reset()
                        }(t);
                        const e = new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: o.classList.contains("Details--on")
                            }
                        });
                        o.dispatchEvent(e)
                    })
                })
            }

            function ei(t) {
                let e = !1,
                    n = t.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (e = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !e), n.classList.toggle("Details--on", !e), e = !1), n = n.parentElement
            }

            function ni(t) {
                let e = t;
                const n = e.ownerDocument;
                if (!n) return;
                if (!e.offsetParent) return;
                const o = n.defaultView.HTMLElement;
                if (e !== n.body) {
                    for (; e !== n.body;) {
                        if (!(e.parentElement instanceof o)) return;
                        e = e.parentElement;
                        const {
                            position: t,
                            overflowY: n,
                            overflowX: r
                        } = getComputedStyle(e);
                        if ("fixed" === t || "auto" === n || "auto" === r || "scroll" === n || "scroll" === r) break
                    }
                    return e instanceof Document ? null : e
                }
            }

            function oi(t, e) {
                let n = e;
                const o = t.ownerDocument;
                if (!o) return;
                if (!o.body) return;
                const r = o.documentElement;
                if (!r) return;
                if (t === r) return;
                const i = ri(t, n);
                if (!i) return;
                n = i._container;
                const s = n === o.documentElement ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    a = i.top - s.top,
                    c = i.left - s.left,
                    l = n.clientHeight,
                    u = n.clientWidth;
                return {
                    top: a,
                    left: c,
                    bottom: l - (a + t.offsetHeight),
                    right: u - (c + t.offsetWidth),
                    height: l,
                    width: u
                }
            }

            function ri(t, e) {
                let n = t;
                const o = n.ownerDocument;
                if (!o) return;
                const r = o.documentElement;
                if (!r) return;
                const i = o.body;
                if (!i) return;
                const s = o.defaultView.HTMLElement;
                let a = 0,
                    c = 0;
                const l = n.offsetHeight,
                    u = n.offsetWidth;
                for (; n !== o.body && n !== e;) {
                    if (a += n.offsetTop || 0, c += n.offsetLeft || 0, !(n.offsetParent instanceof s)) return;
                    n = n.offsetParent
                }
                let d, f, h;
                if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
                    if (!(e instanceof s)) return;
                    h = e, d = e.scrollHeight, f = e.scrollWidth
                } else h = r, d = function(t, e) {
                    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight)
                }(i, r), f = function(t, e) {
                    return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth)
                }(i, r);
                return {
                    top: a,
                    left: c,
                    bottom: d - (a + l),
                    right: f - (c + u),
                    _container: h
                }
            }

            function ii(t, e) {
                let n = t;
                const o = t.ownerDocument;
                n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
                const r = o.defaultView.Document,
                    i = o.defaultView.HTMLElement;
                if (n instanceof r) {
                    const t = null != e.top ? e.top : o.defaultView.pageYOffset,
                        n = null != e.left ? e.left : o.defaultView.pageXOffset;
                    o.defaultView.scrollTo(n, t)
                } else {
                    if (!(n instanceof i)) throw new Error("invariant: container is not HTMLElement -- app/assets/modules/github/scrollto.js:23");
                    n.scrollTop = e.top, null != e.left && (n.scrollLeft = e.left)
                }
            }
            Ht("click", ".js-details-target", (function(t) {
                const {
                    currentTarget: e
                } = t;
                e instanceof HTMLElement && (ti(e), t.preventDefault())
            })), Ir((function({
                target: t
            }) {
                t && ei(t)
            }));
            const si = navigator.userAgent.match(/Macintosh/),
                ai = si ? "metaKey" : "ctrlKey",
                ci = si ? "Meta" : "Control";
            let li = !1,
                ui = {
                    x: 0,
                    y: 0
                };

            function di(t) {
                t instanceof MouseEvent && (ui.x === t.clientX && ui.y === t.clientY || (li = !1), ui = {
                    x: t.clientX,
                    y: t.clientY
                })
            }

            function fi(t) {
                if (li) return;
                const e = t.currentTarget,
                    {
                        target: n
                    } = t;
                if (!(n instanceof Element && e instanceof HTMLElement && e.closest(".js-active-navigation-container"))) return;
                const o = n.closest(".js-navigation-item");
                o && xi(o, e)
            }
            me(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: t => Oo(Ho(t, "mouseover", di), Ho(t, "mouseover", fi))
            });
            let hi = 0;

            function pi(t) {
                if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains("js-navigation-enable")) return;
                li = !0;
                const e = ki();
                let n = !1;
                if (e) {
                    n = Ot(e.querySelector('.js-navigation-item[aria-selected="true"]') || e, "navigation:keydown", {
                        hotkey: Eo(t),
                        originalEvent: t,
                        originalTarget: t.target
                    })
                }
                n || t.preventDefault()
            }

            function mi(t) {
                Ot(t.currentTarget, "navigation:open", {
                    modifierKey: t.modifierKey || t.altKey || t.ctrlKey || t.metaKey,
                    shiftKey: t.shiftKey
                }) || t.preventDefault()
            }

            function gi(t) {
                const e = ki();
                t !== e && (e && vi(e), t.classList.add("js-active-navigation-container"))
            }

            function vi(t) {
                t.classList.remove("js-active-navigation-container")
            }

            function wi(t, e) {
                e || (e = t);
                const n = Li(t)[0],
                    o = e.closest(".js-navigation-item") || n;
                if (gi(t), o instanceof HTMLElement) {
                    if (xi(o, t)) return;
                    const e = ni(o);
                    if (!e) throw new Error("invariant: app/assets/modules/github/navigation.js:481");
                    Si(e, o)
                }
            }

            function bi(t) {
                const e = t.querySelectorAll(".js-navigation-item[aria-selected]");
                for (const n of e) n.classList.remove("navigation-focus"), n.setAttribute("aria-selected", "false")
            }

            function yi(t, e) {
                const n = Li(e),
                    o = n.indexOf(t),
                    r = n[o - 1];
                if (r) {
                    if (xi(r, e)) return;
                    const t = ni(r);
                    if (!t) throw new Error("invariant: app/assets/modules/github/navigation.js:529");
                    "page" === Ai(e) ? _i(t, r) : Si(t, r)
                }
            }

            function Ei(t, e) {
                const n = Li(e),
                    o = n.indexOf(t),
                    r = n[o + 1];
                if (r) {
                    if (xi(r, e)) return;
                    const t = ni(r);
                    if (!t) throw new Error("invariant: app/assets/modules/github/navigation.js:558");
                    "page" === Ai(e) ? _i(t, r) : Si(t, r)
                }
            }

            function Ti(t, e = !1) {
                Ot(t, "navigation:keyopen", {
                    modifierKey: e
                })
            }

            function xi(t, e) {
                return !Ot(t, "navigation:focus") || (bi(e), t.classList.add("navigation-focus"), t.setAttribute("aria-selected", "true"), !1)
            }

            function ki() {
                return document.querySelector(".js-active-navigation-container")
            }

            function Li(t) {
                return Array.from(t.querySelectorAll(".js-navigation-item")).filter(Hr)
            }

            function Ai(t) {
                return t.getAttribute("data-navigation-scroll") || "item"
            }

            function _i(t, e, n = "smooth") {
                const o = oi(e, t);
                o && (o.bottom <= 0 ? e.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : o.top <= 0 && e.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }

            function Si(t, e) {
                const n = ri(e, t),
                    o = oi(e, t);
                if (null != n && null != o)
                    if (o.bottom <= 0 && document.body) {
                        ii(t, {
                            top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                        })
                    } else o.top <= 0 && ii(t, {
                        top: n.top
                    })
            }
            me(".js-active-navigation-container", {
                add() {
                    hi++, 1 === hi && document.addEventListener("keydown", pi)
                },
                remove() {
                    hi--, 0 === hi && document.removeEventListener("keydown", pi)
                }
            }), Ht("navigation:keydown", ".js-active-navigation-container", (function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:208");
                const e = t.currentTarget,
                    n = t.detail.originalTarget.matches("input, textarea"),
                    o = t.target;
                if (o.classList.contains("js-navigation-item"))
                    if (n) {
                        if (si) switch (Eo(t.detail.originalEvent)) {
                            case "Control+n":
                                Ei(o, e);
                                break;
                            case "Control+p":
                                yi(o, e)
                        }
                        switch (Eo(t.detail.originalEvent)) {
                            case "ArrowUp":
                                yi(o, e);
                                break;
                            case "ArrowDown":
                                Ei(o, e);
                                break;
                            case "Enter":
                            case `${ci}+Enter`:
                                Ti(o, t.detail.originalEvent[ai])
                        }
                    } else {
                        if (si) switch (Eo(t.detail.originalEvent)) {
                            case "Control+n":
                                Ei(o, e);
                                break;
                            case "Control+p":
                                yi(o, e);
                                break;
                            case "Alt+v":
                                ! function(t, e) {
                                    const n = Li(e);
                                    let o = n.indexOf(t);
                                    const r = ni(t);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o - 1]) && (s = oi(i, r)) && s.top >= 0;) o--;
                                    if (i) {
                                        if (xi(i, e)) return;
                                        _i(r, i)
                                    }
                                }(o, e);
                                break;
                            case "Control+v":
                                ! function(t, e) {
                                    const n = Li(e);
                                    let o = n.indexOf(t);
                                    const r = ni(t);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o + 1]) && (s = oi(i, r)) && s.bottom >= 0;) o++;
                                    if (i) {
                                        if (xi(i, e)) return;
                                        _i(r, i)
                                    }
                                }(o, e)
                        }
                        switch (Eo(t.detail.originalEvent)) {
                            case "j":
                            case "J":
                                Ei(o, e);
                                break;
                            case "k":
                            case "K":
                                yi(o, e);
                                break;
                            case "o":
                            case "Enter":
                            case `${ci}+Enter`:
                                Ti(o, t.detail[ai])
                        }
                    }
                else {
                    const o = Li(e)[0];
                    if (o)
                        if (n) {
                            if (si) switch (Eo(t.detail.originalEvent)) {
                                case "Control+n":
                                    xi(o, e)
                            }
                            switch (Eo(t.detail.originalEvent)) {
                                case "ArrowDown":
                                    xi(o, e)
                            }
                        } else {
                            if (si) switch (Eo(t.detail.originalEvent)) {
                                case "Control+n":
                                case "Control+v":
                                    xi(o, e)
                            }
                            switch (Eo(t.detail.originalEvent)) {
                                case "j":
                                    xi(o, e)
                            }
                        }
                }
                if (n) {
                    if (si) switch (Eo(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                            t.preventDefault()
                    }
                    switch (Eo(t.detail.originalEvent)) {
                        case "ArrowUp":
                        case "ArrowDown":
                            t.preventDefault();
                            break;
                        case "Enter":
                            t.preventDefault()
                    }
                } else {
                    if (si) switch (Eo(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                        case "Control+v":
                        case "Alt+v":
                            t.preventDefault()
                    }
                    switch (Eo(t.detail.originalEvent)) {
                        case "j":
                        case "k":
                            t.preventDefault();
                            break;
                        case "o":
                        case "Enter":
                        case `${ai}+Enter`:
                            t.preventDefault()
                    }
                }
            })), Ht("click", ".js-active-navigation-container .js-navigation-item", (function(t) {
                if (!(t instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:379");
                mi(t)
            })), Ht("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", (function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/navigation.js:384");
                const e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");
                if (e) {
                    if (t.detail.modifierKey) window.open(e.href, "_blank"), window.focus();
                    else {
                        e.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })) && e.click()
                    }
                    t.preventDefault()
                } else mi(t)
            }));
            var Ci = on((function(t) {
                /**!
                 * Sortable
                 * @author	RubaXa   <trash@rubaxa.org>
                 * @license MIT
                 */
                var e;
                e = function() {
                    if ("undefined" == typeof window || !window.document) return function() {
                        throw new Error("Sortable.js requires a window with a document")
                    };
                    var t, e, n, o, r, i, s, a, c, l, u, d, f, h, p, m, g, v, w, b, y, E = {},
                        T = /\s+/g,
                        x = /left|right|inline/,
                        k = "Sortable" + (new Date).getTime(),
                        L = window,
                        A = L.document,
                        _ = L.parseInt,
                        S = L.setTimeout,
                        C = L.jQuery || L.Zepto,
                        j = L.Polymer,
                        D = !1,
                        M = "draggable" in A.createElement("div"),
                        H = function(t) {
                            return !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((t = A.createElement("x")).style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents)
                        }(),
                        O = !1,
                        N = Math.abs,
                        I = Math.min,
                        P = [],
                        q = [],
                        R = function() {
                            return !1
                        },
                        V = rt((function(t, e, n) {
                            if (n && e.scroll) {
                                var o, r, i, s, a, d, f = n[k],
                                    h = e.scrollSensitivity,
                                    p = e.scrollSpeed,
                                    m = t.clientX,
                                    g = t.clientY,
                                    v = window.innerWidth,
                                    w = window.innerHeight;
                                if (l !== n && (c = e.scroll, l = n, u = e.scrollFn, !0 === c)) {
                                    c = n;
                                    do {
                                        if (c.offsetWidth < c.scrollWidth || c.offsetHeight < c.scrollHeight) break
                                    } while (c = c.parentNode)
                                }
                                c && (o = c, r = c.getBoundingClientRect(), i = (N(r.right - m) <= h) - (N(r.left - m) <= h), s = (N(r.bottom - g) <= h) - (N(r.top - g) <= h)), i || s || (s = (w - g <= h) - (g <= h), ((i = (v - m <= h) - (m <= h)) || s) && (o = L)), E.vx === i && E.vy === s && E.el === o || (E.el = o, E.vx = i, E.vy = s, clearInterval(E.pid), o && (E.pid = setInterval((function() {
                                    if (d = s ? s * p : 0, a = i ? i * p : 0, "function" == typeof u) return u.call(f, a, d, t);
                                    o === L ? L.scrollTo(L.pageXOffset + a, L.pageYOffset + d) : (o.scrollTop += d, o.scrollLeft += a)
                                }), 24)))
                            }
                        }), 30),
                        F = function(t) {
                            function e(t, e) {
                                return null != t && !0 !== t || null != (t = n.name) ? "function" == typeof t ? t : function(n, o) {
                                    var r = o.options.group.name;
                                    return e ? t : t && (t.join ? t.indexOf(r) > -1 : r == t)
                                } : R
                            }
                            var n = {},
                                o = t.group;
                            o && "object" == typeof o || (o = {
                                name: o
                            }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n
                        };
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                D = {
                                    capture: !1,
                                    passive: !1
                                }
                            }
                        }))
                    } catch (ct) {}

                    function B(t, e) {
                        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                        this.el = t, this.options = e = it({}, e), t[k] = this;
                        var n = {
                            group: null,
                            sort: !0,
                            disabled: !1,
                            store: null,
                            handle: null,
                            scroll: !0,
                            scrollSensitivity: 30,
                            scrollSpeed: 10,
                            draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                            ghostClass: "sortable-ghost",
                            chosenClass: "sortable-chosen",
                            dragClass: "sortable-drag",
                            ignore: "a, img",
                            filter: null,
                            preventOnFilter: !0,
                            animation: 0,
                            setData: function(t, e) {
                                t.setData("Text", e.textContent)
                            },
                            dropBubble: !1,
                            dragoverBubble: !1,
                            dataIdAttr: "data-id",
                            delay: 0,
                            forceFallback: !1,
                            fallbackClass: "sortable-fallback",
                            fallbackOnBody: !1,
                            fallbackTolerance: 0,
                            fallbackOffset: {
                                x: 0,
                                y: 0
                            },
                            supportPointer: !1 !== B.supportPointer
                        };
                        for (var o in n) !(o in e) && (e[o] = n[o]);
                        for (var r in F(e), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
                        this.nativeDraggable = !e.forceFallback && M, W(t, "mousedown", this._onTapStart), W(t, "touchstart", this._onTapStart), e.supportPointer && W(t, "pointerdown", this._onTapStart), this.nativeDraggable && (W(t, "dragover", this), W(t, "dragenter", this)), q.push(this._onDragOver), e.store && this.sort(e.store.get(this))
                    }

                    function $(e, n) {
                        "clone" !== e.lastPullMode && (n = !0), r && r.state !== n && (Y(r, "display", n ? "none" : ""), n || r.state && (e.options.group.revertClone ? (i.insertBefore(r, s), e._animate(t, r)) : i.insertBefore(r, t)), r.state = n)
                    }

                    function U(t, e, n) {
                        if (t) {
                            n = n || A;
                            do {
                                if (">*" === e && t.parentNode === n || ot(t, e)) return t
                            } while (t = X(t))
                        }
                        return null
                    }

                    function X(t) {
                        var e = t.host;
                        return e && e.nodeType ? e : t.parentNode
                    }

                    function W(t, e, n) {
                        t.addEventListener(e, n, D)
                    }

                    function K(t, e, n) {
                        t.removeEventListener(e, n, D)
                    }

                    function G(t, e, n) {
                        if (t)
                            if (t.classList) t.classList[n ? "add" : "remove"](e);
                            else {
                                var o = (" " + t.className + " ").replace(T, " ").replace(" " + e + " ", " ");
                                t.className = (o + (n ? " " + e : "")).replace(T, " ")
                            }
                    }

                    function Y(t, e, n) {
                        var o = t && t.style;
                        if (o) {
                            if (void 0 === n) return A.defaultView && A.defaultView.getComputedStyle ? n = A.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                            e in o || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px")
                        }
                    }

                    function z(t, e, n) {
                        if (t) {
                            var o = t.getElementsByTagName(e),
                                r = 0,
                                i = o.length;
                            if (n)
                                for (; r < i; r++) n(o[r], r);
                            return o
                        }
                        return []
                    }

                    function J(t, e, n, o, i, s, a, c) {
                        t = t || e[k];
                        var l = A.createEvent("Event"),
                            u = t.options,
                            d = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                        l.initEvent(n, !0, !0), l.to = i || e, l.from = s || e, l.item = o || e, l.clone = r, l.oldIndex = a, l.newIndex = c, e.dispatchEvent(l), u[d] && u[d].call(t, l)
                    }

                    function Z(t, e, n, o, r, i, s, a) {
                        var c, l, u = t[k],
                            d = u.options.onMove;
                        return (c = A.createEvent("Event")).initEvent("move", !0, !0), c.to = e, c.from = t, c.dragged = n, c.draggedRect = o, c.related = r || e, c.relatedRect = i || e.getBoundingClientRect(), c.willInsertAfter = a, t.dispatchEvent(c), d && (l = d.call(u, c, s)), l
                    }

                    function Q(t) {
                        t.draggable = !1
                    }

                    function tt() {
                        O = !1
                    }

                    function et(t) {
                        for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) o += e.charCodeAt(n);
                        return o.toString(36)
                    }

                    function nt(t, e) {
                        var n = 0;
                        if (!t || !t.parentNode) return -1;
                        for (; t && (t = t.previousElementSibling);) "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !ot(t, e) || n++;
                        return n
                    }

                    function ot(t, e) {
                        if (t) {
                            var n = (e = e.split(".")).shift().toUpperCase(),
                                o = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
                            return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(o) || []).length != e.length)
                        }
                        return !1
                    }

                    function rt(t, e) {
                        var n, o;
                        return function() {
                            void 0 === n && (n = arguments, o = this, S((function() {
                                1 === n.length ? t.call(o, n[0]) : t.apply(o, n), n = void 0
                            }), e))
                        }
                    }

                    function it(t, e) {
                        if (t && e)
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t
                    }

                    function st(t) {
                        return S(t, 0)
                    }

                    function at(t) {
                        return clearTimeout(t)
                    }
                    return B.prototype = {
                        constructor: B,
                        _onTapStart: function(e) {
                            var n, o = this,
                                r = this.el,
                                i = this.options,
                                s = i.preventOnFilter,
                                c = e.type,
                                l = e.touches && e.touches[0],
                                u = (l || e).target,
                                d = e.target.shadowRoot && e.path && e.path[0] || u,
                                f = i.filter;
                            if (function(t) {
                                    P.length = 0;
                                    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
                                        var o = e[n];
                                        o.checked && P.push(o)
                                    }
                                }(r), !t && !(/mousedown|pointerdown/.test(c) && 0 !== e.button || i.disabled) && !d.isContentEditable && (u = U(u, i.draggable, r)) && a !== u) {
                                if (n = nt(u, i.draggable), "function" == typeof f) {
                                    if (f.call(this, e, u, this)) return J(o, d, "filter", u, r, r, n), void(s && e.preventDefault())
                                } else if (f && (f = f.split(",").some((function(t) {
                                        if (t = U(d, t.trim(), r)) return J(o, t, "filter", u, r, r, n), !0
                                    })))) return void(s && e.preventDefault());
                                i.handle && !U(d, i.handle, r) || this._prepareDragStart(e, l, u, n)
                            }
                        },
                        _prepareDragStart: function(o, r, c, l) {
                            var u, d = this,
                                f = d.el,
                                h = d.options,
                                m = f.ownerDocument;
                            c && !t && c.parentNode === f && (w = o, i = f, t = c, h.handleReplacedDragElement && (e = c.getAttribute("id")), n = t.parentNode, s = t.nextSibling, a = c, g = h.group, p = l, this._lastX = (r || o).clientX, this._lastY = (r || o).clientY, t.style["will-change"] = "all", u = function() {
                                d._disableDelayedDrag(), t.draggable = d.nativeDraggable, G(t, h.chosenClass, !0), d._triggerDragStart(o, r), J(d, i, "choose", t, i, i, p)
                            }, h.ignore.split(",").forEach((function(e) {
                                z(t, e.trim(), Q)
                            })), W(m, "mouseup", d._onDrop), W(m, "touchend", d._onDrop), W(m, "touchcancel", d._onDrop), W(m, "selectstart", d), h.supportPointer && W(m, "pointercancel", d._onDrop), h.delay ? (W(m, "mouseup", d._disableDelayedDrag), W(m, "touchend", d._disableDelayedDrag), W(m, "touchcancel", d._disableDelayedDrag), W(m, "mousemove", d._disableDelayedDrag), W(m, "touchmove", d._disableDelayedDrag), h.supportPointer && W(m, "pointermove", d._disableDelayedDrag), d._dragStartTimer = S(u, h.delay)) : u())
                        },
                        _disableDelayedDrag: function() {
                            var t = this.el.ownerDocument;
                            clearTimeout(this._dragStartTimer), K(t, "mouseup", this._disableDelayedDrag), K(t, "touchend", this._disableDelayedDrag), K(t, "touchcancel", this._disableDelayedDrag), K(t, "mousemove", this._disableDelayedDrag), K(t, "touchmove", this._disableDelayedDrag), K(t, "pointermove", this._disableDelayedDrag)
                        },
                        _triggerDragStart: function(e, n) {
                            (n = n || ("touch" == e.pointerType ? e : null)) ? (w = {
                                target: t,
                                clientX: n.clientX,
                                clientY: n.clientY
                            }, this._onDragStart(w, "touch")) : this.nativeDraggable ? (W(t, "dragend", this), W(i, "dragstart", this._onDragStart)) : this._onDragStart(w, !0);
                            try {
                                A.selection ? st((function() {
                                    A.selection.empty()
                                })) : window.getSelection().removeAllRanges()
                            } catch (ct) {}
                        },
                        _dragStarted: function() {
                            if (i && t) {
                                var e = this.options;
                                G(t, e.ghostClass, !0), G(t, e.dragClass, !1), B.active = this, J(this, i, "start", t, i, i, p)
                            } else this._nulling()
                        },
                        _emulateDragOver: function() {
                            if (b) {
                                if (this._lastX === b.clientX && this._lastY === b.clientY) return;
                                this._lastX = b.clientX, this._lastY = b.clientY, H || Y(o, "display", "none");
                                var t = A.elementFromPoint(b.clientX, b.clientY),
                                    e = t,
                                    n = q.length;
                                if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(b.clientX, b.clientY)), e)
                                    do {
                                        if (e[k]) {
                                            for (; n--;) q[n]({
                                                clientX: b.clientX,
                                                clientY: b.clientY,
                                                target: t,
                                                rootEl: e
                                            });
                                            break
                                        }
                                        t = e
                                    } while (e = e.parentNode);
                                H || Y(o, "display", "")
                            }
                        },
                        _onTouchMove: function(t) {
                            if (w) {
                                var e = this.options,
                                    n = e.fallbackTolerance,
                                    r = e.fallbackOffset,
                                    i = t.touches ? t.touches[0] : t,
                                    s = i.clientX - w.clientX + r.x,
                                    a = i.clientY - w.clientY + r.y,
                                    c = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                                if (!B.active) {
                                    if (n && I(N(i.clientX - this._lastX), N(i.clientY - this._lastY)) < n) return;
                                    this._dragStarted()
                                }
                                this._appendGhost(), y = !0, b = i, Y(o, "webkitTransform", c), Y(o, "mozTransform", c), Y(o, "msTransform", c), Y(o, "transform", c), t.preventDefault()
                            }
                        },
                        _appendGhost: function() {
                            if (!o) {
                                var e, n = t.getBoundingClientRect(),
                                    r = Y(t),
                                    s = this.options;
                                G(o = t.cloneNode(!0), s.ghostClass, !1), G(o, s.fallbackClass, !0), G(o, s.dragClass, !0), Y(o, "top", n.top - _(r.marginTop, 10)), Y(o, "left", n.left - _(r.marginLeft, 10)), Y(o, "width", n.width), Y(o, "height", n.height), Y(o, "opacity", "0.8"), Y(o, "position", "fixed"), Y(o, "zIndex", "100000"), Y(o, "pointerEvents", "none"), s.fallbackOnBody && A.body.appendChild(o) || i.appendChild(o), e = o.getBoundingClientRect(), Y(o, "width", 2 * n.width - e.width), Y(o, "height", 2 * n.height - e.height)
                            }
                        },
                        _onDragStart: function(e, n) {
                            var o = e.dataTransfer,
                                r = this.options;
                            this._offUpEvents(), g.checkPull(this, this, t, e), G(t, r.dragClass, !0), n ? ("touch" === n ? (W(A, "touchmove", this._onTouchMove), W(A, "touchend", this._onDrop), W(A, "touchcancel", this._onDrop), r.supportPointer && (W(A, "pointermove", this._onTouchMove), W(A, "pointerup", this._onDrop))) : (W(A, "mousemove", this._onTouchMove), W(A, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (o && (o.effectAllowed = "move", r.setData && r.setData.call(this, o, t)), W(A, "drop", this), this._dragStartId = st(this._dragStarted))
                        },
                        _onDragOver: function(a) {
                            var c, l, u, p, m = this.el,
                                w = this.options,
                                b = w.group,
                                E = B.active,
                                T = g === b,
                                L = !1,
                                _ = w.sort;
                            if (void 0 !== a.preventDefault && (a.preventDefault(), !w.dragoverBubble && a.stopPropagation()), !t.animated && (y = !0, w.handleReplacedDragElement && !t.parentNode && e && G(t = A.getElementById(e) || t, this.options.ghostClass, !0), E && !w.disabled && (T ? _ || (p = !i.contains(t)) : v === this || (E.lastPullMode = g.checkPull(this, E, t, a)) && b.checkPut(this, E, t, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                                if (V(a, w, this.el), O) return;
                                if (c = U(a.target, w.draggable, m), l = t.getBoundingClientRect(), v !== this && (v = this, L = !0), p) return $(E, !0), n = i, void(r || s ? i.insertBefore(t, r || s) : _ || i.appendChild(t));
                                if (0 === m.children.length || m.children[0] === o || m === a.target && function(t, e) {
                                        var n = t.lastElementChild.getBoundingClientRect();
                                        return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                                    }(m, a)) {
                                    if (0 !== m.children.length && m.children[0] !== o && m === a.target && (c = m.lastElementChild), c) {
                                        if (c.animated) return;
                                        u = c.getBoundingClientRect()
                                    }
                                    $(E, T), !1 !== Z(i, m, t, l, c, u, a) && (t.contains(m) || (m.appendChild(t), n = m), this._animate(l, t), c && this._animate(u, c))
                                } else if (c && !c.animated && c !== t && void 0 !== c.parentNode[k]) {
                                    d !== c && (d = c, f = Y(c), h = Y(c.parentNode));
                                    var C = (u = c.getBoundingClientRect()).right - u.left,
                                        j = u.bottom - u.top,
                                        D = x.test(f.cssFloat + f.display) || "flex" == h.display && 0 === h["flex-direction"].indexOf("row"),
                                        M = c.offsetWidth > t.offsetWidth,
                                        H = c.offsetHeight > t.offsetHeight,
                                        N = (D ? (a.clientX - u.left) / C : (a.clientY - u.top) / j) > .5,
                                        I = c.nextElementSibling,
                                        P = !1;
                                    if (D) {
                                        var q = t.offsetTop,
                                            R = c.offsetTop;
                                        P = q === R ? c.previousElementSibling === t && !M || N && M : c.previousElementSibling === t || t.previousElementSibling === c ? (a.clientY - u.top) / j > .5 : R > q
                                    } else L || (P = I !== t && !H || N && H);
                                    var F = Z(i, m, t, l, c, u, a, P);
                                    !1 !== F && (1 !== F && -1 !== F || (P = 1 === F), O = !0, S(tt, 30), $(E, T), t.contains(m) || (P && !I ? m.appendChild(t) : c.parentNode.insertBefore(t, P ? I : c)), n = t.parentNode, this._animate(l, t), this._animate(u, c))
                                }
                            }
                        },
                        _animate: function(t, e) {
                            var n = this.options.animation;
                            if (n) {
                                var o = e.getBoundingClientRect();
                                1 === t.nodeType && (t = t.getBoundingClientRect()), Y(e, "transition", "none"), Y(e, "transform", "translate3d(" + (t.left - o.left) + "px," + (t.top - o.top) + "px,0)"), e.offsetWidth, Y(e, "transition", "all " + n + "ms"), Y(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = S((function() {
                                    Y(e, "transition", ""), Y(e, "transform", ""), e.animated = !1
                                }), n)
                            }
                        },
                        _offUpEvents: function() {
                            var t = this.el.ownerDocument;
                            K(A, "touchmove", this._onTouchMove), K(A, "pointermove", this._onTouchMove), K(t, "mouseup", this._onDrop), K(t, "touchend", this._onDrop), K(t, "pointerup", this._onDrop), K(t, "touchcancel", this._onDrop), K(t, "pointercancel", this._onDrop), K(t, "selectstart", this)
                        },
                        _onDrop: function(e) {
                            var a = this.el,
                                c = this.options;
                            clearInterval(this._loopId), clearInterval(E.pid), clearTimeout(this._dragStartTimer), at(this._cloneId), at(this._dragStartId), K(A, "mouseover", this), K(A, "mousemove", this._onTouchMove), this.nativeDraggable && (K(A, "drop", this), K(a, "dragstart", this._onDragStart)), this._offUpEvents(), e && (y && (e.preventDefault(), !c.dropBubble && e.stopPropagation()), o && o.parentNode && o.parentNode.removeChild(o), i !== n && "clone" === B.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r), t && (this.nativeDraggable && K(t, "dragend", this), Q(t), t.style["will-change"] = "", G(t, this.options.ghostClass, !1), G(t, this.options.chosenClass, !1), J(this, i, "unchoose", t, n, i, p), i !== n ? (m = nt(t, c.draggable)) >= 0 && (J(null, n, "add", t, n, i, p, m), J(this, i, "remove", t, n, i, p, m), J(null, n, "sort", t, n, i, p, m), J(this, i, "sort", t, n, i, p, m)) : t.nextSibling !== s && (m = nt(t, c.draggable)) >= 0 && (J(this, i, "update", t, n, i, p, m), J(this, i, "sort", t, n, i, p, m)), B.active && (null != m && -1 !== m || (m = p), J(this, i, "end", t, n, i, p, m), this.save()))), this._nulling()
                        },
                        _nulling: function() {
                            i = t = n = o = s = r = a = c = l = w = b = y = m = d = f = v = g = B.active = null, P.forEach((function(t) {
                                t.checked = !0
                            })), P.length = 0
                        },
                        handleEvent: function(e) {
                            switch (e.type) {
                                case "drop":
                                case "dragend":
                                    this._onDrop(e);
                                    break;
                                case "dragover":
                                case "dragenter":
                                    t && (this._onDragOver(e), function(t) {
                                        t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.preventDefault()
                                    }(e));
                                    break;
                                case "mouseover":
                                    this._onDrop(e);
                                    break;
                                case "selectstart":
                                    e.preventDefault()
                            }
                        },
                        toArray: function() {
                            for (var t, e = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) U(t = n[o], i.draggable, this.el) && e.push(t.getAttribute(i.dataIdAttr) || et(t));
                            return e
                        },
                        sort: function(t) {
                            var e = {},
                                n = this.el;
                            this.toArray().forEach((function(t, o) {
                                var r = n.children[o];
                                U(r, this.options.draggable, n) && (e[t] = r)
                            }), this), t.forEach((function(t) {
                                e[t] && (n.removeChild(e[t]), n.appendChild(e[t]))
                            }))
                        },
                        save: function() {
                            var t = this.options.store;
                            t && t.set(this)
                        },
                        closest: function(t, e) {
                            return U(t, e || this.options.draggable, this.el)
                        },
                        option: function(t, e) {
                            var n = this.options;
                            if (void 0 === e) return n[t];
                            n[t] = e, "group" === t && F(n)
                        },
                        destroy: function() {
                            var t = this.el;
                            t[k] = null, K(t, "mousedown", this._onTapStart), K(t, "touchstart", this._onTapStart), K(t, "pointerdown", this._onTapStart), this.nativeDraggable && (K(t, "dragover", this), K(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                                t.removeAttribute("draggable")
                            })), q.splice(q.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null
                        }
                    }, W(A, "touchmove", (function(t) {
                        B.active && t.preventDefault()
                    })), B.utils = {
                        on: W,
                        off: K,
                        css: Y,
                        find: z,
                        is: function(t, e) {
                            return !!U(t, e, t)
                        },
                        extend: it,
                        throttle: rt,
                        closest: U,
                        toggleClass: G,
                        clone: function(t) {
                            return j && j.dom ? j.dom(t).cloneNode(!0) : C ? C(t).clone(!0)[0] : t.cloneNode(!0)
                        },
                        index: nt,
                        nextTick: st,
                        cancelNextTick: at
                    }, B.create = function(t, e) {
                        return new B(t, e)
                    }, B.version = "1.7.0", B
                }, t.exports = e()
            }));

            function ji(t) {
                const e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    o = atob(n),
                    r = new ArrayBuffer(o.length),
                    i = new Uint8Array(r);
                for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
                return r
            }

            function Di(t) {
                const e = new Uint8Array(t);
                let n = "";
                for (const o of e) n += String.fromCharCode(o);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            t("aH", Ci);
            const Mi = "copy",
                Hi = "convert";

            function Oi(t, e, n) {
                if (e === Mi) return n;
                if (e === Hi) return t(n);
                if (e instanceof Array) return n.map(n => Oi(t, e[0], n));
                if (e instanceof Object) {
                    const o = {};
                    for (const [r, i] of Object.entries(e))
                        if (r in n) null != n[r] ? o[r] = Oi(t, i.schema, n[r]) : o[r] = null;
                        else if (i.required) throw new Error(`Missing key: ${r}`);
                    return o
                }
            }

            function Ni(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function Ii(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            const Pi = {
                    type: Ni(Mi),
                    id: Ni(Hi),
                    transports: Ii(Mi)
                },
                qi = {
                    publicKey: Ni({
                        rp: Ni(Mi),
                        user: Ni({
                            id: Ni(Hi),
                            name: Ni(Mi),
                            displayName: Ni(Mi),
                            icon: Ii(Mi)
                        }),
                        challenge: Ni(Hi),
                        pubKeyCredParams: Ni(Mi),
                        timeout: Ii(Mi),
                        excludeCredentials: Ii([Pi]),
                        authenticatorSelection: Ii(Mi),
                        attestation: Ii(Mi),
                        extensions: Ii(Mi)
                    }),
                    signal: Ii(Mi)
                },
                Ri = {
                    type: Ni(Mi),
                    id: Ni(Mi),
                    rawId: Ni(Hi),
                    response: Ni({
                        clientDataJSON: Ni(Hi),
                        attestationObject: Ni(Hi)
                    })
                },
                Vi = {
                    mediation: Ii(Mi),
                    publicKey: Ni({
                        challenge: Ni(Hi),
                        timeout: Ii(Mi),
                        rpId: Ii(Mi),
                        allowCredentials: Ii([Pi]),
                        userVerification: Ii(Mi),
                        extensions: Ii(Mi)
                    }),
                    signal: Ii(Mi)
                },
                Fi = {
                    type: Ni(Mi),
                    id: Ni(Mi),
                    rawId: Ni(Hi),
                    response: Ni({
                        clientDataJSON: Ni(Hi),
                        authenticatorData: Ni(Hi),
                        signature: Ni(Hi),
                        userHandle: Ni(Hi)
                    })
                };

            function Bi() {
                return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
            }

            function $i() {
                return Bi() ? "supported" : "unsupported"
            }
            t("aY", {
                report(t) {}
            });
            let Ui = !1;
            let Xi = !1;
            Ze(".js-sudo-form", (async function(t, e) {
                try {
                    await e.text()
                } catch (n) {
                    if (!n.response) throw n;
                    let e;
                    switch (n.response.status) {
                        case 401:
                            e = "Incorrect password.";
                            break;
                        case 429:
                            e = "Too many password attempts. Please wait and try again later.";
                            break;
                        default:
                            e = "Failed to receive a response. Please try again later."
                    }
                    return l(t, ".js-sudo-error").textContent = e, l(t, ".js-sudo-error").hidden = !1, void(l(t, ".js-sudo-password", HTMLInputElement).value = "")
                }
                Xi = !0, c(t, "details").removeAttribute("open")
            }));
            const Wi = new WeakMap;

            function Ki(t) {
                if (!(t instanceof CustomEvent)) throw new Error("assert: event is not a CustomEvent");
                const e = t.detail.editor;
                if (!t.target) throw new Error("assert: event.target is null");
                return Wi.set(t.target, e), e
            }

            function Gi(t) {
                if (t.querySelector(".js-task-list-field"))
                    for (const e of u(t, "task-lists", TaskListsElement)) e.disabled = !1
            }

            function Yi(t, e, n) {
                const o = l(t, ".js-comment-update", HTMLFormElement);
                ! function(t) {
                    for (const e of u(t, "task-lists", TaskListsElement)) e.disabled = !0
                }(t);
                const r = o.elements.namedItem("task_list_track");
                r && r.remove();
                const i = o.elements.namedItem("task_list_operation");
                i && i.remove();
                const s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", e), o.appendChild(s);
                const a = document.createElement("input");
                if (a.setAttribute("type", "hidden"), a.setAttribute("name", "task_list_operation"), a.setAttribute("value", JSON.stringify(n)), o.appendChild(a), !o.elements.namedItem("task_list_key")) {
                    const t = d(l(o, ".js-task-list-field"), "name").split("[")[0],
                        e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "task_list_key"), e.setAttribute("value", t), o.appendChild(e)
                }
                t.classList.remove("is-comment-stale"), Ce(o)
            }
            Ht("codeEditor:ready", ".js-code-editor", Ki), me(".js-task-list-container .js-task-list-field", (function(t) {
                Gi(c(t, ".js-task-list-container"))
            })), Ht("task-lists-move", "task-lists", (function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:49");
                const {
                    src: e,
                    dst: n
                } = t.detail;
                Yi(c(t.currentTarget, ".js-task-list-container"), "reordered", {
                    operation: "move",
                    src: e,
                    dst: n
                })
            })), Ht("task-lists-check", "task-lists", (function(t) {
                if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/task-list.js:62");
                const {
                    position: e,
                    checked: n
                } = t.detail;
                Yi(c(t.currentTarget, ".js-task-list-container"), `checked:${n?1:0}`, {
                    operation: "check",
                    position: e,
                    checked: n
                })
            })), Ze(".js-task-list-container .js-comment-update", (async function(t, e) {
                const n = c(t, ".js-task-list-container"),
                    o = t.elements.namedItem("task_list_track");
                o && o.remove();
                const r = t.elements.namedItem("task_list_operation");
                let i;
                r && r.remove();
                try {
                    i = await e.json()
                } catch (s) {
                    let t;
                    try {
                        t = JSON.parse(s.response.text)
                    } catch (ji) {}
                    if (t && t.stale) {
                        const e = t.updated_markdown,
                            o = t.updated_html,
                            r = t.version;
                        if (e && o && r) {
                            const t = l(n, ".js-comment-body"),
                                i = l(n, ".js-body-version"),
                                s = l(n, ".js-task-list-field", HTMLTextAreaElement);
                            t.innerHTML = o, s.value = e, n.setAttribute("data-body-version", r), i instanceof HTMLInputElement && (i.value = r)
                        }
                    } else window.location.reload()
                }
                i && (r && i.json.source && (l(n, ".js-task-list-field", HTMLTextAreaElement).value = i.json.source), Gi(n))
            }))
        }
    }
}));
//# sourceMappingURL=frameworks-4df1d765.js.map
//# {"line":4,"column":27}