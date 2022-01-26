const toggleBtn = document.querySelectorAll(".badge__btn--toggle");
console.log(toggleBtn);
toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) =>
    e.target.nextElementSibling.classList.contains("dis-none")
      ? e.target.nextElementSibling.classList.remove("dis-none")
      : e.target.nextElementSibling.classList.add("dis-none")
  );
});
