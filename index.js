document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("popUp");
  let popUp = document.querySelector(".popUpBg");
  button.addEventListener("click", event => {
    popUp.style.visibility = "visible";
  });
  popUp.addEventListener("click", event => {
    if (event.target == event.currentTarget) popUp.style.visibility = "hidden";
  });
});
