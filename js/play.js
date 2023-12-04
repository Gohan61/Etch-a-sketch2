const containerDiv = document.createElement("div");
let squareDivs = [];

for (let i = 0; i < 256; i++) {
  squareDivs = document.createElement("div");
  containerDiv.appendChild(squareDivs);
  squareDivs.setAttribute("class", "innerDiv");
}

containerDiv.setAttribute("class", "container");
document.body.appendChild(containerDiv);

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
