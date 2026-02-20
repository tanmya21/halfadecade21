const memories = [
"can i have a lifetime subscription of youu?",
"you keep me super happy",
"cutie u are",
"happy place bro",
"ilyyyyyy",
"i am glad i get to call u mine",
"you are the best",
"loml",
"thank you for loving me the way you do",
"lucky in love",
"smartyyy",
"love us",
"no nazar",
"my fav person",
"always choosing you",
"best decision",
"thanking my stars tbh",
"stuck with me",
"you get me in the best way possible",
"you will always be my best win",
"my heart loves yours",
"happy 5 years to us babe im so so so lucky and v v excited to spend many more with you hehe thank you for loving me the way you do qt"
];

let current = 0;
const player = new Audio();

document.addEventListener("click", function(e){

    const imageNumber = String(current + 1).padStart(2,'0');

    // create memory card
    const card = document.createElement("div");
    card.className = "memory-card";

    const img = document.createElement("img");
    img.src = `photos/p${imageNumber}.jpg`;

    const text = document.createElement("p");
    text.innerText = memories[current];

    card.appendChild(img);
    card.appendChild(text);
    document.body.appendChild(card);

    // place at click position
    card.style.left = e.pageX + "px";
    card.style.top = e.pageY + "px";

    // music
    player.pause();
    player.currentTime = 0;
    player.src = `music/M${current+1}.mp3`;
    player.play();

    current++;
    if(current >= memories.length) current = 0;
});
