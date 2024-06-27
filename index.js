
function displayBook(){
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
     
    
    alert("Title of Book is" + title + "\n Author is " + author + "\n Pages is " +pages);    
}
   
submit.addEventListener('click',displayBook);