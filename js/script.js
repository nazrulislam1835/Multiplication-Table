let heading = document.querySelector(".output_text");
let input = document.querySelector(".number");
let btn = document.querySelector(".btn-awesome");

btn.addEventListener("click", (event) => {
  // Ripple effect
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = event.clientX - rect.left + "px";
  ripple.style.top = event.clientY - rect.top + "px";
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());

  // Multiplication table logic
  heading.innerHTML = "";
  const num = parseInt(input.value);
  if (isNaN(num)) {
    heading.innerHTML = "⚠️ Please enter a valid number.";
    return;
  }

  for (let i = 1; i < 11; i++) {
    heading.innerHTML += `${num} × ${i} = ${num * i} <br>`;
  }
});
