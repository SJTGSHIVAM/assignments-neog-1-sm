const toastBtn = document.querySelector("#toast-btn");
const toastBtnLead = document.querySelector("#toast-btn-lead");
const toastBtnStack = document.querySelector("#toast-btn-stack");
const toastBtnStackLead = document.querySelector("#toast-btn-stack-lead");
const toastBtnClose = document.querySelector(".toast__btn--close");
const toast = document.querySelector("#toast");
let toastTimer;

function removeToast() {
  toast.classList.add("td");
  toast.classList.remove("toast");
  toast.classList.remove("stacked");
  toast.classList.remove("pos-btm-left");
  clearTimeout(toastTimer);
  toastTimer = null;
}
toastBtn.addEventListener("click", () => {
  if (!toastTimer) {
    toast.classList.add("toast");
    toast.classList.remove("td");
    toastTimer = setTimeout(removeToast, 5000);
  }
});
toastBtnLead.addEventListener("click", () => {
  if (!toastTimer) {
    toast.classList.add("toast");
    toast.classList.add("pos-btm-left");
    toast.classList.remove("td");
    toastTimer = setTimeout(removeToast, 5000);
  }
});
toastBtnStack.addEventListener("click", () => {
  if (!toastTimer) {
    toast.classList.add("stacked");
    toast.classList.add("toast");
    toast.classList.remove("td");
    toastTimer = setTimeout(removeToast, 5000);
  }
});

toastBtnStackLead.addEventListener("click", () => {
  if (!toastTimer) {
    toast.classList.add("stacked");
    toast.classList.add("toast");
    toast.classList.remove("td");
    toast.classList.add("pos-btm-left");
    toastTimer = setTimeout(removeToast, 5000);
  }
});
toastBtnClose.addEventListener("click", removeToast);
