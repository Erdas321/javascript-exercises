const repeatString = function(word, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += word;
    }
    return times < 0 ? "Error" : result;
};

// Do not edit below this line
module.exports = repeatString;
