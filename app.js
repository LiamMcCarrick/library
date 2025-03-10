const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add");
const closeModal = document.querySelector(".modal .cancel");
const save = document.querySelector(".modal .save");

const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")

function clearModal() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

addBook.addEventListener("click", () => {
    clearModal();
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close();
})

save.addEventListener("click", () => {
    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;
    const NewRead = read.value;

    addBookToLibrary(newTitle, newAuthor, newPages, NewRead);
    modal.close();
    
})

const myLibrary = [];

function Book(id, title,author,pages,read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const table = document.querySelector("table");

function addBookToLibrary(title,author,pages,read) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages,read);
    myLibrary.push(book);

    displayBook(book);
}

function displayBook(book) {
    const tableRow = table.insertRow(-1);
    for (const [key,value] of Object.entries(book)) {
        if (key === 'id') {
            continue;
        }
        const tableData = tableRow.insertCell();
        tableData.textContent = value;
        tableData.style.padding = "20px";
    }
    const tableData =  tableRow.insertCell();
    const delButton = document.createElement("button");
    delButton.textContent = 'Delete'
    tableData.appendChild(delButton);
    tableData.style.padding = "20px";

    tableRow.style.backgroundColor = "white";
    tableRow.style.borderBottom = "1px solid #333";

}