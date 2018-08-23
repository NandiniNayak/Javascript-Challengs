// console.log("hello"); // check if file was included in html
function addDog(){
  var dogName = prompt("New dog's name");
  var dogLocation = prompt(`Enter ${dogName}'s location`);
  var unorderedList = document.createElement("ul");
  var listItem = document.createElement("li");
  unorderedList.appendChild(listItem);
  var node = document.createTextNode(`${dogName}(${dogLocation})`);
  listItem.appendChild(node);
  var element = document.getElementById("new-dog");
  element.appendChild(unorderedList);
}
