const convertToCelsius = function(fahrenheit) {
  return Math.floor(((fahrenheit - 32) * 5/9) * 10) / 10; 
};

const convertToFahrenheit = function(celsius) {
  return Math.floor(((celsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
