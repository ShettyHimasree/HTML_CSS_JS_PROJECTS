const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorE1 = document.getElementById("author")


const apiURL = "http://api.quotable.io/random"
async function getQuote() {
    try {
        //loading text for button...
        btnEl.innerText = "Loading..";
        btnEl.disabled = true;

        //uploading text for quotes
        quoteEl.innerText = "Updating"
        authorE1.innerText = "updating "
        const response = await fetch(apiURL)
        const data = await response.json()
        const quotecon = data.content;
        const authorCont = data.author;
        quoteEl.innerText = quotecon;
        authorE1.innerText = "~" + authorCont;
        // getting back the button to normal clickable state
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        console.log("clicked");
    }
    catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorE1.innerText = "An error happened";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;

    }
}


getQuote()






btnEl.addEventListener("click", getQuote)