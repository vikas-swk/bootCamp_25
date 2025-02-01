// Select the input field and the add task button
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTaskButton");

// Add an event listener to the add task button
addTaskButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    // Get the task input value
    var task = taskInput.value.trim();

    // Validate the task input (non-empty)
    if (task === "") {
        alert("Please enter a valid task.");
        return;
    }

    // Select the task list
    var taskList = document.getElementById("taskList");

    // Create a new li element
    var newLi = document.createElement("li");

    // Set the innerHTML of the new li to the task
    newLi.textContent = task;

    // Create a delete button for the task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(newLi);
    });

    // Create an edit button for the task
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.addEventListener("click", function() {
        if (editButton.textContent === "Edit") {
            var taskText = newLi.firstChild.textContent;
            var editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskText;
            newLi.insertBefore(editInput, newLi.firstChild);
            newLi.removeChild(newLi.childNodes[1]);
            editButton.textContent = "Save";
        } else {
            var updatedTask = newLi.firstChild.value.trim();
            if (updatedTask === "") {
                alert("Please enter a valid task.");
                return;
            }
            var taskTextNode = document.createTextNode(updatedTask);
            newLi.insertBefore(taskTextNode, newLi.firstChild);
            newLi.removeChild(newLi.childNodes[1]);
            editButton.textContent = "Edit";
        }
    });

    // Append the edit and delete buttons to the new li
    newLi.appendChild(editButton);
    newLi.appendChild(deleteButton);

    // Append the new li to the task list
    taskList.appendChild(newLi);

    // Clear the input field
    taskInput.value = "";
}