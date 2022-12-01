const item = document.querySelectorAll('[data-anime]')

const animeScroll = () => {
    const windowTop = window.scrollY
    
    item.forEach(element =>{
        if (windowTop > element.scrollTop){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}

window.addEventListener("scroll", ()=>{
    animeScroll()
})