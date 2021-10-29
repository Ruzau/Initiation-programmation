// document.getElementById("btn").addEventListener("click", function () {
//   //document.body.bgColor = "red";
//   document.getElementById("texte").textContent = "Hello World!";
// });

// document.getElementById("input").addEventListener("keyup", () => {
//   console.log("ok");
// });

// //générer un nombre aléatoire
// let nombreAChanger = 100;
// console.log(Math.floor(Math.random() * nombreAChanger) + 1);

// //remplir un tableau avec des éléments
// let array = [];

// for (let i = 0; i < 20000; i++) {
//   array.push(i);
// }

// //récupérer un index aléatoire dans le tableau
// let random = Math.floor(Math.random() * array.length) + 1;
// console.log(array[random]);

// //
// let siriusTeamArray = [
//   "Jeremy",
//   "Christophe",
//   "Julie",
//   "Thomas",
//   "Laetitia",
//   "Laura",
// ];

//retirer le dernier élément et l'afficher
// console.table(siriusTeamArray);
// console.log(siriusTeamArray.pop());
// console.table(siriusTeamArray);

//retirer le premier élément et l'afficher
// console.table(siriusTeamArray);
// console.log(siriusTeamArray.shift());
// console.table(siriusTeamArray);

//Ajout d'une valeur au tableau
// console.table(siriusTeamArray);
// console.log(siriusTeamArray.push("Falco"));
// console.table(siriusTeamArray);

//trouver l'index d'un élément

// console.log(
//   "index",
//   siriusTeamArray.findIndex((element) => element === "Jeremy")
// );

// console.log("indexOf", siriusTeamArray.indexOf("Jeremy"));

// methode array.filter

// console.log(siriusTeamArray.filter((el) => el === "Jeremy"));

// methode array.reduce

// let arrayReduce = [1, 2, 3, 4, 5];

// const reducer = (accumulateur, valActuelle) => accumulateur + valActuelle;

// console.log(arrayReduce.reduce(reducer));

// methode array.map

// let arrayMap = [1, 2, 3, 4, 5];
// console.log(arrayMap.map((el) => el * 2));

// methode includes

// console.log(arrayMap.includes(4));

//methode sort

// let sortArray = [1, 10, 3];

// console.log(sortArray.sort());

// console.log(sortArray.sort((a, b) => a - b));

// Boucles

// for loop

// let number = 100;
// let array = [];
// for (let i = 0; i <= number; i++) {
//   array.push(i);
// }
// console.log(array);

// do while loop

// let number = 0;
// let arrayy = [];
// do {
//   arrayy.push(number);
// } while (number <= 100);
// console.log(arrayy);

// while loop

// let number = 0;
// let arrayyy = [];
// while (number <= 100) {
//   arrayyy.push(number);
//   number++;
// }
// console.log(arrayyy);

// forEach /!\ Methode pour les tableaux

// let siriusTeamArray = [
//   "Jeremy",
//   "Christophe",
//   "Julie",
//   "Thomas",
//   "Laetitia",
//   "Laura",
// ];
// siriusTeamArray.forEach((element) => console.log(`Salut ${element}`));

// var questions = () => {
//   const age = prompt("Please enter your age");
//   const gender = prompt("Please enter your gender (male / female / toaster) ?");
//   const adress = prompt("In which town do you live in ? ");
//   const res = confirm(
//     `Do you confirm those informations
//       Age = ${age}
//       Gender = ${gender}
//       Adress = ${adress}`
//   );

//   if (res) {
//     gender.toUpperCase() === "TOASTER"
//       ? alert("Really nigga?")
//       : alert("Bravo you are normal");
//   } else {
//     questions();
//   }
// };
// questions();

// fetch GET

// fetch("https://handlers.education.launchcode.org/static/planets.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://handlers.education.launchcode.org/static/planets.json", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let data = response;
    data.forEach((element) => {
      console.log(element);
      let newDiv = document.createElement("div");
      let newContent = document.createTextNode(element.diameter);
      newDiv.appendChild(newContent);
      // newDiv.innerHTML =
      //   "<img style='width: 40%' src='" + element.image + "'/>";
      document.body.appendChild(newDiv);
    });
  });

// fetch POST

// document.getElementById("btn").addEventListener("click", (e) => {
//   e.preventDefault();

//   const data = {
//     name: "test",
//     alterEgo: "test Scott Summers",
//     abilities: ["Optic", "Master"],
//   };

//   fetch("http://localhost:3000/heroes", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((res) => console.log("POSTED"));
// });

// fetch DELETE

// document.getElementById("btn").addEventListener("click", (e) => {
//   e.preventDefault();

//   fetch(`http://localhost:3000/heroes/`, {
//     method: "DELETE",
//   }).then((res) => console.log("DELETED"));
// });
