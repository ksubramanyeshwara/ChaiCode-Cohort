const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

taskInput.addEventListener("keydown", (e) => {
  //
  if (e.key === "Enter" || e.key === "NumpadEnter") {
    e.preventDefault();
    addButton.click();
  }

  if (e.key === "Escape") {
    taskInput.value = "";
    if (addButton.textContent === "Update") {
      addButton.textContent = "Add";

      // Re-enable delete button on escape
      const deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach((button) => {
        button.removeAttribute("disabled"); // Remove HTML disabled attribute
        button.removeAttribute("aria-disabled"); // For accessibility
      });

      addButton.removeEventListener("click", updateTask);
      addButton.addEventListener("click", addTask);
    }
  }
});

function addTask() {
  const taskInputValue = taskInput.value;
  if (taskInputValue !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Create and add checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("complete-checkbox");
    taskItem.appendChild(checkbox);

    // Create and add p element
    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    taskText.textContent = taskInputValue;
    taskItem.appendChild(taskText);

    // Create and add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("delete-button");
    taskItem.appendChild(editButton);

    // Create and add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("aria-label", "Delete Task");
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    // Remove empty task  message if task exists
    const emptyList = document.querySelector(".empty-list");
    if (emptyList) {
      emptyList.remove();
    }

    // completed task checking
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskItem.classList.add("completed");
        // count all checked checkbox and display
        const completedTaskCount = document.querySelectorAll(
          ".complete-checkbox:checked"
        ).length;
        completedTasks.textContent = `Completed Tasks: ${completedTaskCount}`;
      } else {
        taskItem.classList.remove("completed");
        const completedTasksCount = document.querySelectorAll(
          ".complete-checkbox:checked"
        ).length;
        completedTasks.textContent = `Completed Tasks: ${completedTasksCount}`;
      }
    });

    // Add total task count
    totalTasks.textContent = `Total Tasks: ${taskList.children.length}`;

    editButton.addEventListener("click", () => {
      taskInput.value = taskText.textContent;
      addButton.textContent = "Update";
      taskInput.focus(); // Add focus here when edit is clicked

      // disable during edit
      deleteButton.setAttribute("disabled", "");
      deleteButton.setAttribute("aria-adisabled", "true");

      // function for update the task
      const updateTask = () => {
        addButton.textContent = "Add";
        taskText.textContent = taskInput.value;
        taskInput.value = "";
        taskInput.focus(); // Add focus here when edit is clicked

        // Re-enable delete button after update
        deleteButton.removeAttribute("disabled"); // Remove HTML disabled attribute
        deleteButton.removeAttribute("aria-disabled"); // For accessibility

        // Remove this update listener and restore the original addTask listener
        addButton.removeEventListener("click", updateTask);
        addButton.addEventListener("click", addTask);
      };

      // Remove original addTask listener
      addButton.removeEventListener("click", addTask);
      // Add the one-time update listener
      addButton.addEventListener("click", updateTask);
    });

    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskInput.value = "";
  }
}

addButton.addEventListener("click", addTask);
