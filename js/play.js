const header = document.createElement("h1");
let amountOfSquares = 0;
const containerDiv = document.createElement("div");
let squareDivs = [];
const popupButton = document.createElement("button");

//Grid elements + interaction
function createDivs(amountOfSquares) {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.lastChild);
  }
  for (let i = 0; i < amountOfSquares; i++) {
    squareDivs = document.createElement("div");
    containerDiv.appendChild(squareDivs);
    squareDivs.setAttribute("class", "innerDiv flexBasis");
  }
  containerDiv.setAttribute("class", "container");
  document.body.appendChild(containerDiv);

  const setFlexBasis = document.querySelectorAll(".flexBasis");
  setFlexBasis.forEach((el) =>
    el.setAttribute(
      "style",
      `display: flex; flex-grow: 1; flex-shrink: 0; flex-basis: calc(100% / ${Math.pow(
        amountOfSquares,
        1 / 2
      )})`
    )
  );

  const hoveredDiv = document.querySelectorAll(".innerDiv");
  hoveredDiv.forEach((el) =>
    el.addEventListener("mouseover", function color(coloredDiv) {
      coloredDiv.currentTarget.style.backgroundColor = "blue";
    })
  );

  hoveredDiv.forEach((el) =>
    el.addEventListener("mouseout", function noncolor(whiteDiv) {
      whiteDiv.currentTarget.style.backgroundColor = "";
    })
  );
}

createDivs(2 * 2);

//Header styling
header.textContent = "Etch-a-sketch";
header.setAttribute("style", "color: blue");
document.body.prepend(header);

//Button interaction
popupButton.textContent = "Press me";
popupButton.addEventListener("click", function askUser() {
  amountOfSquares = prompt(
    "Enter a number for the amount of squares in the grid",
    0
  );
  if (amountOfSquares > 100) {
    alert("Please enter a number below 101");
  } else {
    createDivs(amountOfSquares * amountOfSquares);
  }
});
document.body.insertBefore(popupButton, containerDiv);
