$(function() {
    //UCBrowser
    if (navigator.userAgent.indexOf("UBrowser") !== -1) {
        $('html').attr('data-uc-browser', 'true')
    }

    //Mobile
    if ((/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))) {
        $('html').attr('data-mobile-browser', 'true');
        $('html').attr('data-platform', 'desktop-in-mobile');
    }
});