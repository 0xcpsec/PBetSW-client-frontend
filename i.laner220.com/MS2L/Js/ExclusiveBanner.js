"use strict";
(self.webpackChunkmember2 = self.webpackChunkmember2 || []).push([
    [7207], {
        8046: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => $
            });
            var n = t(80296),
                r = t(41486),
                i = t.n(r),
                c = t(85952),
                s = t(54952),
                l = t(92602),
                o = t(93706),
                m = t(73656),
                u = t(91494),
                p = t(3585),
                d = t(71657),
                g = t(35603),
                f = (t(16984), t(45458)),
                v = t(10330),
                b = t(64467),
                w = t(89827),
                A = t(71468),
                E = t(87049),
                h = t(77314),
                k = t(85067),
                R = s.A.attrs.FileVersion,
                S = "Open",
                N = "Invoke",
                L = "w_vgal",
                _ = "w_es",
                y = "w_advantplayvendorlobby",
                I = "Reward",
                U = function(e) {
                    parent.postMessage({
                        data: e,
                        betFrom: l.A.attrs.BetFrom
                    }, "*")
                },
                x = (0, b.A)((0, b.A)((0, b.A)((0, b.A)({}, L, (function() {
                    return U("openVGaming")
                })), y, (function() {
                    return U("openAdvantPlayVendorLobby")
                })), _, (function() {
                    A.A.SwitchESportsESGo(banner.LinkUrl)
                })), I, (function() {
                    (0, E.lx)(), (0, E.B4)({
                        type: 1,
                        action: 6
                    })
                })),
                B = (0, b.A)((0, b.A)({}, S, (function(e) {
                    w.A.open(e.LinkUrl, e.Name, e.Arg, e.ProductName)
                })), N, (function(e) {
                    x[e.Name]()
                })),
                O = function(e) {
                    var a = e.bannerSet,
                        t = function(e) {
                            return function() {
                                if ("Galaxy" != e.Name)
                                    if ("Mars" != e.Name) {
                                        var a = {
                                            1: S,
                                            2: N
                                        }[e.OpenType];
                                        a && B[a](e)
                                    } else {
                                        var t = k.k();
                                        parent.postMessage({
                                            data: "ToMarsView",
                                            sportId: t
                                        }, "*")
                                    }
                                else {
                                    h.ajax({
                                        type: "POST",
                                        url: "/UserBehavior/AddKafkaResult",
                                        data: {
                                            type: 1,
                                            act: 2,
                                            note: "Galaxy_Transfer"
                                        },
                                        dataType: "json",
                                        async: !1,
                                        cache: !1,
                                        success: function(e) {},
                                        failure: function(e) {}
                                    });
                                    var n = k.k();
                                    parent.postMessage({
                                        data: "ToGalaxyView",
                                        sportId: n
                                    }, "*")
                                }
                            }
                        };
                    return React.createElement("div", {
                        className: "swiper-slide"
                    }, React.createElement("ul", {
                        className: "c-side-banner__list"
                    }, a.map((function(e) {
                        return e ? React.createElement("li", {
                            key: e.Name,
                            className: "c-side-banner__item",
                            onClick: t(e)
                        }, React.createElement("a", null, React.createElement("img", {
                            src: e.ImgUrl
                        }))) : React.createElement(C, null)
                    }))))
                },
                C = function() {
                    return React.createElement("li", {
                        className: "c-side-banner__item",
                        "data-default": "true"
                    }, React.createElement("a", null, s.A.attrs.UseImageServer ? React.createElement("img", {
                        src: "".concat(s.A.attrs.ImageServerDomain, "/").concat(s.A.attrs.ImageFolder, "/template/_global-L/common/Images/ExclusiveOffer/Sidebar-Default.png").concat(R)
                    }) : React.createElement("img", {
                        src: "/template/_global-L/common/Images/ExclusiveOffer/Sidebar-Default.png".concat(R)
                    })))
                },
                T = function(e) {
                    var a = e.bannerSets,
                        t = (0, r.useRef)(null),
                        n = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        return t.current = new Swiper(n.current, {
                                loop: !0,
                                slidesPerView: 1,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0
                                },
                                autoplay: {
                                    delay: 5e3,
                                    stopOnLastSlide: !1,
                                    disableOnInteraction: !1
                                }
                            }),
                            function() {
                                t.current && t.current.destroy(!0, !0)
                            }
                    }), []), React.createElement("div", {
                        ref: n,
                        className: "c-side-banner__swiper"
                    }, React.createElement("div", {
                        className: "swiper-wrapper"
                    }, a.map((function(e, a) {
                        return React.createElement(O, {
                            key: a,
                            bannerSet: e
                        })
                    }))), React.createElement("div", {
                        className: "slides-pagination swiper-pagination"
                    }))
                },
                F = function() {
                    var e = (0, f.A)(s.A.attrs.RightBanners || []);
                    1 == s.A.attrs.SiteType && (e = e.filter((function(e) {
                        return "Galaxy" != e.Name && "Mars" != e.Name
                    }))), e.length > 2 && e.length % 2 != 0 && e.push(null);
                    var a = (0, v.chunkArray)(e, 2);
                    return e.length ? React.createElement("div", {
                        className: "c-side-banner",
                        "data-open": "false"
                    }, React.createElement("div", {
                        className: "c-side-banner__content"
                    }, e.length > 2 ? React.createElement(T, {
                        bannerSets: a
                    }) : React.createElement("div", {
                        className: "c-side-banner__swiper"
                    }, React.createElement("div", {
                        className: "swiper-wrapper"
                    }, a.map((function(e, a) {
                        return React.createElement(O, {
                            key: a,
                            bannerSet: e
                        })
                    })))))) : null
                },
                M = t(37133),
                z = t(46868),
                D = t(57307),
                G = o.A.getClient("SoccerMore"),
                V = i().useState,
                P = i().useEffect,
                j = s.A.attrs.ImageServerDomain,
                W = s.A.attrs.FileVersion,
                q = s.A.attrs.UseImageServer,
                Q = [{
                    link: "",
                    imgURL: "/template/_global/{0}/Images/ExclusiveOffer/StreamerEvent.jpg",
                    sort: 1
                }, {
                    link: "https://www.winwin999.net?bt={0}&pd=sports&lang={1}&platform=".concat(z.iD, "&ip=").concat(z.Wq),
                    imgURL: "/template/_global/{0}/Images/ExclusiveOffer/AppDownload.jpg",
                    sort: 2
                }, {
                    link: "https://www.thesabamynews.com/",
                    imgURL: "/template/_global/{0}/Images/ExclusiveOffer/SabaSports.png",
                    sort: 3
                }];
            Q = s.A.attrs.LiveS24 || s.A.attrs.LiveS25 || s.A.attrs.LiveS26 || s.A.attrs.LiveS27 || s.A.attrs.LiveS28 || s.A.attrs.LiveS29 || s.A.attrs.LiveS23 || s.A.attrs.LiveS22 || s.A.attrs.LiveS21 || s.A.attrs.LiveS ? Q : Q.filter((function(e) {
                return 1 !== e.sort
            }));
            var X = {
                    en: "en",
                    vn: "vn",
                    ch: "zh-tw",
                    cs: "zh-cn",
                    zhcn: "zh-cn"
                },
                H = function(e) {
                    return i().createElement("div", {
                        className: "slides-control-item swiper-slide"
                    }, i().createElement("ul", {
                        className: "c-side-banner__list"
                    }, i().createElement("li", {
                        className: "c-side-banner__item"
                    }, i().createElement("a", {
                        onClick: function(a) {
                            "" == e.data.link ? (d.A.Open("NbaStreamer"), (0, g.streamingHandle)(1, 1, "", void 0, "1", void 0, 0)) : function(e, a) {
                                e.preventDefault(), window.open(a)
                            }(a, e.data.link)
                        }
                    }, i().createElement("img", {
                        src: e.data.imgURL
                    })))))
                },
                K = function(e) {
                    var a = e.bannerItems,
                        t = function(e) {
                            var a = e.link,
                                t = e.imgURL;
                            return i().createElement("li", {
                                className: "c-side-banner__item"
                            }, i().createElement("a", {
                                onClick: function(e) {
                                    return function(e, a) {
                                        e.preventDefault(), window.open(a)
                                    }(e, a)
                                }
                            }, i().createElement("img", {
                                src: t
                            })))
                        };
                    return i().createElement("div", {
                        className: "c-side-banner",
                        "data-open": "false"
                    }, i().createElement("ul", {
                        className: "c-side-banner__list",
                        role: "asiaview-visible"
                    }, a.map((function(e) {
                        return i().createElement(t, {
                            key: e.link,
                            link: e.link,
                            imgURL: e.imgURL
                        })
                    }))))
                },
                Y = function(e) {
                    var a = e.exclusiveBanner,
                        t = e.configSetting,
                        r = V(l.A.attrs.Lang),
                        c = (0, n.A)(r, 2),
                        o = c[0],
                        p = c[1],
                        d = V(localStorage.getItem("darkMode")),
                        g = (0, n.A)(d, 2),
                        f = g[0],
                        v = g[1],
                        b = V([]),
                        w = (0, n.A)(b, 2),
                        A = w[0],
                        E = w[1],
                        h = V(""),
                        k = (0, n.A)(h, 2),
                        R = k[0],
                        S = k[1];
                    P((function() {
                        return G.on("language.change", N), G.on("darkmode.change", L), q && Q.map((function(e) {
                                e.imgURL = e.imgURL = j + "/MS2/" + e.imgURL + W
                            })),
                            function() {
                                G.off("language.change", N), G.off("darkmode.change", L)
                            }
                    }), []);
                    var N = function() {
                            p(l.A.attrs.Lang)
                        },
                        L = function() {
                            v(localStorage.getItem("darkMode"))
                        },
                        _ = function() {
                            var e = [];
                            return Q.map((function(a) {
                                var t = a.imgURL,
                                    n = "Nova88" == s.A.attrs.SiteName && 2 == a.sort ? a.link.replace("{0}", "GueGhmPRxEWbbp3FIbpqPA") : "IBCBET" == s.A.attrs.SiteName && 2 == a.sort ? a.link.replace("{0}", "QTQanXruEEur8ihzdYoF3A") : a.link.replace("{0}", "Rl89LflI4EaoNIdu2zzeVw");
                                Object.keys(X).map((function(e, a) {
                                    o == e && (n = n.replace("{1}", X[e]))
                                })), n = n.replace("{1}", "en");
                                var r;
                                (new Date).getTime();
                                switch (s.A.attrs.SiteName) {
                                    case "Nova88":
                                        0;
                                        break;
                                    case "viva88":
                                    case "Bong88":
                                        0;
                                        break;
                                    case "IBCBET":
                                        0;
                                        break;
                                    case "pica88":
                                        0
                                }
                                switch (o) {
                                    case "ch":
                                        t = a.imgURL.replace("{0}", "ch");
                                        break;
                                    case "cs":
                                        t = a.imgURL.replace("{0}", "cs");
                                        break;
                                    case "vn":
                                        t = a.imgURL.replace("{0}", "vn");
                                        break;
                                    case "zhcn":
                                        t = a.imgURL.replace("{0}", "zhcn");
                                        break;
                                    case "th":
                                    case "id":
                                        t = a.imgURL.replace("{0}", o);
                                        break;
                                    default:
                                        t = a.imgURL.replace("{0}", "en")
                                }
                                if (3 == a.sort) {
                                    switch (o) {
                                        case "ch":
                                        case "cs":
                                        case "zhcn":
                                            n = "https://www.thesabanewscn.com";
                                            break;
                                        case "vn":
                                            n = "https://www.sabavn.net/lich-thi-dau/bong-da";
                                            break;
                                        case "id":
                                            n = "https://www.thesabasportsindo.com";
                                            break;
                                        case "in":
                                            n = "https://www.cricsabasportsin.com";
                                            break;
                                        case "th":
                                            n = "https://www.sabanews-th.com";
                                            break;
                                        default:
                                            n = "https://www.thesabamynews.com"
                                    }
                                    n = "true" == f && "vn" !== o ? n + "&dark=1" : n
                                }(r = 2 == a.sort ? {
                                    link: n + "&position=".concat(R)
                                } : {
                                    link: n
                                }).imgURL = t, ("Bong88" != s.A.attrs.SiteName && "id8899" !== s.A.attrs.SiteName && "Bettha88" !== s.A.attrs.SiteName || 2 != a.sort) && (2 == a.sort && "" === R || e.push(r))
                            })), e
                        };
                    return P((function() {
                        var e = D.LF.AFTERBANNER;
                        (0, z.PX)(t, S, e)
                    }), [t]), P((function() {
                        E(_)
                    }), [o, f, a, R]), m.default.isNewAsia ? i().createElement("div", {
                        className: "c-side-banner"
                    }, i().createElement("div", {
                        className: "c-side-banner__content"
                    }, i().createElement(u.A, {
                        identifier: "ExclusiveBanner",
                        rawData: A,
                        config: {
                            autoplay: {
                                delay: 5e3,
                                stopOnLastSlide: !1,
                                disableOnInteraction: !1
                            },
                            speed: 1e3,
                            loop: !1,
                            navigation: !1,
                            pagination: {
                                el: ".c-side-banner__swiper .swiper-pagination",
                                clickable: !0
                            }
                        },
                        slidingItem: H,
                        containerClass: "c-side-banner__swiper",
                        wrapperClass: "swiper-wrapper"
                    }))) : i().createElement(K, {
                        bannerItems: A
                    })
                };
            const $ = function(e) {
                var a = e.rightBarOpens,
                    t = e.toggleRightBarOpens,
                    r = V(/^true$/i.test(s.A.attrs.CollapseWidgetFrame)),
                    l = (0, n.A)(r, 2),
                    o = l[0],
                    m = l[1],
                    u = (0, p.default)("lbl_ExclusiveOffer"),
                    d = V(!1),
                    g = (0, n.A)(d, 2),
                    f = g[0],
                    v = g[1],
                    b = M.A.getState().configSetting;
                return P((function() {
                    var e = setTimeout((function() {
                        v(!0)
                    }), 2e3);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), f ? i().createElement(c.A, {
                    widgetName: "exclusiveBanner",
                    title: u,
                    icon: "c-icon--exclusive-offer",
                    className: "c-widget--exclusive-offer",
                    defaultCollapse: !1,
                    collapse: null == a ? void 0 : a.exclusiveBanner,
                    IsFixed: !0,
                    onCollapseChange: function() {
                        return m(!o)
                    },
                    rightBarOpens: a,
                    toggleRightBarOpens: t
                }, 2 != s.A.attrs.SiteMode ? i().createElement(Y, {
                    exclusiveBanner: a.exclusiveBanner,
                    configSetting: b
                }) : i().createElement(F, null)) : null
            }
        }
    }
]);