const openButton=document.getElementById("open");
const modal=document.querySelector(".modal");
const overlay=modal.querySelector(".modal__overlay");
const closeBtn=modal.querySelector("button");
const openModal = ()=>{
    modal.classList.remove("hidden");
    openButton.classList.add("hidden")
}

const closeModal =()=>{
    modal.classList.add("hidden")
    openButton.classList.remove("hidden")
}

closeBtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
openButton.addEventListener("click",openModal);