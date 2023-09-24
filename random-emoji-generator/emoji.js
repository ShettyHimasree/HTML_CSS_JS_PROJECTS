const btnEl = document.getElementById("btn")
const emojiEl = document.getElementById("emoji-name")
const emojiName = ""
const emoji = [];
async function getEmoji() {

    let response = await fetch("https://emoji-api.com/emojis?access_key=dd858d87a1f761c0ae8e51e058a4d02a301fb7b7")
    const data = response.json();
    for (let i = 0; i < 1500; i++) {
        emoji.push({
           emojiName: data[i].character,
           emojiCode: data[i].unicodeName,

        });
    }
}



getEmoji();




btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length)
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiEl.innerText = emoji[randomNum].emojiCode;
});