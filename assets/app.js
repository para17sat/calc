console.log("%ccalculator is running...", "color: red");
let displayScreen = document.querySelector(".display");
let topDisplay = displayScreen.firstElementChild;
let bottomDisplay = displayScreen.lastElementChild;
let buttonsDiv = document.querySelector(".buttons");
let count = 0;
let result = "";

buttonsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("AC")) {
    displayReset(bottomDisplay);
    displayReset(topDisplay);
  } else if (e.target.classList.contains("±")) {
    if (bottomDisplay.innerHTML[0] === "-") {
      bottomDisplay.innerHTML = bottomDisplay.innerHTML.substring(1);
    } else {
      bottomDisplay.innerHTML = "-" + bottomDisplay.innerHTML;
    }
  } else if (e.target.classList.contains("ops")) {
    if (!bottomDisplay.innerHTML) {
      bottomDisplay.innerHTML = "";
    } else {
      işlem();
      topDisplay.innerHTML = bottomDisplay.innerHTML + e.target.innerHTML;
      displayReset(bottomDisplay);
    }
  } else if (e.target.classList.contains("nums")) {
    addNumber(e.target.innerHTML);
  } else if (e.target.classList.contains("%")) {
    bottomDisplay.innerHTML = parseFloat(bottomDisplay.innerHTML / 100);
  } else if (e.target.classList.contains(".")) {
    let str = bottomDisplay.textContent;
    if (str[str.length - 1] == ".") {
      addNumber("");
    } else if (str.length == 0) {
      bottomDisplay.innerHTML = "0.";
    } else {
      addNumber(".");
    }
  } else if (e.target.classList.contains("=")) {
    işlem();
    displayReset(topDisplay);
  }
});

function addNumber(content) {
  bottomDisplay.innerHTML += content;
}

function displayReset(variable) {
  variable.innerHTML = "";
}

function işlem() {
  if (topDisplay.innerHTML.slice(-1) == "+") {
    bottomDisplay.innerHTML = parseFloat(
      (+topDisplay.innerHTML.slice(0, -1) + +bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "-") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) - bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "x") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) * bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "/") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) / bottomDisplay.innerHTML).toFixed(2)
    );
  }
}
