var celular;
var tablet;
var pc;

$(window).load(function () {
    
    if (window.screen.width < 576.98) {

        celular = true;
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        tablet = true;
    } else if (window.screen.width > 1025) {


        $('.header__input').focus(function(){           
            $('#header__form').toggleClass('focus')
        });
        $('.header__input').blur(function(){ 
            $('#header__form').toggleClass('focus')
        });

    }

    if(!$('.index').is('#index')){
        $('#header').addClass('fixed')
    }
});

$('.header__menu').click(function(){
    $('.nav').toggleClass("hide");
    $('.nav__filter').toggleClass('hide')
})

$('.nav__filter').click(function(){
    $('.nav').toggleClass("hide");
    $('.nav__filter').toggleClass('hide')
})

function toggleNavFocus(linkname){
    $('.nav__focus').removeClass('nav__focus')

    $(`.${linkname}`).addClass('nav__focus')
}

function removeNavFocus(){
    $('.nav__focus').removeClass('nav__focus')
}