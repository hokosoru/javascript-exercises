const convertToCelsius = function(fahrenheit) {
  let toCelsius = (5/9 * (fahrenheit - 32));

  if(toCelsius % 1 == 0){
    return parseFloat(toCelsius.toFixed(0));
  }else{
    return parseFloat(toCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let toFahrenheit = (celsius * 9/5) + 32;

  if(toFahrenheit % 1 == 0){
    return parseFloat(toFahrenheit.toFixed(0));
  }else{
    return parseFloat(toFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
