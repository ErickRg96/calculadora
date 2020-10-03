const formatNumber = (number) => {
    if (Number.isInteger(number)) {
        number = number.toString();

        if (number.length > 3) {
            number =
                number.substr(0, number.length - 3) +
                "," +
                number.substr(number.length - 3, 3);
        }
    }

    return number;
};

export default formatNumber;
