const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")


const apiURL = "http://api.quotable.io/random"

async function getQuote(){
    
try{
    
    //quote updating text
    quoteEl.innerText = "Updating"
    //author updating text
    authorEl.innerText = "..updating.."
    btnEl.innerText = "loading"
    btnEl.disabled = true;
    const response = await fetch(apiURL)
    const data = await response.json()
    const quoteCon = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteCon;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.innerText = "GET A QUOTE"
    btnEl.disabled = false;

    console.log(data);
}
catch(error)
{
    console.log(error);
    quoteEl.innerText = "An error happened ,try again later";
    authorEl.innerText = "Error";
    btnEl.innerText = "GET A QUOTE";
    btnEl.disabled = false;

}
}


btnEl.addEventListener("click", getQuote)