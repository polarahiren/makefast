import 'slick-carousel';

export class App{

  init() {

    $('.large-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    /* related products slider */
    $('.logos-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // Slick Slider JS
    $('.hero-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
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
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand',
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
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }); //Latest Blog Slider

    $('.testimonial-carousel').slick({
        dots: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false
    }); //Latest Blog Slider

    $('.case-studies-slider').slick({
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand',
        prevArrow:"<button type='button' class='slick-prev slick-arrow'></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'></button>",
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    }); //Case Studies Slider

    $('.brochure-slider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 767,
            settings: "unslick",
        }]
    }); //Case Studies Slider

    $('.single-carousel').slick({
        dots: false,
        arrows: true,
        speed: 800,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand'
    }); //Case Studies Slider

    $('.features-carousel').slick({
        dots: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
            },{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }]
    }); //Featured Slider

}

  slickSLider (){

  }

}