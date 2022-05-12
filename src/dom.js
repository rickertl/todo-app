import Project from "./project.js";
import { project1 } from "./data.js";

export { taskRows };

// DISPLAY ALL TASKS
const taskList = document.querySelector(".task-list ul");

function taskRows(project) {
  taskList.textContent = "";
  project.tasks.forEach((task, index) => {
    taskRow(task, index);
  });
  listenForDelete(project);
}

function taskRow(task, index) {
  const li = document.createElement("li");
  li.textContent = task.title;
  taskList.appendChild(li);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-id", index);
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  li.appendChild(deleteBtn);
}

function listenForDelete(project) {
  const deleteBtns = taskList.querySelectorAll("button.delete-btn");
  deleteBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-id");
      project.deleteTask(index);
      taskRows(project);
    });
  });
}

// ENTER NEW TASK
const addTaskToProject = function (event) {
  let project = project1;
  event.preventDefault();
  const newTask = project.createTask(
    form.elements["title"].value,
    form.elements["description"].value,
    form.elements["dueDate"].value,
    form.elements["priority"].value
  );
  form.reset();
  // form.classList.toggle("show-form");
  project.listTasks();
};

// get form submission
const form = document.querySelector("form");
form.onsubmit = addTaskToProject;
