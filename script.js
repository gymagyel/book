
const myLibrary = []
function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

    function addBookToLibrary(title,author, pages, read) {
const book = new Book (title,author,pages,read);
myLibrary.push(book);
displayLibrary()
    }

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 293, false)
addBookToLibrary("Dune", "Frank Herbert", 412, true)

function displayLibrary() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML="";

myLibrary.forEach(book =>{
    const card = document.createElement("div");

    card.classList.add("card")
    card.dataset.id = book.id;
    card.textContent =  `${book.title} by ${book.author}`

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        removeBook(book.id);
    })

  
    card.appendChild(removeBtn);
    libraryDiv.appendChild(card);
})
}
displayLibrary();
