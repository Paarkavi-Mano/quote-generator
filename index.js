const quote = document.getElementById("quote");
const author = document.getElementById("author");




const apiUrl = "https://api.quotable.io/random";
async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = data.content;
    author.textContent = data.author;
    
}
 function newQuote(){
    getQuote(apiUrl);
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent + "----- by " + author.textContent, "Tweet Window", "width=600, height=300");

}