var form = document.querySelector("form")
var input = document.querySelector("input");
form.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log(input.value);// this shows the result for a while and dissapears, as once you submit input form clears
  // create a div element
  const newTask = document.createElement("div");
  // update the div with new task value coming from the form
  newTask.innerText = input.value;
  // append the newly created div with task value to the body
  document.querySelector("body").appendChild(newTask);
  // once the task is added clear the input field
  input.value = '';

});
