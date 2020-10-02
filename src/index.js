const form = document.forms[0];

const validateNumber = (number, error) => {
    if (number === "") {
        alert("Ingresa un numero");
        error = true;
        return error;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let operation = document.querySelector('input[name="operation"]:checked');
    let number = form.number.value;

    // Field validation
    const pattern = new RegExp("^([0-9])*$");

    if (number === "" || !pattern.test(number)) {
        alert("Ingresa un numero");
        e.preventDefault();
        return;
    }

    console.log("Hilo principal");
});
