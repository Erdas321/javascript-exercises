const palindromes = function (string) {
    let regex = /[^a-zA-Z0-9]/g;
    string = string.toLowerCase();
    let replacedString = string.replace(regex, "");
    let reverseString = replacedString.split('').reverse().join('');
    return replacedString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
