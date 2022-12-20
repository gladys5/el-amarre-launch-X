function moverPosicionRandom(elm) {
  elm.style.position = "absolute"
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px"
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px"
}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let init = document.getElementsByClassName("init")
let divModoyo = document.getElementsByClassName("modo_yo")[0]

btnNo.addEventListener("mouseenter", function (e) {
  moverPosicionRandom(e.target)
})

btnSi.addEventListener("click", function (e) {
  alert("Sabía que dirías que SÍ ❤️")

  divModoyo.style.display = "block"

  init[0].style.display = "none"
})
