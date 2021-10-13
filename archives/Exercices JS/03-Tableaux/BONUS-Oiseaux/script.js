const birds = [
  { name: "mouette", fem: true },
  { name: "corbeau" },
  { name: "mésange", fem: true },
  { name: "hibou" },
  { name: "buse", fem: true },
  { name: "pigeon" },
  { name: "pie", fem: true },
  { name: "vautour" },
  { name: "faucon" },
  { name: "rouge-gorge" },
  { name: "tourterelle", fem: true },
  { name: "corneille", fem: true },
];
const adjectives = new Set([
  "cendré",
  "huppé",
  "chantant",
  "hurlant",
  "perché",
  "grand",
  "petit",
  "bleu",
  "pantelant",
  "tangent",
  "arboré",
]);

// your code here
document.getElementById("run").addEventListener("click", function () {
  let randomBird = Math.floor(Math.random() * birds.length);
  let randomAdjective = Math.floor(Math.random() * adjectives.size);
  let determinant = birds[randomBird].fem ? "La" : "Le"; // this is a ternary conditional operator. it acts as a if...else : condition ? "what happens if condition is true" : "what happens if condition is false (else)"
  let accord = birds[randomBird].fem ? "e" : "";
  let oiseau = `${determinant} ${birds[randomBird].name} ${
    Array.from(adjectives)[randomAdjective]
  }${accord}`;
  document.getElementById("target").innerHTML = oiseau;
});
