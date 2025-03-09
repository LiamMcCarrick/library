const modal = document.querySelector(".modal");
const addBook = document.querySelector(".modal + .add");
const closeModal = document.querySelector(".modal .cancel");

addBook.addEventListener("click", () => {
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close();
})