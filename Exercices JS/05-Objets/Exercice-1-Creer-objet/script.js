const personne = {
  nom: "Dussart",
  prenom: "Thomas",
  age: 30,
  ville: "Liège",
  pays: "Belgique",
};

document.getElementById("run").addEventListener("click", () => {
  console.log(personne);
});