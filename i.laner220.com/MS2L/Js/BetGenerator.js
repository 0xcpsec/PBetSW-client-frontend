"use strict";
(self.webpackChunkmember2 = self.webpackChunkmember2 || []).push([
    [5683], {
        55405: (a, e, n) => {
            n.r(e), n.d(e, {
                default: () => k
            });
            var t = n(10467),
                i = n(80296),
                c = n(54756),
                r = n.n(c),
                o = n(41486),
                s = n.n(o),
                l = n(61418),
                d = n(92602),
                p = n(77314),
                u = n(35697),
                g = n(15499),
                m = n(89888),
                f = n(54952),
                v = n(73656);
            const E = function() {
                "true" == $(".c-tooltip--pg").attr("data-open") && anime.timeline({
                    duration: 1200,
                    loop: !0
                }).add({
                    targets: [".c-ani-pg-step1"],
                    opacity: [0, 1],
                    duration: 300,
                    easing: "linear"
                }).add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-pointer"],
                    translateX: [100, 70],
                    translateY: [100, 16],
                    duration: 300,
                    easing: "linear",
                    delay: 200
                }).add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-pointer"],
                    translateY: [16, 26],
                    duration: 100,
                    easing: "easeOutBounce"
                }).add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-btn-shadow"],
                    opacity: 0,
                    duration: 100,
                    easing: "easeOutBounce"
                }, "-=100").add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-btn"],
                    translateY: ["0", "6px"],
                    duration: 100,
                    easing: "easeOutBounce"
                }, "-=100").add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-pointer-circle"],
                    opacity: [1, 0],
                    scale: [.25, 1.5],
                    duration: 350,
                    easing: "linear"
                }, "-=100").add({
                    targets: [".c-icon--refresh"],
                    rotate: [0, 180],
                    duration: 300,
                    easing: "linear"
                }, "-=300").add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-btn"],
                    translateY: ["6px", "0"],
                    duration: 100,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-pointer"],
                    translateY: [26, 16],
                    duration: 100,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step1 .c-ani-pg-btn-shadow"],
                    opacity: 1,
                    duration: 100,
                    endDelay: 300,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step1"],
                    translateX: [0, -200],
                    opacity: [1, 0],
                    duration: 300,
                    easing: "linear"
                }).add({
                    targets: [".c-ani-pg-step2"],
                    opacity: [0, 1],
                    duration: 50,
                    easing: "linear"
                }).add({
                    targets: [".c-ani-pg-ticket"],
                    translateX: [150, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100, {
                        start: 500
                    })
                }).add({
                    targets: [".c-ani-pg-tickets"],
                    translateY: [0, -10],
                    duration: 300,
                    easing: "easeInQuad"
                }).add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-btn-group"],
                    opacity: [0, 1],
                    height: 140,
                    duration: 300,
                    easing: "easeInQuad"
                }, "-=150").add({
                    targets: [".c-ani-pg-step2"],
                    translateY: [0, -60],
                    scale: [1, 1.15],
                    duration: 500,
                    easing: "easeInQuad"
                }).add({
                    targets: [".c-ani-pg-tickets"],
                    translateY: -10,
                    scale: 1.05,
                    duration: 150,
                    easing: "easeInQuad"
                }, "-=150").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-pointer"],
                    translateX: [85, 70],
                    translateY: [140, 110],
                    opacity: [0, 1],
                    duration: 300,
                    easing: "linear"
                }).add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-pointer"],
                    translateY: [110, 116],
                    duration: 100,
                    easing: "easeOutBounce"
                }).add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-btn-shadow"],
                    opacity: 0,
                    duration: 100,
                    easing: "easeOutBounce"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-btn"],
                    translateY: ["0", "6px"],
                    duration: 100,
                    easing: "easeOutBounce"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-pointer-circle"],
                    opacity: [1, 0],
                    scale: [.25, 1.5],
                    duration: 350,
                    easing: "linear"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-btn"],
                    translateY: ["6px", "0"],
                    duration: 100,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-pointer"],
                    translateY: [116, 110],
                    duration: 100,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2 .c-ani-pg-btn-shadow"],
                    opacity: 1,
                    duration: 100,
                    endDelay: 500,
                    easing: "easeInQuad"
                }, "-=100").add({
                    targets: [".c-ani-pg-step2"],
                    translateY: [-60, -300],
                    opacity: [1, 0],
                    duration: 300,
                    easing: "linear"
                }).add({
                    targets: [".c-ani-pg-step3"],
                    opacity: [0, 1],
                    duration: 150,
                    easing: "easeOutBounce"
                }, "-=150").add({
                    targets: [".c-ani-pg-step3 .c-ani-pg-win"],
                    scale: [1, 1.5],
                    duration: 4400,
                    easing: "easeInQuad"
                }, "-=150").add({
                    targets: [".c-ani-pg-coin-1", ".c-ani-pg-coin-3", ".c-ani-pg-coin-4", ".c-ani-pg-coin-8"],
                    translateY: [-200, 300],
                    opacity: [.4, 1],
                    scale: function() {
                        return anime.random(10, 50) / 10
                    },
                    rotate: function() {
                        return anime.random(-360, 360)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=4400").add({
                    targets: [".c-ani-pg-coin-2", ".c-ani-pg-coin-5", ".c-ani-pg-coin-6", ".c-ani-pg-coin-7", ".c-ani-pg-coin-9"],
                    translateY: [-200, 300],
                    opacity: [0, .9],
                    scale: function() {
                        return anime.random(10, 35) / 10
                    },
                    rotate: function() {
                        return anime.random(-360, 360)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=4000").add({
                    targets: [".c-ani-pg-coin-1", ".c-ani-pg-coin-3", ".c-ani-pg-coin-4", ".c-ani-pg-coin-8"],
                    translateY: [-200, 350],
                    opacity: [.4, 1],
                    scale: function() {
                        return anime.random(10, 50) / 10
                    },
                    rotate: function() {
                        return anime.random(0, 180)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=3500").add({
                    targets: [".c-ani-pg-coin-2", ".c-ani-pg-coin-5", ".c-ani-pg-coin-6", ".c-ani-pg-coin-7", ".c-ani-pg-coin-9"],
                    translateY: [-200, 350],
                    scale: function() {
                        return anime.random(10, 35) / 10
                    },
                    rotate: function() {
                        return anime.random(0, 270)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=3100").add({
                    targets: [".c-ani-pg-coin-1", ".c-ani-pg-coin-3", ".c-ani-pg-coin-4", ".c-ani-pg-coin-8"],
                    translateY: [-200, 300],
                    opacity: [.4, 1],
                    scale: function() {
                        return anime.random(10, 50) / 10
                    },
                    rotate: function() {
                        return anime.random(90, 360)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=2600").add({
                    targets: [".c-ani-pg-coin-2", ".c-ani-pg-coin-5", ".c-ani-pg-coin-6", ".c-ani-pg-coin-7", ".c-ani-pg-coin-9"],
                    translateY: [-200, 300],
                    scale: function() {
                        return anime.random(10, 35) / 10
                    },
                    rotate: function() {
                        return anime.random(0, 180)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=2200").add({
                    targets: [".c-ani-pg-coin-1", ".c-ani-pg-coin-3", ".c-ani-pg-coin-4", ".c-ani-pg-coin-8"],
                    translateY: [-200, 300],
                    opacity: [.4, 1],
                    scale: function() {
                        return anime.random(10, 50) / 10
                    },
                    rotate: function() {
                        return anime.random(-360, -120)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=1700").add({
                    targets: [".c-ani-pg-coin-2", ".c-ani-pg-coin-5", ".c-ani-pg-coin-6", ".c-ani-pg-coin-7", ".c-ani-pg-coin-9"],
                    translateY: [-200, 300],
                    scale: function() {
                        return anime.random(10, 35) / 10
                    },
                    rotate: function() {
                        return anime.random(-360, 0)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=1300").add({
                    targets: [".c-ani-pg-coin-1", ".c-ani-pg-coin-3", ".c-ani-pg-coin-4", ".c-ani-pg-coin-8"],
                    translateY: [-200, 350],
                    opacity: [.4, 1],
                    scale: function() {
                        return anime.random(10, 35) / 10
                    },
                    rotate: function() {
                        return anime.random(0, 180)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "linear"
                }, "-=800").add({
                    targets: [".c-ani-pg-coin-2", ".c-ani-pg-coin-5", ".c-ani-pg-coin-6", ".c-ani-pg-coin-7", ".c-ani-pg-coin-9"],
                    translateY: [-200, 400],
                    scale: function() {
                        return anime.random(10, 20) / 10
                    },
                    rotate: function() {
                        return anime.random(0, 270)
                    },
                    duration: function() {
                        return anime.random(800, 900)
                    },
                    easing: "easeOutQuad"
                }, "-=400").add({
                    targets: [".c-ani-pg-step3 .c-ani-pg-win"],
                    opacity: [1, 0],
                    duration: 600,
                    easing: "linear",
                    endDelay: 1e3
                }, "-=300")
            };
            var h = n(3585);
            n(77171);
            const b = function(a) {
                var e = a.handelClosePromo,
                    n = a.doNotShowAgain,
                    t = a.isChecked,
                    i = a.handleOpenGenerator;
                return (0, o.useEffect)((function() {
                    E()
                }), []), s().createElement("div", {
                    className: "c-tooltip c-tooltip--bottom c-tooltip--promo c-tooltip--pg",
                    "data-open": !0,
                    onClick: e,
                    "aria-hidden": "true"
                }, s().createElement("span", {
                    className: "c-btn c-btn--clear",
                    onClick: function(a) {
                        a.stopPropagation(), e()
                    },
                    "aria-hidden": "true"
                }, s().createElement("i", {
                    className: "c-icon c-icon--clear"
                })), s().createElement("div", {
                    className: "c-tooltip__img"
                }, s().createElement("div", {
                    class: "c-ani-pg"
                }, s().createElement("div", {
                    class: "c-ani-pg-step1"
                }, s().createElement("div", {
                    class: "c-ani-pg-btn-group"
                }, s().createElement("div", {
                    class: "c-ani-pg-btn-shadow"
                }), s().createElement("div", {
                    class: "c-ani-pg-btn"
                }, s().createElement("i", {
                    class: "c-icon c-icon--refresh"
                }), s().createElement("span", {
                    class: "c-text"
                }, "SPIN"))), s().createElement("div", {
                    class: "c-ani-pg-pointer"
                }, s().createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "9 10.5 24 24",
                    "enable-background": "new 9 10.5 24 24",
                    xmlSpace: "preserve"
                }, s().createElement("path", {
                    d: "M24.65,15.382c-0.352,0.203-0.638,0.5-0.818,0.851c-0.2-0.253-0.472-0.446-0.787-0.557  c-0.314-0.111-0.661-0.137-1.004-0.075c-0.343,0.063-0.668,0.21-0.943,0.429s-0.49,0.499-0.621,0.813  c-0.221-0.16-0.48-0.268-0.759-0.315c-0.279-0.047-0.57-0.034-0.853,0.041c-0.282,0.074-0.548,0.207-0.779,0.387  c-0.23,0.181-0.42,0.407-0.554,0.66l-2.468-4.276c-0.244-0.406-0.653-0.692-1.139-0.796c-0.486-0.104-1.009-0.017-1.458,0.242  s-0.785,0.668-0.938,1.141c-0.153,0.473-0.11,0.97,0.121,1.384l5.029,8.711c-0.596-0.263-1.205-0.519-1.839-0.688  c-0.677-0.187-1.301-0.104-1.783,0.239c-0.693,0.482-1.012,1.279-0.79,1.987c0.276,0.852,1.127,1.567,1.81,2.143l0.203,0.172  c0.751,0.639,1.599,1.234,2.606,1.829c0.587,0.313,1.223,0.542,1.89,0.681c1.012,0.211,1.695,0.508,2.209,1.397  c0.473,0.819,1.501,0.917,2.396,0.401l5.934-3.426c0.899-0.521,1.33-1.465,0.854-2.289c-0.354-0.615-0.217-1.015,0.043-1.68  c0.271-0.695,0.387-1.425,0.341-2.143c-0.047-0.718-0.254-1.406-0.607-2.019l-2.693-4.665c-0.238-0.413-0.646-0.707-1.134-0.815  S25.103,15.123,24.65,15.382z"
                })), s().createElement("div", {
                    class: "c-ani-pg-pointer-circle"
                }))), s().createElement("div", {
                    class: "c-ani-pg-step2"
                }, s().createElement("div", {
                    class: "c-ani-pg-tickets"
                }, s().createElement("div", {
                    class: "c-ani-pg-ticket"
                }), s().createElement("div", {
                    class: "c-ani-pg-ticket"
                }), s().createElement("div", {
                    class: "c-ani-pg-ticket"
                })), s().createElement("div", {
                    class: "c-ani-pg-btn-group"
                }, s().createElement("div", {
                    class: "c-ani-pg-btn-shadow"
                }), s().createElement("div", {
                    class: "c-ani-pg-btn"
                }, s().createElement("span", {
                    class: "c-text"
                }, "BET"))), s().createElement("div", {
                    class: "c-ani-pg-pointer"
                }, s().createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "9 10.5 24 24",
                    "enable-background": "new 9 10.5 24 24"
                }, s().createElement("path", {
                    d: "M24.65,15.382c-0.352,0.203-0.638,0.5-0.818,0.851c-0.2-0.253-0.472-0.446-0.787-0.557  c-0.314-0.111-0.661-0.137-1.004-0.075c-0.343,0.063-0.668,0.21-0.943,0.429s-0.49,0.499-0.621,0.813  c-0.221-0.16-0.48-0.268-0.759-0.315c-0.279-0.047-0.57-0.034-0.853,0.041c-0.282,0.074-0.548,0.207-0.779,0.387  c-0.23,0.181-0.42,0.407-0.554,0.66l-2.468-4.276c-0.244-0.406-0.653-0.692-1.139-0.796c-0.486-0.104-1.009-0.017-1.458,0.242  s-0.785,0.668-0.938,1.141c-0.153,0.473-0.11,0.97,0.121,1.384l5.029,8.711c-0.596-0.263-1.205-0.519-1.839-0.688  c-0.677-0.187-1.301-0.104-1.783,0.239c-0.693,0.482-1.012,1.279-0.79,1.987c0.276,0.852,1.127,1.567,1.81,2.143l0.203,0.172  c0.751,0.639,1.599,1.234,2.606,1.829c0.587,0.313,1.223,0.542,1.89,0.681c1.012,0.211,1.695,0.508,2.209,1.397  c0.473,0.819,1.501,0.917,2.396,0.401l5.934-3.426c0.899-0.521,1.33-1.465,0.854-2.289c-0.354-0.615-0.217-1.015,0.043-1.68  c0.271-0.695,0.387-1.425,0.341-2.143c-0.047-0.718-0.254-1.406-0.607-2.019l-2.693-4.665c-0.238-0.413-0.646-0.707-1.134-0.815  S25.103,15.123,24.65,15.382z"
                })), s().createElement("div", {
                    class: "c-ani-pg-pointer-circle"
                }))), s().createElement("div", {
                    class: "c-ani-pg-step3"
                }, s().createElement("div", {
                    class: "c-ani-pg-coins c-ani-pg-coins-a"
                }, s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-1"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-2"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-3"
                })), s().createElement("div", {
                    class: "c-ani-pg-win"
                }), s().createElement("div", {
                    class: "c-ani-pg-coins c-ani-pg-coins-b"
                }, s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-4"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-5"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-6"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-7"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-8"
                }), s().createElement("div", {
                    class: "c-ani-pg-coin c-ani-pg-coin-9"
                }))))), s().createElement("div", {
                    className: "c-tooltip__content"
                }, s().createElement("span", {
                    className: "c-text-title"
                }, (0, h.default)("lbl_OpenPrlyGenerator")), s().createElement("span", {
                    className: "c-text"
                }, (0, h.default)("lbl_LuckyPrlyTooltip")), s().createElement("span", {
                    className: "c-btn",
                    onClick: i
                }, s().createElement("span", {
                    className: "c-text"
                }, (0, h.default)("btn_TryNow"))), s().createElement("label", {
                    className: "c-checkbox",
                    onClick: function(a) {
                        return a.stopPropagation()
                    },
                    htmlFor: "doNotShowGeneratorPromo",
                    "aria-hidden": "true"
                }, s().createElement("input", {
                    type: "checkbox",
                    onChange: function(a) {
                        return n(a)
                    },
                    id: "doNotShowGeneratorPromo",
                    checked: t
                }), s().createElement("i", {
                    className: "c-icon c-icon--checkbox"
                }), s().createElement("span", {
                    className: "c-text"
                }, (0, h.default)("DoNotShowAgain")))))
            };
            const A = function(a) {
                var e = a.endDate,
                    n = (0, o.useState)(!0),
                    t = (0, i.A)(n, 2),
                    c = t[0],
                    r = t[1];
                return (0, o.useEffect)((function() {
                    var a = new Date(e).getTime(),
                        n = (new Date).getTime();
                    if (!(n > a)) {
                        var t = setTimeout((function() {
                            r(!1)
                        }), a - n);
                        return function() {
                            return clearTimeout(t)
                        }
                    }
                    r(!1)
                }), [e]), {
                    isVisible: c
                }
            };
            var y = n(12396),
                S = n(62061);
            const k = function() {
                var a, e, c, E, h, k, w = (0, o.useState)(!1),
                    B = (0, i.A)(w, 2),
                    x = B[0],
                    I = B[1],
                    Y = (0, o.useState)(!1),
                    D = (0, i.A)(Y, 2),
                    N = D[0],
                    P = D[1],
                    C = (0, o.useState)("0" === (null === (a = d.A.attrs) || void 0 === a ? void 0 : a.BGShowAgain)),
                    O = (0, i.A)(C, 2),
                    Q = O[0],
                    G = O[1],
                    T = (0, o.useState)(null),
                    L = (0, i.A)(T, 2),
                    M = L[0],
                    z = L[1],
                    F = (0, o.useState)(!1),
                    _ = (0, i.A)(F, 2),
                    V = _[0],
                    j = _[1],
                    X = (0, o.useState)(null),
                    R = (0, i.A)(X, 2),
                    K = R[0],
                    U = R[1],
                    q = (0, o.useState)(!1),
                    J = (0, i.A)(q, 2),
                    $ = J[0],
                    H = J[1],
                    W = v.default.check("EnableParlayBoost"),
                    Z = (0, u.A)(),
                    aa = {
                        menuData: ((null === (k = g.A["m0.E"]) || void 0 === k ? void 0 : k.models) || []).reduce((function(a, e) {
                            return !isNaN(e.attrs.value) && parseInt(e.attrs.value) < 100 && e.subitems.models.some((function(a) {
                                return "parlay" === a.attrs.value
                            })) && a.push(parseInt(e.attrs.value)), a.sort((function(a, e) {
                                return a - e
                            })), a
                        }), [])
                    }.menuData,
                    ea = 2 === f.A.attrs.SiteMode,
                    na = S.default.attrs.isLocalizationDateFormat,
                    ta = f.A.attrs.vnTimeLocalization,
                    ia = function() {
                        V && (G(!0), (0, p.json)("/Customer/DisableShowAgain?redisKey=BetGeneratorPromoV2"))
                    },
                    ca = function() {
                        P(!1), ia()
                    },
                    ra = function(a) {
                        a.stopPropagation(), ia(), sessionStorage.removeItem("betOptions"), N && ca(), (0, p.json)("/Customer/BetGeneratorOptions", null, (function(a) {
                            z(a.Data), sessionStorage.setItem("luckyParlayUserPreference", JSON.stringify(a.Data)), I(!0)
                        }), !0, (function(a) {
                            I(!0)
                        }), "GET")
                    },
                    oa = A({
                        endDate: "2024-09-24T12:00:00"
                    }).isVisible;
                return (0, o.useEffect)((function() {
                    Q || P(!0)
                }), [Q]), (0, o.useEffect)((function() {
                    var a = function() {
                        var a = (0, t.A)(r().mark((function a() {
                            var e, t, c, o;
                            return r().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (K || $) {
                                            a.next = 18;
                                            break
                                        }
                                        return H(!0), a.prev = 2, a.next = 5, Promise.all([n.e(5325).then(n.t.bind(n, 5014, 23)), n.e(1341).then(n.t.bind(n, 1939, 23))]);
                                    case 5:
                                        e = a.sent, t = (0, i.A)(e, 2), c = t[0], o = t[1], U({
                                            ShareReactI18n: c.default,
                                            ParlayBetGenerator: o.default
                                        }), a.next = 15;
                                        break;
                                    case 12:
                                        a.prev = 12, a.t0 = a.catch(2);
                                    case 15:
                                        return a.prev = 15, H(!1), a.finish(15);
                                    case 18:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [2, 12, 15, 18]
                            ])
                        })));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                    x && a()
                }), [x, K, $]), [s().createElement(m.A, {
                    onClick: ra,
                    isDisabled: "false"
                }, oa && N && s().createElement(b, {
                    handelClosePromo: ca,
                    isChecked: V,
                    doNotShowAgain: function(a) {
                        a.stopPropagation(), a.nativeEvent.stopImmediatePropagation(), j(!V)
                    },
                    handleOpenGenerator: ra
                })), s().createElement(s().Fragment, null, x && K && (0, l.createPortal)(s().createElement(K.ParlayBetGenerator, {
                    closeBetGenerator: function() {
                        I(!1)
                    },
                    menuData: aa,
                    serverApi: p.json,
                    syncBalance: d.A.getBalance.bind(d.A),
                    accountInfo: {
                        language: Z,
                        currencyId: d.A.attrs.CurrId,
                        quickStakeSetting: null !== (e = d.A.attrs) && void 0 !== e && e.QuickStakeSetting ? d.A.attrs.QuickStakeSetting : "1::",
                        QuickStakeDefaultMultiple1: null === (c = d.A.attrs) || void 0 === c ? void 0 : c.QuickStakeDefaultMultiple1,
                        QuickStakeDefaultMultiple2: null === (E = d.A.attrs) || void 0 === E ? void 0 : E.QuickStakeDefaultMultiple2,
                        acceptAnyodds: d.A.attrs.AnyOdds,
                        acceptBetterOdds: d.A.attrs.ABO,
                        currency: d.A.attrs.Bal.Curr,
                        customizeAutoFillInStake: d.A.attrs.LB,
                        getBetCredit: function() {
                            return d.A.attrs.Bal.BCredit
                        }
                    },
                    platform: "desktop",
                    fetchDesktopApi: !0,
                    doNotShowBGAnimationAgain: function(a) {
                        (0, p.json)("/Customer/DisableShowAgain?redisKey=BetGeneratorAnimation"), d.A.update({
                            BGAnimationShowAgain: "0"
                        })
                    },
                    BGAnimationShowAgain: "1" === (null === (h = d.A.attrs) || void 0 === h ? void 0 : h.BGAnimationShowAgain),
                    canSeeParlayBoost: W,
                    EnableFilterSaba: f.A.attrs.EnableFilterSaba,
                    isLic: ea,
                    CanSeeSabaVSOnly: f.A.attrs.CanSeeSabaVSOnly,
                    shareReactI18n: K.ShareReactI18n,
                    setBehaviorMetrics: function(a, e) {
                        return (0, y.A)(a, e)
                    },
                    initUserPreference: M,
                    isLocalizationDateFormat: na,
                    vnTimeLocalization: ta
                }), document.getElementById("ceventLayer")))]
            }
        }
    }
]);