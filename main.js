const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");




window.addEventListener('DOMContentLoaded', ()=>{
     // console.log(modalOverlay.classList);
     modalOverlay.classList.remove("open-overlay");
})
modalBtn.addEventListener('click', ()=>{
     modalOverlay.classList.add("open-overlay");
})
closeBtn.addEventListener('click', ()=>{
     modalOverlay.classList.remove("open-overlay");
})
