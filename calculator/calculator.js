const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "sin") {
      var e = Math.sin(display.innerText); let fixed = e.toLocaleString(12); display.innerText = `${fixed}`;
    } else if (item.id == "cos") {
      var e = Math.cos(display.innerText); let fixed = e.toLocaleString(12); display.innerText = `${fixed}`;
    } else if (item.id == "tan") {
      var e = Math.tan(display.innerText); let fixed = e.toLocaleString(12); display.innerText = `${fixed}`;
    } else if (item.id == "x2") {
      var text = display.innerText; let e = Math.pow(text, 2); let fixed = e.toFixed(12); display.innerText = `${fixed}`;
    } else if (item.id == "x3") {
      var text = display.innerText; let e = Math.pow(text, 3); let fixed = e.toFixed(12); display.innerText = `${fixed}`;
    } else if (item.id == "sqrt2") {
      var text = display.innerText; let e = Math.pow(text, 1/2); let fixed = e.toFixed(12); display.innerText = `${fixed}`;
    }
    else if (item.id == "sqrt3") {
      var text = display.innerText; let e = Math.pow(text, 1/3); let fixed = e.toFixed(12); display.innerText = `${fixed}`;
    }
    
    else {
      display.innerText += item.id;
    }z
  };
});



const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
