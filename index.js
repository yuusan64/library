const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// opens form
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary=[];

//constructor
function Book(title, author, pages) {
this.title=title;
this.author=author;
this.pages=pages;
}

function addBookToLibrary(){
   var title=document.getElementById("title").value;
   var author=document.getElementById("author").value;
   var pages=document.getElementById("pages").value;
   const input=new Book(title, author, pages);
   myLibrary.push(input);
   console.log(myLibrary);
}