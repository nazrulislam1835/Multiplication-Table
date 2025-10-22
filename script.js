let heading = document.querySelector(".heading");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  heading.innerHTML = "";

  for (let i = 1; i < 11; i++) {
    heading.innerHTML += `${input.value} x ${i} = ${input.value * i} <br>`;
  }
});
