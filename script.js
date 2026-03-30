document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("textbox");
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");
  const convertButton = document.querySelector("button");
  const resultLabel = document.querySelector(".text-2");

  convertButton.addEventListener("click", function () {
    let value = Number(input.value);
    let from = fromUnit.value;
    let to = toUnit.value;
    let result;

    if (isNaN(value)) {
      resultLabel.textContent = "Please enter a valid number";
      return;
    }

    if (from === "Celcius") {
      if (to === "Fahrenheit") {
        result = (value * 9) / 5 + 32;
      } else if (to === "Kelvin") {
        result = value + 273.15;
      } else {
        result = value;
      }
    } else if (from === "Fahrenheit") {
      if (to === "Celcius") {
        result = ((value - 32) * 5) / 9;
      } else if (to === "Kelvin") {
        result = ((value - 32) * 5) / 9 + 273.15;
      } else {
        result = value;
      }
    } else if (from === "Kelvin") {
      if (to === "Celcius") {
        result = value - 273.15;
      } else if (to === "Fahrenheit") {
        result = ((value - 273.15) * 9) / 5 + 32;
      } else {
        result = value;
      }
    }

    resultLabel.textContent = "Result: " + result;
  });
});
