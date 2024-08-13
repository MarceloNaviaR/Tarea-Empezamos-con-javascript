import sumar from "./sumador";
import multiplicar from "./multiplicador";

const firstSumar = document.querySelector("#primer-numero");
const secondSumar = document.querySelector("#segundo-numero");
const formSumar = document.querySelector("#sumar-form");
const divSumar = document.querySelector("#resultado-div");

const firstMultiplicar = document.querySelector("#primer-numero-multiplicar");
const secondMultiplicar = document.querySelector("#segundo-numero-multiplicar");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultado-multiplicacion-div");

formSumar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSumar.value);
  const secondNumber = Number.parseInt(secondSumar.value);

  divSumar.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplicar.value);
  const secondNumber = Number.parseInt(secondMultiplicar.value);

  divMultiplicar.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
