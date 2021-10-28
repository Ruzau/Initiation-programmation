document.getElementById("addition").addEventListener("click", () => {
  let opOne = document.getElementById("op-one").value;
  let opTwo = document.getElementById("op-two").value;
  alert(Number(opOne) + Number(opTwo));
});

document.getElementById("substraction").addEventListener("click", () => {
  let opOne = document.getElementById("op-one").value;
  let opTwo = document.getElementById("op-two").value;
  alert(Number(opOne) - Number(opTwo));
});

document.getElementById("division").addEventListener("click", () => {
  let opOne = document.getElementById("op-one").value;
  let opTwo = document.getElementById("op-two").value;
  alert(Number(opOne) / Number(opTwo));
});

document.getElementById("multiplication").addEventListener("click", () => {
  let opOne = document.getElementById("op-one").value;
  let opTwo = document.getElementById("op-two").value;
  alert(Number(opOne) * Number(opTwo));
});
