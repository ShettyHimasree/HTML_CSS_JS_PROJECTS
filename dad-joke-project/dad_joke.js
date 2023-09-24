const btnEl = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")


const apiKey = "KWyNKLx/kR5pZqbbFUBo3Q==R1v0vy94IC1aJocH";
const options = {
    method:"GET",
    headers:{
        "X-Api-Key" : apiKey,
    },
};
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){
    try {
        jokeE1.innerText="updating..."
    btnEl.disabled=true;
    btnEl.innerText="loading..."
    const Response = await fetch(apiURL, options);
    const data = await Response.json();
    jokeE1.innerText=data[0].joke;

    btnEl.disabled=false;
    btnEl.innerText="Tell Me A joke"
    } catch (error) {
        //jokeE1.innerText=data[0].joke;
        jokeE1.innerText= " An Error happened,try again later";
        btnEl.disabled=false;
    btnEl.innerText="Tell Me A joke"
        console.log("error")
    }

    

}


btnEl.addEventListener("click",getJoke);

