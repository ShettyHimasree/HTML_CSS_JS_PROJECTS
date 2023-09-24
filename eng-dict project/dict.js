const inputEle = document.getElementById("input")
const infoTextEle = document.getElementById("info-text")
const meaningcontainere1 = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningE1 = document.getElementById("meaning")
const audioEl = document.getElementById("audio")




async function fetchAPI(word) {
    try {
        infoTextEle.style.display = "block";
        meaningcontainere1.style.display = "none";

        infoTextEle.innerText = `searching the meaning
         of "${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());
        if (result.title) {
            meaningcontainere1.style.display = "block";
            infoTextEle.style.display = "none";
            titleEl.innerText = word;
            meaningE1.innerText = "N/A";
            audioEl.style.display = "none";
        }
        else {
            infoTextEle.style.display = "none";
            meaningcontainere1.style.display = "block";
            audioEl.style.display = "inline-flex"
            titleEl.innerText = result[0].word
            meaningE1.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }


    }
    catch (error) {
        console.log(error);
        infoTextEle.innerText = `AN error happened ,try again`
    }

}






inputEle.addEventListener("keyup", (e) => {
    // console.log(e.key);
    if (e.target.value && e.key == "Enter") {
        fetchAPI(e.target.value)

    }

});