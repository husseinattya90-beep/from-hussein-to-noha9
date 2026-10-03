const opening = document.getElementById("opening");
const message = document.getElementById("message");
const final = document.getElementById("final");

const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");


openBtn.addEventListener("click", () => {

  opening.classList.remove("active");

  setTimeout(() => {
    message.classList.add("active");
  }, 400);

});


continueBtn.addEventListener("click", () => {

  message.classList.remove("active");

  setTimeout(() => {
    final.classList.add("active");
  }, 400);

});