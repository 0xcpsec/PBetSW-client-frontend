"use strict";
(self.webpackChunkmember2 = self.webpackChunkmember2 || []).push([
    [3652], {
        3709: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => p
            });
            var s = i(93706),
                a = i(92602),
                h = i(54952),
                n = i(89827),
                r = i(5194),
                l = i(73656),
                g = i(12396),
                o = i(41486),
                c = s.A.getClient();
            class p extends o.Component {
                constructor(t) {
                    super(t), this.getData = (t, e) => {
                        let s = {};
                        try {
                            if (!a.A.attrs.perms.Hightlights) return s;
                            var n = i(16984).router;
                            let r;
                            n && n.params.sport && (isNaN(parseInt(n.params.sport)) || n.params.sport === t.toString() || (t = parseInt(n.params.sport))), [1, 995, 997].indexOf(t) >= 0 ? r = "SoccerList" : [2].indexOf(t) >= 0 ? r = "BasketballList" : [50].indexOf(t) >= 0 ? r = "cricketList" : [5].indexOf(t) >= 0 && (r = "tennisList");
                            let l = window.newsCenterDomain,
                                g = Math.floor((new Date).getTime() / 1e3 / 1e3),
                                o = this,
                                c = a.A.attrs.Lang,
                                p = o.getFinalLanguage(c),
                                d = `${l}/video/${r}-${p}.json?v=${g}`;
                            const m = h.A.attrs.HightlightCount;
                            $.ajax({
                                type: "GET",
                                url: d,
                                dataType: "json",
                                success: function(i) {
                                    if (i.length > 0) {
                                        let a = i[o.getJsonLength(i) - 1],
                                            h = `${l}/video/${a.m3u8}?v=${g}`,
                                            n = a.share,
                                            r = a.title[p] ? a.title[p] : a.title.en,
                                            c = `${l}/video/${a.poster}?v=${g}`,
                                            d = i.reverse().slice(0, m).map((e => ({
                                                url: e.share,
                                                title: e.title[p] ? e.title[p] : e.title.en,
                                                cdnUrl: `${l}/video/${e.m3u8}?v=${g}`,
                                                sportId: t,
                                                poster: `${l}/video/${e.poster}?v=${g}`
                                            })));
                                        s = {
                                            url: n,
                                            title: r,
                                            cdnUrl: h,
                                            sportId: t,
                                            poster: c
                                        }, e ? o.setState({
                                            showHighLightbtn: !0,
                                            highLightSportId: t,
                                            data: s,
                                            swiperData: d
                                        }) : o.setState({
                                            data: s,
                                            lang: p,
                                            swiperData: d
                                        })
                                    } else o.setState({
                                        showHighLightbtn: !1,
                                        highLightSportId: t,
                                        data: {}
                                    })
                                }
                            })
                        } catch (t) {}
                    }, this.getFinalLanguage = t => {
                        let e;
                        switch (t) {
                            case "ch":
                            case "ch_eu":
                            case "cs":
                            case "cs_eu":
                            case "zhcn":
                                e = "cs";
                                break;
                            case "de":
                                e = "de";
                                break;
                            case "el":
                                e = "el";
                                break;
                            case "en":
                            case "en_eu":
                            case "en_euro":
                            default:
                                e = "en";
                                break;
                            case "es":
                            case "es_eu":
                                e = "es";
                                break;
                            case "hi":
                                e = "hi";
                                break;
                            case "hien":
                                e = "hien";
                                break;
                            case "id":
                                e = "id";
                                break;
                            case "it":
                                e = "it";
                                break;
                            case "jp":
                                e = "jp";
                                break;
                            case "ko":
                            case "ko_eu":
                                e = "ko";
                                break;
                            case "pl":
                                e = "pl";
                                break;
                            case "ro":
                                e = "ro";
                                break;
                            case "ru":
                            case "ru_eu":
                                e = "ru";
                                break;
                            case "th":
                                e = "th";
                                break;
                            case "vn":
                                e = "vn"
                        }
                        return e
                    }, this.getJsonLength = t => {
                        let e = 0;
                        for (let i in t) e++;
                        return e
                    }, this.toggleHighlightImgDisplay = t => {
                        let e = Object.assign(Object.assign({}, this.state.showHightlighImg), {
                            [t.detail.SportId]: t.detail.ShowHightlightImg
                        });
                        this.setState({
                            showHightlighImg: e
                        })
                    }, this.componentCleanup = t => {
                        n.A.Close("HighlightRecap_1"), n.A.Close("HighlightRecap_2")
                    }, this.changeLanguage = () => {
                        this.getData(this.state.highLightSportId, !1)
                    }, this.menuSelect = t => {
                        let e;
                        e = t.sport ? Array.isArray(t.sport) ? 1 : t.sport : 1, this.switchHighLight(e)
                    }, this.switchHighLight = t => {
                        this.highlightRef = o.createRef(), ~this.state.showHighLightSportId.indexOf(t) ? this.getData(t, !0) : this.setState({
                            showHighLightbtn: !1
                        })
                    }, this.openHighLight = t => {
                        const e = `HighlightRecap_${t.sportId}`;
                        let i = "718",
                            s = "429",
                            a = l.default.isNewChina;
                        r.A.isFireFox && (i = "715", s = "434"), this.state.showHightlighImg[this.state.highLightSportId] ? ((0, g.A)(3, 4), n.A.physicallyOpen(`/Streaming/HighlightsRecap?SportType=${t.sportId}&Title=${t.title}&ShareUrl=${t.url}&ClipUrl=${t.cdnUrl}&IsNewChina=${a}`, e, `top=0,left=0,width=${i},height=${s},directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no`)) : n.A.focus(e)
                    }, this.setLiveStatus = () => {
                        this.setState({
                            showHighLightbtn: !0,
                            highLightSportId: 1
                        })
                    }, this.handleChangeVideo = t => {
                        this.setState({
                            data: t
                        })
                    }, this.state = {
                        showHighLightbtn: !0,
                        showHighLightSportId: [1, 2, 5, 50, 995, 997],
                        highLightSportId: 1,
                        showHightlighImg: {
                            1: !0,
                            2: !0,
                            5: !0,
                            50: !0,
                            995: !0,
                            997: !0
                        },
                        lang: a.A.attrs.Lang,
                        data: {},
                        swiperData: []
                    }, this.highlightRef = o.createRef(), this.highlightRef = t => {
                        this.highlightRef = t
                    }
                }
                componentDidMount() {
                    c.on("HighLightBtn.setLiveStatus", this.setLiveStatus), c.on("language.change", this.changeLanguage), c.on("menu.select", this.menuSelect), this.state.showHighLightbtn && Object.keys(this.state.data).length > 0 && this.highlightRef && this.highlightRef.addEventListener("toggleHighlight", this.toggleHighlightImgDisplay), setTimeout((() => {
                        this.getData(this.state.highLightSportId, !1)
                    }), 100), window.addEventListener("beforeunload", this.componentCleanup), window.addEventListener("unload", this.componentCleanup)
                }
                componentWillUnmount() {
                    c.remove("HighLightBtn.setLiveStatus"), this.highlightRef && this.highlightRef.removeEventListener("toggleHighlight", this.toggleHighlightImgDisplay), window.removeEventListener("beforeunload", this.componentCleanup)
                }
                render() {
                    let t = this.state.showHighLightbtn,
                        e = this.state.highLightSportId;
                    return t && Object.keys(this.state.data).length > 0 ? o.createElement("div", {
                        ref: this.highlightRef,
                        id: "highlight",
                        className: "c-widget c-widget--replay",
                        "data-open": this.props.rightBarOpens.highlightsBtn,
                        onClick: () => this.props.toggleRightBarOpens("highlightsBtn"),
                        key: "highlight"
                    }, o.createElement("div", {
                        className: "c-widget__icon-collapse",
                        title: this.state.data.title,
                        onClick: this.openHighLight.bind(this, this.state.data)
                    }, o.createElement("i", {
                        class: "c-icon c-icon--replay"
                    })), o.createElement("div", {
                        className: "c-widget__heading"
                    }, o.createElement("i", {
                        className: " c-icon c-icon--replay"
                    }), o.createElement("span", {
                        className: "c-text"
                    }, this.state.data.title)), o.createElement("div", {
                        className: "c-widget__content"
                    }, o.createElement("div", {
                        className: "video-js vjs-big-play-centered",
                        onClick: this.openHighLight.bind(this, this.state.data)
                    }, o.createElement("button", {
                        className: "vjs-big-play-button",
                        type: "button"
                    }, o.createElement("span", {
                        className: "vjs-icon-placeholder"
                    }), o.createElement("span", {
                        className: "vjs-control-text"
                    })), o.createElement("img", {
                        src: this.state.data.poster
                    })), o.createElement(d, {
                        swiperData: this.state.swiperData,
                        onChangeVideo: this.handleChangeVideo,
                        highLightSportId: e,
                        highlightsBtn: this.props.rightBarOpens.highlightsBtn
                    })), o.createElement("div", {
                        className: "bottomArea"
                    })) : null
                }
            }
            class d extends o.Component {
                constructor() {
                    super(), this.swiper = void 0, this.initializeSwiper = () => {
                        this.swiper = new Swiper(".c-widget--replay .swiper-container", {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 4,
                            navigation: {
                                nextEl: "#highlight .swiper-button-next",
                                prevEl: "#highlight .swiper-button-prev"
                            }
                        })
                    }, this.state = {
                        isSelectedIndex: 0
                    }
                }
                componentDidMount() {
                    this.initializeSwiper()
                }
                componentDidUpdate(t) {
                    this.props.swiperData.length === t.swiperData.length && this.props.highLightSportId === t.highLightSportId && this.props.highlightsBtn === t.highlightsBtn || (this.swiper.destroy(!0, !0), this.initializeSwiper(), this.setState({
                        isSelectedIndex: 0
                    }))
                }
                render() {
                    const {
                        swiperData: t,
                        onChangeVideo: e
                    } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "c-sport-highlight-list"
                    }, o.createElement("div", {
                        className: "slides swiper-container"
                    }, o.createElement("div", {
                        className: "slides-control swiper-wrapper"
                    }, t.map(((t, i) => o.createElement("div", {
                        key: i,
                        title: t.title,
                        className: "slides-control-item swiper-slide",
                        onClick: () => {
                            e(t), this.setState({
                                isSelectedIndex: i
                            })
                        }
                    }, o.createElement("div", {
                        className: "c-sport-highlight-list__item",
                        "data-selected": "" + (i === this.state.isSelectedIndex ? "true" : "false")
                    }, o.createElement("div", {
                        className: "c-sport-highlight-list__img",
                        title: t.title
                    }, o.createElement("img", {
                        src: t.poster
                    })), o.createElement("span", {
                        className: "c-text"
                    }, t.title))))))), o.createElement("div", {
                        className: " swiper-button-prev"
                    }, " ", o.createElement("i", {
                        className: "c-icon c-icon--arrow-left"
                    })), o.createElement("div", {
                        className: "swiper-button-next"
                    }, o.createElement("i", {
                        className: "c-icon c-icon--arrow-right"
                    }))))
                }
            }
        }
    }
]);