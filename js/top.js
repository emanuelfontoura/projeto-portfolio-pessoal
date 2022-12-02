const item = document.querySelectorAll('[data-anime]')
const voltar_topo = window.document.getElementById("botao_topo")

const animeVoltarTopo = () => {
    if (window.scrollY > 400){
        voltar_topo.classList.add('voltar-topo-mostrar')
    }else{
        voltar_topo.classList.remove('voltar-topo-mostrar')
    }
}

const animeScroll = () => {

    item.forEach(element =>{
        const windowTop = window.scrollY + window.innerHeight * 1.5

        if (windowTop > element.scrollTop){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}

window.addEventListener("scroll", ()=>{
    animeScroll()
    animeVoltarTopo()
})