$('.product__image__secondary').hover(function () {

    $('#product__image__base').attr("src", this.src)

})

var options = {
    width: 450, // required

    // more options here
    
    zoomWidth: 100,
    offset: {
        vertical: 0,
        horizontal: 20
    },
    scale: 0.8,
    zoomStyle: 
        "opacity:1; border-radius: 8px; pointer-events: none;"
    ,
    zoomLensStyle: 
        {}
    ,
    zoomPosition: 'right'
};

function getImage(){
    
    new ImageZoom(document.getElementById("container__image__base"), options);
}