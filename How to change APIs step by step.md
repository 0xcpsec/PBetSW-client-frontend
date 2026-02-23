1. Change `ApiBackendUrl`:
    - `Index.html`

            ```HTML
            610:    "ApiBackendUrl": "https://i7f2br.bokmqpass.com/api",
            ```
    - This will solve `GetSettings`, `CasinoRoyaleStatusV3`, `GetTopMessage`, `GetSearchHistory`, `Favorites`, `GetIsGoodCustomer` and `desktopMenu` (partially, due to POST)
2. Remove `Logincheckin/Index` call:
    - `main.js`
    
        ```javascript
            loadmsgdata() {
                var e, t, a, n, l, o = this;
                let d = `${(null===(a=null===(t=null===(e=null===window||void 0===window?void 0:window.UtilPack)||void 0===e?void 0:e.siteInfoStore)||void 0===t?void 0:t.attrs)||void 0===a?void 0:a.ApiBackendUrl)||""}/Message/GetTopMessage`;
                const m = r.A.attrs.EnableMessageApiBackend,
                    p = r.A.attrs.IsNewEU;
        @>      // if (u.json("/LoginCheckin/Index", {
                //         rt: null !== (n = sessionStorage.getItem("rt")) && void 0 !== n ? n : "",
                //         at: null !== (l = sessionStorage.getItem("at")) && void 0 !== l ? l : ""
                //     }, (function(e) {
                //         if (0 == e.ErrorCode)
                //             if (m ? o.update({
                //                     175: e.Data[175],
                //                     180: e.Data[180],
                //                     186: e.Data[186],
                //                     190: e.Data[190],
                //                     191: e.Data[191],
                //                     192: e.Data[192],
                //                     193: e.Data[193],
                //                     194: e.Data[194],
                //                     195: e.Data[195],
                //                     196: e.Data[196],
                //                     197: e.Data[197],
                //                     241: e.Data[241],
                //                     UMMessage: e.Data.UMMessage,
                //                     EOF: e.Data.EOF,
                //                     TMI: e.Data.TMI,
                //                     BLMiniDelay: e.Data.BLMiniDelay
                //                 } || {}) : o.update(e.Data || {}), r.A.attrs.EOF = e.Data.EOF, r.A.attrs.BLMiniDelay = e.Data.BLMiniDelay, e.Data.rt && e.Data.at) {
                //                 if (e.Data.at !== sessionStorage.getItem("at") && r.A.attrs.EnablePushJWTtoken)(0, c.getSocket)("default").changeRID("jwt", e.Data.at);
                //                 sessionStorage.setItem("rt", e.Data.rt), sessionStorage.setItem("at", e.Data.at), window.postMessage("LoginCheckin update", "*")
                //             } else sessionStorage.setItem("rt", ""), sessionStorage.setItem("at", "");
                //         2 == r.A.attrs.SiteMode && [1066, 1072, 1074].includes(e.ErrorCode) && (location.href = e.Redirect), o.loginCheckinErrorCount = 0
                //     }), !0, (() => {
                //         if (o.loginCheckinErrorCount++, o.loginCheckinErrorCount > 4) {
                //             sessionStorage.clear();
                //             let e = window.location.hostname;
                //             const t = e.split(".").slice(-2);
                //             e = t.join("."), location.href = `https://www.${e}/`
                //         }
                //     })), m) 
                {
                    var h = {
                        UserName: s.A.attrs.Name,
                        IsNewEu: p,
                        IsFirstLoad: !1
                    };
                    u.json(d, h, this.getDataFromApi.bind(this), !0, null, "GET", "json", {
                        Authorization: `bearer ${sessionStorage.getItem("at")}`
                    })
                }
                "0" != r.A.attrs.SiteType && 1 == s.A.attrs.LG && r.A.attrs.EnableTablet && ("" != r.A.attrs.LoginCheckinUrl && (window.setLoginCheckIn = function(e) {
                    if (0 != e.ErrorCode) switch (e.ErrorCode) {
                        case 4:
                        case 7:
                            window.WindowAlert(e.ErrorMessage), i.A.IsPad() ? location.href = e.RedirectURL : location.href = r.A.attrs.LoginURL;
                            break;
                        default:
                            window.WindowAlert(e.ErrorMessage), location.href = r.A.attrs.APIHomeUrl
                    }
                }, u.json(r.A.attrs.LoginCheckinUrl + "?LicSessionid=" + r.A.attrs.LicSessionID + "&LicUserName=" + r.A.attrs.LicUserName + "&Lang=" + s.A.attrs.Lang, null, null, !1, null, "get", "jsonp", null, "setLoginCheckIn")), "" != r.A.attrs.APIextendSessionUrl && (window.setExtendSession = function(e) {}, u.json(r.A.attrs.APIextendSessionUrl, null, null, !1, null, null, "jsonp", null, "setExtendSession")))
            }
        ```
3. Change `POST` to `GET` for `desktopMenu`:
    - `main.js`

        ```javascript
                getMenuApiData() {
                    var e, t, a;
                    const n = (null === (a = null === (t = null === (e = null === window || void 0 === window ? void 0 : window.UtilPack) || void 0 === e ? void 0 : e.siteInfoStore) || void 0 === t ? void 0 : t.attrs) || void 0 === a ? void 0 : a.ApiBackendUrl) || ""
                      , r = (new Date).getTimezoneOffset() / -60;
                    s.json(`${n}/menu/desktopMenu`, JSON.stringify(r), (e => {
                        this.successProcess(e)
                    }
                    ), !0, (e => {}
        @>          ), "POST", "json", {
                        Authorization: `bearer ${sessionStorage.getItem("at")}`,
                        "Content-Type": "application/json"
                    })
                }
        ```
4. Change `post` to `get` for `GetMoneyLineMappingOddsList`:
    - `main.js`

        ```javascript
        43453:  return e.prev = 0, e.next = 3, ya.post("".concat(this.spreadConfig.apiUrl, "/SpreadSetting/GetMoneyLineMappingOddsList"), null, {
                    headers: {
                        Authorization: "Bearer ".concat(this.spreadConfig.token)
                    }
                });
        ```
5. Change `type` and `url` of `SetFingerprint`:
    - `main.js`

        ```javascript
            if (t)
                a = "/" + (/([^\/]+)\//.exec(window.location.pathname) || [])[1] + "/Home/SetFingerprint";
            else
                a = "/Home/SetFingerprint";
            r().ajax({
        @>      type: "POST",
        @>      url: a,
                data: {
                    visitorId: e.visitorId
                },
                success: function(e) {
                    if (e && 2 === e.status) {
                        let a = "";
                        if (t)
                            a = "/" + (/([^\/]+)\//.exec(window.location.pathname) || [])[1] + e.redirectURL;
                        else
                            a = e.redirectURL;
                        location.href = a
                    }
                }
            })
        ```
6. Change `url` of `GetJSResource`:
    - `main.js`

        ```javascript
            return e ? (l = t ? `/Js/i18n/${a}/Resource_${a}-{lang}.json${n}` : `/Js/i18n/Resource-{lang}.json${n}`,
            s && (l = r + "/MS2" + l)) : (l = "/JSResourceApi/GetJSResource?lang={lang}",
            i && (l = "/" + (/([^\/]+)\//.exec(window.location.pathname) || [])[1] + l)),
            {
        @>      url: l
            }
        ```
    - `jquery-2.1.4.min.js` (add `k.type = "GET";`, it's common way to change `Post` to `Get` for GetLicAutoBookieGroupId)

        ```javascript
        2751:   if (c = rb(mb, k, b, v)) {
        @>          k.type = "GET";
                    v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                        v.abort("timeout")
                    }, k.timeout));
                    try {
                        t = 1, c.send(r, x)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        x(-1, w)
                    }
                } else x(-1, "No Transport");
        ```
    - Modify the format of `GetJSResource.html`
7. Don't include `undefined` in url:
    - `foundation.js` (for Favorites, GetSearchHistory)
    
        ```javascript
            function w(e) {
                var t, s = r().extend({}, e),
                    i = e.success,
                    l = e.error,
                    p = e.disableErrorCodeHandling;
                if ((delete s.success, delete s.error, delete s.disableErrorCodeHandling, !/^https?:\/\//i.test(s.url)) && (s.url = E + s.url.replace(/^\/+/, ""), (c.default.check("Cookieless") || "true" === window.UseCookieless || window.UtilPack && window.UtilPack.Permission && window.UtilPack.Permission.check("Cookieless")) && (t = s.url, !/\(S\([^)]+\)\)/.test(t)))) {
                    var u = (/([^\/]+)\//.exec(window.location.pathname) || [])[1];
        11459:      // s.url = "/" + u + s.url
                }
                return I(r().extend(s, {
        ```
    - This will remove `undefined` from url for `GetLicAutoBookieGroupId`, `WaitingBetList`, `VoidBetList` and `GetJSResource`
8. Change `url` of `GetLicAutoBookieGroupId`:
    - `main.js`

        ```javascript
                G = function() {
                    var e = function() {
                        try {
            @>              g.json("licensee/GetLicAutoBookieGroupId", null, (function(e) {
                                A.A.attrs.LicAutoBookieGroupId = e
                            }), !1)
                        } catch (e) {}
                    };
                    return M((function() {
                        e()
                    }), []), (0, v.A)((function() {
                        e()
                    }), 18e4), null
                },
        ```
10. Change websocket url:
    - `index.html`

        ```HTML
            MS2.url = {
        @>      p: "agnj3.bokmqpass.com"
            };
        ```
    - why Get request is sent continusouly?

        ```javascript
        main.js

            o.prototype.doPoll = function() {
                l("xhr poll");
        @>      var e = this.request()
                  , t = this;
                e.on("data", (function(e) {
                    t.onData(e)
                }
                )),
                e.on("error", (function(e) {
                    t.onError("xhr poll error", e)
                }
                )),
                this.pollXhr = e
            }
        ```
11. Remove `cdn-cgi/rum` call:
    - `index.html`
        ```html
        1227:   <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"9c0d095ecdeeddcc","serverTiming":{"name":{"cfExtPri":true,"cfEdge":true,"cfOrigin":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.9.1","token":"f8434e1fd3444bc6a8af76285c24318c"}'
            crossorigin="anonymous"></script>
        ```
12. Change `src` of `player-props-promotion.jpg`:
    - `main.js`

        ```javascript
                return i().createElement("div", {
                    className: "c-modal__content"
                }, i().createElement("div", {
                    className: "c-modal__img"
                }, i().createElement("img", {
        @>          src: "/template/_global/common/Images/promoPopup/playerProps/".concat(o, "/player-props-promotion.jpg")
                })), i().createElement("div", {
        ```
13. Remove redirection:
    - `main.js` (change `base`)

        ```javascript
                if (u.check("Cookieless")) {
                    var f = (/([^\/]+)\//.exec(window.location.pathname) || [])[1];
                    S.ready(( () => a(16984).init({
        @>              base: "/" + f + "/Sports/",
                        start: e.dl
                    }, a(15499).A)))
                } else
        ```
    - `foundation.js` (remove `/Sports/`)

        ```javascript
        4563:   "mem" !== (e = e || {}).his && (g.history = i.fi()), g.base = e.base || "/Sports/", e.start && g.history.replace(null, e.start);
        ```
        
## Where can I focus If I don't change `ApiBackendUrl`
- GetTopMessage
    - `main.js`
        ```javascript
        @>      let d = `${(null===(a=null===(t=null===(e=null===window||void 0===window?void 0:window.UtilPack)||void 0===e?void 0:e.siteInfoStore)||void 0===t?void 0:t.attrs)||void 0===a?void 0:a.ApiBackendUrl)||""}/Message/GetTopMessage`;
        ```
- GetSettings
    - `main.js`
        ```javascript
        @>      const n = `${e.attrs.ApiBackendUrl || ""}/Config/GetSettings`;
        ```
- CasinoRoyaleStatusV3
    - `main.js`
        ```javascript
            case 0:
                return t = c.A.attrs.ApiBackendUrl || "",
                e.prev = 1,
                e.next = 4,
                (0,
                l.A)("/Casino/CasinoRoyaleStatusV3", {
                    method: "GET",
                    accessToken: sessionStorage.getItem("at"),
        @>          baseUrl: t
                });
        ```
- GetSearchHistory
    - `main.js`
        ```javascript
                const d = a(16984),
        53098:      m = c.A.attrs.EnableSearchNameApiBackend ? c.A.attrs.ApiBackendUrl : "",
                    p = `${m}/Search/GetAllEvents`,
                    h = `${m}/Search/Index`,
                    f = `${m}/Search/RemoveHistory`,
                    g = `${m}/Search/GetSearchHistory`;
        ```
- Favorites
    - `main.js`
        ```javascript
                , b = l.A.attrs.EnableMyFavoriteApiBackend
        @>      , y = b ? l.A.attrs.ApiBackendUrl : ""
                , C = "".concat(y, "/Favorites")
                , E = "".concat(y, "/Favorites/RemoveLeagueByApi")
                , A = "".concat(y, "/Favorites/AddLeagueByApi")
                , w = "".concat(y, "/Favorites/RemoveMatchByApi")
                , _ = "".concat(y, "/Favorites/AddMatchByApi")
                , N = "".concat(y, "/Favorites/RemoveTeamByApi")
                , S = "".concat(y, "/Favorites/AddTeamByApi")
                , k = "".concat(y, "/Favorites/RemoveAllTeam")
        ```
- GetIsGoodCustomer
    - `main.js`
        ```javascript
            const sn = (e, t) => Qa(void 0, void 0, void 0, (function*() {
                var a, n, r, s, i, l, c;
                const o = e.ApiBackendUrl
                  , u = sessionStorage.getItem("at")
                  , d = e.scoreChallengeStatus
                  , p = (e, t) => {
                    const a = {
                        enumNotShowAgain: e
                    };
                    return t && (a.info = t),
                    (0,
                    lt.A)("/Preferences/GetDoNotShowAgain", {
                        method: "GET",
                        accessToken: u,
                        baseUrl: o,
                        params: a
                    }).then((a => "CashMemberAgentAnnouncement" === e ? t !== a.data.Data : !a.data.Data))
                }
                  , h = !!e.EnableTournamentWidget && (yield p("TournamentPromo"))
                  , f = !!m.default.check("IsCashMember") && (yield p("CashMemberAgentAnnouncement", null === (a = t.userInfo) || void 0 === a ? void 0 : a.attrs.agentAnnouncement))
                  , g = yield(0,
                lt.A)("/Customer/GetIsGoodCustomer", {
                    method: "GET",
                    accessToken: u,
        @>          baseUrl: o
                }).then((e => e.data))
        ```
- cdn-cgi/rum
    - `vcd15cbe7772f49c399c6a5babf22c1241717689176015.html`
        ```javascript
            752: function(e, t) {
                "use strict";
                t.__esModule = !0,
                t.sendObjectBeacon = void 0,
                t.sendObjectBeacon = function(e, t, n, r, i) {
                    void 0 === r && (r = !1),
                    void 0 === i && (i = null);
                    var o = i || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e))
                    , a = !0;
                    if (navigator && "string" == typeof navigator.userAgent)
                        try {
                            var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
                            c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
                        } catch (e) {}
                    if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
                        t.st = 1;
                        var u = JSON.stringify(t)
                        , s = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                        null == s || s(o, new Blob([u],{
                            type: "application/json"
                        }))
                    } else {
                        t.st = 2,
                        u = JSON.stringify(t);
                        var f = new XMLHttpRequest;
                        n && (f.onreadystatechange = function() {
                            4 == this.readyState && 204 == this.status && n()
                        }
                        ),
        @>              f.open("POST", o, !0),
                        f.setRequestHeader("content-type", "application/json"),
                        f.send(u)
                    }
                }
            },
        ```