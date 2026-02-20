const password = "anshum";

function checkPass(){
  const val = document.getElementById("passInput").value;

  if(val === password){
    document.getElementById("lockScreen").style.display = "none";
  }else{
    document.getElementById("wrong").style.display = "block";
  }
}
const memories = [
"can i have a lifetime subscription of youu?",
"you keep me super happy thanx man",
"dil ki baazi maarli 😉",
"yes better with u",
"ilyyyyyy",
"i am glad i get to call u mine",
"chep",
"bhaibhai",
"thank you for loving me the way you do",
"lifetime subscription????",
"smartyyy",
"zindagi me wo nhi toh kn hai meri zindagi me",
"no nazar",
"cuties only",
"ilyyyyyy",
"thanking my stars",
"thanking my stars pt two",
"bhai mera bass chle toh duniya hi dedu terko purii",
"hands down my best win",
"stuck w each other ok?",
"my heart really really loves yours",
"HAPPY 5 YEARS TO US MY LOVE💕CHEERS TO MANY MORE WITH EACH OTHER💕"
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
