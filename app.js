// !function(n) {
//     n.fn.initStrictNav = function(i) {
//         function s() {
//             l = window.innerWidth < 1201 ? n("#js-sidebar").outerHeight() : v
//         }
//         function a(s) {
//             var a = n(s);
//             e.scrollTop() > i.offset().top && e.scrollTop(l - v),
//             i.find(".js-tabs-infoblock_active").removeClass("js-tabs-infoblock_active"),
//             a.addClass("js-tabs-infoblock_active")
//         }
//         function t(i) {
//             var s, t;
//             event.keyCode == i && (event.preventDefault(),
//             s = o.find(".js-nav__link_active"),
//             t = s.next(),
//             t.length || (t = n(".js-nav__link:first-child")),
//             s.removeClass("js-nav__link_active"),
//             t.addClass("js-nav__link_active"),
//             a(t.attr("href")))
//         }
//         var e = n(document)
//           , o = n("#js-nav")
//           , v = o.outerHeight()
//           , l = 0;
//         e.on("keydown", function() {
//             var n = "9";
//             t(n)
//         }),
//         n(".js-nav__link").on("click", function(i) {
//             i.preventDefault();
//             var s;
//             n(this).hasClass("js-nav__link_active") || (s = n(this).attr("href"),
//             o.find(".js-nav__link_active").removeClass("js-nav__link_active"),
//             n(this).addClass("js-nav__link_active"),
//             a(s))
//         }),
//         e.on("scroll", function() {
//             n(this).scrollTop() > l ? o.hasClass("js-nav_fixed") || o.addClass("js-nav_fixed") : o.removeClass("js-nav_fixed")
//         }),
//         s(),
//         n(window).on("resize", function() {
//             s()
//         })
//     }
// }(window.jQuery);
// !function(n) {
//     n.fn.initStrictMap = function(n) {
//         var t, a, e, i = {
//             lat: parseFloat(n.getAttribute("data-lat")),
//             lng: parseFloat(n.getAttribute("data-lng")),
//             address: n.getAttribute("data-address")
//         };
//         return t = new window.google.maps.Map(n,{
//             zoom: 16,
//             center: {
//                 lat: i.lat,
//                 lng: i.lng
//             },
//             scrollwheel: !1
//         }),
//         a = new window.google.maps.Marker({
//             position: {
//                 lat: i.lat,
//                 lng: i.lng
//             },
//             map: t,
//             title: i.address
//         }),
//         e = new window.google.maps.InfoWindow({
//             content: i.address
//         }),
//         a.addListener("click", function() {
//             e.open(t, a)
//         }),
//         this
//     }
// }(window.jQuery);
// !function(n) {
//     var t = n("body");
//     n.fn.strictPopup = function() {
//         return {
//             openPopup: function(n) {
//                 n.addClass("js-popup_active"),
//                 t.addClass("js-modal-open")
//             },
//             closePopup: function(n) {
//                 var a = function() {
//                     n.removeClass("js-popup_active").off("webkitTransitionEnd msTransitionEnd transitionend", a)
//                 };
//                 t.removeClass("js-modal-open"),
//                 n.on("webkitTransitionEnd msTransitionEnd transitionend", a)
//             }
//         }
//     }
// }(window.jQuery);
// !function(n) {
//     "use strict";
//     var t, a = n("body"), s = n(this).strictPopup(), i = n("#js-tabs-infoblocks"), o = document.getElementById("js-map");
//     a.hasClass("js-yes") && (n(".js-contacts").on("webkitTransitionEnd transitionend", function() {
//         n(this).hasClass("js-map_ready") || n(this).initStrictMap(o).addClass("js-map_ready")
//     }),
//     n(".js-readmore").on("click", function(a) {
//         a.preventDefault(),
//         t = n(n(this).attr("href")),
//         s.openPopup(t)
//     }),
//     n(".js-popup__close").on("click", function() {
//         s.closePopup(t)
//     }),
//     n(window).on("load", function() {
//         var t, s = o.getAttribute("data-key"), i = n(".js-about"), e = n("#js-overlay");
//         null !== s ? (t = document.createElement("script"),
//         t.src = "https://maps.googleapis.com/maps/api/js?key=" + s,
//         a.append(t)) : console.log("You didn't set API key for Google Maps"),
//         a.addClass("page-loaded"),
//         e.length ? e.on("webkitAnimationEnd msAnimationEnd animationend", function() {
//             n(this).hide(),
//             i.addClass("js-tabs-infoblock_active")
//         }) : i.addClass("js-tabs-infoblock_active")
//     }),
//     n(this).initStrictNav(i))
// }(window.jQuery);
// function a() {
//     var n = window.location.hostname
//       , t = n.split("-");
//     return 16 !== n.length ? !1 : 2 !== t.length ? !1 : t[0].length > 4 ? !1 : !0
// }
// !function() {
//     a() !== !0 && (document.body.innerHTML = "")
// }();


$(document).ready(function(){
    let linkHref = '';
    $('.main-nav__link').on('click', function(e) {
        e.preventDefault();
        linkHref = $(this).attr('href');
        $(this).addClass('main-nav__link--active').siblings().removeClass('main-nav__link--active');
        var sectionName = linkHref.slice(1);
        console.log(sectionName);
        $( ' .' + sectionName).addClass('content__block--active').siblings().removeClass('content__block--active');
    });
    
});