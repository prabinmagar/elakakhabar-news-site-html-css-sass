$(document).ready(function(){
    // header slider
    let heroSlider = $('.hero-slider');
    let sliderKh8 = $('.slider-kh-8');
    let sliderGallery = $('.gallery-itm-thumbs');
    let sliderKh9 = $('.slider-kh-9');

    heroSlider.owlCarousel({
        loop:true,
        margin: 0,
        dots: false,
        nav:false,
        autoplay: true,
        items: 1,
    });

    // side navigation toggle
    const navbarOverlayModal = $('.navbar-overlay-modal');
    const sideNavbarDiv = $('.sc-side-navbar');
    $('#show-sidenav-btn').click(() => {
        sideNavbarDiv.addClass('js-show-navbar');
        navbarOverlayModal.addClass('js-show-navbar-modal');
    });
    $('#hide-sidenav-btn').click(() => {
        sideNavbarDiv.removeClass('js-show-navbar');
        navbarOverlayModal.removeClass('js-show-navbar-modal');
    });

    $(document.body).click(function(e){
        if($(e.target).hasClass('js-show-navbar-modal') || $(e.target).hasClass('side-nav-link')){
            sideNavbarDiv.removeClass('js-show-navbar');
            navbarOverlayModal.removeClass('js-show-navbar-modal');
        }
    })

    sliderKh8.owlCarousel({
        autoplay: true,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        margin: 10,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"],
        responsive:{
            600: {
                items: 2
            },
            800:{
                items: 3
            },
            1200:{
                items: 4,
                stagePadding: 70,
            }
        }
    });

    /* ###### Gallery part ###### */
    // gallery slider
    sliderGallery.owlCarousel({
        autoplay: false,
        items: 2,
        dots: true,
        nav: true,
        loop: false,
        margin: 10,
        slideBy: 1,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"],
        responsive:{
            800:{
                items: 3
            },
            1200:{
                items: 4,
            }
        }
    });

    sliderKh9.owlCarousel({
        center: false,
        autoplay:true,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        margin: 25,
        stagePadding: 15,
        navText: ["<i class='fa fa-chevron-left fa-xl'></i>","<i class='fa fa-chevron-right fa-xl'></i>"]
    })

    // gallery content change
    const itemDisplayContainer = $('#gallery-itm-display .itm-card');
    const itemList = $('#gallery-itm-list .itm-card');
    itemList.each(function(index, element){
        $(element).click(function(){
            let tempContent = $(element).children().clone();
            itemDisplayContainer.html(tempContent);
            let url = $(element).children('.itm-card-body').attr('data-url');
            let imgpath = $(element).children('.itm-card-body').attr('data-img');
            setContent(url, imgpath);
        })
    })


    // setting the gallery content 
    const setContent = (url, imgpath) => {
        itemDisplayContainer.children(".display-img").attr('src', imgpath);
        itemDisplayContainer.attr('href', url);
        itemDisplayContainer.children().children(".display-title").addClass('gallery-item-title');
        itemDisplayContainer.children().children('.display-info').removeClass('d-none')
    }

    // setting content for gallery initially
    const intitalContent = () => {
        let tempContent = $(itemList[0]).children().clone();
        itemDisplayContainer.html(tempContent);
        let url = $(itemList[0]).children('.itm-card-body').attr('data-url');
        let imgpath = $(itemList[0]).children('.itm-card-body').attr('data-img');
        setContent(url, imgpath);
    }
    intitalContent();

    // news ticker plugin 
    $("#news_ticker").newsTicker({

        base : {
          width : 2100,
          time : 40000
        },
        itemWidth : "auto",
        ticker : ".ti_news",
        tickerColne : "ti_clone",
        wrapper : ".ti_wrapper",
        slide : ".ti_slide",
        content : ".ti_content",
        callbacks : {
          beforeLoad : function($Ticker){},
          onLoad : function($current,$Ticker){},
          before : function($old,$current){},
          completeAnimation : function($old,$current){}
        },
        
    });

    $('.search-icon').click(function(){
        $('.sc-search-box').toggleClass('sc-search-box-show');
    })
});


// tooltop bootstrap 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
