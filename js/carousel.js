const sliders = document.querySelector('.newest__carousel')
var scrollPerClick;
var ImagePadding = 100;

var scrollAmount = 0;

function sliderScrollLeft(){
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    })
    console.log(scrollAmount)


    if(scrollAmount < 1){
        scrollAmount = 0
        $('.carousel__button.left').css('display', 'none')
    }
}

function sliderScrollRight(){
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }

    if(scrollAmount < 1){
        $('.carousel__button.left').css('display', 'none')
    } else{
        $('.carousel__button.left').css('display', 'block')
    }
}

scrollPerClick = document.querySelector('.product').clientWidth + ImagePadding;