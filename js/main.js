$(function(){
   $('.design-slider').slick({
       dots:false,
       slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="./images/arrow-left.svg">',
        nextArrow: '<img class="arrow arrow-right" src="./images/arrow-right.svg">',
        responsive:[
            {
                breakpoint: 361,
                settings:{
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows:false
                } 
            }
        ]
   });
});