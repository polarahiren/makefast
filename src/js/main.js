import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import lozad from 'lozad';

import {App} from './parts/app.js'
import {Plugins} from './parts/plugins.js'
import {Parts} from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

    window.windowWidth = $(window).width();
    window.windowHeight = $(window).height();

    window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
    window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
    window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

    //Functions List Below

    window.app = new App();
    window.app.init();

    window.plugins = new Plugins();
    window.plugins.init();

    window.parts = new Parts();
    window.parts.init();

});

// ===========================================================================

//nice select
// require('jquery-nice-select');
// jQuery(document).ready(function() {
//     jQuery('select').niceSelect();
// });

// fancy box
require('@fancyapps/ui/src/Fancybox/Fancybox');

// ===========================================================================



//header
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 120) sticky.addClass('header-fixed');
    else sticky.removeClass('header-fixed');
});
var p = $( "header" );
$( ".fake-header" ).css( "height", p.innerHeight() );


//mega menu script
$("[data-menu='true']").click(function(){
    var isOpen = $(this).hasClass("open");
    var siblings = $(this).parent().siblings().find(".open");
    var openedMenu = siblings.data("menu-name");
    $(openedMenu).toggleClass("show");
    siblings.removeClass("open");
    $(this).toggleClass("open");
    var megamenu = $(this).data("menu-name");
    $(megamenu).toggleClass("show");
    if(!isOpen){
        $("body").addClass("fixed-bg");
    }else{
        $("body").removeClass("fixed-bg");
    }
});

$(".menu-bg-overlay, .menu-close").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});

$(".mega-menu-back").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});

// For Lazy Load
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//search box
$(document).ready(function(){
    $(".global-search-button").click(function(){
      $(".global-search form").addClass("show");
      $(".menu ul li a.menu-item, .menu ul li a.btn").addClass("menu-visible");
    });
    $(".search-close").click(function(){
      $(".global-search form").removeClass("show");
      $(".menu ul li a.menu-item, .menu ul li a.btn").removeClass("menu-visible");
    });
  });
  // END search box

// product filter close
$(document).ready(function(){
    $(".filter-close").click(function(){
      $(".filter-trigger").removeClass("open");
      $(".product-filter").removeClass("show");
      $("body").removeClass("fixed-bg");
    });
});
  

$(document).ready(function(){
    $(".filter-tab-btn").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            $('.filter').show('700');
        }
        else
        {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('2000');
        }

        var filterOpen = $(this).hasClass("active");

        if(filterOpen){
            $('.filter-tab-btn').removeClass('active');
        }else {
            var siblings = $('.filter-tab-nav').find(".active");
            siblings.removeClass('active');
            $(this).addClass('active');
        }
    });

});

/* smooth scroll */
var targetScriollOffset = 0;
jQuery('[data-scroll="true"]').click(function (e) {
    e.preventDefault();
    var target = jQuery(jQuery(this).attr("href"));
    targetScriollOffset = target.data("scroll-offset");
    if (typeof targetScriollOffset !== typeof undefined && targetScriollOffset !== false) {
        var position = target.offset().top - targetScriollOffset;
    } else {
        var position = target.offset().top;
    }
    jQuery("body, html").animate({
        scrollTop: position
    });
});

// Select2 JS
$(document).ready(function() {
    $('.select-dropdown').select2();
    $('.product-option, .select-light > .select-dropdown').select2({
            minimumResultsForSearch: -1
    });
});

<<<<<<< Updated upstream
// Active Menu
// Active class on Current Page
$('ul li a').filter(function(){
    return this.href === location.href;
}).addClass('active');
=======

// career read more
$("[data-job='true']").click(function(){
    $(this).toggleClass("show");
    var filter = $(this).data("job-name");
    $(filter).toggleClass("open");
});
>>>>>>> Stashed changes
