/* 
Template name:  Donis HTML
Version:        1.0.0
Author:         SITL
Author url:     sitlbd.com
Developer:      Asif Mahmud
================================================= */

/* table of context
     01:  menu
     02: back to top
     03: backround Image
     04: odometer activation
     05: isotop activation
     06: vanobox
     07: home 2 hero activation
     08: wow js activition
     09: preloader
*/

(function($){
    "use strict";

    /* 01:  menu 
    =============================== */

    $('.header-menu a[href="#"]').on("click", function (e) {
        e.preventDefault();
    })
    $(".header-menu").menumaker({ title: '<i class="flaticon-menu"></i>', format: "multitoggle" });

    $(window).on('scroll',function(){
        let menuDistanceFromTop = 100;
        if($(this).scrollTop() >= menuDistanceFromTop){
            $('header-top').addClass('hide_heder');
           $('header').addClass('make_me_sticky');
        }else{
            $('header-top').removeClass('hide_heder');
           $('header').removeClass('make_me_sticky');
        }
    });


    /* 02: back to top 
    ==================================*/

    $('.back-to-top').on('click',function(){
        $('html').animate({
            scrollTop: 0
        },1000);
    });

    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

        if($scroll > 400){
            $('.back-to-top').addClass('show');
        }else{
            $('.back-to-top').removeClass('show');
        }
    });

    /* 03: backround Image
    ==================================*/
    
    let imageTarget = $('[data-bg-img]');
    imageTarget.css('background', function(){
        return 'url('+this.getAttribute('data-bg-img')+') no-repeat'
    })
    imageTarget.css('backgroundSize', 'cover')

    /* 04: odometer activation
    ================================== */

    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    /* 05: isotop activation
    ================================== */

    $('.filter li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
    });

    /* 06: vanobox
    =======================================*/

    $(".venobox").venobox();

    /* 07: home 2 hero activation
    ========================================== */

    var swiper = new Swiper('.swiper-container.home2-hero', {
        // loop: true,
        speed: 1000,
        effect: "slide",
        parallax: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

        /*08: Google map
        ===============================================*/

    if($('#map').length !==0){
        var googleMapSelector = $('#map');
        var latitude = $('.google-map-wrapper').attr('data-latitude');
        var longitude = $('.google-map-wrapper').attr('data-longitude');
        var zoome = $('.google-map-wrapper').attr('data-zoom');
        var zoomtoNum = Number(zoome);
        var mapmarker = $('.google-map-wrapper').attr('data-marker');
        var myCenter = new google.maps.LatLng(latitude, longitude);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: zoomtoNum,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f7f1e0"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffe36f"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#efd151"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a2daf2"
                                }
                            ]
                        }
                    ]
            };
            var map = new google.maps.Map( document.getElementById('map'), mapProp );
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: mapmarker,
            });
            marker.setMap(map);

           
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }   

    /*  08: wow js activition
    ==================================== */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null
    });
    wow.init();


    /* 09: preloader
    ===================================== */

    $(window).on('load', function(){
        setTimeout(()=>{
            $('.preloader').fadeOut()
        }, 250)
    })


})($)