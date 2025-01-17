
$(document).ready(function() {
    
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        scrollBar: true, 
        anchors: ['section01', 'section02', 'section03', 'section04', 'section05', 'footer'],
        responsiveWidth: 786, 

        afterLoad: function(origin, destination, direction){
            const nav = $('.fp-right');
            const navDots = $('#fp-nav ul li a span'); 
            const ActivenavDots = $('#fp-nav ul li a.active span'); 
            if (destination.index === 0) {
                navDots.hide(); 
            } else {
                navDots.show(); 
            }
        }
    });

    const sec04Img = $('.sec04_top_list .sec04_item');
    const sections = $('section');
    let currentSectionIndex = 0;
    let isAnimating = false;

    sec04Img.on('mouseover', function() {
        $(this).find('.sec04_img_con').css('transform', 'scale(1.05)');
    });
    sec04Img.on('mouseleave', function() {
        $(this).find('.sec04_img_con').css('transform', 'scale(1)');
    });

    $('.gnb').mouseenter(function() {
        $(this).addClass('gnb_hover');
        $('.gnb02').stop(true, true).fadeIn(1000);
        $('#side_menu_icon').addClass('color_black');
        $('.gnb__title').addClass('color_black');
    });
    $('.gnb').mouseleave(function() {
        $(this).removeClass('gnb_hover');
        $('.gnb02').stop(true, true).fadeOut(100); 
        $('#side_menu_icon').removeClass('color_black');
        $('.gnb__title').removeClass('color_black');
    });

    $('.gnb__item').mouseenter(function() {
        $(this).find('.red_bg').addClass('red_bg_hover');
        $(this).find('li').addClass('text_hover');
        $(this).find('.gnb__title').addClass('white');
    });
    $('.gnb__item').mouseleave(function() {
        $(this).find('.red_bg').removeClass('red_bg_hover');
        $(this).find('li').removeClass('text_hover');
        $(this).find('.gnb__title').removeClass('white');
    });


    gsap.set('.header',{autoAlpha:0});
    const intro = gsap.timeline();
    intro.to('.header',{
        delay:5,
        autoAlpha:1,
        duration:1
    });

    ScrollTrigger.create({
        trigger:".section02",
        start:"0% 50%",
        end:"50% 50%",
        once: true,
        onEnter:function(){
            gsap.from('.section02 article',{
                autoAlpha:0,
                xPercent:-100,
                duration:1
            })
        }
    });
    ScrollTrigger.create({
        trigger:".section03",
        start:"0% 50%",
        end:"50% 50%",
        once: true,
        onEnter:function(){
            gsap.from('.sec03_text_con',{
                autoAlpha:0,
                duration:1,
                y:100
            })
            gsap.from('.sec03-item',{
                autoAlpha:0,
                duration:1,
                x:-100
            })
        }
    });


    const mm = gsap.matchMedia();
    mm.add("(max-width:768px)",function(){
        const section04 = new Swiper('.sec04_top.swiper',{
            spaceBetween:0,
            slidesPerView:4,
       
            breakpoints:{
                1200: { slidesPerView:4 },
                768:{ slidesPerView:2 },
                0:{ slidesPerView:1 }
            }
        });
    });




});