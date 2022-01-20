let chipArray;
let chipFielt;
let inpText;
reg();
inpText.onkeypress = addChip;

function addChip(e) {
  if (e.keyCode === 13) {
    let chipText = inpText.value;

    console.log(chipFielt.innerHTML);

    chipFielt.innerHTML += ` <div class="inp-chip--div"><label>${chipText}</label><span>X</span></div>`;

    reg();
    console.log(chipFielt.innerHTML);
  }
}
function reg() {
  chipArray = document.querySelectorAll(".inp-chip--div");
  chipFielt = document.querySelector(".inp-chip");
  inpText = document.querySelector(".inp-chip input");
  inpText.onkeypress = addChip;
  chipArray.forEach((chip) => {
    let span = chip.querySelector("span");
    span.addEventListener("click", () => {
      console.log(chip.innerHTML);
      chip.remove();
    });
  });
}
