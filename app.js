const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=2c078b19167fcc2bed236eca77716ae000b81d12");
    
    data = await response.json()
   // console.log(data);
    for(let i = 0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


//console.log(emoji);

btnEl.addEventListener("click", ()=>{
    //console.log("Clicked");
    const randomNum = Math.floor(Math.random()*emoji.length);
    //console.log(randomNum);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;

});

