const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + div button");
const submit = document.querySelector("dialog .submit");

var alert=document.getElementsByClassName('alert');
// opens form
showButton.addEventListener("click", () => {
  dialog.showModal();
});

const myLibrary=[];
var index=0;
//constructor
function Book(title, author, pages, index) {
this.title=title;
this.author=author;
this.pages=pages;
this.index=index;
}


submit.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e){
  var title=document.getElementById("title").value;
  var author=document.getElementById("author").value;
  var pages=document.getElementById("pages").value;
 
  
  var input=document.querySelectorAll('input');
  let i = null;
  for(i in input){
    if(input[i].value==""){
      alert[i].innerHTML="Field must be filled out!";
    }
    else if(input[i].value<0){
      alert[i].innerHTML="Value must be greater than 0";
    }
    else if(alert[i]!=null){
       alert[i].innerHTML="";
     }
  }
 
    if(input[0].value !== '' && input[1].value !== '' && input[2].value !== '' && input[2].value>0){
   const book=new Book(title, author, pages, index);
   myLibrary.push(book);
   console.log(myLibrary);
   dialog.close();
   createCard(title, author, pages, index);
   index++;
   reset();   
    }
  

  e.preventDefault();
    }

      
function createCard(title, author, pages, index){
    var container=document.getElementById("container");
    var card=document.createElement("div");
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const buttons = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

  titleStyle="font-size:1.2em; font-weight:bold;"
  authorStyle="font-style:italic";
  bookAuthor.setAttribute('style',authorStyle);
  bookTitle.setAttribute('style', titleStyle);  
  card.classList.add("card");
  buttons.classList.add('buttons')
  read.classList.add('btn');
  remove.classList.add('btn');
  read.classList.add('green');
  //remove.onclick = removeBook;

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

  remove.addEventListener('click', function(){
    myLibrary.splice(index, 1);
    console.log("I'm called");
    console.log(myLibrary);
    card.remove();
  });
  
      
}


function reset(){
       
        const btn = document.getElementById('btn');
        const inputs = document.querySelectorAll('#title, #author, #pages');
        inputs.forEach(input => {
          input.value = '';
        });
      
        for(i in alert){
          alert[i].innerHTML = '';
        }
}


