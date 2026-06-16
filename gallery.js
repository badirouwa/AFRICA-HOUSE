let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){

    slides.forEach(slide =>{ slide.style.display = "none";});

    slides[index].style.display = "block";
}

function nextSlide(){
    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length -1;
    }

    showSlide(currentSlide);
}

showSlide(currentSlide);