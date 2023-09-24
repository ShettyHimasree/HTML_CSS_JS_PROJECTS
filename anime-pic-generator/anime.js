const btnEl = document.getElementById("btn")
const animeCont = document.querySelector(".anime-container")
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")


async function getAnimef(){
    try{

        btnEl.disabled = true;
        btnEl.innerText="loading";
        animeNameEl.innerText = "updating";
        animeImgEl.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText="Get Anime";
       // animeImgEl.innerText = data.url;
        //animeNameEl.innerText = data.name;
        animeCont.style.display =  "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
       
    }
    catch(error){
        btnEl.disabled = false;
        btnEl.innerText="An error happened ,try again later";
        console.log(error);
    }
}



btnEl.addEventListener("click", getAnimef)
