var bannerSliders = document.querySelector(".sliders")
var botao1banner = document.querySelector("#pointer1")
var botao2banner = document.querySelector("#pointer2")
var botao3banner = document.querySelector("#pointer3")

botao1banner.addEventListener("click", () => {
    bannerSliders.style.marginLeft = "-0vw"
    botao1banner.style.backgroundColor = "#b28756"
    botao2banner.style.backgroundColor = "#000"
    botao3banner.style.backgroundColor = "#000"
    })
botao2banner.addEventListener("click", function(){
    bannerSliders.style.marginLeft = "-100vw"
    botao1banner.style.backgroundColor = "#000"
    botao2banner.style.backgroundColor = "#b28756"
    botao3banner.style.backgroundColor = "#000"
})
botao3banner.addEventListener("click", function(){
    bannerSliders.style.marginLeft = "-200vw"
    botao1banner.style.backgroundColor = "#000"
    botao2banner.style.backgroundColor = "#000"
    botao3banner.style.backgroundColor = "#b28756"
})