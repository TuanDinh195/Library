
const myLib = [];

function book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBook() {
    const title = document.getElementById("title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    
    let newBook = new book(title,author,pages);

    myLib.push(newBook);
   
}
function displayLib(){
    let text = "";
    for (let i = 0; i < myLib.length; i++) {
        text += myLib[i].title + "<br>";
        console.log(myLib[i]);
    }
    document.getElementById("displayLib").innerHTML.value = text;
    
    console.log(text);
}



const button = document.querySelector("#add");
button.addEventListener('click',addBook);

const button2 = document.querySelector("#displayLibBtn");
button2.addEventListener('click', displayLib);





