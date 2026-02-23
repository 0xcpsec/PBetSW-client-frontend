var _LiveChatObj;

var MS2 = MS2 || {};
MS2.HomeIndex = MS2.HomeIndex || {};
MS2.HomeIndex._onEvent = function(data, eventInfo) {
    if (window.console && window.JSON) {
        //console.log(JSON.stringify(data) + " triggered by: " +  JSON.stringify(eventInfo));
    }

    _LiveChatObj = data.engagementId;
    //$('#LiveChatEngagement').parent().remove();
    //console.log("!!!="+_LiveChatObj);
};

MS2.HomeIndex.loadLivePersion = function(ChatNow) {
    if (!ChatNow)
        return;

    setTimeout(function() {
        window.lpTag = window.lpTag || {}, "undefined" == typeof window.lpTag._tagCount ? (window.lpTag = {
            site: ChatNow || "",
            section: lpTag.section || "",
            tagletSection: lpTag.tagletSection || null,
            autoStart: lpTag.autoStart !== !1,
            ovr: lpTag.ovr || {},
            _v: "1.8.0",
            _tagCount: 1,
            protocol: "https:",
            events: {
                bind: function(t, e, i) {
                    lpTag.defer(function() {
                        lpTag.events.bind(t, e, i)
                    }, 0)
                },
                trigger: function(t, e, i) {
                    lpTag.defer(function() {
                        lpTag.events.trigger(t, e, i)
                    }, 1)
                }
            },
            defer: function(t, e) {
                0 == e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 == e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t))
            },
            load: function(t, e, i) {
                var n = this;
                setTimeout(function() {
                    n._load(t, e, i)
                }, 0)
            },
            _load: function(t, e, i) {
                var n = t;
                t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site);
                var a = document.createElement("script");
                a.setAttribute("charset", e ? e : "UTF-8"), i && a.setAttribute("id", i), a.setAttribute("src", n), document.getElementsByTagName("head").item(0).appendChild(a)
            },
            init: function() {
                this._timing = this._timing || {}, this._timing.start = (new Date).getTime();
                var t = this;
                window.attachEvent ? window.attachEvent("onload", function() {
                    t._domReady("domReady")
                }) : (window.addEventListener("DOMContentLoaded", function() {
                    t._domReady("contReady")
                }, !1), window.addEventListener("load", function() {
                    t._domReady("domReady")
                }, !1)), "undefined" == typeof window._lptStop && this.load()
            },
            start: function() {
                this.autoStart = !0
            },
            _domReady: function(t) {
                this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", {
                    t: t
                })), this._timing[t] = (new Date).getTime()
            },
            vars: lpTag.vars || [],
            dbs: lpTag.dbs || [],
            ctn: lpTag.ctn || [],
            sdes: lpTag.sdes || [],
            hooks: lpTag.hooks || [],
            ev: lpTag.ev || []
        }, lpTag.init()) : window.lpTag._tagCount += 1;

        if (window.lpTag) {
            lpTag.events.bind({
                eventName: "OFFER_DISPLAY",
                func: MS2.HomeIndex._onEvent,
                triggerOnce: false //default is false
            });
        }
    }, 30 * 1000);
};

MS2.HomeIndex.checkBrowserVer = function() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    var checkV = true;
    (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1]:
        (s = ua.match(/samsungbrowser.([\d.]+)/)) ? Sys.samsung = s[1] :
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/fxios\/([\d.]+)/)) ? Sys.firefoxIOS = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/crios\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    if (Sys.edge) {
        checkV = true;
    } else if (Sys.ie) {
        var ver = Sys.ie.split(".");
        if (parseInt(ver[0]) > 10) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.samsung) {
        var ver = Sys.samsung.split(".");
        if (parseInt(ver[0]) >= 3) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.firefox) {
        var ver = Sys.firefox.split(".");
        if (parseInt(ver[0]) >= 45) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.firefoxIOS) {
        var ver = Sys.firefoxIOS.split(".");
        if (parseInt(ver[0]) >= 5) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.chrome) {
        var ver = Sys.chrome.split(".");
        if (parseInt(ver[0]) >= 51) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.safari) {
        var ver = Sys.safari.split(".");
        if (parseInt(ver[0]) >= 8) {
            checkV = true;
        } else {
            checkV = false;
        }
    } else if (Sys.opera) {}

    if (!checkV) {
        location.href = "/Upgrade/Index";
    }
};

MS2.HomeIndex.IsPad = function() {
    var isIPad = navigator.userAgent.toLowerCase().indexOf('ipad') >= 0;
    var isAndroidPad = navigator.userAgent.toLowerCase().indexOf('android') >= 0 &&
        navigator.userAgent.toLowerCase().indexOf('mobile') < 0;
    return isIPad || isAndroidPad;
};

MS2.HomeIndex.require = function(url, callback) {
    var e = document.createElement("script");
    e.src = url;
    e.type = "text/javascript";
    if (callback)
        e.addEventListener('load', callback);
    document.getElementsByTagName("head")[0].appendChild(e);
};

MS2.HomeIndex.loadImpervaJs = function(impervaEnable, imLink, cookieless, isLogin) {
    if (!impervaEnable || !imLink || !isLogin)
        return;

    var imTrasactionUrl = "/Account/ImTransaction";
    if (cookieless) {
        var SessionID = (/([^\/]+)\//.exec(window.location.pathname) || [])[1];
        imTrasactionUrl = "/" + SessionID + imTrasactionUrl;
    }

    setTimeout(function() {
        MS2.HomeIndex.require(imLink, function() {
            MS2.HomeIndex.ImpervaJsLoaded = true;
            setTimeout(function() {
                $.ajax({
                    type: "POST",
                    async: true,
                    url: imTrasactionUrl
                }).done(function(data) {
                    console.log(data);
                }).fail(function() {
                    console.log("error");
                });
            }, 5 * 1000);
        });
    }, 20 * 1000);
};

MS2.HomeIndex.doFpsTransaction = function(enableFps) {
    if (!enableFps)
        return;

    if (sessionStorage.getItem("doFps") === "true")
        return;

    setTimeout(function() {
        document.querySelectorAll("iframe[delay]").forEach(function(scriptTag) {
            scriptTag.setAttribute("src", scriptTag.getAttribute("delay"));
        });
    }, 5 * 1000);
}