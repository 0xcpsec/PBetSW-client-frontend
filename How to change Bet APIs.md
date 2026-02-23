1. GetTickets, ProcessBet
    - `foundation.js`
    
        ```javascript
                T = function(e, t, a, i, r, n, o, c, d) {
                    var l = (0, s.A)((0, s.A)((0, s.A)((0, s.A)((0, s.A)((0, s.A)({}, u.kG.GET_TICKETS, p.A.attrs.EnableMultiBetAipBackend), u.kG.GET_PARLAY_TICKETS, p.A.attrs.EnableParlayBetApiBackend), u.kG.GET_SMP_TICKETS, p.A.attrs.EnableSmpApiBackend), u.kG.PROCESS_BET, p.A.attrs.EnableMultiBetAipBackend), u.kG.DO_PLACE_BET, p.A.attrs.EnableParlayBetApiBackend), u.kG.PROCESS_BET_SMP, p.A.attrs.EnableSmpApiBackend)[e];
        114433:     return e = "".concat(l ? p.A.attrs.ApiBackendUrl : "").concat(e), n = S(S({}, n), _(l)), new Promise((function(s, l) {
                        b(e, t, (function(e) {
                            return s(e)
                        }), a, (function(a) {
                            l(a), (0, m.v4)((function(s) {
                                s.setTag("type", "api_request_error"), s.setContext("api_error", {
                                    url: e,
                                    payload: t,
                                    httpStatus: a.status,
                                    browserStatus: a.statusText,
                                    responseText: a.responseText
                                }), (0, g.Cp)(new Error("Betting API Error"))
                            }))
                        }), i, r, n, o, c, d)
                    }))
                },
        ```

2. SetKafka
    - `main.js`
    
        ```javascript
                26100: (e, t, a) => {
                    "use strict";
                    a.d(t, {
                        B: () => r
                    });
                    var n = a(77314)
                    , r = function(e) {
                        var t = e.type
                        , a = e.action
                        , r = {
                            type: t,
                            action: a,
                            note: e.note
                        };
                        "number" == typeof t && "number" == typeof a && n.ajax({
                            type: "POST",
        @>                  url: "/Licensee/SetKafka",
                            data: r,
                            dataType: "json",
                            cache: !1,
                            success: function() {},
                            failure: function() {}
                        })
                    }
                }
        ```

3. BetListMini, WaitingBetList and VoidBetList
    - `main.js`

        ```javascript
            var h = new p("/Statement/BetListMini")
        @>    , f = new p("/Statement/WaitingBetList")
        @>    , g = new p("/Statement/VoidBetList")
              , v = new p("/StatementAPI/BetList")
              , b = new p("/StatementAPI/DBetList")
        ```

