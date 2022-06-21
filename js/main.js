var elHeader = document.querySelector(".header__container")

var elBtn = document.querySelector(".header__burger-btn")

elBtn.addEventListener("click", ( )=> {
  elHeader.classList.toggle("header__container--active")
})