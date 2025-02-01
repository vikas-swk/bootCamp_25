// 1. use document.getElementById to select the searchTerm Button

// 2. use document.getElementById to select the searchButton Button

// 3. add an event listener to the searchButton that calls the search function when clicked

//function search() {
  // 4. use the value property of the searchInput to get the search term
  // 5. select the searches div using document.getElementById
  // 6. create a new li element using document.createElement
  // 7. set the innerHTML of the new paragraph to the search term
  // 8. append the new paragraph to the searches div
//}

// 1. use document.getElementById to select the searchTerm input
var searchTermInput = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", search);

function search() {
  // 4. use the value property of the searchTerm input to get the search term
  var searchTerm = searchTermInput.value;

  // 5. select the searches ul using document.getElementById
  var searches = document.getElementById("searches");

  // 6. create a new li element using document.createElement
  var newLi = document.createElement("li");

  // 7. set the innerHTML of the new li to the search term
  newLi.innerHTML = searchTerm;

  // 8. append the new li to the searches ul
  searches.appendChild(newLi);
}