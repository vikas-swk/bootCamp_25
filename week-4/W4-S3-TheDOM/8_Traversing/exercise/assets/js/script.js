var liElement = document.querySelectorAll("li");
liElement.forEach(function(li){
    li.style.color = "red";
})

var firstWidget =document.querySelector(".widget");
firstWidget.querySelector("h2").textContent = "Reports";

var thirdWidget = document.querySelector(".widget:last-child");
thirdWidget.querySelector("h2").textContent = "Optimise performance metrics here.";