4. GetTicketsPrice
    - `main.js`

        ```javascript
            @>      s.json(this.getCashOutApiUrl("/CashOut/GetTicketsPrice"), r, (t => {
                        t.ticketInfoList && this.update({
                            Tickets: e.map((e => {
                                const a = t.ticketInfoList.findIndex((t => t.transId.toString() === e.TransId));
                                return a < 0 ? Object.assign({}, e) : Object.assign(Object.assign({}, e), {
                                    CashOutPrice: t.ticketInfoList[a].cashOutPrice,
                                    CashOutStatus: t.ticketInfoList[a].status,
                                    CashOutHashCode: t.ticketInfoList[a].cashOutHashCode,
                                    winProb: t.ticketInfoList[a].winProb,
                                    winProbId: t.ticketInfoList[a].winProbId
                                })
                            }
                            ))
                        })
                    }
                    ), !0, null, "POST", "json", {
                        Authorization: `bearer ${sessionStorage.getItem("at")}`,
                        "Content-Type": i.A.attrs.EnableCashOutApiBackend ? "application/json" : void 0
                    })
        ```
        
        To disable `Cash out`

        ```javascript
        @>      return React.createElement(React.Fragment, null, React.createElement("div", {
                    className: "c-cashout-ticket"
                }, React.createElement("div", {
                    className: "c-cashout-collapse ".concat(Q ? "c-is-closed" : "")
                }, React.createElement("div", {
                    className: "c-btn c-btn--cashout",
                    title: "".concat(1 === z ? (0,
                    i.default)("lbl_CashOut") : (0,
                    i.default)("co_unavailable")),
                    "data-disabled": 1 === z ? "" : "true",
                    onClick: function() {
                        return e = z,
                        oe && ue(!1),
                        Le(),
                        Ae(se),
                        1 === e && Pe(1, !0, !1),
                        void (0,
                        f.Z)({
                            category: "BetList",
                            message: "Click CashOut btn"
                        });
                        var e
                    }
                }, React.createElement("i", {
                    className: "c-icon c-icon--cashout"
                }), 1 === z ? React.createElement("span", {
                    className: "c-text"
                }, (0,
                i.default)("lbl_CashOut"), " ", React.createElement("span", {
                    className: "c-text-accent"
                }, (0,
                c.addCommas)(se.toFixed(2)))) : React.createElement("span", {
                    className: "c-text"
                }, (0,
                i.default)("co_unavailable"))), 1 === z ? React.createElement("div", {
                    className: "c-btn c-btn--help",
                    title: (0,
                    i.default)("help"),
                    onClick: function(e) {
                        m.default.check("CashOut", "executable") && function(e) {
                            e.stopPropagation();
                            var t = window.screen.availHeight - 130
                              , a = "width=1024,height=".concat(t, ",location=no")
                              , n = "".concat(p.A.attrs.ISD, "/StaticPage/CashOut?lang=").concat(p.A.attrs.Lang);
                            h.A.open(n, "CashOut", a)
                        }(e)
                    }
                }, React.createElement("i", {
                    className: "c-icon c-icon--help-outline"
                })) : null), Q ? React.createElement("div", {
                    className: "c-cashout"
                }, React.createElement("div", {
                    className: "c-cashout__stake"
                }, React.createElement("div", {
                    className: "c-cashout-sell"
                }, React.createElement("div", {
                    className: "c-cashout-sell__content"
                }, React.createElement("div", {
                    className: "c-text-group"
                }, React.createElement("div", {
                    className: "c-text-stake"
                }, React.createElement("span", {
                    className: "c-text-label"
                }, (0,
                i.default)("stake")), React.createElement("span", {
                    className: "c-text-value"
                }, w)), React.createElement("div", {
                    className: "c-text-payout"
                }, React.createElement("span", {
                    className: "c-text-label"
                }, (0,
                i.default)("lbl_CashOut")), React.createElement("span", {
                    className: "c-text-value"
                }, Ee > 0 ? (0,
                c.addCommas)(Ee.toFixed(2)) : "--")))))), React.createElement(A, {
                    statusProps: z,
                    CashOutStatus: b,
                    isWaiting: te,
                    sellTicket: function() {
                        if (ae(!0),
                        W(4),
                        (0,
                        d.A)(1, 14),
                        u.A.attrs.CheckCanCashOut) {
                            var e = "".concat(u.A.attrs.sourceurl, "/EntryIndex/CanCashOut");
                            window.setCashOutPermission = function(e) {
                                0 !== e ? (ae(!1),
                                1 === e && W("CashOutCanNotBeApplied"),
                                Ae(0),
                                Le()) : Oe()
                            }
                            ,
                            o.json(e, null, null, !1, null, null, "jsonp", null, "setCashOutPermission")
                        } else
                            Oe()
                    },
                    updateTicket: function(e) {
                        switch (be(!0),
                        e) {
                        case "CanNotCashOut-Reflesh":
                            Pe(null, !1, !1),
                            Te(),
                            be(!1);
                            break;
                        case "SystemError":
                        default:
                            Pe(2, !1, !1),
                            Te(),
                            be(!1);
                            break;
                        case 3:
                            var t = {
                                transId: E,
                                statusId: e
                            };
                            u.A.attrs.EnableCashOutApiBackend && (t = JSON.stringify(t)),
                            o.json(Me("/CashOut/UpdateTicketStatus"), t, (function(e) {
                                0 === e.error_Code ? C.bets.removeCashOutTicket(E, D) : 1 === e.error_Code ? (W(5),
                                Le()) : 2 === e.error_Code ? (W(1),
                                Pe(1, !1, !1),
                                Te(),
                                be(!1)) : (W("SystemError"),
                                Le())
                            }
                            ), !0, null, "POST", "json", {
                                Authorization: "bearer ".concat(sessionStorage.getItem("at")),
                                "Content-Type": u.A.attrs.EnableCashOutApiBackend ? "application/json" : void 0
                            });
                            break;
                        case 5:
                            var a = y(y({}, K), {}, {
                                cashOutPrice: Ee,
                                betId: M,
                                transDate: I
                            })
                              , n = y({
                                webSkinType: u.A.attrs.WebSkinType,
                                statusId: e
                            }, u.A.attrs.EnableCashOutApiBackend ? {
                                ticket: {
                                    postData: [a]
                                }
                            } : {
                                postData: [a]
                            })
                              , r = u.A.attrs.EnableCashOutApiBackend ? JSON.stringify(n) : n;
                            o.json(Me("/CashOut/RejectAct"), r, (function(e) {
                                1 === e.error_Code ? (W(e.ticketInfoList[0].status),
                                Te(),
                                Pe(e.ticketInfoList[0].status, !1, !1)) : (W("SystemError"),
                                Le()),
                                be(!1)
                            }
                            ), !0, null, "POST", "json", {
                                Authorization: "bearer ".concat(sessionStorage.getItem("at")),
                                "Content-Type": u.A.attrs.EnableCashOutApiBackend ? "application/json" : void 0
                            })
                        }
                    },
                    hideCashOutInfo: Te,
                    isPriceChanged: oe,
                    atThatTimePrice: pe,
                    latestPrice: se,
                    keepGettingPrice: xe,
                    isConfirmAccept: ve,
                    hashCodeProps: Se
                })) : null))
        ```

5. To disable Bet Settings
    - `main.js`

        ```javascript
            const Fe = function() {
                var e = (0,
                r.useState)(!1)
                  , t = (0,
                n.A)(e, 2)
                  , a = t[0]
                  , l = t[1]
                  , c = (0,
                i.d4)((function(e) {
                    return e.betCart.isBetSettingCollapsed
                }
                ))
                  , o = (0,
                i.wA)();
                return s().createElement("div", {
                    className: "c-betting-setting",
                    "data-open": !c,
                    "data-ga": "bet-setting",
                    "data-status": a ? "is-loading" : "default"
        @>      }, s().createElement("div", {
                    className: "c-betting-setting__btn"
                }, s().createElement("a", {
                    className: "c-btn",
                    onClick: function() {
                        o((0,
                        u.Ln)(!1))
                    },
                    "aria-hidden": !0
                }, s().createElement("i", {
                    className: "c-icon c-icon--tune"
                }), s().createElement("span", {
                    className: "c-text"
                }, (0,
                d.default)("lbl_BetSetting")))), s().createElement(De, {
                    setIsLoading: l,
                    isLoading: a
                }))
            };
        ```