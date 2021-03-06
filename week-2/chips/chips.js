const chipArray = document.querySelectorAll(".inp-chip--div");
const chipField = document.querySelector(".inp-chip");
const inpText = document.querySelector(".inp-chip input");
const crossIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
<defs>
</defs>
<g transform="translate(128 128) scale(0.72 0.72)" style="">
	<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
	<circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgba(0,0,0,0.4); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<path d="M 62.646 69.904 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 19.879 28.38 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 40.646 40.646 c 1.172 1.171 1.172 3.071 0 4.242 C 64.181 69.611 63.413 69.904 62.646 69.904 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,74,76); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 22 69.904 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 40.646 -40.646 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 L 24.121 69.025 C 23.536 69.611 22.768 69.904 22 69.904 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,74,76); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 66 66.741 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 23.233 25.217 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 L 68.121 61.62 c 1.172 1.171 1.172 3.071 0 4.242 C 67.535 66.448 66.768 66.741 66 66.741 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 25.354 66.741 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 40.646 -40.646 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 L 27.476 65.862 C 26.89 66.448 26.122 66.741 25.354 66.741 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</g>
</svg>`;

inpText.onkeypress = addChip;
chipArray.forEach((chip) => {
  let span = chip.querySelector(".close");
  console.log(span);
  if (span) {
    span.innerHTML = crossIcon;
    span.addEventListener(
      "click",
      () => {
        chip.remove();
      },
      { once: true }
    );
  }
});
function createNode({
  element,
  className,
  parent,
  innerText,
  innerHTML,
  children = [],
}) {
  let createdNode = document.createElement(element);
  if (className) createdNode.className = className;
  if (parent) parent.appendChild(createdNode);
  if (innerText) createdNode.innerText = innerText;
  if (innerHTML) createdNode.innerHTML = innerHTML;
  children.forEach((node) => {
    console.log(node);
    createdNode.appendChild(node);
  });
  return createdNode;
}
inpText.onkeypress = addChip;

function addChip(e) {
  if ((e.keyCode === 13 || e.code === 13) && inpText.value) {
    let inpTextVal = inpText.value;
    let chipDiv = createNode({
      element: "div",
      className: "inp-chip--div",
      parent: chipField,
      children: [
        createNode({
          element: "label",
          innerText: inpTextVal,
        }),
      ],
    });
    createNode({
      element: "span",
      className: "close",
      innerHTML: crossIcon,
      parent: chipDiv,
    }).addEventListener(
      "click",
      () => {
        chipDiv.remove();
      },
      { once: true }
    );
    inpText.value = "";
  }
}
