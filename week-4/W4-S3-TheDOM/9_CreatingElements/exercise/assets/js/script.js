// TODO: Add 2 new items to the sidebar called "Register" and "Help".

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?

var liElement = document.querySelectorAll("li");
liElement.forEach(function(li){
    li.style.color = "red";
})

var firstWidget =document.querySelector(".widget");
firstWidget.querySelector("h2").textContent = "Reports";

var thirdWidget = document.querySelector(".widget:last-child");
thirdWidget.querySelector("h2").textContent = "Optimise performance metrics here.";

// Add 2 new items to the sidebar called "Register" and "Help".
var sidebarList = document.querySelector(".sidebar ul");
var sidebarNewItem = document.createElement("li");
sidebarNewItem.textContent = "Register";
sidebarList.appendChild(sidebarNewItem);

var sidebarNewItem = document.createElement("li");
sidebarNewItem.textContent = "Help";
sidebarList.appendChild(sidebarNewItem);

// Add the Help link between Reports and Settings  
var settings = document.querySelector(".sidebar ul li:nth-child(4)");
var help = document.querySelector(".sidebar ul li:last-child");
sidebarList.insertBefore(help, settings);
