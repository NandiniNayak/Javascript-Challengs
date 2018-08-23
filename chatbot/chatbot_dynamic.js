var currentYear = new Date() .getUTCFullYear();
var questions  = [
  {"what is your name": `hi ${answer}!`},
  {"How old are you?": `You mest be born in ${currentYear - answer}`},
  {"you must program me further": ""}
]

var answer = "nands";
console.log(questions[0]);
