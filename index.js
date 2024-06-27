
const myLib = [];

function book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let newBook = newBook(title,author,pages);
    myLib.push(newBook);
    
}
function displayLib(){
    let text = "";
    for (let i = 0; i < myLib.length; i++) {
        text += myLib[i.title] +"<br>";
    }
    document.getElementById("displayLib").innerHTML = text;
}
   
add.addEventListener('click',addBook);
displayLibBtn.addEventListener('click',displayLib);


