var header = document.createElement("h1");
var amountOfSquares = 0;
var containerDiv = document.createElement("div");
var squareDivs;
var popupButton = document.createElement("button");
//Grid elements + interaction
function createDivs(amountOfSquares) {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }
    for (var i = 0; i < amountOfSquares; i++) {
        squareDivs = document.createElement("div");
        containerDiv.appendChild(squareDivs);
        squareDivs.setAttribute("class", "innerDiv flexBasis");
    }
    containerDiv.setAttribute("class", "container");
    document.body.appendChild(containerDiv);
    var setFlexBasis = document.querySelectorAll(".flexBasis");
    setFlexBasis.forEach(function (el) {
        return el.setAttribute("style", "display: flex; flex-grow: 1; flex-shrink: 0; flex-basis: calc(100% / ".concat(Math.pow(amountOfSquares, 1 / 2), ")"));
    });
    var hoveredDiv = document.querySelectorAll(".innerDiv");
    hoveredDiv.forEach(function (el) {
        return el.addEventListener("mouseover", function color(coloredDiv) {
            if (coloredDiv.currentTarget instanceof HTMLDivElement) {
                coloredDiv.currentTarget.style.backgroundColor =
                    "rgb(" +
                        Math.random() * 250 +
                        "," +
                        Math.random() * 250 +
                        "," +
                        Math.random() * 250 +
                        ")";
            }
        });
    });
    hoveredDiv.forEach(function (el) {
        return el.addEventListener("mouseout", function noncolor(whiteDiv) {
            if (whiteDiv.currentTarget instanceof HTMLDivElement) {
                whiteDiv.currentTarget.style.backgroundColor = "";
            }
        });
    });
}
createDivs(2 * 2);
//Header styling
header.textContent = "Etch-a-sketch";
header.setAttribute("style", "color: blue");
document.body.prepend(header);
//Button interaction
popupButton.textContent = "Press me";
popupButton.addEventListener("click", function askUser() {
    amountOfSquares = Number(prompt("Enter a number for the amount of squares in the grid", "0"));
    if (amountOfSquares > 100) {
        alert("Please enter a number below 101");
    }
    else {
        createDivs(amountOfSquares * amountOfSquares);
    }
});
document.body.insertBefore(popupButton, containerDiv);
