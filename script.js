
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
    card.textContent =  `${book.title} by ${book.author} ${book.pages} pages`

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        removeBook(book.id);
    })

    function removeBook(id) {
        const index = myLibrary.findIndex(book => book.id === id);
        if (index !== -1) {
            myLibrary.splice(index, 1);
            displayLibrary()
        }
    }

    const status=document.createElement("p");
    status.textContent = book.read ? "Read" : "Not read";

    const toggleBtn = document.createElement("button")
    toggleBtn.textContent = "Toggle read" ;
    toggleBtn.classList.add ("toggle-btn");
    toggleBtn.addEventListener("click", () => {
  book.toggleRead();
  displayLibrary();
});
if (book.read) {
  card.classList.add("read");
} else {
  card.classList.add("not-read");
}


  
    card.appendChild(removeBtn);
    card.appendChild(toggleBtn);
    card.appendChild (status);
    libraryDiv.appendChild(card);
})
}
displayLibrary();
document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
});

