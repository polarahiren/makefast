import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
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
require('jquery-nice-select');
jQuery(document).ready(function() {
    jQuery('select').niceSelect();
});

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

// Slick Slider JS
$('.hero-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: false
        }
    }]
}); //Home Slider

$('.latest-blog-slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    autoplay: true,
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    centerMode: false,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'></button>",
    responsive: [{
        breakpoint: 767,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}); //Latest Blog Slider

$('.offer-slider').slick({
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    centerMode: false,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}); //Latest Blog Slider