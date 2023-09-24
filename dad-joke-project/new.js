const btn1 = document.getElementById("btn")
const joke1 = document.getElementById("joke")

const apiKey = "KWyNKLx/kR5pZqbbFUBo3Q==R1v0vy94IC1aJocH";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {
    try {
        joke1.innerText = "updating..."
        btn1.disabled = true;
        // when their the text is updating button shows loading..
        btn1.innerText = "loading..."
        // to fetch details from api we use fetch function takes arguments== that fetches from  api,and options
        //ftech func need to ftech details from api so some delay occurs so wait method should be used , that should be ended with async for main method 

        
        const Respon = await fetch(apiURL, options)
        // normal text should be converted to json to apis communicate with each other
        const data = await Respon.json();
        //from all we need to fetch only joke so joke object 0 data is extracted
        joke1.innerText = data[0].joke;


        //if it stoped loading the button should display tellmejoke again
        btn1.disabled = false;
        btn1.innerText = "Tell Me A Joke"
    }
    catch (error) {
        joke1.innerText = " AN error happened try again later"
        btn1.disabled = false;
        btn1.innerText = "Tell Me A Joke"
        console.log("error")


    }


}