// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get and trim task input
        const taskText = taskInput.value.trim();

        // Check if task is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item (li)
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key in input
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Call addTask when DOM content is loaded (for later persistence)
    // (Currently does nothing since we don’t use localStorage yet)
    addTask();
});
