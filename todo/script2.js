let task = document.getElementById("task");
let itemContainer = document.getElementById("item"); // Parent container for tasks

function add() {
    if (task.value.trim() === "") {
        alert("Please enter a task");
    } else {
        let newTask = document.createElement("div");
        newTask.classList.add("task-item"); // Adding a class for styling
        newTask.innerText = task.value;

        itemContainer.appendChild(newTask); // Append the new task to the container
    }

    task.value = ""; // Clear the input field
}
