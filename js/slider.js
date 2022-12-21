const slider = window.document.querySelectorAll('.slider')
const button_prev = window.document.querySelector('.prev-button')
const button_next = window.document.querySelector('.next-button')
const links = window.document.querySelectorAll('.link')
const button_links = window.document.querySelector('.button-responsivo')

let currentSlider = 0
button_links.href = links[0].href

function next_image(){
    if (currentSlider < 5){
        currentSlider++
        slider[currentSlider].classList.add('on')
        slider[currentSlider-1].classList.remove('on')
        button_links.href = links[currentSlider].href
    }else if (currentSlider == 5){
        currentSlider = 0
        slider[currentSlider].classList.add('on')
        slider[5].classList.remove('on')
        button_links.href = links[currentSlider].href
    }
}

function prev_image(){
    if (currentSlider > 0){
        currentSlider--
        slider[currentSlider].classList.add('on')
        slider[currentSlider+1].classList.remove('on')
        button_links.href = links[currentSlider].href
    }else if (currentSlider == 0){
        currentSlider = 5
        slider[currentSlider].classList.add('on')
        slider[0].classList.remove('on')
        button_links.href = links[currentSlider].href
    }
}