class Book{
constructor(title, author, pages, index) {
this.title=title;
this.author=author;
this.pages=pages;
this.index=index;
}
}

class LibraryUI{
 constructor(){
  this.myLibrary=[];
  this.index=0;
  this.dialog = document.querySelector("dialog");
  this.showButton = document.querySelector("dialog + div button");
  console.log(this.showButton);
  this.submit = document.querySelector("dialog .submit");
  this.alert=document.getElementsByClassName('alert');
  this.container=document.getElementById("container");

  this.initializeEventListeners();
 } 


 initializeEventListeners(){
  this.showButton.addEventListener("click", () => this.dialog.showModal());
  this.submit.addEventListener("click", this.addBookToLibrary.bind(this));
 }

 addBookToLibrary(e){
  e.preventDefault();

  var title=document.getElementById("title").value;
  var author=document.getElementById("author").value;
  var pages=document.getElementById("pages").value;
  var input=document.querySelectorAll('input');

  let isValid=true;
  for(let i=0; i<input.length; i++){
    if(input[i].value===""){
      this.alert[i].innerHTML="Field must be filled out!";
      isValid= false;
    }
    else if(input[i].value<0){
      this.alert[i].innerHTML="Value must be greater than 0";
      isValid=false;
    }
    else if(this.alert[i]!=null){
       this.alert[i].innerHTML="";
     }
  }
 
    if(isValid){
   const book=new Book(title, author, pages, this.index);
   this.myLibrary.push(book);
   this.dialog.close();
   this.createCard(title, author, pages, this.index);
   this.index++;
   this.reset();   
    }
    }

      
createCard(title, author, pages, index){
   
    var card=document.createElement("div");
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const buttons = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

  let titleStyle="font-size:1.2em; font-weight:bold;"
  let authorStyle="font-style:italic";
  bookAuthor.setAttribute('style',authorStyle);
  bookTitle.setAttribute('style', titleStyle);  
  card.classList.add("card");
  buttons.classList.add('buttons')
  read.classList.add('btn');
  remove.classList.add('btn');
  read.classList.add('green');
 
  read.addEventListener('click', function() {
    if (read.classList.contains('red')) {   
      read.classList.remove('red');
      read.classList.add('green');
      read.innerHTML = 'Read';
    }
    else {
      read.classList.remove('green');
      read.classList.add('red');
      read.innerHTML = 'Not Read';
    }
});

   bookTitle.textContent = title.toUpperCase();
   bookAuthor.textContent = author;
   bookPages.textContent = `${pages} pages`
   remove.textContent = 'Remove';
   read.textContent = 'Read';

   
  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  buttons.appendChild(read);
  buttons.appendChild(remove);
  card.appendChild(buttons);
  container.appendChild(card);  
  
  remove.addEventListener('click', this.removeBook.bind(this, card, index));
}
  
  removeBook(card, index){
      this.myLibrary.splice(index, 1);
      card.remove();
  }    

reset(){
        const inputs = document.querySelectorAll('#title, #author, #pages');
        inputs.forEach(input => input.value = '');
        Array.from(this.alert).forEach(a=>a.innerHTML="");       
  
        }
}


new LibraryUI();

