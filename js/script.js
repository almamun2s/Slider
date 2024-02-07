const slides = document.querySelectorAll('.sr-slider-item');
const prev  = document.querySelector('.sr-prev-btn');
const frwd  = document.querySelector('.sr-frwd-btn');


slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});


let counter = 0;
frwd.addEventListener('click', function(){
    counter++;
    carousel();
});
prev.addEventListener('click', function(){
    counter--;
    carousel();
});

function carousel() {
    if (counter == slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length -1;
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    
}