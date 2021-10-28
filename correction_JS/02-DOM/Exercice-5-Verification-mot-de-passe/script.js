document.getElementById("run").addEventListener("click", function () {
  let passOne = document.getElementById("pass-one");
  let passTwo = document.getElementById("pass-two");

  if (passOne.value !== passTwo.value) {
    passOne.style.borderColor = "red";
    passTwo.style.borderColor = "red";
  }
});
