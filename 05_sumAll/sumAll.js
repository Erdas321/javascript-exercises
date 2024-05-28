const sumAll = function(num1, num2) {
    let result = 0;
    if (isNaN(num1) || isNaN(num2)) {
        return "Error";
    } else if (num1 < 0 || num2 < 0) {
        return "Error";
    } else {
        result = (((num2 - num1) + 1) / 2) * (num2 + num1);
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
