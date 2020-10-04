import formatNumber from "./formatNumber.js";

export const factorial = (number) => {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    result = formatNumber(result);

    return result;
};

export const sumatoria = (number) => {
    let result = 0;

    for (let i = 0; i <= number; i++) {
        result = result + i;
    }

    result = formatNumber(result);

    return result;
};

export const fibonacci = (number) => {
    let result;
    let array = [];

    for (let i = 0; i < number; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }

    result = array.toString();

    return result;
};

export const aleatorio = (number) => {
    let result, operation;
    let option = Math.random() * 2 + 1;
    option = Math.round(option);

    switch (option) {
        case 1:
            result = factorial(number);
            operation = "factorial";
            break;

        case 2:
            result = sumatoria(number);
            operation = "sumatoria";
            break;

        case 3:
            result = fibonacci(number);
            operation = "fibonacci";
            break;

        default:
            break;
    }

    return [result, operation];
};
