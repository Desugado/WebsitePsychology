$(document).ready(function () {

    /*sticky navigation*/
    $('.js--blog-ex').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav1').addClass('sticky');
        } else { 
            $('nav1').removeClass('sticky');
        }
    }, {
        offset: '10000px;'

    });

    $('.js--blog-ex').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav1').addClass('sticky1');
        } else {
            $('nav1').removeClass('sticky1');
        }
    }, {
        offset: '550px;'

    });

    
    /*scroll to sections*/
    $('.js--scroll-to-test').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test').offset().top
        }, 1000); 

    });

    $('.js--scroll-to-about').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--about').offset().top
        }, 1000); 

    });
    
    $('.js--scroll-to-test-yourself').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test-yourself').offset().top
        }, 1000); 

    });

    $('.js--scroll-to-counselling').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--blog-ex').offset().top
        }, 1000); 

    });

    $('.js--scroll-to-counselling1').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--counselling1').offset().top
        }, 1000); 

    });


    $('.js--scroll-to-videos').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--videos').offset().top
        }, 1000);

    });

    $('.js--scroll-to-form').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--form').offset().top
        }, 1000);

    });

    $('.js--scroll-to-blogs').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--blogs').offset().top
        }, 1000);

    });

    $('.js--scroll-to-header').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--header').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test1').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test1').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test2').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test2').offset().top
        }, 1000);
    
    });
    
    $('.js--scroll-to-test3').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test3').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test4').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test4').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test5').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test5').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test6').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test6').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test7').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test7').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-test8').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--test8').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy1').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy1').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy2').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy1').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy3').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy3').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy4').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy3').offset().top
        }, 1000);
    
    });


    $('.js--scroll-to-therapy5').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy5').offset().top
        }, 1000);
    
    });


    $('.js--scroll-to-therapy6').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy5').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy7').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy7').offset().top
        }, 1000);
    
    });

    $('.js--scroll-to-therapy8').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--therapy7').offset().top
        }, 1000);
    
    });

   /*mobile navigation*/
    
   $('.js--nav-icon').click(function(){
    var nav = $('.js--left-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    
    if(icon.hasClass('icon ion-ios-menu')){
        icon.addClass('.icon ion-md-close');
        icon.removeClass('.icon ion-ios-menu');}
        else{icon.addClass('.icon ion-ios-menu');
        icon.removeClass('.icon ion-md-close');}
    
    nav.removeClass('.icon ion-ios-menu');
});
   
    
});

/*click to open blog*/

function blog1() {

    document.getElementById('blog-title').innerHTML='Blog Title 1';

    document.getElementById('blog-1-para-1').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    document.getElementById('blog-1-para-2').innerHTML="Hi  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
}

function blog2() {

    document.getElementById('blog-title').innerHTML='Blog Title 2';

    document.getElementById('blog-1-para-1').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    document.getElementById('blog-1-para-2').innerHTML="Hi  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
}

function blog3() {

    document.getElementById('blog-title').innerHTML='Blog Title 3';

    document.getElementById('blog-1-para-1').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    document.getElementById('blog-1-para-2').innerHTML="Hi  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
}

function blog4() {

    document.getElementById('blog-title').innerHTML='Blog Title 4';

    document.getElementById('blog-1-para-1').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    document.getElementById('blog-1-para-2').innerHTML="Hi  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
}

/*animations scroll

$('.js--wp1').waypoint(function(direction){
    $('.js--wp1').addClass('animated fadeIn')
   }, {
    offset: '50%' 
});

$('.js--wp2').waypoint(function(direction){
    $('.js--wp2').addClass('animated fadeInLeft')
   }, {
    offset: '40%' 
});

 $('.js--wp3').waypoint(function(direction){
    $('.js--wp3').addClass('animated fadeIn')
   }, {
    offset: '50%' 
});

$('.js--wp4').waypoint(function(direction){
    $('.js--wp4').addClass('animated bounce')
   }, {
    offset: '40%' 
});*/
