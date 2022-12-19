const slider = window.document.querySelectorAll('.slider')
const button_prev = window.document.querySelector('.prev-button')
const button_next = window.document.querySelector('.next-button')

let currentSlider = 0

function next_image(){
    if (currentSlider < 5){
        currentSlider++
        slider[currentSlider].classList.add('on')
        slider[currentSlider-1].classList.remove('on')
    }else if (currentSlider == 5){
        currentSlider = 0
        slider[currentSlider].classList.add('on')
        slider[5].classList.remove('on')
    }
}

function prev_image(){
    if (currentSlider > 0){
        currentSlider--
        slider[currentSlider].classList.add('on')
        slider[currentSlider+1].classList.remove('on')
    }else if (currentSlider == 0){
        currentSlider = 5
        slider[currentSlider].classList.add('on')
        slider[0].classList.remove('on')
    }
}