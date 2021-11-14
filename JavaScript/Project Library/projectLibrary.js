// base book object
class Book{
     static #id = 0;
     // the constructor...
     constructor (author, title, numPages) {
          this.author = author;
          this.title = title;
          this.numPages = numPages;
          this.hasRead = false;
          this.id = Book.#id++; 
     }
     changeRead(){
          this.hasRead = !this.hasRead;  // true ise false, false ise true yap
     }
}

let myLibrary = [
     new Book("Hemingway", "New Life", 239),
     new Book("Tolkein", "Lord of The Rings", 500),
     new Book("Barrack Obama", "A Story Success", 234),
];


// get book add button
const addBtn = document.getElementById('addButton');
// add eventlistener to it
addBtn.addEventListener('click', (event)=> {
     event.preventDefault();  // prevent page reload
     addBookToLibrary();
});
function addBookToLibrary() {
     // get book elements and values from DOM
     const newAuthor = document.getElementById('author');
     const newTitle = document.getElementById('title');
     const newNumPages = document.getElementById('number');
     // produce a new Book
     const newBook = new Book(newAuthor.value, newTitle.value, newNumPages.value);
     // add to array
     myLibrary.push(newBook);
     // render books again
     render()
     // empty input areas
     newAuthor.value = ''
     newTitle.value = ''
     newNumPages.value = ''
}


// Render
const parentDivEl = document.getElementById('myBooks');
function render() {
     // clean the div inside
     parentDivEl.innerHTML = '';
     if (myLibrary.length === 0) {
          parentDivEl.innerHTML = '<h2>There is no books yet please add book.</h2>';
          return;
     }
     // reproduce the elements for ul
     for (const book of myLibrary) {
          const divEl = document.createElement('div');
          divEl.innerHTML = `
               <p>Author: ${book.author}</p>
               <p>Title: ${book.title}</p>
               <p>Number of Pages: ${book.numPages}</p>
               <p read=${book.id}>Read: ${book.hasRead ? 'Yes' : 'False'}</p>
               <button read=${book.id}>Read/Unread</button>
          `;
          divEl.setAttribute('id', book.id);
          divEl.classList.add('divEl', 'border');
          parentDivEl.appendChild(divEl);
          const readEditBtn = document.querySelector(`button[read='${book.id}']`);
          readEditBtn.addEventListener('click', ()=>{
               book.changeRead(); // book has Read
               document.querySelector(`p[read='${book.id}']`).innerHTML = `Read: ${book.hasRead ? 'Yes' : 'False'}`
          });
     }
}

// first time render
render()