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
    displayBooks();
})

const myLibrary = [];

function Book(id, title,author,pages,read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const tbody = document.querySelector("tbody");

function addBookToLibrary(title,author,pages,read) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages,read);
    myLibrary.push(book);
}

function displayBooks() {
    tbody.replaceChildren();
    myLibrary.forEach((book) => {
        const tableRow = tbody.insertRow();
        for (const [key,value] of Object.entries(book)) {
            if (key === 'id') {
                tableRow.setAttribute("id", value);
                continue;
            }
            const tableData = tableRow.insertCell();
            tableData.textContent = value;
            tableData.style.padding = "20px";
        }
        const delButton = document.createElement("button");
        const tableData =  tableRow.insertCell();
        delButton.textContent = 'Delete'
        tableData.appendChild(delButton);
        tableData.style.padding = "20px";
    
        tableRow.style.backgroundColor = "white";
        tableRow.style.borderBottom = "1px solid #333";

        const id = tableRow.getAttribute("id")

        delButton.addEventListener("click", () => {
            const row = delButton.parentNode.parentNode;
            
            row.parentNode.removeChild(row);

            myLibrary.forEach((book, index) => {
                for(const [key,value] of Object.entries(book)) {
                    if (key === 'id') {
                        if (id === value) {
                            myLibrary.splice(index,1);
                        }
                    }
                }
            })
        })
    })
}
