let images=[
    {image:"img/2.webp"},
    {image:"img/4.webp"},
    {image:"img/3.webp"}
]


var index = 0;
var slideCount = images.length;
var interval;

var settings={
    duration : '3000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
      
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slideCount == index+1){
                index = -1;
            }
            showSlide(index);
        
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slideCount - 1;
    }
    if(i >= slideCount){
        index =0;
    }


    document.querySelector('.slider-img').setAttribute('src',images[index].image);
    
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                autoplay:true,
                items:1,
                nav:true,
                dots:false
                
            },
            420:{
                autoplay:true,
                items:2,
                nav:true
            },
            700:{
                autoplay:true,
                autoplayTimeout:2000,
                items:3,
                nav:true
            },
            1000:{
                autoplaySpeed:true,
                autoplay:true,
                autoplayTimeout:2000,
                items:5,
                nav:true,
                loop:false
            }
        }
    })
  });