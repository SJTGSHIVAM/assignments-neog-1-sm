let chipArray = document.querySelectorAll(".inp-chip--div");
let chipFielt = document.querySelector(".inp-chip");
let inpText = document.querySelector(".inp-chip input");
inpText.onkeypress = addChip;

function addChip(e) {
  if (e.keyCode === 13) {
    // console.log(inpText.value);
    let chipText = inpText.value;
    // chipFielt.children.insert(
    //   -2,
    console.log(chipFielt.innerHTML);

    chipFielt.innerHTML += ` <div class="inp-chip--div"><label>${chipText}</label><span>X</span></div>`;
    // );
    reg();
    console.log(chipFielt.innerHTML);
  }
}
function reg() {
  chipArray = document.querySelectorAll(".inp-chip--div");
  chipFielt = document.querySelector(".inp-chip");
  inpText = document.querySelector(".inp-chip input");
  inpText.onkeypress = addChip;
}
