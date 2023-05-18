// toggle page

const btnRocket = document.querySelector(".btn-rocket");
const innerRocket = document.querySelector(".btn-rocket .btn");
const highlightRocket = document.querySelector(".btn-rocket .btn-highlight");
const btnSpace = document.querySelector(".btn-space");
const innerSpace = document.querySelector(".btn-space .btn");
const highlightSpace = document.querySelector(".btn-space .btn-highlight");

btnRocket.addEventListener("click", () => {
  innerRocket.style = "box-shadow:  8px 8px 0px 0px #bfc9f0";
  innerSpace.style = "box-shadow:  0";

  highlightRocket.style = "display: inline";
  highlightSpace.style = "display: none";
});

btnSpace.addEventListener("click", () => {
  innerSpace.style = "box-shadow:  8px 8px 0px 0px #eee5ff";
  innerRocket.style = "box-shadow:  0";

  highlightRocket.style = "display: none";
  highlightSpace.style = "display: inline";
});

// toggle coach

const coachList = document.querySelector(".bootcamp-coach-list");

coachList.addEventListener("click", (e) => {
  const all = document.querySelectorAll(".bootcamp-coach-list li");
  all.forEach((item) => {
    item.querySelector("div").style = "background: white";
  });

  const li = e.target.closest("li");
  li.querySelector("div").style = "background: black";
});
