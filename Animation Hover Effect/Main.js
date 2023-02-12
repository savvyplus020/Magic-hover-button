const password = document.querySelector("#input");
const button = document.querySelector(".button");
let check = true;

password.addEventListener("input", ChangeColor);

function ChangeColor() {
  if (password.value.length >= 8) {
    button.style.background = "green";
  } else {
    button.style.background = "red";
  }
}

function magicHover() {
  if (password.value.length < 8) {
    if (check) {
      button.style.left = "60%";
      button.style.transition = "all 0.5s ease";
    } else {
      button.style.left = "0px";
    }
    check = !check;
  }
}
