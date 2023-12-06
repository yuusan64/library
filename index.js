const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + div button");
const submit = document.querySelector("dialog .submit");

var alert=document.getElementsByClassName('alert');
// opens form
showButton.addEventListener("click", () => {
  dialog.showModal();
});

const myLibrary=[];

//constructor
function Book(title, author, pages) {
this.title=title;
this.author=author;
this.pages=pages;
}

// function validate(e){
//   e.preventDefault();
//   console.log(e);
//   var alert=document.getElementsByClassName('alert');
//   var input=document.getElementsByTagName('input');
//   let i=0;
//   for(i in input){
//     if(input[i].value==""){
//       alert[i].innerHTML="Field must be filled out!";
//     }
//     else{
//       alert[i].innerHTML="";
//     } 
//   }
 
// }

submit.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e){
  var title=document.getElementById("title").value;
  var author=document.getElementById("author").value;
  var pages=document.getElementById("pages").value;
  console.log(e);
  
  var input=document.querySelectorAll('input');
  let i = null;
  for(i in input){
    if(input[i].value==""){
      alert[i].innerHTML="Field must be filled out!";
    }
    // else{
    //   alert[i].innerHTML="";
    // }
  }
  console.log(input[0].value);
    if(input[0].value !== '' && input[1].value !== '' && input[2].value !== ''){
   const book=new Book(title, author, pages);
   myLibrary.push(book);
   dialog.close();
   createCard(title, author, pages);
   reset();   
    }
  
    
       // if (title == ""|| author == ""||pages == "") {
        //  alert.innerHTML="Field must be filled out";
         // return false;
        //}
  e.preventDefault();
    }

      
function createCard(title, author, pages){
    var container=document.getElementById("container");
    var card=document.createElement("div");
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const buttons = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

  card.classList.add("card");
  buttons.classList.add('buttons')
  read.classList.add('btn');
  remove.classList.add('btn');
  //read.onclick = toggleRead;
  //remove.onclick = removeBook;

   bookTitle.textContent = title.toUpperCase();
   bookAuthor.textContent = author;
   bookPages.textContent = `${pages} pages`
   remove.textContent = 'Remove';
   read.textContent = 'Not read';

    //card.innerHTML= "<div>"+title.toUpperCase()+"</div><div>"+author+"</div><div>"+pages+"</div><div><button>Not read</button></div>"+"<div><button>Remove</button></div>";
    // var cardStyle="padding: 4px 4px; width: 10em; height: 12em; background-color:rgb(253, 225, 218); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);";
    //card.setAttribute('style', cardStyle);
   // document.body.appendChild(card);
   // container.appendChild(card);


  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  buttons.appendChild(read);
  buttons.appendChild(remove);
  card.appendChild(buttons);
  container.appendChild(card);   
      
}


const removeBook = (e) => {
  const remove = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    '"',
    ''
  )
  }

/*
function check(event) {
  event.preventDefault();
   submit.addEventListener("click", check, false); 
}*/

function reset(){
        console.log("I'm called");
        const btn = document.getElementById('btn');
        const inputs = document.querySelectorAll('#title, #author, #pages');
        inputs.forEach(input => {
          input.value = '';
        });
        console.log(alert[0]);
        for(i in alert){
          console.log(alert[i].innerHTML);
          alert[i].innerHTML = '';
        }
}

function readStatus(status){
    this.read=status;
}

