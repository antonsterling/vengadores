let capitan = document.querySelector(".capitan");
let spiderman = document.querySelector(".spiderman");
let antman = document.querySelector(".antman");
let modal = document.querySelector(".pagina-modal");
let close = document.querySelector(".close");



capitan.addEventListener("click", ()=> {
    modal.classList.remove("hidden");
    modal.classList.add("visible")
})
  
close.addEventListener("click", ()=> {
    modal.classList.remove("visible");
    modal.classList.add("hidden")
})