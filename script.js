//Results
const results = document.querySelector(".results");

// Numbered Buttons
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const zeroBtn = document.getElementById("zero");
const numBts = document.querySelectorAll('[data-type="numbers"]');

// Calculation Buttons
const addBtn = document.getElementById("plus");
const operatorBtns = document.querySelectorAll('[data-type="operators"]');
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("division");
const multiplyBtn = document.getElementById("multiply");

// Miscellaneous Buttons
const equalBtn = document.getElementById("equal-btn");
const resetBtn = document.getElementById("reset-btn");
const deleteBtn = document.getElementById("delete-btn");

// Calcutator Class
let currNum = 0;
let prevNum = 0;
let numsArr = [];

class Calculator {
  reset() {
    results.textContent = "";
    numsArr = [];
  }

  displayNums(value, type, element) {
    if (type === "numbers") {
      numsArr.push(value);
      currNum = numsArr.join("");
      results.textContent = currNum;
    }
    if (type === "delete") {
      numsArr.splice(numsArr.length - 1, numsArr.length - 1);
      currNum = numsArr.join("");
      results.textContent = currNum;
    }

    if (type === "operators") {
      this.reset();
      prevNum = currNum;
      results.dataset.operator = value;
    }

    if (type === "equals") {
      const operator = results.dataset.operator;
      this.calculate(prevNum, operator, currNum);
    }
  }
  calculate(prevNum, operatorValue, currNum) {
    let answer = 0;
    switch (operatorValue) {
      case "+":
        answer = parseInt(prevNum) + parseInt(currNum);
        break;
      case "-":
        answer = parseInt(prevNum) - parseInt(currNum);
        break;
      case "/":
        answer = parseInt(prevNum) / parseInt(currNum);
        break;
      case "*":
        answer = parseInt(prevNum) * parseInt(currNum);
        break;
    }
    results.textContent = answer;
  }
}

const calc = new Calculator(results);

// Event Listeners
numBts.forEach((n) => {
  n.addEventListener("click", () => {
    calc.displayNums(n.dataset.value, n.dataset.type);
  });
});

operatorBtns.forEach((o) => {
  o.addEventListener("click", () => {
    calc.displayNums(o.dataset.value, o.dataset.type, o);
  });
});

equalBtn.addEventListener("click", function (event) {
  calc.displayNums(0, event.target.dataset.type, event.target);
});

resetBtn.addEventListener("click", calc.reset);

deleteBtn.addEventListener("click", function (event) {
  calc.displayNums(0, event.target.dataset.type, event.target);
});

//Theme Sliders
const title = document.querySelector(".title-theme-slider h1");
const themeTitle = document.querySelector(".theme");
const themeNums = document.querySelectorAll(".nums h3");
const sliderBg = document.querySelector(".slider");
const toggleBtnOne = document.querySelector(".slider-btn-1");
const toggleBtnTwo = document.querySelector(".slider-btn-2");
const toggleBtnThree = document.querySelector(".slider-btn-3");
const resultScreen = document.querySelector(".result-container");
const numContainer = document.querySelector(".numbers-container");

//Slider Function
const themeOne = function () {
  document.body.style.backgroundColor = "#3a4764";
  title.style.color = "white";
  themeTitle.style.color = "white";
  themeNums.forEach((n) => {
    n.style.color = "white";
  });
  sliderBg.style.backgroundColor = "#232c43";
  toggleBtnOne.style.backgroundColor = "#d03f2f";
  toggleBtnTwo.style.backgroundColor = "#232c43";
  toggleBtnThree.style.backgroundColor = "#232c43";
  resultScreen.style.backgroundColor = "#182034";
  results.style.color = "white";
  numContainer.style.backgroundColor = "#232c43";
  numBts.forEach((n) => {
    n.style.backgroundColor = "#eae3dc";
    n.style.color = "#444b5a";
    n.style.borderBottomColor = "#b4a597";
  });
  operatorBtns.forEach((o) => {
    o.style.backgroundColor = "#eae3dc";
    o.style.color = "#444b5a";
    o.style.borderBottomColor = "#b4a597";
  });
  deleteBtn.style.backgroundColor = "#637097";
  deleteBtn.style.borderBottomColor = "#404e72";
  resetBtn.style.backgroundColor = "#637097";
  resetBtn.style.borderBottomColor = "#404e72";
  equalBtn.style.backgroundColor = "#d03f2f";
  equalBtn.style.borderBottomColor = "#93261a";
  equalBtn.style.color = "white";
};

const themeTwo = function () {
  document.body.style.backgroundColor = "#e6e6e6";
  title.style.color = "#35352c";
  themeTitle.style.color = "#35352c";
  themeNums.forEach((n) => {
    n.style.color = "#35352c";
  });
  sliderBg.style.backgroundColor = "#d1cccc";
  toggleBtnOne.style.backgroundColor = "#d1cccc";
  toggleBtnTwo.style.backgroundColor = "#ca5502";
  toggleBtnThree.style.backgroundColor = "#d1cccc";
  resultScreen.style.backgroundColor = "#ededed";
  results.style.color = "#35352c";
  numContainer.style.backgroundColor = "#d1cccc";
  numBts.forEach((n) => {
    n.style.backgroundColor = "#e5e4e1";
    n.style.color = "#35352c";
    n.style.borderBottomColor = "#a69d91";
  });
  operatorBtns.forEach((o) => {
    o.style.backgroundColor = "#e5e4e1";
    o.style.color = "#35352c";
    o.style.borderBottomColor = "#a69d91";
  });
  deleteBtn.style.backgroundColor = "#377f86";
  deleteBtn.style.borderBottomColor = "#1b5f65";
  resetBtn.style.backgroundColor = "#377f86";
  resetBtn.style.borderBottomColor = "#1b5f65";
  equalBtn.style.backgroundColor = "#ca5502";
  equalBtn.style.borderBottomColor = "#893901";
  equalBtn.style.color = "white";
};

const themeThree = function () {
  document.body.style.backgroundColor = "#160628";
  title.style.color = "#ffe53d";
  themeTitle.style.color = "#ffe53d";
  themeNums.forEach((n) => {
    n.style.color = "#ffe53d";
  });
  sliderBg.style.backgroundColor = "#1d0934";
  toggleBtnOne.style.backgroundColor = "#1d0934";
  toggleBtnTwo.style.backgroundColor = "#1d0934";
  toggleBtnThree.style.backgroundColor = "#00e0d1";
  resultScreen.style.backgroundColor = "#1d0934";
  results.style.color = "#ffe53d";
  numContainer.style.backgroundColor = "#1d0934";
  numBts.forEach((n) => {
    n.style.backgroundColor = "#341c4f";
    n.style.color = "#ffe53d";
    n.style.borderBottomColor = "#871c9c";
  });
  operatorBtns.forEach((o) => {
    o.style.backgroundColor = "#341c4f";
    o.style.color = "#ffe53d";
    o.style.borderBottomColor = "#871c9c";
  });
  deleteBtn.style.backgroundColor = "#58077d";
  deleteBtn.style.borderBottomColor = "#bc15f4";
  resetBtn.style.backgroundColor = "#58077d";
  resetBtn.style.borderBottomColor = "#bc15f4";
  equalBtn.style.backgroundColor = "#00e0d1";
  equalBtn.style.borderBottomColor = "#6cf9f2";
  equalBtn.style.color = "#1b2428";
};

toggleBtnOne.addEventListener("click", themeOne);
toggleBtnTwo.addEventListener("click", themeTwo);
toggleBtnThree.addEventListener("click", themeThree);
