import { factorial, sumatoria, fibonacci, aleatorio } from "./operations.js";

const form = document.forms[0];
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const datailsOperation = document.getElementById("card-result__operation");
const resultOperation = document.getElementById("card-result__result");
const btnClose = document.getElementById("btn--close");
const btnAgain = document.getElementById("btn--try-again");

const validateNumber = (number, error) => {
    if (number === "") {
        alert("Ingresa un numero");
        error = true;
        return error;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let operation = form.operation.value;
    let number = form.number.value;
    let result;

    // Field validation
    const pattern = new RegExp("^([0-9])*$");

    if (number === "" || !pattern.test(number)) {
        alert("Ingresa un numero");
        e.preventDefault();
        return;
    }

    number = parseInt(number);

    switch (operation) {
        case "factorial":
            result = factorial(number);
            // console.log(result);
            break;

        case "sumatoria":
            result = sumatoria(number);
            // console.log(result);
            break;

        case "fibonacci":
            result = fibonacci(number);
            // console.log(result);
            break;

        case "aleatorio":
            let resultRandom = aleatorio(number);
            // console.log("aleatorio");
            result = resultRandom[0];
            operation = resultRandom[1];
            //console.log(result, operation);
            break;

        default:
            break;
    }

    console.log(`El resultado de la operacion ${operation} es: ${result}`);

    // Modal
    overlay.classList.add("active");
    modal.classList.add("active");

    datailsOperation.textContent = `${operation} de ${number}`;
    resultOperation.textContent = `${result}`;
});

btnClose.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
});

btnAgain.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");

    let number = form.number;
    number.value = "";
});
