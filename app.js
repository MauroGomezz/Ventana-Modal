const btn = document.querySelector(".btn-modal");
const modalConatiner = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
    modalConatiner.classList.add("show-modal")
});

closeBtn.addEventListener("click", () => {
    modalConatiner.classList.remove("show-modal")
});

modalConatiner.addEventListener('click', (e) => {
    if (e.target !== modal) {
        modalConatiner.classList.remove("show-modal")
    }
})