var StreamingPlayer = function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    return r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 19)
}([function(e, t, r) {
    "use strict";
    e.exports = r(20)
}, function(e, t, r) {
    "use strict";
    var n = function(e) {
            for (var t, r = e.length, n = r ^ r, i = 0; r >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), r -= 4, ++i;
            switch (r) {
                case 3:
                    n ^= (255 & e.charCodeAt(i + 2)) << 16;
                case 2:
                    n ^= (255 & e.charCodeAt(i + 1)) << 8;
                case 1:
                    n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(i))) + ((1540483477 * (n >>> 16) & 65535) << 16)
            }
            return n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((1540483477 * (n >>> 16) & 65535) << 16), ((n ^= n >>> 15) >>> 0).toString(36)
        },
        i = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        },
        a = r(6);
    r.d(t, "a", (function() {
        return m
    }));
    var o = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function(e) {
            return 45 === e.charCodeAt(1)
        },
        c = function(e) {
            return null != e && "boolean" != typeof e
        },
        u = Object(a.a)((function(e) {
            return l(e) ? e : e.replace(o, "-$&").toLowerCase()
        })),
        d = function(e, t) {
            switch (e) {
                case "animation":
                case "animationName":
                    if ("string" == typeof t) return t.replace(s, (function(e, t, r) {
                        return h = {
                            name: t,
                            styles: r,
                            next: h
                        }, t
                    }))
            }
            return 1 === i[e] || l(e) || "number" != typeof t || 0 === t ? t : t + "px"
        };

    function f(e, t, r, n) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
            case "boolean":
                return "";
            case "object":
                if (1 === r.anim) return h = {
                    name: r.name,
                    styles: r.styles,
                    next: h
                }, r.name;
                if (void 0 !== r.styles) {
                    var i = r.next;
                    if (void 0 !== i)
                        for (; void 0 !== i;) h = {
                            name: i.name,
                            styles: i.styles,
                            next: h
                        }, i = i.next;
                    return r.styles + ";"
                }
                return function(e, t, r) {
                    var n = "";
                    if (Array.isArray(r))
                        for (var i = 0; i < r.length; i++) n += f(e, t, r[i], !1);
                    else
                        for (var a in r) {
                            var o = r[a];
                            if ("object" != typeof o) null != t && void 0 !== t[o] ? n += a + "{" + t[o] + "}" : c(o) && (n += u(a) + ":" + d(a, o) + ";");
                            else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                                var s = f(e, t, o, !1);
                                switch (a) {
                                    case "animation":
                                    case "animationName":
                                        n += u(a) + ":" + s + ";";
                                        break;
                                    default:
                                        n += a + "{" + s + "}"
                                }
                            } else
                                for (var l = 0; l < o.length; l++) c(o[l]) && (n += u(a) + ":" + d(a, o[l]) + ";")
                        }
                    return n
                }(e, t, r);
            case "function":
                if (void 0 !== e) {
                    var a = h,
                        o = r(e);
                    return h = a, f(e, t, o, n)
                }
                break;
            case "string":
        }
        if (null == t) return r;
        var s = t[r];
        return void 0 === s || n ? r : s
    }
    var h, p = /label:\s*([^\s;\n{]+)\s*;/g;
    var m = function(e, t, r) {
        if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
        var i = !0,
            a = "";
        h = void 0;
        var o = e[0];
        null == o || void 0 === o.raw ? (i = !1, a += f(r, t, o, !1)) : a += o[0];
        for (var s = 1; s < e.length; s++) a += f(r, t, e[s], 46 === a.charCodeAt(a.length - 1)), i && (a += o[s]);
        p.lastIndex = 0;
        for (var l, c = ""; null !== (l = p.exec(a));) c += "-" + l[1];
        return {
            name: n(a) + c,
            styles: a,
            next: h
        }
    }
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return n
    })), r.d(t, "b", (function() {
        return i
    }));

    function n(e, t, r) {
        var n = "";
        return r.split(" ").forEach((function(r) {
            void 0 !== e[r] ? t.push(e[r]) : n += r + " "
        })), n
    }
    var i = function(e, t, r) {
        var n = e.key + "-" + t.name;
        if (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles), void 0 === e.inserted[t.name]) {
            var i = t;
            do {
                e.insert("." + n, i, e.sheet, !0);
                i = i.next
            } while (void 0 !== i)
        }
    }
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(17),
        i = r.n(n),
        a = r(0);
    var o = function() {
        function e(e) {
            this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
        }
        var t = e.prototype;
        return t.insert = function(e) {
            if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t, r = function(e) {
                    var t = document.createElement("style");
                    return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
                }(this);
                t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(r, t), this.tags.push(r)
            }
            var n = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }(n);
                try {
                    var a = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                    i.insertRule(e, a ? 0 : i.cssRules.length)
                } catch (e) {
                    0
                }
            } else n.appendChild(document.createTextNode(e));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach((function(e) {
                return e.parentNode.removeChild(e)
            })), this.tags = [], this.ctr = 0
        }, e
    }();
    var s = function(e) {
        function t(e, t, n) {
            var i = t.trim().split(p);
            t = i;
            var a = i.length,
                o = e.length;
            switch (o) {
                case 0:
                case 1:
                    var s = 0;
                    for (e = 0 === o ? "" : e[0] + " "; s < a; ++s) t[s] = r(e, t[s], n).trim();
                    break;
                default:
                    var l = s = 0;
                    for (t = []; s < a; ++s)
                        for (var c = 0; c < o; ++c) t[l++] = r(e[c] + " ", i[s], n).trim()
            }
            return t
        }

        function r(e, t, r) {
            var n = t.charCodeAt(0);
            switch (33 > n && (n = (t = t.trim()).charCodeAt(0)), n) {
                case 38:
                    return t.replace(m, "$1" + e.trim());
                case 58:
                    return e.trim() + t.replace(m, "$1" + e.trim());
                default:
                    if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(m, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
            }
            return e + t
        }

        function n(e, t, r, a) {
            var o = e + ";",
                s = 2 * t + 3 * r + 4 * a;
            if (944 === s) {
                e = o.indexOf(":", 9) + 1;
                var l = o.substring(e, o.length - 1).trim();
                return l = o.substring(0, e).trim() + l + ";", 1 === P || 2 === P && i(l, 1) ? "-webkit-" + l + l : l
            }
            if (0 === P || 2 === P && !i(o, 1)) return o;
            switch (s) {
                case 1015:
                    return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
                case 951:
                    return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
                case 963:
                    return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
                case 1009:
                    if (100 !== o.charCodeAt(4)) break;
                case 969:
                case 942:
                    return "-webkit-" + o + o;
                case 978:
                    return "-webkit-" + o + "-moz-" + o + o;
                case 1019:
                case 983:
                    return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
                case 883:
                    if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                    if (0 < o.indexOf("image-set(", 11)) return o.replace(_, "$1-webkit-$2") + o;
                    break;
                case 932:
                    if (45 === o.charCodeAt(4)) switch (o.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
                        case 115:
                            return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
                        case 98:
                            return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o
                    }
                    return "-webkit-" + o + "-ms-" + o + o;
                case 964:
                    return "-webkit-" + o + "-ms-flex-" + o + o;
                case 1023:
                    if (99 !== o.charCodeAt(8)) break;
                    return "-webkit-box-pack" + (l = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + l + o;
                case 1005:
                    return f.test(o) ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o : o;
                case 1e3:
                    switch (t = (l = o.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
                        case 226:
                            l = o.replace(b, "tb");
                            break;
                        case 232:
                            l = o.replace(b, "tb-rl");
                            break;
                        case 220:
                            l = o.replace(b, "lr");
                            break;
                        default:
                            return o
                    }
                    return "-webkit-" + o + "-ms-" + l + o;
                case 1017:
                    if (-1 === o.indexOf("sticky", 9)) break;
                case 975:
                    switch (t = (o = e).length - 10, s = (l = (33 === o.charCodeAt(t) ? o.substring(0, t) : o).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                        case 203:
                            if (111 > l.charCodeAt(8)) break;
                        case 115:
                            o = o.replace(l, "-webkit-" + l) + ";" + o;
                            break;
                        case 207:
                        case 102:
                            o = o.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + o.replace(l, "-webkit-" + l) + ";" + o.replace(l, "-ms-" + l + "box") + ";" + o
                    }
                    return o + ";";
                case 938:
                    if (45 === o.charCodeAt(5)) switch (o.charCodeAt(6)) {
                        case 105:
                            return l = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + l + "-ms-flex-" + l + o;
                        case 115:
                            return "-webkit-" + o + "-ms-flex-item-" + o.replace(S, "") + o;
                        default:
                            return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(S, "") + o
                    }
                    break;
                case 973:
                case 989:
                    if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
                case 931:
                case 953:
                    if (!0 === k.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? n(e.replace("stretch", "fill-available"), t, r, a).replace(":fill-available", ":stretch") : o.replace(l, "-webkit-" + l) + o.replace(l, "-moz-" + l.replace("fill-", "")) + o;
                    break;
                case 962:
                    if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === r + a && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + o
            }
            return o
        }

        function i(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
                n = e.substring(0, 3 !== t ? r : 10);
            return r = e.substring(r + 1, e.length - 1), L(2 !== t ? n : n.replace(w, "$1"), r, t)
        }

        function a(e, t) {
            var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";" ? r.replace(E, " or ($1)").substring(4) : "(" + t + ")"
        }

        function o(e, t, r, n, i, a, o, s, c, u) {
            for (var d, f = 0, h = t; f < D; ++f) switch (d = O[f].call(l, e, h, r, n, i, a, o, s, c, u)) {
                case void 0:
                case !1:
                case !0:
                case null:
                    break;
                default:
                    h = d
            }
            if (h !== t) return h
        }

        function s(e) {
            return void 0 !== (e = e.prefix) && (L = null, e ? "function" != typeof e ? P = 1 : (P = 2, L = e) : P = 0), s
        }

        function l(e, r) {
            var s = e;
            if (33 > s.charCodeAt(0) && (s = s.trim()), s = [s], 0 < D) {
                var l = o(-1, r, s, s, R, C, 0, 0, 0, 0);
                void 0 !== l && "string" == typeof l && (r = l)
            }
            var d = function e(r, s, l, d, f) {
                for (var h, p, m, b, E, S = 0, w = 0, k = 0, _ = 0, O = 0, L = 0, M = m = h = 0, N = 0, F = 0, U = 0, j = 0, B = l.length, G = B - 1, z = "", K = "", V = "", H = ""; N < B;) {
                    if (p = l.charCodeAt(N), N === G && 0 !== w + _ + k + S && (0 !== w && (p = 47 === w ? 10 : 47), _ = k = S = 0, B++, G++), 0 === w + _ + k + S) {
                        if (N === G && (0 < F && (z = z.replace(u, "")), 0 < z.trim().length)) {
                            switch (p) {
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    z += l.charAt(N)
                            }
                            p = 59
                        }
                        switch (p) {
                            case 123:
                                for (h = (z = z.trim()).charCodeAt(0), m = 1, j = ++N; N < B;) {
                                    switch (p = l.charCodeAt(N)) {
                                        case 123:
                                            m++;
                                            break;
                                        case 125:
                                            m--;
                                            break;
                                        case 47:
                                            switch (p = l.charCodeAt(N + 1)) {
                                                case 42:
                                                case 47:
                                                    e: {
                                                        for (M = N + 1; M < G; ++M) switch (l.charCodeAt(M)) {
                                                            case 47:
                                                                if (42 === p && 42 === l.charCodeAt(M - 1) && N + 2 !== M) {
                                                                    N = M + 1;
                                                                    break e
                                                                }
                                                                break;
                                                            case 10:
                                                                if (47 === p) {
                                                                    N = M + 1;
                                                                    break e
                                                                }
                                                        }
                                                        N = M
                                                    }
                                            }
                                            break;
                                        case 91:
                                            p++;
                                        case 40:
                                            p++;
                                        case 34:
                                        case 39:
                                            for (; N++ < G && l.charCodeAt(N) !== p;);
                                    }
                                    if (0 === m) break;
                                    N++
                                }
                                switch (m = l.substring(j, N), 0 === h && (h = (z = z.replace(c, "").trim()).charCodeAt(0)), h) {
                                    case 64:
                                        switch (0 < F && (z = z.replace(u, "")), p = z.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                F = s;
                                                break;
                                            default:
                                                F = A
                                        }
                                        if (j = (m = e(s, F, m, p, f + 1)).length, 0 < D && (E = o(3, m, F = t(A, z, U), s, R, C, j, p, f, d), z = F.join(""), void 0 !== E && 0 === (j = (m = E.trim()).length) && (p = 0, m = "")), 0 < j) switch (p) {
                                            case 115:
                                                z = z.replace(T, a);
                                            case 100:
                                            case 109:
                                            case 45:
                                                m = z + "{" + m + "}";
                                                break;
                                            case 107:
                                                m = (z = z.replace(g, "$1 $2")) + "{" + m + "}", m = 1 === P || 2 === P && i("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                break;
                                            default:
                                                m = z + m, 112 === d && (K += m, m = "")
                                        } else m = "";
                                        break;
                                    default:
                                        m = e(s, t(s, z, U), m, d, f + 1)
                                }
                                V += m, m = U = F = M = h = 0, z = "", p = l.charCodeAt(++N);
                                break;
                            case 125:
                            case 59:
                                if (1 < (j = (z = (0 < F ? z.replace(u, "") : z).trim()).length)) switch (0 === M && (h = z.charCodeAt(0), 45 === h || 96 < h && 123 > h) && (j = (z = z.replace(" ", ":")).length), 0 < D && void 0 !== (E = o(1, z, s, r, R, C, K.length, d, f, d)) && 0 === (j = (z = E.trim()).length) && (z = "\0\0"), h = z.charCodeAt(0), p = z.charCodeAt(1), h) {
                                    case 0:
                                        break;
                                    case 64:
                                        if (105 === p || 99 === p) {
                                            H += z + l.charAt(N);
                                            break
                                        }
                                    default:
                                        58 !== z.charCodeAt(j - 1) && (K += n(z, h, p, z.charCodeAt(2)))
                                }
                                U = F = M = h = 0, z = "", p = l.charCodeAt(++N)
                        }
                    }
                    switch (p) {
                        case 13:
                        case 10:
                            47 === w ? w = 0 : 0 === 1 + h && 107 !== d && 0 < z.length && (F = 1, z += "\0"), 0 < D * I && o(0, z, s, r, R, C, K.length, d, f, d), C = 1, R++;
                            break;
                        case 59:
                        case 125:
                            if (0 === w + _ + k + S) {
                                C++;
                                break
                            }
                        default:
                            switch (C++, b = l.charAt(N), p) {
                                case 9:
                                case 32:
                                    if (0 === _ + S + w) switch (O) {
                                        case 44:
                                        case 58:
                                        case 9:
                                        case 32:
                                            b = "";
                                            break;
                                        default:
                                            32 !== p && (b = " ")
                                    }
                                    break;
                                case 0:
                                    b = "\\0";
                                    break;
                                case 12:
                                    b = "\\f";
                                    break;
                                case 11:
                                    b = "\\v";
                                    break;
                                case 38:
                                    0 === _ + w + S && (F = U = 1, b = "\f" + b);
                                    break;
                                case 108:
                                    if (0 === _ + w + S + x && 0 < M) switch (N - M) {
                                        case 2:
                                            112 === O && 58 === l.charCodeAt(N - 3) && (x = O);
                                        case 8:
                                            111 === L && (x = L)
                                    }
                                    break;
                                case 58:
                                    0 === _ + w + S && (M = N);
                                    break;
                                case 44:
                                    0 === w + k + _ + S && (F = 1, b += "\r");
                                    break;
                                case 34:
                                case 39:
                                    0 === w && (_ = _ === p ? 0 : 0 === _ ? p : _);
                                    break;
                                case 91:
                                    0 === _ + w + k && S++;
                                    break;
                                case 93:
                                    0 === _ + w + k && S--;
                                    break;
                                case 41:
                                    0 === _ + w + S && k--;
                                    break;
                                case 40:
                                    if (0 === _ + w + S) {
                                        if (0 === h) switch (2 * O + 3 * L) {
                                            case 533:
                                                break;
                                            default:
                                                h = 1
                                        }
                                        k++
                                    }
                                    break;
                                case 64:
                                    0 === w + k + _ + S + M + m && (m = 1);
                                    break;
                                case 42:
                                case 47:
                                    if (!(0 < _ + S + k)) switch (w) {
                                        case 0:
                                            switch (2 * p + 3 * l.charCodeAt(N + 1)) {
                                                case 235:
                                                    w = 47;
                                                    break;
                                                case 220:
                                                    j = N, w = 42
                                            }
                                            break;
                                        case 42:
                                            47 === p && 42 === O && j + 2 !== N && (33 === l.charCodeAt(j + 2) && (K += l.substring(j, N + 1)), b = "", w = 0)
                                    }
                            }
                            0 === w && (z += b)
                    }
                    L = O, O = p, N++
                }
                if (0 < (j = K.length)) {
                    if (F = s, 0 < D && (void 0 !== (E = o(2, K, F, r, R, C, j, d, f, d)) && 0 === (K = E).length)) return H + K + V;
                    if (K = F.join(",") + "{" + K + "}", 0 != P * x) {
                        switch (2 !== P || i(K, 2) || (x = 0), x) {
                            case 111:
                                K = K.replace(y, ":-moz-$1") + K;
                                break;
                            case 112:
                                K = K.replace(v, "::-webkit-input-$1") + K.replace(v, "::-moz-$1") + K.replace(v, ":-ms-input-$1") + K
                        }
                        x = 0
                    }
                }
                return H + K + V
            }(A, s, r, 0, 0);
            return 0 < D && (void 0 !== (l = o(-2, d, s, s, R, C, d.length, 0, 0, 0)) && (d = l)), "", x = 0, C = R = 1, d
        }
        var c = /^\0+/g,
            u = /[\0\r\f]/g,
            d = /: */g,
            f = /zoo|gra/,
            h = /([,: ])(transform)/g,
            p = /,\r+?/g,
            m = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            v = /::(place)/g,
            y = /:(read-only)/g,
            b = /[svh]\w+-[tblr]{2}/,
            T = /\(\s*(.*)\s*\)/g,
            E = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            w = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            k = /stretch|:\s*\w+\-(?:conte|avail)/,
            _ = /([^-])(image-set\()/,
            C = 1,
            R = 1,
            x = 0,
            P = 1,
            A = [],
            O = [],
            D = 0,
            L = null,
            I = 0;
        return l.use = function e(t) {
            switch (t) {
                case void 0:
                case null:
                    D = O.length = 0;
                    break;
                default:
                    if ("function" == typeof t) O[D++] = t;
                    else if ("object" == typeof t)
                        for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                    else I = 0 | !!t
            }
            return e
        }, l.set = s, void 0 !== e && s(e), l
    };

    function l(e) {
        e && c.current.insert(e + "}")
    }
    var c = {
            current: null
        },
        u = function(e, t, r, n, i, a, o, s, u, d) {
            switch (e) {
                case 1:
                    switch (t.charCodeAt(0)) {
                        case 64:
                            return c.current.insert(t + ";"), "";
                        case 108:
                            if (98 === t.charCodeAt(2)) return ""
                    }
                    break;
                case 2:
                    if (0 === s) return t + "/*|*/";
                    break;
                case 3:
                    switch (s) {
                        case 102:
                        case 112:
                            return c.current.insert(r[0] + t), "";
                        default:
                            return t + (0 === d ? "/*|*/" : "")
                    }
                case -2:
                    t.split("/*|*/}").forEach(l)
            }
        },
        d = function(e) {
            void 0 === e && (e = {});
            var t, r = e.key || "css";
            void 0 !== e.prefix && (t = {
                prefix: e.prefix
            });
            var n = new s(t);
            var i, a = {};
            i = e.container || document.head;
            var l, d = document.querySelectorAll("style[data-emotion-" + r + "]");
            Array.prototype.forEach.call(d, (function(e) {
                e.getAttribute("data-emotion-" + r).split(" ").forEach((function(e) {
                    a[e] = !0
                })), e.parentNode !== i && i.appendChild(e)
            })), n.use(e.stylisPlugins)(u), l = function(e, t, r, i) {
                var a = t.name;
                c.current = r, n(e, t.styles), i && (f.inserted[a] = !0)
            };
            var f = {
                key: r,
                sheet: new o({
                    key: r,
                    container: i,
                    nonce: e.nonce,
                    speedy: e.speedy
                }),
                nonce: e.nonce,
                inserted: a,
                registered: {},
                insert: l
            };
            return f
        },
        f = r(2),
        h = r(1);
    var p = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return Object(h.a)(t)
    };
    r.d(t, "CacheProvider", (function() {
        return v
    })), r.d(t, "ClassNames", (function() {
        return P
    })), r.d(t, "Global", (function() {
        return k
    })), r.d(t, "ThemeContext", (function() {
        return g
    })), r.d(t, "jsx", (function() {
        return w
    })), r.d(t, "keyframes", (function() {
        return C
    })), r.d(t, "withEmotionCache", (function() {
        return y
    })), r.d(t, "css", (function() {
        return p
    }));
    var m = Object(a.createContext)("undefined" != typeof HTMLElement ? d() : null),
        g = Object(a.createContext)({}),
        v = m.Provider,
        y = function(e) {
            return Object(a.forwardRef)((function(t, r) {
                return Object(a.createElement)(m.Consumer, null, (function(n) {
                    return e(t, n, r)
                }))
            }))
        },
        b = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        T = Object.prototype.hasOwnProperty,
        E = function(e, t, r, n) {
            var i = null === r ? t.css : t.css(r);
            "string" == typeof i && void 0 !== e.registered[i] && (i = e.registered[i]);
            var o = t[b],
                s = [i],
                l = "";
            "string" == typeof t.className ? l = Object(f.a)(e.registered, s, t.className) : null != t.className && (l = t.className + " ");
            var c = Object(h.a)(s);
            Object(f.b)(e, c, "string" == typeof o);
            l += e.key + "-" + c.name;
            var u = {};
            for (var d in t) T.call(t, d) && "css" !== d && d !== b && (u[d] = t[d]);
            return u.ref = n, u.className = l, Object(a.createElement)(o, u)
        },
        S = y((function(e, t, r) {
            return "function" == typeof e.css ? Object(a.createElement)(g.Consumer, null, (function(n) {
                return E(t, e, n, r)
            })) : E(t, e, null, r)
        }));
    var w = function(e, t) {
            var r = arguments;
            if (null == t || !T.call(t, "css")) return a.createElement.apply(void 0, r);
            var n = r.length,
                i = new Array(n);
            i[0] = S;
            var o = {};
            for (var s in t) T.call(t, s) && (o[s] = t[s]);
            o[b] = e, i[1] = o;
            for (var l = 2; l < n; l++) i[l] = r[l];
            return a.createElement.apply(null, i)
        },
        k = y((function(e, t) {
            var r = e.styles;
            if ("function" == typeof r) return Object(a.createElement)(g.Consumer, null, (function(e) {
                var n = Object(h.a)([r(e)]);
                return Object(a.createElement)(_, {
                    serialized: n,
                    cache: t
                })
            }));
            var n = Object(h.a)([r]);
            return Object(a.createElement)(_, {
                serialized: n,
                cache: t
            })
        })),
        _ = function(e) {
            function t(t, r, n) {
                return e.call(this, t, r, n) || this
            }
            i()(t, e);
            var r = t.prototype;
            return r.componentDidMount = function() {
                this.sheet = new o({
                    key: this.props.cache.key + "-global",
                    nonce: this.props.cache.sheet.nonce,
                    container: this.props.cache.sheet.container
                });
                var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
                null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
            }, r.componentDidUpdate = function(e) {
                e.serialized.name !== this.props.serialized.name && this.insertStyles()
            }, r.insertStyles = function() {
                if (void 0 !== this.props.serialized.next && Object(f.b)(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                    var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                    this.sheet.before = e, this.sheet.flush()
                }
                this.props.cache.insert("", this.props.serialized, this.sheet, !1)
            }, r.componentWillUnmount = function() {
                this.sheet.flush()
            }, r.render = function() {
                return null
            }, t
        }(a.Component),
        C = function() {
            var e = p.apply(void 0, arguments),
                t = "animation-" + e.name;
            return {
                name: t,
                styles: "@keyframes " + t + "{" + e.styles + "}",
                anim: 1,
                toString: function() {
                    return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                }
            }
        },
        R = function e(t) {
            for (var r = t.length, n = 0, i = ""; n < r; n++) {
                var a = t[n];
                if (null != a) {
                    var o = void 0;
                    switch (typeof a) {
                        case "boolean":
                            break;
                        case "object":
                            if (Array.isArray(a)) o = e(a);
                            else
                                for (var s in o = "", a) a[s] && s && (o && (o += " "), o += s);
                            break;
                        default:
                            o = a
                    }
                    o && (i && (i += " "), i += o)
                }
            }
            return i
        };

    function x(e, t, r) {
        var n = [],
            i = Object(f.a)(e, n, r);
        return n.length < 2 ? r : i + t(n)
    }
    var P = y((function(e, t) {
        return Object(a.createElement)(g.Consumer, null, (function(r) {
            var n = function() {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    var i = Object(h.a)(r, t.registered);
                    return Object(f.b)(t, i, !1), t.key + "-" + i.name
                },
                i = {
                    css: n,
                    cx: function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        return x(t.registered, n, R(r))
                    },
                    theme: r
                },
                a = e.children(i);
            return !0, a
        }))
    }))
}, function(e, t, r) {
    "use strict";
    var n = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10)
        }
    };
    n.localCName = n.generateIdentifier(), n.splitLines = function(e) {
        return e.trim().split("\n").map((function(e) {
            return e.trim()
        }))
    }, n.splitSections = function(e) {
        return e.split("\nm=").map((function(e, t) {
            return (t > 0 ? "m=" + e : e).trim() + "\r\n"
        }))
    }, n.getDescription = function(e) {
        var t = n.splitSections(e);
        return t && t[0]
    }, n.getMediaSections = function(e) {
        var t = n.splitSections(e);
        return t.shift(), t
    }, n.matchPrefix = function(e, t) {
        return n.splitLines(e).filter((function(e) {
            return 0 === e.indexOf(t)
        }))
    }, n.parseCandidate = function(e) {
        for (var t, r = {
                foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                component: parseInt(t[1], 10),
                protocol: t[2].toLowerCase(),
                priority: parseInt(t[3], 10),
                ip: t[4],
                address: t[4],
                port: parseInt(t[5], 10),
                type: t[7]
            }, n = 8; n < t.length; n += 2) switch (t[n]) {
            case "raddr":
                r.relatedAddress = t[n + 1];
                break;
            case "rport":
                r.relatedPort = parseInt(t[n + 1], 10);
                break;
            case "tcptype":
                r.tcpType = t[n + 1];
                break;
            case "ufrag":
                r.ufrag = t[n + 1], r.usernameFragment = t[n + 1];
                break;
            default:
                r[t[n]] = t[n + 1]
        }
        return r
    }, n.writeCandidate = function(e) {
        var t = [];
        t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
        var r = e.type;
        return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
    }, n.parseIceOptions = function(e) {
        return e.substr(14).split(" ")
    }, n.parseRtpMap = function(e) {
        var t = e.substr(9).split(" "),
            r = {
                payloadType: parseInt(t.shift(), 10)
            };
        return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
    }, n.writeRtpMap = function(e) {
        var t = e.payloadType;
        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
        var r = e.channels || e.numChannels || 1;
        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
    }, n.parseExtmap = function(e) {
        var t = e.substr(9).split(" ");
        return {
            id: parseInt(t[0], 10),
            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
            uri: t[1]
        }
    }, n.writeExtmap = function(e) {
        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
    }, n.parseFmtp = function(e) {
        for (var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++) r[(t = n[i].trim().split("="))[0].trim()] = t[1];
        return r
    }, n.writeFmtp = function(e) {
        var t = "",
            r = e.payloadType;
        if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var n = [];
            Object.keys(e.parameters).forEach((function(t) {
                e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t)
            })), t += "a=fmtp:" + r + " " + n.join(";") + "\r\n"
        }
        return t
    }, n.parseRtcpFb = function(e) {
        var t = e.substr(e.indexOf(" ") + 1).split(" ");
        return {
            type: t.shift(),
            parameter: t.join(" ")
        }
    }, n.writeRtcpFb = function(e) {
        var t = "",
            r = e.payloadType;
        return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((function(e) {
            t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
        })), t
    }, n.parseSsrcMedia = function(e) {
        var t = e.indexOf(" "),
            r = {
                ssrc: parseInt(e.substr(7, t - 7), 10)
            },
            n = e.indexOf(":", t);
        return n > -1 ? (r.attribute = e.substr(t + 1, n - t - 1), r.value = e.substr(n + 1)) : r.attribute = e.substr(t + 1), r
    }, n.parseSsrcGroup = function(e) {
        var t = e.substr(13).split(" ");
        return {
            semantics: t.shift(),
            ssrcs: t.map((function(e) {
                return parseInt(e, 10)
            }))
        }
    }, n.getMid = function(e) {
        var t = n.matchPrefix(e, "a=mid:")[0];
        if (t) return t.substr(6)
    }, n.parseFingerprint = function(e) {
        var t = e.substr(14).split(" ");
        return {
            algorithm: t[0].toLowerCase(),
            value: t[1]
        }
    }, n.getDtlsParameters = function(e, t) {
        return {
            role: "auto",
            fingerprints: n.matchPrefix(e + t, "a=fingerprint:").map(n.parseFingerprint)
        }
    }, n.writeDtlsParameters = function(e, t) {
        var r = "a=setup:" + t + "\r\n";
        return e.fingerprints.forEach((function(e) {
            r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
        })), r
    }, n.parseCryptoLine = function(e) {
        var t = e.substr(9).split(" ");
        return {
            tag: parseInt(t[0], 10),
            cryptoSuite: t[1],
            keyParams: t[2],
            sessionParams: t.slice(3)
        }
    }, n.writeCryptoLine = function(e) {
        return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? n.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n"
    }, n.parseCryptoKeyParams = function(e) {
        if (0 !== e.indexOf("inline:")) return null;
        var t = e.substr(7).split("|");
        return {
            keyMethod: "inline",
            keySalt: t[0],
            lifeTime: t[1],
            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
            mkiLength: t[2] ? t[2].split(":")[1] : void 0
        }
    }, n.writeCryptoKeyParams = function(e) {
        return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
    }, n.getCryptoParameters = function(e, t) {
        return n.matchPrefix(e + t, "a=crypto:").map(n.parseCryptoLine)
    }, n.getIceParameters = function(e, t) {
        var r = n.splitLines(e);
        return {
            usernameFragment: (r = r.concat(n.splitLines(t))).filter((function(e) {
                return 0 === e.indexOf("a=ice-ufrag:")
            }))[0].substr(12),
            password: r.filter((function(e) {
                return 0 === e.indexOf("a=ice-pwd:")
            }))[0].substr(10)
        }
    }, n.writeIceParameters = function(e) {
        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
    }, n.parseRtpParameters = function(e) {
        for (var t = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, r = n.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
            var a = r[i],
                o = n.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
            if (o) {
                var s = n.parseRtpMap(o),
                    l = n.matchPrefix(e, "a=fmtp:" + a + " ");
                switch (s.parameters = l.length ? n.parseFmtp(l[0]) : {}, s.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(n.parseRtcpFb), t.codecs.push(s), s.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                        t.fecMechanisms.push(s.name.toUpperCase())
                }
            }
        }
        return n.matchPrefix(e, "a=extmap:").forEach((function(e) {
            t.headerExtensions.push(n.parseExtmap(e))
        })), t
    }, n.writeRtpDescription = function(e, t) {
        var r = "";
        r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map((function(e) {
            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
        })).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((function(e) {
            r += n.writeRtpMap(e), r += n.writeFmtp(e), r += n.writeRtcpFb(e)
        }));
        var i = 0;
        return t.codecs.forEach((function(e) {
            e.maxptime > i && (i = e.maxptime)
        })), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach((function(e) {
            r += n.writeExtmap(e)
        })), r
    }, n.parseRtpEncodingParameters = function(e) {
        var t, r = [],
            i = n.parseRtpParameters(e),
            a = -1 !== i.fecMechanisms.indexOf("RED"),
            o = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
            s = n.matchPrefix(e, "a=ssrc:").map((function(e) {
                return n.parseSsrcMedia(e)
            })).filter((function(e) {
                return "cname" === e.attribute
            })),
            l = s.length > 0 && s[0].ssrc,
            c = n.matchPrefix(e, "a=ssrc-group:FID").map((function(e) {
                return e.substr(17).split(" ").map((function(e) {
                    return parseInt(e, 10)
                }))
            }));
        c.length > 0 && c[0].length > 1 && c[0][0] === l && (t = c[0][1]), i.codecs.forEach((function(e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                var n = {
                    ssrc: l,
                    codecPayloadType: parseInt(e.parameters.apt, 10)
                };
                l && t && (n.rtx = {
                    ssrc: t
                }), r.push(n), a && ((n = JSON.parse(JSON.stringify(n))).fec = {
                    ssrc: l,
                    mechanism: o ? "red+ulpfec" : "red"
                }, r.push(n))
            }
        })), 0 === r.length && l && r.push({
            ssrc: l
        });
        var u = n.matchPrefix(e, "b=");
        return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 1e3 * parseInt(u[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach((function(e) {
            e.maxBitrate = u
        }))), r
    }, n.parseRtcpParameters = function(e) {
        var t = {},
            r = n.matchPrefix(e, "a=ssrc:").map((function(e) {
                return n.parseSsrcMedia(e)
            })).filter((function(e) {
                return "cname" === e.attribute
            }))[0];
        r && (t.cname = r.value, t.ssrc = r.ssrc);
        var i = n.matchPrefix(e, "a=rtcp-rsize");
        t.reducedSize = i.length > 0, t.compound = 0 === i.length;
        var a = n.matchPrefix(e, "a=rtcp-mux");
        return t.mux = a.length > 0, t
    }, n.parseMsid = function(e) {
        var t, r = n.matchPrefix(e, "a=msid:");
        if (1 === r.length) return {
            stream: (t = r[0].substr(7).split(" "))[0],
            track: t[1]
        };
        var i = n.matchPrefix(e, "a=ssrc:").map((function(e) {
            return n.parseSsrcMedia(e)
        })).filter((function(e) {
            return "msid" === e.attribute
        }));
        return i.length > 0 ? {
            stream: (t = i[0].value.split(" "))[0],
            track: t[1]
        } : void 0
    }, n.parseSctpDescription = function(e) {
        var t, r = n.parseMLine(e),
            i = n.matchPrefix(e, "a=max-message-size:");
        i.length > 0 && (t = parseInt(i[0].substr(19), 10)), isNaN(t) && (t = 65536);
        var a = n.matchPrefix(e, "a=sctp-port:");
        if (a.length > 0) return {
            port: parseInt(a[0].substr(12), 10),
            protocol: r.fmt,
            maxMessageSize: t
        };
        if (n.matchPrefix(e, "a=sctpmap:").length > 0) {
            var o = n.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
            return {
                port: parseInt(o[0], 10),
                protocol: o[1],
                maxMessageSize: t
            }
        }
    }, n.writeSctpDescription = function(e, t) {
        var r = [];
        return r = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), r.join("")
    }, n.generateSessionId = function() {
        return Math.random().toString().substr(2, 21)
    }, n.writeSessionBoilerplate = function(e, t, r) {
        var i = void 0 !== t ? t : 2;
        return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || n.generateSessionId()) + " " + i + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, n.writeMediaSection = function(e, t, r, i) {
        var a = n.writeRtpDescription(e.kind, t);
        if (a += n.writeIceParameters(e.iceGatherer.getLocalParameters()), a += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), a += "a=mid:" + e.mid + "\r\n", e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
            var o = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
            a += "a=" + o, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), a
    }, n.getDirection = function(e, t) {
        for (var r = n.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
                return r[i].substr(2)
        }
        return t ? n.getDirection(t) : "sendrecv"
    }, n.getKind = function(e) {
        return n.splitLines(e)[0].split(" ")[0].substr(2)
    }, n.isRejected = function(e) {
        return "0" === e.split(" ", 2)[1]
    }, n.parseMLine = function(e) {
        var t = n.splitLines(e)[0].substr(2).split(" ");
        return {
            kind: t[0],
            port: parseInt(t[1], 10),
            protocol: t[2],
            fmt: t.slice(3).join(" ")
        }
    }, n.parseOLine = function(e) {
        var t = n.matchPrefix(e, "o=")[0].substr(2).split(" ");
        return {
            username: t[0],
            sessionId: t[1],
            sessionVersion: parseInt(t[2], 10),
            netType: t[3],
            addressType: t[4],
            address: t[5]
        }
    }, n.isValidSDP = function(e) {
        if ("string" != typeof e || 0 === e.length) return !1;
        for (var t = n.splitLines(e), r = 0; r < t.length; r++)
            if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
        return !0
    }, e.exports = n
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(16),
        i = r.n(n),
        a = r(0),
        o = r(6),
        s = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        l = Object(o.a)((function(e) {
            return s.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        })),
        c = r(3),
        u = r(2),
        d = r(1),
        f = l,
        h = function(e) {
            return "theme" !== e && "innerRef" !== e
        },
        p = function(e) {
            return "string" == typeof e && e.charCodeAt(0) > 96 ? f : h
        };

    function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(r, !0).forEach((function(t) {
                i()(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(r).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
    t.default = function e(t, r) {
        var n, i, o;
        void 0 !== r && (n = r.label, o = r.target, i = t.__emotion_forwardProp && r.shouldForwardProp ? function(e) {
            return t.__emotion_forwardProp(e) && r.shouldForwardProp(e)
        } : r.shouldForwardProp);
        var s = t.__emotion_real === t,
            l = s && t.__emotion_base || t;
        "function" != typeof i && s && (i = t.__emotion_forwardProp);
        var f = i || p(l),
            h = !f("as");
        return function() {
            var m = arguments,
                v = s && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
            if (void 0 !== n && v.push("label:" + n + ";"), null == m[0] || void 0 === m[0].raw) v.push.apply(v, m);
            else {
                0,
                v.push(m[0][0]);
                for (var y = m.length, b = 1; b < y; b++) v.push(m[b], m[0][b])
            }
            var T = Object(c.withEmotionCache)((function(e, t, r) {
                return Object(a.createElement)(c.ThemeContext.Consumer, null, (function(n) {
                    var s = h && e.as || l,
                        c = "",
                        m = [],
                        g = e;
                    if (null == e.theme) {
                        for (var y in g = {}, e) g[y] = e[y];
                        g.theme = n
                    }
                    "string" == typeof e.className ? c = Object(u.a)(t.registered, m, e.className) : null != e.className && (c = e.className + " ");
                    var b = Object(d.a)(v.concat(m), t.registered, g);
                    Object(u.b)(t, b, "string" == typeof s);
                    c += t.key + "-" + b.name, void 0 !== o && (c += " " + o);
                    var T = h && void 0 === i ? p(s) : f,
                        E = {};
                    for (var S in e) h && "as" === S || T(S) && (E[S] = e[S]);
                    return E.className = c, E.ref = r || e.innerRef, Object(a.createElement)(s, E)
                }))
            }));
            return T.displayName = void 0 !== n ? n : "Styled(" + ("string" == typeof l ? l : l.displayName || l.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = l, T.__emotion_styles = v, T.__emotion_forwardProp = i, Object.defineProperty(T, "toString", {
                value: function() {
                    return "." + o
                }
            }), T.withComponent = function(t, n) {
                return e(t, void 0 !== n ? g({}, r || {}, {}, n) : r).apply(void 0, v)
            }, T
        }
    }
}, function(e, t, r) {
    "use strict";
    t.a = function(e) {
        var t = {};
        return function(r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r]
        }
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.StreamingPlayerProvider = function(e) {
        var t = (a = (0, i.useReducer)(h, f), s = 2, function(e) {
                if (Array.isArray(e)) return e
            }(a) || function(e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
            }(a, s) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()),
            r = t[0],
            n = t[1];
        var a, s;
        return (0, o.jsx)(p.Provider, {
            value: {
                state: r,
                dispatch: n
            }
        }, e.children)
    }, t.StreamingPlayerContext = void 0;
    var i = l(r(0)),
        a = l(r(13)),
        o = r(3);

    function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return s = function() {
            return e
        }, e
    }

    function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
                var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
            }
        return r.default = e, t && t.set(e, r), r
    }

    function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(r), !0).forEach((function(t) {
                d(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function d(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var f = {
            mute: !1,
            stopStreamCount: 0,
            showInfo: !1,
            controls: !1
        },
        h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case a.MUTE:
                    var r = t.mute;
                    return u({}, e, {
                        mute: r
                    });
                case a.PLAY_STREAM:
                    var n = t.streamName;
                    return u({}, e, {
                        streamName: n
                    });
                case a.STOP_STREAM:
                    var i = ++e.stopStreamCount;
                    return u({}, e, {
                        stopStreamCount: i
                    });
                case a.SHOW_INFO:
                    var o = t.showInfo;
                    return u({}, e, {
                        showInfo: o
                    });
                case a.SHOW_CONTROLS:
                    var s = t.controls;
                    return u({}, e, {
                        controls: s
                    });
                default:
                    return e
            }
        },
        p = (0, i.createContext)();
    t.StreamingPlayerContext = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.error = t.disconnected = t.connect_failed = t.connect_success = void 0;
    t.connect_success = "connect_success";
    t.connect_failed = "connect_failed";
    t.disconnected = "disconnected";
    t.error = "error"
}, function(e, t, r) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var n = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;

    function o(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                n[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var r, s, l = o(e), c = 1; c < arguments.length; c++) {
            for (var u in r = Object(arguments[c])) i.call(r, u) && (l[u] = r[u]);
            if (n) {
                s = n(r);
                for (var d = 0; d < s.length; d++) a.call(r, s[d]) && (l[s[d]] = r[s[d]])
            }
        }
        return l
    }
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(5).default.bind();
    ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
        n[e] = n(e)
    })), t.default = n
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = (0, ((n = r(5)) && n.__esModule ? n : {
        default: n
    }).default)("video", {
        target: "e1sj3p5j0",
        label: "VideoPlayer"
    })({
        name: "i0loyx",
        styles: "width:100%;height:100%;object-fit:fill;"
    });
    t.default = i, e.exports = t.default
}, function(e, t, r) {
    (function(t) {
        var r = t && t.pid ? t.pid.toString(36) : "";

        function n() {
            var e = Date.now(),
                t = n.last || e;
            return n.last = e > t ? e : t + 1
        }
        e.exports = e.exports.default = function(e, t) {
            return (e || "") + "" + r + n().toString(36) + (t || "")
        }, e.exports.process = function(e, t) {
            return (e || "") + r + n().toString(36) + (t || "")
        }, e.exports.time = function(e, t) {
            return (e || "") + n().toString(36) + (t || "")
        }
    }).call(this, r(26))
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SHOW_CONTROLS = t.SHOW_INFO = t.MUTE = t.STOP_STREAM = t.PLAY_STREAM = void 0;
    t.PLAY_STREAM = "PLAY_STREAM";
    t.STOP_STREAM = "STOP_STREAM";
    t.MUTE = "MUTE";
    t.SHOW_INFO = "SHOW_INFO";
    t.SHOW_CONTROLS = "SHOW_CONTROLS"
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = (0, ((n = r(5)) && n.__esModule ? n : {
        default: n
    }).default)("div", {
        target: "e1du8bv80",
        label: "PlayerContainer"
    })({
        name: "1f8sh1y",
        styles: "position:relative;width:100%;height:100%;"
    });
    t.default = i, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mute = function(e) {
        return {
            type: i.MUTE,
            mute: e
        }
    }, t.playStream = function(e) {
        return {
            type: i.PLAY_STREAM,
            streamName: e
        }
    }, t.stopStream = function(e) {
        return {
            type: i.STOP_STREAM,
            streamName: e
        }
    }, t.showInfo = function(e) {
        return {
            type: i.SHOW_INFO,
            showInfo: e
        }
    }, t.showControls = function(e) {
        return {
            type: i.SHOW_CONTROLS,
            controls: e
        }
    };
    var i = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
        };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
            }
        r.default = e, t && t.set(e, r);
        return r
    }(r(13));

    function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return a = function() {
            return e
        }, e
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }
}, function(e, t, r) {
    "use strict";
    var n = r(4);

    function i(e, t, r, i, a) {
        var o = n.writeRtpDescription(e.kind, t);
        if (o += n.writeIceParameters(e.iceGatherer.getLocalParameters()), o += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : a || "active"), o += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
            var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = s;
            var l = "msid:" + (i ? i.id : "-") + " " + s + "\r\n";
            o += "a=" + l, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + l, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + l, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), o
    }

    function a(e, t) {
        var r = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            n = function(e, t) {
                e = parseInt(e, 10);
                for (var r = 0; r < t.length; r++)
                    if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r]
            },
            i = function(e, t, r, i) {
                var a = n(e.parameters.apt, r),
                    o = n(t.parameters.apt, i);
                return a && o && a.name.toLowerCase() === o.name.toLowerCase()
            };
        return e.codecs.forEach((function(n) {
            for (var a = 0; a < t.codecs.length; a++) {
                var o = t.codecs[a];
                if (n.name.toLowerCase() === o.name.toLowerCase() && n.clockRate === o.clockRate) {
                    if ("rtx" === n.name.toLowerCase() && n.parameters && o.parameters.apt && !i(n, o, e.codecs, t.codecs)) continue;
                    (o = JSON.parse(JSON.stringify(o))).numChannels = Math.min(n.numChannels, o.numChannels), r.codecs.push(o), o.rtcpFeedback = o.rtcpFeedback.filter((function(e) {
                        for (var t = 0; t < n.rtcpFeedback.length; t++)
                            if (n.rtcpFeedback[t].type === e.type && n.rtcpFeedback[t].parameter === e.parameter) return !0;
                        return !1
                    }));
                    break
                }
            }
        })), e.headerExtensions.forEach((function(e) {
            for (var n = 0; n < t.headerExtensions.length; n++) {
                var i = t.headerExtensions[n];
                if (e.uri === i.uri) {
                    r.headerExtensions.push(i);
                    break
                }
            }
        })), r
    }

    function o(e, t, r) {
        return -1 !== {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        }[t][e].indexOf(r)
    }

    function s(e, t) {
        var r = e.getRemoteCandidates().find((function(e) {
            return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
        }));
        return r || e.addRemoteCandidate(t), !r
    }

    function l(e, t) {
        var r = new Error(t);
        return r.name = e, r.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        }[e], r
    }
    e.exports = function(e, t) {
        function r(t, r) {
            r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {
                track: t
            }))
        }

        function c(t, r, n, i) {
            var a = new Event("track");
            a.track = r, a.receiver = n, a.transceiver = {
                receiver: n
            }, a.streams = i, e.setTimeout((function() {
                t._dispatchEvent("track", a)
            }))
        }
        var u = function(r) {
            var i = this,
                a = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function(e) {
                    i[e] = a[e].bind(a)
                })), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", r = JSON.parse(JSON.stringify(r || {})), this.usingBundle = "max-bundle" === r.bundlePolicy, "negotiate" === r.rtcpMuxPolicy) throw l("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
            switch (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"), r.iceTransportPolicy) {
                case "all":
                case "relay":
                    break;
                default:
                    r.iceTransportPolicy = "all"
            }
            switch (r.bundlePolicy) {
                case "balanced":
                case "max-compat":
                case "max-bundle":
                    break;
                default:
                    r.bundlePolicy = "balanced"
            }
            if (r.iceServers = function(e, t) {
                    var r = !1;
                    return (e = JSON.parse(JSON.stringify(e))).filter((function(e) {
                        if (e && (e.urls || e.url)) {
                            var n = e.urls || e.url;
                            e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                            var i = "string" == typeof n;
                            return i && (n = [n]), n = n.filter((function(e) {
                                return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !r ? (r = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp")
                            })), delete e.url, e.urls = i ? n[0] : n, !!n.length
                        }
                    }))
                }(r.iceServers || [], t), this._iceGatherers = [], r.iceCandidatePoolSize)
                for (var o = r.iceCandidatePoolSize; o > 0; o--) this._iceGatherers.push(new e.RTCIceGatherer({
                    iceServers: r.iceServers,
                    gatherPolicy: r.iceTransportPolicy
                }));
            else r.iceCandidatePoolSize = 0;
            this._config = r, this.transceivers = [], this._sdpSessionId = n.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
        };
        Object.defineProperty(u.prototype, "localDescription", {
            configurable: !0,
            get: function() {
                return this._localDescription
            }
        }), Object.defineProperty(u.prototype, "remoteDescription", {
            configurable: !0,
            get: function() {
                return this._remoteDescription
            }
        }), u.prototype.onicecandidate = null, u.prototype.onaddstream = null, u.prototype.ontrack = null, u.prototype.onremovestream = null, u.prototype.onsignalingstatechange = null, u.prototype.oniceconnectionstatechange = null, u.prototype.onconnectionstatechange = null, u.prototype.onicegatheringstatechange = null, u.prototype.onnegotiationneeded = null, u.prototype.ondatachannel = null, u.prototype._dispatchEvent = function(e, t) {
            this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t))
        }, u.prototype._emitGatheringStateChange = function() {
            var e = new Event("icegatheringstatechange");
            this._dispatchEvent("icegatheringstatechange", e)
        }, u.prototype.getConfiguration = function() {
            return this._config
        }, u.prototype.getLocalStreams = function() {
            return this.localStreams
        }, u.prototype.getRemoteStreams = function() {
            return this.remoteStreams
        }, u.prototype._createTransceiver = function(e, t) {
            var r = this.transceivers.length > 0,
                n = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: e,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && r) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var i = this._createIceAndDtlsTransports();
                n.iceTransport = i.iceTransport, n.dtlsTransport = i.dtlsTransport
            }
            return t || this.transceivers.push(n), n
        }, u.prototype.addTrack = function(t, r) {
            if (this._isClosed) throw l("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var n;
            if (this.transceivers.find((function(e) {
                    return e.track === t
                }))) throw l("InvalidAccessError", "Track already exists.");
            for (var i = 0; i < this.transceivers.length; i++) this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (n = this.transceivers[i]);
            return n || (n = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), n.track = t, n.stream = r, n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport), n.rtpSender
        }, u.prototype.addStream = function(e) {
            var r = this;
            if (t >= 15025) e.getTracks().forEach((function(t) {
                r.addTrack(t, e)
            }));
            else {
                var n = e.clone();
                e.getTracks().forEach((function(e, t) {
                    var r = n.getTracks()[t];
                    e.addEventListener("enabled", (function(e) {
                        r.enabled = e.enabled
                    }))
                })), n.getTracks().forEach((function(e) {
                    r.addTrack(e, n)
                }))
            }
        }, u.prototype.removeTrack = function(t) {
            if (this._isClosed) throw l("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var r = this.transceivers.find((function(e) {
                return e.rtpSender === t
            }));
            if (!r) throw l("InvalidAccessError", "Sender was not created by this connection.");
            var n = r.stream;
            r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null, -1 === this.transceivers.map((function(e) {
                return e.stream
            })).indexOf(n) && this.localStreams.indexOf(n) > -1 && this.localStreams.splice(this.localStreams.indexOf(n), 1), this._maybeFireNegotiationNeeded()
        }, u.prototype.removeStream = function(e) {
            var t = this;
            e.getTracks().forEach((function(e) {
                var r = t.getSenders().find((function(t) {
                    return t.track === e
                }));
                r && t.removeTrack(r)
            }))
        }, u.prototype.getSenders = function() {
            return this.transceivers.filter((function(e) {
                return !!e.rtpSender
            })).map((function(e) {
                return e.rtpSender
            }))
        }, u.prototype.getReceivers = function() {
            return this.transceivers.filter((function(e) {
                return !!e.rtpReceiver
            })).map((function(e) {
                return e.rtpReceiver
            }))
        }, u.prototype._createIceGatherer = function(t, r) {
            var n = this;
            if (r && t > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var i = new e.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(i, "state", {
                value: "new",
                writable: !0
            }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function(e) {
                var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                i.state = r ? "completed" : "gathering", null !== n.transceivers[t].bufferedCandidateEvents && n.transceivers[t].bufferedCandidateEvents.push(e)
            }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i
        }, u.prototype._gather = function(t, r) {
            var i = this,
                a = this.transceivers[r].iceGatherer;
            if (!a.onlocalcandidate) {
                var o = this.transceivers[r].bufferedCandidateEvents;
                this.transceivers[r].bufferedCandidateEvents = null, a.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), a.onlocalcandidate = function(e) {
                    if (!(i.usingBundle && r > 0)) {
                        var o = new Event("icecandidate");
                        o.candidate = {
                            sdpMid: t,
                            sdpMLineIndex: r
                        };
                        var s = e.candidate,
                            l = !s || 0 === Object.keys(s).length;
                        if (l) "new" !== a.state && "gathering" !== a.state || (a.state = "completed");
                        else {
                            "new" === a.state && (a.state = "gathering"), s.component = 1, s.ufrag = a.getLocalParameters().usernameFragment;
                            var c = n.writeCandidate(s);
                            o.candidate = Object.assign(o.candidate, n.parseCandidate(c)), o.candidate.candidate = c, o.candidate.toJSON = function() {
                                return {
                                    candidate: o.candidate.candidate,
                                    sdpMid: o.candidate.sdpMid,
                                    sdpMLineIndex: o.candidate.sdpMLineIndex,
                                    usernameFragment: o.candidate.usernameFragment
                                }
                            }
                        }
                        var u = n.getMediaSections(i._localDescription.sdp);
                        u[o.candidate.sdpMLineIndex] += l ? "a=end-of-candidates\r\n" : "a=" + o.candidate.candidate + "\r\n", i._localDescription.sdp = n.getDescription(i._localDescription.sdp) + u.join("");
                        var d = i.transceivers.every((function(e) {
                            return e.iceGatherer && "completed" === e.iceGatherer.state
                        }));
                        "gathering" !== i.iceGatheringState && (i.iceGatheringState = "gathering", i._emitGatheringStateChange()), l || i._dispatchEvent("icecandidate", o), d && (i._dispatchEvent("icecandidate", new Event("icecandidate")), i.iceGatheringState = "complete", i._emitGatheringStateChange())
                    }
                }, e.setTimeout((function() {
                    o.forEach((function(e) {
                        a.onlocalcandidate(e)
                    }))
                }), 0)
            }
        }, u.prototype._createIceAndDtlsTransports = function() {
            var t = this,
                r = new e.RTCIceTransport(null);
            r.onicestatechange = function() {
                t._updateIceConnectionState(), t._updateConnectionState()
            };
            var n = new e.RTCDtlsTransport(r);
            return n.ondtlsstatechange = function() {
                t._updateConnectionState()
            }, n.onerror = function() {
                Object.defineProperty(n, "state", {
                    value: "failed",
                    writable: !0
                }), t._updateConnectionState()
            }, {
                iceTransport: r,
                dtlsTransport: n
            }
        }, u.prototype._disposeIceAndDtlsTransports = function(e) {
            var t = this.transceivers[e].iceGatherer;
            t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
            var r = this.transceivers[e].iceTransport;
            r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
            var n = this.transceivers[e].dtlsTransport;
            n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport)
        }, u.prototype._transceive = function(e, r, i) {
            var o = a(e.localCapabilities, e.remoteCapabilities);
            r && e.rtpSender && (o.encodings = e.sendEncodingParameters, o.rtcp = {
                cname: n.localCName,
                compound: e.rtcpParameters.compound
            }, e.recvEncodingParameters.length && (o.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(o)), i && e.rtpReceiver && o.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach((function(e) {
                delete e.rtx
            })), e.recvEncodingParameters.length ? o.encodings = e.recvEncodingParameters : o.encodings = [{}], o.rtcp = {
                compound: e.rtcpParameters.compound
            }, e.rtcpParameters.cname && (o.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (o.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(o))
        }, u.prototype.setLocalDescription = function(e) {
            var t, r, i = this;
            if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(l("TypeError", 'Unsupported type "' + e.type + '"'));
            if (!o("setLocalDescription", e.type, i.signalingState) || i._isClosed) return Promise.reject(l("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState));
            if ("offer" === e.type) t = n.splitSections(e.sdp), r = t.shift(), t.forEach((function(e, t) {
                var r = n.parseRtpParameters(e);
                i.transceivers[t].localCapabilities = r
            })), i.transceivers.forEach((function(e, t) {
                i._gather(e.mid, t)
            }));
            else if ("answer" === e.type) {
                t = n.splitSections(i._remoteDescription.sdp), r = t.shift();
                var s = n.matchPrefix(r, "a=ice-lite").length > 0;
                t.forEach((function(e, t) {
                    var o = i.transceivers[t],
                        l = o.iceGatherer,
                        c = o.iceTransport,
                        u = o.dtlsTransport,
                        d = o.localCapabilities,
                        f = o.remoteCapabilities;
                    if (!(n.isRejected(e) && 0 === n.matchPrefix(e, "a=bundle-only").length) && !o.rejected) {
                        var h = n.getIceParameters(e, r),
                            p = n.getDtlsParameters(e, r);
                        s && (p.role = "server"), i.usingBundle && 0 !== t || (i._gather(o.mid, t), "new" === c.state && c.start(l, h, s ? "controlling" : "controlled"), "new" === u.state && u.start(p));
                        var m = a(d, f);
                        i._transceive(o, m.codecs.length > 0, !1)
                    }
                }))
            }
            return i._localDescription = {
                type: e.type,
                sdp: e.sdp
            }, "offer" === e.type ? i._updateSignalingState("have-local-offer") : i._updateSignalingState("stable"), Promise.resolve()
        }, u.prototype.setRemoteDescription = function(i) {
            var u = this;
            if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(l("TypeError", 'Unsupported type "' + i.type + '"'));
            if (!o("setRemoteDescription", i.type, u.signalingState) || u._isClosed) return Promise.reject(l("InvalidStateError", "Can not set remote " + i.type + " in state " + u.signalingState));
            var d = {};
            u.remoteStreams.forEach((function(e) {
                d[e.id] = e
            }));
            var f = [],
                h = n.splitSections(i.sdp),
                p = h.shift(),
                m = n.matchPrefix(p, "a=ice-lite").length > 0,
                g = n.matchPrefix(p, "a=group:BUNDLE ").length > 0;
            u.usingBundle = g;
            var v = n.matchPrefix(p, "a=ice-options:")[0];
            return u.canTrickleIceCandidates = !!v && v.substr(14).split(" ").indexOf("trickle") >= 0, h.forEach((function(o, l) {
                var c = n.splitLines(o),
                    h = n.getKind(o),
                    v = n.isRejected(o) && 0 === n.matchPrefix(o, "a=bundle-only").length,
                    y = c[0].substr(2).split(" ")[2],
                    b = n.getDirection(o, p),
                    T = n.parseMsid(o),
                    E = n.getMid(o) || n.generateIdentifier();
                if (v || "application" === h && ("DTLS/SCTP" === y || "UDP/DTLS/SCTP" === y)) u.transceivers[l] = {
                    mid: E,
                    kind: h,
                    protocol: y,
                    rejected: !0
                };
                else {
                    var S, w, k, _, C, R, x, P, A;
                    !v && u.transceivers[l] && u.transceivers[l].rejected && (u.transceivers[l] = u._createTransceiver(h, !0));
                    var O, D, L = n.parseRtpParameters(o);
                    v || (O = n.getIceParameters(o, p), (D = n.getDtlsParameters(o, p)).role = "client"), x = n.parseRtpEncodingParameters(o);
                    var I = n.parseRtcpParameters(o),
                        M = n.matchPrefix(o, "a=end-of-candidates", p).length > 0,
                        N = n.matchPrefix(o, "a=candidate:").map((function(e) {
                            return n.parseCandidate(e)
                        })).filter((function(e) {
                            return 1 === e.component
                        }));
                    if (("offer" === i.type || "answer" === i.type) && !v && g && l > 0 && u.transceivers[l] && (u._disposeIceAndDtlsTransports(l), u.transceivers[l].iceGatherer = u.transceivers[0].iceGatherer, u.transceivers[l].iceTransport = u.transceivers[0].iceTransport, u.transceivers[l].dtlsTransport = u.transceivers[0].dtlsTransport, u.transceivers[l].rtpSender && u.transceivers[l].rtpSender.setTransport(u.transceivers[0].dtlsTransport), u.transceivers[l].rtpReceiver && u.transceivers[l].rtpReceiver.setTransport(u.transceivers[0].dtlsTransport)), "offer" !== i.type || v) {
                        if ("answer" === i.type && !v) {
                            w = (S = u.transceivers[l]).iceGatherer, k = S.iceTransport, _ = S.dtlsTransport, C = S.rtpReceiver, R = S.sendEncodingParameters, P = S.localCapabilities, u.transceivers[l].recvEncodingParameters = x, u.transceivers[l].remoteCapabilities = L, u.transceivers[l].rtcpParameters = I, N.length && "new" === k.state && (!m && !M || g && 0 !== l ? N.forEach((function(e) {
                                s(S.iceTransport, e)
                            })) : k.setRemoteCandidates(N)), g && 0 !== l || ("new" === k.state && k.start(w, O, "controlling"), "new" === _.state && _.start(D)), !a(S.localCapabilities, S.remoteCapabilities).codecs.filter((function(e) {
                                return "rtx" === e.name.toLowerCase()
                            })).length && S.sendEncodingParameters[0].rtx && delete S.sendEncodingParameters[0].rtx, u._transceive(S, "sendrecv" === b || "recvonly" === b, "sendrecv" === b || "sendonly" === b), !C || "sendrecv" !== b && "sendonly" !== b ? delete S.rtpReceiver : (A = C.track, T ? (d[T.stream] || (d[T.stream] = new e.MediaStream), r(A, d[T.stream]), f.push([A, C, d[T.stream]])) : (d.default || (d.default = new e.MediaStream), r(A, d.default), f.push([A, C, d.default])))
                        }
                    } else {
                        (S = u.transceivers[l] || u._createTransceiver(h)).mid = E, S.iceGatherer || (S.iceGatherer = u._createIceGatherer(l, g)), N.length && "new" === S.iceTransport.state && (!M || g && 0 !== l ? N.forEach((function(e) {
                            s(S.iceTransport, e)
                        })) : S.iceTransport.setRemoteCandidates(N)), P = e.RTCRtpReceiver.getCapabilities(h), t < 15019 && (P.codecs = P.codecs.filter((function(e) {
                            return "rtx" !== e.name
                        }))), R = S.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * l + 2)
                        }];
                        var F, U = !1;
                        if ("sendrecv" === b || "sendonly" === b) {
                            if (U = !S.rtpReceiver, C = S.rtpReceiver || new e.RTCRtpReceiver(S.dtlsTransport, h), U) A = C.track, T && "-" === T.stream || (T ? (d[T.stream] || (d[T.stream] = new e.MediaStream, Object.defineProperty(d[T.stream], "id", {
                                get: function() {
                                    return T.stream
                                }
                            })), Object.defineProperty(A, "id", {
                                get: function() {
                                    return T.track
                                }
                            }), F = d[T.stream]) : (d.default || (d.default = new e.MediaStream), F = d.default)), F && (r(A, F), S.associatedRemoteMediaStreams.push(F)), f.push([A, C, F])
                        } else S.rtpReceiver && S.rtpReceiver.track && (S.associatedRemoteMediaStreams.forEach((function(t) {
                            var r = t.getTracks().find((function(e) {
                                return e.id === S.rtpReceiver.track.id
                            }));
                            r && function(t, r) {
                                r.removeTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {
                                    track: t
                                }))
                            }(r, t)
                        })), S.associatedRemoteMediaStreams = []);
                        S.localCapabilities = P, S.remoteCapabilities = L, S.rtpReceiver = C, S.rtcpParameters = I, S.sendEncodingParameters = R, S.recvEncodingParameters = x, u._transceive(u.transceivers[l], !1, U)
                    }
                }
            })), void 0 === u._dtlsRole && (u._dtlsRole = "offer" === i.type ? "active" : "passive"), u._remoteDescription = {
                type: i.type,
                sdp: i.sdp
            }, "offer" === i.type ? u._updateSignalingState("have-remote-offer") : u._updateSignalingState("stable"), Object.keys(d).forEach((function(t) {
                var r = d[t];
                if (r.getTracks().length) {
                    if (-1 === u.remoteStreams.indexOf(r)) {
                        u.remoteStreams.push(r);
                        var n = new Event("addstream");
                        n.stream = r, e.setTimeout((function() {
                            u._dispatchEvent("addstream", n)
                        }))
                    }
                    f.forEach((function(e) {
                        var t = e[0],
                            n = e[1];
                        r.id === e[2].id && c(u, t, n, [r])
                    }))
                }
            })), f.forEach((function(e) {
                e[2] || c(u, e[0], e[1], [])
            })), e.setTimeout((function() {
                u && u.transceivers && u.transceivers.forEach((function(e) {
                    e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
                }))
            }), 4e3), Promise.resolve()
        }, u.prototype.close = function() {
            this.transceivers.forEach((function(e) {
                e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
            })), this._isClosed = !0, this._updateSignalingState("closed")
        }, u.prototype._updateSignalingState = function(e) {
            this.signalingState = e;
            var t = new Event("signalingstatechange");
            this._dispatchEvent("signalingstatechange", t)
        }, u.prototype._maybeFireNegotiationNeeded = function() {
            var t = this;
            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout((function() {
                if (t.needNegotiation) {
                    t.needNegotiation = !1;
                    var e = new Event("negotiationneeded");
                    t._dispatchEvent("negotiationneeded", e)
                }
            }), 0))
        }, u.prototype._updateIceConnectionState = function() {
            var e, t = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function(e) {
                    e.iceTransport && !e.rejected && t[e.iceTransport.state]++
                })), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
                this.iceConnectionState = e;
                var r = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", r)
            }
        }, u.prototype._updateConnectionState = function() {
            var e, t = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function(e) {
                    e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++)
                })), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
                this.connectionState = e;
                var r = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", r)
            }
        }, u.prototype.createOffer = function() {
            var r = this;
            if (r._isClosed) return Promise.reject(l("InvalidStateError", "Can not call createOffer after close"));
            var a = r.transceivers.filter((function(e) {
                    return "audio" === e.kind
                })).length,
                o = r.transceivers.filter((function(e) {
                    return "video" === e.kind
                })).length,
                s = arguments[0];
            if (s) {
                if (s.mandatory || s.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                void 0 !== s.offerToReceiveAudio && (a = !0 === s.offerToReceiveAudio ? 1 : !1 === s.offerToReceiveAudio ? 0 : s.offerToReceiveAudio), void 0 !== s.offerToReceiveVideo && (o = !0 === s.offerToReceiveVideo ? 1 : !1 === s.offerToReceiveVideo ? 0 : s.offerToReceiveVideo)
            }
            for (r.transceivers.forEach((function(e) {
                    "audio" === e.kind ? --a < 0 && (e.wantReceive = !1) : "video" === e.kind && --o < 0 && (e.wantReceive = !1)
                })); a > 0 || o > 0;) a > 0 && (r._createTransceiver("audio"), a--), o > 0 && (r._createTransceiver("video"), o--);
            var c = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
            r.transceivers.forEach((function(i, a) {
                var o = i.track,
                    s = i.kind,
                    l = i.mid || n.generateIdentifier();
                i.mid = l, i.iceGatherer || (i.iceGatherer = r._createIceGatherer(a, r.usingBundle));
                var c = e.RTCRtpSender.getCapabilities(s);
                t < 15019 && (c.codecs = c.codecs.filter((function(e) {
                    return "rtx" !== e.name
                }))), c.codecs.forEach((function(e) {
                    "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), i.remoteCapabilities && i.remoteCapabilities.codecs && i.remoteCapabilities.codecs.forEach((function(t) {
                        e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
                    }))
                })), c.headerExtensions.forEach((function(e) {
                    (i.remoteCapabilities && i.remoteCapabilities.headerExtensions || []).forEach((function(t) {
                        e.uri === t.uri && (e.id = t.id)
                    }))
                }));
                var u = i.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * a + 1)
                }];
                o && t >= 15019 && "video" === s && !u[0].rtx && (u[0].rtx = {
                    ssrc: u[0].ssrc + 1
                }), i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)), i.localCapabilities = c, i.sendEncodingParameters = u
            })), "max-compat" !== r._config.bundlePolicy && (c += "a=group:BUNDLE " + r.transceivers.map((function(e) {
                return e.mid
            })).join(" ") + "\r\n"), c += "a=ice-options:trickle\r\n", r.transceivers.forEach((function(e, t) {
                c += i(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), c += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach((function(e) {
                    e.component = 1, c += "a=" + n.writeCandidate(e) + "\r\n"
                })), "completed" === e.iceGatherer.state && (c += "a=end-of-candidates\r\n"))
            }));
            var u = new e.RTCSessionDescription({
                type: "offer",
                sdp: c
            });
            return Promise.resolve(u)
        }, u.prototype.createAnswer = function() {
            var r = this;
            if (r._isClosed) return Promise.reject(l("InvalidStateError", "Can not call createAnswer after close"));
            if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState) return Promise.reject(l("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState));
            var o = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
            r.usingBundle && (o += "a=group:BUNDLE " + r.transceivers.map((function(e) {
                return e.mid
            })).join(" ") + "\r\n"), o += "a=ice-options:trickle\r\n";
            var s = n.getMediaSections(r._remoteDescription.sdp).length;
            r.transceivers.forEach((function(e, n) {
                if (!(n + 1 > s)) {
                    if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? o += "m=application 0 DTLS/SCTP 5000\r\n" : o += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? o += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (o += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void(o += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                    var l;
                    if (e.stream) "audio" === e.kind ? l = e.stream.getAudioTracks()[0] : "video" === e.kind && (l = e.stream.getVideoTracks()[0]), l && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
                        ssrc: e.sendEncodingParameters[0].ssrc + 1
                    });
                    var c = a(e.localCapabilities, e.remoteCapabilities);
                    !c.codecs.filter((function(e) {
                        return "rtx" === e.name.toLowerCase()
                    })).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, o += i(e, c, "answer", e.stream, r._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (o += "a=rtcp-rsize\r\n")
                }
            }));
            var c = new e.RTCSessionDescription({
                type: "answer",
                sdp: o
            });
            return Promise.resolve(c)
        }, u.prototype.addIceCandidate = function(e) {
            var t, r = this;
            return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise((function(i, a) {
                if (!r._remoteDescription) return a(l("InvalidStateError", "Can not add ICE candidate without a remote description"));
                if (e && "" !== e.candidate) {
                    var o = e.sdpMLineIndex;
                    if (e.sdpMid)
                        for (var c = 0; c < r.transceivers.length; c++)
                            if (r.transceivers[c].mid === e.sdpMid) {
                                o = c;
                                break
                            }
                    var u = r.transceivers[o];
                    if (!u) return a(l("OperationError", "Can not add ICE candidate"));
                    if (u.rejected) return i();
                    var d = Object.keys(e.candidate).length > 0 ? n.parseCandidate(e.candidate) : {};
                    if ("tcp" === d.protocol && (0 === d.port || 9 === d.port)) return i();
                    if (d.component && 1 !== d.component) return i();
                    if ((0 === o || o > 0 && u.iceTransport !== r.transceivers[0].iceTransport) && !s(u.iceTransport, d)) return a(l("OperationError", "Can not add ICE candidate"));
                    var f = e.candidate.trim();
                    0 === f.indexOf("a=") && (f = f.substr(2)), (t = n.getMediaSections(r._remoteDescription.sdp))[o] += "a=" + (d.type ? f : "end-of-candidates") + "\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("")
                } else
                    for (var h = 0; h < r.transceivers.length && (r.transceivers[h].rejected || (r.transceivers[h].iceTransport.addRemoteCandidate({}), (t = n.getMediaSections(r._remoteDescription.sdp))[h] += "a=end-of-candidates\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join(""), !r.usingBundle)); h++);
                i()
            }))
        }, u.prototype.getStats = function(t) {
            if (t && t instanceof e.MediaStreamTrack) {
                var r = null;
                if (this.transceivers.forEach((function(e) {
                        e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver)
                    })), !r) throw l("InvalidAccessError", "Invalid selector.");
                return r.getStats()
            }
            var n = [];
            return this.transceivers.forEach((function(e) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function(t) {
                    e[t] && n.push(e[t].getStats())
                }))
            })), Promise.all(n).then((function(e) {
                var t = new Map;
                return e.forEach((function(e) {
                    e.forEach((function(e) {
                        t.set(e.id, e)
                    }))
                })), t
            }))
        };
        ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach((function(t) {
            var r = e[t];
            if (r && r.prototype && r.prototype.getStats) {
                var n = r.prototype.getStats;
                r.prototype.getStats = function() {
                    return n.apply(this).then((function(e) {
                        var t = new Map;
                        return Object.keys(e).forEach((function(r) {
                            var n;
                            e[r].type = {
                                inboundrtp: "inbound-rtp",
                                outboundrtp: "outbound-rtp",
                                candidatepair: "candidate-pair",
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[(n = e[r]).type] || n.type, t.set(r, e[r])
                        })), t
                    }))
                }
            }
        }));
        var d = ["createOffer", "createAnswer"];
        return d.forEach((function(e) {
            var t = u.prototype[e];
            u.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then((function(t) {
                    "function" == typeof e[0] && e[0].apply(null, [t])
                }), (function(t) {
                    "function" == typeof e[1] && e[1].apply(null, [t])
                })) : t.apply(this, arguments)
            }
        })), (d = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach((function(e) {
            var t = u.prototype[e];
            u.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then((function() {
                    "function" == typeof e[1] && e[1].apply(null)
                }), (function(t) {
                    "function" == typeof e[2] && e[2].apply(null, [t])
                })) : t.apply(this, arguments)
            }
        })), ["getStats"].forEach((function(e) {
            var t = u.prototype[e];
            u.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[1] ? t.apply(this, arguments).then((function() {
                    "function" == typeof e[1] && e[1].apply(null)
                })) : t.apply(this, arguments)
            }
        })), u
    }
}, function(e, t, r) {
    "use strict";
    var n = g(r(0)),
        i = g(r(21)),
        a = p(r(25)),
        o = p(r(28)),
        s = p(r(35)),
        l = r(7),
        c = (g(r(15)), p(r(31))),
        u = g(r(8)),
        d = r(33),
        f = g(r(34)),
        h = r(3);

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function m() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return m = function() {
            return e
        }, e
    }

    function g(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== v(e) && "function" != typeof e) return {
            default: e
        };
        var t = m();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
            }
        return r.default = e, t && t.set(e, r), r
    }

    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function S() {
        return (S = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }
    window.adapter = s.default;
    var w = function(e) {
            var t = (0, n.useContext)(l.StreamingPlayerContext).dispatch,
                r = e.bridge,
                i = e.Player;
            return (0, n.useEffect)((function() {
                r.dispatch = t
            }), []), (0, h.jsx)(i, S({}, e, {
                key: "video".concat(e.vid),
                playerBridge: r
            }))
        },
        k = 0,
        _ = function(e) {
            function t(e) {
                var r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n, s, c = e.type,
                    u = e.div;
                switch (c) {
                    case "citibet":
                        var f = e.serverUrls,
                            p = e.alertPic,
                            m = e.loadingPic,
                            g = e.noStreamPic;
                        s = {
                            serverUrls: f,
                            alertPic: p || "",
                            loadingPic: m || "",
                            noStreamPic: g || ""
                        };
                        break;
                    default:
                        n = e.limelightAccountName ? e.limelightAccountName : "stricts", (0, d.setLimelightAccountId)(n)
                }
                r = function(e, t) {
                    return !t || "object" !== v(t) && "function" != typeof t ? b(e) : t
                }(this, y(t).call(this)), k += 1, (0, i.unmountComponentAtNode)(u);
                var T = "limelight" === c ? a.default : o.default;
                return i.default.render((0, h.jsx)(l.StreamingPlayerProvider, null, (0, h.jsx)(w, S({
                    vid: k,
                    bridge: b(r)
                }, s, {
                    Player: T
                }))), u), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(t, e), t
        }(c.default);
    E(_, "EventTypes", u), E(_, "setLimelightAccountId", d.setLimelightAccountId), E(_, "Version", f), e.exports = _
}, function(e, t, r) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var n = r(9),
        i = "function" == typeof Symbol && Symbol.for,
        a = i ? Symbol.for("react.element") : 60103,
        o = i ? Symbol.for("react.portal") : 60106,
        s = i ? Symbol.for("react.fragment") : 60107,
        l = i ? Symbol.for("react.strict_mode") : 60108,
        c = i ? Symbol.for("react.profiler") : 60114,
        u = i ? Symbol.for("react.provider") : 60109,
        d = i ? Symbol.for("react.context") : 60110,
        f = i ? Symbol.for("react.forward_ref") : 60112,
        h = i ? Symbol.for("react.suspense") : 60113;
    i && Symbol.for("react.suspense_list");
    var p = i ? Symbol.for("react.memo") : 60115,
        m = i ? Symbol.for("react.lazy") : 60116;
    i && Symbol.for("react.fundamental"), i && Symbol.for("react.responder"), i && Symbol.for("react.scope");
    var g = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var y = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = {};

    function T(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || y
    }

    function E() {}

    function S(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || y
    }
    T.prototype.isReactComponent = {}, T.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, T.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, E.prototype = T.prototype;
    var w = S.prototype = new E;
    w.constructor = S, n(w, T.prototype), w.isPureReactComponent = !0;
    var k = {
            current: null
        },
        _ = {
            current: null
        },
        C = Object.prototype.hasOwnProperty,
        R = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function x(e, t, r) {
        var n, i = {},
            o = null,
            s = null;
        if (null != t)
            for (n in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) C.call(t, n) && !R.hasOwnProperty(n) && (i[n] = t[n]);
        var l = arguments.length - 2;
        if (1 === l) i.children = r;
        else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c
        }
        if (e && e.defaultProps)
            for (n in l = e.defaultProps) void 0 === i[n] && (i[n] = l[n]);
        return {
            $$typeof: a,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: _.current
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }
    var A = /\/+/g,
        O = [];

    function D(e, t, r, n) {
        if (O.length) {
            var i = O.pop();
            return i.result = e, i.keyPrefix = t, i.func = r, i.context = n, i.count = 0, i
        }
        return {
            result: e,
            keyPrefix: t,
            func: r,
            context: n,
            count: 0
        }
    }

    function L(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > O.length && O.push(e)
    }

    function I(e, t, r) {
        return null == e ? 0 : function e(t, r, n, i) {
            var s = typeof t;
            "undefined" !== s && "boolean" !== s || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else switch (s) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case a:
                        case o:
                            l = !0
                    }
            }
            if (l) return n(i, t, "" === r ? "." + M(t, 0) : r), 1;
            if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(t))
                for (var c = 0; c < t.length; c++) {
                    var u = r + M(s = t[c], c);
                    l += e(s, u, n, i)
                } else if (null === t || "object" != typeof t ? u = null : u = "function" == typeof(u = g && t[g] || t["@@iterator"]) ? u : null, "function" == typeof u)
                    for (t = u.call(t), c = 0; !(s = t.next()).done;) l += e(s = s.value, u = r + M(s, c++), n, i);
                else if ("object" === s) throw n = "" + t, Error(v(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
            return l
        }(e, "", t, r)
    }

    function M(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function N(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function F(e, t, r) {
        var n = e.result,
            i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, n, r, (function(e) {
            return e
        })) : null != e && (P(e) && (e = function(e, t) {
            return {
                $$typeof: a,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(A, "$&/") + "/") + r)), n.push(e))
    }

    function U(e, t, r, n, i) {
        var a = "";
        null != r && (a = ("" + r).replace(A, "$&/") + "/"), I(e, F, t = D(t, a, n, i)), L(t)
    }

    function j() {
        var e = k.current;
        if (null === e) throw Error(v(321));
        return e
    }
    var B = {
            Children: {
                map: function(e, t, r) {
                    if (null == e) return e;
                    var n = [];
                    return U(e, n, null, t, r), n
                },
                forEach: function(e, t, r) {
                    if (null == e) return e;
                    I(e, N, t = D(null, null, t, r)), L(t)
                },
                count: function(e) {
                    return I(e, (function() {
                        return null
                    }), null)
                },
                toArray: function(e) {
                    var t = [];
                    return U(e, t, null, (function(e) {
                        return e
                    })), t
                },
                only: function(e) {
                    if (!P(e)) throw Error(v(143));
                    return e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: T,
            PureComponent: S,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: d,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: u,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: f,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: m,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: p,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            useCallback: function(e, t) {
                return j().useCallback(e, t)
            },
            useContext: function(e, t) {
                return j().useContext(e, t)
            },
            useEffect: function(e, t) {
                return j().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, r) {
                return j().useImperativeHandle(e, t, r)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return j().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return j().useMemo(e, t)
            },
            useReducer: function(e, t, r) {
                return j().useReducer(e, t, r)
            },
            useRef: function(e) {
                return j().useRef(e)
            },
            useState: function(e) {
                return j().useState(e)
            },
            Fragment: s,
            Profiler: c,
            StrictMode: l,
            Suspense: h,
            createElement: x,
            cloneElement: function(e, t, r) {
                if (null == e) throw Error(v(267, e));
                var i = n({}, e.props),
                    o = e.key,
                    s = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (s = t.ref, l = _.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (u in t) C.call(t, u) && !R.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) i.children = r;
                else if (1 < u) {
                    c = Array(u);
                    for (var d = 0; d < u; d++) c[d] = arguments[d + 2];
                    i.children = c
                }
                return {
                    $$typeof: a,
                    type: e.type,
                    key: o,
                    ref: s,
                    props: i,
                    _owner: l
                }
            },
            createFactory: function(e) {
                var t = x.bind(null, e);
                return t.type = e, t
            },
            isValidElement: P,
            version: "16.12.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: k,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: _,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: n
            }
        },
        G = {
            default: B
        },
        z = G && B || G;
    e.exports = z.default || z
}, function(e, t, r) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = r(22)
}, function(e, t, r) {
    "use strict";
    /** @license React v16.12.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var n = r(0),
        i = r(9),
        a = r(23);

    function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!n) throw Error(o(227));
    var s = null,
        l = {};

    function c() {
        if (s)
            for (var e in l) {
                var t = l[e],
                    r = s.indexOf(e);
                if (!(-1 < r)) throw Error(o(96, e));
                if (!d[r]) {
                    if (!t.extractEvents) throw Error(o(97, e));
                    for (var n in d[r] = t, r = t.eventTypes) {
                        var i = void 0,
                            a = r[n],
                            c = t,
                            h = n;
                        if (f.hasOwnProperty(h)) throw Error(o(99, h));
                        f[h] = a;
                        var p = a.phasedRegistrationNames;
                        if (p) {
                            for (i in p) p.hasOwnProperty(i) && u(p[i], c, h);
                            i = !0
                        } else a.registrationName ? (u(a.registrationName, c, h), i = !0) : i = !1;
                        if (!i) throw Error(o(98, n, e))
                    }
                }
            }
    }

    function u(e, t, r) {
        if (h[e]) throw Error(o(100, e));
        h[e] = t, p[e] = t.eventTypes[r].dependencies
    }
    var d = [],
        f = {},
        h = {},
        p = {};

    function m(e, t, r, n, i, a, o, s, l) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(r, c)
        } catch (e) {
            this.onError(e)
        }
    }
    var g = !1,
        v = null,
        y = !1,
        b = null,
        T = {
            onError: function(e) {
                g = !0, v = e
            }
        };

    function E(e, t, r, n, i, a, o, s, l) {
        g = !1, v = null, m.apply(T, arguments)
    }
    var S = null,
        w = null,
        k = null;

    function _(e, t, r) {
        var n = e.type || "unknown-event";
        e.currentTarget = k(r),
            function(e, t, r, n, i, a, s, l, c) {
                if (E.apply(this, arguments), g) {
                    if (!g) throw Error(o(198));
                    var u = v;
                    g = !1, v = null, y || (y = !0, b = u)
                }
            }(n, t, void 0, e), e.currentTarget = null
    }

    function C(e, t) {
        if (null == t) throw Error(o(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function R(e, t, r) {
        Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e)
    }
    var x = null;

    function P(e) {
        if (e) {
            var t = e._dispatchListeners,
                r = e._dispatchInstances;
            if (Array.isArray(t))
                for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) _(e, t[n], r[n]);
            else t && _(e, t, r);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function A(e) {
        if (null !== e && (x = C(x, e)), e = x, x = null, e) {
            if (R(e, P), x) throw Error(o(95));
            if (y) throw e = b, y = !1, b = null, e
        }
    }
    var O = {
        injectEventPluginOrder: function(e) {
            if (s) throw Error(o(101));
            s = Array.prototype.slice.call(e), c()
        },
        injectEventPluginsByName: function(e) {
            var t, r = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    if (!l.hasOwnProperty(t) || l[t] !== n) {
                        if (l[t]) throw Error(o(102, t));
                        l[t] = n, r = !0
                    }
                }
            r && c()
        }
    };

    function D(e, t) {
        var r = e.stateNode;
        if (!r) return null;
        var n = S(r);
        if (!n) return null;
        r = n[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (r && "function" != typeof r) throw Error(o(231, t, typeof r));
        return r
    }
    var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    L.hasOwnProperty("ReactCurrentDispatcher") || (L.ReactCurrentDispatcher = {
        current: null
    }), L.hasOwnProperty("ReactCurrentBatchConfig") || (L.ReactCurrentBatchConfig = {
        suspense: null
    });
    var I = /^(.*)[\\\/]/,
        M = "function" == typeof Symbol && Symbol.for,
        N = M ? Symbol.for("react.element") : 60103,
        F = M ? Symbol.for("react.portal") : 60106,
        U = M ? Symbol.for("react.fragment") : 60107,
        j = M ? Symbol.for("react.strict_mode") : 60108,
        B = M ? Symbol.for("react.profiler") : 60114,
        G = M ? Symbol.for("react.provider") : 60109,
        z = M ? Symbol.for("react.context") : 60110,
        K = M ? Symbol.for("react.concurrent_mode") : 60111,
        V = M ? Symbol.for("react.forward_ref") : 60112,
        H = M ? Symbol.for("react.suspense") : 60113,
        W = M ? Symbol.for("react.suspense_list") : 60120,
        Y = M ? Symbol.for("react.memo") : 60115,
        q = M ? Symbol.for("react.lazy") : 60116;
    M && Symbol.for("react.fundamental"), M && Symbol.for("react.responder"), M && Symbol.for("react.scope");
    var X = "function" == typeof Symbol && Symbol.iterator;

    function $(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = X && e[X] || e["@@iterator"]) ? e : null
    }

    function Q(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case U:
                return "Fragment";
            case F:
                return "Portal";
            case B:
                return "Profiler";
            case j:
                return "StrictMode";
            case H:
                return "Suspense";
            case W:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case z:
                return "Context.Consumer";
            case G:
                return "Context.Provider";
            case V:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case Y:
                return Q(e.type);
            case q:
                if (e = 1 === e._status ? e._result : null) return Q(e)
        }
        return null
    }

    function J(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var r = "";
                    break e;
                default:
                    var n = e._debugOwner,
                        i = e._debugSource,
                        a = Q(e.type);
                    r = null, n && (r = Q(n.type)), n = a, a = "", i ? a = " (at " + i.fileName.replace(I, "") + ":" + i.lineNumber + ")" : r && (a = " (created by " + r + ")"), r = "\n    in " + (n || "Unknown") + a
            }
            t += r,
            e = e.return
        } while (e);
        return t
    }
    var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        ee = null,
        te = null,
        re = null;

    function ne(e) {
        if (e = w(e)) {
            if ("function" != typeof ee) throw Error(o(280));
            var t = S(e.stateNode);
            ee(e.stateNode, e.type, t)
        }
    }

    function ie(e) {
        te ? re ? re.push(e) : re = [e] : te = e
    }

    function ae() {
        if (te) {
            var e = te,
                t = re;
            if (re = te = null, ne(e), t)
                for (e = 0; e < t.length; e++) ne(t[e])
        }
    }

    function oe(e, t) {
        return e(t)
    }

    function se(e, t, r, n) {
        return e(t, r, n)
    }

    function le() {}
    var ce = oe,
        ue = !1,
        de = !1;

    function fe() {
        null === te && null === re || (le(), ae())
    }
    new Map;
    var he = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        pe = Object.prototype.hasOwnProperty,
        me = {},
        ge = {};

    function ve(e, t, r, n, i, a) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a
    }
    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        ye[e] = new ve(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(e) {
        var t = e[0];
        ye[t] = new ve(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        ye[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        ye[e] = new ve(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        ye[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        ye[e] = new ve(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function(e) {
        ye[e] = new ve(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(e) {
        ye[e] = new ve(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function(e) {
        ye[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var be = /[\-:]([a-z])/g;

    function Te(e) {
        return e[1].toUpperCase()
    }

    function Ee(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function Se(e, t, r, n) {
        var i = ye.hasOwnProperty(t) ? ye[t] : null;
        (null !== i ? 0 === i.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, r, n) {
            if (null == t || function(e, t, r, n) {
                    if (null !== r && 0 === r.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !n && (null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, r, n)) return !0;
            if (n) return !1;
            if (null !== r) switch (r.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, r, i, n) && (r = null), n || null === i ? function(e) {
            return !!pe.call(ge, e) || !pe.call(me, e) && (he.test(e) ? ge[e] = !0 : (me[e] = !0, !1))
        }(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = null === r ? 3 !== i.type && "" : r : (t = i.attributeName, n = i.attributeNamespace, null === r ? e.removeAttribute(t) : (r = 3 === (i = i.type) || 4 === i && !0 === r ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
    }

    function we(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function ke(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = we(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                var i = r.get,
                    a = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        n = "" + e, a.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: r.enumerable
                }), {
                    getValue: function() {
                        return n
                    },
                    setValue: function(e) {
                        n = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function _e(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var r = t.getValue(),
            n = "";
        return e && (n = we(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== r && (t.setValue(e), !0)
    }

    function Ce(e, t) {
        var r = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked
        })
    }

    function Re(e, t) {
        var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
        r = Ee(null != t.value ? t.value : r), e._wrapperState = {
            initialChecked: n,
            initialValue: r,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function xe(e, t) {
        null != (t = t.checked) && Se(e, "checked", t, !1)
    }

    function Pe(e, t) {
        xe(e, t);
        var r = Ee(t.value),
            n = t.type;
        if (null != r) "number" === n ? (0 === r && "" === e.value || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
        else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Oe(e, t.type, r) : t.hasOwnProperty("defaultValue") && Oe(e, t.type, Ee(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ae(e, t, r) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (r = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== r && (e.name = r)
    }

    function Oe(e, t, r) {
        "number" === t && e.ownerDocument.activeElement === e || (null == r ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
    }

    function De(e, t) {
        return e = i({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return n.Children.forEach(e, (function(e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function Le(e, t, r, n) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
            for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
        } else {
            for (r = "" + Ee(r), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === r) return e[i].selected = !0, void(n && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Ie(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Me(e, t) {
        var r = t.value;
        if (null == r) {
            if (r = t.defaultValue, null != (t = t.children)) {
                if (null != r) throw Error(o(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(o(93));
                    t = t[0]
                }
                r = t
            }
            null == r && (r = "")
        }
        e._wrapperState = {
            initialValue: Ee(r)
        }
    }

    function Ne(e, t) {
        var r = Ee(t.value),
            n = Ee(t.defaultValue);
        null != r && ((r = "" + r) !== e.value && (e.value = r), null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)), null != n && (e.defaultValue = "" + n)
    }

    function Fe(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(be, Te);
        ye[t] = new ve(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(be, Te);
        ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(be, Te);
        ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1)
    })), ye.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
        ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var Ue = "http://www.w3.org/1999/xhtml",
        je = "http://www.w3.org/2000/svg";

    function Be(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Ge(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Be(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var ze, Ke = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
            MSApp.execUnsafeLocalFunction((function() {
                return e(t, r)
            }))
        } : e
    }((function(e, t) {
        if (e.namespaceURI !== je || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((ze = ze || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ze.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function Ve(e, t) {
        if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType) return void(r.nodeValue = t)
        }
        e.textContent = t
    }

    function He(e, t) {
        var r = {};
        return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
    }
    var We = {
            animationend: He("Animation", "AnimationEnd"),
            animationiteration: He("Animation", "AnimationIteration"),
            animationstart: He("Animation", "AnimationStart"),
            transitionend: He("Transition", "TransitionEnd")
        },
        Ye = {},
        qe = {};

    function Xe(e) {
        if (Ye[e]) return Ye[e];
        if (!We[e]) return e;
        var t, r = We[e];
        for (t in r)
            if (r.hasOwnProperty(t) && t in qe) return Ye[e] = r[t];
        return e
    }
    Z && (qe = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    var $e = Xe("animationend"),
        Qe = Xe("animationiteration"),
        Je = Xe("animationstart"),
        Ze = Xe("transitionend"),
        et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

    function tt(e) {
        var t = e,
            r = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (r = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? r : null
    }

    function rt(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function nt(e) {
        if (tt(e) !== e) throw Error(o(188))
    }

    function it(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = tt(e))) throw Error(o(188));
                    return t !== e ? null : e
                }
                for (var r = e, n = t;;) {
                    var i = r.return;
                    if (null === i) break;
                    var a = i.alternate;
                    if (null === a) {
                        if (null !== (n = i.return)) {
                            r = n;
                            continue
                        }
                        break
                    }
                    if (i.child === a.child) {
                        for (a = i.child; a;) {
                            if (a === r) return nt(i), e;
                            if (a === n) return nt(i), t;
                            a = a.sibling
                        }
                        throw Error(o(188))
                    }
                    if (r.return !== n.return) r = i, n = a;
                    else {
                        for (var s = !1, l = i.child; l;) {
                            if (l === r) {
                                s = !0, r = i, n = a;
                                break
                            }
                            if (l === n) {
                                s = !0, n = i, r = a;
                                break
                            }
                            l = l.sibling
                        }
                        if (!s) {
                            for (l = a.child; l;) {
                                if (l === r) {
                                    s = !0, r = a, n = i;
                                    break
                                }
                                if (l === n) {
                                    s = !0, n = a, r = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s) throw Error(o(189))
                        }
                    }
                    if (r.alternate !== n) throw Error(o(190))
                }
                if (3 !== r.tag) throw Error(o(188));
                return r.stateNode.current === r ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }
    var at, ot, st, lt = !1,
        ct = [],
        ut = null,
        dt = null,
        ft = null,
        ht = new Map,
        pt = new Map,
        mt = [],
        gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        vt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function yt(e, t, r, n) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | r,
            nativeEvent: n
        }
    }

    function bt(e, t) {
        switch (e) {
            case "focus":
            case "blur":
                ut = null;
                break;
            case "dragenter":
            case "dragleave":
                dt = null;
                break;
            case "mouseover":
            case "mouseout":
                ft = null;
                break;
            case "pointerover":
            case "pointerout":
                ht.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                pt.delete(t.pointerId)
        }
    }

    function Tt(e, t, r, n, i) {
        return null === e || e.nativeEvent !== i ? (e = yt(t, r, n, i), null !== t && (null !== (t = cn(t)) && ot(t)), e) : (e.eventSystemFlags |= n, e)
    }

    function Et(e) {
        var t = ln(e.target);
        if (null !== t) {
            var r = tt(t);
            if (null !== r)
                if (13 === (t = r.tag)) {
                    if (null !== (t = rt(r))) return e.blockedOn = t, void a.unstable_runWithPriority(e.priority, (function() {
                        st(r)
                    }))
                } else if (3 === t && r.stateNode.hydrate) return void(e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function St(e) {
        if (null !== e.blockedOn) return !1;
        var t = Ar(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null !== t) {
            var r = cn(t);
            return null !== r && ot(r), e.blockedOn = t, !1
        }
        return !0
    }

    function wt(e, t, r) {
        St(e) && r.delete(t)
    }

    function kt() {
        for (lt = !1; 0 < ct.length;) {
            var e = ct[0];
            if (null !== e.blockedOn) {
                null !== (e = cn(e.blockedOn)) && at(e);
                break
            }
            var t = Ar(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
            null !== t ? e.blockedOn = t : ct.shift()
        }
        null !== ut && St(ut) && (ut = null), null !== dt && St(dt) && (dt = null), null !== ft && St(ft) && (ft = null), ht.forEach(wt), pt.forEach(wt)
    }

    function _t(e, t) {
        e.blockedOn === t && (e.blockedOn = null, lt || (lt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, kt)))
    }

    function Ct(e) {
        function t(t) {
            return _t(t, e)
        }
        if (0 < ct.length) {
            _t(ct[0], e);
            for (var r = 1; r < ct.length; r++) {
                var n = ct[r];
                n.blockedOn === e && (n.blockedOn = null)
            }
        }
        for (null !== ut && _t(ut, e), null !== dt && _t(dt, e), null !== ft && _t(ft, e), ht.forEach(t), pt.forEach(t), r = 0; r < mt.length; r++)(n = mt[r]).blockedOn === e && (n.blockedOn = null);
        for (; 0 < mt.length && null === (r = mt[0]).blockedOn;) Et(r), null === r.blockedOn && mt.shift()
    }

    function Rt(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function xt(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function Pt(e, t, r) {
        (t = D(e, r.dispatchConfig.phasedRegistrationNames[t])) && (r._dispatchListeners = C(r._dispatchListeners, t), r._dispatchInstances = C(r._dispatchInstances, e))
    }

    function At(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, r = []; t;) r.push(t), t = xt(t);
            for (t = r.length; 0 < t--;) Pt(r[t], "captured", e);
            for (t = 0; t < r.length; t++) Pt(r[t], "bubbled", e)
        }
    }

    function Ot(e, t, r) {
        e && r && r.dispatchConfig.registrationName && (t = D(e, r.dispatchConfig.registrationName)) && (r._dispatchListeners = C(r._dispatchListeners, t), r._dispatchInstances = C(r._dispatchInstances, e))
    }

    function Dt(e) {
        e && e.dispatchConfig.registrationName && Ot(e._targetInst, null, e)
    }

    function Lt(e) {
        R(e, At)
    }

    function It() {
        return !0
    }

    function Mt() {
        return !1
    }

    function Nt(e, t, r, n) {
        for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = r, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(r) : "target" === i ? this.target = n : this[i] = r[i]);
        return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? It : Mt, this.isPropagationStopped = Mt, this
    }

    function Ft(e, t, r, n) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, r, n), i
        }
        return new this(e, t, r, n)
    }

    function Ut(e) {
        if (!(e instanceof this)) throw Error(o(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function jt(e) {
        e.eventPool = [], e.getPooled = Ft, e.release = Ut
    }
    i(Nt.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = It)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = It)
        },
        persist: function() {
            this.isPersistent = It
        },
        isPersistent: Mt,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Mt, this._dispatchInstances = this._dispatchListeners = null
        }
    }), Nt.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, Nt.extend = function(e) {
        function t() {}

        function r() {
            return n.apply(this, arguments)
        }
        var n = this;
        t.prototype = n.prototype;
        var a = new t;
        return i(a, r.prototype), r.prototype = a, r.prototype.constructor = r, r.Interface = i({}, n.Interface, e), r.extend = n.extend, jt(r), r
    }, jt(Nt);
    var Bt = Nt.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        Gt = Nt.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        zt = Nt.extend({
            view: null,
            detail: null
        }),
        Kt = zt.extend({
            relatedTarget: null
        });

    function Vt(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var Ht = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Wt = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Yt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function qt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Yt[e]) && !!t[e]
    }

    function Xt() {
        return qt
    }
    for (var $t = zt.extend({
            key: function(e) {
                if (e.key) {
                    var t = Ht[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Vt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Wt[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Xt,
            charCode: function(e) {
                return "keypress" === e.type ? Vt(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Vt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }), Qt = 0, Jt = 0, Zt = !1, er = !1, tr = zt.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Xt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Qt;
                return Qt = e.screenX, Zt ? "mousemove" === e.type ? e.screenX - t : 0 : (Zt = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = Jt;
                return Jt = e.screenY, er ? "mousemove" === e.type ? e.screenY - t : 0 : (er = !0, 0)
            }
        }), rr = tr.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }), nr = tr.extend({
            dataTransfer: null
        }), ir = zt.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Xt
        }), ar = Nt.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), or = tr.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), sr = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [$e, "animationEnd", 2],
            [Qe, "animationIteration", 2],
            [Je, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [Ze, "transitionEnd", 2],
            ["waiting", "waiting", 2]
        ], lr = {}, cr = {}, ur = 0; ur < sr.length; ur++) {
        var dr = sr[ur],
            fr = dr[0],
            hr = dr[1],
            pr = dr[2],
            mr = "on" + (hr[0].toUpperCase() + hr.slice(1)),
            gr = {
                phasedRegistrationNames: {
                    bubbled: mr,
                    captured: mr + "Capture"
                },
                dependencies: [fr],
                eventPriority: pr
            };
        lr[hr] = gr, cr[fr] = gr
    }
    var vr = {
            eventTypes: lr,
            getEventPriority: function(e) {
                return void 0 !== (e = cr[e]) ? e.eventPriority : 2
            },
            extractEvents: function(e, t, r, n) {
                var i = cr[e];
                if (!i) return null;
                switch (e) {
                    case "keypress":
                        if (0 === Vt(r)) return null;
                    case "keydown":
                    case "keyup":
                        e = $t;
                        break;
                    case "blur":
                    case "focus":
                        e = Kt;
                        break;
                    case "click":
                        if (2 === r.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = tr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = nr;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = ir;
                        break;
                    case $e:
                    case Qe:
                    case Je:
                        e = Bt;
                        break;
                    case Ze:
                        e = ar;
                        break;
                    case "scroll":
                        e = zt;
                        break;
                    case "wheel":
                        e = or;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = Gt;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = rr;
                        break;
                    default:
                        e = Nt
                }
                return Lt(t = e.getPooled(i, t, r, n)), t
            }
        },
        yr = a.unstable_UserBlockingPriority,
        br = a.unstable_runWithPriority,
        Tr = vr.getEventPriority,
        Er = [];

    function Sr(e) {
        var t = e.targetInst,
            r = t;
        do {
            if (!r) {
                e.ancestors.push(r);
                break
            }
            var n = r;
            if (3 === n.tag) n = n.stateNode.containerInfo;
            else {
                for (; n.return;) n = n.return;
                n = 3 !== n.tag ? null : n.stateNode.containerInfo
            }
            if (!n) break;
            5 !== (t = r.tag) && 6 !== t || e.ancestors.push(r), r = ln(n)
        } while (r);
        for (r = 0; r < e.ancestors.length; r++) {
            t = e.ancestors[r];
            var i = Rt(e.nativeEvent);
            n = e.topLevelType;
            for (var a = e.nativeEvent, o = e.eventSystemFlags, s = null, l = 0; l < d.length; l++) {
                var c = d[l];
                c && (c = c.extractEvents(n, t, a, i, o)) && (s = C(s, c))
            }
            A(s)
        }
    }
    var wr = !0;

    function kr(e, t) {
        _r(t, e, !1)
    }

    function _r(e, t, r) {
        switch (Tr(t)) {
            case 0:
                var n = Cr.bind(null, t, 1);
                break;
            case 1:
                n = Rr.bind(null, t, 1);
                break;
            default:
                n = Pr.bind(null, t, 1)
        }
        r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1)
    }

    function Cr(e, t, r) {
        ue || le();
        var n = Pr,
            i = ue;
        ue = !0;
        try {
            se(n, e, t, r)
        } finally {
            (ue = i) || fe()
        }
    }

    function Rr(e, t, r) {
        br(yr, Pr.bind(null, e, t, r))
    }

    function xr(e, t, r, n) {
        if (Er.length) {
            var i = Er.pop();
            i.topLevelType = e, i.eventSystemFlags = t, i.nativeEvent = r, i.targetInst = n, e = i
        } else e = {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: r,
            targetInst: n,
            ancestors: []
        };
        try {
            if (t = Sr, r = e, de) t(r, void 0);
            else {
                de = !0;
                try {
                    ce(t, r, void 0)
                } finally {
                    de = !1, fe()
                }
            }
        } finally {
            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, Er.length < 10 && Er.push(e)
        }
    }

    function Pr(e, t, r) {
        if (wr)
            if (0 < ct.length && -1 < gt.indexOf(e)) e = yt(null, e, t, r), ct.push(e);
            else {
                var n = Ar(e, t, r);
                null === n ? bt(e, r) : -1 < gt.indexOf(e) ? (e = yt(n, e, t, r), ct.push(e)) : function(e, t, r, n) {
                    switch (t) {
                        case "focus":
                            return ut = Tt(ut, e, t, r, n), !0;
                        case "dragenter":
                            return dt = Tt(dt, e, t, r, n), !0;
                        case "mouseover":
                            return ft = Tt(ft, e, t, r, n), !0;
                        case "pointerover":
                            var i = n.pointerId;
                            return ht.set(i, Tt(ht.get(i) || null, e, t, r, n)), !0;
                        case "gotpointercapture":
                            return i = n.pointerId, pt.set(i, Tt(pt.get(i) || null, e, t, r, n)), !0
                    }
                    return !1
                }(n, e, t, r) || (bt(e, r), xr(e, t, r, null))
            }
    }

    function Ar(e, t, r) {
        var n = Rt(r);
        if (null !== (n = ln(n))) {
            var i = tt(n);
            if (null === i) n = null;
            else {
                var a = i.tag;
                if (13 === a) {
                    if (null !== (n = rt(i))) return n;
                    n = null
                } else if (3 === a) {
                    if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                    n = null
                } else i !== n && (n = null)
            }
        }
        return xr(e, t, r, n), null
    }

    function Or(e) {
        if (!Z) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }
    var Dr = new("function" == typeof WeakMap ? WeakMap : Map);

    function Lr(e) {
        var t = Dr.get(e);
        return void 0 === t && (t = new Set, Dr.set(e, t)), t
    }

    function Ir(e, t, r) {
        if (!r.has(e)) {
            switch (e) {
                case "scroll":
                    _r(t, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    _r(t, "focus", !0), _r(t, "blur", !0), r.add("blur"), r.add("focus");
                    break;
                case "cancel":
                case "close":
                    Or(e) && _r(t, e, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === et.indexOf(e) && kr(e, t)
            }
            r.add(e)
        }
    }
    var Mr = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Nr = ["Webkit", "ms", "Moz", "O"];

    function Fr(e, t, r) {
        return null == t || "boolean" == typeof t || "" === t ? "" : r || "number" != typeof t || 0 === t || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px"
    }

    function Ur(e, t) {
        for (var r in e = e.style, t)
            if (t.hasOwnProperty(r)) {
                var n = 0 === r.indexOf("--"),
                    i = Fr(r, t[r], n);
                "float" === r && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
            }
    }
    Object.keys(Mr).forEach((function(e) {
        Nr.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e]
        }))
    }));
    var jr = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Br(e, t) {
        if (t) {
            if (jr[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(o(60));
                if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(o(62, ""))
        }
    }

    function Gr(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function zr(e, t) {
        var r = Lr(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = p[t];
        for (var n = 0; n < t.length; n++) Ir(t[n], e, r)
    }

    function Kr() {}

    function Vr(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function Hr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Wr(e, t) {
        var r, n = Hr(e);
        for (e = 0; n;) {
            if (3 === n.nodeType) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Hr(n)
        }
    }

    function Yr() {
        for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement;) {
            try {
                var r = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                r = !1
            }
            if (!r) break;
            t = Vr((e = t.contentWindow).document)
        }
        return t
    }

    function qr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var Xr = null,
        $r = null;

    function Qr(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function Jr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var Zr = "function" == typeof setTimeout ? setTimeout : void 0,
        en = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function tn(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function rn(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var r = e.data;
                if ("$" === r || "$!" === r || "$?" === r) {
                    if (0 === t) return e;
                    t--
                } else "/$" === r && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var nn = Math.random().toString(36).slice(2),
        an = "__reactInternalInstance$" + nn,
        on = "__reactEventHandlers$" + nn,
        sn = "__reactContainere$" + nn;

    function ln(e) {
        var t = e[an];
        if (t) return t;
        for (var r = e.parentNode; r;) {
            if (t = r[sn] || r[an]) {
                if (r = t.alternate, null !== t.child || null !== r && null !== r.child)
                    for (e = rn(e); null !== e;) {
                        if (r = e[an]) return r;
                        e = rn(e)
                    }
                return t
            }
            r = (e = r).parentNode
        }
        return null
    }

    function cn(e) {
        return !(e = e[an] || e[sn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function un(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
    }

    function dn(e) {
        return e[on] || null
    }
    var fn = null,
        hn = null,
        pn = null;

    function mn() {
        if (pn) return pn;
        var e, t, r = hn,
            n = r.length,
            i = "value" in fn ? fn.value : fn.textContent,
            a = i.length;
        for (e = 0; e < n && r[e] === i[e]; e++);
        var o = n - e;
        for (t = 1; t <= o && r[n - t] === i[a - t]; t++);
        return pn = i.slice(e, 1 < t ? 1 - t : void 0)
    }
    var gn = Nt.extend({
            data: null
        }),
        vn = Nt.extend({
            data: null
        }),
        yn = [9, 13, 27, 32],
        bn = Z && "CompositionEvent" in window,
        Tn = null;
    Z && "documentMode" in document && (Tn = document.documentMode);
    var En = Z && "TextEvent" in window && !Tn,
        Sn = Z && (!bn || Tn && 8 < Tn && 11 >= Tn),
        wn = String.fromCharCode(32),
        kn = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        _n = !1;

    function Cn(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== yn.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function Rn(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var xn = !1;
    var Pn = {
            eventTypes: kn,
            extractEvents: function(e, t, r, n) {
                var i;
                if (bn) e: {
                    switch (e) {
                        case "compositionstart":
                            var a = kn.compositionStart;
                            break e;
                        case "compositionend":
                            a = kn.compositionEnd;
                            break e;
                        case "compositionupdate":
                            a = kn.compositionUpdate;
                            break e
                    }
                    a = void 0
                }
                else xn ? Cn(e, r) && (a = kn.compositionEnd) : "keydown" === e && 229 === r.keyCode && (a = kn.compositionStart);
                return a ? (Sn && "ko" !== r.locale && (xn || a !== kn.compositionStart ? a === kn.compositionEnd && xn && (i = mn()) : (hn = "value" in (fn = n) ? fn.value : fn.textContent, xn = !0)), a = gn.getPooled(a, t, r, n), i ? a.data = i : null !== (i = Rn(r)) && (a.data = i), Lt(a), i = a) : i = null, (e = En ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return Rn(t);
                        case "keypress":
                            return 32 !== t.which ? null : (_n = !0, wn);
                        case "textInput":
                            return (e = t.data) === wn && _n ? null : e;
                        default:
                            return null
                    }
                }(e, r) : function(e, t) {
                    if (xn) return "compositionend" === e || !bn && Cn(e, t) ? (e = mn(), pn = hn = fn = null, xn = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return Sn && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, r)) ? ((t = vn.getPooled(kn.beforeInput, t, r, n)).data = e, Lt(t)) : t = null, null === i ? t : null === t ? i : [i, t]
            }
        },
        An = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

    function On(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!An[e.type] : "textarea" === t
    }
    var Dn = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Ln(e, t, r) {
        return (e = Nt.getPooled(Dn.change, e, t, r)).type = "change", ie(r), Lt(e), e
    }
    var In = null,
        Mn = null;

    function Nn(e) {
        A(e)
    }

    function Fn(e) {
        if (_e(un(e))) return e
    }

    function Un(e, t) {
        if ("change" === e) return t
    }
    var jn = !1;

    function Bn() {
        In && (In.detachEvent("onpropertychange", Gn), Mn = In = null)
    }

    function Gn(e) {
        if ("value" === e.propertyName && Fn(Mn))
            if (e = Ln(Mn, e, Rt(e)), ue) A(e);
            else {
                ue = !0;
                try {
                    oe(Nn, e)
                } finally {
                    ue = !1, fe()
                }
            }
    }

    function zn(e, t, r) {
        "focus" === e ? (Bn(), Mn = r, (In = t).attachEvent("onpropertychange", Gn)) : "blur" === e && Bn()
    }

    function Kn(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Fn(Mn)
    }

    function Vn(e, t) {
        if ("click" === e) return Fn(t)
    }

    function Hn(e, t) {
        if ("input" === e || "change" === e) return Fn(t)
    }
    Z && (jn = Or("input") && (!document.documentMode || 9 < document.documentMode));
    var Wn, Yn = {
            eventTypes: Dn,
            _isInputEventSupported: jn,
            extractEvents: function(e, t, r, n) {
                var i = t ? un(t) : window,
                    a = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === i.type) var o = Un;
                else if (On(i))
                    if (jn) o = Hn;
                    else {
                        o = Kn;
                        var s = zn
                    }
                else(a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Vn);
                if (o && (o = o(e, t))) return Ln(o, r, n);
                s && s(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Oe(i, "number", i.value)
            }
        },
        qn = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Xn = {
            eventTypes: qn,
            extractEvents: function(e, t, r, n, i) {
                var a = "mouseover" === e || "pointerover" === e,
                    o = "mouseout" === e || "pointerout" === e;
                if (a && 0 == (32 & i) && (r.relatedTarget || r.fromElement) || !o && !a) return null;
                if (i = n.window === n ? n : (i = n.ownerDocument) ? i.defaultView || i.parentWindow : window, o ? (o = t, null !== (t = (t = r.relatedTarget || r.toElement) ? ln(t) : null) && (t !== (a = tt(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : o = null, o === t) return null;
                if ("mouseout" === e || "mouseover" === e) var s = tr,
                    l = qn.mouseLeave,
                    c = qn.mouseEnter,
                    u = "mouse";
                else "pointerout" !== e && "pointerover" !== e || (s = rr, l = qn.pointerLeave, c = qn.pointerEnter, u = "pointer");
                if (e = null == o ? i : un(o), i = null == t ? i : un(t), (l = s.getPooled(l, o, r, n)).type = u + "leave", l.target = e, l.relatedTarget = i, (n = s.getPooled(c, t, r, n)).type = u + "enter", n.target = i, n.relatedTarget = e, u = t, (s = o) && u) e: {
                    for (e = u, o = 0, t = c = s; t; t = xt(t)) o++;
                    for (t = 0, i = e; i; i = xt(i)) t++;
                    for (; 0 < o - t;) c = xt(c),
                    o--;
                    for (; 0 < t - o;) e = xt(e),
                    t--;
                    for (; o--;) {
                        if (c === e || c === e.alternate) break e;
                        c = xt(c), e = xt(e)
                    }
                    c = null
                }
                else c = null;
                for (e = c, c = []; s && s !== e && (null === (o = s.alternate) || o !== e);) c.push(s), s = xt(s);
                for (s = []; u && u !== e && (null === (o = u.alternate) || o !== e);) s.push(u), u = xt(u);
                for (u = 0; u < c.length; u++) Ot(c[u], "bubbled", l);
                for (u = s.length; 0 < u--;) Ot(s[u], "captured", n);
                return r === Wn ? (Wn = null, [l]) : (Wn = r, [l, n])
            }
        };
    var $n = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        Qn = Object.prototype.hasOwnProperty;

    function Jn(e, t) {
        if ($n(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (n = 0; n < r.length; n++)
            if (!Qn.call(t, r[n]) || !$n(e[r[n]], t[r[n]])) return !1;
        return !0
    }
    var Zn = Z && "documentMode" in document && 11 >= document.documentMode,
        ei = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        ti = null,
        ri = null,
        ni = null,
        ii = !1;

    function ai(e, t) {
        var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return ii || null == ti || ti !== Vr(r) ? null : ("selectionStart" in (r = ti) && qr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, ni && Jn(ni, r) ? null : (ni = r, (e = Nt.getPooled(ei.select, ri, e, t)).type = "select", e.target = ti, Lt(e), e))
    }
    var oi = {
        eventTypes: ei,
        extractEvents: function(e, t, r, n) {
            var i, a = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
            if (!(i = !a)) {
                e: {
                    a = Lr(a),
                    i = p.onSelect;
                    for (var o = 0; o < i.length; o++)
                        if (!a.has(i[o])) {
                            a = !1;
                            break e
                        }
                    a = !0
                }
                i = !a
            }
            if (i) return null;
            switch (a = t ? un(t) : window, e) {
                case "focus":
                    (On(a) || "true" === a.contentEditable) && (ti = a, ri = t, ni = null);
                    break;
                case "blur":
                    ni = ri = ti = null;
                    break;
                case "mousedown":
                    ii = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return ii = !1, ai(r, n);
                case "selectionchange":
                    if (Zn) break;
                case "keydown":
                case "keyup":
                    return ai(r, n)
            }
            return null
        }
    };
    O.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), S = dn, w = cn, k = un, O.injectEventPluginsByName({
        SimpleEventPlugin: vr,
        EnterLeaveEventPlugin: Xn,
        ChangeEventPlugin: Yn,
        SelectEventPlugin: oi,
        BeforeInputEventPlugin: Pn
    }), new Set;
    var si = [],
        li = -1;

    function ci(e) {
        0 > li || (e.current = si[li], si[li] = null, li--)
    }

    function ui(e, t) {
        li++, si[li] = e.current, e.current = t
    }
    var di = {},
        fi = {
            current: di
        },
        hi = {
            current: !1
        },
        pi = di;

    function mi(e, t) {
        var r = e.type.contextTypes;
        if (!r) return di;
        var n = e.stateNode;
        if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
        var i, a = {};
        for (i in r) a[i] = t[i];
        return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function gi(e) {
        return null != (e = e.childContextTypes)
    }

    function vi(e) {
        ci(hi), ci(fi)
    }

    function yi(e) {
        ci(hi), ci(fi)
    }

    function bi(e, t, r) {
        if (fi.current !== di) throw Error(o(168));
        ui(fi, t), ui(hi, r)
    }

    function Ti(e, t, r) {
        var n = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof n.getChildContext) return r;
        for (var a in n = n.getChildContext())
            if (!(a in e)) throw Error(o(108, Q(t) || "Unknown", a));
        return i({}, r, {}, n)
    }

    function Ei(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || di, pi = fi.current, ui(fi, t), ui(hi, hi.current), !0
    }

    function Si(e, t, r) {
        var n = e.stateNode;
        if (!n) throw Error(o(169));
        r ? (t = Ti(e, t, pi), n.__reactInternalMemoizedMergedChildContext = t, ci(hi), ci(fi), ui(fi, t)) : ci(hi), ui(hi, r)
    }
    var wi = a.unstable_runWithPriority,
        ki = a.unstable_scheduleCallback,
        _i = a.unstable_cancelCallback,
        Ci = a.unstable_shouldYield,
        Ri = a.unstable_requestPaint,
        xi = a.unstable_now,
        Pi = a.unstable_getCurrentPriorityLevel,
        Ai = a.unstable_ImmediatePriority,
        Oi = a.unstable_UserBlockingPriority,
        Di = a.unstable_NormalPriority,
        Li = a.unstable_LowPriority,
        Ii = a.unstable_IdlePriority,
        Mi = {},
        Ni = void 0 !== Ri ? Ri : function() {},
        Fi = null,
        Ui = null,
        ji = !1,
        Bi = xi(),
        Gi = 1e4 > Bi ? xi : function() {
            return xi() - Bi
        };

    function zi() {
        switch (Pi()) {
            case Ai:
                return 99;
            case Oi:
                return 98;
            case Di:
                return 97;
            case Li:
                return 96;
            case Ii:
                return 95;
            default:
                throw Error(o(332))
        }
    }

    function Ki(e) {
        switch (e) {
            case 99:
                return Ai;
            case 98:
                return Oi;
            case 97:
                return Di;
            case 96:
                return Li;
            case 95:
                return Ii;
            default:
                throw Error(o(332))
        }
    }

    function Vi(e, t) {
        return e = Ki(e), wi(e, t)
    }

    function Hi(e, t, r) {
        return e = Ki(e), ki(e, t, r)
    }

    function Wi(e) {
        return null === Fi ? (Fi = [e], Ui = ki(Ai, qi)) : Fi.push(e), Mi
    }

    function Yi() {
        if (null !== Ui) {
            var e = Ui;
            Ui = null, _i(e)
        }
        qi()
    }

    function qi() {
        if (!ji && null !== Fi) {
            ji = !0;
            var e = 0;
            try {
                var t = Fi;
                Vi(99, (function() {
                    for (; e < t.length; e++) {
                        var r = t[e];
                        do {
                            r = r(!0)
                        } while (null !== r)
                    }
                })), Fi = null
            } catch (t) {
                throw null !== Fi && (Fi = Fi.slice(e + 1)), ki(Ai, Yi), t
            } finally {
                ji = !1
            }
        }
    }
    var Xi = 3;

    function $i(e, t, r) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (r /= 10) | 0)) * r
    }

    function Qi(e, t) {
        if (e && e.defaultProps)
            for (var r in t = i({}, t), e = e.defaultProps) void 0 === t[r] && (t[r] = e[r]);
        return t
    }
    var Ji = {
            current: null
        },
        Zi = null,
        ea = null,
        ta = null;

    function ra() {
        ta = ea = Zi = null
    }

    function na(e, t) {
        var r = e.type._context;
        ui(Ji, r._currentValue), r._currentValue = t
    }

    function ia(e) {
        var t = Ji.current;
        ci(Ji), e.type._context._currentValue = t
    }

    function aa(e, t) {
        for (; null !== e;) {
            var r = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== r && r.childExpirationTime < t && (r.childExpirationTime = t);
            else {
                if (!(null !== r && r.childExpirationTime < t)) break;
                r.childExpirationTime = t
            }
            e = e.return
        }
    }

    function oa(e, t) {
        Zi = e, ta = ea = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Go = !0), e.firstContext = null)
    }

    function sa(e, t) {
        if (ta !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (ta = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === ea) {
                if (null === Zi) throw Error(o(308));
                ea = t, Zi.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else ea = ea.next = t;
        return e._currentValue
    }
    var la = !1;

    function ca(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function ua(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function da(e, t) {
        return {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function fa(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function ha(e, t) {
        var r = e.alternate;
        if (null === r) {
            var n = e.updateQueue,
                i = null;
            null === n && (n = e.updateQueue = ca(e.memoizedState))
        } else n = e.updateQueue, i = r.updateQueue, null === n ? null === i ? (n = e.updateQueue = ca(e.memoizedState), i = r.updateQueue = ca(r.memoizedState)) : n = e.updateQueue = ua(i) : null === i && (i = r.updateQueue = ua(n));
        null === i || n === i ? fa(n, t) : null === n.lastUpdate || null === i.lastUpdate ? (fa(n, t), fa(i, t)) : (fa(n, t), i.lastUpdate = t)
    }

    function pa(e, t) {
        var r = e.updateQueue;
        null === (r = null === r ? e.updateQueue = ca(e.memoizedState) : ma(e, r)).lastCapturedUpdate ? r.firstCapturedUpdate = r.lastCapturedUpdate = t : (r.lastCapturedUpdate.next = t, r.lastCapturedUpdate = t)
    }

    function ma(e, t) {
        var r = e.alternate;
        return null !== r && t === r.updateQueue && (t = e.updateQueue = ua(t)), t
    }

    function ga(e, t, r, n, a, o) {
        switch (r.tag) {
            case 1:
                return "function" == typeof(e = r.payload) ? e.call(o, n, a) : e;
            case 3:
                e.effectTag = -4097 & e.effectTag | 64;
            case 0:
                if (null == (a = "function" == typeof(e = r.payload) ? e.call(o, n, a) : e)) break;
                return i({}, n, a);
            case 2:
                la = !0
        }
        return n
    }

    function va(e, t, r, n, i) {
        la = !1;
        for (var a = (t = ma(e, t)).baseState, o = null, s = 0, l = t.firstUpdate, c = a; null !== l;) {
            var u = l.expirationTime;
            u < i ? (null === o && (o = l, a = c), s < u && (s = u)) : (dl(u, l.suspenseConfig), c = ga(e, 0, l, c, r, n), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
        }
        for (u = null, l = t.firstCapturedUpdate; null !== l;) {
            var d = l.expirationTime;
            d < i ? (null === u && (u = l, null === o && (a = c)), s < d && (s = d)) : (c = ga(e, 0, l, c, r, n), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
        }
        null === o && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === o && null === u && (a = c), t.baseState = a, t.firstUpdate = o, t.firstCapturedUpdate = u, fl(s), e.expirationTime = s, e.memoizedState = c
    }

    function ya(e, t, r) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ba(t.firstEffect, r), t.firstEffect = t.lastEffect = null, ba(t.firstCapturedEffect, r), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function ba(e, t) {
        for (; null !== e;) {
            var r = e.callback;
            if (null !== r) {
                e.callback = null;
                var n = t;
                if ("function" != typeof r) throw Error(o(191, r));
                r.call(n)
            }
            e = e.nextEffect
        }
    }
    var Ta = L.ReactCurrentBatchConfig,
        Ea = (new n.Component).refs;

    function Sa(e, t, r, n) {
        r = null == (r = r(n, t = e.memoizedState)) ? t : i({}, t, r), e.memoizedState = r, null !== (n = e.updateQueue) && 0 === e.expirationTime && (n.baseState = r)
    }
    var wa = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && tt(e) === e
        },
        enqueueSetState: function(e, t, r) {
            e = e._reactInternalFiber;
            var n = Js(),
                i = Ta.suspense;
            (i = da(n = Zs(n, e, i), i)).payload = t, null != r && (i.callback = r), ha(e, i), el(e, n)
        },
        enqueueReplaceState: function(e, t, r) {
            e = e._reactInternalFiber;
            var n = Js(),
                i = Ta.suspense;
            (i = da(n = Zs(n, e, i), i)).tag = 1, i.payload = t, null != r && (i.callback = r), ha(e, i), el(e, n)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var r = Js(),
                n = Ta.suspense;
            (n = da(r = Zs(r, e, n), n)).tag = 2, null != t && (n.callback = t), ha(e, n), el(e, r)
        }
    };

    function ka(e, t, r, n, i, a, o) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Jn(r, n) || !Jn(i, a))
    }

    function _a(e, t, r) {
        var n = !1,
            i = di,
            a = t.contextType;
        return "object" == typeof a && null !== a ? a = sa(a) : (i = gi(t) ? pi : fi.current, a = (n = null != (n = t.contextTypes)) ? mi(e, i) : di), t = new t(r, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = wa, e.stateNode = t, t._reactInternalFiber = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
    }

    function Ca(e, t, r, n) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && wa.enqueueReplaceState(t, t.state, null)
    }

    function Ra(e, t, r, n) {
        var i = e.stateNode;
        i.props = r, i.state = e.memoizedState, i.refs = Ea;
        var a = t.contextType;
        "object" == typeof a && null !== a ? i.context = sa(a) : (a = gi(t) ? pi : fi.current, i.context = mi(e, a)), null !== (a = e.updateQueue) && (va(e, a, r, i, n), i.state = e.memoizedState), "function" == typeof(a = t.getDerivedStateFromProps) && (Sa(e, t, a, r), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && wa.enqueueReplaceState(i, i.state, null), null !== (a = e.updateQueue) && (va(e, a, r, i, n), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var xa = Array.isArray;

    function Pa(e, t, r) {
        if (null !== (e = r.ref) && "function" != typeof e && "object" != typeof e) {
            if (r._owner) {
                if (r = r._owner) {
                    if (1 !== r.tag) throw Error(o(309));
                    var n = r.stateNode
                }
                if (!n) throw Error(o(147, e));
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                    var t = n.refs;
                    t === Ea && (t = n.refs = {}), null === e ? delete t[i] : t[i] = e
                })._stringRef = i, t)
            }
            if ("string" != typeof e) throw Error(o(284));
            if (!r._owner) throw Error(o(290, e))
        }
        return e
    }

    function Aa(e, t) {
        if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function Oa(e) {
        function t(t, r) {
            if (e) {
                var n = t.lastEffect;
                null !== n ? (n.nextEffect = r, t.lastEffect = r) : t.firstEffect = t.lastEffect = r, r.nextEffect = null, r.effectTag = 8
            }
        }

        function r(r, n) {
            if (!e) return null;
            for (; null !== n;) t(r, n), n = n.sibling;
            return null
        }

        function n(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(e, t, r) {
            return (e = Dl(e, t)).index = 0, e.sibling = null, e
        }

        function a(t, r, n) {
            return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.effectTag = 2, r) : n : (t.effectTag = 2, r) : r
        }

        function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function l(e, t, r, n) {
            return null === t || 6 !== t.tag ? ((t = Ml(r, e.mode, n)).return = e, t) : ((t = i(t, r)).return = e, t)
        }

        function c(e, t, r, n) {
            return null !== t && t.elementType === r.type ? ((n = i(t, r.props)).ref = Pa(e, t, r), n.return = e, n) : ((n = Ll(r.type, r.key, r.props, null, e.mode, n)).ref = Pa(e, t, r), n.return = e, n)
        }

        function u(e, t, r, n) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? ((t = Nl(r, e.mode, n)).return = e, t) : ((t = i(t, r.children || [])).return = e, t)
        }

        function d(e, t, r, n, a) {
            return null === t || 7 !== t.tag ? ((t = Il(r, e.mode, n, a)).return = e, t) : ((t = i(t, r)).return = e, t)
        }

        function f(e, t, r) {
            if ("string" == typeof t || "number" == typeof t) return (t = Ml("" + t, e.mode, r)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case N:
                        return (r = Ll(t.type, t.key, t.props, null, e.mode, r)).ref = Pa(e, null, t), r.return = e, r;
                    case F:
                        return (t = Nl(t, e.mode, r)).return = e, t
                }
                if (xa(t) || $(t)) return (t = Il(t, e.mode, r, null)).return = e, t;
                Aa(e, t)
            }
            return null
        }

        function h(e, t, r, n) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof r || "number" == typeof r) return null !== i ? null : l(e, t, "" + r, n);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case N:
                        return r.key === i ? r.type === U ? d(e, t, r.props.children, n, i) : c(e, t, r, n) : null;
                    case F:
                        return r.key === i ? u(e, t, r, n) : null
                }
                if (xa(r) || $(r)) return null !== i ? null : d(e, t, r, n, null);
                Aa(e, r)
            }
            return null
        }

        function p(e, t, r, n, i) {
            if ("string" == typeof n || "number" == typeof n) return l(t, e = e.get(r) || null, "" + n, i);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case N:
                        return e = e.get(null === n.key ? r : n.key) || null, n.type === U ? d(t, e, n.props.children, i, n.key) : c(t, e, n, i);
                    case F:
                        return u(t, e = e.get(null === n.key ? r : n.key) || null, n, i)
                }
                if (xa(n) || $(n)) return d(t, e = e.get(r) || null, n, i, null);
                Aa(t, n)
            }
            return null
        }

        function m(i, o, s, l) {
            for (var c = null, u = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
                d.index > m ? (g = d, d = null) : g = d.sibling;
                var v = h(i, d, s[m], l);
                if (null === v) {
                    null === d && (d = g);
                    break
                }
                e && d && null === v.alternate && t(i, d), o = a(v, o, m), null === u ? c = v : u.sibling = v, u = v, d = g
            }
            if (m === s.length) return r(i, d), c;
            if (null === d) {
                for (; m < s.length; m++) null !== (d = f(i, s[m], l)) && (o = a(d, o, m), null === u ? c = d : u.sibling = d, u = d);
                return c
            }
            for (d = n(i, d); m < s.length; m++) null !== (g = p(d, i, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = a(g, o, m), null === u ? c = g : u.sibling = g, u = g);
            return e && d.forEach((function(e) {
                return t(i, e)
            })), c
        }

        function g(i, s, l, c) {
            var u = $(l);
            if ("function" != typeof u) throw Error(o(150));
            if (null == (l = u.call(l))) throw Error(o(151));
            for (var d = u = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                m.index > g ? (v = m, m = null) : v = m.sibling;
                var b = h(i, m, y.value, c);
                if (null === b) {
                    null === m && (m = v);
                    break
                }
                e && m && null === b.alternate && t(i, m), s = a(b, s, g), null === d ? u = b : d.sibling = b, d = b, m = v
            }
            if (y.done) return r(i, m), u;
            if (null === m) {
                for (; !y.done; g++, y = l.next()) null !== (y = f(i, y.value, c)) && (s = a(y, s, g), null === d ? u = y : d.sibling = y, d = y);
                return u
            }
            for (m = n(i, m); !y.done; g++, y = l.next()) null !== (y = p(m, i, g, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = a(y, s, g), null === d ? u = y : d.sibling = y, d = y);
            return e && m.forEach((function(e) {
                return t(i, e)
            })), u
        }
        return function(e, n, a, l) {
            var c = "object" == typeof a && null !== a && a.type === U && null === a.key;
            c && (a = a.props.children);
            var u = "object" == typeof a && null !== a;
            if (u) switch (a.$$typeof) {
                case N:
                    e: {
                        for (u = a.key, c = n; null !== c;) {
                            if (c.key === u) {
                                if (7 === c.tag ? a.type === U : c.elementType === a.type) {
                                    r(e, c.sibling), (n = i(c, a.type === U ? a.props.children : a.props)).ref = Pa(e, c, a), n.return = e, e = n;
                                    break e
                                }
                                r(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        a.type === U ? ((n = Il(a.props.children, e.mode, l, a.key)).return = e, e = n) : ((l = Ll(a.type, a.key, a.props, null, e.mode, l)).ref = Pa(e, n, a), l.return = e, e = l)
                    }
                    return s(e);
                case F:
                    e: {
                        for (c = a.key; null !== n;) {
                            if (n.key === c) {
                                if (4 === n.tag && n.stateNode.containerInfo === a.containerInfo && n.stateNode.implementation === a.implementation) {
                                    r(e, n.sibling), (n = i(n, a.children || [])).return = e, e = n;
                                    break e
                                }
                                r(e, n);
                                break
                            }
                            t(e, n), n = n.sibling
                        }(n = Nl(a, e.mode, l)).return = e,
                        e = n
                    }
                    return s(e)
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== n && 6 === n.tag ? (r(e, n.sibling), (n = i(n, a)).return = e, e = n) : (r(e, n), (n = Ml(a, e.mode, l)).return = e, e = n), s(e);
            if (xa(a)) return m(e, n, a, l);
            if ($(a)) return g(e, n, a, l);
            if (u && Aa(e, a), void 0 === a && !c) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(o(152, e.displayName || e.name || "Component"))
            }
            return r(e, n)
        }
    }
    var Da = Oa(!0),
        La = Oa(!1),
        Ia = {},
        Ma = {
            current: Ia
        },
        Na = {
            current: Ia
        },
        Fa = {
            current: Ia
        };

    function Ua(e) {
        if (e === Ia) throw Error(o(174));
        return e
    }

    function ja(e, t) {
        ui(Fa, t), ui(Na, e), ui(Ma, Ia);
        var r = t.nodeType;
        switch (r) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ge(null, "");
                break;
            default:
                t = Ge(t = (r = 8 === r ? t.parentNode : t).namespaceURI || null, r = r.tagName)
        }
        ci(Ma), ui(Ma, t)
    }

    function Ba(e) {
        ci(Ma), ci(Na), ci(Fa)
    }

    function Ga(e) {
        Ua(Fa.current);
        var t = Ua(Ma.current),
            r = Ge(t, e.type);
        t !== r && (ui(Na, e), ui(Ma, r))
    }

    function za(e) {
        Na.current === e && (ci(Ma), ci(Na))
    }
    var Ka = {
        current: 0
    };

    function Va(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var r = t.memoizedState;
                if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Ha(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var Wa = L.ReactCurrentDispatcher,
        Ya = L.ReactCurrentBatchConfig,
        qa = 0,
        Xa = null,
        $a = null,
        Qa = null,
        Ja = null,
        Za = null,
        eo = null,
        to = 0,
        ro = null,
        no = 0,
        io = !1,
        ao = null,
        oo = 0;

    function so() {
        throw Error(o(321))
    }

    function lo(e, t) {
        if (null === t) return !1;
        for (var r = 0; r < t.length && r < e.length; r++)
            if (!$n(e[r], t[r])) return !1;
        return !0
    }

    function co(e, t, r, n, i, a) {
        if (qa = a, Xa = t, Qa = null !== e ? e.memoizedState : null, Wa.current = null === Qa ? Po : Ao, t = r(n, i), io) {
            do {
                io = !1, oo += 1, Qa = null !== e ? e.memoizedState : null, eo = Ja, ro = Za = $a = null, Wa.current = Ao, t = r(n, i)
            } while (io);
            ao = null, oo = 0
        }
        if (Wa.current = xo, (e = Xa).memoizedState = Ja, e.expirationTime = to, e.updateQueue = ro, e.effectTag |= no, e = null !== $a && null !== $a.next, qa = 0, eo = Za = Ja = Qa = $a = Xa = null, to = 0, ro = null, no = 0, e) throw Error(o(300));
        return t
    }

    function uo() {
        Wa.current = xo, qa = 0, eo = Za = Ja = Qa = $a = Xa = null, to = 0, ro = null, no = 0, io = !1, ao = null, oo = 0
    }

    function fo() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === Za ? Ja = Za = e : Za = Za.next = e, Za
    }

    function ho() {
        if (null !== eo) eo = (Za = eo).next, Qa = null !== ($a = Qa) ? $a.next : null;
        else {
            if (null === Qa) throw Error(o(310));
            var e = {
                memoizedState: ($a = Qa).memoizedState,
                baseState: $a.baseState,
                queue: $a.queue,
                baseUpdate: $a.baseUpdate,
                next: null
            };
            Za = null === Za ? Ja = e : Za.next = e, Qa = $a.next
        }
        return Za
    }

    function po(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function mo(e) {
        var t = ho(),
            r = t.queue;
        if (null === r) throw Error(o(311));
        if (r.lastRenderedReducer = e, 0 < oo) {
            var n = r.dispatch;
            if (null !== ao) {
                var i = ao.get(r);
                if (void 0 !== i) {
                    ao.delete(r);
                    var a = t.memoizedState;
                    do {
                        a = e(a, i.action), i = i.next
                    } while (null !== i);
                    return $n(a, t.memoizedState) || (Go = !0), t.memoizedState = a, t.baseUpdate === r.last && (t.baseState = a), r.lastRenderedState = a, [a, n]
                }
            }
            return [t.memoizedState, n]
        }
        n = r.last;
        var s = t.baseUpdate;
        if (a = t.baseState, null !== s ? (null !== n && (n.next = null), n = s.next) : n = null !== n ? n.next : null, null !== n) {
            var l = i = null,
                c = n,
                u = !1;
            do {
                var d = c.expirationTime;
                d < qa ? (u || (u = !0, l = s, i = a), d > to && fl(to = d)) : (dl(d, c.suspenseConfig), a = c.eagerReducer === e ? c.eagerState : e(a, c.action)), s = c, c = c.next
            } while (null !== c && c !== n);
            u || (l = s, i = a), $n(a, t.memoizedState) || (Go = !0), t.memoizedState = a, t.baseUpdate = l, t.baseState = i, r.lastRenderedState = a
        }
        return [t.memoizedState, r.dispatch]
    }

    function go(e) {
        var t = fo();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: po,
            lastRenderedState: e
        }).dispatch = Ro.bind(null, Xa, e), [t.memoizedState, e]
    }

    function vo(e) {
        return mo(po)
    }

    function yo(e, t, r, n) {
        return e = {
            tag: e,
            create: t,
            destroy: r,
            deps: n,
            next: null
        }, null === ro ? (ro = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = ro.lastEffect) ? ro.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, ro.lastEffect = e), e
    }

    function bo(e, t, r, n) {
        var i = fo();
        no |= e, i.memoizedState = yo(t, r, void 0, void 0 === n ? null : n)
    }

    function To(e, t, r, n) {
        var i = ho();
        n = void 0 === n ? null : n;
        var a = void 0;
        if (null !== $a) {
            var o = $a.memoizedState;
            if (a = o.destroy, null !== n && lo(n, o.deps)) return void yo(0, r, a, n)
        }
        no |= e, i.memoizedState = yo(t, r, a, n)
    }

    function Eo(e, t) {
        return bo(516, 192, e, t)
    }

    function So(e, t) {
        return To(516, 192, e, t)
    }

    function wo(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function ko() {}

    function _o(e, t) {
        return fo().memoizedState = [e, void 0 === t ? null : t], e
    }

    function Co(e, t) {
        var r = ho();
        t = void 0 === t ? null : t;
        var n = r.memoizedState;
        return null !== n && null !== t && lo(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
    }

    function Ro(e, t, r) {
        if (!(25 > oo)) throw Error(o(301));
        var n = e.alternate;
        if (e === Xa || null !== n && n === Xa)
            if (io = !0, e = {
                    expirationTime: qa,
                    suspenseConfig: null,
                    action: r,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === ao && (ao = new Map), void 0 === (r = ao.get(t))) ao.set(t, e);
            else {
                for (t = r; null !== t.next;) t = t.next;
                t.next = e
            }
        else {
            var i = Js(),
                a = Ta.suspense;
            a = {
                expirationTime: i = Zs(i, e, a),
                suspenseConfig: a,
                action: r,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var s = t.last;
            if (null === s) a.next = a;
            else {
                var l = s.next;
                null !== l && (a.next = l), s.next = a
            }
            if (t.last = a, 0 === e.expirationTime && (null === n || 0 === n.expirationTime) && null !== (n = t.lastRenderedReducer)) try {
                var c = t.lastRenderedState,
                    u = n(c, r);
                if (a.eagerReducer = n, a.eagerState = u, $n(u, c)) return
            } catch (e) {}
            el(e, i)
        }
    }
    var xo = {
            readContext: sa,
            useCallback: so,
            useContext: so,
            useEffect: so,
            useImperativeHandle: so,
            useLayoutEffect: so,
            useMemo: so,
            useReducer: so,
            useRef: so,
            useState: so,
            useDebugValue: so,
            useResponder: so,
            useDeferredValue: so,
            useTransition: so
        },
        Po = {
            readContext: sa,
            useCallback: _o,
            useContext: sa,
            useEffect: Eo,
            useImperativeHandle: function(e, t, r) {
                return r = null != r ? r.concat([e]) : null, bo(4, 36, wo.bind(null, t, e), r)
            },
            useLayoutEffect: function(e, t) {
                return bo(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var r = fo();
                return t = void 0 === t ? null : t, e = e(), r.memoizedState = [e, t], e
            },
            useReducer: function(e, t, r) {
                var n = fo();
                return t = void 0 !== r ? r(t) : t, n.memoizedState = n.baseState = t, e = (e = n.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Ro.bind(null, Xa, e), [n.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, fo().memoizedState = e
            },
            useState: go,
            useDebugValue: ko,
            useResponder: Ha,
            useDeferredValue: function(e, t) {
                var r = go(e),
                    n = r[0],
                    i = r[1];
                return Eo((function() {
                    a.unstable_next((function() {
                        var r = Ya.suspense;
                        Ya.suspense = void 0 === t ? null : t;
                        try {
                            i(e)
                        } finally {
                            Ya.suspense = r
                        }
                    }))
                }), [e, t]), n
            },
            useTransition: function(e) {
                var t = go(!1),
                    r = t[0],
                    n = t[1];
                return [_o((function(t) {
                    n(!0), a.unstable_next((function() {
                        var r = Ya.suspense;
                        Ya.suspense = void 0 === e ? null : e;
                        try {
                            n(!1), t()
                        } finally {
                            Ya.suspense = r
                        }
                    }))
                }), [e, r]), r]
            }
        },
        Ao = {
            readContext: sa,
            useCallback: Co,
            useContext: sa,
            useEffect: So,
            useImperativeHandle: function(e, t, r) {
                return r = null != r ? r.concat([e]) : null, To(4, 36, wo.bind(null, t, e), r)
            },
            useLayoutEffect: function(e, t) {
                return To(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var r = ho();
                t = void 0 === t ? null : t;
                var n = r.memoizedState;
                return null !== n && null !== t && lo(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
            },
            useReducer: mo,
            useRef: function() {
                return ho().memoizedState
            },
            useState: vo,
            useDebugValue: ko,
            useResponder: Ha,
            useDeferredValue: function(e, t) {
                var r = vo(),
                    n = r[0],
                    i = r[1];
                return So((function() {
                    a.unstable_next((function() {
                        var r = Ya.suspense;
                        Ya.suspense = void 0 === t ? null : t;
                        try {
                            i(e)
                        } finally {
                            Ya.suspense = r
                        }
                    }))
                }), [e, t]), n
            },
            useTransition: function(e) {
                var t = vo(),
                    r = t[0],
                    n = t[1];
                return [Co((function(t) {
                    n(!0), a.unstable_next((function() {
                        var r = Ya.suspense;
                        Ya.suspense = void 0 === e ? null : e;
                        try {
                            n(!1), t()
                        } finally {
                            Ya.suspense = r
                        }
                    }))
                }), [e, r]), r]
            }
        },
        Oo = null,
        Do = null,
        Lo = !1;

    function Io(e, t) {
        var r = Al(5, null, null, 0);
        r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e, r.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r
    }

    function Mo(e, t) {
        switch (e.tag) {
            case 5:
                var r = e.type;
                return null !== (t = 1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function No(e) {
        if (Lo) {
            var t = Do;
            if (t) {
                var r = t;
                if (!Mo(e, t)) {
                    if (!(t = tn(r.nextSibling)) || !Mo(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Lo = !1, void(Oo = e);
                    Io(Oo, r)
                }
                Oo = e, Do = tn(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, Lo = !1, Oo = e
        }
    }

    function Fo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        Oo = e
    }

    function Uo(e) {
        if (e !== Oo) return !1;
        if (!Lo) return Fo(e), Lo = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !Jr(t, e.memoizedProps))
            for (t = Do; t;) Io(e, t), t = tn(t.nextSibling);
        if (Fo(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var r = e.data;
                        if ("/$" === r) {
                            if (0 === t) {
                                Do = tn(e.nextSibling);
                                break e
                            }
                            t--
                        } else "$" !== r && "$!" !== r && "$?" !== r || t++
                    }
                    e = e.nextSibling
                }
                Do = null
            }
        } else Do = Oo ? tn(e.stateNode.nextSibling) : null;
        return !0
    }

    function jo() {
        Do = Oo = null, Lo = !1
    }
    var Bo = L.ReactCurrentOwner,
        Go = !1;

    function zo(e, t, r, n) {
        t.child = null === e ? La(t, null, r, n) : Da(t, e.child, r, n)
    }

    function Ko(e, t, r, n, i) {
        r = r.render;
        var a = t.ref;
        return oa(t, i), n = co(e, t, r, n, a, i), null === e || Go ? (t.effectTag |= 1, zo(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), as(e, t, i))
    }

    function Vo(e, t, r, n, i, a) {
        if (null === e) {
            var o = r.type;
            return "function" != typeof o || Ol(o) || void 0 !== o.defaultProps || null !== r.compare || void 0 !== r.defaultProps ? ((e = Ll(r.type, null, n, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Ho(e, t, o, n, i, a))
        }
        return o = e.child, i < a && (i = o.memoizedProps, (r = null !== (r = r.compare) ? r : Jn)(i, n) && e.ref === t.ref) ? as(e, t, a) : (t.effectTag |= 1, (e = Dl(o, n)).ref = t.ref, e.return = t, t.child = e)
    }

    function Ho(e, t, r, n, i, a) {
        return null !== e && Jn(e.memoizedProps, n) && e.ref === t.ref && (Go = !1, i < a) ? as(e, t, a) : Yo(e, t, r, n, a)
    }

    function Wo(e, t) {
        var r = t.ref;
        (null === e && null !== r || null !== e && e.ref !== r) && (t.effectTag |= 128)
    }

    function Yo(e, t, r, n, i) {
        var a = gi(r) ? pi : fi.current;
        return a = mi(t, a), oa(t, i), r = co(e, t, r, n, a, i), null === e || Go ? (t.effectTag |= 1, zo(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), as(e, t, i))
    }

    function qo(e, t, r, n, i) {
        if (gi(r)) {
            var a = !0;
            Ei(t)
        } else a = !1;
        if (oa(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), _a(t, r, n), Ra(t, r, n, i), n = !0;
        else if (null === e) {
            var o = t.stateNode,
                s = t.memoizedProps;
            o.props = s;
            var l = o.context,
                c = r.contextType;
            "object" == typeof c && null !== c ? c = sa(c) : c = mi(t, c = gi(r) ? pi : fi.current);
            var u = r.getDerivedStateFromProps,
                d = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
            d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== n || l !== c) && Ca(t, o, n, c), la = !1;
            var f = t.memoizedState;
            l = o.state = f;
            var h = t.updateQueue;
            null !== h && (va(t, h, n, o, i), l = t.memoizedState), s !== n || f !== l || hi.current || la ? ("function" == typeof u && (Sa(t, r, u, n), l = t.memoizedState), (s = la || ka(t, r, s, n, f, l, c)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = c, n = s) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), n = !1)
        } else o = t.stateNode, s = t.memoizedProps, o.props = t.type === t.elementType ? s : Qi(t.type, s), l = o.context, "object" == typeof(c = r.contextType) && null !== c ? c = sa(c) : c = mi(t, c = gi(r) ? pi : fi.current), (d = "function" == typeof(u = r.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== n || l !== c) && Ca(t, o, n, c), la = !1, l = t.memoizedState, f = o.state = l, null !== (h = t.updateQueue) && (va(t, h, n, o, i), f = t.memoizedState), s !== n || l !== f || hi.current || la ? ("function" == typeof u && (Sa(t, r, u, n), f = t.memoizedState), (u = la || ka(t, r, s, n, l, f, c)) ? (d || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(n, f, c), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(n, f, c)), "function" == typeof o.componentDidUpdate && (t.effectTag |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = n, t.memoizedState = f), o.props = n, o.state = f, o.context = c, n = u) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), n = !1);
        return Xo(e, t, r, n, a, i)
    }

    function Xo(e, t, r, n, i, a) {
        Wo(e, t);
        var o = 0 != (64 & t.effectTag);
        if (!n && !o) return i && Si(t, r, !1), as(e, t, a);
        n = t.stateNode, Bo.current = t;
        var s = o && "function" != typeof r.getDerivedStateFromError ? null : n.render();
        return t.effectTag |= 1, null !== e && o ? (t.child = Da(t, e.child, null, a), t.child = Da(t, null, s, a)) : zo(e, t, s, a), t.memoizedState = n.state, i && Si(t, r, !0), t.child
    }

    function $o(e) {
        var t = e.stateNode;
        t.pendingContext ? bi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && bi(0, t.context, !1), ja(e, t.containerInfo)
    }
    var Qo, Jo, Zo, es = {
        dehydrated: null,
        retryTime: 0
    };

    function ts(e, t, r) {
        var n, i = t.mode,
            a = t.pendingProps,
            o = Ka.current,
            s = !1;
        if ((n = 0 != (64 & t.effectTag)) || (n = 0 != (2 & o) && (null === e || null !== e.memoizedState)), n ? (s = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), ui(Ka, 1 & o), null === e) {
            if (void 0 !== a.fallback && No(t), s) {
                if (s = a.fallback, (a = Il(null, i, 0, null)).return = t, 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                return (r = Il(s, i, r, null)).return = t, a.sibling = r, t.memoizedState = es, t.child = a, r
            }
            return i = a.children, t.memoizedState = null, t.child = La(t, null, i, r)
        }
        if (null !== e.memoizedState) {
            if (i = (e = e.child).sibling, s) {
                if (a = a.fallback, (r = Dl(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (r.child = s; null !== s;) s.return = r, s = s.sibling;
                return (i = Dl(i, a, i.expirationTime)).return = t, r.sibling = i, r.childExpirationTime = 0, t.memoizedState = es, t.child = r, i
            }
            return r = Da(t, e.child, a.children, r), t.memoizedState = null, t.child = r
        }
        if (e = e.child, s) {
            if (s = a.fallback, (a = Il(null, i, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
            return (r = Il(s, i, r, null)).return = t, a.sibling = r, r.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = es, t.child = a, r
        }
        return t.memoizedState = null, t.child = Da(t, e, a.children, r)
    }

    function rs(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var r = e.alternate;
        null !== r && r.expirationTime < t && (r.expirationTime = t), aa(e.return, t)
    }

    function ns(e, t, r, n, i, a) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: n,
            tail: r,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: a
        } : (o.isBackwards = t, o.rendering = null, o.last = n, o.tail = r, o.tailExpiration = 0, o.tailMode = i, o.lastEffect = a)
    }

    function is(e, t, r) {
        var n = t.pendingProps,
            i = n.revealOrder,
            a = n.tail;
        if (zo(e, t, n.children, r), 0 != (2 & (n = Ka.current))) n = 1 & n | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && rs(e, r);
                else if (19 === e.tag) rs(e, r);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            n &= 1
        }
        if (ui(Ka, n), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === Va(e) && (i = r), r = r.sibling;
                null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), ns(t, !1, i, r, a, t.lastEffect);
                break;
            case "backwards":
                for (r = null, i = t.child, t.child = null; null !== i;) {
                    if (null !== (e = i.alternate) && null === Va(e)) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = r, r = i, i = e
                }
                ns(t, !0, r, null, a, t.lastEffect);
                break;
            case "together":
                ns(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function as(e, t, r) {
        null !== e && (t.dependencies = e.dependencies);
        var n = t.expirationTime;
        if (0 !== n && fl(n), t.childExpirationTime < r) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
            for (r = Dl(e = t.child, e.pendingProps, e.expirationTime), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = Dl(e, e.pendingProps, e.expirationTime)).return = t;
            r.sibling = null
        }
        return t.child
    }

    function os(e) {
        e.effectTag |= 4
    }

    function ss(e, t) {
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                null === r ? e.tail = null : r.sibling = null;
                break;
            case "collapsed":
                r = e.tail;
                for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
                null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
    }

    function ls(e) {
        switch (e.tag) {
            case 1:
                gi(e.type) && vi();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Ba(), yi(), 0 != (64 & (t = e.effectTag))) throw Error(o(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return za(e), null;
            case 13:
                return ci(Ka), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return ci(Ka), null;
            case 4:
                return Ba(), null;
            case 10:
                return ia(e), null;
            default:
                return null
        }
    }

    function cs(e, t) {
        return {
            value: e,
            source: t,
            stack: J(t)
        }
    }
    Qo = function(e, t) {
        for (var r = t.child; null !== r;) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; null === r.sibling;) {
                if (null === r.return || r.return === t) return;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
    }, Jo = function(e, t, r, n, a) {
        var o = e.memoizedProps;
        if (o !== n) {
            var s, l, c = t.stateNode;
            switch (Ua(Ma.current), e = null, r) {
                case "input":
                    o = Ce(c, o), n = Ce(c, n), e = [];
                    break;
                case "option":
                    o = De(c, o), n = De(c, n), e = [];
                    break;
                case "select":
                    o = i({}, o, {
                        value: void 0
                    }), n = i({}, n, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    o = Ie(c, o), n = Ie(c, n), e = [];
                    break;
                default:
                    "function" != typeof o.onClick && "function" == typeof n.onClick && (c.onclick = Kr)
            }
            for (s in Br(r, n), r = null, o)
                if (!n.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                    if ("style" === s)
                        for (l in c = o[s]) c.hasOwnProperty(l) && (r || (r = {}), r[l] = "");
                    else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (h.hasOwnProperty(s) ? e || (e = []) : (e = e || []).push(s, null));
            for (s in n) {
                var u = n[s];
                if (c = null != o ? o[s] : void 0, n.hasOwnProperty(s) && u !== c && (null != u || null != c))
                    if ("style" === s)
                        if (c) {
                            for (l in c) !c.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}), r[l] = "");
                            for (l in u) u.hasOwnProperty(l) && c[l] !== u[l] && (r || (r = {}), r[l] = u[l])
                        } else r || (e || (e = []), e.push(s, r)), r = u;
                else "dangerouslySetInnerHTML" === s ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(s, "" + u)) : "children" === s ? c === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(s, "" + u) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (h.hasOwnProperty(s) ? (null != u && zr(a, s), e || c === u || (e = [])) : (e = e || []).push(s, u))
            }
            r && (e = e || []).push("style", r), a = e, (t.updateQueue = a) && os(t)
        }
    }, Zo = function(e, t, r, n) {
        r !== n && os(t)
    };
    var us = "function" == typeof WeakSet ? WeakSet : Set;

    function ds(e, t) {
        var r = t.source,
            n = t.stack;
        null === n && null !== r && (n = J(r)), null !== r && Q(r.type), t = t.value, null !== e && 1 === e.tag && Q(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function() {
                throw e
            }))
        }
    }

    function fs(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                kl(e, t)
            } else t.current = null
    }

    function hs(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                ps(2, 0, t);
                break;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var r = e.memoizedProps,
                        n = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? r : Qi(t.type, r), n), e.__reactInternalSnapshotBeforeUpdate = t
                }
                break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                break;
            default:
                throw Error(o(163))
        }
    }

    function ps(e, t, r) {
        if (null !== (r = null !== (r = r.updateQueue) ? r.lastEffect : null)) {
            var n = r = r.next;
            do {
                if (0 != (n.tag & e)) {
                    var i = n.destroy;
                    n.destroy = void 0, void 0 !== i && i()
                }
                0 != (n.tag & t) && (i = n.create, n.destroy = i()), n = n.next
            } while (n !== r)
        }
    }

    function ms(e, t, r) {
        switch ("function" == typeof xl && xl(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var n = e.next;
                    Vi(97 < r ? 97 : r, (function() {
                        var e = n;
                        do {
                            var r = e.destroy;
                            if (void 0 !== r) {
                                var i = t;
                                try {
                                    r()
                                } catch (e) {
                                    kl(i, e)
                                }
                            }
                            e = e.next
                        } while (e !== n)
                    }))
                }
                break;
            case 1:
                fs(t), "function" == typeof(r = t.stateNode).componentWillUnmount && function(e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        kl(e, t)
                    }
                }(t, r);
                break;
            case 5:
                fs(t);
                break;
            case 4:
                bs(e, t, r)
        }
    }

    function gs(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && gs(t)
    }

    function vs(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function ys(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (vs(t)) {
                    var r = t;
                    break e
                }
                t = t.return
            }
            throw Error(o(160))
        }
        switch (t = r.stateNode, r.tag) {
            case 5:
                var n = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, n = !0;
                break;
            default:
                throw Error(o(161))
        }
        16 & r.effectTag && (Ve(t, ""), r.effectTag &= -17);e: t: for (r = e;;) {
            for (; null === r.sibling;) {
                if (null === r.return || vs(r.return)) {
                    r = null;
                    break e
                }
                r = r.return
            }
            for (r.sibling.return = r.return, r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag;) {
                if (2 & r.effectTag) continue t;
                if (null === r.child || 4 === r.tag) continue t;
                r.child.return = r, r = r.child
            }
            if (!(2 & r.effectTag)) {
                r = r.stateNode;
                break e
            }
        }
        for (var i = e;;) {
            var a = 5 === i.tag || 6 === i.tag;
            if (a) {
                var s = a ? i.stateNode : i.stateNode.instance;
                if (r)
                    if (n) {
                        var l = s;
                        s = r, 8 === (a = t).nodeType ? a.parentNode.insertBefore(l, s) : a.insertBefore(l, s)
                    } else t.insertBefore(s, r);
                else n ? (8 === (l = t).nodeType ? (a = l.parentNode).insertBefore(s, l) : (a = l).appendChild(s), null != (l = l._reactRootContainer) || null !== a.onclick || (a.onclick = Kr)) : t.appendChild(s)
            } else if (4 !== i.tag && null !== i.child) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === e) break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === e) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }

    function bs(e, t, r) {
        for (var n, i, a = t, s = !1;;) {
            if (!s) {
                s = a.return;
                e: for (;;) {
                    if (null === s) throw Error(o(160));
                    switch (n = s.stateNode, s.tag) {
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                        case 4:
                            n = n.containerInfo, i = !0;
                            break e
                    }
                    s = s.return
                }
                s = !0
            }
            if (5 === a.tag || 6 === a.tag) {
                e: for (var l = e, c = a, u = r, d = c;;)
                    if (ms(l, d, u), null !== d.child && 4 !== d.tag) d.child.return = d, d = d.child;
                    else {
                        if (d === c) break;
                        for (; null === d.sibling;) {
                            if (null === d.return || d.return === c) break e;
                            d = d.return
                        }
                        d.sibling.return = d.return, d = d.sibling
                    }i ? (l = n, c = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(c) : l.removeChild(c)) : n.removeChild(a.stateNode)
            }
            else if (4 === a.tag) {
                if (null !== a.child) {
                    n = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                    continue
                }
            } else if (ms(e, a, r), null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === t) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === t) return;
                4 === (a = a.return).tag && (s = !1)
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function Ts(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ps(4, 8, t);
                break;
            case 1:
                break;
            case 5:
                var r = t.stateNode;
                if (null != r) {
                    var n = t.memoizedProps,
                        i = null !== e ? e.memoizedProps : n;
                    e = t.type;
                    var a = t.updateQueue;
                    if (t.updateQueue = null, null !== a) {
                        for (r[on] = n, "input" === e && "radio" === n.type && null != n.name && xe(r, n), Gr(e, i), t = Gr(e, n), i = 0; i < a.length; i += 2) {
                            var s = a[i],
                                l = a[i + 1];
                            "style" === s ? Ur(r, l) : "dangerouslySetInnerHTML" === s ? Ke(r, l) : "children" === s ? Ve(r, l) : Se(r, s, l, t)
                        }
                        switch (e) {
                            case "input":
                                Pe(r, n);
                                break;
                            case "textarea":
                                Ne(r, n);
                                break;
                            case "select":
                                t = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, null != (e = n.value) ? Le(r, !!n.multiple, e, !1) : t !== !!n.multiple && (null != n.defaultValue ? Le(r, !!n.multiple, n.defaultValue, !0) : Le(r, !!n.multiple, n.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === t.stateNode) throw Error(o(162));
                t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
                (t = t.stateNode).hydrate && (t.hydrate = !1, Ct(t.containerInfo));
                break;
            case 12:
                break;
            case 13:
                if (r = t, null === t.memoizedState ? n = !1 : (n = !0, r = t.child, Bs = Gi()), null !== r) e: for (e = r;;) {
                    if (5 === e.tag) a = e.stateNode, n ? "function" == typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = Fr("display", i));
                    else if (6 === e.tag) e.stateNode.nodeValue = n ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (a = e.child.sibling).return = e, e = a;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === r) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === r) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                Es(t);
                break;
            case 19:
                Es(t);
                break;
            case 17:
            case 20:
            case 21:
                break;
            default:
                throw Error(o(163))
        }
    }

    function Es(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new us), t.forEach((function(t) {
                var n = Cl.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n))
            }))
        }
    }
    var Ss = "function" == typeof WeakMap ? WeakMap : Map;

    function ws(e, t, r) {
        (r = da(r, null)).tag = 3, r.payload = {
            element: null
        };
        var n = t.value;
        return r.callback = function() {
            zs || (zs = !0, Ks = n), ds(e, t)
        }, r
    }

    function ks(e, t, r) {
        (r = da(r, null)).tag = 3;
        var n = e.type.getDerivedStateFromError;
        if ("function" == typeof n) {
            var i = t.value;
            r.payload = function() {
                return ds(e, t), n(i)
            }
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (r.callback = function() {
            "function" != typeof n && (null === Vs ? Vs = new Set([this]) : Vs.add(this), ds(e, t));
            var r = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== r ? r : ""
            })
        }), r
    }
    var _s, Cs = Math.ceil,
        Rs = L.ReactCurrentDispatcher,
        xs = L.ReactCurrentOwner,
        Ps = 0,
        As = null,
        Os = null,
        Ds = 0,
        Ls = 0,
        Is = null,
        Ms = 1073741823,
        Ns = 1073741823,
        Fs = null,
        Us = 0,
        js = !1,
        Bs = 0,
        Gs = null,
        zs = !1,
        Ks = null,
        Vs = null,
        Hs = !1,
        Ws = null,
        Ys = 90,
        qs = null,
        Xs = 0,
        $s = null,
        Qs = 0;

    function Js() {
        return 0 != (48 & Ps) ? 1073741821 - (Gi() / 10 | 0) : 0 !== Qs ? Qs : Qs = 1073741821 - (Gi() / 10 | 0)
    }

    function Zs(e, t, r) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var n = zi();
        if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
        if (0 != (16 & Ps)) return Ds;
        if (null !== r) e = $i(e, 0 | r.timeoutMs || 5e3, 250);
        else switch (n) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = $i(e, 150, 100);
                break;
            case 97:
            case 96:
                e = $i(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(o(326))
        }
        return null !== As && e === Ds && --e, e
    }

    function el(e, t) {
        if (50 < Xs) throw Xs = 0, $s = null, Error(o(185));
        if (null !== (e = tl(e, t))) {
            var r = zi();
            1073741823 === t ? 0 != (8 & Ps) && 0 == (48 & Ps) ? al(e) : (nl(e), 0 === Ps && Yi()) : nl(e), 0 == (4 & Ps) || 98 !== r && 99 !== r || (null === qs ? qs = new Map([
                [e, t]
            ]) : (void 0 === (r = qs.get(e)) || r > t) && qs.set(e, t))
        }
    }

    function tl(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var r = e.alternate;
        null !== r && r.expirationTime < t && (r.expirationTime = t);
        var n = e.return,
            i = null;
        if (null === n && 3 === e.tag) i = e.stateNode;
        else
            for (; null !== n;) {
                if (r = n.alternate, n.childExpirationTime < t && (n.childExpirationTime = t), null !== r && r.childExpirationTime < t && (r.childExpirationTime = t), null === n.return && 3 === n.tag) {
                    i = n.stateNode;
                    break
                }
                n = n.return
            }
        return null !== i && (As === i && (fl(t), 4 === Ls && jl(i, Ds)), Bl(i, t)), i
    }

    function rl(e) {
        var t = e.lastExpiredTime;
        return 0 !== t ? t : Ul(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
    }

    function nl(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Wi(al.bind(null, e));
        else {
            var t = rl(e),
                r = e.callbackNode;
            if (0 === t) null !== r && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
            else {
                var n = Js();
                if (1073741823 === t ? n = 99 : 1 === t || 2 === t ? n = 95 : n = 0 >= (n = 10 * (1073741821 - t) - 10 * (1073741821 - n)) ? 99 : 250 >= n ? 98 : 5250 >= n ? 97 : 95, null !== r) {
                    var i = e.callbackPriority;
                    if (e.callbackExpirationTime === t && i >= n) return;
                    r !== Mi && _i(r)
                }
                e.callbackExpirationTime = t, e.callbackPriority = n, t = 1073741823 === t ? Wi(al.bind(null, e)) : Hi(n, il.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Gi()
                }), e.callbackNode = t
            }
        }
    }

    function il(e, t) {
        if (Qs = 0, t) return Gl(e, t = Js()), nl(e), null;
        var r = rl(e);
        if (0 !== r) {
            if (t = e.callbackNode, 0 != (48 & Ps)) throw Error(o(327));
            if (El(), e === As && r === Ds || ll(e, r), null !== Os) {
                var n = Ps;
                Ps |= 16;
                for (var i = ul();;) try {
                    pl();
                    break
                } catch (t) {
                    cl(e, t)
                }
                if (ra(), Ps = n, Rs.current = i, 1 === Ls) throw t = Is, ll(e, r), jl(e, r), nl(e), t;
                if (null === Os) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = r, n = Ls, As = null, n) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 2:
                        Gl(e, 2 < r ? 2 : r);
                        break;
                    case 3:
                        if (jl(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = vl(i)), 1073741823 === Ms && 10 < (i = Bs + 500 - Gi())) {
                            if (js) {
                                var a = e.lastPingedTime;
                                if (0 === a || a >= r) {
                                    e.lastPingedTime = r, ll(e, r);
                                    break
                                }
                            }
                            if (0 !== (a = rl(e)) && a !== r) break;
                            if (0 !== n && n !== r) {
                                e.lastPingedTime = n;
                                break
                            }
                            e.timeoutHandle = Zr(yl.bind(null, e), i);
                            break
                        }
                        yl(e);
                        break;
                    case 4:
                        if (jl(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = vl(i)), js && (0 === (i = e.lastPingedTime) || i >= r)) {
                            e.lastPingedTime = r, ll(e, r);
                            break
                        }
                        if (0 !== (i = rl(e)) && i !== r) break;
                        if (0 !== n && n !== r) {
                            e.lastPingedTime = n;
                            break
                        }
                        if (1073741823 !== Ns ? n = 10 * (1073741821 - Ns) - Gi() : 1073741823 === Ms ? n = 0 : (n = 10 * (1073741821 - Ms) - 5e3, 0 > (n = (i = Gi()) - n) && (n = 0), (r = 10 * (1073741821 - r) - i) < (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Cs(n / 1960)) - n) && (n = r)), 10 < n) {
                            e.timeoutHandle = Zr(yl.bind(null, e), n);
                            break
                        }
                        yl(e);
                        break;
                    case 5:
                        if (1073741823 !== Ms && null !== Fs) {
                            a = Ms;
                            var s = Fs;
                            if (0 >= (n = 0 | s.busyMinDurationMs) ? n = 0 : (i = 0 | s.busyDelayMs, n = (a = Gi() - (10 * (1073741821 - a) - (0 | s.timeoutMs || 5e3))) <= i ? 0 : i + n - a), 10 < n) {
                                jl(e, r), e.timeoutHandle = Zr(yl.bind(null, e), n);
                                break
                            }
                        }
                        yl(e);
                        break;
                    default:
                        throw Error(o(329))
                }
                if (nl(e), e.callbackNode === t) return il.bind(null, e)
            }
        }
        return null
    }

    function al(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) yl(e);
        else {
            if (0 != (48 & Ps)) throw Error(o(327));
            if (El(), e === As && t === Ds || ll(e, t), null !== Os) {
                var r = Ps;
                Ps |= 16;
                for (var n = ul();;) try {
                    hl();
                    break
                } catch (t) {
                    cl(e, t)
                }
                if (ra(), Ps = r, Rs.current = n, 1 === Ls) throw r = Is, ll(e, t), jl(e, t), nl(e), r;
                if (null !== Os) throw Error(o(261));
                e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, As = null, yl(e), nl(e)
            }
        }
        return null
    }

    function ol(e, t) {
        var r = Ps;
        Ps |= 1;
        try {
            return e(t)
        } finally {
            0 === (Ps = r) && Yi()
        }
    }

    function sl(e, t) {
        var r = Ps;
        Ps &= -2, Ps |= 8;
        try {
            return e(t)
        } finally {
            0 === (Ps = r) && Yi()
        }
    }

    function ll(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var r = e.timeoutHandle;
        if (-1 !== r && (e.timeoutHandle = -1, en(r)), null !== Os)
            for (r = Os.return; null !== r;) {
                var n = r;
                switch (n.tag) {
                    case 1:
                        var i = n.type.childContextTypes;
                        null != i && vi();
                        break;
                    case 3:
                        Ba(), yi();
                        break;
                    case 5:
                        za(n);
                        break;
                    case 4:
                        Ba();
                        break;
                    case 13:
                    case 19:
                        ci(Ka);
                        break;
                    case 10:
                        ia(n)
                }
                r = r.return
            }
        As = e, Os = Dl(e.current, null), Ds = t, Ls = 0, Is = null, Ns = Ms = 1073741823, Fs = null, Us = 0, js = !1
    }

    function cl(e, t) {
        for (;;) {
            try {
                if (ra(), uo(), null === Os || null === Os.return) return Ls = 1, Is = t, null;
                e: {
                    var r = e,
                        n = Os.return,
                        i = Os,
                        a = t;
                    if (t = Ds, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== a && "object" == typeof a && "function" == typeof a.then) {
                        var o = a,
                            s = 0 != (1 & Ka.current),
                            l = n;
                        do {
                            var c;
                            if (c = 13 === l.tag) {
                                var u = l.memoizedState;
                                if (null !== u) c = null !== u.dehydrated;
                                else {
                                    var d = l.memoizedProps;
                                    c = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !s)
                                }
                            }
                            if (c) {
                                var f = l.updateQueue;
                                if (null === f) {
                                    var h = new Set;
                                    h.add(o), l.updateQueue = h
                                } else f.add(o);
                                if (0 == (2 & l.mode)) {
                                    if (l.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag)
                                        if (null === i.alternate) i.tag = 17;
                                        else {
                                            var p = da(1073741823, null);
                                            p.tag = 2, ha(i, p)
                                        }
                                    i.expirationTime = 1073741823;
                                    break e
                                }
                                a = void 0, i = t;
                                var m = r.pingCache;
                                if (null === m ? (m = r.pingCache = new Ss, a = new Set, m.set(o, a)) : void 0 === (a = m.get(o)) && (a = new Set, m.set(o, a)), !a.has(i)) {
                                    a.add(i);
                                    var g = _l.bind(null, r, o, i);
                                    o.then(g, g)
                                }
                                l.effectTag |= 4096, l.expirationTime = t;
                                break e
                            }
                            l = l.return
                        } while (null !== l);
                        a = Error((Q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + J(i))
                    }
                    5 !== Ls && (Ls = 2),
                    a = cs(a, i),
                    l = n;do {
                        switch (l.tag) {
                            case 3:
                                o = a, l.effectTag |= 4096, l.expirationTime = t, pa(l, ws(l, o, t));
                                break e;
                            case 1:
                                o = a;
                                var v = l.type,
                                    y = l.stateNode;
                                if (0 == (64 & l.effectTag) && ("function" == typeof v.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === Vs || !Vs.has(y)))) {
                                    l.effectTag |= 4096, l.expirationTime = t, pa(l, ks(l, o, t));
                                    break e
                                }
                        }
                        l = l.return
                    } while (null !== l)
                }
                Os = gl(Os)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function ul() {
        var e = Rs.current;
        return Rs.current = xo, null === e ? xo : e
    }

    function dl(e, t) {
        e < Ms && 2 < e && (Ms = e), null !== t && e < Ns && 2 < e && (Ns = e, Fs = t)
    }

    function fl(e) {
        e > Us && (Us = e)
    }

    function hl() {
        for (; null !== Os;) Os = ml(Os)
    }

    function pl() {
        for (; null !== Os && !Ci();) Os = ml(Os)
    }

    function ml(e) {
        var t = _s(e.alternate, e, Ds);
        return e.memoizedProps = e.pendingProps, null === t && (t = gl(e)), xs.current = null, t
    }

    function gl(e) {
        Os = e;
        do {
            var t = Os.alternate;
            if (e = Os.return, 0 == (2048 & Os.effectTag)) {
                e: {
                    var r = t,
                        n = Ds,
                        a = (t = Os).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            gi(t.type) && vi();
                            break;
                        case 3:
                            Ba(), yi(), (a = t.stateNode).pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (null === r || null === r.child) && Uo(t) && os(t);
                            break;
                        case 5:
                            za(t), n = Ua(Fa.current);
                            var s = t.type;
                            if (null !== r && null != t.stateNode) Jo(r, t, s, a, n), r.ref !== t.ref && (t.effectTag |= 128);
                            else if (a) {
                                var l = Ua(Ma.current);
                                if (Uo(t)) {
                                    var c = (a = t).stateNode;
                                    r = a.type;
                                    var u = a.memoizedProps,
                                        d = n;
                                    switch (c[an] = a, c[on] = u, s = void 0, n = c, r) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            kr("load", n);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (c = 0; c < et.length; c++) kr(et[c], n);
                                            break;
                                        case "source":
                                            kr("error", n);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            kr("error", n), kr("load", n);
                                            break;
                                        case "form":
                                            kr("reset", n), kr("submit", n);
                                            break;
                                        case "details":
                                            kr("toggle", n);
                                            break;
                                        case "input":
                                            Re(n, u), kr("invalid", n), zr(d, "onChange");
                                            break;
                                        case "select":
                                            n._wrapperState = {
                                                wasMultiple: !!u.multiple
                                            }, kr("invalid", n), zr(d, "onChange");
                                            break;
                                        case "textarea":
                                            Me(n, u), kr("invalid", n), zr(d, "onChange")
                                    }
                                    for (s in Br(r, u), c = null, u) u.hasOwnProperty(s) && (l = u[s], "children" === s ? "string" == typeof l ? n.textContent !== l && (c = ["children", l]) : "number" == typeof l && n.textContent !== "" + l && (c = ["children", "" + l]) : h.hasOwnProperty(s) && null != l && zr(d, s));
                                    switch (r) {
                                        case "input":
                                            ke(n), Ae(n, u, !0);
                                            break;
                                        case "textarea":
                                            ke(n), Fe(n);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof u.onClick && (n.onclick = Kr)
                                    }
                                    s = c, a.updateQueue = s, (a = null !== s) && os(t)
                                } else {
                                    r = t, d = s, u = a, c = 9 === n.nodeType ? n : n.ownerDocument, l === Ue && (l = Be(d)), l === Ue ? "script" === d ? ((u = c.createElement("div")).innerHTML = "<script><\/script>", c = u.removeChild(u.firstChild)) : "string" == typeof u.is ? c = c.createElement(d, {
                                        is: u.is
                                    }) : (c = c.createElement(d), "select" === d && (d = c, u.multiple ? d.multiple = !0 : u.size && (d.size = u.size))) : c = c.createElementNS(l, d), (u = c)[an] = r, u[on] = a, Qo(u, t), t.stateNode = u;
                                    var f = n,
                                        p = Gr(d = s, r = a);
                                    switch (d) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            kr("load", u), n = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (n = 0; n < et.length; n++) kr(et[n], u);
                                            n = r;
                                            break;
                                        case "source":
                                            kr("error", u), n = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            kr("error", u), kr("load", u), n = r;
                                            break;
                                        case "form":
                                            kr("reset", u), kr("submit", u), n = r;
                                            break;
                                        case "details":
                                            kr("toggle", u), n = r;
                                            break;
                                        case "input":
                                            Re(u, r), n = Ce(u, r), kr("invalid", u), zr(f, "onChange");
                                            break;
                                        case "option":
                                            n = De(u, r);
                                            break;
                                        case "select":
                                            u._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, n = i({}, r, {
                                                value: void 0
                                            }), kr("invalid", u), zr(f, "onChange");
                                            break;
                                        case "textarea":
                                            Me(u, r), n = Ie(u, r), kr("invalid", u), zr(f, "onChange");
                                            break;
                                        default:
                                            n = r
                                    }
                                    Br(d, n), c = void 0, l = d;
                                    var m = u,
                                        g = n;
                                    for (c in g)
                                        if (g.hasOwnProperty(c)) {
                                            var v = g[c];
                                            "style" === c ? Ur(m, v) : "dangerouslySetInnerHTML" === c ? null != (v = v ? v.__html : void 0) && Ke(m, v) : "children" === c ? "string" == typeof v ? ("textarea" !== l || "" !== v) && Ve(m, v) : "number" == typeof v && Ve(m, "" + v) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (h.hasOwnProperty(c) ? null != v && zr(f, c) : null != v && Se(m, c, v, p))
                                        }
                                    switch (d) {
                                        case "input":
                                            ke(u), Ae(u, r, !1);
                                            break;
                                        case "textarea":
                                            ke(u), Fe(u);
                                            break;
                                        case "option":
                                            null != r.value && u.setAttribute("value", "" + Ee(r.value));
                                            break;
                                        case "select":
                                            (n = u).multiple = !!r.multiple, null != (u = r.value) ? Le(n, !!r.multiple, u, !1) : null != r.defaultValue && Le(n, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof n.onClick && (u.onclick = Kr)
                                    }(a = Qr(s, a)) && os(t)
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else if (null === t.stateNode) throw Error(o(166));
                            break;
                        case 6:
                            if (r && null != t.stateNode) Zo(0, t, r.memoizedProps, a);
                            else {
                                if ("string" != typeof a && null === t.stateNode) throw Error(o(166));
                                n = Ua(Fa.current), Ua(Ma.current), Uo(t) ? (s = (a = t).stateNode, n = a.memoizedProps, s[an] = a, (a = s.nodeValue !== n) && os(t)) : (s = t, (a = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(a))[an] = s, t.stateNode = a)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (ci(Ka), a = t.memoizedState, 0 != (64 & t.effectTag)) {
                                t.expirationTime = n;
                                break e
                            }
                            a = null !== a, s = !1, null === r ? void 0 !== t.memoizedProps.fallback && Uo(t) : (s = null !== (n = r.memoizedState), a || null === n || null !== (n = r.child.sibling) && (null !== (u = t.firstEffect) ? (t.firstEffect = n, n.nextEffect = u) : (t.firstEffect = t.lastEffect = n, n.nextEffect = null), n.effectTag = 8)), a && !s && 0 != (2 & t.mode) && (null === r && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Ka.current) ? 0 === Ls && (Ls = 3) : (0 !== Ls && 3 !== Ls || (Ls = 4), 0 !== Us && null !== As && (jl(As, Ds), Bl(As, Us)))), (a || s) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            Ba();
                            break;
                        case 10:
                            ia(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            gi(t.type) && vi();
                            break;
                        case 19:
                            if (ci(Ka), null === (a = t.memoizedState)) break;
                            if (s = 0 != (64 & t.effectTag), null === (u = a.rendering)) {
                                if (s) ss(a, !1);
                                else if (0 !== Ls || null !== r && 0 != (64 & r.effectTag))
                                    for (r = t.child; null !== r;) {
                                        if (null !== (u = Va(r))) {
                                            for (t.effectTag |= 64, ss(a, !1), null !== (s = u.updateQueue) && (t.updateQueue = s, t.effectTag |= 4), null === a.lastEffect && (t.firstEffect = null), t.lastEffect = a.lastEffect, a = n, s = t.child; null !== s;) r = a, (n = s).effectTag &= 2, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null, null === (u = n.alternate) ? (n.childExpirationTime = 0, n.expirationTime = r, n.child = null, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null) : (n.childExpirationTime = u.childExpirationTime, n.expirationTime = u.expirationTime, n.child = u.child, n.memoizedProps = u.memoizedProps, n.memoizedState = u.memoizedState, n.updateQueue = u.updateQueue, r = u.dependencies, n.dependencies = null === r ? null : {
                                                expirationTime: r.expirationTime,
                                                firstContext: r.firstContext,
                                                responders: r.responders
                                            }), s = s.sibling;
                                            ui(Ka, 1 & Ka.current | 2), t = t.child;
                                            break e
                                        }
                                        r = r.sibling
                                    }
                            } else {
                                if (!s)
                                    if (null !== (r = Va(u))) {
                                        if (t.effectTag |= 64, s = !0, null !== (n = r.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), ss(a, !0), null === a.tail && "hidden" === a.tailMode && !u.alternate) {
                                            null !== (t = t.lastEffect = a.lastEffect) && (t.nextEffect = null);
                                            break
                                        }
                                    } else Gi() > a.tailExpiration && 1 < n && (t.effectTag |= 64, s = !0, ss(a, !1), t.expirationTime = t.childExpirationTime = n - 1);
                                a.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = a.last) ? n.sibling = u : t.child = u, a.last = u)
                            }
                            if (null !== a.tail) {
                                0 === a.tailExpiration && (a.tailExpiration = Gi() + 500), n = a.tail, a.rendering = n, a.tail = n.sibling, a.lastEffect = t.lastEffect, n.sibling = null, a = Ka.current, ui(Ka, a = s ? 1 & a | 2 : 1 & a), t = n;
                                break e
                            }
                            break;
                        case 20:
                        case 21:
                            break;
                        default:
                            throw Error(o(156, t.tag))
                    }
                    t = null
                }
                if (a = Os, 1 === Ds || 1 !== a.childExpirationTime) {
                    for (s = 0, n = a.child; null !== n;)(r = n.expirationTime) > s && (s = r), (u = n.childExpirationTime) > s && (s = u), n = n.sibling;
                    a.childExpirationTime = s
                }
                if (null !== t) return t;null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Os.firstEffect), null !== Os.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Os.firstEffect), e.lastEffect = Os.lastEffect), 1 < Os.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Os : e.firstEffect = Os, e.lastEffect = Os))
            }
            else {
                if (null !== (t = ls(Os))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = Os.sibling)) return t;
            Os = e
        } while (null !== Os);
        return 0 === Ls && (Ls = 5), null
    }

    function vl(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function yl(e) {
        var t = zi();
        return Vi(99, bl.bind(null, e, t)), null
    }

    function bl(e, t) {
        do {
            El()
        } while (null !== Ws);
        if (0 != (48 & Ps)) throw Error(o(327));
        var r = e.finishedWork,
            n = e.finishedExpirationTime;
        if (null === r) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, r === e.current) throw Error(o(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var i = vl(r);
        if (e.firstPendingTime = i, n <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1), n <= e.lastPingedTime && (e.lastPingedTime = 0), n <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === As && (Os = As = null, Ds = 0), 1 < r.effectTag ? null !== r.lastEffect ? (r.lastEffect.nextEffect = r, i = r.firstEffect) : i = r : i = r.firstEffect, null !== i) {
            var a = Ps;
            Ps |= 32, xs.current = null, Xr = wr;
            var s = Yr();
            if (qr(s)) {
                if ("selectionStart" in s) var l = {
                    start: s.selectionStart,
                    end: s.selectionEnd
                };
                else e: {
                    var c = (l = (l = s.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                    if (c && 0 !== c.rangeCount) {
                        l = c.anchorNode;
                        var u = c.anchorOffset,
                            d = c.focusNode;
                        c = c.focusOffset;
                        try {
                            l.nodeType, d.nodeType
                        } catch (e) {
                            l = null;
                            break e
                        }
                        var f = 0,
                            h = -1,
                            p = -1,
                            m = 0,
                            g = 0,
                            v = s,
                            y = null;
                        t: for (;;) {
                            for (var b; v !== l || 0 !== u && 3 !== v.nodeType || (h = f + u), v !== d || 0 !== c && 3 !== v.nodeType || (p = f + c), 3 === v.nodeType && (f += v.nodeValue.length), null !== (b = v.firstChild);) y = v, v = b;
                            for (;;) {
                                if (v === s) break t;
                                if (y === l && ++m === u && (h = f), y === d && ++g === c && (p = f), null !== (b = v.nextSibling)) break;
                                y = (v = y).parentNode
                            }
                            v = b
                        }
                        l = -1 === h || -1 === p ? null : {
                            start: h,
                            end: p
                        }
                    } else l = null
                }
                l = l || {
                    start: 0,
                    end: 0
                }
            } else l = null;
            $r = {
                focusedElem: s,
                selectionRange: l
            }, wr = !1, Gs = i;
            do {
                try {
                    Tl()
                } catch (e) {
                    if (null === Gs) throw Error(o(330));
                    kl(Gs, e), Gs = Gs.nextEffect
                }
            } while (null !== Gs);
            Gs = i;
            do {
                try {
                    for (s = e, l = t; null !== Gs;) {
                        var T = Gs.effectTag;
                        if (16 & T && Ve(Gs.stateNode, ""), 128 & T) {
                            var E = Gs.alternate;
                            if (null !== E) {
                                var S = E.ref;
                                null !== S && ("function" == typeof S ? S(null) : S.current = null)
                            }
                        }
                        switch (1038 & T) {
                            case 2:
                                ys(Gs), Gs.effectTag &= -3;
                                break;
                            case 6:
                                ys(Gs), Gs.effectTag &= -3, Ts(Gs.alternate, Gs);
                                break;
                            case 1024:
                                Gs.effectTag &= -1025;
                                break;
                            case 1028:
                                Gs.effectTag &= -1025, Ts(Gs.alternate, Gs);
                                break;
                            case 4:
                                Ts(Gs.alternate, Gs);
                                break;
                            case 8:
                                bs(s, u = Gs, l), gs(u)
                        }
                        Gs = Gs.nextEffect
                    }
                } catch (e) {
                    if (null === Gs) throw Error(o(330));
                    kl(Gs, e), Gs = Gs.nextEffect
                }
            } while (null !== Gs);
            if (S = $r, E = Yr(), T = S.focusedElem, l = S.selectionRange, E !== T && T && T.ownerDocument && function e(t, r) {
                    return !(!t || !r) && (t === r || (!t || 3 !== t.nodeType) && (r && 3 === r.nodeType ? e(t, r.parentNode) : "contains" in t ? t.contains(r) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(r))))
                }(T.ownerDocument.documentElement, T)) {
                null !== l && qr(T) && (E = l.start, void 0 === (S = l.end) && (S = E), "selectionStart" in T ? (T.selectionStart = E, T.selectionEnd = Math.min(S, T.value.length)) : (S = (E = T.ownerDocument || document) && E.defaultView || window).getSelection && (S = S.getSelection(), u = T.textContent.length, s = Math.min(l.start, u), l = void 0 === l.end ? s : Math.min(l.end, u), !S.extend && s > l && (u = l, l = s, s = u), u = Wr(T, s), d = Wr(T, l), u && d && (1 !== S.rangeCount || S.anchorNode !== u.node || S.anchorOffset !== u.offset || S.focusNode !== d.node || S.focusOffset !== d.offset) && ((E = E.createRange()).setStart(u.node, u.offset), S.removeAllRanges(), s > l ? (S.addRange(E), S.extend(d.node, d.offset)) : (E.setEnd(d.node, d.offset), S.addRange(E))))), E = [];
                for (S = T; S = S.parentNode;) 1 === S.nodeType && E.push({
                    element: S,
                    left: S.scrollLeft,
                    top: S.scrollTop
                });
                for ("function" == typeof T.focus && T.focus(), T = 0; T < E.length; T++)(S = E[T]).element.scrollLeft = S.left, S.element.scrollTop = S.top
            }
            $r = null, wr = !!Xr, Xr = null, e.current = r, Gs = i;
            do {
                try {
                    for (T = n; null !== Gs;) {
                        var w = Gs.effectTag;
                        if (36 & w) {
                            var k = Gs.alternate;
                            switch (S = T, (E = Gs).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ps(16, 32, E);
                                    break;
                                case 1:
                                    var _ = E.stateNode;
                                    if (4 & E.effectTag)
                                        if (null === k) _.componentDidMount();
                                        else {
                                            var C = E.elementType === E.type ? k.memoizedProps : Qi(E.type, k.memoizedProps);
                                            _.componentDidUpdate(C, k.memoizedState, _.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var R = E.updateQueue;
                                    null !== R && ya(0, R, _);
                                    break;
                                case 3:
                                    var x = E.updateQueue;
                                    if (null !== x) {
                                        if (s = null, null !== E.child) switch (E.child.tag) {
                                            case 5:
                                                s = E.child.stateNode;
                                                break;
                                            case 1:
                                                s = E.child.stateNode
                                        }
                                        ya(0, x, s)
                                    }
                                    break;
                                case 5:
                                    var P = E.stateNode;
                                    null === k && 4 & E.effectTag && Qr(E.type, E.memoizedProps) && P.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                    if (null === E.memoizedState) {
                                        var A = E.alternate;
                                        if (null !== A) {
                                            var O = A.memoizedState;
                                            if (null !== O) {
                                                var D = O.dehydrated;
                                                null !== D && Ct(D)
                                            }
                                        }
                                    }
                                    break;
                                case 19:
                                case 17:
                                case 20:
                                case 21:
                                    break;
                                default:
                                    throw Error(o(163))
                            }
                        }
                        if (128 & w) {
                            E = void 0;
                            var L = Gs.ref;
                            if (null !== L) {
                                var I = Gs.stateNode;
                                switch (Gs.tag) {
                                    case 5:
                                        E = I;
                                        break;
                                    default:
                                        E = I
                                }
                                "function" == typeof L ? L(E) : L.current = E
                            }
                        }
                        Gs = Gs.nextEffect
                    }
                } catch (e) {
                    if (null === Gs) throw Error(o(330));
                    kl(Gs, e), Gs = Gs.nextEffect
                }
            } while (null !== Gs);
            Gs = null, Ni(), Ps = a
        } else e.current = r;
        if (Hs) Hs = !1, Ws = e, Ys = t;
        else
            for (Gs = i; null !== Gs;) t = Gs.nextEffect, Gs.nextEffect = null, Gs = t;
        if (0 === (t = e.firstPendingTime) && (Vs = null), 1073741823 === t ? e === $s ? Xs++ : (Xs = 0, $s = e) : Xs = 0, "function" == typeof Rl && Rl(r.stateNode, n), nl(e), zs) throw zs = !1, e = Ks, Ks = null, e;
        return 0 != (8 & Ps) ? null : (Yi(), null)
    }

    function Tl() {
        for (; null !== Gs;) {
            var e = Gs.effectTag;
            0 != (256 & e) && hs(Gs.alternate, Gs), 0 == (512 & e) || Hs || (Hs = !0, Hi(97, (function() {
                return El(), null
            }))), Gs = Gs.nextEffect
        }
    }

    function El() {
        if (90 !== Ys) {
            var e = 97 < Ys ? 97 : Ys;
            return Ys = 90, Vi(e, Sl)
        }
    }

    function Sl() {
        if (null === Ws) return !1;
        var e = Ws;
        if (Ws = null, 0 != (48 & Ps)) throw Error(o(331));
        var t = Ps;
        for (Ps |= 32, e = e.current.firstEffect; null !== e;) {
            try {
                var r = e;
                if (0 != (512 & r.effectTag)) switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ps(128, 0, r), ps(0, 64, r)
                }
            } catch (t) {
                if (null === e) throw Error(o(330));
                kl(e, t)
            }
            r = e.nextEffect, e.nextEffect = null, e = r
        }
        return Ps = t, Yi(), !0
    }

    function wl(e, t, r) {
        ha(e, t = ws(e, t = cs(r, t), 1073741823)), null !== (e = tl(e, 1073741823)) && nl(e)
    }

    function kl(e, t) {
        if (3 === e.tag) wl(e, e, t);
        else
            for (var r = e.return; null !== r;) {
                if (3 === r.tag) {
                    wl(r, e, t);
                    break
                }
                if (1 === r.tag) {
                    var n = r.stateNode;
                    if ("function" == typeof r.type.getDerivedStateFromError || "function" == typeof n.componentDidCatch && (null === Vs || !Vs.has(n))) {
                        ha(r, e = ks(r, e = cs(t, e), 1073741823)), null !== (r = tl(r, 1073741823)) && nl(r);
                        break
                    }
                }
                r = r.return
            }
    }

    function _l(e, t, r) {
        var n = e.pingCache;
        null !== n && n.delete(t), As === e && Ds === r ? 4 === Ls || 3 === Ls && 1073741823 === Ms && Gi() - Bs < 500 ? ll(e, Ds) : js = !0 : Ul(e, r) && (0 !== (t = e.lastPingedTime) && t < r || (e.lastPingedTime = r, e.finishedExpirationTime === r && (e.finishedExpirationTime = 0, e.finishedWork = null), nl(e)))
    }

    function Cl(e, t) {
        var r = e.stateNode;
        null !== r && r.delete(t), 0 === (t = 0) && (t = Zs(t = Js(), e, null)), null !== (e = tl(e, t)) && nl(e)
    }
    _s = function(e, t, r) {
        var n = t.expirationTime;
        if (null !== e) {
            var i = t.pendingProps;
            if (e.memoizedProps !== i || hi.current) Go = !0;
            else {
                if (n < r) {
                    switch (Go = !1, t.tag) {
                        case 3:
                            $o(t), jo();
                            break;
                        case 5:
                            if (Ga(t), 4 & t.mode && 1 !== r && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            gi(t.type) && Ei(t);
                            break;
                        case 4:
                            ja(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            na(t, t.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (n = t.child.childExpirationTime) && n >= r ? ts(e, t, r) : (ui(Ka, 1 & Ka.current), null !== (t = as(e, t, r)) ? t.sibling : null);
                            ui(Ka, 1 & Ka.current);
                            break;
                        case 19:
                            if (n = t.childExpirationTime >= r, 0 != (64 & e.effectTag)) {
                                if (n) return is(e, t, r);
                                t.effectTag |= 64
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), ui(Ka, Ka.current), !n) return null
                    }
                    return as(e, t, r)
                }
                Go = !1
            }
        } else Go = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (n = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = mi(t, fi.current), oa(t, r), i = co(null, t, n, e, i, r), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, uo(), gi(n)) {
                        var a = !0;
                        Ei(t)
                    } else a = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                    var s = n.getDerivedStateFromProps;
                    "function" == typeof s && Sa(t, n, s, e), i.updater = wa, t.stateNode = i, i._reactInternalFiber = t, Ra(t, n, e, r), t = Xo(null, t, n, !0, a, r)
                } else t.tag = 0, zo(null, t, i, r), t = t.child;
                return t;
            case 16:
                if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                        if (-1 === e._status) {
                            e._status = 0;
                            var t = e._ctor;
                            t = t(), e._result = t, t.then((function(t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }), (function(t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }))
                        }
                    }(i), 1 !== i._status) throw i._result;
                switch (i = i._result, t.type = i, a = t.tag = function(e) {
                    if ("function" == typeof e) return Ol(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === V) return 11;
                        if (e === Y) return 14
                    }
                    return 2
                }(i), e = Qi(i, e), a) {
                    case 0:
                        t = Yo(null, t, i, e, r);
                        break;
                    case 1:
                        t = qo(null, t, i, e, r);
                        break;
                    case 11:
                        t = Ko(null, t, i, e, r);
                        break;
                    case 14:
                        t = Vo(null, t, i, Qi(i.type, e), n, r);
                        break;
                    default:
                        throw Error(o(306, i, ""))
                }
                return t;
            case 0:
                return n = t.type, i = t.pendingProps, Yo(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 1:
                return n = t.type, i = t.pendingProps, qo(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 3:
                if ($o(t), null === (n = t.updateQueue)) throw Error(o(282));
                if (i = null !== (i = t.memoizedState) ? i.element : null, va(t, n, t.pendingProps, null, r), (n = t.memoizedState.element) === i) jo(), t = as(e, t, r);
                else {
                    if ((i = t.stateNode.hydrate) && (Do = tn(t.stateNode.containerInfo.firstChild), Oo = t, i = Lo = !0), i)
                        for (r = La(t, null, n, r), t.child = r; r;) r.effectTag = -3 & r.effectTag | 1024, r = r.sibling;
                    else zo(e, t, n, r), jo();
                    t = t.child
                }
                return t;
            case 5:
                return Ga(t), null === e && No(t), n = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = i.children, Jr(n, i) ? s = null : null !== a && Jr(n, a) && (t.effectTag |= 16), Wo(e, t), 4 & t.mode && 1 !== r && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (zo(e, t, s, r), t = t.child), t;
            case 6:
                return null === e && No(t), null;
            case 13:
                return ts(e, t, r);
            case 4:
                return ja(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = Da(t, null, n, r) : zo(e, t, n, r), t.child;
            case 11:
                return n = t.type, i = t.pendingProps, Ko(e, t, n, i = t.elementType === n ? i : Qi(n, i), r);
            case 7:
                return zo(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
                return zo(e, t, t.pendingProps.children, r), t.child;
            case 10:
                e: {
                    if (n = t.type._context, i = t.pendingProps, s = t.memoizedProps, na(t, a = i.value), null !== s) {
                        var l = s.value;
                        if (0 === (a = $n(l, a) ? 0 : 0 | ("function" == typeof n._calculateChangedBits ? n._calculateChangedBits(l, a) : 1073741823))) {
                            if (s.children === i.children && !hi.current) {
                                t = as(e, t, r);
                                break e
                            }
                        } else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var c = l.dependencies;
                                if (null !== c) {
                                    s = l.child;
                                    for (var u = c.firstContext; null !== u;) {
                                        if (u.context === n && 0 != (u.observedBits & a)) {
                                            1 === l.tag && ((u = da(r, null)).tag = 2, ha(l, u)), l.expirationTime < r && (l.expirationTime = r), null !== (u = l.alternate) && u.expirationTime < r && (u.expirationTime = r), aa(l.return, r), c.expirationTime < r && (c.expirationTime = r);
                                            break
                                        }
                                        u = u.next
                                    }
                                } else s = 10 === l.tag && l.type === t.type ? null : l.child;
                                if (null !== s) s.return = l;
                                else
                                    for (s = l; null !== s;) {
                                        if (s === t) {
                                            s = null;
                                            break
                                        }
                                        if (null !== (l = s.sibling)) {
                                            l.return = s.return, s = l;
                                            break
                                        }
                                        s = s.return
                                    }
                                l = s
                            }
                    }
                    zo(e, t, i.children, r),
                    t = t.child
                }
                return t;
            case 9:
                return i = t.type, n = (a = t.pendingProps).children, oa(t, r), n = n(i = sa(i, a.unstable_observedBits)), t.effectTag |= 1, zo(e, t, n, r), t.child;
            case 14:
                return a = Qi(i = t.type, t.pendingProps), Vo(e, t, i, a = Qi(i.type, a), n, r);
            case 15:
                return Ho(e, t, t.type, t.pendingProps, n, r);
            case 17:
                return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Qi(n, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, gi(n) ? (e = !0, Ei(t)) : e = !1, oa(t, r), _a(t, n, i), Ra(t, n, i, r), Xo(null, t, n, !0, e, r);
            case 19:
                return is(e, t, r)
        }
        throw Error(o(156, t.tag))
    };
    var Rl = null,
        xl = null;

    function Pl(e, t, r, n) {
        this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Al(e, t, r, n) {
        return new Pl(e, t, r, n)
    }

    function Ol(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Dl(e, t) {
        var r = e.alternate;
        return null === r ? ((r = Al(e.tag, t, e.key, e.mode)).elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.effectTag = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childExpirationTime = e.childExpirationTime, r.expirationTime = e.expirationTime, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
    }

    function Ll(e, t, r, n, i, a) {
        var s = 2;
        if (n = e, "function" == typeof e) Ol(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
            case U:
                return Il(r.children, i, a, t);
            case K:
                s = 8, i |= 7;
                break;
            case j:
                s = 8, i |= 1;
                break;
            case B:
                return (e = Al(12, r, t, 8 | i)).elementType = B, e.type = B, e.expirationTime = a, e;
            case H:
                return (e = Al(13, r, t, i)).type = H, e.elementType = H, e.expirationTime = a, e;
            case W:
                return (e = Al(19, r, t, i)).elementType = W, e.expirationTime = a, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case G:
                        s = 10;
                        break e;
                    case z:
                        s = 9;
                        break e;
                    case V:
                        s = 11;
                        break e;
                    case Y:
                        s = 14;
                        break e;
                    case q:
                        s = 16, n = null;
                        break e
                }
                throw Error(o(130, null == e ? e : typeof e, ""))
        }
        return (t = Al(s, r, t, i)).elementType = e, t.type = n, t.expirationTime = a, t
    }

    function Il(e, t, r, n) {
        return (e = Al(7, e, n, t)).expirationTime = r, e
    }

    function Ml(e, t, r) {
        return (e = Al(6, e, null, t)).expirationTime = r, e
    }

    function Nl(e, t, r) {
        return (t = Al(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = r, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Fl(e, t, r) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Ul(e, t) {
        var r = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== r && r >= t && e <= t
    }

    function jl(e, t) {
        var r = e.firstSuspendedTime,
            n = e.lastSuspendedTime;
        r < t && (e.firstSuspendedTime = t), (n > t || 0 === r) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function Bl(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var r = e.firstSuspendedTime;
        0 !== r && (t >= r ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function Gl(e, t) {
        var r = e.lastExpiredTime;
        (0 === r || r > t) && (e.lastExpiredTime = t)
    }

    function zl(e, t, r, n) {
        var i = t.current,
            a = Js(),
            s = Ta.suspense;
        a = Zs(a, i, s);
        e: if (r) {
            t: {
                if (tt(r = r._reactInternalFiber) !== r || 1 !== r.tag) throw Error(o(170));
                var l = r;do {
                    switch (l.tag) {
                        case 3:
                            l = l.stateNode.context;
                            break t;
                        case 1:
                            if (gi(l.type)) {
                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    l = l.return
                } while (null !== l);
                throw Error(o(171))
            }
            if (1 === r.tag) {
                var c = r.type;
                if (gi(c)) {
                    r = Ti(r, c, l);
                    break e
                }
            }
            r = l
        }
        else r = di;
        return null === t.context ? t.context = r : t.pendingContext = r, (t = da(a, s)).payload = {
            element: e
        }, null !== (n = void 0 === n ? null : n) && (t.callback = n), ha(i, t), el(i, a), a
    }

    function Kl(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Vl(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function Hl(e, t) {
        Vl(e, t), (e = e.alternate) && Vl(e, t)
    }

    function Wl(e, t, r) {
        var n = new Fl(e, t, r = null != r && !0 === r.hydrate),
            i = Al(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        n.current = i, i.stateNode = n, e[sn] = n.current, r && 0 !== t && function(e) {
            var t = Lr(e);
            gt.forEach((function(r) {
                Ir(r, e, t)
            })), vt.forEach((function(r) {
                Ir(r, e, t)
            }))
        }(9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = n
    }

    function Yl(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function ql(e, t, r, n, i) {
        var a = r._reactRootContainer;
        if (a) {
            var o = a._internalRoot;
            if ("function" == typeof i) {
                var s = i;
                i = function() {
                    var e = Kl(o);
                    s.call(e)
                }
            }
            zl(t, o, e, i)
        } else {
            if (a = r._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var r; r = e.lastChild;) e.removeChild(r);
                    return new Wl(e, 0, t ? {
                        hydrate: !0
                    } : void 0)
                }(r, n), o = a._internalRoot, "function" == typeof i) {
                var l = i;
                i = function() {
                    var e = Kl(o);
                    l.call(e)
                }
            }
            sl((function() {
                zl(t, o, e, i)
            }))
        }
        return Kl(o)
    }

    function Xl(e, t, r) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: F,
            key: null == n ? null : "" + n,
            children: e,
            containerInfo: t,
            implementation: r
        }
    }

    function $l(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Yl(t)) throw Error(o(200));
        return Xl(e, t, null, r)
    }
    Wl.prototype.render = function(e, t) {
        zl(e, this._internalRoot, null, void 0 === t ? null : t)
    }, Wl.prototype.unmount = function(e) {
        var t = this._internalRoot,
            r = void 0 === e ? null : e,
            n = t.containerInfo;
        zl(null, t, null, (function() {
            n[sn] = null, null !== r && r()
        }))
    }, at = function(e) {
        if (13 === e.tag) {
            var t = $i(Js(), 150, 100);
            el(e, t), Hl(e, t)
        }
    }, ot = function(e) {
        if (13 === e.tag) {
            Js();
            var t = Xi++;
            el(e, t), Hl(e, t)
        }
    }, st = function(e) {
        if (13 === e.tag) {
            var t = Js();
            el(e, t = Zs(t, e, null)), Hl(e, t)
        }
    }, ee = function(e, t, r) {
        switch (t) {
            case "input":
                if (Pe(e, r), t = r.name, "radio" === r.type && null != t) {
                    for (r = e; r.parentNode;) r = r.parentNode;
                    for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                        var n = r[t];
                        if (n !== e && n.form === e.form) {
                            var i = dn(n);
                            if (!i) throw Error(o(90));
                            _e(n), Pe(n, i)
                        }
                    }
                }
                break;
            case "textarea":
                Ne(e, r);
                break;
            case "select":
                null != (t = r.value) && Le(e, !!r.multiple, t, !1)
        }
    }, oe = ol, se = function(e, t, r, n) {
        var i = Ps;
        Ps |= 4;
        try {
            return Vi(98, e.bind(null, t, r, n))
        } finally {
            0 === (Ps = i) && Yi()
        }
    }, le = function() {
        0 == (49 & Ps) && (function() {
            if (null !== qs) {
                var e = qs;
                qs = null, e.forEach((function(e, t) {
                    Gl(t, e), nl(t)
                })), Yi()
            }
        }(), El())
    }, ce = function(e, t) {
        var r = Ps;
        Ps |= 2;
        try {
            return e(t)
        } finally {
            0 === (Ps = r) && Yi()
        }
    };
    var Ql, Jl, Zl = {
        createPortal: $l,
        findDOMNode: function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(o(188));
                throw Error(o(268, Object.keys(e)))
            }
            return e = null === (e = it(t)) ? null : e.stateNode
        },
        hydrate: function(e, t, r) {
            if (!Yl(t)) throw Error(o(200));
            return ql(null, e, t, !0, r)
        },
        render: function(e, t, r) {
            if (!Yl(t)) throw Error(o(200));
            return ql(null, e, t, !1, r)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, r, n) {
            if (!Yl(r)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
            return ql(e, t, r, !1, n)
        },
        unmountComponentAtNode: function(e) {
            if (!Yl(e)) throw Error(o(40));
            return !!e._reactRootContainer && (sl((function() {
                ql(null, null, e, !1, (function() {
                    e._reactRootContainer = null, e[sn] = null
                }))
            })), !0)
        },
        unstable_createPortal: function() {
            return $l.apply(void 0, arguments)
        },
        unstable_batchedUpdates: ol,
        flushSync: function(e, t) {
            if (0 != (48 & Ps)) throw Error(o(187));
            var r = Ps;
            Ps |= 1;
            try {
                return Vi(99, e.bind(null, t))
            } finally {
                Ps = r, Yi()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [cn, un, dn, O.injectEventPluginsByName, f, Lt, function(e) {
                R(e, Dt)
            }, ie, ae, Pr, A, El, {
                current: !1
            }]
        }
    };
    Jl = (Ql = {
            findFiberByHostInstance: ln,
            bundleType: 0,
            version: "16.12.0",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance,
        function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var r = t.inject(e);
                Rl = function(e) {
                    try {
                        t.onCommitFiberRoot(r, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) {}
                }, xl = function(e) {
                    try {
                        t.onCommitFiberUnmount(r, e)
                    } catch (e) {}
                }
            } catch (e) {}
        }(i({}, Ql, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: L.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = it(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return Jl ? Jl(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    var ec = {
            default: Zl
        },
        tc = ec && Zl || ec;
    e.exports = tc.default || tc
}, function(e, t, r) {
    "use strict";
    e.exports = r(24)
}, function(e, t, r) {
    "use strict";
    /** @license React v0.18.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var n, i, a, o, s;
    if (Object.defineProperty(t, "__esModule", {
            value: !0
        }), "undefined" == typeof window || "function" != typeof MessageChannel) {
        var l = null,
            c = null,
            u = function() {
                if (null !== l) try {
                    var e = t.unstable_now();
                    l(!0, e), l = null
                } catch (e) {
                    throw setTimeout(u, 0), e
                }
            },
            d = Date.now();
        t.unstable_now = function() {
            return Date.now() - d
        }, n = function(e) {
            null !== l ? setTimeout(n, 0, e) : (l = e, setTimeout(u, 0))
        }, i = function(e, t) {
            c = setTimeout(e, t)
        }, a = function() {
            clearTimeout(c)
        }, o = function() {
            return !1
        }, s = t.unstable_forceFrameRate = function() {}
    } else {
        var f = window.performance,
            h = window.Date,
            p = window.setTimeout,
            m = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof f && "function" == typeof f.now) t.unstable_now = function() {
            return f.now()
        };
        else {
            var v = h.now();
            t.unstable_now = function() {
                return h.now() - v
            }
        }
        var y = !1,
            b = null,
            T = -1,
            E = 5,
            S = 0;
        o = function() {
            return t.unstable_now() >= S
        }, s = function() {}, t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : E = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var w = new MessageChannel,
            k = w.port2;
        w.port1.onmessage = function() {
            if (null !== b) {
                var e = t.unstable_now();
                S = e + E;
                try {
                    b(!0, e) ? k.postMessage(null) : (y = !1, b = null)
                } catch (e) {
                    throw k.postMessage(null), e
                }
            } else y = !1
        }, n = function(e) {
            b = e, y || (y = !0, k.postMessage(null))
        }, i = function(e, r) {
            T = p((function() {
                e(t.unstable_now())
            }), r)
        }, a = function() {
            m(T), T = -1
        }
    }

    function _(e, t) {
        var r = e.length;
        e.push(t);
        e: for (;;) {
            var n = Math.floor((r - 1) / 2),
                i = e[n];
            if (!(void 0 !== i && 0 < x(i, t))) break e;
            e[n] = t, e[r] = i, r = n
        }
    }

    function C(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function R(e) {
        var t = e[0];
        if (void 0 !== t) {
            var r = e.pop();
            if (r !== t) {
                e[0] = r;
                e: for (var n = 0, i = e.length; n < i;) {
                    var a = 2 * (n + 1) - 1,
                        o = e[a],
                        s = a + 1,
                        l = e[s];
                    if (void 0 !== o && 0 > x(o, r)) void 0 !== l && 0 > x(l, o) ? (e[n] = l, e[s] = r, n = s) : (e[n] = o, e[a] = r, n = a);
                    else {
                        if (!(void 0 !== l && 0 > x(l, r))) break e;
                        e[n] = l, e[s] = r, n = s
                    }
                }
            }
            return t
        }
        return null
    }

    function x(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id
    }
    var P = [],
        A = [],
        O = 1,
        D = null,
        L = 3,
        I = !1,
        M = !1,
        N = !1;

    function F(e) {
        for (var t = C(A); null !== t;) {
            if (null === t.callback) R(A);
            else {
                if (!(t.startTime <= e)) break;
                R(A), t.sortIndex = t.expirationTime, _(P, t)
            }
            t = C(A)
        }
    }

    function U(e) {
        if (N = !1, F(e), !M)
            if (null !== C(P)) M = !0, n(j);
            else {
                var t = C(A);
                null !== t && i(U, t.startTime - e)
            }
    }

    function j(e, r) {
        M = !1, N && (N = !1, a()), I = !0;
        var n = L;
        try {
            for (F(r), D = C(P); null !== D && (!(D.expirationTime > r) || e && !o());) {
                var s = D.callback;
                if (null !== s) {
                    D.callback = null, L = D.priorityLevel;
                    var l = s(D.expirationTime <= r);
                    r = t.unstable_now(), "function" == typeof l ? D.callback = l : D === C(P) && R(P), F(r)
                } else R(P);
                D = C(P)
            }
            if (null !== D) var c = !0;
            else {
                var u = C(A);
                null !== u && i(U, u.startTime - r), c = !1
            }
            return c
        } finally {
            D = null, L = n, I = !1
        }
    }

    function B(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }
    var G = s;
    t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var r = L;
        L = e;
        try {
            return t()
        } finally {
            L = r
        }
    }, t.unstable_next = function(e) {
        switch (L) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = L
        }
        var r = L;
        L = t;
        try {
            return e()
        } finally {
            L = r
        }
    }, t.unstable_scheduleCallback = function(e, r, o) {
        var s = t.unstable_now();
        if ("object" == typeof o && null !== o) {
            var l = o.delay;
            l = "number" == typeof l && 0 < l ? s + l : s, o = "number" == typeof o.timeout ? o.timeout : B(e)
        } else o = B(e), l = s;
        return e = {
            id: O++,
            callback: r,
            priorityLevel: e,
            startTime: l,
            expirationTime: o = l + o,
            sortIndex: -1
        }, l > s ? (e.sortIndex = l, _(A, e), null === C(P) && e === C(A) && (N ? a() : N = !0, i(U, l - s))) : (e.sortIndex = o, _(P, e), M || I || (M = !0, n(j))), e
    }, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_wrapCallback = function(e) {
        var t = L;
        return function() {
            var r = L;
            L = t;
            try {
                return e.apply(this, arguments)
            } finally {
                L = r
            }
        }
    }, t.unstable_getCurrentPriorityLevel = function() {
        return L
    }, t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        F(e);
        var r = C(P);
        return r !== D && null !== D && null !== r && null !== r.callback && r.startTime <= e && r.expirationTime < D.expirationTime || o()
    }, t.unstable_requestPaint = G, t.unstable_continueExecution = function() {
        M || I || (M = !0, n(j))
    }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
        return C(P)
    }, t.unstable_Profiling = null
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        var t = (0, n.useContext)(o.StreamingPlayerContext).state,
            r = (0, n.useRef)(null),
            u = (0, n.useRef)(new l.default),
            d = e.playerBridge;
        (0, n.useEffect)((function() {
            var e = function(e) {
                r.current.muted = e
            };
            return d.on("muted", e),
                function() {
                    d.off("muted", e)
                }
        }), [d]), (0, n.useEffect)((function() {
            var e = t.streamName;
            if (e) {
                var n, i = function(e, t) {
                        window.console.log("(limelight player) Hls.Event.Error:", e, t)
                    },
                    a = function(e) {
                        window.console.log("(limelight player) error event:", e)
                    },
                    o = r.current;
                return l.default.isSupported() ? ((n = u.current) || (n = new l.default, u.current = n), n.loadSource(e), n.attachMedia(o), n.on(l.default.Events.MANIFEST_PARSED, (function() {
                        o.play()
                    })), n.on(l.default.Events.ERROR, i)) : o.canPlayType("application/vnd.apple.mpegurl") && (o.src = e, o.addEventListener("loadedmetadata", (function() {
                        o.play()
                    })), o.addEventListener("error", a)),
                    function() {
                        n && n.off(l.default.Events.ERROR, i), o.removeEventListener("error", a)
                    }
            }
        }), [t.streamName]), (0, n.useEffect)((function() {
            r.current.controls = t.controls
        }), [t.controls]), (0, n.useEffect)((function() {
            t.stopStreamCount > 0 && (u.current && (u.current.destroy(), u.current = null), r.current.src.length > 0 && (r.current.src = null))
        }), [t.stopStreamCount]);
        var f = (p = (0, n.useState)((0, a.default)()), m = 2, function(e) {
                if (Array.isArray(e)) return e
            }(p) || function(e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
            }(p, m) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()),
            h = f[0];
        f[1];
        var p, m;
        return (0, c.jsx)(s.default, null, (0, c.jsx)(i.default, {
            "data-player-type": "limelight",
            ref: r,
            playsInline: !0,
            autoPlay: !0,
            key: h
        }))
    };
    u(r(10));
    var n = r(0),
        i = u(r(11)),
        a = u(r(12)),
        o = r(7),
        s = u(r(14)),
        l = u(r(27)),
        c = r(3);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = t.default
}, function(e, t) {
    var r, n, i = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            r = a
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            n = o
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function f() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && h())
    }

    function h() {
        if (!u) {
            var e = s(f);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++d < t;) l && l[d].run();
                d = -1, t = c.length
            }
            l = null, u = !1,
                function(e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new p(e, t)), 1 !== c.length || u || s(h)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, r) {
    var n;
    "undefined" != typeof window && (n = function() {
        return function(e) {
            var t = {};

            function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }
            return r.m = e, r.c = t, r.d = function(e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, r.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) r.d(n, i, function(t) {
                        return e[t]
                    }.bind(null, i));
                return n
            }, r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "/dist/", r(r.s = "./src/hls.ts")
        }({
            "./node_modules/eventemitter3/index.js":
                /*!*********************************************!*\
                  !*** ./node_modules/eventemitter3/index.js ***!
                  \*********************************************/
                /*! no static exports found */
                /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                function(e, t, r) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        i = "~";

                    function a() {}

                    function o(e, t, r) {
                        this.fn = e, this.context = t, this.once = r || !1
                    }

                    function s(e, t, r, n, a) {
                        if ("function" != typeof r) throw new TypeError("The listener must be a function");
                        var s = new o(r, n || e, a),
                            l = i ? i + t : t;
                        return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], s] : e._events[l].push(s) : (e._events[l] = s, e._eventsCount++), e
                    }

                    function l(e, t) {
                        0 == --e._eventsCount ? e._events = new a : delete e._events[t]
                    }

                    function c() {
                        this._events = new a, this._eventsCount = 0
                    }
                    Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (i = !1)), c.prototype.eventNames = function() {
                        var e, t, r = [];
                        if (0 === this._eventsCount) return r;
                        for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
                        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
                    }, c.prototype.listeners = function(e) {
                        var t = i ? i + e : e,
                            r = this._events[t];
                        if (!r) return [];
                        if (r.fn) return [r.fn];
                        for (var n = 0, a = r.length, o = new Array(a); n < a; n++) o[n] = r[n].fn;
                        return o
                    }, c.prototype.listenerCount = function(e) {
                        var t = i ? i + e : e,
                            r = this._events[t];
                        return r ? r.fn ? 1 : r.length : 0
                    }, c.prototype.emit = function(e, t, r, n, a, o) {
                        var s = i ? i + e : e;
                        if (!this._events[s]) return !1;
                        var l, c, u = this._events[s],
                            d = arguments.length;
                        if (u.fn) {
                            switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                                case 1:
                                    return u.fn.call(u.context), !0;
                                case 2:
                                    return u.fn.call(u.context, t), !0;
                                case 3:
                                    return u.fn.call(u.context, t, r), !0;
                                case 4:
                                    return u.fn.call(u.context, t, r, n), !0;
                                case 5:
                                    return u.fn.call(u.context, t, r, n, a), !0;
                                case 6:
                                    return u.fn.call(u.context, t, r, n, a, o), !0
                            }
                            for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                            u.fn.apply(u.context, l)
                        } else {
                            var f, h = u.length;
                            for (c = 0; c < h; c++) switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d) {
                                case 1:
                                    u[c].fn.call(u[c].context);
                                    break;
                                case 2:
                                    u[c].fn.call(u[c].context, t);
                                    break;
                                case 3:
                                    u[c].fn.call(u[c].context, t, r);
                                    break;
                                case 4:
                                    u[c].fn.call(u[c].context, t, r, n);
                                    break;
                                default:
                                    if (!l)
                                        for (f = 1, l = new Array(d - 1); f < d; f++) l[f - 1] = arguments[f];
                                    u[c].fn.apply(u[c].context, l)
                            }
                        }
                        return !0
                    }, c.prototype.on = function(e, t, r) {
                        return s(this, e, t, r, !1)
                    }, c.prototype.once = function(e, t, r) {
                        return s(this, e, t, r, !0)
                    }, c.prototype.removeListener = function(e, t, r, n) {
                        var a = i ? i + e : e;
                        if (!this._events[a]) return this;
                        if (!t) return l(this, a), this;
                        var o = this._events[a];
                        if (o.fn) o.fn !== t || n && !o.once || r && o.context !== r || l(this, a);
                        else {
                            for (var s = 0, c = [], u = o.length; s < u; s++)(o[s].fn !== t || n && !o[s].once || r && o[s].context !== r) && c.push(o[s]);
                            c.length ? this._events[a] = 1 === c.length ? c[0] : c : l(this, a)
                        }
                        return this
                    }, c.prototype.removeAllListeners = function(e) {
                        var t;
                        return e ? (t = i ? i + e : e, this._events[t] && l(this, t)) : (this._events = new a, this._eventsCount = 0), this
                    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, e.exports = c
                },
            "./node_modules/url-toolkit/src/url-toolkit.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
                  \*****************************************************/
                /*! no static exports found */
                /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                function(e, t, r) {
                    var n, i, a, o, s;
                    n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, i = /^([^\/?#]*)(.*)$/, a = /(?:\/|^)\.(?=\/)/g, o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, s = {
                        buildAbsoluteURL: function(e, t, r) {
                            if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                                if (!r.alwaysNormalize) return e;
                                var n = s.parseURL(e);
                                if (!n) throw new Error("Error trying to parse base URL.");
                                return n.path = s.normalizePath(n.path), s.buildURLFromParts(n)
                            }
                            var a = s.parseURL(t);
                            if (!a) throw new Error("Error trying to parse relative URL.");
                            if (a.scheme) return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : t;
                            var o = s.parseURL(e);
                            if (!o) throw new Error("Error trying to parse base URL.");
                            if (!o.netLoc && o.path && "/" !== o.path[0]) {
                                var l = i.exec(o.path);
                                o.netLoc = l[1], o.path = l[2]
                            }
                            o.netLoc && !o.path && (o.path = "/");
                            var c = {
                                scheme: o.scheme,
                                netLoc: a.netLoc,
                                path: null,
                                params: a.params,
                                query: a.query,
                                fragment: a.fragment
                            };
                            if (!a.netLoc && (c.netLoc = o.netLoc, "/" !== a.path[0]))
                                if (a.path) {
                                    var u = o.path,
                                        d = u.substring(0, u.lastIndexOf("/") + 1) + a.path;
                                    c.path = s.normalizePath(d)
                                } else c.path = o.path, a.params || (c.params = o.params, a.query || (c.query = o.query));
                            return null === c.path && (c.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(c)
                        },
                        parseURL: function(e) {
                            var t = n.exec(e);
                            return t ? {
                                scheme: t[1] || "",
                                netLoc: t[2] || "",
                                path: t[3] || "",
                                params: t[4] || "",
                                query: t[5] || "",
                                fragment: t[6] || ""
                            } : null
                        },
                        normalizePath: function(e) {
                            for (e = e.split("").reverse().join("").replace(a, ""); e.length !== (e = e.replace(o, "")).length;);
                            return e.split("").reverse().join("")
                        },
                        buildURLFromParts: function(e) {
                            return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                        }
                    }, e.exports = s
                },
            "./node_modules/webworkify-webpack/index.js":
                /*!**************************************************!*\
                  !*** ./node_modules/webworkify-webpack/index.js ***!
                  \**************************************************/
                /*! no static exports found */
                /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                function(e, t, r) {
                    function n(e) {
                        var t = {};

                        function r(n) {
                            if (t[n]) return t[n].exports;
                            var i = t[n] = {
                                i: n,
                                l: !1,
                                exports: {}
                            };
                            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                        }
                        r.m = e, r.c = t, r.i = function(e) {
                            return e
                        }, r.d = function(e, t, n) {
                            r.o(e, t) || Object.defineProperty(e, t, {
                                configurable: !1,
                                enumerable: !0,
                                get: n
                            })
                        }, r.r = function(e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return r.d(t, "a", t), t
                        }, r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, r.p = "/", r.oe = function(e) {
                            throw console.error(e), e
                        };
                        var n = r(r.s = ENTRY_MODULE);
                        return n.default || n
                    }
                    var i = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";

                    function a(e) {
                        return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                    }

                    function o(e, t, n) {
                        var o = {};
                        o[n] = [];
                        var s = t.toString(),
                            l = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                        if (!l) return o;
                        for (var c, u = l[1], d = new RegExp("(\\\\n|\\W)" + a(u) + i, "g"); c = d.exec(s);) "dll-reference" !== c[3] && o[n].push(c[3]);
                        for (d = new RegExp("\\(" + a(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)' + i, "g"); c = d.exec(s);) e[c[2]] || (o[n].push(c[1]), e[c[2]] = r(c[1]).m), o[c[2]] = o[c[2]] || [], o[c[2]].push(c[4]);
                        for (var f, h = Object.keys(o), p = 0; p < h.length; p++)
                            for (var m = 0; m < o[h[p]].length; m++) f = o[h[p]][m], isNaN(1 * f) || (o[h[p]][m] = 1 * o[h[p]][m]);
                        return o
                    }

                    function s(e) {
                        return Object.keys(e).reduce((function(t, r) {
                            return t || e[r].length > 0
                        }), !1)
                    }
                    e.exports = function(e, t) {
                        t = t || {};
                        var i = {
                                main: r.m
                            },
                            a = t.all ? {
                                main: Object.keys(i.main)
                            } : function(e, t) {
                                for (var r = {
                                        main: [t]
                                    }, n = {
                                        main: []
                                    }, i = {
                                        main: {}
                                    }; s(r);)
                                    for (var a = Object.keys(r), l = 0; l < a.length; l++) {
                                        var c = a[l],
                                            u = r[c].pop();
                                        if (i[c] = i[c] || {}, !i[c][u] && e[c][u]) {
                                            i[c][u] = !0, n[c] = n[c] || [], n[c].push(u);
                                            for (var d = o(e, e[c][u], c), f = Object.keys(d), h = 0; h < f.length; h++) r[f[h]] = r[f[h]] || [], r[f[h]] = r[f[h]].concat(d[f[h]])
                                        }
                                    }
                                return n
                            }(i, e),
                            l = "";
                        Object.keys(a).filter((function(e) {
                            return "main" !== e
                        })).forEach((function(e) {
                            for (var t = 0; a[e][t];) t++;
                            a[e].push(t), i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + e + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a[e].map((function(t) {
                                return JSON.stringify(t) + ": " + i[e][t].toString()
                            })).join(",") + "});\n"
                        })), l = l + "new ((" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a.main.map((function(e) {
                            return JSON.stringify(e) + ": " + i.main[e].toString()
                        })).join(",") + "}))(self);";
                        var c = new window.Blob([l], {
                            type: "text/javascript"
                        });
                        if (t.bare) return c;
                        var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(c),
                            d = new window.Worker(u);
                        return d.objectURL = u, d
                    }
                },
            "./src/crypt/decrypter.js":
                /*!********************************************!*\
                  !*** ./src/crypt/decrypter.js + 3 modules ***!
                  \********************************************/
                /*! exports provided: default */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */
                function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n = function() {
                            function e(e, t) {
                                this.subtle = e, this.aesIV = t
                            }
                            return e.prototype.decrypt = function(e, t) {
                                return this.subtle.decrypt({
                                    name: "AES-CBC",
                                    iv: this.aesIV
                                }, t, e)
                            }, e
                        }(),
                        i = function() {
                            function e(e, t) {
                                this.subtle = e, this.key = t
                            }
                            return e.prototype.expandKey = function() {
                                return this.subtle.importKey("raw", this.key, {
                                    name: "AES-CBC"
                                }, !1, ["encrypt", "decrypt"])
                            }, e
                        }(),
                        a = function() {
                            function e() {
                                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                            }
                            var t = e.prototype;
                            return t.uint8ArrayToUint32Array_ = function(e) {
                                for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = t.getUint32(4 * n);
                                return r
                            }, t.initTable = function() {
                                var e = this.sBox,
                                    t = this.invSBox,
                                    r = this.subMix,
                                    n = r[0],
                                    i = r[1],
                                    a = r[2],
                                    o = r[3],
                                    s = this.invSubMix,
                                    l = s[0],
                                    c = s[1],
                                    u = s[2],
                                    d = s[3],
                                    f = new Uint32Array(256),
                                    h = 0,
                                    p = 0,
                                    m = 0;
                                for (m = 0; m < 256; m++) f[m] = m < 128 ? m << 1 : m << 1 ^ 283;
                                for (m = 0; m < 256; m++) {
                                    var g = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                                    g = g >>> 8 ^ 255 & g ^ 99, e[h] = g, t[g] = h;
                                    var v = f[h],
                                        y = f[v],
                                        b = f[y],
                                        T = 257 * f[g] ^ 16843008 * g;
                                    n[h] = T << 24 | T >>> 8, i[h] = T << 16 | T >>> 16, a[h] = T << 8 | T >>> 24, o[h] = T, T = 16843009 * b ^ 65537 * y ^ 257 * v ^ 16843008 * h, l[g] = T << 24 | T >>> 8, c[g] = T << 16 | T >>> 16, u[g] = T << 8 | T >>> 24, d[g] = T, h ? (h = v ^ f[f[f[b ^ v]]], p ^= f[f[p]]) : h = p = 1
                                }
                            }, t.expandKey = function(e) {
                                for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n], n++;
                                if (!r) {
                                    this.key = t;
                                    var i = this.keySize = t.length;
                                    if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
                                    var a, o, s, l, c = this.ksRows = 4 * (i + 6 + 1),
                                        u = this.keySchedule = new Uint32Array(c),
                                        d = this.invKeySchedule = new Uint32Array(c),
                                        f = this.sBox,
                                        h = this.rcon,
                                        p = this.invSubMix,
                                        m = p[0],
                                        g = p[1],
                                        v = p[2],
                                        y = p[3];
                                    for (a = 0; a < c; a++) a < i ? s = u[a] = t[a] : (l = s, a % i == 0 ? (l = f[(l = l << 8 | l >>> 24) >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[a / i | 0] << 24) : i > 6 && a % i == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), u[a] = s = (u[a - i] ^ l) >>> 0);
                                    for (o = 0; o < c; o++) a = c - o, l = 3 & o ? u[a] : u[a - 4], d[o] = o < 4 || a <= 4 ? l : m[f[l >>> 24]] ^ g[f[l >>> 16 & 255]] ^ v[f[l >>> 8 & 255]] ^ y[f[255 & l]], d[o] = d[o] >>> 0
                                }
                            }, t.networkToHostOrderSwap = function(e) {
                                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                            }, t.decrypt = function(e, t, r, n) {
                                for (var i, a, o, s, l, c, u, d, f, h, p, m, g, v, y, b, T, E = this.keySize + 6, S = this.invKeySchedule, w = this.invSBox, k = this.invSubMix, _ = k[0], C = k[1], R = k[2], x = k[3], P = this.uint8ArrayToUint32Array_(r), A = P[0], O = P[1], D = P[2], L = P[3], I = new Int32Array(e), M = new Int32Array(I.length), N = this.networkToHostOrderSwap; t < I.length;) {
                                    for (f = N(I[t]), h = N(I[t + 1]), p = N(I[t + 2]), m = N(I[t + 3]), l = f ^ S[0], c = m ^ S[1], u = p ^ S[2], d = h ^ S[3], g = 4, v = 1; v < E; v++) i = _[l >>> 24] ^ C[c >> 16 & 255] ^ R[u >> 8 & 255] ^ x[255 & d] ^ S[g], a = _[c >>> 24] ^ C[u >> 16 & 255] ^ R[d >> 8 & 255] ^ x[255 & l] ^ S[g + 1], o = _[u >>> 24] ^ C[d >> 16 & 255] ^ R[l >> 8 & 255] ^ x[255 & c] ^ S[g + 2], s = _[d >>> 24] ^ C[l >> 16 & 255] ^ R[c >> 8 & 255] ^ x[255 & u] ^ S[g + 3], l = i, c = a, u = o, d = s, g += 4;
                                    i = w[l >>> 24] << 24 ^ w[c >> 16 & 255] << 16 ^ w[u >> 8 & 255] << 8 ^ w[255 & d] ^ S[g], a = w[c >>> 24] << 24 ^ w[u >> 16 & 255] << 16 ^ w[d >> 8 & 255] << 8 ^ w[255 & l] ^ S[g + 1], o = w[u >>> 24] << 24 ^ w[d >> 16 & 255] << 16 ^ w[l >> 8 & 255] << 8 ^ w[255 & c] ^ S[g + 2], s = w[d >>> 24] << 24 ^ w[l >> 16 & 255] << 16 ^ w[c >> 8 & 255] << 8 ^ w[255 & u] ^ S[g + 3], g += 3, M[t] = N(i ^ A), M[t + 1] = N(s ^ O), M[t + 2] = N(o ^ D), M[t + 3] = N(a ^ L), A = f, O = h, D = p, L = m, t += 4
                                }
                                return n ? (y = M.buffer, b = y.byteLength, (T = b && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - T) : y) : M.buffer
                            }, t.destroy = function() {
                                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                            }, e
                        }(),
                        o = r("./src/errors.ts"),
                        s = r("./src/utils/logger.js"),
                        l = r("./src/events.js"),
                        c = r("./src/utils/get-self-scope.js"),
                        u = Object(c.getSelfScope)(),
                        d = function() {
                            function e(e, t, r) {
                                var n = (void 0 === r ? {} : r).removePKCS7Padding,
                                    i = void 0 === n || n;
                                if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = i, i) try {
                                    var a = u.crypto;
                                    a && (this.subtle = a.subtle || a.webkitSubtle)
                                } catch (e) {}
                                this.disableWebCrypto = !this.subtle
                            }
                            var t = e.prototype;
                            return t.isSync = function() {
                                return this.disableWebCrypto && this.config.enableSoftwareAES
                            }, t.decrypt = function(e, t, r, o) {
                                var l = this;
                                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                                    this.logEnabled && (s.logger.log("JS AES decrypt"), this.logEnabled = !1);
                                    var c = this.decryptor;
                                    c || (this.decryptor = c = new a), c.expandKey(t), o(c.decrypt(e, 0, r, this.removePKCS7Padding))
                                } else {
                                    this.logEnabled && (s.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                                    var u = this.subtle;
                                    this.key !== t && (this.key = t, this.fastAesKey = new i(u, t)), this.fastAesKey.expandKey().then((function(i) {
                                        new n(u, r).decrypt(e, i).catch((function(n) {
                                            l.onWebCryptoError(n, e, t, r, o)
                                        })).then((function(e) {
                                            o(e)
                                        }))
                                    })).catch((function(n) {
                                        l.onWebCryptoError(n, e, t, r, o)
                                    }))
                                }
                            }, t.onWebCryptoError = function(e, t, r, n, i) {
                                this.config.enableSoftwareAES ? (s.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, n, i)) : (s.logger.error("decrypting error : " + e.message), this.observer.trigger(l.default.ERROR, {
                                    type: o.ErrorTypes.MEDIA_ERROR,
                                    details: o.ErrorDetails.FRAG_DECRYPT_ERROR,
                                    fatal: !0,
                                    reason: e.message
                                }))
                            }, t.destroy = function() {
                                var e = this.decryptor;
                                e && (e.destroy(), this.decryptor = void 0)
                            }, e
                        }();
                    t.default = d
                },
            "./src/demux/demuxer-inline.js":
                /*!**************************************************!*\
                  !*** ./src/demux/demuxer-inline.js + 12 modules ***!
                  \**************************************************/
                /*! exports provided: default */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number-isFinite.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */
                function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n = r("./src/events.js"),
                        i = r("./src/errors.ts"),
                        a = r("./src/crypt/decrypter.js"),
                        o = r("./src/polyfills/number-isFinite.js"),
                        s = r("./src/utils/logger.js"),
                        l = r("./src/utils/get-self-scope.js");

                    function c(e, t) {
                        return 255 === e[t] && 240 == (246 & e[t + 1])
                    }

                    function u(e, t) {
                        return 1 & e[t + 1] ? 7 : 9
                    }

                    function d(e, t) {
                        return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
                    }

                    function f(e, t) {
                        return !!(t + 1 < e.length && c(e, t))
                    }

                    function h(e, t) {
                        if (f(e, t)) {
                            var r = u(e, t);
                            t + 5 < e.length && (r = d(e, t));
                            var n = t + r;
                            if (n === e.length || n + 1 < e.length && c(e, n)) return !0
                        }
                        return !1
                    }

                    function p(e, t, r, a, o) {
                        if (!e.samplerate) {
                            var l = function(e, t, r, a) {
                                var o, l, c, u, d, f = navigator.userAgent.toLowerCase(),
                                    h = a,
                                    p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                                if (o = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > p.length - 1)) return u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, s.logger.log("manifest codec:" + a + ",ADTS data:type:" + o + ",sampleingIndex:" + l + "[" + p[l] + "Hz],channelConfig:" + u), /firefox/i.test(f) ? l >= 6 ? (o = 5, d = new Array(4), c = l - 3) : (o = 2, d = new Array(2), c = l) : -1 !== f.indexOf("android") ? (o = 2, d = new Array(2), c = l) : (o = 5, d = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && l >= 6 ? c = l - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (l >= 6 && 1 === u || /vivaldi/i.test(f)) || !a && 1 === u) && (o = 2, d = new Array(2)), c = l)), d[0] = o << 3, d[0] |= (14 & l) >> 1, d[1] |= (1 & l) << 7, d[1] |= u << 3, 5 === o && (d[1] |= (14 & c) >> 1, d[2] = (1 & c) << 7, d[2] |= 8, d[3] = 0), {
                                    config: d,
                                    samplerate: p[l],
                                    channelCount: u,
                                    codec: "mp4a.40." + o,
                                    manifestCodec: h
                                };
                                e.trigger(n.default.ERROR, {
                                    type: i.ErrorTypes.MEDIA_ERROR,
                                    details: i.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "invalid ADTS sampling index:" + l
                                })
                            }(t, r, a, o);
                            e.config = l.config, e.samplerate = l.samplerate, e.channelCount = l.channelCount, e.codec = l.codec, e.manifestCodec = l.manifestCodec, s.logger.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
                        }
                    }

                    function m(e) {
                        return 9216e4 / e
                    }

                    function g(e, t, r, n, i) {
                        var a = function(e, t, r, n, i) {
                            var a, o, s = e.length;
                            if (a = u(e, t), o = d(e, t), (o -= a) > 0 && t + a + o <= s) return {
                                headerLength: a,
                                frameLength: o,
                                stamp: r + n * i
                            }
                        }(t, r, n, i, m(e.samplerate));
                        if (a) {
                            var o = a.stamp,
                                s = a.headerLength,
                                l = a.frameLength,
                                c = {
                                    unit: t.subarray(r + s, r + s + l),
                                    pts: o,
                                    dts: o
                                };
                            return e.samples.push(c), {
                                sample: c,
                                length: l + s
                            }
                        }
                    }
                    var v = r("./src/demux/id3.js"),
                        y = function() {
                            function e(e, t, r) {
                                this.observer = e, this.config = r, this.remuxer = t
                            }
                            var t = e.prototype;
                            return t.resetInitSegment = function(e, t, r, n) {
                                this._audioTrack = {
                                    container: "audio/adts",
                                    type: "audio",
                                    id: 0,
                                    sequenceNumber: 0,
                                    isAAC: !0,
                                    samples: [],
                                    len: 0,
                                    manifestCodec: t,
                                    duration: n,
                                    inputTimeScale: 9e4
                                }
                            }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                                if (!e) return !1;
                                for (var t = (v.default.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
                                    if (h(e, t)) return s.logger.log("ADTS sync word found !"), !0;
                                return !1
                            }, t.append = function(e, t, r, n) {
                                for (var i = this._audioTrack, a = v.default.getID3Data(e, 0) || [], l = v.default.getTimeStamp(a), c = Object(o.isFiniteNumber)(l) ? 90 * l : 9e4 * t, u = 0, d = c, h = e.length, m = a.length, y = [{
                                        pts: d,
                                        dts: d,
                                        data: a
                                    }]; m < h - 1;)
                                    if (f(e, m) && m + 5 < h) {
                                        p(i, this.observer, e, m, i.manifestCodec);
                                        var b = g(i, e, m, c, u);
                                        if (!b) {
                                            s.logger.log("Unable to parse AAC frame");
                                            break
                                        }
                                        m += b.length, d = b.sample.pts, u++
                                    } else v.default.isHeader(e, m) ? (a = v.default.getID3Data(e, m), y.push({
                                        pts: d,
                                        dts: d,
                                        data: a
                                    }), m += a.length) : m++;
                                this.remuxer.remux(i, {
                                    samples: []
                                }, {
                                    samples: y,
                                    inputTimeScale: 9e4
                                }, {
                                    samples: []
                                }, t, r, n)
                            }, t.destroy = function() {}, e
                        }(),
                        b = r("./src/demux/mp4demuxer.js"),
                        T = {
                            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                            SamplesCoefficients: [
                                [0, 72, 144, 12],
                                [0, 0, 0, 0],
                                [0, 72, 144, 12],
                                [0, 144, 144, 12]
                            ],
                            BytesInSlot: [0, 1, 1, 4],
                            appendFrame: function(e, t, r, n, i) {
                                if (!(r + 24 > t.length)) {
                                    var a = this.parseHeader(t, r);
                                    if (a && r + a.frameLength <= t.length) {
                                        var o = n + i * (9e4 * a.samplesPerFrame / a.sampleRate),
                                            s = {
                                                unit: t.subarray(r, r + a.frameLength),
                                                pts: o,
                                                dts: o
                                            };
                                        return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(s), {
                                            sample: s,
                                            length: a.frameLength
                                        }
                                    }
                                }
                            },
                            parseHeader: function(e, t) {
                                var r = e[t + 1] >> 3 & 3,
                                    n = e[t + 1] >> 1 & 3,
                                    i = e[t + 2] >> 4 & 15,
                                    a = e[t + 2] >> 2 & 3,
                                    o = e[t + 2] >> 1 & 1;
                                if (1 !== r && 0 !== i && 15 !== i && 3 !== a) {
                                    var s = 3 === r ? 3 - n : 3 === n ? 3 : 4,
                                        l = 1e3 * T.BitratesMap[14 * s + i - 1],
                                        c = 3 === r ? 0 : 2 === r ? 1 : 2,
                                        u = T.SamplingRateMap[3 * c + a],
                                        d = e[t + 3] >> 6 == 3 ? 1 : 2,
                                        f = T.SamplesCoefficients[r][n],
                                        h = T.BytesInSlot[n],
                                        p = 8 * f * h;
                                    return {
                                        sampleRate: u,
                                        channelCount: d,
                                        frameLength: parseInt(f * l / u + o, 10) * h,
                                        samplesPerFrame: p
                                    }
                                }
                            },
                            isHeaderPattern: function(e, t) {
                                return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                            },
                            isHeader: function(e, t) {
                                return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                            },
                            probe: function(e, t) {
                                if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                                    var r = this.parseHeader(e, t),
                                        n = 4;
                                    r && r.frameLength && (n = r.frameLength);
                                    var i = t + n;
                                    if (i === e.length || i + 1 < e.length && this.isHeaderPattern(e, i)) return !0
                                }
                                return !1
                            }
                        },
                        E = T,
                        S = function() {
                            function e(e) {
                                this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                            }
                            var t = e.prototype;
                            return t.loadWord = function() {
                                var e = this.data,
                                    t = this.bytesAvailable,
                                    r = e.byteLength - t,
                                    n = new Uint8Array(4),
                                    i = Math.min(4, t);
                                if (0 === i) throw new Error("no bytes available");
                                n.set(e.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
                            }, t.skipBits = function(e) {
                                var t;
                                this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                            }, t.readBits = function(e) {
                                var t = Math.min(this.bitsAvailable, e),
                                    r = this.word >>> 32 - t;
                                return e > 32 && s.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
                            }, t.skipLZ = function() {
                                var e;
                                for (e = 0; e < this.bitsAvailable; ++e)
                                    if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                                return this.loadWord(), e + this.skipLZ()
                            }, t.skipUEG = function() {
                                this.skipBits(1 + this.skipLZ())
                            }, t.skipEG = function() {
                                this.skipBits(1 + this.skipLZ())
                            }, t.readUEG = function() {
                                var e = this.skipLZ();
                                return this.readBits(e + 1) - 1
                            }, t.readEG = function() {
                                var e = this.readUEG();
                                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                            }, t.readBoolean = function() {
                                return 1 === this.readBits(1)
                            }, t.readUByte = function() {
                                return this.readBits(8)
                            }, t.readUShort = function() {
                                return this.readBits(16)
                            }, t.readUInt = function() {
                                return this.readBits(32)
                            }, t.skipScalingList = function(e) {
                                var t, r = 8,
                                    n = 8;
                                for (t = 0; t < e; t++) 0 !== n && (n = (r + this.readEG() + 256) % 256), r = 0 === n ? r : n
                            }, t.readSPS = function() {
                                var e, t, r, n, i, a, o, s = 0,
                                    l = 0,
                                    c = 0,
                                    u = 0,
                                    d = this.readUByte.bind(this),
                                    f = this.readBits.bind(this),
                                    h = this.readUEG.bind(this),
                                    p = this.readBoolean.bind(this),
                                    m = this.skipBits.bind(this),
                                    g = this.skipEG.bind(this),
                                    v = this.skipUEG.bind(this),
                                    y = this.skipScalingList.bind(this);
                                if (d(), e = d(), f(5), m(3), d(), v(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                                    var b = h();
                                    if (3 === b && m(1), v(), v(), m(1), p())
                                        for (a = 3 !== b ? 8 : 12, o = 0; o < a; o++) p() && y(o < 6 ? 16 : 64)
                                }
                                v();
                                var T = h();
                                if (0 === T) h();
                                else if (1 === T)
                                    for (m(1), g(), g(), t = h(), o = 0; o < t; o++) g();
                                v(), m(1), r = h(), n = h(), 0 === (i = f(1)) && m(1), m(1), p() && (s = h(), l = h(), c = h(), u = h());
                                var E = [1, 1];
                                if (p() && p()) switch (d()) {
                                    case 1:
                                        E = [1, 1];
                                        break;
                                    case 2:
                                        E = [12, 11];
                                        break;
                                    case 3:
                                        E = [10, 11];
                                        break;
                                    case 4:
                                        E = [16, 11];
                                        break;
                                    case 5:
                                        E = [40, 33];
                                        break;
                                    case 6:
                                        E = [24, 11];
                                        break;
                                    case 7:
                                        E = [20, 11];
                                        break;
                                    case 8:
                                        E = [32, 11];
                                        break;
                                    case 9:
                                        E = [80, 33];
                                        break;
                                    case 10:
                                        E = [18, 11];
                                        break;
                                    case 11:
                                        E = [15, 11];
                                        break;
                                    case 12:
                                        E = [64, 33];
                                        break;
                                    case 13:
                                        E = [160, 99];
                                        break;
                                    case 14:
                                        E = [4, 3];
                                        break;
                                    case 15:
                                        E = [3, 2];
                                        break;
                                    case 16:
                                        E = [2, 1];
                                        break;
                                    case 255:
                                        E = [d() << 8 | d(), d() << 8 | d()]
                                }
                                return {
                                    width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l),
                                    height: (2 - i) * (n + 1) * 16 - (i ? 2 : 4) * (c + u),
                                    pixelRatio: E
                                }
                            }, t.readSliceType = function() {
                                return this.readUByte(), this.readUEG(), this.readUEG()
                            }, e
                        }(),
                        w = function() {
                            function e(e, t, r, n) {
                                this.decryptdata = r, this.discardEPB = n, this.decrypter = new a.default(e, t, {
                                    removePKCS7Padding: !1
                                })
                            }
                            var t = e.prototype;
                            return t.decryptBuffer = function(e, t) {
                                this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                            }, t.decryptAacSample = function(e, t, r, n) {
                                var i = e[t].unit,
                                    a = i.subarray(16, i.length - i.length % 16),
                                    o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                                    s = this;
                                this.decryptBuffer(o, (function(a) {
                                    a = new Uint8Array(a), i.set(a, 16), n || s.decryptAacSamples(e, t + 1, r)
                                }))
                            }, t.decryptAacSamples = function(e, t, r) {
                                for (;; t++) {
                                    if (t >= e.length) return void r();
                                    if (!(e[t].unit.length < 32)) {
                                        var n = this.decrypter.isSync();
                                        if (this.decryptAacSample(e, t, r, n), !n) return
                                    }
                                }
                            }, t.getAvcEncryptedData = function(e) {
                                for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), n = 0, i = 32; i <= e.length - 16; i += 160, n += 16) r.set(e.subarray(i, i + 16), n);
                                return r
                            }, t.getAvcDecryptedUnit = function(e, t) {
                                t = new Uint8Array(t);
                                for (var r = 0, n = 32; n <= e.length - 16; n += 160, r += 16) e.set(t.subarray(r, r + 16), n);
                                return e
                            }, t.decryptAvcSample = function(e, t, r, n, i, a) {
                                var o = this.discardEPB(i.data),
                                    s = this.getAvcEncryptedData(o),
                                    l = this;
                                this.decryptBuffer(s.buffer, (function(s) {
                                    i.data = l.getAvcDecryptedUnit(o, s), a || l.decryptAvcSamples(e, t, r + 1, n)
                                }))
                            }, t.decryptAvcSamples = function(e, t, r, n) {
                                for (;; t++, r = 0) {
                                    if (t >= e.length) return void n();
                                    for (var i = e[t].units; !(r >= i.length); r++) {
                                        var a = i[r];
                                        if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                            var o = this.decrypter.isSync();
                                            if (this.decryptAvcSample(e, t, r, n, a, o), !o) return
                                        }
                                    }
                                }
                            }, e
                        }(),
                        k = {
                            video: 1,
                            audio: 2,
                            id3: 3,
                            text: 4
                        },
                        _ = function() {
                            function e(e, t, r, n) {
                                this.observer = e, this.config = r, this.typeSupported = n, this.remuxer = t, this.sampleAes = null
                            }
                            var t = e.prototype;
                            return t.setDecryptData = function(e) {
                                null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new w(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
                            }, e.probe = function(t) {
                                var r = e._syncOffset(t);
                                return !(r < 0 || (r && s.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
                            }, e._syncOffset = function(e) {
                                for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
                                    if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
                                    r++
                                }
                                return -1
                            }, e.createTrack = function(e, t) {
                                return {
                                    container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                                    type: e,
                                    id: k[e],
                                    pid: -1,
                                    inputTimeScale: 9e4,
                                    sequenceNumber: 0,
                                    samples: [],
                                    dropped: "video" === e ? 0 : void 0,
                                    isAAC: "audio" === e || void 0,
                                    duration: "audio" === e ? t : void 0
                                }
                            }, t.resetInitSegment = function(t, r, n, i) {
                                this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", i), this._audioTrack = e.createTrack("audio", i), this._id3Track = e.createTrack("id3", i), this._txtTrack = e.createTrack("text", i), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = n, this._duration = i
                            }, t.resetTimeStamp = function() {}, t.append = function(t, r, a, o) {
                                var l, c, u, d, f, h = t.length,
                                    p = !1;
                                this.contiguous = a;
                                var m = this.pmtParsed,
                                    g = this._avcTrack,
                                    v = this._audioTrack,
                                    y = this._id3Track,
                                    b = g.pid,
                                    T = v.pid,
                                    E = y.pid,
                                    S = this._pmtId,
                                    w = g.pesData,
                                    k = v.pesData,
                                    _ = y.pesData,
                                    C = this._parsePAT,
                                    R = this._parsePMT,
                                    x = this._parsePES,
                                    P = this._parseAVCPES.bind(this),
                                    A = this._parseAACPES.bind(this),
                                    O = this._parseMPEGPES.bind(this),
                                    D = this._parseID3PES.bind(this),
                                    L = e._syncOffset(t);
                                for (h -= (h + L) % 188, l = L; l < h; l += 188)
                                    if (71 === t[l]) {
                                        if (c = !!(64 & t[l + 1]), u = ((31 & t[l + 1]) << 8) + t[l + 2], (48 & t[l + 3]) >> 4 > 1) {
                                            if ((d = l + 5 + t[l + 4]) === l + 188) continue
                                        } else d = l + 4;
                                        switch (u) {
                                            case b:
                                                c && (w && (f = x(w)) && void 0 !== f.pts && P(f, !1), w = {
                                                    data: [],
                                                    size: 0
                                                }), w && (w.data.push(t.subarray(d, l + 188)), w.size += l + 188 - d);
                                                break;
                                            case T:
                                                c && (k && (f = x(k)) && void 0 !== f.pts && (v.isAAC ? A(f) : O(f)), k = {
                                                    data: [],
                                                    size: 0
                                                }), k && (k.data.push(t.subarray(d, l + 188)), k.size += l + 188 - d);
                                                break;
                                            case E:
                                                c && (_ && (f = x(_)) && void 0 !== f.pts && D(f), _ = {
                                                    data: [],
                                                    size: 0
                                                }), _ && (_.data.push(t.subarray(d, l + 188)), _.size += l + 188 - d);
                                                break;
                                            case 0:
                                                c && (d += t[d] + 1), S = this._pmtId = C(t, d);
                                                break;
                                            case S:
                                                c && (d += t[d] + 1);
                                                var I = R(t, d, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                                (b = I.avc) > 0 && (g.pid = b), (T = I.audio) > 0 && (v.pid = T, v.isAAC = I.isAAC), (E = I.id3) > 0 && (y.pid = E), p && !m && (s.logger.log("reparse from beginning"), p = !1, l = L - 188), m = this.pmtParsed = !0;
                                                break;
                                            case 17:
                                            case 8191:
                                                break;
                                            default:
                                                p = !0
                                        }
                                    } else this.observer.trigger(n.default.ERROR, {
                                        type: i.ErrorTypes.MEDIA_ERROR,
                                        details: i.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        reason: "TS packet did not start with 0x47"
                                    });
                                w && (f = x(w)) && void 0 !== f.pts ? (P(f, !0), g.pesData = null) : g.pesData = w, k && (f = x(k)) && void 0 !== f.pts ? (v.isAAC ? A(f) : O(f), v.pesData = null) : (k && k.size && s.logger.log("last AAC PES packet truncated,might overlap between fragments"), v.pesData = k), _ && (f = x(_)) && void 0 !== f.pts ? (D(f), y.pesData = null) : y.pesData = _, null == this.sampleAes ? this.remuxer.remux(v, g, y, this._txtTrack, r, a, o) : this.decryptAndRemux(v, g, y, this._txtTrack, r, a, o)
                            }, t.decryptAndRemux = function(e, t, r, n, i, a, o) {
                                if (e.samples && e.isAAC) {
                                    var s = this;
                                    this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
                                        s.decryptAndRemuxAvc(e, t, r, n, i, a, o)
                                    }))
                                } else this.decryptAndRemuxAvc(e, t, r, n, i, a, o)
                            }, t.decryptAndRemuxAvc = function(e, t, r, n, i, a, o) {
                                if (t.samples) {
                                    var s = this;
                                    this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
                                        s.remuxer.remux(e, t, r, n, i, a, o)
                                    }))
                                } else this.remuxer.remux(e, t, r, n, i, a, o)
                            }, t.destroy = function() {
                                this._initPTS = this._initDTS = void 0, this._duration = 0
                            }, t._parsePAT = function(e, t) {
                                return (31 & e[t + 10]) << 8 | e[t + 11]
                            }, t._parsePMT = function(e, t, r, n) {
                                var i, a, o = {
                                    audio: -1,
                                    avc: -1,
                                    id3: -1,
                                    isAAC: !0
                                };
                                for (i = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < i;) {
                                    switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                        case 207:
                                            if (!n) {
                                                s.logger.log("unknown stream type:" + e[t]);
                                                break
                                            }
                                        case 15:
                                            -1 === o.audio && (o.audio = a);
                                            break;
                                        case 21:
                                            -1 === o.id3 && (o.id3 = a);
                                            break;
                                        case 219:
                                            if (!n) {
                                                s.logger.log("unknown stream type:" + e[t]);
                                                break
                                            }
                                        case 27:
                                            -1 === o.avc && (o.avc = a);
                                            break;
                                        case 3:
                                        case 4:
                                            r ? -1 === o.audio && (o.audio = a, o.isAAC = !1) : s.logger.log("MPEG audio found, not supported in this browser for now");
                                            break;
                                        case 36:
                                            s.logger.warn("HEVC stream type found, not supported for now");
                                            break;
                                        default:
                                            s.logger.log("unknown stream type:" + e[t])
                                    }
                                    t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                                }
                                return o
                            }, t._parsePES = function(e) {
                                var t, r, n, i, a, o, l, c, u = 0,
                                    d = e.data;
                                if (!e || 0 === e.size) return null;
                                for (; d[0].length < 19 && d.length > 1;) {
                                    var f = new Uint8Array(d[0].length + d[1].length);
                                    f.set(d[0]), f.set(d[1], d[0].length), d[0] = f, d.splice(1, 1)
                                }
                                if (1 === ((t = d[0])[0] << 16) + (t[1] << 8) + t[2]) {
                                    if ((n = (t[4] << 8) + t[5]) && n > e.size - 6) return null;
                                    if (192 & (r = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & r ? ((l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (l -= 8589934592), o - l > 54e5 && (s.logger.warn(Math.round((o - l) / 9e4) + "s delta between PTS and DTS, align them"), o = l)) : l = o), c = (i = t[8]) + 9, e.size <= c) return null;
                                    e.size -= c, a = new Uint8Array(e.size);
                                    for (var h = 0, p = d.length; h < p; h++) {
                                        var m = (t = d[h]).byteLength;
                                        if (c) {
                                            if (c > m) {
                                                c -= m;
                                                continue
                                            }
                                            t = t.subarray(c), m -= c, c = 0
                                        }
                                        a.set(t, u), u += m
                                    }
                                    return n && (n -= i + 3), {
                                        data: a,
                                        pts: o,
                                        dts: l,
                                        len: n
                                    }
                                }
                                return null
                            }, t.pushAccesUnit = function(e, t) {
                                if (e.units.length && e.frame) {
                                    var r = t.samples,
                                        n = r.length;
                                    !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (n || this.contiguous) ? (e.id = n, r.push(e)) : t.dropped++
                                }
                                e.debug.length && s.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                            }, t._parseAVCPES = function(e, t) {
                                var r, n, i, a = this,
                                    o = this._avcTrack,
                                    s = this._parseAVCNALu(e.data),
                                    l = this.avcSample,
                                    c = !1,
                                    u = this.pushAccesUnit.bind(this),
                                    d = function(e, t, r, n) {
                                        return {
                                            key: e,
                                            pts: t,
                                            dts: r,
                                            units: [],
                                            debug: n
                                        }
                                    };
                                e.data = null, l && s.length && !o.audFound && (u(l, o), l = this.avcSample = d(!1, e.pts, e.dts, "")), s.forEach((function(t) {
                                    switch (t.type) {
                                        case 1:
                                            n = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.frame = !0;
                                            var s = t.data;
                                            if (c && s.length > 4) {
                                                var f = new S(s).readSliceType();
                                                2 !== f && 4 !== f && 7 !== f && 9 !== f || (l.key = !0)
                                            }
                                            break;
                                        case 5:
                                            n = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;
                                            break;
                                        case 6:
                                            n = !0, (r = new S(a.discardEPB(t.data))).readUByte();
                                            for (var h = 0, p = 0, m = !1, g = 0; !m && r.bytesAvailable > 1;) {
                                                h = 0;
                                                do {
                                                    h += g = r.readUByte()
                                                } while (255 === g);
                                                p = 0;
                                                do {
                                                    p += g = r.readUByte()
                                                } while (255 === g);
                                                if (4 === h && 0 !== r.bytesAvailable) {
                                                    if (m = !0, 181 === r.readUByte() && 49 === r.readUShort() && 1195456820 === r.readUInt() && 3 === r.readUByte()) {
                                                        var y = r.readUByte(),
                                                            b = 31 & y,
                                                            T = [y, r.readUByte()];
                                                        for (i = 0; i < b; i++) T.push(r.readUByte()), T.push(r.readUByte()), T.push(r.readUByte());
                                                        a._insertSampleInOrder(a._txtTrack.samples, {
                                                            type: 3,
                                                            pts: e.pts,
                                                            bytes: T
                                                        })
                                                    }
                                                } else if (5 === h && 0 !== r.bytesAvailable) {
                                                    if (m = !0, p > 16) {
                                                        var E = [];
                                                        for (i = 0; i < 16; i++) E.push(r.readUByte().toString(16)), 3 !== i && 5 !== i && 7 !== i && 9 !== i || E.push("-");
                                                        var w = p - 16,
                                                            k = new Uint8Array(w);
                                                        for (i = 0; i < w; i++) k[i] = r.readUByte();
                                                        a._insertSampleInOrder(a._txtTrack.samples, {
                                                            pts: e.pts,
                                                            payloadType: h,
                                                            uuid: E.join(""),
                                                            userDataBytes: k,
                                                            userData: Object(v.utf8ArrayToStr)(k.buffer)
                                                        })
                                                    }
                                                } else if (p < r.bytesAvailable)
                                                    for (i = 0; i < p; i++) r.readUByte()
                                            }
                                            break;
                                        case 7:
                                            if (n = !0, c = !0, !o.sps) {
                                                var _ = (r = new S(t.data)).readSPS();
                                                o.width = _.width, o.height = _.height, o.pixelRatio = _.pixelRatio, o.sps = [t.data], o.duration = a._duration;
                                                var C = t.data.subarray(1, 4),
                                                    R = "avc1.";
                                                for (i = 0; i < 3; i++) {
                                                    var x = C[i].toString(16);
                                                    x.length < 2 && (x = "0" + x), R += x
                                                }
                                                o.codec = R
                                            }
                                            break;
                                        case 8:
                                            n = !0, o.pps || (o.pps = [t.data]);
                                            break;
                                        case 9:
                                            n = !1, o.audFound = !0, l && u(l, o), l = a.avcSample = d(!1, e.pts, e.dts, "");
                                            break;
                                        case 12:
                                            n = !1;
                                            break;
                                        default:
                                            n = !1, l && (l.debug += "unknown NAL " + t.type + " ")
                                    }
                                    l && n && l.units.push(t)
                                })), t && l && (u(l, o), this.avcSample = null)
                            }, t._insertSampleInOrder = function(e, t) {
                                var r = e.length;
                                if (r > 0) {
                                    if (t.pts >= e[r - 1].pts) e.push(t);
                                    else
                                        for (var n = r - 1; n >= 0; n--)
                                            if (t.pts < e[n].pts) {
                                                e.splice(n, 0, t);
                                                break
                                            }
                                } else e.push(t)
                            }, t._getLastNalUnit = function() {
                                var e, t = this.avcSample;
                                if (!t || 0 === t.units.length) {
                                    var r = this._avcTrack.samples;
                                    t = r[r.length - 1]
                                }
                                if (t) {
                                    var n = t.units;
                                    e = n[n.length - 1]
                                }
                                return e
                            }, t._parseAVCNALu = function(e) {
                                var t, r, n, i, a = 0,
                                    o = e.byteLength,
                                    s = this._avcTrack,
                                    l = s.naluState || 0,
                                    c = l,
                                    u = [],
                                    d = -1;
                                for (-1 === l && (d = 0, i = 31 & e[0], l = 0, a = 1); a < o;)
                                    if (t = e[a++], l)
                                        if (1 !== l)
                                            if (t)
                                                if (1 === t) {
                                                    if (d >= 0) n = {
                                                        data: e.subarray(d, a - l - 1),
                                                        type: i
                                                    }, u.push(n);
                                                    else {
                                                        var f = this._getLastNalUnit();
                                                        if (f && (c && a <= 4 - c && f.state && (f.data = f.data.subarray(0, f.data.byteLength - c)), (r = a - l - 1) > 0)) {
                                                            var h = new Uint8Array(f.data.byteLength + r);
                                                            h.set(f.data, 0), h.set(e.subarray(0, r), f.data.byteLength), f.data = h
                                                        }
                                                    }
                                                    a < o ? (d = a, i = 31 & e[a], l = 0) : l = -1
                                                } else l = 0;
                                else l = 3;
                                else l = t ? 0 : 2;
                                else l = t ? 0 : 1;
                                if (d >= 0 && l >= 0 && (n = {
                                        data: e.subarray(d, o),
                                        type: i,
                                        state: l
                                    }, u.push(n)), 0 === u.length) {
                                    var p = this._getLastNalUnit();
                                    if (p) {
                                        var m = new Uint8Array(p.data.byteLength + e.byteLength);
                                        m.set(p.data, 0), m.set(e, p.data.byteLength), p.data = m
                                    }
                                }
                                return s.naluState = l, u
                            }, t.discardEPB = function(e) {
                                for (var t, r, n = e.byteLength, i = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (i.push(a + 2), a += 2) : a++;
                                if (0 === i.length) return e;
                                t = n - i.length, r = new Uint8Array(t);
                                var o = 0;
                                for (a = 0; a < t; o++, a++) o === i[0] && (o++, i.shift()), r[a] = e[o];
                                return r
                            }, t._parseAACPES = function(e) {
                                var t, r, a, o, l, c, u, d = this._audioTrack,
                                    h = e.data,
                                    v = e.pts,
                                    y = this.aacOverFlow,
                                    b = this.aacLastPTS;
                                if (y) {
                                    var T = new Uint8Array(y.byteLength + h.byteLength);
                                    T.set(y, 0), T.set(h, y.byteLength), h = T
                                }
                                for (a = 0, l = h.length; a < l - 1 && !f(h, a); a++);
                                if (!a || (a < l - 1 ? (c = "AAC PES did not start with ADTS header,offset:" + a, u = !1) : (c = "no ADTS header found in AAC PES", u = !0), s.logger.warn("parsing error:" + c), this.observer.trigger(n.default.ERROR, {
                                        type: i.ErrorTypes.MEDIA_ERROR,
                                        details: i.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: u,
                                        reason: c
                                    }), !u)) {
                                    if (p(d, this.observer, h, a, this.audioCodec), r = 0, t = m(d.samplerate), y && b) {
                                        var E = b + t;
                                        Math.abs(E - v) > 1 && (s.logger.log("AAC: align PTS for overlapping frames by " + Math.round((E - v) / 90)), v = E)
                                    }
                                    for (; a < l;)
                                        if (f(h, a) && a + 5 < l) {
                                            var S = g(d, h, a, v, r);
                                            if (!S) break;
                                            a += S.length, o = S.sample.pts, r++
                                        } else a++;
                                    y = a < l ? h.subarray(a, l) : null, this.aacOverFlow = y, this.aacLastPTS = o
                                }
                            }, t._parseMPEGPES = function(e) {
                                for (var t = e.data, r = t.length, n = 0, i = 0, a = e.pts; i < r;)
                                    if (E.isHeader(t, i)) {
                                        var o = E.appendFrame(this._audioTrack, t, i, a, n);
                                        if (!o) break;
                                        i += o.length, n++
                                    } else i++
                            }, t._parseID3PES = function(e) {
                                this._id3Track.samples.push(e)
                            }, e
                        }(),
                        C = function() {
                            function e(e, t, r) {
                                this.observer = e, this.config = r, this.remuxer = t
                            }
                            var t = e.prototype;
                            return t.resetInitSegment = function(e, t, r, n) {
                                this._audioTrack = {
                                    container: "audio/mpeg",
                                    type: "audio",
                                    id: -1,
                                    sequenceNumber: 0,
                                    isAAC: !1,
                                    samples: [],
                                    len: 0,
                                    manifestCodec: t,
                                    duration: n,
                                    inputTimeScale: 9e4
                                }
                            }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                                var t, r, n = v.default.getID3Data(e, 0);
                                if (n && void 0 !== v.default.getTimeStamp(n))
                                    for (t = n.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
                                        if (E.probe(e, t)) return s.logger.log("MPEG Audio sync word found !"), !0;
                                return !1
                            }, t.append = function(e, t, r, n) {
                                for (var i = v.default.getID3Data(e, 0), a = v.default.getTimeStamp(i), o = a ? 90 * a : 9e4 * t, s = i.length, l = e.length, c = 0, u = 0, d = this._audioTrack, f = [{
                                        pts: o,
                                        dts: o,
                                        data: i
                                    }]; s < l;)
                                    if (E.isHeader(e, s)) {
                                        var h = E.appendFrame(d, e, s, o, c);
                                        if (!h) break;
                                        s += h.length, u = h.sample.pts, c++
                                    } else v.default.isHeader(e, s) ? (i = v.default.getID3Data(e, s), f.push({
                                        pts: u,
                                        dts: u,
                                        data: i
                                    }), s += i.length) : s++;
                                this.remuxer.remux(d, {
                                    samples: []
                                }, {
                                    samples: f,
                                    inputTimeScale: 9e4
                                }, {
                                    samples: []
                                }, t, r, n)
                            }, t.destroy = function() {}, e
                        }(),
                        R = function() {
                            function e() {}
                            return e.getSilentFrame = function(e, t) {
                                switch (e) {
                                    case "mp4a.40.2":
                                        if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                        if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                        if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                        if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                        if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                        if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                                        break;
                                    default:
                                        if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                        if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                        if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                                }
                                return null
                            }, e
                        }(),
                        x = Math.pow(2, 32) - 1,
                        P = function() {
                            function e() {}
                            return e.init = function() {
                                var t;
                                for (t in e.types = {
                                        avc1: [],
                                        avcC: [],
                                        btrt: [],
                                        dinf: [],
                                        dref: [],
                                        esds: [],
                                        ftyp: [],
                                        hdlr: [],
                                        mdat: [],
                                        mdhd: [],
                                        mdia: [],
                                        mfhd: [],
                                        minf: [],
                                        moof: [],
                                        moov: [],
                                        mp4a: [],
                                        ".mp3": [],
                                        mvex: [],
                                        mvhd: [],
                                        pasp: [],
                                        sdtp: [],
                                        stbl: [],
                                        stco: [],
                                        stsc: [],
                                        stsd: [],
                                        stsz: [],
                                        stts: [],
                                        tfdt: [],
                                        tfhd: [],
                                        traf: [],
                                        trak: [],
                                        trun: [],
                                        trex: [],
                                        tkhd: [],
                                        vmhd: [],
                                        smhd: []
                                    }, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                    n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                e.HDLR_TYPES = {
                                    video: r,
                                    audio: n
                                };
                                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                    a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                                var o = new Uint8Array([105, 115, 111, 109]),
                                    s = new Uint8Array([97, 118, 99, 49]),
                                    l = new Uint8Array([0, 0, 0, 1]);
                                e.FTYP = e.box(e.types.ftyp, o, l, o, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
                            }, e.box = function(e) {
                                for (var t, r = Array.prototype.slice.call(arguments, 1), n = 8, i = r.length, a = i; i--;) n += r[i].byteLength;
                                for ((t = new Uint8Array(n))[0] = n >> 24 & 255, t[1] = n >> 16 & 255, t[2] = n >> 8 & 255, t[3] = 255 & n, t.set(e, 4), i = 0, n = 8; i < a; i++) t.set(r[i], n), n += r[i].byteLength;
                                return t
                            }, e.hdlr = function(t) {
                                return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                            }, e.mdat = function(t) {
                                return e.box(e.types.mdat, t)
                            }, e.mdhd = function(t, r) {
                                r *= t;
                                var n = Math.floor(r / (x + 1)),
                                    i = Math.floor(r % (x + 1));
                                return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]))
                            }, e.mdia = function(t) {
                                return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                            }, e.mfhd = function(t) {
                                return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                            }, e.minf = function(t) {
                                return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                            }, e.moof = function(t, r, n) {
                                return e.box(e.types.moof, e.mfhd(t), e.traf(n, r))
                            }, e.moov = function(t) {
                                for (var r = t.length, n = []; r--;) n[r] = e.trak(t[r]);
                                return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(e.mvex(t)))
                            }, e.mvex = function(t) {
                                for (var r = t.length, n = []; r--;) n[r] = e.trex(t[r]);
                                return e.box.apply(null, [e.types.mvex].concat(n))
                            }, e.mvhd = function(t, r) {
                                r *= t;
                                var n = Math.floor(r / (x + 1)),
                                    i = Math.floor(r % (x + 1)),
                                    a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                return e.box(e.types.mvhd, a)
                            }, e.sdtp = function(t) {
                                var r, n, i = t.samples || [],
                                    a = new Uint8Array(4 + i.length);
                                for (n = 0; n < i.length; n++) r = i[n].flags, a[n + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                                return e.box(e.types.sdtp, a)
                            }, e.stbl = function(t) {
                                return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                            }, e.avc1 = function(t) {
                                var r, n, i, a = [],
                                    o = [];
                                for (r = 0; r < t.sps.length; r++) i = (n = t.sps[r]).byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(n));
                                for (r = 0; r < t.pps.length; r++) i = (n = t.pps[r]).byteLength, o.push(i >>> 8 & 255), o.push(255 & i), o = o.concat(Array.prototype.slice.call(n));
                                var s = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a).concat([t.pps.length]).concat(o))),
                                    l = t.width,
                                    c = t.height,
                                    u = t.pixelRatio[0],
                                    d = t.pixelRatio[1];
                                return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, c >> 8 & 255, 255 & c, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                            }, e.esds = function(e) {
                                var t = e.config.length;
                                return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                            }, e.mp4a = function(t) {
                                var r = t.samplerate;
                                return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
                            }, e.mp3 = function(t) {
                                var r = t.samplerate;
                                return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                            }, e.stsd = function(t) {
                                return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                            }, e.tkhd = function(t) {
                                var r = t.id,
                                    n = t.duration * t.timescale,
                                    i = t.width,
                                    a = t.height,
                                    o = Math.floor(n / (x + 1)),
                                    s = Math.floor(n % (x + 1));
                                return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
                            }, e.traf = function(t, r) {
                                var n = e.sdtp(t),
                                    i = t.id,
                                    a = Math.floor(r / (x + 1)),
                                    o = Math.floor(r % (x + 1));
                                return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.trun(t, n.length + 16 + 20 + 8 + 16 + 8 + 8), n)
                            }, e.trak = function(t) {
                                return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                            }, e.trex = function(t) {
                                var r = t.id;
                                return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                            }, e.trun = function(t, r) {
                                var n, i, a, o, s, l, c = t.samples || [],
                                    u = c.length,
                                    d = 12 + 16 * u,
                                    f = new Uint8Array(d);
                                for (r += 8 + d, f.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), n = 0; n < u; n++) a = (i = c[n]).duration, o = i.size, s = i.flags, l = i.cts, f.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * n);
                                return e.box(e.types.trun, f)
                            }, e.initSegment = function(t) {
                                e.types || e.init();
                                var r, n = e.moov(t);
                                return (r = new Uint8Array(e.FTYP.byteLength + n.byteLength)).set(e.FTYP), r.set(n, e.FTYP.byteLength), r
                            }, e
                        }();

                    function A(e, t, r, n) {
                        void 0 === r && (r = 1), void 0 === n && (n = !1);
                        var i = e * t * r;
                        return n ? Math.round(i) : i
                    }

                    function O(e, t) {
                        return void 0 === t && (t = !1), A(e, 1e3, 1 / 9e4, t)
                    }

                    function D(e, t) {
                        return void 0 === t && (t = 1), A(e, 9e4, 1 / t)
                    }
                    var L, I = D(10),
                        M = D(.2),
                        N = function() {
                            function e(e, t, r, n) {
                                this.observer = e, this.config = t, this.typeSupported = r;
                                var i = navigator.userAgent;
                                this.isSafari = n && n.indexOf("Apple") > -1 && i && !i.match("CriOS"), this.ISGenerated = !1
                            }
                            var t = e.prototype;
                            return t.destroy = function() {}, t.resetTimeStamp = function(e) {
                                this._initPTS = this._initDTS = e
                            }, t.resetInitSegment = function() {
                                this.ISGenerated = !1
                            }, t.remux = function(e, t, r, i, a, o, l) {
                                if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) {
                                    var c = e.samples.length,
                                        u = t.samples.length,
                                        d = a,
                                        f = a;
                                    if (c && u) {
                                        var h = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                                        d += Math.max(0, h), f += Math.max(0, -h)
                                    }
                                    if (c) {
                                        e.timescale || (s.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a));
                                        var p, m = this.remuxAudio(e, d, o, l);
                                        u && (m && (p = m.endPTS - m.startPTS), t.timescale || (s.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)), this.remuxVideo(t, f, o, p, l))
                                    } else if (u) {
                                        var g = this.remuxVideo(t, f, o, 0, l);
                                        g && e.codec && this.remuxEmptyAudio(e, d, o, g)
                                    }
                                }
                                r.samples.length && this.remuxID3(r, a), i.samples.length && this.remuxText(i, a), this.observer.trigger(n.default.FRAG_PARSED)
                            }, t.generateIS = function(e, t, r) {
                                var a, o, l = this.observer,
                                    c = e.samples,
                                    u = t.samples,
                                    d = this.typeSupported,
                                    f = "audio/mp4",
                                    h = {},
                                    p = {
                                        tracks: h
                                    },
                                    m = void 0 === this._initPTS;
                                if (m && (a = o = 1 / 0), e.config && c.length && (e.timescale = e.samplerate, s.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (d.mpeg ? (f = "audio/mpeg", e.codec = "") : d.mp3 && (e.codec = "mp3")), h.audio = {
                                        container: f,
                                        codec: e.codec,
                                        initSegment: !e.isAAC && d.mpeg ? new Uint8Array : P.initSegment([e]),
                                        metadata: {
                                            channelCount: e.channelCount
                                        }
                                    }, m && (a = o = c[0].pts - e.inputTimeScale * r)), t.sps && t.pps && u.length) {
                                    var g = t.inputTimeScale;
                                    t.timescale = g, h.video = {
                                        container: "video/mp4",
                                        codec: t.codec,
                                        initSegment: P.initSegment([t]),
                                        metadata: {
                                            width: t.width,
                                            height: t.height
                                        }
                                    }, m && (a = Math.min(a, u[0].pts - g * r), o = Math.min(o, u[0].dts - g * r), this.observer.trigger(n.default.INIT_PTS_FOUND, {
                                        initPTS: a
                                    }))
                                }
                                Object.keys(h).length ? (l.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, p), this.ISGenerated = !0, m && (this._initPTS = a, this._initDTS = o)) : l.trigger(n.default.ERROR, {
                                    type: i.ErrorTypes.MEDIA_ERROR,
                                    details: i.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !1,
                                    reason: "no audio/video samples found"
                                })
                            }, t.remuxVideo = function(e, t, r, a, o) {
                                var l, c, u, d, f, h, p, m = 8,
                                    g = e.timescale,
                                    v = e.samples,
                                    y = [],
                                    b = v.length,
                                    T = this._PTSNormalize,
                                    E = this._initPTS,
                                    S = this.nextAvcDts,
                                    w = this.isSafari;
                                if (0 !== b) {
                                    w && (r |= v.length && S && (o && Math.abs(t - S / g) < .1 || Math.abs(v[0].pts - S - E) < g / 5)), r || (S = t * g), v.forEach((function(e) {
                                        e.pts = T(e.pts - E, S), e.dts = T(e.dts - E, S)
                                    })), v.sort((function(e, t) {
                                        var r = e.dts - t.dts,
                                            n = e.pts - t.pts;
                                        return r || n || e.id - t.id
                                    }));
                                    var k = v.reduce((function(e, t) {
                                        return Math.max(Math.min(e, t.pts - t.dts), -1 * M)
                                    }), 0);
                                    if (k < 0) {
                                        s.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + O(k, !0) + " ms to overcome this issue");
                                        for (var _ = 0; _ < v.length; _++) v[_].dts += k
                                    }
                                    var C = v[0];
                                    f = Math.max(C.dts, 0), d = Math.max(C.pts, 0);
                                    var R = f - S;
                                    r && R && (R > 1 ? s.logger.log("AVC: " + O(R, !0) + " ms hole between fragments detected,filling it") : R < -1 && s.logger.log("AVC: " + O(-R, !0) + " ms overlapping between fragments detected"), f = S, v[0].dts = f, d = Math.max(d - R, S), v[0].pts = d, s.logger.log("Video: PTS/DTS adjusted: " + O(d, !0) + "/" + O(f, !0) + ", delta: " + O(R, !0) + " ms")), C = v[v.length - 1], p = Math.max(C.dts, 0), h = Math.max(C.pts, 0, p), w && (l = Math.round((p - f) / (v.length - 1)));
                                    for (var x = 0, A = 0, D = 0; D < b; D++) {
                                        for (var L = v[D], I = L.units, N = I.length, F = 0, U = 0; U < N; U++) F += I[U].data.length;
                                        A += F, x += N, L.length = F, L.dts = w ? f + D * l : Math.max(L.dts, f), L.pts = Math.max(L.pts, L.dts)
                                    }
                                    var j = A + 4 * x + 8;
                                    try {
                                        c = new Uint8Array(j)
                                    } catch (e) {
                                        return void this.observer.trigger(n.default.ERROR, {
                                            type: i.ErrorTypes.MUX_ERROR,
                                            details: i.ErrorDetails.REMUX_ALLOC_ERROR,
                                            fatal: !1,
                                            bytes: j,
                                            reason: "fail allocating video mdat " + j
                                        })
                                    }
                                    var B = new DataView(c.buffer);
                                    B.setUint32(0, j), c.set(P.types.mdat, 4);
                                    for (var G = 0; G < b; G++) {
                                        for (var z = v[G], K = z.units, V = 0, H = void 0, W = 0, Y = K.length; W < Y; W++) {
                                            var q = K[W],
                                                X = q.data,
                                                $ = q.data.byteLength;
                                            B.setUint32(m, $), m += 4, c.set(X, m), m += $, V += 4 + $
                                        }
                                        if (w) H = Math.max(0, l * Math.round((z.pts - z.dts) / l));
                                        else {
                                            if (G < b - 1) l = v[G + 1].dts - z.dts;
                                            else {
                                                var Q = this.config,
                                                    J = z.dts - v[G > 0 ? G - 1 : G].dts;
                                                if (Q.stretchShortVideoTrack) {
                                                    var Z = Q.maxBufferHole,
                                                        ee = Math.floor(Z * g),
                                                        te = (a ? d + a * g : this.nextAudioPts) - z.pts;
                                                    te > ee ? ((l = te - J) < 0 && (l = J), s.logger.log("It is approximately " + O(te, !1) + " ms to the next segment; using duration " + O(l, !1) + " ms for the last video frame.")) : l = J
                                                } else l = J
                                            }
                                            H = Math.round(z.pts - z.dts)
                                        }
                                        y.push({
                                            size: V,
                                            duration: l,
                                            cts: H,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: z.key ? 2 : 1,
                                                isNonSync: z.key ? 0 : 1
                                            }
                                        })
                                    }
                                    this.nextAvcDts = p + l;
                                    var re = e.dropped;
                                    if (e.nbNalu = 0, e.dropped = 0, y.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                        var ne = y[0].flags;
                                        ne.dependsOn = 2, ne.isNonSync = 0
                                    }
                                    e.samples = y, u = P.moof(e.sequenceNumber++, f, e), e.samples = [];
                                    var ie = {
                                        data1: u,
                                        data2: c,
                                        startPTS: d / g,
                                        endPTS: (h + l) / g,
                                        startDTS: f / g,
                                        endDTS: this.nextAvcDts / g,
                                        type: "video",
                                        hasAudio: !1,
                                        hasVideo: !0,
                                        nb: y.length,
                                        dropped: re
                                    };
                                    return this.observer.trigger(n.default.FRAG_PARSING_DATA, ie), ie
                                }
                            }, t.remuxAudio = function(e, t, r, a) {
                                var o, l, c, u, d, f, h = e.inputTimeScale,
                                    p = e.timescale,
                                    m = h / p,
                                    g = (e.isAAC ? 1024 : 1152) * m,
                                    v = this._PTSNormalize,
                                    y = this._initPTS,
                                    b = !e.isAAC && this.typeSupported.mpeg,
                                    T = b ? 0 : 8,
                                    E = e.samples,
                                    S = [],
                                    w = this.nextAudioPts;
                                if (r |= E.length && w && (a && Math.abs(t - w / h) < .1 || Math.abs(E[0].pts - w - y) < 20 * g), E.forEach((function(e) {
                                        e.pts = e.dts = v(e.pts - y, t * h)
                                    })), 0 !== (E = E.filter((function(e) {
                                        return e.pts >= 0
                                    }))).length) {
                                    if (r || (w = a ? t * h : E[0].pts), e.isAAC)
                                        for (var k = this.config.maxAudioFramesDrift, _ = 0, C = w; _ < E.length;) {
                                            var x, A = E[_];
                                            if ((x = A.pts - C) <= -k * g) s.logger.warn("Dropping 1 audio frame @ " + O(C, !0) + " ms due to " + O(x, !0) + " ms overlap."), E.splice(_, 1);
                                            else if (x >= k * g && x < I && C) {
                                                var D = Math.round(x / g);
                                                s.logger.warn("Injecting " + D + " audio frames @ " + O(C, !0) + " ms due to " + O(C, !0) + " ms gap.");
                                                for (var L = 0; L < D; L++) {
                                                    var M = Math.max(C, 0);
                                                    (l = R.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), l = A.unit.subarray()), E.splice(_, 0, {
                                                        unit: l,
                                                        pts: M,
                                                        dts: M
                                                    }), C += g, _++
                                                }
                                                A.pts = A.dts = C, C += g, _++
                                            } else Math.abs(x), A.pts = A.dts = C, C += g, _++
                                        }
                                    for (var N = E.length, F = 0; N--;) F += E[N].unit.byteLength;
                                    for (var U = 0, j = E.length; U < j; U++) {
                                        var B = E[U],
                                            G = B.unit,
                                            z = B.pts;
                                        if (void 0 !== f) o.duration = Math.round((z - f) / m);
                                        else {
                                            var K = z - w,
                                                V = 0;
                                            if (r && e.isAAC && K) {
                                                if (K > 0 && K < I) V = Math.round((z - w) / g), s.logger.log(O(K, !0) + " ms hole between AAC samples detected,filling it"), V > 0 && ((l = R.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = G.subarray()), F += V * l.length);
                                                else if (K < -12) {
                                                    s.logger.log("drop overlapping AAC sample, expected/parsed/delta: " + O(w, !0) + " ms / " + O(z, !0) + " ms / " + O(-K, !0) + " ms"), F -= G.byteLength;
                                                    continue
                                                }
                                                z = w
                                            }
                                            if (d = z, !(F > 0)) return;
                                            F += T;
                                            try {
                                                c = new Uint8Array(F)
                                            } catch (e) {
                                                return void this.observer.trigger(n.default.ERROR, {
                                                    type: i.ErrorTypes.MUX_ERROR,
                                                    details: i.ErrorDetails.REMUX_ALLOC_ERROR,
                                                    fatal: !1,
                                                    bytes: F,
                                                    reason: "fail allocating audio mdat " + F
                                                })
                                            }
                                            b || (new DataView(c.buffer).setUint32(0, F), c.set(P.types.mdat, 4));
                                            for (var H = 0; H < V; H++)(l = R.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), l = G.subarray()), c.set(l, T), T += l.byteLength, o = {
                                                size: l.byteLength,
                                                cts: 0,
                                                duration: 1024,
                                                flags: {
                                                    isLeading: 0,
                                                    isDependedOn: 0,
                                                    hasRedundancy: 0,
                                                    degradPrio: 0,
                                                    dependsOn: 1
                                                }
                                            }, S.push(o)
                                        }
                                        c.set(G, T);
                                        var W = G.byteLength;
                                        T += W, o = {
                                            size: W,
                                            cts: 0,
                                            duration: 0,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: 1
                                            }
                                        }, S.push(o), f = z
                                    }
                                    var Y = 0;
                                    if ((N = S.length) >= 2 && (Y = S[N - 2].duration, o.duration = Y), N) {
                                        this.nextAudioPts = w = f + m * Y, e.samples = S, u = b ? new Uint8Array : P.moof(e.sequenceNumber++, d / m, e), e.samples = [];
                                        var q = d / h,
                                            X = w / h,
                                            $ = {
                                                data1: u,
                                                data2: c,
                                                startPTS: q,
                                                endPTS: X,
                                                startDTS: q,
                                                endDTS: X,
                                                type: "audio",
                                                hasAudio: !0,
                                                hasVideo: !1,
                                                nb: N
                                            };
                                        return this.observer.trigger(n.default.FRAG_PARSING_DATA, $), $
                                    }
                                    return null
                                }
                            }, t.remuxEmptyAudio = function(e, t, r, n) {
                                var i = e.inputTimeScale,
                                    a = i / (e.samplerate ? e.samplerate : i),
                                    o = this.nextAudioPts,
                                    l = (void 0 !== o ? o : n.startDTS * i) + this._initDTS,
                                    c = n.endDTS * i + this._initDTS,
                                    u = 1024 * a,
                                    d = Math.ceil((c - l) / u),
                                    f = R.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                                if (s.logger.warn("remux empty Audio"), f) {
                                    for (var h = [], p = 0; p < d; p++) {
                                        var m = l + p * u;
                                        h.push({
                                            unit: f,
                                            pts: m,
                                            dts: m
                                        })
                                    }
                                    e.samples = h, this.remuxAudio(e, t, r)
                                } else s.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                            }, t.remuxID3 = function(e) {
                                var t, r = e.samples.length,
                                    i = e.inputTimeScale,
                                    a = this._initPTS,
                                    o = this._initDTS;
                                if (r) {
                                    for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - a) / i, t.dts = (t.dts - o) / i;
                                    this.observer.trigger(n.default.FRAG_PARSING_METADATA, {
                                        samples: e.samples
                                    })
                                }
                                e.samples = []
                            }, t.remuxText = function(e) {
                                e.samples.sort((function(e, t) {
                                    return e.pts - t.pts
                                }));
                                var t, r = e.samples.length,
                                    i = e.inputTimeScale,
                                    a = this._initPTS;
                                if (r) {
                                    for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - a) / i;
                                    this.observer.trigger(n.default.FRAG_PARSING_USERDATA, {
                                        samples: e.samples
                                    })
                                }
                                e.samples = []
                            }, t._PTSNormalize = function(e, t) {
                                var r;
                                if (void 0 === t) return e;
                                for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
                                return e
                            }, e
                        }(),
                        F = function() {
                            function e(e) {
                                this.observer = e
                            }
                            var t = e.prototype;
                            return t.destroy = function() {}, t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.remux = function(e, t, r, i, a, o, s, l) {
                                var c = this.observer,
                                    u = "";
                                e && (u += "audio"), t && (u += "video"), c.trigger(n.default.FRAG_PARSING_DATA, {
                                    data1: l,
                                    startPTS: a,
                                    startDTS: a,
                                    type: u,
                                    hasAudio: !!e,
                                    hasVideo: !!t,
                                    nb: 1,
                                    dropped: 0
                                }), c.trigger(n.default.FRAG_PARSED)
                            }, e
                        }(),
                        U = Object(l.getSelfScope)();
                    try {
                        L = U.performance.now.bind(U.performance)
                    } catch (e) {
                        s.logger.debug("Unable to use Performance API on this environment"), L = U.Date.now
                    }
                    var j = function() {
                        function e(e, t, r, n) {
                            this.observer = e, this.typeSupported = t, this.config = r, this.vendor = n
                        }
                        var t = e.prototype;
                        return t.destroy = function() {
                            var e = this.demuxer;
                            e && e.destroy()
                        }, t.push = function(e, t, r, i, o, s, l, c, u, d, f, h) {
                            var p = this;
                            if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                                var m = this.decrypter;
                                null == m && (m = this.decrypter = new a.default(this.observer, this.config));
                                var g = L();
                                m.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
                                    var a = L();
                                    p.observer.trigger(n.default.FRAG_DECRYPTED, {
                                        stats: {
                                            tstart: g,
                                            tdecrypt: a
                                        }
                                    }), p.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, o, s, l, c, u, d, f, h)
                                }))
                            } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, o, s, l, c, u, d, f, h)
                        }, t.pushDecrypted = function(e, t, r, a, o, s, l, c, u, d, f, h) {
                            var p = this.demuxer;
                            if (!p || (l || c) && !this.probe(e)) {
                                for (var m = this.observer, g = this.typeSupported, v = this.config, T = [{
                                        demux: _,
                                        remux: N
                                    }, {
                                        demux: b.default,
                                        remux: F
                                    }, {
                                        demux: y,
                                        remux: N
                                    }, {
                                        demux: C,
                                        remux: N
                                    }], E = 0, S = T.length; E < S; E++) {
                                    var w = T[E],
                                        k = w.demux.probe;
                                    if (k(e)) {
                                        var R = this.remuxer = new w.remux(m, v, g, this.vendor);
                                        p = new w.demux(m, R, v, g), this.probe = k;
                                        break
                                    }
                                }
                                if (!p) return void m.trigger(n.default.ERROR, {
                                    type: i.ErrorTypes.MEDIA_ERROR,
                                    details: i.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                });
                                this.demuxer = p
                            }
                            var x = this.remuxer;
                            (l || c) && (p.resetInitSegment(r, a, o, d), x.resetInitSegment()), l && (p.resetTimeStamp(h), x.resetTimeStamp(h)), "function" == typeof p.setDecryptData && p.setDecryptData(t), p.append(e, s, u, f)
                        }, e
                    }();
                    t.default = j
                },
            "./src/demux/demuxer-worker.js":
                /*!*************************************!*\
                  !*** ./src/demux/demuxer-worker.js ***!
                  \*************************************/
                /*! exports provided: default */
                /*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/demux/demuxer.js (referenced with require.resolve) */
                function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n = r( /*! ../demux/demuxer-inline */ "./src/demux/demuxer-inline.js"),
                        i = r( /*! ../events */ "./src/events.js"),
                        a = r( /*! ../utils/logger */ "./src/utils/logger.js"),
                        o = r( /*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
                    t.default = function(e) {
                        var t = new o.EventEmitter;
                        t.trigger = function(e) {
                            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                            t.emit.apply(t, [e, e].concat(n))
                        }, t.off = function(e) {
                            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                            t.removeListener.apply(t, [e].concat(n))
                        };
                        var r = function(t, r) {
                            e.postMessage({
                                event: t,
                                data: r
                            })
                        };
                        e.addEventListener("message", (function(i) {
                            var o = i.data;
                            switch (o.cmd) {
                                case "init":
                                    var s = JSON.parse(o.config);
                                    e.demuxer = new n.default(t, o.typeSupported, s, o.vendor), Object(a.enableLogs)(s.debug), r("init", null);
                                    break;
                                case "demux":
                                    e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                            }
                        })), t.on(i.default.FRAG_DECRYPTED, r), t.on(i.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(i.default.FRAG_PARSED, r), t.on(i.default.ERROR, r), t.on(i.default.FRAG_PARSING_METADATA, r), t.on(i.default.FRAG_PARSING_USERDATA, r), t.on(i.default.INIT_PTS_FOUND, r), t.on(i.default.FRAG_PARSING_DATA, (function(t, r) {
                            var n = [],
                                i = {
                                    event: t,
                                    data: r
                                };
                            r.data1 && (i.data1 = r.data1.buffer, n.push(r.data1.buffer), delete r.data1), r.data2 && (i.data2 = r.data2.buffer, n.push(r.data2.buffer), delete r.data2), e.postMessage(i, n)
                        }))
                    }
                },
            "./src/demux/id3.js":
                /*!**************************!*\
                  !*** ./src/demux/id3.js ***!
                  \**************************/
                /*! exports provided: default, utf8ArrayToStr */
                function(e, t, r) {
                    "use strict";
                    r.r(t), r.d(t, "utf8ArrayToStr", (function() {
                        return s
                    }));
                    var n, i = r( /*! ../utils/get-self-scope */ "./src/utils/get-self-scope.js"),
                        a = function() {
                            function e() {}
                            return e.isHeader = function(e, t) {
                                return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                            }, e.isFooter = function(e, t) {
                                return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                            }, e.getID3Data = function(t, r) {
                                for (var n = r, i = 0; e.isHeader(t, r);) i += 10, i += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (i += 10), r += i;
                                if (i > 0) return t.subarray(n, n + i)
                            }, e._readSize = function(e, t) {
                                var r = 0;
                                return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
                            }, e.getTimeStamp = function(t) {
                                for (var r = e.getID3Frames(t), n = 0; n < r.length; n++) {
                                    var i = r[n];
                                    if (e.isTimeStampFrame(i)) return e._readTimeStamp(i)
                                }
                            }, e.isTimeStampFrame = function(e) {
                                return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                            }, e._getFrameData = function(t) {
                                var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                    n = e._readSize(t, 4);
                                return {
                                    type: r,
                                    size: n,
                                    data: t.subarray(10, 10 + n)
                                }
                            }, e.getID3Frames = function(t) {
                                for (var r = 0, n = []; e.isHeader(t, r);) {
                                    for (var i = e._readSize(t, r + 6), a = (r += 10) + i; r + 8 < a;) {
                                        var o = e._getFrameData(t.subarray(r)),
                                            s = e._decodeFrame(o);
                                        s && n.push(s), r += o.size + 10
                                    }
                                    e.isFooter(t, r) && (r += 10)
                                }
                                return n
                            }, e._decodeFrame = function(t) {
                                return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
                            }, e._readTimeStamp = function(e) {
                                if (8 === e.data.byteLength) {
                                    var t = new Uint8Array(e.data),
                                        r = 1 & t[3],
                                        n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                                    return n /= 45, r && (n += 47721858.84), Math.round(n)
                                }
                            }, e._decodePrivFrame = function(t) {
                                if (!(t.size < 2)) {
                                    var r = e._utf8ArrayToStr(t.data, !0),
                                        n = new Uint8Array(t.data.subarray(r.length + 1));
                                    return {
                                        key: t.type,
                                        info: r,
                                        data: n.buffer
                                    }
                                }
                            }, e._decodeTextFrame = function(t) {
                                if (!(t.size < 2)) {
                                    if ("TXXX" === t.type) {
                                        var r = 1,
                                            n = e._utf8ArrayToStr(t.data.subarray(r), !0);
                                        r += n.length + 1;
                                        var i = e._utf8ArrayToStr(t.data.subarray(r));
                                        return {
                                            key: t.type,
                                            info: n,
                                            data: i
                                        }
                                    }
                                    var a = e._utf8ArrayToStr(t.data.subarray(1));
                                    return {
                                        key: t.type,
                                        data: a
                                    }
                                }
                            }, e._decodeURLFrame = function(t) {
                                if ("WXXX" === t.type) {
                                    if (t.size < 2) return;
                                    var r = 1,
                                        n = e._utf8ArrayToStr(t.data.subarray(r));
                                    r += n.length + 1;
                                    var i = e._utf8ArrayToStr(t.data.subarray(r));
                                    return {
                                        key: t.type,
                                        info: n,
                                        data: i
                                    }
                                }
                                var a = e._utf8ArrayToStr(t.data);
                                return {
                                    key: t.type,
                                    data: a
                                }
                            }, e._utf8ArrayToStr = function(e, t) {
                                void 0 === t && (t = !1);
                                var r = o();
                                if (r) {
                                    var n = r.decode(e);
                                    if (t) {
                                        var i = n.indexOf("\0");
                                        return -1 !== i ? n.substring(0, i) : n
                                    }
                                    return n.replace(/\0/g, "")
                                }
                                for (var a, s, l, c = e.length, u = "", d = 0; d < c;) {
                                    if (0 === (a = e[d++]) && t) return u;
                                    if (0 !== a && 3 !== a) switch (a >> 4) {
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                            u += String.fromCharCode(a);
                                            break;
                                        case 12:
                                        case 13:
                                            s = e[d++], u += String.fromCharCode((31 & a) << 6 | 63 & s);
                                            break;
                                        case 14:
                                            s = e[d++], l = e[d++], u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & l) << 0)
                                    }
                                }
                                return u
                            }, e
                        }();

                    function o() {
                        var e = Object(i.getSelfScope)();
                        return n || void 0 === e.TextDecoder || (n = new e.TextDecoder("utf-8")), n
                    }
                    var s = a._utf8ArrayToStr;
                    t.default = a
                },
            "./src/demux/mp4demuxer.js":
                /*!*********************************!*\
                  !*** ./src/demux/mp4demuxer.js ***!
                  \*********************************/
                /*! exports provided: default */
                function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n = r( /*! ../utils/logger */ "./src/utils/logger.js"),
                        i = r( /*! ../events */ "./src/events.js"),
                        a = Math.pow(2, 32) - 1,
                        o = function() {
                            function e(e, t) {
                                this.observer = e, this.remuxer = t
                            }
                            var t = e.prototype;
                            return t.resetTimeStamp = function(e) {
                                this.initPTS = e
                            }, t.resetInitSegment = function(t, r, n, a) {
                                if (t && t.byteLength) {
                                    var o = this.initData = e.parseInitSegment(t);
                                    null == r && (r = "mp4a.40.5"), null == n && (n = "avc1.42e01e");
                                    var s = {};
                                    o.audio && o.video ? s.audiovideo = {
                                        container: "video/mp4",
                                        codec: r + "," + n,
                                        initSegment: a ? t : null
                                    } : (o.audio && (s.audio = {
                                        container: "audio/mp4",
                                        codec: r,
                                        initSegment: a ? t : null
                                    }), o.video && (s.video = {
                                        container: "video/mp4",
                                        codec: n,
                                        initSegment: a ? t : null
                                    })), this.observer.trigger(i.default.FRAG_PARSING_INIT_SEGMENT, {
                                        tracks: s
                                    })
                                } else r && (this.audioCodec = r), n && (this.videoCodec = n)
                            }, e.probe = function(t) {
                                return e.findBox({
                                    data: t,
                                    start: 0,
                                    end: Math.min(t.length, 16384)
                                }, ["moof"]).length > 0
                            }, e.bin2str = function(e) {
                                return String.fromCharCode.apply(null, e)
                            }, e.readUint16 = function(e, t) {
                                e.data && (t += e.start, e = e.data);
                                var r = e[t] << 8 | e[t + 1];
                                return r < 0 ? 65536 + r : r
                            }, e.readUint32 = function(e, t) {
                                e.data && (t += e.start, e = e.data);
                                var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                                return r < 0 ? 4294967296 + r : r
                            }, e.writeUint32 = function(e, t, r) {
                                e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
                            }, e.findBox = function(t, r) {
                                var n, i, a, o, s, l, c = [];
                                if (t.data ? (s = t.start, a = t.end, t = t.data) : (s = 0, a = t.byteLength), !r.length) return null;
                                for (n = s; n < a;) l = (i = e.readUint32(t, n)) > 1 ? n + i : a, e.bin2str(t.subarray(n + 4, n + 8)) === r[0] && (1 === r.length ? c.push({
                                    data: t,
                                    start: n + 8,
                                    end: l
                                }) : (o = e.findBox({
                                    data: t,
                                    start: n + 8,
                                    end: l
                                }, r.slice(1))).length && (c = c.concat(o))), n = l;
                                return c
                            }, e.parseSegmentIndex = function(t) {
                                var r, n = e.findBox(t, ["moov"])[0],
                                    i = n ? n.end : null,
                                    a = 0,
                                    o = e.findBox(t, ["sidx"]);
                                if (!o || !o[0]) return null;
                                r = [];
                                var s = (o = o[0]).data[0];
                                a = 0 === s ? 8 : 16;
                                var l = e.readUint32(o, a);
                                a += 4, a += 0 === s ? 8 : 16, a += 2;
                                var c = o.end + 0,
                                    u = e.readUint16(o, a);
                                a += 2;
                                for (var d = 0; d < u; d++) {
                                    var f = a,
                                        h = e.readUint32(o, f);
                                    f += 4;
                                    var p = 2147483647 & h;
                                    if (1 == (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                                    var m = e.readUint32(o, f);
                                    f += 4, r.push({
                                        referenceSize: p,
                                        subsegmentDuration: m,
                                        info: {
                                            duration: m / l,
                                            start: c,
                                            end: c + p - 1
                                        }
                                    }), c += p, a = f += 4
                                }
                                return {
                                    earliestPresentationTime: 0,
                                    timescale: l,
                                    version: s,
                                    referencesCount: u,
                                    references: r,
                                    moovEndOffset: i
                                }
                            }, e.parseInitSegment = function(t) {
                                var r = [];
                                return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
                                    var i = e.findBox(t, ["tkhd"])[0];
                                    if (i) {
                                        var a = i.data[i.start],
                                            o = 0 === a ? 12 : 20,
                                            s = e.readUint32(i, o),
                                            l = e.findBox(t, ["mdia", "mdhd"])[0];
                                        if (l) {
                                            o = 0 === (a = l.data[l.start]) ? 12 : 20;
                                            var c = e.readUint32(l, o),
                                                u = e.findBox(t, ["mdia", "hdlr"])[0];
                                            if (u) {
                                                var d = {
                                                    soun: "audio",
                                                    vide: "video"
                                                }[e.bin2str(u.data.subarray(u.start + 8, u.start + 12))];
                                                if (d) {
                                                    var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                                    if (f.length) {
                                                        f = f[0];
                                                        var h = e.bin2str(f.data.subarray(f.start + 12, f.start + 16));
                                                        n.logger.log("MP4Demuxer:" + d + ":" + h + " found")
                                                    }
                                                    r[s] = {
                                                        timescale: c,
                                                        type: d
                                                    }, r[d] = {
                                                        timescale: c,
                                                        id: s
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })), r
                            }, e.getStartDTS = function(t, r) {
                                var n, i, a;
                                return n = e.findBox(r, ["moof", "traf"]), i = [].concat.apply([], n.map((function(r) {
                                    return e.findBox(r, ["tfhd"]).map((function(n) {
                                        var i, a;
                                        return i = e.readUint32(n, 4), a = t[i].timescale || 9e4, e.findBox(r, ["tfdt"]).map((function(t) {
                                            var r, n;
                                            return r = t.data[t.start], n = e.readUint32(t, 4), 1 === r && (n *= Math.pow(2, 32), n += e.readUint32(t, 8)), n
                                        }))[0] / a
                                    }))
                                }))), a = Math.min.apply(null, i), isFinite(a) ? a : 0
                            }, e.offsetStartDTS = function(t, r, n) {
                                e.findBox(r, ["moof", "traf"]).map((function(r) {
                                    return e.findBox(r, ["tfhd"]).map((function(i) {
                                        var o = e.readUint32(i, 4),
                                            s = t[o].timescale || 9e4;
                                        e.findBox(r, ["tfdt"]).map((function(t) {
                                            var r = t.data[t.start],
                                                i = e.readUint32(t, 4);
                                            if (0 === r) e.writeUint32(t, 4, i - n * s);
                                            else {
                                                i *= Math.pow(2, 32), i += e.readUint32(t, 8), i -= n * s, i = Math.max(i, 0);
                                                var o = Math.floor(i / (a + 1)),
                                                    l = Math.floor(i % (a + 1));
                                                e.writeUint32(t, 4, o), e.writeUint32(t, 8, l)
                                            }
                                        }))
                                    }))
                                }))
                            }, t.append = function(t, r, n, a) {
                                var o = this.initData;
                                o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData);
                                var s, l = this.initPTS;
                                if (void 0 === l) {
                                    var c = e.getStartDTS(o, t);
                                    this.initPTS = l = c - r, this.observer.trigger(i.default.INIT_PTS_FOUND, {
                                        initPTS: l
                                    })
                                }
                                e.offsetStartDTS(o, t, l), s = e.getStartDTS(o, t), this.remuxer.remux(o.audio, o.video, null, null, s, n, a, t)
                            }, t.destroy = function() {}, e
                        }();
                    t.default = o
                },
            "./src/errors.ts":
                /*!***********************!*\
                  !*** ./src/errors.ts ***!
                  \***********************/
                /*! exports provided: ErrorTypes, ErrorDetails */
                function(e, t, r) {
                    "use strict";
                    var n, i;
                    r.r(t), r.d(t, "ErrorTypes", (function() {
                            return n
                        })), r.d(t, "ErrorDetails", (function() {
                            return i
                        })),
                        function(e) {
                            e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError"
                        }(n || (n = {})),
                        function(e) {
                            e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException"
                        }(i || (i = {}))
                },
            "./src/events.js":
                /*!***********************!*\
                  !*** ./src/events.js ***!
                  \***********************/
                /*! exports provided: default */
                function(e, t, r) {
                    "use strict";
                    r.r(t), t.default = {
                        MEDIA_ATTACHING: "hlsMediaAttaching",
                        MEDIA_ATTACHED: "hlsMediaAttached",
                        MEDIA_DETACHING: "hlsMediaDetaching",
                        MEDIA_DETACHED: "hlsMediaDetached",
                        BUFFER_RESET: "hlsBufferReset",
                        BUFFER_CODECS: "hlsBufferCodecs",
                        BUFFER_CREATED: "hlsBufferCreated",
                        BUFFER_APPENDING: "hlsBufferAppending",
                        BUFFER_APPENDED: "hlsBufferAppended",
                        BUFFER_EOS: "hlsBufferEos",
                        BUFFER_FLUSHING: "hlsBufferFlushing",
                        BUFFER_FLUSHED: "hlsBufferFlushed",
                        MANIFEST_LOADING: "hlsManifestLoading",
                        MANIFEST_LOADED: "hlsManifestLoaded",
                        MANIFEST_PARSED: "hlsManifestParsed",
                        LEVEL_SWITCHING: "hlsLevelSwitching",
                        LEVEL_SWITCHED: "hlsLevelSwitched",
                        LEVEL_LOADING: "hlsLevelLoading",
                        LEVEL_LOADED: "hlsLevelLoaded",
                        LEVEL_UPDATED: "hlsLevelUpdated",
                        LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                        AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                        AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                        AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                        AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                        AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                        SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                        SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                        SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                        SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                        SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                        INIT_PTS_FOUND: "hlsInitPtsFound",
                        FRAG_LOADING: "hlsFragLoading",
                        FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                        FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                        FRAG_LOADED: "hlsFragLoaded",
                        FRAG_DECRYPTED: "hlsFragDecrypted",
                        FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                        FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                        FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                        FRAG_PARSING_DATA: "hlsFragParsingData",
                        FRAG_PARSED: "hlsFragParsed",
                        FRAG_BUFFERED: "hlsFragBuffered",
                        FRAG_CHANGED: "hlsFragChanged",
                        FPS_DROP: "hlsFpsDrop",
                        FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                        ERROR: "hlsError",
                        DESTROYING: "hlsDestroying",
                        KEY_LOADING: "hlsKeyLoading",
                        KEY_LOADED: "hlsKeyLoaded",
                        STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
                        LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
                    }
                },
            "./src/hls.ts":
                /*!*********************************!*\
                  !*** ./src/hls.ts + 50 modules ***!
                  \*********************************/
                /*! exports provided: default */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/demux/demuxer-inline.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number-isFinite.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/demux/demuxer-worker.js */
                /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/eventemitter3/index.js (<- Module is not an ECMAScript module) */
                /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/url-toolkit/src/url-toolkit.js (<- Module is not an ECMAScript module) */
                function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n = {};
                    r.r(n), r.d(n, "newCue", (function() {
                        return gt
                    }));
                    var i, a, o = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                        s = r("./src/errors.ts"),
                        l = r("./src/polyfills/number-isFinite.js"),
                        c = r("./src/events.js"),
                        u = r("./src/utils/logger.js"),
                        d = {
                            hlsEventGeneric: !0,
                            hlsHandlerDestroying: !0,
                            hlsHandlerDestroyed: !0
                        },
                        f = function() {
                            function e(e) {
                                this.hls = void 0, this.handledEvents = void 0, this.useGenericHandler = void 0, this.hls = e, this.onEvent = this.onEvent.bind(this);
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners()
                            }
                            var t = e.prototype;
                            return t.destroy = function() {
                                this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
                            }, t.onHandlerDestroying = function() {}, t.onHandlerDestroyed = function() {}, t.isEventHandler = function() {
                                return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                            }, t.registerListeners = function() {
                                this.isEventHandler() && this.handledEvents.forEach((function(e) {
                                    if (d[e]) throw new Error("Forbidden event-name: " + e);
                                    this.hls.on(e, this.onEvent)
                                }), this)
                            }, t.unregisterListeners = function() {
                                this.isEventHandler() && this.handledEvents.forEach((function(e) {
                                    this.hls.off(e, this.onEvent)
                                }), this)
                            }, t.onEvent = function(e, t) {
                                this.onEventGeneric(e, t)
                            }, t.onEventGeneric = function(e, t) {
                                try {
                                    (function(e, t) {
                                        var r = "on" + e.replace("hls", "");
                                        if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                                        return this[r].bind(this, t)
                                    }).call(this, e, t).call()
                                } catch (t) {
                                    u.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger(c.default.ERROR, {
                                        type: s.ErrorTypes.OTHER_ERROR,
                                        details: s.ErrorDetails.INTERNAL_EXCEPTION,
                                        fatal: !1,
                                        event: e,
                                        err: t
                                    })
                                }
                            }, e
                        }();
                    ! function(e) {
                        e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack"
                    }(i || (i = {})),
                    function(e) {
                        e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle"
                    }(a || (a = {}));
                    var h = r("./src/demux/mp4demuxer.js");

                    function p(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var m, g = function() {
                        function e(e, t) {
                            this._uri = null, this.baseuri = void 0, this.reluri = void 0, this.method = null, this.key = null, this.iv = null, this.baseuri = e, this.reluri = t
                        }
                        var t, r, n;
                        return t = e, (r = [{
                            key: "uri",
                            get: function() {
                                return !this._uri && this.reluri && (this._uri = Object(o.buildAbsoluteURL)(this.baseuri, this.reluri, {
                                    alwaysNormalize: !0
                                })), this._uri
                            }
                        }]) && p(t.prototype, r), n && p(t, n), e
                    }();

                    function v(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }! function(e) {
                        e.AUDIO = "audio", e.VIDEO = "video"
                    }(m || (m = {}));
                    var y = function() {
                        function e() {
                            var e;
                            this._url = null, this._byteRange = null, this._decryptdata = null, this._elementaryStreams = ((e = {})[m.AUDIO] = !1, e[m.VIDEO] = !1, e), this.deltaPTS = 0, this.rawProgramDateTime = null, this.programDateTime = null, this.title = null, this.tagList = [], this.cc = void 0, this.type = void 0, this.relurl = void 0, this.baseurl = void 0, this.duration = void 0, this.start = void 0, this.sn = 0, this.urlId = 0, this.level = 0, this.levelkey = void 0, this.loader = void 0
                        }
                        var t, r, n, i = e.prototype;
                        return i.setByteRange = function(e, t) {
                            var r = e.split("@", 2),
                                n = [];
                            1 === r.length ? n[0] = t ? t.byteRangeEndOffset : 0 : n[0] = parseInt(r[1]), n[1] = parseInt(r[0]) + n[0], this._byteRange = n
                        }, i.addElementaryStream = function(e) {
                            this._elementaryStreams[e] = !0
                        }, i.hasElementaryStream = function(e) {
                            return !0 === this._elementaryStreams[e]
                        }, i.createInitializationVector = function(e) {
                            for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
                            return t
                        }, i.setDecryptDataFromLevelKey = function(e, t) {
                            var r = e;
                            return e && e.method && e.uri && !e.iv && ((r = new g(e.baseuri, e.reluri)).method = e.method, r.iv = this.createInitializationVector(t)), r
                        }, t = e, (r = [{
                            key: "url",
                            get: function() {
                                return !this._url && this.relurl && (this._url = Object(o.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                    alwaysNormalize: !0
                                })), this._url
                            },
                            set: function(e) {
                                this._url = e
                            }
                        }, {
                            key: "byteRange",
                            get: function() {
                                return this._byteRange ? this._byteRange : []
                            }
                        }, {
                            key: "byteRangeStartOffset",
                            get: function() {
                                return this.byteRange[0]
                            }
                        }, {
                            key: "byteRangeEndOffset",
                            get: function() {
                                return this.byteRange[1]
                            }
                        }, {
                            key: "decryptdata",
                            get: function() {
                                if (!this.levelkey && !this._decryptdata) return null;
                                if (!this._decryptdata && this.levelkey) {
                                    var e = this.sn;
                                    "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && u.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
                                }
                                return this._decryptdata
                            }
                        }, {
                            key: "endProgramDateTime",
                            get: function() {
                                if (null === this.programDateTime) return null;
                                if (!Object(l.isFiniteNumber)(this.programDateTime)) return null;
                                var e = Object(l.isFiniteNumber)(this.duration) ? this.duration : 0;
                                return this.programDateTime + 1e3 * e
                            }
                        }, {
                            key: "encrypted",
                            get: function() {
                                return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                            }
                        }]) && v(t.prototype, r), n && v(t, n), e
                    }();

                    function b(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var T = function() {
                            function e(e) {
                                this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
                            }
                            var t, r, n;
                            return t = e, (r = [{
                                key: "hasProgramDateTime",
                                get: function() {
                                    return !(!this.fragments[0] || !Object(l.isFiniteNumber)(this.fragments[0].programDateTime))
                                }
                            }]) && b(t.prototype, r), n && b(t, n), e
                        }(),
                        E = /^(\d+)x(\d+)$/,
                        S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                        w = function() {
                            function e(t) {
                                for (var r in "string" == typeof t && (t = e.parseAttrList(t)), t) t.hasOwnProperty(r) && (this[r] = t[r])
                            }
                            var t = e.prototype;
                            return t.decimalInteger = function(e) {
                                var t = parseInt(this[e], 10);
                                return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                            }, t.hexadecimalInteger = function(e) {
                                if (this[e]) {
                                    var t = (this[e] || "0x").slice(2);
                                    t = (1 & t.length ? "0" : "") + t;
                                    for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
                                    return r
                                }
                                return null
                            }, t.hexadecimalIntegerAsNumber = function(e) {
                                var t = parseInt(this[e], 16);
                                return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                            }, t.decimalFloatingPoint = function(e) {
                                return parseFloat(this[e])
                            }, t.enumeratedString = function(e) {
                                return this[e]
                            }, t.decimalResolution = function(e) {
                                var t = E.exec(this[e]);
                                if (null !== t) return {
                                    width: parseInt(t[1], 10),
                                    height: parseInt(t[2], 10)
                                }
                            }, e.parseAttrList = function(e) {
                                var t, r = {};
                                for (S.lastIndex = 0; null !== (t = S.exec(e));) {
                                    var n = t[2];
                                    0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)), r[t[1]] = n
                                }
                                return r
                            }, e
                        }(),
                        k = {
                            audio: {
                                a3ds: !0,
                                "ac-3": !0,
                                "ac-4": !0,
                                alac: !0,
                                alaw: !0,
                                dra1: !0,
                                "dts+": !0,
                                "dts-": !0,
                                dtsc: !0,
                                dtse: !0,
                                dtsh: !0,
                                "ec-3": !0,
                                enca: !0,
                                g719: !0,
                                g726: !0,
                                m4ae: !0,
                                mha1: !0,
                                mha2: !0,
                                mhm1: !0,
                                mhm2: !0,
                                mlpa: !0,
                                mp4a: !0,
                                "raw ": !0,
                                Opus: !0,
                                samr: !0,
                                sawb: !0,
                                sawp: !0,
                                sevc: !0,
                                sqcp: !0,
                                ssmv: !0,
                                twos: !0,
                                ulaw: !0
                            },
                            video: {
                                avc1: !0,
                                avc2: !0,
                                avc3: !0,
                                avc4: !0,
                                avcp: !0,
                                drac: !0,
                                dvav: !0,
                                dvhe: !0,
                                encv: !0,
                                hev1: !0,
                                hvc1: !0,
                                mjp2: !0,
                                mp4v: !0,
                                mvc1: !0,
                                mvc2: !0,
                                mvc3: !0,
                                mvc4: !0,
                                resv: !0,
                                rv60: !0,
                                s263: !0,
                                svc1: !0,
                                svc2: !0,
                                "vc-1": !0,
                                vp08: !0,
                                vp09: !0
                            }
                        };

                    function _(e, t) {
                        return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
                    }
                    var C = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
                        R = /#EXT-X-MEDIA:(.*)/g,
                        x = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                        P = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                        A = /\.(mp4|m4s|m4v|m4a)$/i,
                        O = function() {
                            function e() {}
                            return e.findGroup = function(e, t) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    if (n.id === t) return n
                                }
                            }, e.convertAVC1ToAVCOTI = function(e) {
                                var t, r = e.split(".");
                                return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t
                            }, e.resolve = function(e, t) {
                                return o.buildAbsoluteURL(t, e, {
                                    alwaysNormalize: !0
                                })
                            }, e.parseMasterPlaylist = function(t, r) {
                                var n, i = [];

                                function a(e, t) {
                                    ["video", "audio"].forEach((function(r) {
                                        var n = e.filter((function(e) {
                                            return function(e, t) {
                                                var r = k[t];
                                                return !!r && !0 === r[e.slice(0, 4)]
                                            }(e, r)
                                        }));
                                        if (n.length) {
                                            var i = n.filter((function(e) {
                                                return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                            }));
                                            t[r + "Codec"] = i.length > 0 ? i[0] : n[0], e = e.filter((function(e) {
                                                return -1 === n.indexOf(e)
                                            }))
                                        }
                                    })), t.unknownCodecs = e
                                }
                                for (C.lastIndex = 0; null != (n = C.exec(t));) {
                                    var o = {},
                                        s = o.attrs = new w(n[1]);
                                    o.url = e.resolve(n[2], r);
                                    var l = s.decimalResolution("RESOLUTION");
                                    l && (o.width = l.width, o.height = l.height), o.bitrate = s.decimalInteger("AVERAGE-BANDWIDTH") || s.decimalInteger("BANDWIDTH"), o.name = s.NAME, a([].concat((s.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = e.convertAVC1ToAVCOTI(o.videoCodec)), i.push(o)
                                }
                                return i
                            }, e.parseMasterPlaylistMedia = function(t, r, n, i) {
                                var a;
                                void 0 === i && (i = []);
                                var o = [],
                                    s = 0;
                                for (R.lastIndex = 0; null !== (a = R.exec(t));) {
                                    var l = new w(a[1]);
                                    if (l.TYPE === n) {
                                        var c = {
                                            id: s++,
                                            groupId: l["GROUP-ID"],
                                            name: l.NAME || l.LANGUAGE,
                                            type: n,
                                            default: "YES" === l.DEFAULT,
                                            autoselect: "YES" === l.AUTOSELECT,
                                            forced: "YES" === l.FORCED,
                                            lang: l.LANGUAGE
                                        };
                                        if (l.URI && (c.url = e.resolve(l.URI, r)), i.length) {
                                            var u = e.findGroup(i, c.groupId);
                                            c.audioCodec = u ? u.codec : i[0].codec
                                        }
                                        o.push(c)
                                    }
                                }
                                return o
                            }, e.parseLevelPlaylist = function(e, t, r, n, i) {
                                var a, o, s, c = 0,
                                    d = 0,
                                    f = new T(t),
                                    h = 0,
                                    p = null,
                                    m = new y,
                                    v = null;
                                for (x.lastIndex = 0; null !== (a = x.exec(e));) {
                                    var b = a[1];
                                    if (b) {
                                        m.duration = parseFloat(b);
                                        var E = (" " + a[2]).slice(1);
                                        m.title = E || null, m.tagList.push(E ? ["INF", b, E] : ["INF", b])
                                    } else if (a[3]) {
                                        if (Object(l.isFiniteNumber)(m.duration)) {
                                            var S = c++;
                                            m.type = n, m.start = d, s && (m.levelkey = s), m.sn = S, m.level = r, m.cc = h, m.urlId = i, m.baseurl = t, m.relurl = (" " + a[3]).slice(1), D(m, p), f.fragments.push(m), p = m, d += m.duration, m = new y
                                        }
                                    } else if (a[4]) {
                                        var k = (" " + a[4]).slice(1);
                                        p ? m.setByteRange(k, p) : m.setByteRange(k)
                                    } else if (a[5]) m.rawProgramDateTime = (" " + a[5]).slice(1), m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]), null === v && (v = f.fragments.length);
                                    else {
                                        if (!(a = a[0].match(P))) {
                                            u.logger.warn("No matches on slow regex match for level playlist!");
                                            continue
                                        }
                                        for (o = 1; o < a.length && void 0 === a[o]; o++);
                                        var _ = (" " + a[o + 1]).slice(1),
                                            C = (" " + a[o + 2]).slice(1);
                                        switch (a[o]) {
                                            case "#":
                                                m.tagList.push(C ? [_, C] : [_]);
                                                break;
                                            case "PLAYLIST-TYPE":
                                                f.type = _.toUpperCase();
                                                break;
                                            case "MEDIA-SEQUENCE":
                                                c = f.startSN = parseInt(_);
                                                break;
                                            case "TARGETDURATION":
                                                f.targetduration = parseFloat(_);
                                                break;
                                            case "VERSION":
                                                f.version = parseInt(_);
                                                break;
                                            case "EXTM3U":
                                                break;
                                            case "ENDLIST":
                                                f.live = !1;
                                                break;
                                            case "DIS":
                                                h++, m.tagList.push(["DIS"]);
                                                break;
                                            case "DISCONTINUITY-SEQ":
                                                h = parseInt(_);
                                                break;
                                            case "KEY":
                                                var R = new w(_),
                                                    O = R.enumeratedString("METHOD"),
                                                    L = R.URI,
                                                    I = R.hexadecimalInteger("IV");
                                                O && (s = new g(t, L), L && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(O) >= 0 && (s.method = O, s.key = null, s.iv = I));
                                                break;
                                            case "START":
                                                var M = new w(_).decimalFloatingPoint("TIME-OFFSET");
                                                Object(l.isFiniteNumber)(M) && (f.startTimeOffset = M);
                                                break;
                                            case "MAP":
                                                var N = new w(_);
                                                m.relurl = N.URI, N.BYTERANGE && m.setByteRange(N.BYTERANGE), m.baseurl = t, m.level = r, m.type = n, m.sn = "initSegment", f.initSegment = m, (m = new y).rawProgramDateTime = f.initSegment.rawProgramDateTime;
                                                break;
                                            default:
                                                u.logger.warn("line parsed but not handled: " + a)
                                        }
                                    }
                                }
                                return (m = p) && !m.relurl && (f.fragments.pop(), d -= m.duration), f.totalduration = d, f.averagetargetduration = d / f.fragments.length, f.endSN = c - 1, f.startCC = f.fragments[0] ? f.fragments[0].cc : 0, f.endCC = h, !f.initSegment && f.fragments.length && f.fragments.every((function(e) {
                                    return A.test(e.relurl)
                                })) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (m = new y).relurl = f.fragments[0].relurl, m.baseurl = t, m.level = r, m.type = n, m.sn = "initSegment", f.initSegment = m, f.needSidxRanges = !0), v && function(e, t) {
                                    for (var r = e[t], n = t - 1; n >= 0; n--) {
                                        var i = e[n];
                                        i.programDateTime = r.programDateTime - 1e3 * i.duration, r = i
                                    }
                                }(f.fragments, v), f
                            }, e
                        }();

                    function D(e, t) {
                        e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Object(l.isFiniteNumber)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
                    }
                    var L = window.performance,
                        I = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.MANIFEST_LOADING, c.default.LEVEL_LOADING, c.default.AUDIO_TRACK_LOADING, c.default.SUBTITLE_TRACK_LOADING) || this).loaders = {}, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.canHaveQualityLevels = function(e) {
                                return e !== i.AUDIO_TRACK && e !== i.SUBTITLE_TRACK
                            }, n.mapContextToLevelType = function(e) {
                                switch (e.type) {
                                    case i.AUDIO_TRACK:
                                        return a.AUDIO;
                                    case i.SUBTITLE_TRACK:
                                        return a.SUBTITLE;
                                    default:
                                        return a.MAIN
                                }
                            }, n.getResponseUrl = function(e, t) {
                                var r = e.url;
                                return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
                            };
                            var o = n.prototype;
                            return o.createInternalLoader = function(e) {
                                var t = this.hls.config,
                                    r = t.pLoader,
                                    n = t.loader,
                                    i = new(r || n)(t);
                                return e.loader = i, this.loaders[e.type] = i, i
                            }, o.getInternalLoader = function(e) {
                                return this.loaders[e.type]
                            }, o.resetInternalLoader = function(e) {
                                this.loaders[e] && delete this.loaders[e]
                            }, o.destroyInternalLoaders = function() {
                                for (var e in this.loaders) {
                                    var t = this.loaders[e];
                                    t && t.destroy(), this.resetInternalLoader(e)
                                }
                            }, o.destroy = function() {
                                this.destroyInternalLoaders(), e.prototype.destroy.call(this)
                            }, o.onManifestLoading = function(e) {
                                this.load({
                                    url: e.url,
                                    type: i.MANIFEST,
                                    level: 0,
                                    id: null,
                                    responseType: "text"
                                })
                            }, o.onLevelLoading = function(e) {
                                this.load({
                                    url: e.url,
                                    type: i.LEVEL,
                                    level: e.level,
                                    id: e.id,
                                    responseType: "text"
                                })
                            }, o.onAudioTrackLoading = function(e) {
                                this.load({
                                    url: e.url,
                                    type: i.AUDIO_TRACK,
                                    level: null,
                                    id: e.id,
                                    responseType: "text"
                                })
                            }, o.onSubtitleTrackLoading = function(e) {
                                this.load({
                                    url: e.url,
                                    type: i.SUBTITLE_TRACK,
                                    level: null,
                                    id: e.id,
                                    responseType: "text"
                                })
                            }, o.load = function(e) {
                                var t = this.hls.config;
                                u.logger.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
                                var r, n, a, o, s = this.getInternalLoader(e);
                                if (s) {
                                    var l = s.context;
                                    if (l && l.url === e.url) return u.logger.trace("playlist request ongoing"), !1;
                                    u.logger.warn("aborting previous loader for type: " + e.type), s.abort()
                                }
                                switch (e.type) {
                                    case i.MANIFEST:
                                        r = t.manifestLoadingMaxRetry, n = t.manifestLoadingTimeOut, a = t.manifestLoadingRetryDelay, o = t.manifestLoadingMaxRetryTimeout;
                                        break;
                                    case i.LEVEL:
                                        r = 0, o = 0, a = 0, n = t.levelLoadingTimeOut;
                                        break;
                                    default:
                                        r = t.levelLoadingMaxRetry, n = t.levelLoadingTimeOut, a = t.levelLoadingRetryDelay, o = t.levelLoadingMaxRetryTimeout
                                }
                                s = this.createInternalLoader(e);
                                var c = {
                                        timeout: n,
                                        maxRetry: r,
                                        retryDelay: a,
                                        maxRetryDelay: o
                                    },
                                    d = {
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };
                                return u.logger.debug("Calling internal loader delegate for URL: " + e.url), s.load(e, c, d), !0
                            }, o.loadsuccess = function(e, t, r, n) {
                                if (void 0 === n && (n = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, n);
                                if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader');
                                var i = e.data;
                                t.tload = L.now(), 0 === i.indexOf("#EXTM3U") ? i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, n) : this._handleMasterPlaylist(e, t, r, n) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", n)
                            }, o.loaderror = function(e, t, r) {
                                void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e)
                            }, o.loadtimeout = function(e, t, r) {
                                void 0 === r && (r = null), this._handleNetworkError(t, r, !0)
                            }, o._handleMasterPlaylist = function(e, t, r, i) {
                                var a = this.hls,
                                    o = e.data,
                                    s = n.getResponseUrl(e, r),
                                    l = O.parseMasterPlaylist(o, s);
                                if (l.length) {
                                    var d = l.map((function(e) {
                                            return {
                                                id: e.attrs.AUDIO,
                                                codec: e.audioCodec
                                            }
                                        })),
                                        f = O.parseMasterPlaylistMedia(o, s, "AUDIO", d),
                                        h = O.parseMasterPlaylistMedia(o, s, "SUBTITLES");
                                    if (f.length) {
                                        var p = !1;
                                        f.forEach((function(e) {
                                            e.url || (p = !0)
                                        })), !1 === p && l[0].audioCodec && !l[0].attrs.AUDIO && (u.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), f.unshift({
                                            type: "main",
                                            name: "main",
                                            default: !1,
                                            autoselect: !1,
                                            forced: !1,
                                            id: -1
                                        }))
                                    }
                                    a.trigger(c.default.MANIFEST_LOADED, {
                                        levels: l,
                                        audioTracks: f,
                                        subtitles: h,
                                        url: s,
                                        stats: t,
                                        networkDetails: i
                                    })
                                } else this._handleManifestParsingError(e, r, "no level found in manifest", i)
                            }, o._handleTrackOrLevelPlaylist = function(e, t, r, a) {
                                var o = this.hls,
                                    s = r.id,
                                    u = r.level,
                                    d = r.type,
                                    f = n.getResponseUrl(e, r),
                                    h = Object(l.isFiniteNumber)(s) ? s : 0,
                                    p = Object(l.isFiniteNumber)(u) ? u : h,
                                    m = n.mapContextToLevelType(r),
                                    g = O.parseLevelPlaylist(e.data, f, p, m, h);
                                if (g.tload = t.tload, d === i.MANIFEST) {
                                    var v = {
                                        url: f,
                                        details: g
                                    };
                                    o.trigger(c.default.MANIFEST_LOADED, {
                                        levels: [v],
                                        audioTracks: [],
                                        url: f,
                                        stats: t,
                                        networkDetails: a
                                    })
                                }
                                if (t.tparsed = L.now(), g.needSidxRanges) {
                                    var y = g.initSegment.url;
                                    this.load({
                                        url: y,
                                        isSidxRequest: !0,
                                        type: d,
                                        level: u,
                                        levelDetails: g,
                                        id: s,
                                        rangeStart: 0,
                                        rangeEnd: 2048,
                                        responseType: "arraybuffer"
                                    })
                                } else r.levelDetails = g, this._handlePlaylistLoaded(e, t, r, a)
                            }, o._handleSidxRequest = function(e, t) {
                                if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer");
                                var r = h.default.parseSegmentIndex(new Uint8Array(e.data));
                                if (r) {
                                    var n = r.references,
                                        i = t.levelDetails;
                                    n.forEach((function(e, t) {
                                        var r = e.info;
                                        if (i) {
                                            var n = i.fragments[t];
                                            0 === n.byteRange.length && n.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                                        }
                                    })), i && i.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                                }
                            }, o._handleManifestParsingError = function(e, t, r, n) {
                                this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.MANIFEST_PARSING_ERROR,
                                    fatal: !0,
                                    url: e.url,
                                    reason: r,
                                    networkDetails: n
                                })
                            }, o._handleNetworkError = function(e, t, r, n) {
                                var a, o;
                                void 0 === r && (r = !1), void 0 === n && (n = null), u.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                                var l = this.getInternalLoader(e);
                                switch (e.type) {
                                    case i.MANIFEST:
                                        a = r ? s.ErrorDetails.MANIFEST_LOAD_TIMEOUT : s.ErrorDetails.MANIFEST_LOAD_ERROR, o = !0;
                                        break;
                                    case i.LEVEL:
                                        a = r ? s.ErrorDetails.LEVEL_LOAD_TIMEOUT : s.ErrorDetails.LEVEL_LOAD_ERROR, o = !1;
                                        break;
                                    case i.AUDIO_TRACK:
                                        a = r ? s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, o = !1;
                                        break;
                                    default:
                                        o = !1
                                }
                                l && (l.abort(), this.resetInternalLoader(e.type));
                                var d = {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: a,
                                    fatal: o,
                                    url: e.url,
                                    loader: l,
                                    context: e,
                                    networkDetails: t
                                };
                                n && (d.response = n), this.hls.trigger(c.default.ERROR, d)
                            }, o._handlePlaylistLoaded = function(e, t, r, a) {
                                var o = r.type,
                                    s = r.level,
                                    l = r.id,
                                    u = r.levelDetails;
                                if (u && u.targetduration)
                                    if (n.canHaveQualityLevels(r.type)) this.hls.trigger(c.default.LEVEL_LOADED, {
                                        details: u,
                                        level: s || 0,
                                        id: l || 0,
                                        stats: t,
                                        networkDetails: a
                                    });
                                    else switch (o) {
                                        case i.AUDIO_TRACK:
                                            this.hls.trigger(c.default.AUDIO_TRACK_LOADED, {
                                                details: u,
                                                id: l,
                                                stats: t,
                                                networkDetails: a
                                            });
                                            break;
                                        case i.SUBTITLE_TRACK:
                                            this.hls.trigger(c.default.SUBTITLE_TRACK_LOADED, {
                                                details: u,
                                                id: l,
                                                stats: t,
                                                networkDetails: a
                                            })
                                    } else this._handleManifestParsingError(e, r, "invalid target duration", a)
                            }, n
                        }(f),
                        M = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.FRAG_LOADING) || this).loaders = {}, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                var t = this.loaders;
                                for (var r in t) {
                                    var n = t[r];
                                    n && n.destroy()
                                }
                                this.loaders = {}, e.prototype.destroy.call(this)
                            }, i.onFragLoading = function(e) {
                                var t = e.frag,
                                    r = t.type,
                                    n = this.loaders,
                                    i = this.hls.config,
                                    a = i.fLoader,
                                    o = i.loader;
                                t.loaded = 0;
                                var s, c, d, f = n[r];
                                f && (u.logger.warn("abort previous fragment loader for type: " + r), f.abort()), f = n[r] = t.loader = i.fLoader ? new a(i) : new o(i), s = {
                                    url: t.url,
                                    frag: t,
                                    responseType: "arraybuffer",
                                    progressData: !1
                                };
                                var h = t.byteRangeStartOffset,
                                    p = t.byteRangeEndOffset;
                                Object(l.isFiniteNumber)(h) && Object(l.isFiniteNumber)(p) && (s.rangeStart = h, s.rangeEnd = p), c = {
                                    timeout: i.fragLoadingTimeOut,
                                    maxRetry: 0,
                                    retryDelay: 0,
                                    maxRetryDelay: i.fragLoadingMaxRetryTimeout
                                }, d = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this),
                                    onProgress: this.loadprogress.bind(this)
                                }, f.load(s, c, d)
                            }, i.loadsuccess = function(e, t, r, n) {
                                void 0 === n && (n = null);
                                var i = e.data,
                                    a = r.frag;
                                a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(c.default.FRAG_LOADED, {
                                    payload: i,
                                    frag: a,
                                    stats: t,
                                    networkDetails: n
                                })
                            }, i.loaderror = function(e, t, r) {
                                void 0 === r && (r = null);
                                var n = t.frag,
                                    i = n.loader;
                                i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t.frag,
                                    response: e,
                                    networkDetails: r
                                })
                            }, i.loadtimeout = function(e, t, r) {
                                void 0 === r && (r = null);
                                var n = t.frag,
                                    i = n.loader;
                                i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t.frag,
                                    networkDetails: r
                                })
                            }, i.loadprogress = function(e, t, r, n) {
                                void 0 === n && (n = null);
                                var i = t.frag;
                                i.loaded = e.loaded, this.hls.trigger(c.default.FRAG_LOAD_PROGRESS, {
                                    frag: i,
                                    stats: e,
                                    networkDetails: n
                                })
                            }, n
                        }(f),
                        N = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.KEY_LOADING) || this).loaders = {}, r.decryptkey = null, r.decrypturl = null, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                for (var t in this.loaders) {
                                    var r = this.loaders[t];
                                    r && r.destroy()
                                }
                                this.loaders = {}, e.prototype.destroy.call(this)
                            }, i.onKeyLoading = function(e) {
                                var t = e.frag,
                                    r = t.type,
                                    n = this.loaders[r];
                                if (t.decryptdata) {
                                    var i = t.decryptdata.uri;
                                    if (i !== this.decrypturl || null === this.decryptkey) {
                                        var a = this.hls.config;
                                        if (n && (u.logger.warn("abort previous key loader for type:" + r), n.abort()), !i) return void u.logger.warn("key uri is falsy");
                                        t.loader = this.loaders[r] = new a.loader(a), this.decrypturl = i, this.decryptkey = null;
                                        var o = {
                                                url: i,
                                                frag: t,
                                                responseType: "arraybuffer"
                                            },
                                            s = {
                                                timeout: a.fragLoadingTimeOut,
                                                maxRetry: 0,
                                                retryDelay: a.fragLoadingRetryDelay,
                                                maxRetryDelay: a.fragLoadingMaxRetryTimeout
                                            },
                                            l = {
                                                onSuccess: this.loadsuccess.bind(this),
                                                onError: this.loaderror.bind(this),
                                                onTimeout: this.loadtimeout.bind(this)
                                            };
                                        t.loader.load(o, s, l)
                                    } else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(c.default.KEY_LOADED, {
                                        frag: t
                                    }))
                                } else u.logger.warn("Missing decryption data on fragment in onKeyLoading")
                            }, i.loadsuccess = function(e, t, r) {
                                var n = r.frag;
                                n.decryptdata ? (this.decryptkey = n.decryptdata.key = new Uint8Array(e.data), n.loader = void 0, delete this.loaders[n.type], this.hls.trigger(c.default.KEY_LOADED, {
                                    frag: n
                                })) : u.logger.error("after key load, decryptdata unset")
                            }, i.loaderror = function(e, t) {
                                var r = t.frag,
                                    n = r.loader;
                                n && n.abort(), delete this.loaders[r.type], this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.KEY_LOAD_ERROR,
                                    fatal: !1,
                                    frag: r,
                                    response: e
                                })
                            }, i.loadtimeout = function(e, t) {
                                var r = t.frag,
                                    n = r.loader;
                                n && n.abort(), delete this.loaders[r.type], this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.KEY_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: r
                                })
                            }, n
                        }(f),
                        F = "NOT_LOADED",
                        U = "APPENDING",
                        j = "PARTIAL",
                        B = "OK",
                        G = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.BUFFER_APPENDED, c.default.FRAG_BUFFERED, c.default.FRAG_LOADED) || this).bufferPadding = .2, r.fragments = Object.create(null), r.timeRanges = Object.create(null), r.config = t.config, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, f.prototype.destroy.call(this), e.prototype.destroy.call(this)
                            }, i.getBufferedFrag = function(e, t) {
                                var r = this.fragments,
                                    n = Object.keys(r).filter((function(n) {
                                        var i = r[n];
                                        if (i.body.type !== t) return !1;
                                        if (!i.buffered) return !1;
                                        var a = i.body;
                                        return a.startPTS <= e && e <= a.endPTS
                                    }));
                                if (0 === n.length) return null;
                                var i = n.pop();
                                return r[i].body
                            }, i.detectEvictedFragments = function(e, t) {
                                var r, n, i = this;
                                Object.keys(this.fragments).forEach((function(a) {
                                    var o = i.fragments[a];
                                    if (!0 === o.buffered) {
                                        var s = o.range[e];
                                        if (s) {
                                            r = s.time;
                                            for (var l = 0; l < r.length; l++)
                                                if (n = r[l], !1 === i.isTimeBuffered(n.startPTS, n.endPTS, t)) {
                                                    i.removeFragment(o.body);
                                                    break
                                                }
                                        }
                                    }
                                }))
                            }, i.detectPartialFragments = function(e) {
                                var t = this,
                                    r = this.getFragmentKey(e),
                                    n = this.fragments[r];
                                n && (n.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
                                    if (e.hasElementaryStream(r)) {
                                        var i = t.timeRanges[r];
                                        n.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, i)
                                    }
                                })))
                            }, i.getBufferedTimes = function(e, t, r) {
                                for (var n, i, a = [], o = !1, s = 0; s < r.length; s++) {
                                    if (n = r.start(s) - this.bufferPadding, i = r.end(s) + this.bufferPadding, e >= n && t <= i) {
                                        a.push({
                                            startPTS: Math.max(e, r.start(s)),
                                            endPTS: Math.min(t, r.end(s))
                                        });
                                        break
                                    }
                                    if (e < i && t > n) a.push({
                                        startPTS: Math.max(e, r.start(s)),
                                        endPTS: Math.min(t, r.end(s))
                                    }), o = !0;
                                    else if (t <= n) break
                                }
                                return {
                                    time: a,
                                    partial: o
                                }
                            }, i.getFragmentKey = function(e) {
                                return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                            }, i.getPartialFragment = function(e) {
                                var t, r, n, i = this,
                                    a = null,
                                    o = 0;
                                return Object.keys(this.fragments).forEach((function(s) {
                                    var l = i.fragments[s];
                                    i.isPartial(l) && (r = l.body.startPTS - i.bufferPadding, n = l.body.endPTS + i.bufferPadding, e >= r && e <= n && (t = Math.min(e - r, n - e), o <= t && (a = l.body, o = t)))
                                })), a
                            }, i.getState = function(e) {
                                var t = this.getFragmentKey(e),
                                    r = this.fragments[t],
                                    n = F;
                                return void 0 !== r && (n = r.buffered ? !0 === this.isPartial(r) ? j : B : U), n
                            }, i.isPartial = function(e) {
                                return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
                            }, i.isTimeBuffered = function(e, t, r) {
                                for (var n, i, a = 0; a < r.length; a++) {
                                    if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, e >= n && t <= i) return !0;
                                    if (t <= n) return !1
                                }
                                return !1
                            }, i.onFragLoaded = function(e) {
                                var t = e.frag;
                                Object(l.isFiniteNumber)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
                                    body: t,
                                    range: Object.create(null),
                                    buffered: !1
                                })
                            }, i.onBufferAppended = function(e) {
                                var t = this;
                                this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach((function(e) {
                                    var r = t.timeRanges[e];
                                    t.detectEvictedFragments(e, r)
                                }))
                            }, i.onFragBuffered = function(e) {
                                this.detectPartialFragments(e.frag)
                            }, i.hasFragment = function(e) {
                                var t = this.getFragmentKey(e);
                                return void 0 !== this.fragments[t]
                            }, i.removeFragment = function(e) {
                                var t = this.getFragmentKey(e);
                                delete this.fragments[t]
                            }, i.removeAllFragments = function() {
                                this.fragments = Object.create(null)
                            }, n
                        }(f),
                        z = {
                            search: function(e, t) {
                                for (var r = 0, n = e.length - 1, i = null, a = null; r <= n;) {
                                    var o = t(a = e[i = (r + n) / 2 | 0]);
                                    if (o > 0) r = i + 1;
                                    else {
                                        if (!(o < 0)) return a;
                                        n = i - 1
                                    }
                                }
                                return null
                            }
                        },
                        K = function() {
                            function e() {}
                            return e.isBuffered = function(e, t) {
                                try {
                                    if (e)
                                        for (var r = e.buffered, n = 0; n < r.length; n++)
                                            if (t >= r.start(n) && t <= r.end(n)) return !0
                                } catch (e) {}
                                return !1
                            }, e.bufferInfo = function(e, t, r) {
                                try {
                                    if (e) {
                                        var n, i = e.buffered,
                                            a = [];
                                        for (n = 0; n < i.length; n++) a.push({
                                            start: i.start(n),
                                            end: i.end(n)
                                        });
                                        return this.bufferedInfo(a, t, r)
                                    }
                                } catch (e) {}
                                return {
                                    len: 0,
                                    start: t,
                                    end: t,
                                    nextStart: void 0
                                }
                            }, e.bufferedInfo = function(e, t, r) {
                                e.sort((function(e, t) {
                                    var r = e.start - t.start;
                                    return r || t.end - e.end
                                }));
                                var n = [];
                                if (r)
                                    for (var i = 0; i < e.length; i++) {
                                        var a = n.length;
                                        if (a) {
                                            var o = n[a - 1].end;
                                            e[i].start - o < r ? e[i].end > o && (n[a - 1].end = e[i].end) : n.push(e[i])
                                        } else n.push(e[i])
                                    } else n = e;
                                for (var s, l = 0, c = t, u = t, d = 0; d < n.length; d++) {
                                    var f = n[d].start,
                                        h = n[d].end;
                                    if (t + r >= f && t < h) c = f, l = (u = h) - t;
                                    else if (t + r < f) {
                                        s = f;
                                        break
                                    }
                                }
                                return {
                                    len: l,
                                    start: c,
                                    end: u,
                                    nextStart: s
                                }
                            }, e
                        }(),
                        V = r("./node_modules/eventemitter3/index.js"),
                        H = r("./node_modules/webworkify-webpack/index.js"),
                        W = r("./src/demux/demuxer-inline.js");

                    function Y() {
                        return window.MediaSource || window.WebKitMediaSource
                    }
                    var q = r("./src/utils/get-self-scope.js"),
                        X = function(e) {
                            var t, r;

                            function n() {
                                return e.apply(this, arguments) || this
                            }
                            return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.trigger = function(e) {
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                this.emit.apply(this, [e, e].concat(r))
                            }, n
                        }(V.EventEmitter),
                        $ = Object(q.getSelfScope)(),
                        Q = Y() || {
                            isTypeSupported: function() {
                                return !1
                            }
                        },
                        J = function() {
                            function e(e, t) {
                                var r = this;
                                this.hls = e, this.id = t;
                                var n = this.observer = new X,
                                    i = e.config,
                                    a = function(t, n) {
                                        (n = n || {}).frag = r.frag, n.id = r.id, e.trigger(t, n)
                                    };
                                n.on(c.default.FRAG_DECRYPTED, a), n.on(c.default.FRAG_PARSING_INIT_SEGMENT, a), n.on(c.default.FRAG_PARSING_DATA, a), n.on(c.default.FRAG_PARSED, a), n.on(c.default.ERROR, a), n.on(c.default.FRAG_PARSING_METADATA, a), n.on(c.default.FRAG_PARSING_USERDATA, a), n.on(c.default.INIT_PTS_FOUND, a);
                                var o = {
                                        mp4: Q.isTypeSupported("video/mp4"),
                                        mpeg: Q.isTypeSupported("audio/mpeg"),
                                        mp3: Q.isTypeSupported('audio/mp4; codecs="mp3"')
                                    },
                                    l = navigator.vendor;
                                if (i.enableWorker && "undefined" != typeof Worker) {
                                    var d;
                                    u.logger.log("demuxing in webworker");
                                    try {
                                        d = this.w = H( /*! ../demux/demuxer-worker.js */ "./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), d.addEventListener("message", this.onwmsg), d.onerror = function(t) {
                                            e.trigger(c.default.ERROR, {
                                                type: s.ErrorTypes.OTHER_ERROR,
                                                details: s.ErrorDetails.INTERNAL_EXCEPTION,
                                                fatal: !0,
                                                event: "demuxerWorker",
                                                err: {
                                                    message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                                }
                                            })
                                        }, d.postMessage({
                                            cmd: "init",
                                            typeSupported: o,
                                            vendor: l,
                                            id: t,
                                            config: JSON.stringify(i)
                                        })
                                    } catch (e) {
                                        u.logger.warn("Error in worker:", e), u.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), d && $.URL.revokeObjectURL(d.objectURL), this.demuxer = new W.default(n, o, i, l), this.w = void 0
                                    }
                                } else this.demuxer = new W.default(n, o, i, l)
                            }
                            var t = e.prototype;
                            return t.destroy = function() {
                                var e = this.w;
                                if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                                else {
                                    var t = this.demuxer;
                                    t && (t.destroy(), this.demuxer = null)
                                }
                                var r = this.observer;
                                r && (r.removeAllListeners(), this.observer = null)
                            }, t.push = function(e, t, r, n, i, a, o, s) {
                                var c = this.w,
                                    d = Object(l.isFiniteNumber)(i.startPTS) ? i.startPTS : i.start,
                                    f = i.decryptdata,
                                    h = this.frag,
                                    p = !(h && i.cc === h.cc),
                                    m = !(h && i.level === h.level),
                                    g = h && i.sn === h.sn + 1,
                                    v = !m && g;
                                if (p && u.logger.log(this.id + ":discontinuity detected"), m && u.logger.log(this.id + ":switch detected"), this.frag = i, c) c.postMessage({
                                    cmd: "demux",
                                    data: e,
                                    decryptdata: f,
                                    initSegment: t,
                                    audioCodec: r,
                                    videoCodec: n,
                                    timeOffset: d,
                                    discontinuity: p,
                                    trackSwitch: m,
                                    contiguous: v,
                                    duration: a,
                                    accurateTimeOffset: o,
                                    defaultInitPTS: s
                                }, e instanceof ArrayBuffer ? [e] : []);
                                else {
                                    var y = this.demuxer;
                                    y && y.push(e, f, t, r, n, d, p, m, v, a, o, s)
                                }
                            }, t.onWorkerMessage = function(e) {
                                var t = e.data,
                                    r = this.hls;
                                switch (t.event) {
                                    case "init":
                                        $.URL.revokeObjectURL(this.w.objectURL);
                                        break;
                                    case c.default.FRAG_PARSING_DATA:
                                        t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                                    default:
                                        t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
                                }
                            }, e
                        }();

                    function Z(e, t, r) {
                        switch (t) {
                            case "audio":
                                e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
                                break;
                            case "text":
                                e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
                        }
                    }

                    function ee(e, t, r) {
                        var n = e[t],
                            i = e[r],
                            a = i.startPTS;
                        Object(l.isFiniteNumber)(a) ? r > t ? (n.duration = a - n.start, n.duration < 0 && u.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (i.duration = n.start - a, i.duration < 0 && u.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : i.start = r > t ? n.start + n.duration : Math.max(n.start - i.duration, 0)
                    }

                    function te(e, t, r, n, i, a) {
                        var o = r;
                        if (Object(l.isFiniteNumber)(t.startPTS)) {
                            var s = Math.abs(t.startPTS - r);
                            Object(l.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(s, t.deltaPTS) : t.deltaPTS = s, o = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), n = Math.max(n, t.endPTS), i = Math.min(i, t.startDTS), a = Math.max(a, t.endDTS)
                        }
                        var c = r - t.start;
                        t.start = t.startPTS = r, t.maxStartPTS = o, t.endPTS = n, t.startDTS = i, t.endDTS = a, t.duration = n - r;
                        var u, d, f, h = t.sn;
                        if (!e || h < e.startSN || h > e.endSN) return 0;
                        for (u = h - e.startSN, (d = e.fragments)[u] = t, f = u; f > 0; f--) ee(d, f, f - 1);
                        for (f = u; f < d.length - 1; f++) ee(d, f, f + 1);
                        return e.PTSKnown = !0, c
                    }

                    function re(e, t) {
                        t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
                        var r, n = 0;
                        if (ne(e, t, (function(e, i) {
                                n = e.cc - i.cc, Object(l.isFiniteNumber)(e.startPTS) && (i.start = i.startPTS = e.startPTS, i.endPTS = e.endPTS, i.duration = e.duration, i.backtracked = e.backtracked, i.dropped = e.dropped, r = i), t.PTSKnown = !0
                            })), t.PTSKnown) {
                            if (n) {
                                u.logger.log("discontinuity sliding from playlist, take drift into account");
                                for (var i = t.fragments, a = 0; a < i.length; a++) i[a].cc += n
                            }
                            r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function(e, t) {
                                var r = t.startSN - e.startSN,
                                    n = e.fragments,
                                    i = t.fragments;
                                if (!(r < 0 || r > n.length))
                                    for (var a = 0; a < i.length; a++) i[a].start += n[r].start
                            }(e, t), t.PTSKnown = e.PTSKnown
                        }
                    }

                    function ne(e, t, r) {
                        if (e && t)
                            for (var n = Math.max(e.startSN, t.startSN) - t.startSN, i = Math.min(e.endSN, t.endSN) - t.startSN, a = t.startSN - e.startSN, o = n; o <= i; o++) {
                                var s = e.fragments[a + o],
                                    l = t.fragments[o];
                                if (!s || !l) break;
                                r(s, l, o)
                            }
                    }

                    function ie(e, t, r) {
                        var n = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                            i = n / 2;
                        return e && t.endSN === e.endSN && (n = i), r && (n = Math.max(i, n - (window.performance.now() - r))), Math.round(n)
                    }
                    var ae = {
                        toString: function(e) {
                            for (var t = "", r = e.length, n = 0; n < r; n++) t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
                            return t
                        }
                    };

                    function oe(e, t) {
                        t.fragments.forEach((function(t) {
                            if (t) {
                                var r = t.start + e;
                                t.start = t.startPTS = r, t.endPTS = r + t.duration
                            }
                        })), t.PTSKnown = !0
                    }

                    function se(e, t, r) {
                        ! function(e, t, r) {
                            if (function(e, t, r) {
                                    var n = !1;
                                    return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (n = !0), n
                                }(e, r, t)) {
                                var n = function(e, t) {
                                    var r = e.fragments,
                                        n = t.fragments;
                                    if (n.length && r.length) {
                                        var i = function(e, t) {
                                            for (var r = null, n = 0; n < e.length; n += 1) {
                                                var i = e[n];
                                                if (i && i.cc === t) {
                                                    r = i;
                                                    break
                                                }
                                            }
                                            return r
                                        }(r, n[0].cc);
                                        if (i && (!i || i.startPTS)) return i;
                                        u.logger.log("No frag in previous level to align on")
                                    } else u.logger.log("No fragments to align")
                                }(r.details, t);
                                n && (u.logger.log("Adjusting PTS using last level due to CC increase within current level"), oe(n.start, t))
                            }
                        }(e, r, t), !r.PTSKnown && t && function(e, t) {
                            if (t && t.fragments.length) {
                                if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
                                var r = t.fragments[0].programDateTime,
                                    n = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
                                Object(l.isFiniteNumber)(n) && (u.logger.log("adjusting PTS using programDateTime delta, sliding:" + n.toFixed(3)), oe(n, e))
                            }
                        }(r, t.details)
                    }

                    function le(e, t, r) {
                        if (null === t || !Array.isArray(e) || !e.length || !Object(l.isFiniteNumber)(t)) return null;
                        if (t < (e[0].programDateTime || 0)) return null;
                        if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
                        r = r || 0;
                        for (var n = 0; n < e.length; ++n) {
                            var i = e[n];
                            if (de(t, r, i)) return i
                        }
                        return null
                    }

                    function ce(e, t, r, n) {
                        void 0 === r && (r = 0), void 0 === n && (n = 0);
                        var i = e ? t[e.sn - t[0].sn + 1] : null;
                        return i && !ue(r, n, i) ? i : z.search(t, ue.bind(null, r, n))
                    }

                    function ue(e, t, r) {
                        void 0 === e && (e = 0), void 0 === t && (t = 0);
                        var n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                        return r.start + r.duration - n <= e ? 1 : r.start - n > e && r.start ? -1 : 0
                    }

                    function de(e, t, r) {
                        var n = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                        return (r.endProgramDateTime || 0) - n > e
                    }
                    var fe = function() {
                        function e(e, t, r, n) {
                            this.config = e, this.media = t, this.fragmentTracker = r, this.hls = n, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1
                        }
                        var t = e.prototype;
                        return t.poll = function(e) {
                            var t = this.config,
                                r = this.media,
                                n = this.stalled,
                                i = r.currentTime,
                                a = r.seeking,
                                o = this.seeking && !a,
                                s = !this.seeking && a;
                            if (this.seeking = a, i === e) {
                                if ((s || o) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
                                    var l = K.bufferInfo(r, i, 0),
                                        c = l.len > 0,
                                        d = l.nextStart || 0;
                                    if (c || d) {
                                        if (a) {
                                            if (l.len > 2 || !d || d - i > 2) return;
                                            this.moved = !1
                                        }
                                        if (!this.moved && this.stalled) {
                                            var f = Math.max(d, l.start || 0) - i;
                                            if (f > 0 && f <= 2) return void this._trySkipBufferHole(null)
                                        }
                                        var h = self.performance.now();
                                        if (null !== n) {
                                            var p = h - n;
                                            !a && p >= 250 && this._reportStall(l.len);
                                            var m = K.bufferInfo(r, i, t.maxBufferHole);
                                            this._tryFixBufferStall(m, p)
                                        } else this.stalled = h
                                    }
                                }
                            } else if (this.moved = !0, null !== n) {
                                if (this.stallReported) {
                                    var g = self.performance.now() - n;
                                    u.logger.warn("playback not stuck anymore @" + i + ", after " + Math.round(g) + "ms"), this.stallReported = !1
                                }
                                this.stalled = null, this.nudgeRetry = 0
                            }
                        }, t._tryFixBufferStall = function(e, t) {
                            var r = this.config,
                                n = this.fragmentTracker,
                                i = this.media.currentTime,
                                a = n.getPartialFragment(i);
                            a && this._trySkipBufferHole(a) || e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (u.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                        }, t._reportStall = function(e) {
                            var t = this.hls,
                                r = this.media;
                            this.stallReported || (this.stallReported = !0, u.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(c.default.ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !1,
                                buffer: e
                            }))
                        }, t._trySkipBufferHole = function(e) {
                            for (var t = this.config, r = this.hls, n = this.media, i = n.currentTime, a = 0, o = 0; o < n.buffered.length; o++) {
                                var l = n.buffered.start(o);
                                if (i + t.maxBufferHole >= a && i < l) {
                                    var d = Math.max(l + .05, n.currentTime + .1);
                                    return u.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + d), this.moved = !0, this.stalled = null, n.currentTime = d, e && r.trigger(c.default.ERROR, {
                                        type: s.ErrorTypes.MEDIA_ERROR,
                                        details: s.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                        fatal: !1,
                                        reason: "fragment loaded with buffer holes, seeking from " + i + " to " + d,
                                        frag: e
                                    }), d
                                }
                                a = n.buffered.end(o)
                            }
                            return 0
                        }, t._tryNudgeBuffer = function() {
                            var e = this.config,
                                t = this.hls,
                                r = this.media,
                                n = r.currentTime,
                                i = (this.nudgeRetry || 0) + 1;
                            if (this.nudgeRetry = i, i < e.nudgeMaxRetry) {
                                var a = n + i * e.nudgeOffset;
                                u.logger.warn("Nudging 'currentTime' from " + n + " to " + a), r.currentTime = a, t.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    details: s.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                    fatal: !1
                                })
                            } else u.logger.error("Playhead still not moving while enough data buffered @" + n + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(c.default.ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !0
                            })
                        }, e
                    }();

                    function he(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }
                    var pe = function(e) {
                            var t, r;

                            function n(t) {
                                for (var r, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                                return (r = e.call.apply(e, [this, t].concat(i)) || this)._boundTick = void 0, r._tickTimer = null, r._tickInterval = null, r._tickCallCount = 0, r._boundTick = r.tick.bind(he(r)), r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.onHandlerDestroying = function() {
                                this.clearNextTick(), this.clearInterval()
                            }, i.hasInterval = function() {
                                return !!this._tickInterval
                            }, i.hasNextTick = function() {
                                return !!this._tickTimer
                            }, i.setInterval = function(e) {
                                return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
                            }, i.clearInterval = function() {
                                return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                            }, i.clearNextTick = function() {
                                return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                            }, i.tick = function() {
                                this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
                            }, i.doTick = function() {}, n
                        }(f),
                        me = "STOPPED",
                        ge = "STARTING",
                        ve = "IDLE",
                        ye = "PAUSED",
                        be = "KEY_LOADING",
                        Te = "FRAG_LOADING",
                        Ee = "FRAG_LOADING_WAITING_RETRY",
                        Se = "WAITING_TRACK",
                        we = "PARSING",
                        ke = "PARSED",
                        _e = "BUFFER_FLUSHING",
                        Ce = "ENDED",
                        Re = "ERROR",
                        xe = "WAITING_INIT_PTS",
                        Pe = "WAITING_LEVEL",
                        Ae = function(e) {
                            var t, r;

                            function n() {
                                return e.apply(this, arguments) || this
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.doTick = function() {}, i.startLoad = function() {}, i.stopLoad = function() {
                                var e = this.fragCurrent;
                                e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = me
                            }, i._streamEnded = function(e, t) {
                                var r = this.fragCurrent,
                                    n = this.fragmentTracker;
                                if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
                                    var i = n.getState(r);
                                    return i === j || i === B
                                }
                                return !1
                            }, i.onMediaSeeking = function() {
                                var e = this.config,
                                    t = this.media,
                                    r = this.mediaBuffer,
                                    n = this.state,
                                    i = t ? t.currentTime : null,
                                    a = K.bufferInfo(r || t, i, this.config.maxBufferHole);
                                if (Object(l.isFiniteNumber)(i) && u.logger.log("media seeking to " + i.toFixed(3)), n === Te) {
                                    var o = this.fragCurrent;
                                    if (0 === a.len && o) {
                                        var s = e.maxFragLookUpTolerance,
                                            c = o.start - s,
                                            d = o.start + o.duration + s;
                                        i < c || i > d ? (o.loader && (u.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = ve) : u.logger.log("seeking outside of buffer but within currently loaded fragment range")
                                    }
                                } else n === Ce && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = ve);
                                t && (this.lastCurrentTime = i), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = i), this.tick()
                            }, i.onMediaEnded = function() {
                                this.startPosition = this.lastCurrentTime = 0
                            }, i.onHandlerDestroying = function() {
                                this.stopLoad(), e.prototype.onHandlerDestroying.call(this)
                            }, i.onHandlerDestroyed = function() {
                                this.state = me, this.fragmentTracker = null
                            }, i.computeLivePosition = function(e, t) {
                                var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                                return e + Math.max(0, t.totalduration - r)
                            }, n
                        }(pe);

                    function Oe(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var De = function(e) {
                        var t, r;

                        function n(t, r) {
                            var n;
                            return (n = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHING, c.default.MANIFEST_LOADING, c.default.MANIFEST_PARSED, c.default.LEVEL_LOADED, c.default.KEY_LOADED, c.default.FRAG_LOADED, c.default.FRAG_LOAD_EMERGENCY_ABORTED, c.default.FRAG_PARSING_INIT_SEGMENT, c.default.FRAG_PARSING_DATA, c.default.FRAG_PARSED, c.default.ERROR, c.default.AUDIO_TRACK_SWITCHING, c.default.AUDIO_TRACK_SWITCHED, c.default.BUFFER_CREATED, c.default.BUFFER_APPENDED, c.default.BUFFER_FLUSHED) || this).fragmentTracker = r, n.config = t.config, n.audioCodecSwap = !1, n._state = me, n.stallReported = !1, n.gapController = null, n.altAudio = !1, n
                        }
                        r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                        var i, o, d, f = n.prototype;
                        return f.startLoad = function(e) {
                            if (this.levels) {
                                var t = this.lastCurrentTime,
                                    r = this.hls;
                                if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                    var n = r.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
                                }
                                t > 0 && -1 === e && (u.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = ve, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                            } else this.forceStartLoad = !0, this.state = me
                        }, f.stopLoad = function() {
                            this.forceStartLoad = !1, e.prototype.stopLoad.call(this)
                        }, f.doTick = function() {
                            switch (this.state) {
                                case _e:
                                    this.fragLoadError = 0;
                                    break;
                                case ve:
                                    this._doTickIdle();
                                    break;
                                case Pe:
                                    var e = this.levels[this.level];
                                    e && e.details && (this.state = ve);
                                    break;
                                case Ee:
                                    var t = window.performance.now(),
                                        r = this.retryDate;
                                    (!r || t >= r || this.media && this.media.seeking) && (u.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = ve)
                            }
                            this._checkBuffer(), this._checkFragmentChanged()
                        }, f._doTickIdle = function() {
                            var e = this.hls,
                                t = e.config,
                                r = this.media;
                            if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
                                var n;
                                n = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                                var i = e.nextLoadLevel,
                                    a = this.levels[i];
                                if (a) {
                                    var o, s = a.bitrate;
                                    o = s ? Math.max(8 * t.maxBufferSize / s, t.maxBufferLength) : t.maxBufferLength, o = Math.min(o, t.maxMaxBufferLength);
                                    var l = K.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, n, t.maxBufferHole),
                                        d = l.len;
                                    if (!(d >= o)) {
                                        u.logger.trace("buffer length of " + d.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = i;
                                        var f = a.details;
                                        if (!f || f.live && this.levelLastLoaded !== i) this.state = Pe;
                                        else {
                                            if (this._streamEnded(l, f)) {
                                                var h = {};
                                                return this.altAudio && (h.type = "video"), this.hls.trigger(c.default.BUFFER_EOS, h), void(this.state = Ce)
                                            }
                                            this._fetchPayloadOrEos(n, l, f)
                                        }
                                    }
                                }
                            }
                        }, f._fetchPayloadOrEos = function(e, t, r) {
                            var n = this.fragPrevious,
                                i = this.level,
                                a = r.fragments,
                                o = a.length;
                            if (0 !== o) {
                                var s, l = a[0].start,
                                    c = a[o - 1].start + a[o - 1].duration,
                                    d = t.end;
                                if (r.initSegment && !r.initSegment.data) s = r.initSegment;
                                else if (r.live) {
                                    var f = this.config.initialLiveManifestSize;
                                    if (o < f) return void u.logger.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + f);
                                    if (null === (s = this._ensureFragmentAtLivePoint(r, d, l, c, n, a, o))) return
                                } else d < l && (s = a[0]);
                                s || (s = this._findFragment(l, n, o, a, d, c, r)), s && (s.encrypted ? (u.logger.log("Loading key for " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i), this._loadKey(s)) : (u.logger.log("Loading " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + d.toFixed(3)), this._loadFragment(s)))
                            }
                        }, f._ensureFragmentAtLivePoint = function(e, t, r, n, i, a, o) {
                            var s, l = this.hls.config,
                                c = this.media,
                                d = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * e.targetduration;
                            if (t < Math.max(r - l.maxFragLookUpTolerance, n - d)) {
                                var f = this.liveSyncPosition = this.computeLivePosition(r, e);
                                u.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + f.toFixed(3)), t = f, c && !c.paused && c.readyState && c.duration > f && (c.currentTime = f), this.nextLoadPosition = f
                            }
                            if (e.PTSKnown && t > n && c && c.readyState) return null;
                            if (this.startFragRequested && !e.PTSKnown) {
                                if (i)
                                    if (e.hasProgramDateTime) u.logger.log("live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), s = le(a, i.endProgramDateTime, l.maxFragLookUpTolerance);
                                    else {
                                        var h = i.sn + 1;
                                        if (h >= e.startSN && h <= e.endSN) {
                                            var p = a[h - e.startSN];
                                            i.cc === p.cc && (s = p, u.logger.log("live playlist, switching playlist, load frag with next SN: " + s.sn))
                                        }
                                        s || (s = z.search(a, (function(e) {
                                            return i.cc - e.cc
                                        }))) && u.logger.log("live playlist, switching playlist, load frag with same CC: " + s.sn)
                                    }
                                s || (s = a[Math.min(o - 1, Math.round(o / 2))], u.logger.log("live playlist, switching playlist, unknown, load middle frag : " + s.sn))
                            }
                            return s
                        }, f._findFragment = function(e, t, r, n, i, a, o) {
                            var s, l = this.hls.config;
                            if (s = i < a ? ce(t, n, i, i > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : n[r - 1]) {
                                var c = s.sn - o.startSN,
                                    d = t && s.level === t.level,
                                    f = n[c - 1],
                                    h = n[c + 1];
                                if (t && s.sn === t.sn)
                                    if (d && !s.backtracked)
                                        if (s.sn < o.endSN) {
                                            var p = t.deltaPTS;
                                            p && p > l.maxBufferHole && t.dropped && c ? (s = f, u.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (s = h, u.logger.log("Re-loading fragment with SN: " + s.sn))
                                        } else s = null;
                                else s.backtracked && (h && h.backtracked ? (u.logger.warn("Already backtracked from fragment " + h.sn + ", will not backtrack to fragment " + s.sn + ". Loading fragment " + h.sn), s = h) : (u.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), s.dropped = 0, f ? (s = f).backtracked = !0 : c && (s = null)))
                            }
                            return s
                        }, f._loadKey = function(e) {
                            this.state = be, this.hls.trigger(c.default.KEY_LOADING, {
                                frag: e
                            })
                        }, f._loadFragment = function(e) {
                            var t = this.fragmentTracker.getState(e);
                            this.fragCurrent = e, "initSegment" !== e.sn && (this.startFragRequested = !0), Object(l.isFiniteNumber)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration), e.backtracked || t === F || t === j ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, this.hls.trigger(c.default.FRAG_LOADING, {
                                frag: e
                            }), this.demuxer || (this.demuxer = new J(this.hls, "main")), this.state = Te) : t === U && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
                        }, f.getBufferedFrag = function(e) {
                            return this.fragmentTracker.getBufferedFrag(e, a.MAIN)
                        }, f.followingBufferedFrag = function(e) {
                            return e ? this.getBufferedFrag(e.endPTS + .5) : null
                        }, f._checkFragmentChanged = function() {
                            var e, t, r = this.media;
                            if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), K.isBuffered(r, t) ? e = this.getBufferedFrag(t) : K.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
                                var n = e;
                                if (n !== this.fragPlaying) {
                                    this.hls.trigger(c.default.FRAG_CHANGED, {
                                        frag: n
                                    });
                                    var i = n.level;
                                    this.fragPlaying && this.fragPlaying.level === i || this.hls.trigger(c.default.LEVEL_SWITCHED, {
                                        level: i
                                    }), this.fragPlaying = n
                                }
                            }
                        }, f.immediateLevelSwitch = function() {
                            if (u.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                                this.immediateSwitch = !0;
                                var e, t = this.media;
                                t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                            }
                            var r = this.fragCurrent;
                            r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                        }, f.immediateLevelSwitchEnd = function() {
                            var e = this.media;
                            e && e.buffered.length && (this.immediateSwitch = !1, K.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                        }, f.nextLevelSwitch = function() {
                            var e = this.media;
                            if (e && e.readyState) {
                                var t, r, n;
                                if ((r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
                                else {
                                    var i = this.hls.nextLoadLevel,
                                        a = this.levels[i],
                                        o = this.fragLastKbps;
                                    t = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                                }
                                if ((n = this.getBufferedFrag(e.currentTime + t)) && (n = this.followingBufferedFrag(n))) {
                                    var s = this.fragCurrent;
                                    s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
                                }
                            }
                        }, f.flushMainBuffer = function(e, t) {
                            this.state = _e;
                            var r = {
                                startOffset: e,
                                endOffset: t
                            };
                            this.altAudio && (r.type = "video"), this.hls.trigger(c.default.BUFFER_FLUSHING, r)
                        }, f.onMediaAttached = function(e) {
                            var t = this.media = this.mediaBuffer = e.media;
                            this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                            var r = this.config;
                            this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new fe(r, t, this.fragmentTracker, this.hls)
                        }, f.onMediaDetaching = function() {
                            var e = this.media;
                            e && e.ended && (u.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                            var t = this.levels;
                            t && t.forEach((function(e) {
                                e.details && e.details.fragments.forEach((function(e) {
                                    e.backtracked = void 0
                                }))
                            })), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.fragmentTracker.removeAllFragments(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                        }, f.onMediaSeeked = function() {
                            var e = this.media,
                                t = e ? e.currentTime : void 0;
                            Object(l.isFiniteNumber)(t) && u.logger.log("media seeked to " + t.toFixed(3)), this.tick()
                        }, f.onManifestLoading = function() {
                            u.logger.log("trigger BUFFER_RESET"), this.hls.trigger(c.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                        }, f.onManifestParsed = function(e) {
                            var t, r = !1,
                                n = !1;
                            e.levels.forEach((function(e) {
                                (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (n = !0))
                            })), this.audioCodecSwitch = r && n, this.audioCodecSwitch && u.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.altAudio = e.altAudio, this.levels = e.levels, this.startFragRequested = !1;
                            var i = this.config;
                            (i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition)
                        }, f.onLevelLoaded = function(e) {
                            var t = e.details,
                                r = e.level,
                                n = this.levels[this.levelLastLoaded],
                                i = this.levels[r],
                                a = t.totalduration,
                                o = 0;
                            if (u.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
                                var s = i.details;
                                s && t.fragments.length > 0 ? (re(s, t), o = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), t.PTSKnown && Object(l.isFiniteNumber)(o) ? u.logger.log("live playlist sliding:" + o.toFixed(3)) : (u.logger.log("live playlist - outdated PTS, unknown sliding"), se(this.fragPrevious, n, t))) : (u.logger.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, se(this.fragPrevious, n, t))
                            } else t.PTSKnown = !1;
                            if (i.details = t, this.levelLastLoaded = r, this.hls.trigger(c.default.LEVEL_UPDATED, {
                                    details: t,
                                    level: r
                                }), !1 === this.startFragRequested) {
                                if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                    var d = t.startTimeOffset;
                                    Object(l.isFiniteNumber)(d) ? (d < 0 && (u.logger.log("negative start time offset " + d + ", count from end of last fragment"), d = o + a + d), u.logger.log("start time offset found in playlist, adjust startPosition to " + d), this.startPosition = d) : t.live ? (this.startPosition = this.computeLivePosition(o, t), u.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
                                }
                                this.nextLoadPosition = this.startPosition
                            }
                            this.state === Pe && (this.state = ve), this.tick()
                        }, f.onKeyLoaded = function() {
                            this.state === be && (this.state = ve, this.tick())
                        }, f.onFragLoaded = function(e) {
                            var t = this.fragCurrent,
                                r = this.hls,
                                n = this.levels,
                                i = this.media,
                                a = e.frag;
                            if (this.state === Te && t && "main" === a.type && a.level === t.level && a.sn === t.sn) {
                                var o = e.stats,
                                    s = n[t.level],
                                    l = s.details;
                                if (this.bitrateTest = !1, this.stats = o, u.logger.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), a.bitrateTest && r.nextLoadLevel) this.state = ve, this.startFragRequested = !1, o.tparsed = o.tbuffered = window.performance.now(), r.trigger(c.default.FRAG_BUFFERED, {
                                    stats: o,
                                    frag: t,
                                    id: "main"
                                }), this.tick();
                                else if ("initSegment" === a.sn) this.state = ve, o.tparsed = o.tbuffered = window.performance.now(), l.initSegment.data = e.payload, r.trigger(c.default.FRAG_BUFFERED, {
                                    stats: o,
                                    frag: t,
                                    id: "main"
                                }), this.tick();
                                else {
                                    u.logger.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc), this.state = we, this.pendingBuffering = !0, this.appended = !1, a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
                                        frag: a
                                    }));
                                    var d = !(i && i.seeking) && (l.PTSKnown || !l.live),
                                        f = l.initSegment ? l.initSegment.data : [],
                                        h = this._getAudioCodec(s);
                                    (this.demuxer = this.demuxer || new J(this.hls, "main")).push(e.payload, f, h, s.videoCodec, t, l.totalduration, d)
                                }
                            }
                            this.fragLoadError = 0
                        }, f.onFragParsingInitSegment = function(e) {
                            var t = this.fragCurrent,
                                r = e.frag;
                            if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === we) {
                                var n, i, a = e.tracks;
                                if (a.audio && this.altAudio && delete a.audio, i = a.audio) {
                                    var o = this.levels[this.level].audioCodec,
                                        s = navigator.userAgent.toLowerCase();
                                    o && this.audioCodecSwap && (u.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== i.container && (o = "mp4a.40.2", u.logger.log("Android: force audio codec to " + o)), i.levelCodec = o, i.id = e.id
                                }
                                for (n in (i = a.video) && (i.levelCodec = this.levels[this.level].videoCodec, i.id = e.id), this.hls.trigger(c.default.BUFFER_CODECS, a), a) {
                                    i = a[n], u.logger.log("main track:" + n + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                    var l = i.initSegment;
                                    l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(c.default.BUFFER_APPENDING, {
                                        type: n,
                                        data: l,
                                        parent: "main",
                                        content: "initSegment"
                                    }))
                                }
                                this.tick()
                            }
                        }, f.onFragParsingData = function(e) {
                            var t = this,
                                r = this.fragCurrent,
                                n = e.frag;
                            if (r && "main" === e.id && n.sn === r.sn && n.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === we) {
                                var i = this.levels[this.level],
                                    a = r;
                                if (Object(l.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && a.addElementaryStream(m.AUDIO), !0 === e.hasVideo && a.addElementaryStream(m.VIDEO), u.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type)
                                    if (a.dropped = e.dropped, a.dropped)
                                        if (a.backtracked) u.logger.warn("Already backtracked on this fragment, appending with the gap", a.sn);
                                        else {
                                            var o = i.details;
                                            if (!o || a.sn !== o.startSN) return u.logger.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = ve, this.fragPrevious = a, void this.tick();
                                            u.logger.warn("missing video frame(s) on first frag, appending with gap", a.sn)
                                        }
                                else a.backtracked = !1;
                                var s = te(i.details, a, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                                    d = this.hls;
                                d.trigger(c.default.LEVEL_PTS_UPDATED, {
                                    details: i.details,
                                    level: this.level,
                                    drift: s,
                                    type: e.type,
                                    start: e.startPTS,
                                    end: e.endPTS
                                }), [e.data1, e.data2].forEach((function(r) {
                                    r && r.length && t.state === we && (t.appended = !0, t.pendingBuffering = !0, d.trigger(c.default.BUFFER_APPENDING, {
                                        type: e.type,
                                        data: r,
                                        parent: "main",
                                        content: "data"
                                    }))
                                })), this.tick()
                            }
                        }, f.onFragParsed = function(e) {
                            var t = this.fragCurrent,
                                r = e.frag;
                            t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === we && (this.stats.tparsed = window.performance.now(), this.state = ke, this._checkAppendedParsed())
                        }, f.onAudioTrackSwitching = function(e) {
                            var t = !!e.url,
                                r = e.id;
                            if (!t) {
                                if (this.mediaBuffer !== this.media) {
                                    u.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                    var n = this.fragCurrent;
                                    n.loader && (u.logger.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = ve
                                }
                                var i = this.hls;
                                i.trigger(c.default.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                }), i.trigger(c.default.AUDIO_TRACK_SWITCHED, {
                                    id: r
                                }), this.altAudio = !1
                            }
                        }, f.onAudioTrackSwitched = function(e) {
                            var t = e.id,
                                r = !!this.hls.audioTracks[t].url;
                            if (r) {
                                var n = this.videoBuffer;
                                n && this.mediaBuffer !== n && (u.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                            }
                            this.altAudio = r, this.tick()
                        }, f.onBufferCreated = function(e) {
                            var t, r, n = e.tracks,
                                i = !1;
                            for (var a in n) {
                                var o = n[a];
                                "main" === o.id ? (r = a, t = o, "video" === a && (this.videoBuffer = n[a].buffer)) : i = !0
                            }
                            i && t ? (u.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                        }, f.onBufferAppended = function(e) {
                            if ("main" === e.parent) {
                                var t = this.state;
                                t !== we && t !== ke || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                            }
                        }, f._checkAppendedParsed = function() {
                            if (!(this.state !== ke || this.appended && this.pendingBuffering)) {
                                var e = this.fragCurrent;
                                if (e) {
                                    var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                                    u.logger.log("main buffered : " + ae.toString(t.buffered)), this.fragPrevious = e;
                                    var r = this.stats;
                                    r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(c.default.FRAG_BUFFERED, {
                                        stats: r,
                                        frag: e,
                                        id: "main"
                                    }), this.state = ve
                                }
                                this.tick()
                            }
                        }, f.onError = function(e) {
                            var t = e.frag || this.fragCurrent;
                            if (!t || "main" === t.type) {
                                var r = !!this.media && K.isBuffered(this.media, this.media.currentTime) && K.isBuffered(this.media, this.media.currentTime + .5);
                                switch (e.details) {
                                    case s.ErrorDetails.FRAG_LOAD_ERROR:
                                    case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    case s.ErrorDetails.KEY_LOAD_ERROR:
                                    case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        if (!e.fatal)
                                            if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                                var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                                u.logger.warn("mediaController: frag loading failed, retry in " + n + " ms"), this.retryDate = window.performance.now() + n, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = Ee
                                            } else u.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Re;
                                        break;
                                    case s.ErrorDetails.LEVEL_LOAD_ERROR:
                                    case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                        this.state !== Re && (e.fatal ? (this.state = Re, u.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== Pe || (this.state = ve));
                                        break;
                                    case s.ErrorDetails.BUFFER_FULL_ERROR:
                                        "main" !== e.parent || this.state !== we && this.state !== ke || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = ve) : (u.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                                }
                            }
                        }, f._reduceMaxBufferLength = function(e) {
                            var t = this.config;
                            return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, u.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
                        }, f._checkBuffer = function() {
                            var e = this.media;
                            if (e && 0 !== e.readyState) {
                                var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
                                !this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
                            }
                        }, f.onFragLoadEmergencyAborted = function() {
                            this.state = ve, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                        }, f.onBufferFlushed = function() {
                            var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                            e && this.fragmentTracker.detectEvictedFragments(m.VIDEO, e.buffered), this.state = ve, this.fragPrevious = null
                        }, f.swapAudioCodec = function() {
                            this.audioCodecSwap = !this.audioCodecSwap
                        }, f._seekToStartPos = function() {
                            var e = this.media,
                                t = e.currentTime,
                                r = e.seeking ? t : this.startPosition;
                            t !== r && r >= 0 && (u.logger.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
                        }, f._getAudioCodec = function(e) {
                            var t = this.config.defaultAudioCodec || e.audioCodec;
                            return this.audioCodecSwap && (u.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
                        }, i = n, (o = [{
                            key: "state",
                            set: function(e) {
                                if (this.state !== e) {
                                    var t = this.state;
                                    this._state = e, u.logger.log("main stream-controller: " + t + "->" + e), this.hls.trigger(c.default.STREAM_STATE_TRANSITION, {
                                        previousState: t,
                                        nextState: e
                                    })
                                }
                            },
                            get: function() {
                                return this._state
                            }
                        }, {
                            key: "currentLevel",
                            get: function() {
                                var e = this.media;
                                if (e) {
                                    var t = this.getBufferedFrag(e.currentTime);
                                    if (t) return t.level
                                }
                                return -1
                            }
                        }, {
                            key: "nextBufferedFrag",
                            get: function() {
                                var e = this.media;
                                return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                            }
                        }, {
                            key: "nextLevel",
                            get: function() {
                                var e = this.nextBufferedFrag;
                                return e ? e.level : -1
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function() {
                                return this._liveSyncPosition
                            },
                            set: function(e) {
                                this._liveSyncPosition = e
                            }
                        }]) && Oe(i.prototype, o), d && Oe(i, d), n
                    }(Ae);

                    function Le(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    window.performance;
                    var Ie, Me = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.MANIFEST_LOADED, c.default.LEVEL_LOADED, c.default.AUDIO_TRACK_SWITCHED, c.default.FRAG_LOADED, c.default.ERROR) || this).canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, Ie = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i, a, o, l = n.prototype;
                            return l.onHandlerDestroying = function() {
                                this.clearTimer(), this.manualLevelIndex = -1
                            }, l.clearTimer = function() {
                                null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                            }, l.startLoad = function() {
                                var e = this._levels;
                                this.canload = !0, this.levelRetryCount = 0, e && e.forEach((function(e) {
                                    e.loadError = 0;
                                    var t = e.details;
                                    t && t.live && (e.details = void 0)
                                })), null !== this.timer && this.loadLevel()
                            }, l.stopLoad = function() {
                                this.canload = !1
                            }, l.onManifestLoaded = function(e) {
                                var t, r = [],
                                    n = [],
                                    i = {},
                                    a = null,
                                    o = !1,
                                    l = !1;
                                if (e.levels.forEach((function(e) {
                                        var t = e.attrs;
                                        e.loadError = 0, e.fragmentError = !1, o = o || !!e.videoCodec, l = l || !!e.audioCodec, Ie && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (a = i[e.bitrate]) ? a.url.push(e.url) : (e.url = [e.url], e.urlId = 0, i[e.bitrate] = e, r.push(e)), t && (t.AUDIO && (l = !0, Z(a || e, "audio", t.AUDIO)), t.SUBTITLES && Z(a || e, "text", t.SUBTITLES))
                                    })), o && l && (r = r.filter((function(e) {
                                        return !!e.videoCodec
                                    }))), r = r.filter((function(e) {
                                        var t = e.audioCodec,
                                            r = e.videoCodec;
                                        return (!t || _(t, "audio")) && (!r || _(r, "video"))
                                    })), e.audioTracks && (n = e.audioTracks.filter((function(e) {
                                        return !e.audioCodec || _(e.audioCodec, "audio")
                                    }))).forEach((function(e, t) {
                                        e.id = t
                                    })), r.length > 0) {
                                    t = r[0].bitrate, r.sort((function(e, t) {
                                        return e.bitrate - t.bitrate
                                    })), this._levels = r;
                                    for (var d = 0; d < r.length; d++)
                                        if (r[d].bitrate === t) {
                                            this._firstLevel = d, u.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                                            break
                                        }
                                    this.hls.trigger(c.default.MANIFEST_PARSED, {
                                        levels: r,
                                        audioTracks: n,
                                        firstLevel: this._firstLevel,
                                        stats: e.stats,
                                        audio: l,
                                        video: o,
                                        altAudio: n.some((function(e) {
                                            return !!e.url
                                        }))
                                    })
                                } else this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    details: s.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: this.hls.url,
                                    reason: "no level with compatible codecs found in manifest"
                                })
                            }, l.setLevelInternal = function(e) {
                                var t = this._levels,
                                    r = this.hls;
                                if (e >= 0 && e < t.length) {
                                    if (this.clearTimer(), this.currentLevelIndex !== e) {
                                        u.logger.log("switching to level " + e), this.currentLevelIndex = e;
                                        var n = t[e];
                                        n.level = e, r.trigger(c.default.LEVEL_SWITCHING, n)
                                    }
                                    var i = t[e],
                                        a = i.details;
                                    if (!a || a.live) {
                                        var o = i.urlId;
                                        r.trigger(c.default.LEVEL_LOADING, {
                                            url: i.url[o],
                                            level: e,
                                            id: o
                                        })
                                    }
                                } else r.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.OTHER_ERROR,
                                    details: s.ErrorDetails.LEVEL_SWITCH_ERROR,
                                    level: e,
                                    fatal: !1,
                                    reason: "invalid level idx"
                                })
                            }, l.onError = function(e) {
                                if (e.fatal) e.type === s.ErrorTypes.NETWORK_ERROR && this.clearTimer();
                                else {
                                    var t, r = !1,
                                        n = !1;
                                    switch (e.details) {
                                        case s.ErrorDetails.FRAG_LOAD_ERROR:
                                        case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case s.ErrorDetails.KEY_LOAD_ERROR:
                                        case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            t = e.frag.level, n = !0;
                                            break;
                                        case s.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            t = e.context.level, r = !0;
                                            break;
                                        case s.ErrorDetails.REMUX_ALLOC_ERROR:
                                            t = e.level, r = !0
                                    }
                                    void 0 !== t && this.recoverLevel(e, t, r, n)
                                }
                            }, l.recoverLevel = function(e, t, r, n) {
                                var i, a, o, s = this,
                                    l = this.hls.config,
                                    c = e.details,
                                    d = this._levels[t];
                                if (d.loadError++, d.fragmentError = n, r) {
                                    if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return u.logger.error("level controller, cannot recover from " + c + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
                                    a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() {
                                        return s.loadLevel()
                                    }), a), e.levelRetry = !0, this.levelRetryCount++, u.logger.warn("level controller, " + c + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount)
                                }(r || n) && ((i = d.url.length) > 1 && d.loadError < i ? (d.urlId = (d.urlId + 1) % i, d.details = void 0, u.logger.warn("level controller, " + c + " for level " + t + ": switching to redundant URL-id " + d.urlId)) : -1 === this.manualLevelIndex ? (o = 0 === t ? this._levels.length - 1 : t - 1, u.logger.warn("level controller, " + c + ": switch to " + o), this.hls.nextAutoLevel = this.currentLevelIndex = o) : n && (u.logger.warn("level controller, " + c + ": reload a fragment"), this.currentLevelIndex = null))
                            }, l.onFragLoaded = function(e) {
                                var t = e.frag;
                                if (void 0 !== t && "main" === t.type) {
                                    var r = this._levels[t.level];
                                    void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                                }
                            }, l.onLevelLoaded = function(e) {
                                var t = this,
                                    r = e.level,
                                    n = e.details;
                                if (r === this.currentLevelIndex) {
                                    var i = this._levels[r];
                                    if (i.fragmentError || (i.loadError = 0, this.levelRetryCount = 0), n.live) {
                                        var a = ie(i.details, n, e.stats.trequest);
                                        u.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout((function() {
                                            return t.loadLevel()
                                        }), a)
                                    } else this.clearTimer()
                                }
                            }, l.onAudioTrackSwitched = function(e) {
                                var t = this.hls.audioTracks[e.id].groupId,
                                    r = this.hls.levels[this.currentLevelIndex];
                                if (r && r.audioGroupIds) {
                                    for (var n = -1, i = 0; i < r.audioGroupIds.length; i++)
                                        if (r.audioGroupIds[i] === t) {
                                            n = i;
                                            break
                                        }
                                    n !== r.urlId && (r.urlId = n, this.startLoad())
                                }
                            }, l.loadLevel = function() {
                                if (u.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
                                    var e = this._levels[this.currentLevelIndex];
                                    if ("object" == typeof e && e.url.length > 0) {
                                        var t = this.currentLevelIndex,
                                            r = e.urlId,
                                            n = e.url[r];
                                        u.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(c.default.LEVEL_LOADING, {
                                            url: n,
                                            level: t,
                                            id: r
                                        })
                                    }
                                }
                            }, i = n, (a = [{
                                key: "levels",
                                get: function() {
                                    return this._levels
                                }
                            }, {
                                key: "level",
                                get: function() {
                                    return this.currentLevelIndex
                                },
                                set: function(e) {
                                    var t = this._levels;
                                    t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                                }
                            }, {
                                key: "manualLevel",
                                get: function() {
                                    return this.manualLevelIndex
                                },
                                set: function(e) {
                                    this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
                                }
                            }, {
                                key: "firstLevel",
                                get: function() {
                                    return this._firstLevel
                                },
                                set: function(e) {
                                    this._firstLevel = e
                                }
                            }, {
                                key: "startLevel",
                                get: function() {
                                    if (void 0 === this._startLevel) {
                                        var e = this.hls.config.startLevel;
                                        return void 0 !== e ? e : this._firstLevel
                                    }
                                    return this._startLevel
                                },
                                set: function(e) {
                                    this._startLevel = e
                                }
                            }, {
                                key: "nextLoadLevel",
                                get: function() {
                                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                                },
                                set: function(e) {
                                    this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                                }
                            }]) && Le(i.prototype, a), o && Le(i, o), n
                        }(f),
                        Ne = r("./src/demux/id3.js");

                    function Fe(e, t) {
                        var r;
                        try {
                            r = new Event("addtrack")
                        } catch (e) {
                            (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                        }
                        r.track = e, t.dispatchEvent(r)
                    }

                    function Ue(e) {
                        if (e && e.cues)
                            for (; e.cues.length > 0;) e.removeCue(e.cues[0])
                    }
                    var je = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHING, c.default.FRAG_PARSING_METADATA, c.default.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0, r.media = void 0, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                f.prototype.destroy.call(this)
                            }, i.onMediaAttached = function(e) {
                                this.media = e.media, this.media
                            }, i.onMediaDetaching = function() {
                                Ue(this.id3Track), this.id3Track = void 0, this.media = void 0
                            }, i.getID3Track = function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    if ("metadata" === r.kind && "id3" === r.label) return Fe(r, this.media), r
                                }
                                return this.media.addTextTrack("metadata", "id3")
                            }, i.onFragParsingMetadata = function(e) {
                                var t = e.frag,
                                    r = e.samples;
                                this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                                for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < r.length; i++) {
                                    var a = Ne.default.getID3Frames(r[i].data);
                                    if (a) {
                                        var o = r[i].pts,
                                            s = i < r.length - 1 ? r[i + 1].pts : t.endPTS;
                                        o === s ? s += 1e-4 : o > s && (u.logger.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), s = o + .25);
                                        for (var l = 0; l < a.length; l++) {
                                            var c = a[l];
                                            if (!Ne.default.isTimeStampFrame(c)) {
                                                var d = new n(o, s, "");
                                                d.value = c, this.id3Track.addCue(d)
                                            }
                                        }
                                    }
                                }
                            }, i.onLiveBackBufferReached = function(e) {
                                var t = e.bufferEnd,
                                    r = this.id3Track;
                                if (r && r.cues && r.cues.length) {
                                    var n = function(e, t) {
                                        if (t < e[0].endTime) return e[0];
                                        if (t > e[e.length - 1].endTime) return e[e.length - 1];
                                        for (var r = 0, n = e.length - 1; r <= n;) {
                                            var i = Math.floor((n + r) / 2);
                                            if (t < e[i].endTime) n = i - 1;
                                            else {
                                                if (!(t > e[i].endTime)) return e[i];
                                                r = i + 1
                                            }
                                        }
                                        return e[r].endTime - t < t - e[n].endTime ? e[r] : e[n]
                                    }(r.cues, t);
                                    if (n)
                                        for (; r.cues[0] !== n;) r.removeCue(r.cues[0])
                                }
                            }, n
                        }(f),
                        Be = function() {
                            function e(e) {
                                this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                            }
                            var t = e.prototype;
                            return t.sample = function(e, t) {
                                var r = Math.pow(this.alpha_, e);
                                this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
                            }, t.getTotalWeight = function() {
                                return this.totalWeight_
                            }, t.getEstimate = function() {
                                if (this.alpha_) {
                                    var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                    return this.estimate_ / e
                                }
                                return this.estimate_
                            }, e
                        }(),
                        Ge = function() {
                            function e(e, t, r, n) {
                                this.hls = void 0, this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.hls = e, this.defaultEstimate_ = n, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Be(t), this.fast_ = new Be(r)
                            }
                            var t = e.prototype;
                            return t.sample = function(e, t) {
                                var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
                                    n = 8 * t / r;
                                this.fast_.sample(r, n), this.slow_.sample(r, n)
                            }, t.canEstimate = function() {
                                var e = this.fast_;
                                return e && e.getTotalWeight() >= this.minWeight_
                            }, t.getEstimate = function() {
                                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                            }, t.destroy = function() {}, e
                        }();

                    function ze(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var Ke = window.performance,
                        Ve = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.FRAG_LOADING, c.default.FRAG_LOADED, c.default.FRAG_BUFFERED, c.default.ERROR) || this).lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = t, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(r)), r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i, a, o, d = n.prototype;
                            return d.destroy = function() {
                                this.clearTimer(), f.prototype.destroy.call(this)
                            }, d.onFragLoading = function(e) {
                                var t = e.frag;
                                if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                                    var r, n, i = this.hls,
                                        a = i.config,
                                        o = t.level;
                                    i.levels[o].details.live ? (r = a.abrEwmaFastLive, n = a.abrEwmaSlowLive) : (r = a.abrEwmaFastVoD, n = a.abrEwmaSlowVoD), this._bwEstimator = new Ge(i, n, r, a.abrEwmaDefaultEstimate)
                                }
                            }, d._abandonRulesCheck = function() {
                                var e = this.hls,
                                    t = e.media,
                                    r = this.fragCurrent;
                                if (r) {
                                    var n = r.loader,
                                        i = e.minAutoLevel;
                                    if (!n || n.stats && n.stats.aborted) return u.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                                    var a = n.stats;
                                    if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                                        var o = Ke.now() - a.trequest,
                                            s = Math.abs(t.playbackRate);
                                        if (o > 500 * r.duration / s) {
                                            var l = e.levels,
                                                d = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / o),
                                                f = l[r.level],
                                                h = f.realBitrate ? Math.max(f.realBitrate, f.bitrate) : f.bitrate,
                                                p = a.total ? a.total : Math.max(a.loaded, Math.round(r.duration * h / 8)),
                                                m = t.currentTime,
                                                g = (p - a.loaded) / d,
                                                v = (K.bufferInfo(t, m, e.config.maxBufferHole).end - m) / s;
                                            if (v < 2 * r.duration / s && g > v) {
                                                var y;
                                                for (y = r.level - 1; y > i; y--) {
                                                    var b = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
                                                    if (r.duration * b / (6.4 * d) < v) break
                                                }
                                                void 0 < g && (u.logger.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + g.toFixed(1) + ":" + v.toFixed(1)), e.nextLoadLevel = y, this._bwEstimator.sample(o, a.loaded), n.abort(), this.clearTimer(), e.trigger(c.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                    frag: r,
                                                    stats: a
                                                }))
                                            }
                                        }
                                    }
                                }
                            }, d.onFragLoaded = function(e) {
                                var t = e.frag;
                                if ("main" === t.type && Object(l.isFiniteNumber)(t.sn)) {
                                    if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                        var r = this.hls.levels[t.level],
                                            n = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                                            i = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                                        r.loaded = {
                                            bytes: n,
                                            duration: i
                                        }, r.realBitrate = Math.round(8 * n / i)
                                    }
                                    if (e.frag.bitrateTest) {
                                        var a = e.stats;
                                        a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(e)
                                    }
                                }
                            }, d.onFragBuffered = function(e) {
                                var t = e.stats,
                                    r = e.frag;
                                if (!0 !== t.aborted && "main" === r.type && Object(l.isFiniteNumber)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
                                    var n = t.tparsed - t.trequest;
                                    u.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(n, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                                }
                            }, d.onError = function(e) {
                                switch (e.details) {
                                    case s.ErrorDetails.FRAG_LOAD_ERROR:
                                    case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        this.clearTimer()
                                }
                            }, d.clearTimer = function() {
                                clearInterval(this.timer), this.timer = null
                            }, d._findBestLevel = function(e, t, r, n, i, a, o, s, l) {
                                for (var c = i; c >= n; c--) {
                                    var d = l[c];
                                    if (d) {
                                        var f = d.details,
                                            h = f ? f.totalduration / f.fragments.length : t,
                                            p = !!f && f.live,
                                            m = void 0;
                                        m = c <= e ? o * r : s * r;
                                        var g = l[c].realBitrate ? Math.max(l[c].realBitrate, l[c].bitrate) : l[c].bitrate,
                                            v = g * h / m;
                                        if (u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + c + "/" + Math.round(m) + "/" + g + "/" + h + "/" + a + "/" + v), m > g && (!v || p && !this.bitrateTestDelay || v < a)) return c
                                    }
                                }
                                return -1
                            }, i = n, (a = [{
                                key: "nextAutoLevel",
                                get: function() {
                                    var e = this._nextAutoLevel,
                                        t = this._bwEstimator;
                                    if (!(-1 === e || t && t.canEstimate())) return e;
                                    var r = this._nextABRAutoLevel;
                                    return -1 !== e && (r = Math.min(e, r)), r
                                },
                                set: function(e) {
                                    this._nextAutoLevel = e
                                }
                            }, {
                                key: "_nextABRAutoLevel",
                                get: function() {
                                    var e = this.hls,
                                        t = e.maxAutoLevel,
                                        r = e.levels,
                                        n = e.config,
                                        i = e.minAutoLevel,
                                        a = e.media,
                                        o = this.lastLoadedFragLevel,
                                        s = this.fragCurrent ? this.fragCurrent.duration : 0,
                                        l = a ? a.currentTime : 0,
                                        c = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
                                        d = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                        f = (K.bufferInfo(a, l, n.maxBufferHole).end - l) / c,
                                        h = this._findBestLevel(o, s, d, i, t, f, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
                                    if (h >= 0) return h;
                                    u.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                    var p = s ? Math.min(s, n.maxStarvationDelay) : n.maxStarvationDelay,
                                        m = n.abrBandWidthFactor,
                                        g = n.abrBandWidthUpFactor;
                                    if (0 === f) {
                                        var v = this.bitrateTestDelay;
                                        v && (p = (s ? Math.min(s, n.maxLoadingDelay) : n.maxLoadingDelay) - v, u.logger.trace("bitrate test took " + Math.round(1e3 * v) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * p) + " ms"), m = g = 1)
                                    }
                                    return h = this._findBestLevel(o, s, d, i, t, f + p, m, g, r), Math.max(h, 0)
                                }
                            }]) && ze(i.prototype, a), o && ze(i, o), n
                        }(f),
                        He = Y(),
                        We = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.MEDIA_ATTACHING, c.default.MEDIA_DETACHING, c.default.MANIFEST_PARSED, c.default.BUFFER_RESET, c.default.BUFFER_APPENDING, c.default.BUFFER_CODECS, c.default.BUFFER_EOS, c.default.BUFFER_FLUSHING, c.default.LEVEL_PTS_UPDATED, c.default.LEVEL_UPDATED) || this)._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r._needsFlush = !1, r._needsEos = !1, r.config = void 0, r.audioTimestampOffset = void 0, r.bufferCodecEventsExpected = 0, r._bufferCodecEventsTotal = 0, r.media = null, r.mediaSource = null, r.segments = [], r.parent = void 0, r.appending = !1, r.appended = 0, r.appendError = 0, r.flushBufferCounter = 0, r.tracks = {}, r.pendingTracks = {}, r.sourceBuffer = {}, r.flushRange = [], r._onMediaSourceOpen = function() {
                                    u.logger.log("media source opened"), r.hls.trigger(c.default.MEDIA_ATTACHED, {
                                        media: r.media
                                    });
                                    var e = r.mediaSource;
                                    e && e.removeEventListener("sourceopen", r._onMediaSourceOpen), r.checkPendingTracks()
                                }, r._onMediaSourceClose = function() {
                                    u.logger.log("media source closed")
                                }, r._onMediaSourceEnded = function() {
                                    u.logger.log("media source ended")
                                }, r._onSBUpdateEnd = function() {
                                    if (r.audioTimestampOffset && r.sourceBuffer.audio) {
                                        var e = r.sourceBuffer.audio;
                                        u.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset), e.timestampOffset = r.audioTimestampOffset, delete r.audioTimestampOffset
                                    }
                                    r._needsFlush && r.doFlush(), r._needsEos && r.checkEos(), r.appending = !1;
                                    var t = r.parent,
                                        n = r.segments.reduce((function(e, r) {
                                            return r.parent === t ? e + 1 : e
                                        }), 0),
                                        i = {},
                                        a = r.sourceBuffer;
                                    for (var o in a) {
                                        var s = a[o];
                                        if (!s) throw Error("handling source buffer update end error: source buffer for " + o + " uninitilized and unable to update buffered TimeRanges.");
                                        i[o] = s.buffered
                                    }
                                    r.hls.trigger(c.default.BUFFER_APPENDED, {
                                        parent: t,
                                        pending: n,
                                        timeRanges: i
                                    }), r._needsFlush || r.doAppending(), r.updateMediaElementDuration(), 0 === n && r.flushLiveBackBuffer()
                                }, r._onSBUpdateError = function(e) {
                                    u.logger.error("sourceBuffer error:", e), r.hls.trigger(c.default.ERROR, {
                                        type: s.ErrorTypes.MEDIA_ERROR,
                                        details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                                        fatal: !1
                                    })
                                }, r.config = t.config, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                f.prototype.destroy.call(this)
                            }, i.onLevelPtsUpdated = function(e) {
                                var t = e.type,
                                    r = this.tracks.audio;
                                if ("audio" === t && r && "audio/mpeg" === r.container) {
                                    var n = this.sourceBuffer.audio;
                                    if (!n) throw Error("Level PTS Updated and source buffer for audio uninitalized");
                                    if (Math.abs(n.timestampOffset - e.start) > .1) {
                                        var i = n.updating;
                                        try {
                                            n.abort()
                                        } catch (e) {
                                            u.logger.warn("can not abort audio buffer: " + e)
                                        }
                                        i ? this.audioTimestampOffset = e.start : (u.logger.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + e.start), n.timestampOffset = e.start)
                                    }
                                }
                            }, i.onManifestParsed = function(e) {
                                this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e.altAudio ? 2 : 1, u.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                            }, i.onMediaAttaching = function(e) {
                                var t = this.media = e.media;
                                if (t && He) {
                                    var r = this.mediaSource = new He;
                                    r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
                                }
                            }, i.onMediaDetaching = function() {
                                u.logger.log("media source detaching");
                                var e = this.mediaSource;
                                if (e) {
                                    if ("open" === e.readyState) try {
                                        e.endOfStream()
                                    } catch (e) {
                                        u.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                                    }
                                    e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : u.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                                }
                                this.hls.trigger(c.default.MEDIA_DETACHED)
                            }, i.checkPendingTracks = function() {
                                var e = this.bufferCodecEventsExpected,
                                    t = this.pendingTracks,
                                    r = Object.keys(t).length;
                                (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                            }, i.onBufferReset = function() {
                                var e = this.sourceBuffer;
                                for (var t in e) {
                                    var r = e[t];
                                    try {
                                        r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError))
                                    } catch (e) {}
                                }
                                this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                            }, i.onBufferCodecs = function(e) {
                                var t = this;
                                Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach((function(r) {
                                    t.pendingTracks[r] = e[r]
                                })), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                            }, i.createSourceBuffers = function(e) {
                                var t = this.sourceBuffer,
                                    r = this.mediaSource;
                                if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                                for (var n in e)
                                    if (!t[n]) {
                                        var i = e[n];
                                        if (!i) throw Error("source buffer exists for track " + n + ", however track does not");
                                        var a = i.levelCodec || i.codec,
                                            o = i.container + ";codecs=" + a;
                                        u.logger.log("creating sourceBuffer(" + o + ")");
                                        try {
                                            var l = t[n] = r.addSourceBuffer(o);
                                            l.addEventListener("updateend", this._onSBUpdateEnd), l.addEventListener("error", this._onSBUpdateError), this.tracks[n] = {
                                                buffer: l,
                                                codec: a,
                                                id: i.id,
                                                container: i.container,
                                                levelCodec: i.levelCodec
                                            }
                                        } catch (e) {
                                            u.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(c.default.ERROR, {
                                                type: s.ErrorTypes.MEDIA_ERROR,
                                                details: s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                                fatal: !1,
                                                err: e,
                                                mimeType: o
                                            })
                                        }
                                    }
                                this.hls.trigger(c.default.BUFFER_CREATED, {
                                    tracks: this.tracks
                                })
                            }, i.onBufferAppending = function(e) {
                                this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                            }, i.onBufferEos = function(e) {
                                for (var t in this.sourceBuffer)
                                    if (!e.type || e.type === t) {
                                        var r = this.sourceBuffer[t];
                                        r && !r.ended && (r.ended = !0, u.logger.log(t + " sourceBuffer now EOS"))
                                    }
                                this.checkEos()
                            }, i.checkEos = function() {
                                var e = this.sourceBuffer,
                                    t = this.mediaSource;
                                if (t && "open" === t.readyState) {
                                    for (var r in e) {
                                        var n = e[r];
                                        if (n) {
                                            if (!n.ended) return;
                                            if (n.updating) return void(this._needsEos = !0)
                                        }
                                    }
                                    u.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                                    try {
                                        t.endOfStream()
                                    } catch (e) {
                                        u.logger.warn("exception while calling mediaSource.endOfStream()")
                                    }
                                    this._needsEos = !1
                                } else this._needsEos = !1
                            }, i.onBufferFlushing = function(e) {
                                e.type ? this.flushRange.push({
                                    start: e.startOffset,
                                    end: e.endOffset,
                                    type: e.type
                                }) : (this.flushRange.push({
                                    start: e.startOffset,
                                    end: e.endOffset,
                                    type: "video"
                                }), this.flushRange.push({
                                    start: e.startOffset,
                                    end: e.endOffset,
                                    type: "audio"
                                })), this.flushBufferCounter = 0, this.doFlush()
                            }, i.flushLiveBackBuffer = function() {
                                if (this._live) {
                                    var e = this.config.liveBackBufferLength;
                                    if (isFinite(e) && !(e < 0))
                                        if (this.media)
                                            for (var t = this.media.currentTime, r = this.sourceBuffer, n = Object.keys(r), i = t - Math.max(e, this._levelTargetDuration), a = n.length - 1; a >= 0; a--) {
                                                var o = n[a],
                                                    s = r[o];
                                                if (s) {
                                                    var l = s.buffered;
                                                    l.length > 0 && i > l.start(0) && this.removeBufferRange(o, s, 0, i) && this.hls.trigger(c.default.LIVE_BACK_BUFFER_REACHED, {
                                                        bufferEnd: i
                                                    })
                                                }
                                            } else u.logger.error("flushLiveBackBuffer called without attaching media")
                                }
                            }, i.onLevelUpdated = function(e) {
                                var t = e.details;
                                t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
                            }, i.updateMediaElementDuration = function() {
                                var e, t = this.config;
                                if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                                    for (var r in this.sourceBuffer) {
                                        var n = this.sourceBuffer[r];
                                        if (n && !0 === n.updating) return
                                    }
                                    e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (u.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.isFiniteNumber)(e)) && (u.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                                }
                            }, i.doFlush = function() {
                                for (; this.flushRange.length;) {
                                    var e = this.flushRange[0];
                                    if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                                    this.flushRange.shift(), this.flushBufferCounter = 0
                                }
                                if (0 === this.flushRange.length) {
                                    this._needsFlush = !1;
                                    var t = 0,
                                        r = this.sourceBuffer;
                                    try {
                                        for (var n in r) {
                                            var i = r[n];
                                            i && (t += i.buffered.length)
                                        }
                                    } catch (e) {
                                        u.logger.error("error while accessing sourceBuffer.buffered")
                                    }
                                    this.appended = t, this.hls.trigger(c.default.BUFFER_FLUSHED)
                                }
                            }, i.doAppending = function() {
                                var e = this.config,
                                    t = this.hls,
                                    r = this.segments,
                                    n = this.sourceBuffer;
                                if (Object.keys(n).length) {
                                    if (!this.media || this.media.error) return this.segments = [], void u.logger.error("trying to append although a media error occured, flush segment and abort");
                                    if (!this.appending) {
                                        var i = r.shift();
                                        if (i) try {
                                            var a = n[i.type];
                                            if (!a) return void this._onSBUpdateEnd();
                                            if (a.updating) return void r.unshift(i);
                                            a.ended = !1, this.parent = i.parent, a.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0
                                        } catch (n) {
                                            u.logger.error("error while trying to append buffer:" + n.message), r.unshift(i);
                                            var o = {
                                                type: s.ErrorTypes.MEDIA_ERROR,
                                                parent: i.parent,
                                                details: "",
                                                fatal: !1
                                            };
                                            22 === n.code ? (this.segments = [], o.details = s.ErrorDetails.BUFFER_FULL_ERROR) : (this.appendError++, o.details = s.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (u.logger.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], o.fatal = !0)), t.trigger(c.default.ERROR, o)
                                        }
                                    }
                                }
                            }, i.flushBuffer = function(e, t, r) {
                                var n = this.sourceBuffer;
                                if (!Object.keys(n).length) return !0;
                                var i = "null";
                                if (this.media && (i = this.media.currentTime.toFixed(3)), u.logger.log("flushBuffer,pos/start/end: " + i + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return u.logger.warn("abort flushing too many retries"), !0;
                                var a = n[r];
                                if (a) {
                                    if (a.ended = !1, a.updating) return u.logger.warn("cannot flush, sb updating in progress"), !1;
                                    if (this.removeBufferRange(r, a, e, t)) return this.flushBufferCounter++, !1
                                }
                                return u.logger.log("buffer flushed"), !0
                            }, i.removeBufferRange = function(e, t, r, n) {
                                try {
                                    for (var i = 0; i < t.buffered.length; i++) {
                                        var a = t.buffered.start(i),
                                            o = t.buffered.end(i),
                                            s = Math.max(a, r),
                                            l = Math.min(o, n);
                                        if (Math.min(l, o) - s > .5) {
                                            var c = "null";
                                            return this.media && (c = this.media.currentTime.toString()), u.logger.log("sb remove " + e + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + c), t.remove(s, l), !0
                                        }
                                    }
                                } catch (e) {
                                    u.logger.warn("removeBufferRange failed", e)
                                }
                                return !1
                            }, n
                        }(f);

                    function Ye(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var qe = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.FPS_DROP_LEVEL_CAPPING, c.default.MEDIA_ATTACHING, c.default.MANIFEST_PARSED, c.default.BUFFER_CODECS, c.default.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY, r.firstLevel = null, r.levels = [], r.media = null, r.restrictedLevels = [], r.timer = null, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i, a, o, s = n.prototype;
                            return s.destroy = function() {
                                this.hls.config.capLevelToPlayerSize && (this.media = null, this.stopCapping())
                            }, s.onFpsDropLevelCapping = function(e) {
                                n.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                            }, s.onMediaAttaching = function(e) {
                                this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                            }, s.onManifestParsed = function(e) {
                                var t = this.hls;
                                this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, s.onBufferCodecs = function(e) {
                                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, s.onLevelsUpdated = function(e) {
                                this.levels = e.levels
                            }, s.onMediaDetaching = function() {
                                this.stopCapping()
                            }, s.detectPlayerSize = function() {
                                if (this.media) {
                                    var e = this.levels ? this.levels.length : 0;
                                    if (e) {
                                        var t = this.hls;
                                        t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
                                    }
                                }
                            }, s.getMaxLevel = function(e) {
                                var t = this;
                                if (!this.levels) return -1;
                                var r = this.levels.filter((function(r, i) {
                                    return n.isLevelAllowed(i, t.restrictedLevels) && i <= e
                                }));
                                return n.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
                            }, s.startCapping = function() {
                                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                            }, s.stopCapping = function() {
                                this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
                            }, n.isLevelAllowed = function(e, t) {
                                return void 0 === t && (t = []), -1 === t.indexOf(e)
                            }, n.getMaxLevelByMediaSize = function(e, t, r) {
                                if (!e || e && !e.length) return -1;
                                for (var n, i, a = e.length - 1, o = 0; o < e.length; o += 1) {
                                    var s = e[o];
                                    if ((s.width >= t || s.height >= r) && (n = s, !(i = e[o + 1]) || n.width !== i.width || n.height !== i.height)) {
                                        a = o;
                                        break
                                    }
                                }
                                return a
                            }, i = n, o = [{
                                key: "contentScaleFactor",
                                get: function() {
                                    var e = 1;
                                    try {
                                        e = window.devicePixelRatio
                                    } catch (e) {}
                                    return e
                                }
                            }], (a = [{
                                key: "mediaWidth",
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= n.contentScaleFactor), e
                                }
                            }, {
                                key: "mediaHeight",
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= n.contentScaleFactor), e
                                }
                            }]) && Ye(i.prototype, a), o && Ye(i, o), n
                        }(f),
                        Xe = window.performance,
                        $e = function(e) {
                            var t, r;

                            function n(t) {
                                return e.call(this, t, c.default.MEDIA_ATTACHING) || this
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.destroy = function() {
                                this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                            }, i.onMediaAttaching = function(e) {
                                var t = this.hls.config;
                                t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
                            }, i.checkFPS = function(e, t, r) {
                                var n = Xe.now();
                                if (t) {
                                    if (this.lastTime) {
                                        var i = n - this.lastTime,
                                            a = r - this.lastDroppedFrames,
                                            o = t - this.lastDecodedFrames,
                                            s = 1e3 * a / i,
                                            l = this.hls;
                                        if (l.trigger(c.default.FPS_DROP, {
                                                currentDropped: a,
                                                currentDecoded: o,
                                                totalDroppedFrames: r
                                            }), s > 0 && a > l.config.fpsDroppedMonitoringThreshold * o) {
                                            var d = l.currentLevel;
                                            u.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= d) && (d -= 1, l.trigger(c.default.FPS_DROP_LEVEL_CAPPING, {
                                                level: d,
                                                droppedLevel: l.currentLevel
                                            }), l.autoLevelCapping = d, l.streamController.nextLevelSwitch())
                                        }
                                    }
                                    this.lastTime = n, this.lastDroppedFrames = r, this.lastDecodedFrames = t
                                }
                            }, i.checkFPSInterval = function() {
                                var e = this.video;
                                if (e)
                                    if (this.isVideoPlaybackQualityAvailable) {
                                        var t = e.getVideoPlaybackQuality();
                                        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                                    } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                            }, n
                        }(f),
                        Qe = window,
                        Je = Qe.performance,
                        Ze = Qe.XMLHttpRequest,
                        et = function() {
                            function e(e) {
                                e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                            }
                            var t = e.prototype;
                            return t.destroy = function() {
                                this.abort(), this.loader = null
                            }, t.abort = function() {
                                var e = this.loader;
                                e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                            }, t.load = function(e, t, r) {
                                this.context = e, this.config = t, this.callbacks = r, this.stats = {
                                    trequest: Je.now(),
                                    retry: 0
                                }, this.retryDelay = t.retryDelay, this.loadInternal()
                            }, t.loadInternal = function() {
                                var e, t = this.context;
                                e = this.loader = new Ze;
                                var r = this.stats;
                                r.tfirst = 0, r.loaded = 0;
                                var n = this.xhrSetup;
                                try {
                                    if (n) try {
                                        n(e, t.url)
                                    } catch (r) {
                                        e.open("GET", t.url, !0), n(e, t.url)
                                    }
                                    e.readyState || e.open("GET", t.url, !0)
                                } catch (r) {
                                    return void this.callbacks.onError({
                                        code: e.status,
                                        text: r.message
                                    }, t, e)
                                }
                                t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                            }, t.readystatechange = function(e) {
                                var t = e.currentTarget,
                                    r = t.readyState,
                                    n = this.stats,
                                    i = this.context,
                                    a = this.config;
                                if (!n.aborted && r >= 2)
                                    if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(Je.now(), n.trequest)), 4 === r) {
                                        var o = t.status;
                                        if (o >= 200 && o < 300) {
                                            var s, l;
                                            n.tload = Math.max(n.tfirst, Je.now()), l = "arraybuffer" === i.responseType ? (s = t.response).byteLength : (s = t.responseText).length, n.loaded = n.total = l;
                                            var c = {
                                                url: t.responseURL,
                                                data: s
                                            };
                                            this.callbacks.onSuccess(c, n, i, t)
                                        } else n.retry >= a.maxRetry || o >= 400 && o < 499 ? (u.logger.error(o + " while loading " + i.url), this.callbacks.onError({
                                            code: o,
                                            text: t.statusText
                                        }, i, t)) : (u.logger.warn(o + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
                                    } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                            }, t.loadtimeout = function() {
                                u.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                            }, t.loadprogress = function(e) {
                                var t = e.currentTarget,
                                    r = this.stats;
                                r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
                                var n = this.callbacks.onProgress;
                                n && n(r, this.context, null, t)
                            }, e
                        }();

                    function tt(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var rt = function(e) {
                        var t, r;

                        function n(t) {
                            var r;
                            return (r = e.call(this, t, c.default.MANIFEST_LOADING, c.default.MANIFEST_PARSED, c.default.AUDIO_TRACK_LOADED, c.default.AUDIO_TRACK_SWITCHED, c.default.LEVEL_LOADED, c.default.ERROR) || this)._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r
                        }
                        r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                        var i, a, o, l = n.prototype;
                        return l.onManifestLoading = function() {
                            this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
                        }, l.onManifestParsed = function(e) {
                            var t = this.tracks = e.audioTracks || [];
                            this.hls.trigger(c.default.AUDIO_TRACKS_UPDATED, {
                                audioTracks: t
                            })
                        }, l.onAudioTrackLoaded = function(e) {
                            if (e.id >= this.tracks.length) u.logger.warn("Invalid audio track id:", e.id);
                            else {
                                if (u.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
                                    var t = 1e3 * e.details.targetduration;
                                    this.setInterval(t)
                                }!e.details.live && this.hasInterval() && this.clearInterval()
                            }
                        }, l.onAudioTrackSwitched = function(e) {
                            var t = this.tracks[e.id].groupId;
                            t && this.audioGroupId !== t && (this.audioGroupId = t)
                        }, l.onLevelLoaded = function(e) {
                            var t = this.hls.levels[e.level];
                            if (t.audioGroupIds) {
                                var r = t.audioGroupIds[t.urlId];
                                this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
                            }
                        }, l.onError = function(e) {
                            e.type === s.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (u.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
                        }, l._setAudioTrack = function(e) {
                            if (this._trackId === e && this.tracks[this._trackId].details) u.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                            else if (e < 0 || e >= this.tracks.length) u.logger.warn("Invalid id passed to audio-track controller");
                            else {
                                var t = this.tracks[e];
                                u.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
                                var r = t.url,
                                    n = t.type,
                                    i = t.id;
                                this.hls.trigger(c.default.AUDIO_TRACK_SWITCHING, {
                                    id: i,
                                    type: n,
                                    url: r
                                }), this._loadTrackDetailsIfNeeded(t)
                            }
                        }, l.doTick = function() {
                            this._updateTrack(this._trackId)
                        }, l._selectInitialAudioTrack = function() {
                            var e = this,
                                t = this.tracks;
                            if (t.length) {
                                var r = this.tracks[this._trackId],
                                    n = null;
                                if (r && (n = r.name), this._selectDefaultTrack) {
                                    var i = t.filter((function(e) {
                                        return e.default
                                    }));
                                    i.length ? t = i : u.logger.warn("No default audio tracks defined")
                                }
                                var a = !1,
                                    o = function() {
                                        t.forEach((function(t) {
                                            a || e.audioGroupId && t.groupId !== e.audioGroupId || n && n !== t.name || (e._setAudioTrack(t.id), a = !0)
                                        }))
                                    };
                                o(), a || (n = null, o()), a || (u.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    details: s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                    fatal: !0
                                }))
                            }
                        }, l._needsTrackLoading = function(e) {
                            var t = e.details,
                                r = e.url;
                            return !(t && !t.live || !r)
                        }, l._loadTrackDetailsIfNeeded = function(e) {
                            if (this._needsTrackLoading(e)) {
                                var t = e.url,
                                    r = e.id;
                                u.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger(c.default.AUDIO_TRACK_LOADING, {
                                    url: t,
                                    id: r
                                })
                            }
                        }, l._updateTrack = function(e) {
                            if (!(e < 0 || e >= this.tracks.length)) {
                                this.clearInterval(), this._trackId = e, u.logger.log("trying to update audio-track " + e);
                                var t = this.tracks[e];
                                this._loadTrackDetailsIfNeeded(t)
                            }
                        }, l._handleLoadError = function() {
                            this.trackIdBlacklist[this._trackId] = !0;
                            var e = this._trackId,
                                t = this.tracks[e],
                                r = t.name,
                                n = t.language,
                                i = t.groupId;
                            u.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + i + ', name/language: "' + r + '" / "' + n + '"');
                            for (var a = e, o = 0; o < this.tracks.length; o++)
                                if (!this.trackIdBlacklist[o] && this.tracks[o].name === r) {
                                    a = o;
                                    break
                                }
                            a !== e ? (u.logger.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId), this._setAudioTrack(a)) : u.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + n + '"')
                        }, i = n, (a = [{
                            key: "audioTracks",
                            get: function() {
                                return this.tracks
                            }
                        }, {
                            key: "audioTrack",
                            get: function() {
                                return this._trackId
                            },
                            set: function(e) {
                                this._setAudioTrack(e), this._selectDefaultTrack = !1
                            }
                        }]) && tt(i.prototype, a), o && tt(i, o), n
                    }(pe);

                    function nt(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var it = window.performance,
                        at = function(e) {
                            var t, r;

                            function n(t, r) {
                                var n;
                                return (n = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHING, c.default.AUDIO_TRACKS_UPDATED, c.default.AUDIO_TRACK_SWITCHING, c.default.AUDIO_TRACK_LOADED, c.default.KEY_LOADED, c.default.FRAG_LOADED, c.default.FRAG_PARSING_INIT_SEGMENT, c.default.FRAG_PARSING_DATA, c.default.FRAG_PARSED, c.default.ERROR, c.default.BUFFER_RESET, c.default.BUFFER_CREATED, c.default.BUFFER_APPENDED, c.default.BUFFER_FLUSHED, c.default.INIT_PTS_FOUND) || this).fragmentTracker = r, n.config = t.config, n.audioCodecSwap = !1, n._state = me, n.initPTS = [], n.waitingFragment = null, n.videoTrackCC = null, n
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i, a, o, d = n.prototype;
                            return d.onInitPtsFound = function(e) {
                                var t = e.id,
                                    r = e.frag.cc,
                                    n = e.initPTS;
                                "main" === t && (this.initPTS[r] = n, this.videoTrackCC = r, u.logger.log("InitPTS for cc: " + r + " found from video track: " + n), this.state === xe && this.tick())
                            }, d.startLoad = function(e) {
                                if (this.tracks) {
                                    var t = this.lastCurrentTime;
                                    this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (u.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = ve) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = ge), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                                } else this.startPosition = e, this.state = me
                            }, d.doTick = function() {
                                var e, t, r, n = this.hls,
                                    i = n.config;
                                switch (this.state) {
                                    case Re:
                                    case ye:
                                    case _e:
                                        break;
                                    case ge:
                                        this.state = Se, this.loadedmetadata = !1;
                                        break;
                                    case ve:
                                        var a = this.tracks;
                                        if (!a) break;
                                        if (!this.media && (this.startFragRequested || !i.startFragPrefetch)) break;
                                        if (this.loadedmetadata) e = this.media.currentTime;
                                        else if (void 0 === (e = this.nextLoadPosition)) break;
                                        var o = this.mediaBuffer ? this.mediaBuffer : this.media,
                                            s = this.videoBuffer ? this.videoBuffer : this.media,
                                            d = K.bufferInfo(o, e, i.maxBufferHole),
                                            f = K.bufferInfo(s, e, i.maxBufferHole),
                                            h = d.len,
                                            p = d.end,
                                            m = this.fragPrevious,
                                            g = Math.min(i.maxBufferLength, i.maxMaxBufferLength),
                                            v = Math.max(g, f.len),
                                            y = this.audioSwitch,
                                            b = this.trackId;
                                        if ((h < v || y) && b < a.length) {
                                            if (void 0 === (r = a[b].details)) {
                                                this.state = Se;
                                                break
                                            }
                                            if (!y && this._streamEnded(d, r)) return this.hls.trigger(c.default.BUFFER_EOS, {
                                                type: "audio"
                                            }), void(this.state = Ce);
                                            var T, E = r.fragments,
                                                S = E.length,
                                                w = E[0].start,
                                                k = E[S - 1].start + E[S - 1].duration;
                                            if (y)
                                                if (r.live && !r.PTSKnown) u.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), p = 0;
                                                else if (p = e, r.PTSKnown && e < w) {
                                                if (!(d.end > w || d.nextStart)) return;
                                                u.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = w + .05
                                            }
                                            if (r.initSegment && !r.initSegment.data) T = r.initSegment;
                                            else if (p <= w) {
                                                if (T = E[0], null !== this.videoTrackCC && T.cc !== this.videoTrackCC && (T = function(e, t) {
                                                        return z.search(e, (function(e) {
                                                            return e.cc < t ? 1 : e.cc > t ? -1 : 0
                                                        }))
                                                    }(E, this.videoTrackCC)), r.live && T.loadIdx && T.loadIdx === this.fragLoadIdx) {
                                                    var _ = d.nextStart ? d.nextStart : w;
                                                    return u.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (_ + .05)), void(this.media.currentTime = _ + .05)
                                                }
                                            } else {
                                                var C, R = i.maxFragLookUpTolerance,
                                                    x = m ? E[m.sn - E[0].sn + 1] : void 0,
                                                    P = function(e) {
                                                        var t = Math.min(R, e.duration);
                                                        return e.start + e.duration - t <= p ? 1 : e.start - t > p && e.start ? -1 : 0
                                                    };
                                                p < k ? (p > k - R && (R = 0), C = x && !P(x) ? x : z.search(E, P)) : C = E[S - 1], C && (T = C, w = C.start, m && T.level === m.level && T.sn === m.sn && (T.sn < r.endSN ? (T = E[T.sn + 1 - r.startSN], u.logger.log("SN just loaded, load next one: " + T.sn)) : T = null))
                                            }
                                            T && (T.encrypted ? (u.logger.log("Loading key for " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + b), this.state = be, n.trigger(c.default.KEY_LOADING, {
                                                frag: T
                                            })) : (u.logger.log("Loading " + T.sn + ", cc: " + T.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + b + ", currentTime:" + e + ",bufferEnd:" + p.toFixed(3)), this.fragCurrent = T, (y || this.fragmentTracker.getState(T) === F) && ("initSegment" !== T.sn && (this.startFragRequested = !0), Object(l.isFiniteNumber)(T.sn) && (this.nextLoadPosition = T.start + T.duration), n.trigger(c.default.FRAG_LOADING, {
                                                frag: T
                                            }), this.state = Te)))
                                        }
                                        break;
                                    case Se:
                                        (t = this.tracks[this.trackId]) && t.details && (this.state = ve);
                                        break;
                                    case Ee:
                                        var A = it.now(),
                                            O = this.retryDate,
                                            D = (o = this.media) && o.seeking;
                                        (!O || A >= O || D) && (u.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = ve);
                                        break;
                                    case xe:
                                        var L = this.videoTrackCC;
                                        if (void 0 === this.initPTS[L]) break;
                                        var I = this.waitingFragment;
                                        if (I) {
                                            var M = I.frag.cc;
                                            L !== M ? (t = this.tracks[this.trackId]).details && t.details.live && (u.logger.warn("Waiting fragment CC (" + M + ") does not match video track CC (" + L + ")"), this.waitingFragment = null, this.state = ve) : (this.state = Te, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                                        } else this.state = ve
                                }
                            }, d.onMediaAttached = function(e) {
                                var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                                var r = this.config;
                                this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                            }, d.onMediaDetaching = function() {
                                var e = this.media;
                                e && e.ended && (u.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                            }, d.onAudioTracksUpdated = function(e) {
                                u.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                            }, d.onAudioTrackSwitching = function(e) {
                                var t = !!e.url;
                                this.trackId = e.id, this.fragCurrent = null, this.state = ye, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = ve), this.tick()
                            }, d.onAudioTrackLoaded = function(e) {
                                var t = e.details,
                                    r = e.id,
                                    n = this.tracks[r],
                                    i = t.totalduration,
                                    a = 0;
                                if (u.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), t.live) {
                                    var o = n.details;
                                    o && t.fragments.length > 0 ? (re(o, t), a = t.fragments[0].start, t.PTSKnown ? u.logger.log("live audio playlist sliding:" + a.toFixed(3)) : u.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, u.logger.log("live audio playlist - first load, unknown sliding"))
                                } else t.PTSKnown = !1;
                                if (n.details = t, !this.startFragRequested) {
                                    if (-1 === this.startPosition) {
                                        var s = t.startTimeOffset;
                                        Object(l.isFiniteNumber)(s) ? (u.logger.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s) : t.live ? (this.startPosition = this.computeLivePosition(a, t), u.logger.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
                                    }
                                    this.nextLoadPosition = this.startPosition
                                }
                                this.state === Se && (this.state = ve), this.tick()
                            }, d.onKeyLoaded = function() {
                                this.state === be && (this.state = ve, this.tick())
                            }, d.onFragLoaded = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                if (this.state === Te && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                                    var n = this.tracks[this.trackId],
                                        i = n.details,
                                        a = i.totalduration,
                                        o = t.level,
                                        s = t.sn,
                                        l = t.cc,
                                        d = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
                                        f = this.stats = e.stats;
                                    if ("initSegment" === s) this.state = ve, f.tparsed = f.tbuffered = it.now(), i.initSegment.data = e.payload, this.hls.trigger(c.default.FRAG_BUFFERED, {
                                        stats: f,
                                        frag: t,
                                        id: "audio"
                                    }), this.tick();
                                    else {
                                        this.state = we, this.appended = !1, this.demuxer || (this.demuxer = new J(this.hls, "audio"));
                                        var h = this.initPTS[l],
                                            p = i.initSegment ? i.initSegment.data : [];
                                        i.initSegment || void 0 !== h ? (this.pendingBuffering = !0, u.logger.log("Demuxing " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.demuxer.push(e.payload, p, d, null, t, a, !1, h)) : (u.logger.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.waitingFragment = e, this.state = xe)
                                    }
                                }
                                this.fragLoadError = 0
                            }, d.onFragParsingInitSegment = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === we) {
                                    var n, i = e.tracks;
                                    if (i.video && delete i.video, n = i.audio) {
                                        n.levelCodec = n.codec, n.id = e.id, this.hls.trigger(c.default.BUFFER_CODECS, i), u.logger.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                        var a = n.initSegment;
                                        if (a) {
                                            var o = {
                                                type: "audio",
                                                data: a,
                                                parent: "audio",
                                                content: "initSegment"
                                            };
                                            this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(c.default.BUFFER_APPENDING, o))
                                        }
                                        this.tick()
                                    }
                                }
                            }, d.onFragParsingData = function(e) {
                                var t = this,
                                    r = this.fragCurrent,
                                    n = e.frag;
                                if (r && "audio" === e.id && "audio" === e.type && n.sn === r.sn && n.level === r.level && this.state === we) {
                                    var i = this.trackId,
                                        a = this.tracks[i],
                                        o = this.hls;
                                    Object(l.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), r.addElementaryStream(m.AUDIO), u.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), te(a.details, r, e.startPTS, e.endPTS);
                                    var d = this.audioSwitch,
                                        f = this.media,
                                        h = !1;
                                    if (d)
                                        if (f && f.readyState) {
                                            var p = f.currentTime;
                                            u.logger.log("switching audio track : currentTime:" + p), p >= e.startPTS && (u.logger.log("switching audio track : flushing all audio"), this.state = _e, o.trigger(c.default.BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: Number.POSITIVE_INFINITY,
                                                type: "audio"
                                            }), h = !0, this.audioSwitch = !1, o.trigger(c.default.AUDIO_TRACK_SWITCHED, {
                                                id: i
                                            }))
                                        } else this.audioSwitch = !1, o.trigger(c.default.AUDIO_TRACK_SWITCHED, {
                                            id: i
                                        });
                                    var g = this.pendingData;
                                    if (!g) return u.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void o.trigger(c.default.ERROR, {
                                        type: s.ErrorTypes.MEDIA_ERROR,
                                        details: null,
                                        fatal: !0
                                    });
                                    this.audioSwitch || ([e.data1, e.data2].forEach((function(t) {
                                        t && t.length && g.push({
                                            type: e.type,
                                            data: t,
                                            parent: "audio",
                                            content: "data"
                                        })
                                    })), !h && g.length && (g.forEach((function(e) {
                                        t.state === we && (t.pendingBuffering = !0, t.hls.trigger(c.default.BUFFER_APPENDING, e))
                                    })), this.pendingData = [], this.appended = !0)), this.tick()
                                }
                            }, d.onFragParsed = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === we && (this.stats.tparsed = it.now(), this.state = ke, this._checkAppendedParsed())
                            }, d.onBufferReset = function() {
                                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                            }, d.onBufferCreated = function(e) {
                                var t = e.tracks.audio;
                                t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                            }, d.onBufferAppended = function(e) {
                                if ("audio" === e.parent) {
                                    var t = this.state;
                                    t !== we && t !== ke || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                                }
                            }, d._checkAppendedParsed = function() {
                                if (!(this.state !== ke || this.appended && this.pendingBuffering)) {
                                    var e = this.fragCurrent,
                                        t = this.stats,
                                        r = this.hls;
                                    if (e) {
                                        this.fragPrevious = e, t.tbuffered = it.now(), r.trigger(c.default.FRAG_BUFFERED, {
                                            stats: t,
                                            frag: e,
                                            id: "audio"
                                        });
                                        var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        n && u.logger.log("audio buffered : " + ae.toString(n.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(c.default.AUDIO_TRACK_SWITCHED, {
                                            id: this.trackId
                                        })), this.state = ve
                                    }
                                    this.tick()
                                }
                            }, d.onError = function(e) {
                                var t = e.frag;
                                if (!t || "audio" === t.type) switch (e.details) {
                                    case s.ErrorDetails.FRAG_LOAD_ERROR:
                                    case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        var r = e.frag;
                                        if (r && "audio" !== r.type) break;
                                        if (!e.fatal) {
                                            var n = this.fragLoadError;
                                            n ? n++ : n = 1;
                                            var i = this.config;
                                            if (n <= i.fragLoadingMaxRetry) {
                                                this.fragLoadError = n;
                                                var a = Math.min(Math.pow(2, n - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                                u.logger.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = it.now() + a, this.state = Ee
                                            } else u.logger.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Re
                                        }
                                        break;
                                    case s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                    case s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case s.ErrorDetails.KEY_LOAD_ERROR:
                                    case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        this.state !== Re && (this.state = e.fatal ? Re : ve, u.logger.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
                                        break;
                                    case s.ErrorDetails.BUFFER_FULL_ERROR:
                                        if ("audio" === e.parent && (this.state === we || this.state === ke)) {
                                            var o = this.mediaBuffer,
                                                l = this.media.currentTime;
                                            if (o && K.isBuffered(o, l) && K.isBuffered(o, l + .5)) {
                                                var d = this.config;
                                                d.maxMaxBufferLength >= d.maxBufferLength && (d.maxMaxBufferLength /= 2, u.logger.warn("AudioStreamController: reduce max buffer length to " + d.maxMaxBufferLength + "s")), this.state = ve
                                            } else u.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = _e, this.hls.trigger(c.default.BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: Number.POSITIVE_INFINITY,
                                                type: "audio"
                                            })
                                        }
                                }
                            }, d.onBufferFlushed = function() {
                                var e = this,
                                    t = this.pendingData;
                                t && t.length ? (u.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) {
                                    e.hls.trigger(c.default.BUFFER_APPENDING, t)
                                })), this.appended = !0, this.pendingData = [], this.state = ke) : (this.state = ve, this.fragPrevious = null, this.tick())
                            }, i = n, (a = [{
                                key: "state",
                                set: function(e) {
                                    if (this.state !== e) {
                                        var t = this.state;
                                        this._state = e, u.logger.log("audio stream:" + t + "->" + e)
                                    }
                                },
                                get: function() {
                                    return this._state
                                }
                            }]) && nt(i.prototype, a), o && nt(i, o), n
                        }(Ae),
                        ot = function() {
                            if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                            var e = {
                                    "": !0,
                                    lr: !0,
                                    rl: !0
                                },
                                t = {
                                    start: !0,
                                    middle: !0,
                                    end: !0,
                                    left: !0,
                                    right: !0
                                };

                            function r(e) {
                                return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
                            }

                            function n(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) e[n] = r[n]
                                }
                                return e
                            }

                            function i(t, i, a) {
                                var o = this,
                                    s = {
                                        enumerable: !0
                                    };
                                o.hasBeenReset = !1;
                                var l = "",
                                    c = !1,
                                    u = t,
                                    d = i,
                                    f = a,
                                    h = null,
                                    p = "",
                                    m = !0,
                                    g = "auto",
                                    v = "start",
                                    y = 50,
                                    b = "middle",
                                    T = 50,
                                    E = "middle";
                                Object.defineProperty(o, "id", n({}, s, {
                                    get: function() {
                                        return l
                                    },
                                    set: function(e) {
                                        l = "" + e
                                    }
                                })), Object.defineProperty(o, "pauseOnExit", n({}, s, {
                                    get: function() {
                                        return c
                                    },
                                    set: function(e) {
                                        c = !!e
                                    }
                                })), Object.defineProperty(o, "startTime", n({}, s, {
                                    get: function() {
                                        return u
                                    },
                                    set: function(e) {
                                        if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                                        u = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "endTime", n({}, s, {
                                    get: function() {
                                        return d
                                    },
                                    set: function(e) {
                                        if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                                        d = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "text", n({}, s, {
                                    get: function() {
                                        return f
                                    },
                                    set: function(e) {
                                        f = "" + e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "region", n({}, s, {
                                    get: function() {
                                        return h
                                    },
                                    set: function(e) {
                                        h = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "vertical", n({}, s, {
                                    get: function() {
                                        return p
                                    },
                                    set: function(t) {
                                        var r = function(t) {
                                            return "string" == typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
                                        }(t);
                                        if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        p = r, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "snapToLines", n({}, s, {
                                    get: function() {
                                        return m
                                    },
                                    set: function(e) {
                                        m = !!e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "line", n({}, s, {
                                    get: function() {
                                        return g
                                    },
                                    set: function(e) {
                                        if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                                        g = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "lineAlign", n({}, s, {
                                    get: function() {
                                        return v
                                    },
                                    set: function(e) {
                                        var t = r(e);
                                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                        v = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "position", n({}, s, {
                                    get: function() {
                                        return y
                                    },
                                    set: function(e) {
                                        if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                                        y = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "positionAlign", n({}, s, {
                                    get: function() {
                                        return b
                                    },
                                    set: function(e) {
                                        var t = r(e);
                                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                        b = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "size", n({}, s, {
                                    get: function() {
                                        return T
                                    },
                                    set: function(e) {
                                        if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                                        T = e, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(o, "align", n({}, s, {
                                    get: function() {
                                        return E
                                    },
                                    set: function(e) {
                                        var t = r(e);
                                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                        E = t, this.hasBeenReset = !0
                                    }
                                })), o.displayState = void 0
                            }
                            return i.prototype.getCueAsHTML = function() {
                                return window.WebVTT.convertCueToDOMTree(window, this.text)
                            }, i
                        }(),
                        st = function() {
                            return {
                                decode: function(e) {
                                    if (!e) return "";
                                    if ("string" != typeof e) throw new Error("Error - expected string data.");
                                    return decodeURIComponent(encodeURIComponent(e))
                                }
                            }
                        };

                    function lt() {
                        this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new st, this.regionList = []
                    }

                    function ct() {
                        this.values = Object.create(null)
                    }

                    function ut(e, t, r, n) {
                        var i = n ? e.split(n) : [e];
                        for (var a in i)
                            if ("string" == typeof i[a]) {
                                var o = i[a].split(r);
                                2 === o.length && t(o[0], o[1])
                            }
                    }
                    ct.prototype = {
                        set: function(e, t) {
                            this.get(e) || "" === t || (this.values[e] = t)
                        },
                        get: function(e, t, r) {
                            return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
                        },
                        has: function(e) {
                            return e in this.values
                        },
                        alt: function(e, t, r) {
                            for (var n = 0; n < r.length; ++n)
                                if (t === r[n]) {
                                    this.set(e, t);
                                    break
                                }
                        },
                        integer: function(e, t) {
                            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                        },
                        percent: function(e, t) {
                            return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
                        }
                    };
                    var dt = new ot(0, 0, 0),
                        ft = "middle" === dt.align ? "middle" : "center";

                    function ht(e, t, r) {
                        var n = e;

                        function i() {
                            var t = function(e) {
                                function t(e, t, r, n) {
                                    return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | n) / 1e3
                                }
                                var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                                return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                            }(e);
                            if (null === t) throw new Error("Malformed timestamp: " + n);
                            return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
                        }

                        function a() {
                            e = e.replace(/^\s+/, "")
                        }
                        if (a(), t.startTime = i(), a(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
                        e = e.substr(3), a(), t.endTime = i(), a(),
                            function(e, t) {
                                var n = new ct;
                                ut(e, (function(e, t) {
                                    switch (e) {
                                        case "region":
                                            for (var i = r.length - 1; i >= 0; i--)
                                                if (r[i].id === t) {
                                                    n.set(e, r[i].region);
                                                    break
                                                }
                                            break;
                                        case "vertical":
                                            n.alt(e, t, ["rl", "lr"]);
                                            break;
                                        case "line":
                                            var a = t.split(","),
                                                o = a[0];
                                            n.integer(e, o), n.percent(e, o) && n.set("snapToLines", !1), n.alt(e, o, ["auto"]), 2 === a.length && n.alt("lineAlign", a[1], ["start", ft, "end"]);
                                            break;
                                        case "position":
                                            a = t.split(","), n.percent(e, a[0]), 2 === a.length && n.alt("positionAlign", a[1], ["start", ft, "end", "line-left", "line-right", "auto"]);
                                            break;
                                        case "size":
                                            n.percent(e, t);
                                            break;
                                        case "align":
                                            n.alt(e, t, ["start", ft, "end", "left", "right"])
                                    }
                                }), /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", "");
                                var i = n.get("line", "auto");
                                "auto" === i && -1 === dt.line && (i = -1), t.line = i, t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", ft);
                                var a = n.get("position", "auto");
                                "auto" === a && 50 === dt.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a
                            }(e, t)
                    }

                    function pt(e) {
                        return e.replace(/<br(?: \/)?>/gi, "\n")
                    }
                    lt.prototype = {
                        parse: function(e) {
                            var t = this;

                            function r() {
                                var e = t.buffer,
                                    r = 0;
                                for (e = pt(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
                                var n = e.substr(0, r);
                                return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), n
                            }
                            e && (t.buffer += t.decoder.decode(e, {
                                stream: !0
                            }));
                            try {
                                var n;
                                if ("INITIAL" === t.state) {
                                    if (!/\r\n|\n/.test(t.buffer)) return this;
                                    var i = (n = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                                    if (!i || !i[0]) throw new Error("Malformed WebVTT signature.");
                                    t.state = "HEADER"
                                }
                                for (var a = !1; t.buffer;) {
                                    if (!/\r\n|\n/.test(t.buffer)) return this;
                                    switch (a ? a = !1 : n = r(), t.state) {
                                        case "HEADER":
                                            /:/.test(n) ? ut(n, (function(e, t) {}), /:/) : n || (t.state = "ID");
                                            continue;
                                        case "NOTE":
                                            n || (t.state = "ID");
                                            continue;
                                        case "ID":
                                            if (/^NOTE($|[ \t])/.test(n)) {
                                                t.state = "NOTE";
                                                break
                                            }
                                            if (!n) continue;
                                            if (t.cue = new ot(0, 0, ""), t.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                                t.cue.id = n;
                                                continue
                                            }
                                        case "CUE":
                                            try {
                                                ht(n, t.cue, t.regionList)
                                            } catch (e) {
                                                t.cue = null, t.state = "BADCUE";
                                                continue
                                            }
                                            t.state = "CUETEXT";
                                            continue;
                                        case "CUETEXT":
                                            var o = -1 !== n.indexOf("--\x3e");
                                            if (!n || o && (a = !0)) {
                                                t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                                                continue
                                            }
                                            t.cue.text && (t.cue.text += "\n"), t.cue.text += n;
                                            continue;
                                        case "BADCUE":
                                            n || (t.state = "ID");
                                            continue
                                    }
                                }
                            } catch (e) {
                                "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
                            }
                            return this
                        },
                        flush: function() {
                            try {
                                if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
                            } catch (e) {
                                throw e
                            }
                            return this.onflush && this.onflush(), this
                        }
                    };
                    var mt = lt;

                    function gt(e, t, r, n) {
                        for (var i, a, o, s, l, c = window.VTTCue || TextTrackCue, u = 0; u < n.rows.length; u++)
                            if (o = !0, s = 0, l = "", !(i = n.rows[u]).isEmpty()) {
                                for (var d = 0; d < i.chars.length; d++) i.chars[d].uchar.match(/\s/) && o ? s++ : (l += i.chars[d].uchar, o = !1);
                                i.cueStartTime = t, t === r && (r += 1e-4), a = new c(t, r, pt(l.trim())), s >= 16 ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? a.line = u + 1 : a.line = u > 7 ? u - 2 : u + 1, a.align = "left", a.position = Math.max(0, Math.min(100, s / 32 * 100)), e.addCue(a)
                            }
                    }
                    var vt, yt = {
                            42: 225,
                            92: 233,
                            94: 237,
                            95: 243,
                            96: 250,
                            123: 231,
                            124: 247,
                            125: 209,
                            126: 241,
                            127: 9608,
                            128: 174,
                            129: 176,
                            130: 189,
                            131: 191,
                            132: 8482,
                            133: 162,
                            134: 163,
                            135: 9834,
                            136: 224,
                            137: 32,
                            138: 232,
                            139: 226,
                            140: 234,
                            141: 238,
                            142: 244,
                            143: 251,
                            144: 193,
                            145: 201,
                            146: 211,
                            147: 218,
                            148: 220,
                            149: 252,
                            150: 8216,
                            151: 161,
                            152: 42,
                            153: 8217,
                            154: 9473,
                            155: 169,
                            156: 8480,
                            157: 8226,
                            158: 8220,
                            159: 8221,
                            160: 192,
                            161: 194,
                            162: 199,
                            163: 200,
                            164: 202,
                            165: 203,
                            166: 235,
                            167: 206,
                            168: 207,
                            169: 239,
                            170: 212,
                            171: 217,
                            172: 249,
                            173: 219,
                            174: 171,
                            175: 187,
                            176: 195,
                            177: 227,
                            178: 205,
                            179: 204,
                            180: 236,
                            181: 210,
                            182: 242,
                            183: 213,
                            184: 245,
                            185: 123,
                            186: 125,
                            187: 92,
                            188: 94,
                            189: 95,
                            190: 124,
                            191: 8764,
                            192: 196,
                            193: 228,
                            194: 214,
                            195: 246,
                            196: 223,
                            197: 165,
                            198: 164,
                            199: 9475,
                            200: 197,
                            201: 229,
                            202: 216,
                            203: 248,
                            204: 9487,
                            205: 9491,
                            206: 9495,
                            207: 9499
                        },
                        bt = function(e) {
                            var t = e;
                            return yt.hasOwnProperty(e) && (t = yt[e]), String.fromCharCode(t)
                        },
                        Tt = {
                            17: 1,
                            18: 3,
                            21: 5,
                            22: 7,
                            23: 9,
                            16: 11,
                            19: 12,
                            20: 14
                        },
                        Et = {
                            17: 2,
                            18: 4,
                            21: 6,
                            22: 8,
                            23: 10,
                            19: 13,
                            20: 15
                        },
                        St = {
                            25: 1,
                            26: 3,
                            29: 5,
                            30: 7,
                            31: 9,
                            24: 11,
                            27: 12,
                            28: 14
                        },
                        wt = {
                            25: 2,
                            26: 4,
                            29: 6,
                            30: 8,
                            31: 10,
                            27: 13,
                            28: 15
                        },
                        kt = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
                    ! function(e) {
                        e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA"
                    }(vt || (vt = {}));
                    var _t = {
                            verboseFilter: {
                                DATA: 3,
                                DEBUG: 3,
                                INFO: 2,
                                WARNING: 2,
                                TEXT: 1,
                                ERROR: 0
                            },
                            time: null,
                            verboseLevel: 0,
                            setTime: function(e) {
                                this.time = e
                            },
                            log: function(e, t) {
                                this.verboseFilter[e], this.verboseLevel
                            }
                        },
                        Ct = function(e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
                            return t
                        },
                        Rt = function() {
                            function e(e, t, r, n, i) {
                                this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = n || "black", this.flash = i || !1
                            }
                            var t = e.prototype;
                            return t.reset = function() {
                                this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                            }, t.setStyles = function(e) {
                                for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    e.hasOwnProperty(n) && (this[n] = e[n])
                                }
                            }, t.isDefault = function() {
                                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                            }, t.equals = function(e) {
                                return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                            }, t.copy = function(e) {
                                this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                            }, t.toString = function() {
                                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                            }, e
                        }(),
                        xt = function() {
                            function e(e, t, r, n, i, a) {
                                this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new Rt(t, r, n, i, a)
                            }
                            var t = e.prototype;
                            return t.reset = function() {
                                this.uchar = " ", this.penState.reset()
                            }, t.setChar = function(e, t) {
                                this.uchar = e, this.penState.copy(t)
                            }, t.setPenState = function(e) {
                                this.penState.copy(e)
                            }, t.equals = function(e) {
                                return this.uchar === e.uchar && this.penState.equals(e.penState)
                            }, t.copy = function(e) {
                                this.uchar = e.uchar, this.penState.copy(e.penState)
                            }, t.isEmpty = function() {
                                return " " === this.uchar && this.penState.isDefault()
                            }, e
                        }(),
                        Pt = function() {
                            function e() {
                                this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.chars = [];
                                for (var e = 0; e < 100; e++) this.chars.push(new xt);
                                this.pos = 0, this.currPenState = new Rt
                            }
                            var t = e.prototype;
                            return t.equals = function(e) {
                                for (var t = !0, r = 0; r < 100; r++)
                                    if (!this.chars[r].equals(e.chars[r])) {
                                        t = !1;
                                        break
                                    }
                                return t
                            }, t.copy = function(e) {
                                for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
                            }, t.isEmpty = function() {
                                for (var e = !0, t = 0; t < 100; t++)
                                    if (!this.chars[t].isEmpty()) {
                                        e = !1;
                                        break
                                    }
                                return e
                            }, t.setCursor = function(e) {
                                this.pos !== e && (this.pos = e), this.pos < 0 ? (_t.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (_t.log("ERROR", "Too large cursor position " + this.pos), this.pos = 100)
                            }, t.moveCursor = function(e) {
                                var t = this.pos + e;
                                if (e > 1)
                                    for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
                                this.setCursor(t)
                            }, t.backSpace = function() {
                                this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                            }, t.insertChar = function(e) {
                                e >= 144 && this.backSpace();
                                var t = bt(e);
                                this.pos >= 100 ? _t.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
                            }, t.clearFromPos = function(e) {
                                var t;
                                for (t = e; t < 100; t++) this.chars[t].reset()
                            }, t.clear = function() {
                                this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                            }, t.clearToEndOfRow = function() {
                                this.clearFromPos(this.pos)
                            }, t.getTextString = function() {
                                for (var e = [], t = !0, r = 0; r < 100; r++) {
                                    var n = this.chars[r].uchar;
                                    " " !== n && (t = !1), e.push(n)
                                }
                                return t ? "" : e.join("")
                            }, t.setPenStyles = function(e) {
                                this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
                            }, e
                        }(),
                        At = function() {
                            function e() {
                                this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.rows = [];
                                for (var e = 0; e < 15; e++) this.rows.push(new Pt);
                                this.currRow = 14, this.nrRollUpRows = null, this.reset()
                            }
                            var t = e.prototype;
                            return t.reset = function() {
                                for (var e = 0; e < 15; e++) this.rows[e].clear();
                                this.currRow = 14
                            }, t.equals = function(e) {
                                for (var t = !0, r = 0; r < 15; r++)
                                    if (!this.rows[r].equals(e.rows[r])) {
                                        t = !1;
                                        break
                                    }
                                return t
                            }, t.copy = function(e) {
                                for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
                            }, t.isEmpty = function() {
                                for (var e = !0, t = 0; t < 15; t++)
                                    if (!this.rows[t].isEmpty()) {
                                        e = !1;
                                        break
                                    }
                                return e
                            }, t.backSpace = function() {
                                this.rows[this.currRow].backSpace()
                            }, t.clearToEndOfRow = function() {
                                this.rows[this.currRow].clearToEndOfRow()
                            }, t.insertChar = function(e) {
                                this.rows[this.currRow].insertChar(e)
                            }, t.setPen = function(e) {
                                this.rows[this.currRow].setPenStyles(e)
                            }, t.moveCursor = function(e) {
                                this.rows[this.currRow].moveCursor(e)
                            }, t.setCursor = function(e) {
                                _t.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
                            }, t.setPAC = function(e) {
                                _t.log("INFO", "pacData = " + JSON.stringify(e));
                                var t = e.row - 1;
                                if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                                    for (var r = 0; r < 15; r++) this.rows[r].clear();
                                    var n = this.currRow + 1 - this.nrRollUpRows,
                                        i = this.lastOutputScreen;
                                    if (i) {
                                        var a = i.rows[n].cueStartTime;
                                        if (a && _t.time && a < _t.time)
                                            for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(i.rows[n + o])
                                    }
                                }
                                this.currRow = t;
                                var s = this.rows[this.currRow];
                                if (null !== e.indent) {
                                    var l = e.indent,
                                        c = Math.max(l - 1, 0);
                                    s.setCursor(e.indent), e.color = s.chars[c].penState.foreground
                                }
                                var u = {
                                    foreground: e.color,
                                    underline: e.underline,
                                    italics: e.italics,
                                    background: "black",
                                    flash: !1
                                };
                                this.setPen(u)
                            }, t.setBkgData = function(e) {
                                _t.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                            }, t.setRollUpRows = function(e) {
                                this.nrRollUpRows = e
                            }, t.rollUp = function() {
                                if (null !== this.nrRollUpRows) {
                                    _t.log("TEXT", this.getDisplayText());
                                    var e = this.currRow + 1 - this.nrRollUpRows,
                                        t = this.rows.splice(e, 1)[0];
                                    t.clear(), this.rows.splice(this.currRow, 0, t), _t.log("INFO", "Rolling up")
                                } else _t.log("DEBUG", "roll_up but nrRollUpRows not set yet")
                            }, t.getDisplayText = function(e) {
                                e = e || !1;
                                for (var t = [], r = "", n = -1, i = 0; i < 15; i++) {
                                    var a = this.rows[i].getTextString();
                                    a && (n = i + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()))
                                }
                                return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
                            }, t.getTextAndFormat = function() {
                                return this.rows
                            }, e
                        }(),
                        Ot = function() {
                            function e(e, t) {
                                this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.lastCueEndTime = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new At, this.nonDisplayedMemory = new At, this.lastOutputScreen = new At, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                            }
                            var t = e.prototype;
                            return t.reset = function() {
                                this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                            }, t.getHandler = function() {
                                return this.outputFilter
                            }, t.setHandler = function(e) {
                                this.outputFilter = e
                            }, t.setPAC = function(e) {
                                this.writeScreen.setPAC(e)
                            }, t.setBkgData = function(e) {
                                this.writeScreen.setBkgData(e)
                            }, t.setMode = function(e) {
                                e !== this.mode && (this.mode = e, _t.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                            }, t.insertChars = function(e) {
                                for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                                var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                _t.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (_t.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                            }, t.ccRCL = function() {
                                _t.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                            }, t.ccBS = function() {
                                _t.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                            }, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() {
                                _t.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                            }, t.ccRU = function(e) {
                                _t.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                            }, t.ccFON = function() {
                                _t.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                                    flash: !0
                                })
                            }, t.ccRDC = function() {
                                _t.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                            }, t.ccTR = function() {
                                _t.log("INFO", "TR"), this.setMode("MODE_TEXT")
                            }, t.ccRTD = function() {
                                _t.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                            }, t.ccEDM = function() {
                                _t.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                            }, t.ccCR = function() {
                                _t.log("INFO", "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                            }, t.ccENM = function() {
                                _t.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                            }, t.ccEOC = function() {
                                if (_t.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                    var e = this.displayedMemory;
                                    this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, _t.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                                }
                                this.outputDataUpdate(!0)
                            }, t.ccTO = function(e) {
                                _t.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
                            }, t.ccMIDROW = function(e) {
                                var t = {
                                    flash: !1
                                };
                                if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                                else {
                                    var r = Math.floor(e / 2) - 16;
                                    t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                                }
                                _t.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                            }, t.outputDataUpdate = function(e) {
                                void 0 === e && (e = !1);
                                var t = _t.time;
                                null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                            }, t.cueSplitAtTime = function(e) {
                                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                            }, e
                        }(),
                        Dt = function() {
                            function e(e, t, r) {
                                this.field = void 0, this.outputs = void 0, this.channels = void 0, this.currChNr = void 0, this.lastCmdA = void 0, this.lastCmdB = void 0, this.lastTime = void 0, this.dataCounters = void 0, this.field = e || 1, this.outputs = [t, r], this.channels = [new Ot(1, t), new Ot(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.lastTime = null, this.dataCounters = {
                                    padding: 0,
                                    char: 0,
                                    cmd: 0,
                                    other: 0
                                }
                            }
                            var t = e.prototype;
                            return t.getHandler = function(e) {
                                return this.channels[e].getHandler()
                            }, t.setHandler = function(e, t) {
                                this.channels[e].setHandler(t)
                            }, t.addData = function(e, t) {
                                var r, n, i, a = !1;
                                this.lastTime = e, _t.setTime(e);
                                for (var o = 0; o < t.length; o += 2) n = 127 & t[o], i = 127 & t[o + 1], 0 !== n || 0 !== i ? (_t.log("DATA", "[" + Ct([t[o], t[o + 1]]) + "] -> (" + Ct([n, i]) + ")"), (r = this.parseCmd(n, i)) || (r = this.parseMidrow(n, i)), r || (r = this.parsePAC(n, i)), r || (r = this.parseBackgroundAttributes(n, i)), r || (a = this.parseChars(n, i)) && (this.currChNr && this.currChNr >= 0 ? this.channels[this.currChNr - 1].insertChars(a) : _t.log("WARNING", "No channel found yet. TEXT-MODE?")), r ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, _t.log("WARNING", "Couldn't parse cleaned data " + Ct([n, i]) + " orig: " + Ct([t[o], t[o + 1]])))) : this.dataCounters.padding += 2
                            }, t.parseCmd = function(e, t) {
                                var r = null;
                                if (!((20 === e || 28 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
                                if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, _t.log("DEBUG", "Repeated command (" + Ct([e, t]) + ") is dropped"), !0;
                                r = 20 === e || 23 === e ? 1 : 2;
                                var n = this.channels[r - 1];
                                return 20 === e || 28 === e ? 32 === t ? n.ccRCL() : 33 === t ? n.ccBS() : 34 === t ? n.ccAOF() : 35 === t ? n.ccAON() : 36 === t ? n.ccDER() : 37 === t ? n.ccRU(2) : 38 === t ? n.ccRU(3) : 39 === t ? n.ccRU(4) : 40 === t ? n.ccFON() : 41 === t ? n.ccRDC() : 42 === t ? n.ccTR() : 43 === t ? n.ccRTD() : 44 === t ? n.ccEDM() : 45 === t ? n.ccCR() : 46 === t ? n.ccENM() : 47 === t && n.ccEOC() : n.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                            }, t.parseMidrow = function(e, t) {
                                var r = null;
                                return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (_t.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), _t.log("DEBUG", "MIDROW (" + Ct([e, t]) + ")"), !0))
                            }, t.parsePAC = function(e, t) {
                                var r, n = null;
                                if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
                                if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                                r = e <= 23 ? 1 : 2, n = t >= 64 && t <= 95 ? 1 === r ? Tt[e] : St[e] : 1 === r ? Et[e] : wt[e];
                                var i = this.interpretPAC(n, t);
                                return this.channels[r - 1].setPAC(i), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                            }, t.interpretPAC = function(e, t) {
                                var r = t,
                                    n = {
                                        color: null,
                                        italics: !1,
                                        indent: null,
                                        underline: !1,
                                        row: e
                                    };
                                return r = t > 95 ? t - 96 : t - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
                            }, t.parseChars = function(e, t) {
                                var r = null,
                                    n = null,
                                    i = null;
                                if (e >= 25 ? (r = 2, i = e - 8) : (r = 1, i = e), i >= 17 && i <= 19) {
                                    var a = t;
                                    a = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144, _t.log("INFO", "Special char '" + bt(a) + "' in channel " + r), n = [a]
                                } else e >= 32 && e <= 127 && (n = 0 === t ? [e] : [e, t]);
                                if (n) {
                                    var o = Ct(n);
                                    _t.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
                                }
                                return n
                            }, t.parseBackgroundAttributes = function(e, t) {
                                var r, n, i;
                                return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {}, 16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = kt[n], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), i = e < 24 ? 1 : 2, this.channels[i - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
                            }, t.reset = function() {
                                for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                                this.lastCmdA = null, this.lastCmdB = null
                            }, t.cueSplitAtTime = function(e) {
                                for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
                            }, e
                        }(),
                        Lt = function() {
                            function e(e, t) {
                                this.timelineController = void 0, this.trackName = void 0, this.startTime = void 0, this.endTime = void 0, this.screen = void 0, this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null
                            }
                            var t = e.prototype;
                            return t.dispatchCue = function() {
                                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
                            }, t.newCue = function(e, t, r) {
                                (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                            }, e
                        }(),
                        It = function(e, t, r) {
                            return e.substr(r || 0, t.length) === t
                        },
                        Mt = function(e) {
                            for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                            return (t >>> 0).toString()
                        },
                        Nt = {
                            parse: function(e, t, r, n, i, a) {
                                var o, s = Object(Ne.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
                                    c = "00:00.000",
                                    u = 0,
                                    d = 0,
                                    f = 0,
                                    h = [],
                                    p = !0,
                                    m = !1,
                                    g = new mt;
                                g.oncue = function(e) {
                                    var t = r[n],
                                        i = r.ccOffset;
                                    t && t.new && (void 0 !== d ? i = r.ccOffset = t.start : function(e, t, r) {
                                        var n = e[t],
                                            i = e[n.prevCC];
                                        if (!i || !i.new && n.new) return e.ccOffset = e.presentationOffset = n.start, void(n.new = !1);
                                        for (; i && i.new;) e.ccOffset += n.start - i.start, n.new = !1, i = e[(n = i).prevCC];
                                        e.presentationOffset = r
                                    }(r, n, f)), f && (i = f - r.presentationOffset), m && (e.startTime += i - d, e.endTime += i - d), e.id = Mt(e.startTime.toString()) + Mt(e.endTime.toString()) + Mt(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && h.push(e)
                                }, g.onparsingerror = function(e) {
                                    o = e
                                }, g.onflush = function() {
                                    o && a ? a(o) : i(h)
                                }, s.forEach((function(e) {
                                    if (p) {
                                        if (It(e, "X-TIMESTAMP-MAP=")) {
                                            p = !1, m = !0, e.substr(16).split(",").forEach((function(e) {
                                                It(e, "LOCAL:") ? c = e.substr(6) : It(e, "MPEGTS:") && (u = parseInt(e.substr(7)))
                                            }));
                                            try {
                                                t + (9e4 * r[n].start || 0) < 0 && (t += 8589934592), u -= t, d = function(e) {
                                                    var t = parseInt(e.substr(-3)),
                                                        r = parseInt(e.substr(-6, 2)),
                                                        n = parseInt(e.substr(-9, 2)),
                                                        i = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
                                                    if (!(Object(l.isFiniteNumber)(t) && Object(l.isFiniteNumber)(r) && Object(l.isFiniteNumber)(n) && Object(l.isFiniteNumber)(i))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
                                                    return t += 1e3 * r, t += 6e4 * n, t += 36e5 * i
                                                }(c) / 1e3, f = u / 9e4
                                            } catch (e) {
                                                m = !1, o = e
                                            }
                                            return
                                        }
                                        "" === e && (p = !1)
                                    }
                                    g.parse(e + "\n")
                                })), g.flush()
                            }
                        };

                    function Ft(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function Ut(e, t) {
                        return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
                    }
                    var jt = function(e) {
                        var t, r;

                        function n(t) {
                            var r;
                            if ((r = e.call(this, t, c.default.MEDIA_ATTACHING, c.default.MEDIA_DETACHING, c.default.FRAG_PARSING_USERDATA, c.default.FRAG_DECRYPTED, c.default.MANIFEST_LOADING, c.default.MANIFEST_LOADED, c.default.FRAG_LOADED, c.default.INIT_PTS_FOUND) || this).media = null, r.config = void 0, r.enabled = !0, r.Cues = void 0, r.textTracks = [], r.tracks = [], r.initPTS = [], r.unparsedVttFrags = [], r.cueRanges = [], r.captionsTracks = {}, r.captionsProperties = void 0, r.cea608Parser = void 0, r.lastSn = -1, r.prevCC = -1, r.vttCCs = null, r.hls = t, r.config = t.config, r.Cues = t.config.cueHandler, r.captionsProperties = {
                                    textTrack1: {
                                        label: r.config.captionsTextTrack1Label,
                                        languageCode: r.config.captionsTextTrack1LanguageCode
                                    },
                                    textTrack2: {
                                        label: r.config.captionsTextTrack2Label,
                                        languageCode: r.config.captionsTextTrack2LanguageCode
                                    }
                                }, r.config.enableCEA708Captions) {
                                var n = new Lt(Ft(r), "textTrack1"),
                                    i = new Lt(Ft(r), "textTrack2");
                                r.cea608Parser = new Dt(0, n, i)
                            }
                            return r
                        }
                        r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                        var i = n.prototype;
                        return i.addCues = function(e, t, r, n) {
                            for (var i, a, o, s, l = this.cueRanges, c = !1, u = l.length; u--;) {
                                var d = l[u],
                                    f = (i = d[0], a = d[1], o = t, s = r, Math.min(a, s) - Math.max(i, o));
                                if (f >= 0 && (d[0] = Math.min(d[0], t), d[1] = Math.max(d[1], r), c = !0, f / (r - t) > .5)) return
                            }
                            c || l.push([t, r]), this.Cues.newCue(this.captionsTracks[e], t, r, n)
                        }, i.onInitPtsFound = function(e) {
                            var t = this,
                                r = e.frag,
                                n = e.id,
                                i = e.initPTS,
                                a = this.unparsedVttFrags;
                            "main" === n && (this.initPTS[r.cc] = i), a.length && (this.unparsedVttFrags = [], a.forEach((function(e) {
                                t.onFragLoaded(e)
                            })))
                        }, i.getExistingTrack = function(e) {
                            var t = this.media;
                            if (t)
                                for (var r = 0; r < t.textTracks.length; r++) {
                                    var n = t.textTracks[r];
                                    if (n[e]) return n
                                }
                            return null
                        }, i.createCaptionsTrack = function(e) {
                            var t = this.captionsProperties,
                                r = this.captionsTracks,
                                n = this.media,
                                i = t[e],
                                a = i.label,
                                o = i.languageCode;
                            if (!r[e]) {
                                var s = this.getExistingTrack(e);
                                if (s) r[e] = s, Ue(r[e]), Fe(r[e], n);
                                else {
                                    var l = this.createTextTrack("captions", a, o);
                                    l && (l[e] = !0, r[e] = l)
                                }
                            }
                        }, i.createTextTrack = function(e, t, r) {
                            var n = this.media;
                            if (n) return n.addTextTrack(e, t, r)
                        }, i.destroy = function() {
                            e.prototype.destroy.call(this)
                        }, i.onMediaAttaching = function(e) {
                            this.media = e.media, this._cleanTracks()
                        }, i.onMediaDetaching = function() {
                            var e = this.captionsTracks;
                            Object.keys(e).forEach((function(t) {
                                Ue(e[t]), delete e[t]
                            }))
                        }, i.onManifestLoading = function() {
                            this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            }, this._cleanTracks()
                        }, i._cleanTracks = function() {
                            var e = this.media;
                            if (e) {
                                var t = e.textTracks;
                                if (t)
                                    for (var r = 0; r < t.length; r++) Ue(t[r])
                            }
                        }, i.onManifestLoaded = function(e) {
                            var t = this;
                            if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
                                this.tracks = e.subtitles || [];
                                var r = this.media ? this.media.textTracks : [];
                                this.tracks.forEach((function(e, n) {
                                    var i;
                                    if (n < r.length) {
                                        for (var a = null, o = 0; o < r.length; o++)
                                            if (Ut(r[o], e)) {
                                                a = r[o];
                                                break
                                            }
                                        a && (i = a)
                                    }
                                    i || (i = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? i.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled", t.textTracks.push(i)
                                }))
                            }
                        }, i.onFragLoaded = function(e) {
                            var t = e.frag,
                                r = e.payload,
                                n = this.cea608Parser,
                                i = this.initPTS,
                                a = this.lastSn,
                                o = this.unparsedVttFrags;
                            if ("main" === t.type) {
                                var s = t.sn;
                                t.sn !== a + 1 && n && n.reset(), this.lastSn = s
                            } else if ("subtitle" === t.type)
                                if (r.byteLength) {
                                    if (!Object(l.isFiniteNumber)(i[t.cc])) return o.push(e), void(i.length && this.hls.trigger(c.default.SUBTITLE_FRAG_PROCESSED, {
                                        success: !1,
                                        frag: t
                                    }));
                                    var u = t.decryptdata;
                                    null != u && null != u.key && "AES-128" === u.method || this._parseVTTs(t, r)
                                } else this.hls.trigger(c.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                        }, i._parseVTTs = function(e, t) {
                            var r = this.hls,
                                n = this.prevCC,
                                i = this.textTracks,
                                a = this.vttCCs;
                            a[e.cc] || (a[e.cc] = {
                                start: e.start,
                                prevCC: n,
                                new: !0
                            }, this.prevCC = e.cc), Nt.parse(t, this.initPTS[e.cc], a, e.cc, (function(t) {
                                var n = i[e.level];
                                "disabled" !== n.mode ? (t.forEach((function(e) {
                                    if (!n.cues.getCueById(e.id)) try {
                                        if (n.addCue(e), !n.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
                                    } catch (r) {
                                        u.logger.debug("Failed occurred on adding cues: " + r);
                                        var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                                        t.id = e.id, n.addCue(t)
                                    }
                                })), r.trigger(c.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: e
                                })) : r.trigger(c.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: e
                                })
                            }), (function(t) {
                                u.logger.log("Failed to parse VTT cue: " + t), r.trigger(c.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: e
                                })
                            }))
                        }, i.onFragDecrypted = function(e) {
                            var t = e.frag,
                                r = e.payload;
                            if ("subtitle" === t.type) {
                                if (!Object(l.isFiniteNumber)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
                                this._parseVTTs(t, r)
                            }
                        }, i.onFragParsingUserdata = function(e) {
                            if (this.enabled && this.cea608Parser)
                                for (var t = 0; t < e.samples.length; t++) {
                                    var r = e.samples[t].bytes;
                                    if (r) {
                                        var n = this.extractCea608Data(r);
                                        this.cea608Parser.addData(e.samples[t].pts, n)
                                    }
                                }
                        }, i.extractCea608Data = function(e) {
                            for (var t, r, n, i = 31 & e[0], a = 2, o = [], s = 0; s < i; s++) t = e[a++], r = 127 & e[a++], n = 127 & e[a++], 0 === r && 0 === n || 0 != (4 & t) && 0 == (3 & t) && (o.push(r), o.push(n));
                            return o
                        }, n
                    }(f);

                    function Bt(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    function Gt(e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                            var n = e[r];
                            "subtitles" === n.kind && n.label && t.push(e[r])
                        }
                        return t
                    }
                    var zt, Kt = function(e) {
                            var t, r;

                            function n(t) {
                                var r;
                                return (r = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHING, c.default.MANIFEST_LOADED, c.default.SUBTITLE_TRACK_LOADED) || this).tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r.queuedDefaultTrack = null, r
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i, a, o, s = n.prototype;
                            return s.destroy = function() {
                                f.prototype.destroy.call(this)
                            }, s.onMediaAttached = function(e) {
                                var t = this;
                                this.media = e.media, this.media && (Object(l.isFiniteNumber)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
                                    t.trackChangeListener()
                                }), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                            }, s.onMediaDetaching = function() {
                                this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(l.isFiniteNumber)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack), Gt(this.media.textTracks).forEach((function(e) {
                                    Ue(e)
                                })), this.subtitleTrack = -1, this.media = null)
                            }, s.onManifestLoaded = function(e) {
                                var t = this,
                                    r = e.subtitles || [];
                                this.tracks = r, this.hls.trigger(c.default.SUBTITLE_TRACKS_UPDATED, {
                                    subtitleTracks: r
                                }), r.forEach((function(e) {
                                    e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                                }))
                            }, s.onSubtitleTrackLoaded = function(e) {
                                var t = this,
                                    r = e.id,
                                    n = e.details,
                                    i = this.trackId,
                                    a = this.tracks,
                                    o = a[i];
                                if (r >= a.length || r !== i || !o || this.stopped) this._clearReloadTimer();
                                else if (u.logger.log("subtitle track " + r + " loaded"), n.live) {
                                    var s = ie(o.details, n, e.stats.trequest);
                                    u.logger.log("Reloading live subtitle playlist in " + s + "ms"), this.timer = setTimeout((function() {
                                        t._loadCurrentTrack()
                                    }), s)
                                } else this._clearReloadTimer()
                            }, s.startLoad = function() {
                                this.stopped = !1, this._loadCurrentTrack()
                            }, s.stopLoad = function() {
                                this.stopped = !0, this._clearReloadTimer()
                            }, s._clearReloadTimer = function() {
                                this.timer && (clearTimeout(this.timer), this.timer = null)
                            }, s._loadCurrentTrack = function() {
                                var e = this.trackId,
                                    t = this.tracks,
                                    r = this.hls,
                                    n = t[e];
                                e < 0 || !n || n.details && !n.details.live || (u.logger.log("Loading subtitle track " + e), r.trigger(c.default.SUBTITLE_TRACK_LOADING, {
                                    url: n.url,
                                    id: e
                                }))
                            }, s._toggleTrackModes = function(e) {
                                var t = this.media,
                                    r = this.subtitleDisplay,
                                    n = this.trackId;
                                if (t) {
                                    var i = Gt(t.textTracks);
                                    if (-1 === e)[].slice.call(i).forEach((function(e) {
                                        e.mode = "disabled"
                                    }));
                                    else {
                                        var a = i[n];
                                        a && (a.mode = "disabled")
                                    }
                                    var o = i[e];
                                    o && (o.mode = r ? "showing" : "hidden")
                                }
                            }, s._setSubtitleTrackInternal = function(e) {
                                var t = this.hls,
                                    r = this.tracks;
                                !Object(l.isFiniteNumber)(e) || e < -1 || e >= r.length || (this.trackId = e, u.logger.log("Switching to subtitle track " + e), t.trigger(c.default.SUBTITLE_TRACK_SWITCH, {
                                    id: e
                                }), this._loadCurrentTrack())
                            }, s._onTextTracksChanged = function() {
                                if (this.media) {
                                    for (var e = -1, t = Gt(this.media.textTracks), r = 0; r < t.length; r++)
                                        if ("hidden" === t[r].mode) e = r;
                                        else if ("showing" === t[r].mode) {
                                        e = r;
                                        break
                                    }
                                    this.subtitleTrack = e
                                }
                            }, i = n, (a = [{
                                key: "subtitleTracks",
                                get: function() {
                                    return this.tracks
                                }
                            }, {
                                key: "subtitleTrack",
                                get: function() {
                                    return this.trackId
                                },
                                set: function(e) {
                                    this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
                                }
                            }]) && Bt(i.prototype, a), o && Bt(i, o), n
                        }(f),
                        Vt = r("./src/crypt/decrypter.js"),
                        Ht = window.performance,
                        Wt = function(e) {
                            var t, r;

                            function n(t, r) {
                                var n;
                                return (n = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHING, c.default.ERROR, c.default.KEY_LOADED, c.default.FRAG_LOADED, c.default.SUBTITLE_TRACKS_UPDATED, c.default.SUBTITLE_TRACK_SWITCH, c.default.SUBTITLE_TRACK_LOADED, c.default.SUBTITLE_FRAG_PROCESSED, c.default.LEVEL_UPDATED) || this).fragmentTracker = r, n.config = t.config, n.state = me, n.tracks = [], n.tracksBuffered = [], n.currentTrackId = -1, n.decrypter = new Vt.default(t, t.config), n.lastAVStart = 0, n._onMediaSeeking = n.onMediaSeeking.bind(function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(n)), n
                            }
                            r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                            var i = n.prototype;
                            return i.onSubtitleFragProcessed = function(e) {
                                var t = e.frag,
                                    r = e.success;
                                if (this.fragPrevious = t, this.state = ve, r) {
                                    var n = this.tracksBuffered[this.currentTrackId];
                                    if (n) {
                                        for (var i, a = t.start, o = 0; o < n.length; o++)
                                            if (a >= n[o].start && a <= n[o].end) {
                                                i = n[o];
                                                break
                                            }
                                        var s = t.start + t.duration;
                                        i ? i.end = s : (i = {
                                            start: a,
                                            end: s
                                        }, n.push(i))
                                    }
                                }
                            }, i.onMediaAttached = function(e) {
                                var t = e.media;
                                this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = ve
                            }, i.onMediaDetaching = function() {
                                var e = this;
                                this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach((function(t) {
                                    e.tracksBuffered[t.id] = []
                                })), this.media = null, this.state = me)
                            }, i.onError = function(e) {
                                var t = e.frag;
                                t && "subtitle" === t.type && (this.state = ve)
                            }, i.onSubtitleTracksUpdated = function(e) {
                                var t = this;
                                u.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach((function(e) {
                                    t.tracksBuffered[e.id] = []
                                }))
                            }, i.onSubtitleTrackSwitch = function(e) {
                                if (this.currentTrackId = e.id, this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
                                    var t = this.tracks[this.currentTrackId];
                                    t && t.details && this.setInterval(500)
                                } else this.clearInterval()
                            }, i.onSubtitleTrackLoaded = function(e) {
                                var t = e.id,
                                    r = e.details,
                                    n = this.currentTrackId,
                                    i = this.tracks,
                                    a = i[n];
                                t >= i.length || t !== n || !a || (r.live && function(e, t, r) {
                                    void 0 === r && (r = 0);
                                    var n = -1;
                                    ne(e, t, (function(e, t, r) {
                                        t.start = e.start, n = r
                                    }));
                                    var i = t.fragments;
                                    if (n < 0) i.forEach((function(e) {
                                        e.start += r
                                    }));
                                    else
                                        for (var a = n + 1; a < i.length; a++) i[a].start = i[a - 1].start + i[a - 1].duration
                                }(a.details, r, this.lastAVStart), a.details = r, this.setInterval(500))
                            }, i.onKeyLoaded = function() {
                                this.state === be && (this.state = ve)
                            }, i.onFragLoaded = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag.decryptdata,
                                    n = e.frag,
                                    i = this.hls;
                                if (this.state === Te && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
                                    var a = Ht.now();
                                    this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
                                        var t = Ht.now();
                                        i.trigger(c.default.FRAG_DECRYPTED, {
                                            frag: n,
                                            payload: e,
                                            stats: {
                                                tstart: a,
                                                tdecrypt: t
                                            }
                                        })
                                    }))
                                }
                            }, i.onLevelUpdated = function(e) {
                                var t = e.details.fragments;
                                this.lastAVStart = t.length ? t[0].start : 0
                            }, i.doTick = function() {
                                if (this.media) switch (this.state) {
                                    case ve:
                                        var e = this.config,
                                            t = this.currentTrackId,
                                            r = this.fragmentTracker,
                                            n = this.media,
                                            i = this.tracks;
                                        if (!i || !i[t] || !i[t].details) break;
                                        var a, o = e.maxBufferHole,
                                            s = e.maxFragLookUpTolerance,
                                            l = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
                                            d = K.bufferedInfo(this._getBuffered(), n.currentTime, o),
                                            f = d.end,
                                            h = d.len,
                                            p = i[t].details,
                                            m = p.fragments,
                                            g = m.length,
                                            v = m[g - 1].start + m[g - 1].duration;
                                        if (h > l) return;
                                        var y = this.fragPrevious;
                                        f < v ? (y && p.hasProgramDateTime && (a = le(m, y.endProgramDateTime, s)), a || (a = ce(y, m, f, s))) : a = m[g - 1], a && a.encrypted ? (u.logger.log("Loading key for " + a.sn), this.state = be, this.hls.trigger(c.default.KEY_LOADING, {
                                            frag: a
                                        })) : a && r.getState(a) === F && (this.fragCurrent = a, this.state = Te, this.hls.trigger(c.default.FRAG_LOADING, {
                                            frag: a
                                        }))
                                } else this.state = ve
                            }, i.stopLoad = function() {
                                this.lastAVStart = 0, e.prototype.stopLoad.call(this)
                            }, i._getBuffered = function() {
                                return this.tracksBuffered[this.currentTrackId] || []
                            }, i.onMediaSeeking = function() {
                                this.fragPrevious = null
                            }, n
                        }(Ae);
                    ! function(e) {
                        e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready"
                    }(zt || (zt = {}));
                    var Yt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;

                    function qt(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var Xt = function(e) {
                        var t, r;

                        function n(t) {
                            var r;
                            return (r = e.call(this, t, c.default.MEDIA_ATTACHED, c.default.MEDIA_DETACHED, c.default.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0, r._licenseXhrSetup = void 0, r._emeEnabled = void 0, r._requestMediaKeySystemAccess = void 0, r._config = void 0, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._requestLicenseFailureCount = 0, r._onMediaEncrypted = function(e) {
                                u.logger.log('Media is encrypted using "' + e.initDataType + '" init data type'), r._attemptSetMediaKeys(), r._generateRequestWithPreferredKeySession(e.initDataType, e.initData)
                            }, r._config = t.config, r._widevineLicenseUrl = r._config.widevineLicenseUrl, r._licenseXhrSetup = r._config.licenseXhrSetup, r._emeEnabled = r._config.emeEnabled, r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc, r
                        }
                        r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                        var i, a, o, l = n.prototype;
                        return l.getLicenseServerUrl = function(e) {
                            switch (e) {
                                case zt.WIDEVINE:
                                    if (!this._widevineLicenseUrl) break;
                                    return this._widevineLicenseUrl
                            }
                            throw new Error('no license server URL configured for key-system "' + e + '"')
                        }, l._attemptKeySystemAccess = function(e, t, r) {
                            var n = this,
                                i = function(e, t, r) {
                                    switch (e) {
                                        case zt.WIDEVINE:
                                            return function(e, t) {
                                                var r = {
                                                    videoCapabilities: []
                                                };
                                                return t.forEach((function(e) {
                                                    r.videoCapabilities.push({
                                                        contentType: 'video/mp4; codecs="' + e + '"'
                                                    })
                                                })), [r]
                                            }(0, r);
                                        default:
                                            throw new Error("Unknown key-system: " + e)
                                    }
                                }(e, 0, r);
                            u.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, i).then((function(t) {
                                n._onMediaKeySystemAccessObtained(e, t)
                            })).catch((function(t) {
                                u.logger.error('Failed to obtain key-system "' + e + '" access:', t)
                            }))
                        }, l._onMediaKeySystemAccessObtained = function(e, t) {
                            var r = this;
                            u.logger.log('Access for key-system "' + e + '" obtained');
                            var n = {
                                mediaKeysSessionInitialized: !1,
                                mediaKeySystemAccess: t,
                                mediaKeySystemDomain: e
                            };
                            this._mediaKeysList.push(n), t.createMediaKeys().then((function(t) {
                                n.mediaKeys = t, u.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated()
                            })).catch((function(e) {
                                u.logger.error("Failed to create media-keys:", e)
                            }))
                        }, l._onMediaKeysCreated = function() {
                            var e = this;
                            this._mediaKeysList.forEach((function(t) {
                                t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
                            }))
                        }, l._onNewMediaKeySession = function(e) {
                            var t = this;
                            u.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) {
                                t._onKeySessionMessage(e, r.message)
                            }), !1)
                        }, l._onKeySessionMessage = function(e, t) {
                            u.logger.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) {
                                u.logger.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"), e.update(t)
                            }))
                        }, l._attemptSetMediaKeys = function() {
                            if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                            if (!this._hasSetMediaKeys) {
                                var e = this._mediaKeysList[0];
                                if (!e || !e.mediaKeys) return u.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: s.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                    fatal: !0
                                });
                                u.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                            }
                        }, l._generateRequestWithPreferredKeySession = function(e, t) {
                            var r = this,
                                n = this._mediaKeysList[0];
                            if (!n) return u.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(c.default.ERROR, {
                                type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: s.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            if (n.mediaKeysSessionInitialized) u.logger.warn("Key-Session already initialized but requested again");
                            else {
                                var i = n.mediaKeysSession;
                                if (!i) return u.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: s.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                    fatal: !0
                                });
                                if (!t) return u.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: s.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                    fatal: !0
                                });
                                u.logger.log('Generating key-session request for "' + e + '" init data type'), n.mediaKeysSessionInitialized = !0, i.generateRequest(e, t).then((function() {
                                    u.logger.debug("Key-session generation succeeded")
                                })).catch((function(e) {
                                    u.logger.error("Error generating key-session request:", e), r.hls.trigger(c.default.ERROR, {
                                        type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: s.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                        fatal: !1
                                    })
                                }))
                            }
                        }, l._createLicenseXhr = function(e, t, r) {
                            var n = new XMLHttpRequest,
                                i = this._licenseXhrSetup;
                            try {
                                if (i) try {
                                    i(n, e)
                                } catch (t) {
                                    n.open("POST", e, !0), i(n, e)
                                }
                                n.readyState || n.open("POST", e, !0)
                            } catch (e) {
                                throw new Error("issue setting up KeySystem license XHR " + e)
                            }
                            return n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, e, t, r), n
                        }, l._onLicenseRequestReadyStageChange = function(e, t, r, n) {
                            switch (e.readyState) {
                                case 4:
                                    if (200 === e.status) this._requestLicenseFailureCount = 0, u.logger.log("License request succeeded"), "arraybuffer" !== e.responseType && u.logger.warn("xhr response type was not set to the expected arraybuffer for license request"), n(e.response);
                                    else {
                                        if (u.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(c.default.ERROR, {
                                            type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: s.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            fatal: !0
                                        });
                                        var i = 3 - this._requestLicenseFailureCount + 1;
                                        u.logger.warn("Retrying license request, " + i + " attempts left"), this._requestLicense(r, n)
                                    }
                            }
                        }, l._generateLicenseRequestChallenge = function(e, t) {
                            switch (e.mediaKeySystemDomain) {
                                case zt.WIDEVINE:
                                    return t
                            }
                            throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
                        }, l._requestLicense = function(e, t) {
                            u.logger.log("Requesting content license for key-system");
                            var r = this._mediaKeysList[0];
                            if (!r) return u.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(c.default.ERROR, {
                                type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: s.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            try {
                                var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                                    i = this._createLicenseXhr(n, e, t);
                                u.logger.log("Sending license request to URL: " + n);
                                var a = this._generateLicenseRequestChallenge(r, e);
                                i.send(a)
                            } catch (e) {
                                u.logger.error("Failure requesting DRM license: " + e), this.hls.trigger(c.default.ERROR, {
                                    type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: s.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                            }
                        }, l.onMediaAttached = function(e) {
                            if (this._emeEnabled) {
                                var t = e.media;
                                this._media = t, t.addEventListener("encrypted", this._onMediaEncrypted)
                            }
                        }, l.onMediaDetached = function() {
                            this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null)
                        }, l.onManifestParsed = function(e) {
                            if (this._emeEnabled) {
                                var t = e.levels.map((function(e) {
                                        return e.audioCodec
                                    })),
                                    r = e.levels.map((function(e) {
                                        return e.videoCodec
                                    }));
                                this._attemptKeySystemAccess(zt.WIDEVINE, t, r)
                            }
                        }, i = n, (a = [{
                            key: "requestMediaKeySystemAccess",
                            get: function() {
                                if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                return this._requestMediaKeySystemAccess
                            }
                        }]) && qt(i.prototype, a), o && qt(i, o), n
                    }(f);

                    function $t(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var Qt = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            })))), n.forEach((function(t) {
                                $t(e, t, r[t])
                            }))
                        }
                        return e
                    }({
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        maxBufferSize: 6e7,
                        maxBufferHole: .5,
                        lowBufferWatchdogPeriod: .5,
                        highBufferWatchdogPeriod: 3,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: 1 / 0,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: et,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        abrController: Ve,
                        bufferController: We,
                        capLevelController: qe,
                        fpsController: $e,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        requestMediaKeySystemAccessFunc: Yt
                    }, {
                        cueHandler: n,
                        enableCEA708Captions: !0,
                        enableWebVTT: !0,
                        captionsTextTrack1Label: "English",
                        captionsTextTrack1LanguageCode: "en",
                        captionsTextTrack2Label: "Spanish",
                        captionsTextTrack2LanguageCode: "es"
                    }, {
                        subtitleStreamController: Wt,
                        subtitleTrackController: Kt,
                        timelineController: jt,
                        audioStreamController: at,
                        audioTrackController: rt,
                        emeController: Xt
                    });

                    function Jt(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Zt(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function er(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    function tr(e, t, r) {
                        return t && er(e.prototype, t), r && er(e, r), e
                    }
                    r.d(t, "default", (function() {
                        return rr
                    }));
                    var rr = function(e) {
                        var t, r;

                        function n(t) {
                            var r;
                            void 0 === t && (t = {}), (r = e.call(this) || this).config = void 0, r._autoLevelCapping = void 0, r.abrController = void 0, r.capLevelController = void 0, r.levelController = void 0, r.streamController = void 0, r.networkControllers = void 0, r.audioTrackController = void 0, r.subtitleTrackController = void 0, r.emeController = void 0, r.coreComponents = void 0, r.media = null, r.url = null;
                            var i = n.DefaultConfig;
                            if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                            r.config = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    })))), n.forEach((function(t) {
                                        Jt(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, i, t);
                            var a = Zt(r).config;
                            if (void 0 !== a.liveMaxLatencyDurationCount && a.liveMaxLatencyDurationCount <= a.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                            if (void 0 !== a.liveMaxLatencyDuration && (void 0 === a.liveSyncDuration || a.liveMaxLatencyDuration <= a.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                            Object(u.enableLogs)(a.debug), r._autoLevelCapping = -1;
                            var o = r.abrController = new a.abrController(Zt(r)),
                                s = new a.bufferController(Zt(r)),
                                l = r.capLevelController = new a.capLevelController(Zt(r)),
                                c = new a.fpsController(Zt(r)),
                                d = new I(Zt(r)),
                                f = new M(Zt(r)),
                                h = new N(Zt(r)),
                                p = new je(Zt(r)),
                                m = r.levelController = new Me(Zt(r)),
                                g = new G(Zt(r)),
                                v = [m, r.streamController = new De(Zt(r), g)],
                                y = a.audioStreamController;
                            y && v.push(new y(Zt(r), g)), r.networkControllers = v;
                            var b = [d, f, h, o, s, l, c, p, g];
                            if (y = a.audioTrackController) {
                                var T = new y(Zt(r));
                                r.audioTrackController = T, b.push(T)
                            }
                            if (y = a.subtitleTrackController) {
                                var E = new y(Zt(r));
                                r.subtitleTrackController = E, v.push(E)
                            }
                            if (y = a.emeController) {
                                var S = new y(Zt(r));
                                r.emeController = S, b.push(S)
                            }
                            return (y = a.subtitleStreamController) && v.push(new y(Zt(r), g)), (y = a.timelineController) && b.push(new y(Zt(r))), r.coreComponents = b, r
                        }
                        r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.isSupported = function() {
                            return function() {
                                var e = Y();
                                if (!e) return !1;
                                var t = self.SourceBuffer || self.WebKitSourceBuffer,
                                    r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                    n = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                                return !!r && !!n
                            }()
                        }, tr(n, null, [{
                            key: "version",
                            get: function() {
                                return "0.13.1"
                            }
                        }, {
                            key: "Events",
                            get: function() {
                                return c.default
                            }
                        }, {
                            key: "ErrorTypes",
                            get: function() {
                                return s.ErrorTypes
                            }
                        }, {
                            key: "ErrorDetails",
                            get: function() {
                                return s.ErrorDetails
                            }
                        }, {
                            key: "DefaultConfig",
                            get: function() {
                                return n.defaultConfig ? n.defaultConfig : Qt
                            },
                            set: function(e) {
                                n.defaultConfig = e
                            }
                        }]);
                        var i = n.prototype;
                        return i.destroy = function() {
                            u.logger.log("destroy"), this.trigger(c.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach((function(e) {
                                e.destroy()
                            })), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
                        }, i.attachMedia = function(e) {
                            u.logger.log("attachMedia"), this.media = e, this.trigger(c.default.MEDIA_ATTACHING, {
                                media: e
                            })
                        }, i.detachMedia = function() {
                            u.logger.log("detachMedia"), this.trigger(c.default.MEDIA_DETACHING), this.media = null
                        }, i.loadSource = function(e) {
                            e = o.buildAbsoluteURL(window.location.href, e, {
                                alwaysNormalize: !0
                            }), u.logger.log("loadSource:" + e), this.url = e, this.trigger(c.default.MANIFEST_LOADING, {
                                url: e
                            })
                        }, i.startLoad = function(e) {
                            void 0 === e && (e = -1), u.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) {
                                t.startLoad(e)
                            }))
                        }, i.stopLoad = function() {
                            u.logger.log("stopLoad"), this.networkControllers.forEach((function(e) {
                                e.stopLoad()
                            }))
                        }, i.swapAudioCodec = function() {
                            u.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                        }, i.recoverMediaError = function() {
                            u.logger.log("recoverMediaError");
                            var e = this.media;
                            this.detachMedia(), e && this.attachMedia(e)
                        }, tr(n, [{
                            key: "levels",
                            get: function() {
                                return this.levelController.levels
                            }
                        }, {
                            key: "currentLevel",
                            get: function() {
                                return this.streamController.currentLevel
                            },
                            set: function(e) {
                                u.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                            }
                        }, {
                            key: "nextLevel",
                            get: function() {
                                return this.streamController.nextLevel
                            },
                            set: function(e) {
                                u.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                            }
                        }, {
                            key: "loadLevel",
                            get: function() {
                                return this.levelController.level
                            },
                            set: function(e) {
                                u.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                            }
                        }, {
                            key: "nextLoadLevel",
                            get: function() {
                                return this.levelController.nextLoadLevel
                            },
                            set: function(e) {
                                this.levelController.nextLoadLevel = e
                            }
                        }, {
                            key: "firstLevel",
                            get: function() {
                                return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                            },
                            set: function(e) {
                                u.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                            }
                        }, {
                            key: "startLevel",
                            get: function() {
                                return this.levelController.startLevel
                            },
                            set: function(e) {
                                u.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
                            }
                        }, {
                            key: "capLevelToPlayerSize",
                            set: function(e) {
                                var t = !!e;
                                t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
                            }
                        }, {
                            key: "autoLevelCapping",
                            get: function() {
                                return this._autoLevelCapping
                            },
                            set: function(e) {
                                u.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
                            }
                        }, {
                            key: "bandwidthEstimate",
                            get: function() {
                                var e = this.abrController._bwEstimator;
                                return e ? e.getEstimate() : NaN
                            }
                        }, {
                            key: "autoLevelEnabled",
                            get: function() {
                                return -1 === this.levelController.manualLevel
                            }
                        }, {
                            key: "manualLevel",
                            get: function() {
                                return this.levelController.manualLevel
                            }
                        }, {
                            key: "minAutoLevel",
                            get: function() {
                                for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, n = 0; n < r; n++)
                                    if ((e[n].realBitrate ? Math.max(e[n].realBitrate, e[n].bitrate) : e[n].bitrate) > t) return n;
                                return 0
                            }
                        }, {
                            key: "maxAutoLevel",
                            get: function() {
                                var e = this.levels,
                                    t = this.autoLevelCapping;
                                return -1 === t && e && e.length ? e.length - 1 : t
                            }
                        }, {
                            key: "nextAutoLevel",
                            get: function() {
                                return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                            },
                            set: function(e) {
                                this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                            }
                        }, {
                            key: "audioTracks",
                            get: function() {
                                var e = this.audioTrackController;
                                return e ? e.audioTracks : []
                            }
                        }, {
                            key: "audioTrack",
                            get: function() {
                                var e = this.audioTrackController;
                                return e ? e.audioTrack : -1
                            },
                            set: function(e) {
                                var t = this.audioTrackController;
                                t && (t.audioTrack = e)
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function() {
                                return this.streamController.liveSyncPosition
                            }
                        }, {
                            key: "subtitleTracks",
                            get: function() {
                                var e = this.subtitleTrackController;
                                return e ? e.subtitleTracks : []
                            }
                        }, {
                            key: "subtitleTrack",
                            get: function() {
                                var e = this.subtitleTrackController;
                                return e ? e.subtitleTrack : -1
                            },
                            set: function(e) {
                                var t = this.subtitleTrackController;
                                t && (t.subtitleTrack = e)
                            }
                        }, {
                            key: "subtitleDisplay",
                            get: function() {
                                var e = this.subtitleTrackController;
                                return !!e && e.subtitleDisplay
                            },
                            set: function(e) {
                                var t = this.subtitleTrackController;
                                t && (t.subtitleDisplay = e)
                            }
                        }]), n
                    }(X);
                    rr.defaultConfig = void 0
                },
            "./src/polyfills/number-isFinite.js":
                /*!******************************************!*\
                  !*** ./src/polyfills/number-isFinite.js ***!
                  \******************************************/
                /*! exports provided: isFiniteNumber */
                function(e, t, r) {
                    "use strict";
                    r.r(t), r.d(t, "isFiniteNumber", (function() {
                        return n
                    }));
                    var n = Number.isFinite || function(e) {
                        return "number" == typeof e && isFinite(e)
                    }
                },
            "./src/utils/get-self-scope.js":
                /*!*************************************!*\
                  !*** ./src/utils/get-self-scope.js ***!
                  \*************************************/
                /*! exports provided: getSelfScope */
                function(e, t, r) {
                    "use strict";

                    function n() {
                        return "undefined" == typeof window ? self : window
                    }
                    r.r(t), r.d(t, "getSelfScope", (function() {
                        return n
                    }))
                },
            "./src/utils/logger.js":
                /*!*****************************!*\
                  !*** ./src/utils/logger.js ***!
                  \*****************************/
                /*! exports provided: enableLogs, logger */
                function(e, t, r) {
                    "use strict";
                    r.r(t), r.d(t, "enableLogs", (function() {
                        return u
                    })), r.d(t, "logger", (function() {
                        return d
                    }));
                    var n = r( /*! ./get-self-scope */ "./src/utils/get-self-scope.js");

                    function i() {}
                    var a = {
                            trace: i,
                            debug: i,
                            log: i,
                            warn: i,
                            info: i,
                            error: i
                        },
                        o = a;

                    function s(e, t) {
                        return t = "[" + e + "] > " + t
                    }
                    var l = Object(n.getSelfScope)();

                    function c(e) {
                        var t = l.console[e];
                        return t ? function() {
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                            n[0] && (n[0] = s(e, n[0])), t.apply(l.console, n)
                        } : i
                    }
                    var u = function(e) {
                            if (l.console && !0 === e || "object" == typeof e) {
                                ! function(e) {
                                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                    r.forEach((function(t) {
                                        o[t] = e[t] ? e[t].bind(e) : c(t)
                                    }))
                                }(e, "debug", "log", "info", "warn", "error");
                                try {
                                    o.log()
                                } catch (e) {
                                    o = a
                                }
                            } else o = a
                        },
                        d = o
                }
        }).default
    }, e.exports = n())
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        var t = (0, n.useContext)(s.StreamingPlayerContext).state,
            r = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            h = e.playerBridge;
        (0, n.useEffect)((function() {
            var e = function(e) {
                d.current.muted = e
            };
            return h.on("muted", e),
                function() {
                    h.off("muted", e)
                }
        }), [h]), (0, n.useEffect)((function() {
            if (t.streamName) {
                var n;
                if (r.current)(n = r.current).changeChannel(t.streamName);
                else {
                    var a = e.alertPic,
                        o = e.noStreamPic,
                        s = e.loadingPic,
                        l = e.playerBridge;
                    (n = new i.default({
                        id: "remoteVideo",
                        alertPic: a,
                        noStreamPic: o,
                        loadingPic: s,
                        streamname: t.streamName,
                        collection: e.serverUrls
                    })).pstatus((function(e) {
                        var t = {
                            playerType: "citibet",
                            errorCode: e,
                            description: f[e]
                        };
                        l.emit(c.error, t)
                    })), d.current.muted = l.mute, n.play(), r.current = n
                }
                return function() {}
            }
        }), [t.streamName]), (0, n.useEffect)((function() {
            t.controls, d.current.controls = t.controls
        }), [t.controls]), (0, n.useEffect)((function() {
            var e = r.current;
            e && t.stopStreamCount > 0 && (e.stopPlay(), r.current = null)
        }), [t.stopStreamCount]);
        var p = (g = (0, n.useState)((0, o.default)()), v = 2, function(e) {
                if (Array.isArray(e)) return e
            }(g) || function(e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
            }(g, v) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()),
            m = p[0];
        p[1];
        var g, v;
        return (0, u.jsx)(l.default, null, (0, u.jsx)(a.default, {
            "data-player-type": "citibet",
            ref: d,
            playsInline: !0,
            id: "remoteVideo",
            autoPlay: !0,
            key: m
        }))
    };
    d(r(10));
    var n = r(0),
        i = d(r(29)),
        a = d(r(11)),
        o = d(r(12)),
        s = r(7),
        l = d(r(14)),
        c = r(8),
        u = r(3);

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = {
        "001": "not support Websocket",
        "002": "not support H264",
        "003": "no stream",
        "004": "connection error"
    };
    e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n, i, a, o = (n = r(30)) && n.__esModule ? n : {
        default: n
    };

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate, window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    var l, c = navigator.userAgent.toLowerCase();

    function u(e) {}
    l = -1 != c.indexOf("firefox") ? "firefox" : -1 != c.indexOf("Edge") || -1 != c.indexOf("edge") ? "edge" : -1 != c.indexOf("chrome") ? "chrome" : -1 != c.indexOf("safari") && -1 != c.indexOf("version") ? "safari" : -1 != c.indexOf("msie") ? "ie" : -1 != c.indexOf("Trident") || -1 != c.indexOf("trident") ? "ie" : "other", (i = function(e) {
        this.info = e, this.isInfo = !1, this.lineIndex, this.initLine = !1, this.wsURL = "", this.streams = this.peerConnection = this.remoteVideo = this.wsConnection = null, this.peerConnectionConfig = {
            iceServers: []
        }, this.doGetAvailableStreams = this.newAPI = !1, this.reconnectCount = 0, this.streamInfo, this.userData = {
            param1: "value1"
        }, this.logId = "", this.debug = !1, this.h264Test = null, this.isManual = !1, this.version = "Player.19121701", this.streama = new o.default, a = this, this.init()
    }).prototype.init = function() {
        if (this.showLogs("init"), this.checkData(), this.isInfo) {
            this.debug = 1 == this.info.debug, this.remoteVideo = document.getElementById(this.info.id);
            try {
                navigator.mediaDevices.getUserMedia, this.newAPI = !0
            } catch (e) {
                this.newAPI = !1
            }
        }
    }, i.prototype.play = function() {
        this.isInfo && (this.remoteVideo.poster = this.info.loadingPic, this.doGetAvailableStreams = !1, null == this.peerConnection ? this.startPlay() : this.stopPlay())
    }, i.prototype.startPlay = function() {
        if (this.showLogs("startPlay"), this.showLogs("newAPI: " + this.newAPI), this.reconnectCount = 0, this.appName = "", 0 <= this.lineIndex) {
            null != this.info.country && (this.info.country = this.info.country.toUpperCase(), "VN" == this.info.country && 0 == this.initLine ? (this.lineIndex = 1, this.initLine = !0) : "SG" == this.info.country && 0 == this.initLine && (this.lineIndex = 2, this.initLine = !0)), this.appName = "firefox" == l ? "webrtc2" : this.info.collection[this.lineIndex].app, this.wsURL = this.info.collection[this.lineIndex].url, this.streamInfo = {
                applicationName: this.appName,
                streamName: this.info.streamname,
                sessionId: "[empty]"
            };
            var e = this.info.streamname;
            this.showLogs("URL: " + this.wsURL + " streamName:" + this.info.streamname)
        } else this.appName = "firefox" == l ? "webrtc2" : this.info.app, this.wsURL = this.info.url, this.streamInfo = {
            applicationName: this.appName,
            streamName: this.info.streamname,
            sessionId: "[empty]"
        }, e = this.info.streamname, this.showLogs("單條線路URL: " + this.wsURL + " streamName:" + this.info.streamname);
        this.streama.send({
            project: "IBC",
            streamname: e,
            cdn: this.wsURL,
            uid: "IBC_TEST",
            player: "H5"
        }), this.wsConnect(this.wsURL)
    }, i.prototype.stopPlay = function() {
        this.showLogs("stopPlay"), null != this.peerConnection && this.peerConnection.close(), this.peerConnection = null, null != this.wsConnection && this.wsConnection.close(), this.wsConnection = null, a.streams && a.streams.getTracks().forEach((function(e) {
            e.stop()
        })), a.streams = null, remoteVideo.src = "", this.streama.stop()
    }, i.prototype.changeLine = function(e) {
        this.showLogs("changeLine"), null != this.lineIndex && (this.isManual = !0, this.lineIndex = e, this.lineIndex >= this.info.collection.length && (this.lineIndex = 0), this.stopPlay(), this.play())
    }, i.prototype.changeChannel = function(e) {
        this.showLogs("changeChannel"), this.info.streamname = e, this.stopPlay(), this.play()
    }, i.prototype.reconnect = function() {
        a.isManual || (a.showLogs("try to reconnect..."), a.remoteVideo.poster = a.info.loadingPic, setTimeout((function() {
            a.lineIndex += 1, a.lineIndex >= a.info.collection.length && (a.lineIndex = 0), a.play()
        }), 2e3))
    }, i.prototype.wsConnect = function(e) {
        this.wsConnection = new WebSocket(e), this.wsConnection.binaryType = "arraybuffer", "function" != typeof WebSocket || "function" != typeof RTCPeerConnection ? ("function" == typeof a.callback && a.callback("001"), a.remoteVideo.poster = a.info.alertPic) : ("" === (this.remoteVideo.canPlayType('video/mp4; codecs="avc1.42E01E"') || this.remoteVideo.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) && ("function" == typeof a.callback && a.callback("002"), a.remoteVideo.poster = a.info.alertPic), this.wsConnection.onopen = function() {
            a.showLogs("wsConnection.onopen"), a.peerConnection = new RTCPeerConnection(a.peerConnectionConfig), a.peerConnection.onicecandidate = u, a.newAPI ? a.peerConnection.ontrack = a.gotRemoteTrack : a.peerConnection.onaddstream = a.gotRemoteStream, this.doGetAvailableStreams || a.sendPlayGetOffer(), a.peerConnection.onconnectionstatechange = function(e) {
                "disconnected" != a.peerConnection.connectionState && "failed" != a.peerConnection.connectionState || a.showLogs("peerConnection: " + a.peerConnection.connectionState)
            }
        }, a.showLogs("readyState: " + this.wsConnection.readyState), this.wsConnection.onmessage = function(e) {
            a.showLogs("wsConnection.onmessage: " + e.data);
            var t = JSON.parse(e.data),
                r = Number(t.status);
            e = t.command;
            if (514 == r) repeaterRetryCount++, 10 > repeaterRetryCount ? setTimeout(sendGetOffer, 500) : a.stopPlay();
            else if (502 == r) a.stopPlay(), "function" == typeof a.callback && -1 != String(t.statusDescription).indexOf("Live stream is not running") && a.callback("003"), a.remoteVideo.poster = a.info.noStreamPic;
            else if (200 != r) a.stopPlay();
            else {
                if (a.showLogs("player......."), void 0 !== (r = t.streamInfo) && (a.streamInfo.sessionId = r.sessionId), void 0 !== t.sdp && (a.showLogs("sdp--\x3e " + JSON.stringify(t.sdp)), a.peerConnection.setRemoteDescription(new RTCSessionDescription(t.sdp), (function() {
                        a.peerConnection.createAnswer(a.gotDescription, a.errorHandler)
                    }), a.errorHandler)), void 0 !== (t = t.iceCandidates))
                    for (var n in t) a.peerConnection.addIceCandidate(new RTCIceCandidate(t[n]));
                0
            }
            0 == "sendResponse".localeCompare(e) && (null != a.wsConnection && a.wsConnection.close(), a.wsConnection = null), 0 == "getAvailableStreams".localeCompare(e) && stopPlay()
        }, this.wsConnection.onclose = function(e) {
            a.showLogs("wsConnection.onclose.")
        }, this.wsConnection.onerror = function(e) {
            a.showLogs("wsConnection.onerror: " + e.type), a.reconnect()
        })
    }, i.prototype.sendPlayGetOffer = function() {
        this.showLogs("sendPlayGetOffer"), this.wsConnection.send('{"direction":"play", "command":"getOffer", "streamInfo":' + JSON.stringify(this.streamInfo) + ', "userData":' + JSON.stringify(this.userData) + "}")
    }, i.prototype.sendPlayGetAvailableStreams = function() {
        this.showLogs("sendPlayGetAvailableStreams"), wsConnection.send('{"direction":"play", "command":"getAvailableStreams", "streamInfo":' + JSON.stringify(this.streamInfo) + ', "userData":' + JSON.stringify(this.userData) + "}")
    }, i.prototype.gotRemoteTrack = function(e) {
        a.streams = e.streams[0];
        try {
            remoteVideo.srcObject = e.streams[0]
        } catch (t) {
            remoteVideo.src = window.URL.createObjectURL(e.streams[0])
        }
    }, i.prototype.gotRemoteStream = function(e) {
        a.streams = e.stream;
        try {
            remoteVideo.srcObject = e.stream
        } catch (t) {
            remoteVideo.src = window.URL.createObjectURL(e.stream)
        }
    }, i.prototype.gotDescription = function(e) {
        a.showLogs("gotDescription"), a.peerConnection.setLocalDescription(e, (function() {
            a.wsConnection.send('{"direction":"play", "command":"sendResponse", "streamInfo":' + JSON.stringify(a.streamInfo) + ', "sdp":' + JSON.stringify(e) + ', "userData":' + JSON.stringify(a.userData) + "}")
        }), (function() {}))
    }, i.prototype.errorHandler = function(e) {
        a.callback("004"), a.remoteVideo.poster = a.info.alertPic
    }, i.prototype.checkData = function() {
        null == this.info || null == this.info.id || "" == this.info.id ? this.isInfo = !1 : null != this.info.collection && "object" == s(this.info.collection) && 1 <= this.info.collection.length ? (this.lineIndex = 0, this.isInfo = !0) : null == this.info.app || "" == this.info.app || null == this.info.streamname || "" == this.info.streamname ? this.sInfo = !1 : this.isInfo = !0
    }, i.prototype.onStatus = function(e) {
        e("123")
    }, i.prototype.volume = function(e) {
        s(e), void 0 !== e && "number" == typeof e && ($("#" + this.info.id).prop("muted", !1), $("#" + this.info.id).prop("volume", e), $("#" + this.info.id).volume = e, this.showLogs("volume:" + e))
    }, i.prototype.mute = function(e) {
        $("#" + this.info.id).prop("muted", e), this.showLogs("mute:" + e)
    }, i.prototype.pause = function(e) {
        $("#" + this.info.id).pause()
    }, i.prototype.isMobile = function() {
        var e = !c.match(/(iPad).*OS\s([\d_]+)/) && c.match(/(iPhone\sOS)\s([\d_]+)/),
            t = c.match(/(Android)\s+([\d.]+)/);
        return !(!e && !t)
    }, i.prototype.setLogId = function(e) {
        this.logId = e, (e = document.createElement("div")).setAttribute("id", this.logId), e.setAttribute("style", "width:600px; height:300px; overflow:auto; background-color:#eee; margin-top:10px; "), document.body.appendChild(e)
    }, i.prototype.showLogs = function(e) {
        if (this.debug && "" != this.logId) {
            var t = "<br/>" + $("#" + this.logId).html();
            $("#" + this.logId).html(e + t)
        }
    }, i.prototype.clearLogs = function() {
        $("#" + this.logId).html("")
    }, i.prototype.pstatus = function(e) {
        "function" == typeof e && (this.callback = e)
    }, window.onfocus = function() {}, window.onblur = function() {};
    var d = i;
    t.default = d, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, (n = function(e, t) {
        this.url = (e = void 0 !== e) ? "http://" + t + "/stream/" : "https://analysis1.sv88.net/stream/", this.infoObj, this.data = "", this.timer, this.timerDelay = 3e4, this.uuid = "", this.debug = e, this.version = "20181213"
    }).prototype.send = function(e) {
        if (null != e && "" != e.streamname) {
            var t = this,
                r = null == e.player || "" == e.player ? "H5" : e.player,
                n = null == e.time || "" == e.time ? 0 : e.time,
                i = window.location.hostname,
                a = null == e.uid || "" == e.uid ? "none" : e.uid;
            this.uuid = this.generateUUID(), this.data = "project=" + e.project + "&", this.data += "streamname=" + e.streamname + "&", this.data += "cdn=" + e.cdn + "&", this.data += "player=" + r + "&", this.data += "time=" + n + "&", this.data += "domain=" + i + "&", this.data += "uid=" + a, this.doSend(), this.stop(), this.timer = setInterval((function() {
                t.doSend()
            }), this.timerDelay)
        }
    }, n.prototype.doSend = function() {
        $.get(this.url + this.uuid + "?" + this.data, (function() {})).fail((function() {}))
    }, n.prototype.stop = function() {
        clearInterval(this.timer)
    }, n.prototype.generateUUID = function() {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var r = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? r : 7 & r | 8).toString(16)
        }))
    }, n.prototype.getRnd = function() {}, n.prototype.Version = function() {
        return this.version
    };
    var i = n;
    t.default = i, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n, i = (n = r(32)) && n.__esModule ? n : {
            default: n
        },
        a = s(r(15));
    s(r(8));

    function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return o = function() {
            return e
        }, e
    }

    function s(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== l(e) && "function" != typeof e) return {
            default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
            }
        return r.default = e, t && t.set(e, r), r
    }

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function u(e, t) {
        return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = function(e) {
        function t() {
            var e;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (e = u(this, d(t).call(this)))._commandQueue = [], e._mute = !1, e._controls = !1, e._info = !1, e
        }
        var r, n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(t, e), r = t, (n = [{
            key: "connect",
            value: function(e) {
                var t = this;
                this._dispatch ? this._dispatch(a.playStream(e)) : this._commandQueue.push((function() {
                    t.connect(e)
                }))
            }
        }, {
            key: "disconnect",
            value: function() {
                this._dispatch && this._dispatch(a.stopStream())
            }
        }, {
            key: "dispatch",
            set: function(e) {
                for (this._dispatch = e; this._commandQueue.length;) this._commandQueue.shift()()
            }
        }, {
            key: "mute",
            set: function(e) {
                var t = this;
                this._dispatch ? (this._mute = e, this.emit("muted", e), this._dispatch(a.mute(e))) : this._commandQueue.push((function() {
                    t.mute = e
                }))
            },
            get: function() {
                return this._mute
            }
        }, {
            key: "controls",
            set: function(e) {
                var t = this;
                this._dispatch ? (this._controls = e, this._dispatch(a.showControls(e))) : this._commandQueue.push((function() {
                    t.controls = e
                }))
            },
            get: function() {
                return this._controls
            }
        }]) && c(r.prototype, n), i && c(r, i), t
    }(i.default);
    t.default = h, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        i = "~";

    function a() {}

    function o(e, t, r) {
        this.fn = e, this.context = t, this.once = r || !1
    }

    function s(e, t, r, n, a) {
        if ("function" != typeof r) throw new TypeError("The listener must be a function");
        var s = new o(r, n || e, a),
            l = i ? i + t : t;
        return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], s] : e._events[l].push(s) : (e._events[l] = s, e._eventsCount++), e
    }

    function l(e, t) {
        0 == --e._eventsCount ? e._events = new a : delete e._events[t]
    }

    function c() {
        this._events = new a, this._eventsCount = 0
    }
    Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (i = !1)), c.prototype.eventNames = function() {
        var e, t, r = [];
        if (0 === this._eventsCount) return r;
        for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
    }, c.prototype.listeners = function(e) {
        var t = i ? i + e : e,
            r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, a = r.length, o = new Array(a); n < a; n++) o[n] = r[n].fn;
        return o
    }, c.prototype.listenerCount = function(e) {
        var t = i ? i + e : e,
            r = this._events[t];
        return r ? r.fn ? 1 : r.length : 0
    }, c.prototype.emit = function(e, t, r, n, a, o) {
        var s = i ? i + e : e;
        if (!this._events[s]) return !1;
        var l, c, u = this._events[s],
            d = arguments.length;
        if (u.fn) {
            switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, t), !0;
                case 3:
                    return u.fn.call(u.context, t, r), !0;
                case 4:
                    return u.fn.call(u.context, t, r, n), !0;
                case 5:
                    return u.fn.call(u.context, t, r, n, a), !0;
                case 6:
                    return u.fn.call(u.context, t, r, n, a, o), !0
            }
            for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
            u.fn.apply(u.context, l)
        } else {
            var f, h = u.length;
            for (c = 0; c < h; c++) switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d) {
                case 1:
                    u[c].fn.call(u[c].context);
                    break;
                case 2:
                    u[c].fn.call(u[c].context, t);
                    break;
                case 3:
                    u[c].fn.call(u[c].context, t, r);
                    break;
                case 4:
                    u[c].fn.call(u[c].context, t, r, n);
                    break;
                default:
                    if (!l)
                        for (f = 1, l = new Array(d - 1); f < d; f++) l[f - 1] = arguments[f];
                    u[c].fn.apply(u[c].context, l)
            }
        }
        return !0
    }, c.prototype.on = function(e, t, r) {
        return s(this, e, t, r, !1)
    }, c.prototype.once = function(e, t, r) {
        return s(this, e, t, r, !0)
    }, c.prototype.removeListener = function(e, t, r, n) {
        var a = i ? i + e : e;
        if (!this._events[a]) return this;
        if (!t) return l(this, a), this;
        var o = this._events[a];
        if (o.fn) o.fn !== t || n && !o.once || r && o.context !== r || l(this, a);
        else {
            for (var s = 0, c = [], u = o.length; s < u; s++)(o[s].fn !== t || n && !o[s].once || r && o[s].context !== r) && c.push(o[s]);
            c.length ? this._events[a] = 1 === c.length ? c[0] : c : l(this, a)
        }
        return this
    }, c.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = i ? i + e : e, this._events[t] && l(this, t)) : (this._events = new a, this._eventsCount = 0), this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, e.exports = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setLimelightAccountId = function(e) {
        n = e
    }, t.getLimelightAccountId = function(e) {
        return n
    };
    var n = "sctrts"
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.releaseDate = t.numbers = t.commitHash = void 0;
    t.commitHash = "cc33eb2";
    t.numbers = "2.0.3";
    t.releaseDate = "20200415"
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = {};
    r.r(n), r.d(n, "shimGetUserMedia", (function() {
        return E
    })), r.d(n, "shimGetDisplayMedia", (function() {
        return S
    })), r.d(n, "shimMediaStream", (function() {
        return w
    })), r.d(n, "shimOnTrack", (function() {
        return k
    })), r.d(n, "shimGetSendersWithDtmf", (function() {
        return _
    })), r.d(n, "shimGetStats", (function() {
        return C
    })), r.d(n, "shimSenderReceiverGetStats", (function() {
        return R
    })), r.d(n, "shimAddTrackRemoveTrackWithNative", (function() {
        return x
    })), r.d(n, "shimAddTrackRemoveTrack", (function() {
        return P
    })), r.d(n, "shimPeerConnection", (function() {
        return A
    })), r.d(n, "fixNegotiationNeeded", (function() {
        return O
    }));
    var i = {};
    r.r(i), r.d(i, "shimGetUserMedia", (function() {
        return I
    })), r.d(i, "shimGetDisplayMedia", (function() {
        return M
    })), r.d(i, "shimPeerConnection", (function() {
        return N
    })), r.d(i, "shimReplaceTrack", (function() {
        return F
    }));
    var a = {};
    r.r(a), r.d(a, "shimGetUserMedia", (function() {
        return U
    })), r.d(a, "shimGetDisplayMedia", (function() {
        return j
    })), r.d(a, "shimOnTrack", (function() {
        return B
    })), r.d(a, "shimPeerConnection", (function() {
        return G
    })), r.d(a, "shimSenderGetStats", (function() {
        return z
    })), r.d(a, "shimReceiverGetStats", (function() {
        return K
    })), r.d(a, "shimRemoveStream", (function() {
        return V
    })), r.d(a, "shimRTCDataChannel", (function() {
        return H
    })), r.d(a, "shimAddTransceiver", (function() {
        return W
    })), r.d(a, "shimCreateOffer", (function() {
        return Y
    })), r.d(a, "shimCreateAnswer", (function() {
        return q
    }));
    var o = {};
    r.r(o), r.d(o, "shimLocalStreamsAPI", (function() {
        return X
    })), r.d(o, "shimRemoteStreamsAPI", (function() {
        return $
    })), r.d(o, "shimCallbacksAPI", (function() {
        return Q
    })), r.d(o, "shimGetUserMedia", (function() {
        return J
    })), r.d(o, "shimConstraints", (function() {
        return Z
    })), r.d(o, "shimRTCIceServerUrls", (function() {
        return ee
    })), r.d(o, "shimTrackEventTransceiver", (function() {
        return te
    })), r.d(o, "shimCreateOfferLegacy", (function() {
        return re
    }));
    var s = {};
    r.r(s), r.d(s, "shimRTCIceCandidate", (function() {
        return ae
    })), r.d(s, "shimMaxMessageSize", (function() {
        return oe
    })), r.d(s, "shimSendThrowTypeError", (function() {
        return se
    })), r.d(s, "shimConnectionState", (function() {
        return le
    })), r.d(s, "removeAllowExtmapMixed", (function() {
        return ce
    }));
    let l = !0,
        c = !0;

    function u(e, t, r) {
        const n = e.match(t);
        return n && n.length >= r && parseInt(n[r], 10)
    }

    function d(e, t, r) {
        if (!e.RTCPeerConnection) return;
        const n = e.RTCPeerConnection.prototype,
            i = n.addEventListener;
        n.addEventListener = function(e, n) {
            if (e !== t) return i.apply(this, arguments);
            const a = e => {
                const t = r(e);
                t && n(t)
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[n] = a, i.apply(this, [e, a])
        };
        const a = n.removeEventListener;
        n.removeEventListener = function(e, r) {
            if (e !== t || !this._eventMap || !this._eventMap[r]) return a.apply(this, arguments);
            const n = this._eventMap[r];
            return delete this._eventMap[r], a.apply(this, [e, n])
        }, Object.defineProperty(n, "on" + t, {
            get() {
                return this["_on" + t]
            },
            set(e) {
                this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
            },
            enumerable: !0,
            configurable: !0
        })
    }

    function f(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (l = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
    }

    function h(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (c = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
    }

    function p() {
        if ("object" == typeof window) {
            if (l) return;
            "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
        }
    }

    function m(e, t) {
        c && console.warn(e + " is deprecated, please use " + t + " instead.")
    }

    function g(e) {
        const {
            navigator: t
        } = e, r = {
            browser: null,
            version: null
        };
        if (void 0 === e || !e.navigator) return r.browser = "Not a browser.", r;
        if (t.mozGetUserMedia) r.browser = "firefox", r.version = u(t.userAgent, /Firefox\/(\d+)\./, 1);
        else if (t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) r.browser = "chrome", r.version = u(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) r.browser = "edge", r.version = u(t.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        else {
            if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return r.browser = "Not a supported browser.", r;
            r.browser = "safari", r.version = u(t.userAgent, /AppleWebKit\/(\d+)\./, 1), r.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype
        }
        return r
    }

    function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function y(e) {
        return v(e) ? Object.keys(e).reduce((function(t, r) {
            const n = v(e[r]),
                i = n ? y(e[r]) : e[r],
                a = n && !Object.keys(i).length;
            return void 0 === i || a ? t : Object.assign(t, {
                [r]: i
            })
        }), {}) : e
    }

    function b(e, t, r) {
        const n = r ? "outbound-rtp" : "inbound-rtp",
            i = new Map;
        if (null === t) return i;
        const a = [];
        return e.forEach(e => {
            "track" === e.type && e.trackIdentifier === t.id && a.push(e)
        }), a.forEach(t => {
            e.forEach(r => {
                r.type === n && r.trackId === t.id && function e(t, r, n) {
                    r && !n.has(r.id) && (n.set(r.id, r), Object.keys(r).forEach(i => {
                        i.endsWith("Id") ? e(t, t.get(r[i]), n) : i.endsWith("Ids") && r[i].forEach(r => {
                            e(t, t.get(r), n)
                        })
                    }))
                }(e, r, i)
            })
        }), i
    }
    const T = p;

    function E(e) {
        const t = e && e.navigator;
        if (!t.mediaDevices) return;
        const r = g(e),
            n = function(e) {
                if ("object" != typeof e || e.mandatory || e.optional) return e;
                const t = {};
                return Object.keys(e).forEach(r => {
                    if ("require" === r || "advanced" === r || "mediaSource" === r) return;
                    const n = "object" == typeof e[r] ? e[r] : {
                        ideal: e[r]
                    };
                    void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                    const i = function(e, t) {
                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                    };
                    if (void 0 !== n.ideal) {
                        t.optional = t.optional || [];
                        let e = {};
                        "number" == typeof n.ideal ? (e[i("min", r)] = n.ideal, t.optional.push(e), e = {}, e[i("max", r)] = n.ideal, t.optional.push(e)) : (e[i("", r)] = n.ideal, t.optional.push(e))
                    }
                    void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", r)] = n.exact) : ["min", "max"].forEach(e => {
                        void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, r)] = n[e])
                    })
                }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            },
            i = function(e, i) {
                if (r.version >= 61) return i(e);
                if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
                    const t = function(e, t, r) {
                        t in e && !(r in e) && (e[r] = e[t], delete e[t])
                    };
                    t((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), t(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio)
                }
                if (e && "object" == typeof e.video) {
                    let a = e.video.facingMode;
                    a = a && ("object" == typeof a ? a : {
                        ideal: a
                    });
                    const o = r.version < 66;
                    if (a && ("user" === a.exact || "environment" === a.exact || "user" === a.ideal || "environment" === a.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || o)) {
                        let r;
                        if (delete e.video.facingMode, "environment" === a.exact || "environment" === a.ideal ? r = ["back", "rear"] : "user" !== a.exact && "user" !== a.ideal || (r = ["front"]), r) return t.mediaDevices.enumerateDevices().then(t => {
                            let o = (t = t.filter(e => "videoinput" === e.kind)).find(e => r.some(t => e.label.toLowerCase().includes(t)));
                            return !o && t.length && r.includes("back") && (o = t[t.length - 1]), o && (e.video.deviceId = a.exact ? {
                                exact: o.deviceId
                            } : {
                                ideal: o.deviceId
                            }), e.video = n(e.video), T("chrome: " + JSON.stringify(e)), i(e)
                        })
                    }
                    e.video = n(e.video)
                }
                return T("chrome: " + JSON.stringify(e)), i(e)
            },
            a = function(e) {
                return r.version >= 64 ? e : {
                    name: {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError"
                    }[e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint || e.constraintName,
                    toString() {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            };
        if (t.getUserMedia = function(e, r, n) {
                i(e, e => {
                    t.webkitGetUserMedia(e, r, e => {
                        n && n(a(e))
                    })
                })
            }.bind(t), t.mediaDevices.getUserMedia) {
            const e = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
            t.mediaDevices.getUserMedia = function(t) {
                return i(t, t => e(t).then(e => {
                    if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach(e => {
                        e.stop()
                    }), new DOMException("", "NotFoundError");
                    return e
                }, e => Promise.reject(a(e))))
            }
        }
    }

    function S(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function(r) {
            return t(r).then(t => {
                const n = r.video && r.video.width,
                    i = r.video && r.video.height,
                    a = r.video && r.video.frameRate;
                return r.video = {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: t,
                        maxFrameRate: a || 3
                    }
                }, n && (r.video.mandatory.maxWidth = n), i && (r.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(r)
            })
        } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
    }

    function w(e) {
        e.MediaStream = e.MediaStream || e.webkitMediaStream
    }

    function k(e) {
        if ("object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) d(e, "track", e => (e.transceiver || Object.defineProperty(e, "transceiver", {
            value: {
                receiver: e.receiver
            }
        }), e));
        else {
            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get() {
                    return this._ontrack
                },
                set(e) {
                    this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                },
                enumerable: !0,
                configurable: !0
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = t => {
                    t.stream.addEventListener("addtrack", r => {
                        let n;
                        n = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(e => e.track && e.track.id === r.track.id) : {
                            track: r.track
                        };
                        const i = new Event("track");
                        i.track = r.track, i.receiver = n, i.transceiver = {
                            receiver: n
                        }, i.streams = [t.stream], this.dispatchEvent(i)
                    }), t.stream.getTracks().forEach(r => {
                        let n;
                        n = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(e => e.track && e.track.id === r.id) : {
                            track: r
                        };
                        const i = new Event("track");
                        i.track = r, i.receiver = n, i.transceiver = {
                            receiver: n
                        }, i.streams = [t.stream], this.dispatchEvent(i)
                    })
                }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
            }
        }
    }

    function _(e) {
        if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
            const t = function(e, t) {
                return {
                    track: t,
                    get dtmf() {
                        return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                    },
                    _pc: e
                }
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
                e.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice()
                };
                const r = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function(e, n) {
                    let i = r.apply(this, arguments);
                    return i || (i = t(this, e), this._senders.push(i)), i
                };
                const n = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function(e) {
                    n.apply(this, arguments);
                    const t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1)
                }
            }
            const r = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function(e) {
                this._senders = this._senders || [], r.apply(this, [e]), e.getTracks().forEach(e => {
                    this._senders.push(t(this, e))
                })
            };
            const n = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function(e) {
                this._senders = this._senders || [], n.apply(this, [e]), e.getTracks().forEach(e => {
                    const t = this._senders.find(t => t.track === e);
                    t && this._senders.splice(this._senders.indexOf(t), 1)
                })
            }
        } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            e.RTCPeerConnection.prototype.getSenders = function() {
                const e = t.apply(this, []);
                return e.forEach(e => e._pc = this), e
            }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get() {
                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                }
            })
        }
    }

    function C(e) {
        if (!e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            const [e, r, n] = arguments;
            if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
            if (0 === t.length && (0 === arguments.length || "function" != typeof e)) return t.apply(this, []);
            const i = function(e) {
                    const t = {};
                    return e.result().forEach(e => {
                        const r = {
                            id: e.id,
                            timestamp: e.timestamp,
                            type: {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[e.type] || e.type
                        };
                        e.names().forEach(t => {
                            r[t] = e.stat(t)
                        }), t[r.id] = r
                    }), t
                },
                a = function(e) {
                    return new Map(Object.keys(e).map(t => [t, e[t]]))
                };
            if (arguments.length >= 2) {
                const n = function(e) {
                    r(a(i(e)))
                };
                return t.apply(this, [n, e])
            }
            return new Promise((e, r) => {
                t.apply(this, [function(t) {
                    e(a(i(t)))
                }, r])
            }).then(r, n)
        }
    }

    function R(e) {
        if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
        if (!("getStats" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            t && (e.RTCPeerConnection.prototype.getSenders = function() {
                const e = t.apply(this, []);
                return e.forEach(e => e._pc = this), e
            });
            const r = e.RTCPeerConnection.prototype.addTrack;
            r && (e.RTCPeerConnection.prototype.addTrack = function() {
                const e = r.apply(this, arguments);
                return e._pc = this, e
            }), e.RTCRtpSender.prototype.getStats = function() {
                const e = this;
                return this._pc.getStats().then(t => b(t, e.track, !0))
            }
        }
        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
            const t = e.RTCPeerConnection.prototype.getReceivers;
            t && (e.RTCPeerConnection.prototype.getReceivers = function() {
                const e = t.apply(this, []);
                return e.forEach(e => e._pc = this), e
            }), d(e, "track", e => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
                const e = this;
                return this._pc.getStats().then(t => b(t, e.track, !1))
            }
        }
        if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
        const t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                const e = arguments[0];
                let t, r, n;
                return this.getSenders().forEach(r => {
                    r.track === e && (t ? n = !0 : t = r)
                }), this.getReceivers().forEach(t => (t.track === e && (r ? n = !0 : r = t), t.track === e)), n || t && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t ? t.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
            }
            return t.apply(this, arguments)
        }
    }

    function x(e) {
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(e => this._shimmedLocalStreams[e][0])
        };
        const t = e.RTCPeerConnection.prototype.addTrack;
        e.RTCPeerConnection.prototype.addTrack = function(e, r) {
            if (!r) return t.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const n = t.apply(this, arguments);
            return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n) : this._shimmedLocalStreams[r.id] = [r, n], n
        };
        const r = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(e) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(e => {
                if (this.getSenders().find(t => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError")
            });
            const t = this.getSenders();
            r.apply(this, arguments);
            const n = this.getSenders().filter(e => -1 === t.indexOf(e));
            this._shimmedLocalStreams[e.id] = [e].concat(n)
        };
        const n = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(e) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], n.apply(this, arguments)
        };
        const i = e.RTCPeerConnection.prototype.removeTrack;
        e.RTCPeerConnection.prototype.removeTrack = function(e) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(t => {
                const r = this._shimmedLocalStreams[t].indexOf(e); - 1 !== r && this._shimmedLocalStreams[t].splice(r, 1), 1 === this._shimmedLocalStreams[t].length && delete this._shimmedLocalStreams[t]
            }), i.apply(this, arguments)
        }
    }

    function P(e) {
        if (!e.RTCPeerConnection) return;
        const t = g(e);
        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return x(e);
        const r = e.RTCPeerConnection.prototype.getLocalStreams;
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            const e = r.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, e.map(e => this._reverseStreams[e.id])
        };
        const n = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(t) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(e => {
                    if (this.getSenders().find(t => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError")
                }), !this._reverseStreams[t.id]) {
                const r = new e.MediaStream(t.getTracks());
                this._streams[t.id] = r, this._reverseStreams[r.id] = t, t = r
            }
            n.apply(this, [t])
        };
        const i = e.RTCPeerConnection.prototype.removeStream;

        function a(e, t) {
            let r = t.sdp;
            return Object.keys(e._reverseStreams || []).forEach(t => {
                const n = e._reverseStreams[t],
                    i = e._streams[n.id];
                r = r.replace(new RegExp(i.id, "g"), n.id)
            }), new RTCSessionDescription({
                type: t.type,
                sdp: r
            })
        }

        function o(e, t) {
            let r = t.sdp;
            return Object.keys(e._reverseStreams || []).forEach(t => {
                const n = e._reverseStreams[t],
                    i = e._streams[n.id];
                r = r.replace(new RegExp(n.id, "g"), i.id)
            }), new RTCSessionDescription({
                type: t.type,
                sdp: r
            })
        }
        e.RTCPeerConnection.prototype.removeStream = function(e) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
        }, e.RTCPeerConnection.prototype.addTrack = function(t, r) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            const n = [].slice.call(arguments, 1);
            if (1 !== n.length || !n[0].getTracks().find(e => e === t)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
            const i = this.getSenders().find(e => e.track === t);
            if (i) throw new DOMException("Track already exists.", "InvalidAccessError");
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const a = this._streams[r.id];
            if (a) a.addTrack(t), Promise.resolve().then(() => {
                this.dispatchEvent(new Event("negotiationneeded"))
            });
            else {
                const n = new e.MediaStream([t]);
                this._streams[r.id] = n, this._reverseStreams[n.id] = r, this.addStream(n)
            }
            return this.getSenders().find(e => e.track === t)
        }, ["createOffer", "createAnswer"].forEach((function(t) {
            const r = e.RTCPeerConnection.prototype[t],
                n = {
                    [t]() {
                        const e = arguments;
                        return arguments.length && "function" == typeof arguments[0] ? r.apply(this, [t => {
                            const r = a(this, t);
                            e[0].apply(null, [r])
                        }, t => {
                            e[1] && e[1].apply(null, t)
                        }, arguments[2]]) : r.apply(this, arguments).then(e => a(this, e))
                    }
                };
            e.RTCPeerConnection.prototype[t] = n[t]
        }));
        const s = e.RTCPeerConnection.prototype.setLocalDescription;
        e.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = o(this, arguments[0]), s.apply(this, arguments)) : s.apply(this, arguments)
        };
        const l = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
            get() {
                const e = l.get.apply(this);
                return "" === e.type ? e : a(this, e)
            }
        }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
            if (!(e._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
            let t;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach(r => {
                this._streams[r].getTracks().find(t => e.track === t) && (t = this._streams[r])
            }), t && (1 === t.getTracks().length ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
        }
    }

    function A(e) {
        const t = g(e);
        if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), !e.RTCPeerConnection) return;
        t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
            const r = e.RTCPeerConnection.prototype[t],
                n = {
                    [t]() {
                        return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                    }
                };
            e.RTCPeerConnection.prototype[t] = n[t]
        }));
        const r = e.RTCPeerConnection.prototype.addIceCandidate;
        e.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0] ? t.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
        }
    }

    function O(e) {
        d(e, "negotiationneeded", e => {
            if ("stable" === e.target.signalingState) return e
        })
    }
    var D = r(18),
        L = r.n(D);

    function I(e) {
        const t = e && e.navigator,
            r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(e) {
            return r(e).catch(e => Promise.reject(function(e) {
                return {
                    name: {
                        PermissionDeniedError: "NotAllowedError"
                    }[e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint,
                    toString() {
                        return this.name
                    }
                }
            }(e)))
        }
    }

    function M(e) {
        "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)))
    }

    function N(e) {
        const t = g(e);
        if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(e) {
                return e
            }), e.RTCSessionDescription || (e.RTCSessionDescription = function(e) {
                return e
            }), t.version < 15025)) {
            const t = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
            Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                set(e) {
                    t.set.call(this, e);
                    const r = new Event("enabled");
                    r.enabled = e, this.dispatchEvent(r)
                }
            })
        }!e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get() {
                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
            }
        }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
        const r = L()(e, t.version);
        e.RTCPeerConnection = function(e) {
            return e && e.iceServers && (e.iceServers = function(e, t) {
                let r = !1;
                return (e = JSON.parse(JSON.stringify(e))).filter(e => {
                    if (e && (e.urls || e.url)) {
                        var t = e.urls || e.url;
                        e.url && !e.urls && m("RTCIceServer.url", "RTCIceServer.urls");
                        const n = "string" == typeof t;
                        return n && (t = [t]), t = t.filter(e => {
                            if (0 === e.indexOf("stun:")) return !1;
                            const t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                            return t && !r ? (r = !0, !0) : t && !r
                        }), delete e.url, e.urls = n ? t[0] : t, !!t.length
                    }
                })
            }(e.iceServers, t.version), p("ICE servers after filtering:", e.iceServers)), new r(e)
        }, e.RTCPeerConnection.prototype = r.prototype
    }

    function F(e) {
        !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
    }

    function U(e) {
        const t = g(e),
            r = e && e.navigator,
            n = e && e.MediaStreamTrack;
        if (r.getUserMedia = function(e, t, n) {
                m("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, n)
            }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
            const e = function(e, t, r) {
                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                },
                t = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            if (r.mediaDevices.getUserMedia = function(r) {
                    return "object" == typeof r && "object" == typeof r.audio && (r = JSON.parse(JSON.stringify(r)), e(r.audio, "autoGainControl", "mozAutoGainControl"), e(r.audio, "noiseSuppression", "mozNoiseSuppression")), t(r)
                }, n && n.prototype.getSettings) {
                const t = n.prototype.getSettings;
                n.prototype.getSettings = function() {
                    const r = t.apply(this, arguments);
                    return e(r, "mozAutoGainControl", "autoGainControl"), e(r, "mozNoiseSuppression", "noiseSuppression"), r
                }
            }
            if (n && n.prototype.applyConstraints) {
                const t = n.prototype.applyConstraints;
                n.prototype.applyConstraints = function(r) {
                    return "audio" === this.kind && "object" == typeof r && (r = JSON.parse(JSON.stringify(r)), e(r, "autoGainControl", "mozAutoGainControl"), e(r, "noiseSuppression", "mozNoiseSuppression")), t.apply(this, [r])
                }
            }
        }
    }

    function j(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(r) {
            if (!r || !r.video) {
                const e = new DOMException("getDisplayMedia without video constraints is undefined");
                return e.name = "NotFoundError", e.code = 8, Promise.reject(e)
            }
            return !0 === r.video ? r.video = {
                mediaSource: t
            } : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r)
        })
    }

    function B(e) {
        "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    }

    function G(e) {
        const t = g(e);
        if ("object" != typeof e || !e.RTCPeerConnection && !e.mozRTCPeerConnection) return;
        if (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
                const r = e.RTCPeerConnection.prototype[t],
                    n = {
                        [t]() {
                            return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                        }
                    };
                e.RTCPeerConnection.prototype[t] = n[t]
            })), t.version < 68) {
            const t = e.RTCPeerConnection.prototype.addIceCandidate;
            e.RTCPeerConnection.prototype.addIceCandidate = function() {
                return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
            }
        }
        const r = {
                inboundrtp: "inbound-rtp",
                outboundrtp: "outbound-rtp",
                candidatepair: "candidate-pair",
                localcandidate: "local-candidate",
                remotecandidate: "remote-candidate"
            },
            n = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            const [e, i, a] = arguments;
            return n.apply(this, [e || null]).then(e => {
                if (t.version < 53 && !i) try {
                    e.forEach(e => {
                        e.type = r[e.type] || e.type
                    })
                } catch (t) {
                    if ("TypeError" !== t.name) throw t;
                    e.forEach((t, n) => {
                        e.set(n, Object.assign({}, t, {
                            type: r[t.type] || t.type
                        }))
                    })
                }
                return e
            }).then(i, a)
        }
    }

    function z(e) {
        if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
        const t = e.RTCPeerConnection.prototype.getSenders;
        t && (e.RTCPeerConnection.prototype.getSenders = function() {
            const e = t.apply(this, []);
            return e.forEach(e => e._pc = this), e
        });
        const r = e.RTCPeerConnection.prototype.addTrack;
        r && (e.RTCPeerConnection.prototype.addTrack = function() {
            const e = r.apply(this, arguments);
            return e._pc = this, e
        }), e.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
        }
    }

    function K(e) {
        if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
        const t = e.RTCPeerConnection.prototype.getReceivers;
        t && (e.RTCPeerConnection.prototype.getReceivers = function() {
            const e = t.apply(this, []);
            return e.forEach(e => e._pc = this), e
        }), d(e, "track", e => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track)
        }
    }

    function V(e) {
        !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
            m("removeStream", "removeTrack"), this.getSenders().forEach(t => {
                t.track && e.getTracks().includes(t.track) && this.removeTrack(t)
            })
        })
    }

    function H(e) {
        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
    }

    function W(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.addTransceiver;
        t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            const e = arguments[1],
                r = e && "sendEncodings" in e;
            r && e.sendEncodings.forEach(e => {
                if ("rid" in e) {
                    if (!/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.")
                }
                if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0")
            });
            const n = t.apply(this, arguments);
            if (r) {
                const {
                    sender: t
                } = n, r = t.getParameters();
                "encodings" in r || (r.encodings = e.sendEncodings, this.setParametersPromises.push(t.setParameters(r).catch(() => {})))
            }
            return n
        })
    }

    function Y(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
                this.setParametersPromises = []
            }) : t.apply(this, arguments)
        }
    }

    function q(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.createAnswer;
        e.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
                this.setParametersPromises = []
            }) : t.apply(this, arguments)
        }
    }

    function X(e) {
        if ("object" == typeof e && e.RTCPeerConnection) {
            if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._localStreams || (this._localStreams = []), this._localStreams
                }), !("addStream" in e.RTCPeerConnection.prototype)) {
                const t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addStream = function(e) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach(r => t.call(this, r, e)), e.getVideoTracks().forEach(r => t.call(this, r, e))
                }, e.RTCPeerConnection.prototype.addTrack = function(e) {
                    const r = arguments[1];
                    return r && (this._localStreams ? this._localStreams.includes(r) || this._localStreams.push(r) : this._localStreams = [r]), t.apply(this, arguments)
                }
            }
            "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
                this._localStreams || (this._localStreams = []);
                const t = this._localStreams.indexOf(e);
                if (-1 === t) return;
                this._localStreams.splice(t, 1);
                const r = e.getTracks();
                this.getSenders().forEach(e => {
                    r.includes(e.track) && this.removeTrack(e)
                })
            })
        }
    }

    function $(e) {
        if ("object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : []
            }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                get() {
                    return this._onaddstream
                },
                set(e) {
                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = e => {
                        e.streams.forEach(e => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e)) return;
                            this._remoteStreams.push(e);
                            const t = new Event("addstream");
                            t.stream = e, this.dispatchEvent(t)
                        })
                    })
                }
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const e = this;
                return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t) {
                    t.streams.forEach(t => {
                        if (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0) return;
                        e._remoteStreams.push(t);
                        const r = new Event("addstream");
                        r.stream = t, e.dispatchEvent(r)
                    })
                }), t.apply(e, arguments)
            }
        }
    }

    function Q(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype,
            r = t.createOffer,
            n = t.createAnswer,
            i = t.setLocalDescription,
            a = t.setRemoteDescription,
            o = t.addIceCandidate;
        t.createOffer = function(e, t) {
            const n = arguments.length >= 2 ? arguments[2] : arguments[0],
                i = r.apply(this, [n]);
            return t ? (i.then(e, t), Promise.resolve()) : i
        }, t.createAnswer = function(e, t) {
            const r = arguments.length >= 2 ? arguments[2] : arguments[0],
                i = n.apply(this, [r]);
            return t ? (i.then(e, t), Promise.resolve()) : i
        };
        let s = function(e, t, r) {
            const n = i.apply(this, [e]);
            return r ? (n.then(t, r), Promise.resolve()) : n
        };
        t.setLocalDescription = s, s = function(e, t, r) {
            const n = a.apply(this, [e]);
            return r ? (n.then(t, r), Promise.resolve()) : n
        }, t.setRemoteDescription = s, s = function(e, t, r) {
            const n = o.apply(this, [e]);
            return r ? (n.then(t, r), Promise.resolve()) : n
        }, t.addIceCandidate = s
    }

    function J(e) {
        const t = e && e.navigator;
        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
            const e = t.mediaDevices,
                r = e.getUserMedia.bind(e);
            t.mediaDevices.getUserMedia = e => r(Z(e))
        }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(e, r, n) {
            t.mediaDevices.getUserMedia(e).then(r, n)
        }.bind(t))
    }

    function Z(e) {
        return e && void 0 !== e.video ? Object.assign({}, e, {
            video: y(e.video)
        }) : e
    }

    function ee(e) {
        const t = e.RTCPeerConnection;
        e.RTCPeerConnection = function(e, r) {
            if (e && e.iceServers) {
                const t = [];
                for (let r = 0; r < e.iceServers.length; r++) {
                    let n = e.iceServers[r];
                    !n.hasOwnProperty("urls") && n.hasOwnProperty("url") ? (m("RTCIceServer.url", "RTCIceServer.urls"), n = JSON.parse(JSON.stringify(n)), n.urls = n.url, delete n.url, t.push(n)) : t.push(e.iceServers[r])
                }
                e.iceServers = t
            }
            return new t(e, r)
        }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get: () => t.generateCertificate
        })
    }

    function te(e) {
        "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    }

    function re(e) {
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function(e) {
            if (e) {
                void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                const t = this.getTransceivers().find(e => "audio" === e.receiver.track.kind);
                !1 === e.offerToReceiveAudio && t ? "sendrecv" === t.direction ? t.setDirection ? t.setDirection("sendonly") : t.direction = "sendonly" : "recvonly" === t.direction && (t.setDirection ? t.setDirection("inactive") : t.direction = "inactive") : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                const r = this.getTransceivers().find(e => "video" === e.receiver.track.kind);
                !1 === e.offerToReceiveVideo && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveVideo || r || this.addTransceiver("video")
            }
            return t.apply(this, arguments)
        }
    }
    var ne = r(4),
        ie = r.n(ne);

    function ae(e) {
        if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
        const t = e.RTCIceCandidate;
        e.RTCIceCandidate = function(e) {
            if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                const r = new t(e),
                    n = ie.a.parseCandidate(e.candidate),
                    i = Object.assign(r, n);
                return i.toJSON = function() {
                    return {
                        candidate: i.candidate,
                        sdpMid: i.sdpMid,
                        sdpMLineIndex: i.sdpMLineIndex,
                        usernameFragment: i.usernameFragment
                    }
                }, i
            }
            return new t(e)
        }, e.RTCIceCandidate.prototype = t.prototype, d(e, "icecandidate", t => (t.candidate && Object.defineProperty(t, "candidate", {
            value: new e.RTCIceCandidate(t.candidate),
            writable: "false"
        }), t))
    }

    function oe(e) {
        if (!e.RTCPeerConnection) return;
        const t = g(e);
        "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
            get() {
                return void 0 === this._sctp ? null : this._sctp
            }
        });
        const r = function(e) {
                if (!e || !e.sdp) return !1;
                const t = ie.a.splitSections(e.sdp);
                return t.shift(), t.some(e => {
                    const t = ie.a.parseMLine(e);
                    return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                })
            },
            n = function(e) {
                const t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === t || t.length < 2) return -1;
                const r = parseInt(t[1], 10);
                return r != r ? -1 : r
            },
            i = function(e) {
                let r = 65536;
                return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r
            },
            a = function(e, r) {
                let n = 65536;
                "firefox" === t.browser && 57 === t.version && (n = 65535);
                const i = ie.a.matchPrefix(e.sdp, "a=max-message-size:");
                return i.length > 0 ? n = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (n = 2147483637), n
            },
            o = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, "chrome" === t.browser && t.version >= 76) {
                const {
                    sdpSemantics: e
                } = this.getConfiguration();
                "plan-b" === e && Object.defineProperty(this, "sctp", {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            if (r(arguments[0])) {
                const e = n(arguments[0]),
                    t = i(e),
                    r = a(arguments[0], e);
                let o;
                o = 0 === t && 0 === r ? Number.POSITIVE_INFINITY : 0 === t || 0 === r ? Math.max(t, r) : Math.min(t, r);
                const s = {};
                Object.defineProperty(s, "maxMessageSize", {
                    get: () => o
                }), this._sctp = s
            }
            return o.apply(this, arguments)
        }
    }

    function se(e) {
        if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;

        function t(e, t) {
            const r = e.send;
            e.send = function() {
                const n = arguments[0],
                    i = n.length || n.size || n.byteLength;
                if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                return r.apply(e, arguments)
            }
        }
        const r = e.RTCPeerConnection.prototype.createDataChannel;
        e.RTCPeerConnection.prototype.createDataChannel = function() {
            const e = r.apply(this, arguments);
            return t(e, this), e
        }, d(e, "datachannel", e => (t(e.channel, e.target), e))
    }

    function le(e) {
        if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
        const t = e.RTCPeerConnection.prototype;
        Object.defineProperty(t, "connectionState", {
            get() {
                return {
                    completed: "connected",
                    checking: "connecting"
                }[this.iceConnectionState] || this.iceConnectionState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "onconnectionstatechange", {
            get() {
                return this._onconnectionstatechange || null
            },
            set(e) {
                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
            },
            enumerable: !0,
            configurable: !0
        }), ["setLocalDescription", "setRemoteDescription"].forEach(e => {
            const r = t[e];
            t[e] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = e => {
                    const t = e.target;
                    if (t._lastConnectionState !== t.connectionState) {
                        t._lastConnectionState = t.connectionState;
                        const r = new Event("connectionstatechange", e);
                        t.dispatchEvent(r)
                    }
                    return e
                }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments)
            }
        })
    }

    function ce(e) {
        if (!e.RTCPeerConnection) return;
        const t = g(e);
        if ("chrome" === t.browser && t.version >= 71) return;
        const r = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
            return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter(e => "a=extmap-allow-mixed" !== e.trim()).join("\n")), r.apply(this, arguments)
        }
    }
    const ue = function({
        window: e
    } = {}, t = {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
    }) {
        const r = p,
            l = g(e),
            c = {
                browserDetails: l,
                commonShim: s,
                extractVersion: u,
                disableLog: f,
                disableWarnings: h
            };
        switch (l.browser) {
            case "chrome":
                if (!n || !A || !t.shimChrome) return r("Chrome shim is not included in this adapter release."), c;
                r("adapter.js shimming chrome."), c.browserShim = n, E(e), w(e), A(e), k(e), P(e), _(e), C(e), R(e), O(e), ae(e), le(e), oe(e), se(e), ce(e);
                break;
            case "firefox":
                if (!a || !G || !t.shimFirefox) return r("Firefox shim is not included in this adapter release."), c;
                r("adapter.js shimming firefox."), c.browserShim = a, U(e), G(e), B(e), V(e), z(e), K(e), H(e), W(e), Y(e), q(e), ae(e), le(e), oe(e), se(e);
                break;
            case "edge":
                if (!i || !N || !t.shimEdge) return r("MS edge shim is not included in this adapter release."), c;
                r("adapter.js shimming edge."), c.browserShim = i, I(e), M(e), N(e), F(e), oe(e), se(e);
                break;
            case "safari":
                if (!o || !t.shimSafari) return r("Safari shim is not included in this adapter release."), c;
                r("adapter.js shimming safari."), c.browserShim = o, ee(e), re(e), Q(e), X(e), $(e), te(e), J(e), ae(e), oe(e), se(e), ce(e);
                break;
            default:
                r("Unsupported browser!")
        }
        return c
    }({
        window: window
    });
    t.default = ue
}]);