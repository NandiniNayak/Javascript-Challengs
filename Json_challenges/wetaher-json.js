var data = require('./weather.json');

var sunrise = data.query.results.channel.astronomy.sunrise;
console.log(sunrise);

var sunset = data.query.results.channel.astronomy.sunset;
console.log(sunset);


function convertToTwoDecimal(input){
   // return input.getTime.toPrecision(4);
   // convert to time : getTime in Dates
   // hint enter Number.prototype in browser console for hint
}

var sunrisePrecison = convertToTwoDecimal(sunrise);
var sunsetPrecision = convertToTwoDecimal(sunset);

console.log(sunrisePrecison);
console.log(sunsetPrecison);
