import { factorial, sumatoria, fibonacci, aleatorio } from "./operations.js";

const form = document.forms[0];
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const datailsOperation = document.getElementById("card-result__operation");
const resultOperation = document.getElementById("card-result__result");
const btnClose = document.getElementById("btn--close");
const iconClose = document.getElementById("card-result__close");
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
            break;

        case "sumatoria":
            result = sumatoria(number);
            break;

        case "fibonacci":
            result = fibonacci(number);
            break;

        case "aleatorio":
            let resultRandom = aleatorio(number);
            result = resultRandom[0];
            operation = resultRandom[1];
            break;

        default:
            break;
    }

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

iconClose.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
});

btnAgain.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    form.reset();
});
