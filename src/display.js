import Task from "./task.js";
import Project from "./project.js";
import { findSelectedProject, project, projectID } from "./controller.js";
import { projects } from "./data.js";
import { format } from "date-fns";

export { buildProjectView, displayAllTasks };

// dynamic desktop centering for large screen
// const column1 = main.querySelector(".column1");
// let column1Width = column1.offsetWidth;

// const adjustColumn1Position = function () {
//   if (window.innerWidth > 935) {
//     column1.style.marginLeft = `-${column1Width}px`;
//   } else {
//     column1.style = "";
//   }
// };
// adjustColumn1Position();

// window.addEventListener("resize", () => {
//   column1Width = column1.offsetWidth;
//   adjustColumn1Position();
// });

// cache dom
const main = document.querySelector("main");

// reused dom elements
const taskEntry = main.querySelector(".task-entry");
const taskEntryForm = taskEntry.querySelector("form#task-entry");
const projectEntry = main.querySelector(".project-entry");
const projectEntryForm = projectEntry.querySelector("form#project-entry");
const selectProjectSelector = main.querySelector("#selectProject");

// create dom element factory function
const createDomElement = (type, attributes) => {
  const el = document.createElement(type);
  if (attributes) {
    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }
  return el;
};

// build project view
const buildProjectView = function (projects) {
  findSelectedProject(projects);
  buildProjectSelector();
  project.listTasks();
};

// display all tasks
const taskList = main.querySelector(".task-list");
let taskTitle = "";
const displayAllTasks = function (project) {
  taskList.textContent = "";
  project.sortTasks().forEach((task, index) => {
    displayTask(task, index);
  });
};

// display one(1) task
const displayTask = function (task, index) {
  const taskContainer = createDomElement("div", { class: "task-container" });
  // always visible task content
  displayTaskTitle(task, taskContainer);
  // after above to set completed style on newly created title element
  displayTaskCheckbox(task, taskContainer);
  displayTaskDueDate(task, taskContainer);
  displayTaskPriority(task, taskContainer);
  // expandable task content
  const more = createDomElement("div", { class: "more" });
  taskContainer.appendChild(more);
  displayTaskDescription(task, more);
  const taskButtons = createDomElement("div", { class: "task-buttons" });
  displayTaskEdit(task, index, taskButtons);
  displayTaskDelete(index, taskButtons);
  more.appendChild(taskButtons);
  // append taskContainer
  taskList.appendChild(taskContainer);
  // watch taskContainer
  taskContainer.addEventListener("click", () => {
    more.classList.toggle("show-more");
  });
};

const displayTaskCheckbox = function (task, taskContainer) {
  const taskCheckbox = createDomElement("input", {
    class: "task-checkbox",
    type: "checkbox",
  });
  if (task.complete === true) {
    taskCheckbox.setAttribute("checked", "");
    taskContainer.classList.toggle("complete");
    taskTitle.classList.toggle("complete");
  }
  taskContainer.appendChild(taskCheckbox);
  taskCheckbox.addEventListener("click", (event) => {
    event.stopPropagation();
    task.complete === false ? task.setComplete(true) : task.setComplete(false);
    displayAllTasks(project);
  });
};

const displayTaskTitle = function (task, taskContainer) {
  taskTitle = createDomElement("div", { class: "task-title" });
  const taskTitleBox = createDomElement("span"); // need span for ellipsis to work
  taskTitleBox.textContent = task.title;
  taskContainer.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleBox);
};

const displayTaskDueDate = function (task, taskContainer) {
  const taskDueDate = createDomElement("div", { class: "task-due-date" });
  if (task.dueDate) {
    taskDueDate.textContent = format(
      new Date(task.dueDate),
      "eee, h:mm bbb (M/d)"
    );
  }
  taskContainer.appendChild(taskDueDate);
};

const displayTaskPriority = function (task, taskContainer) {
  const taskPriority = createDomElement("select", {
    class: "task-priority",
    name: "priority",
    id: "priority",
  });
  const priorityOptions = ["high", "normal", "low"];
  priorityOptions.forEach((level) => {
    const option = createDomElement("option", { value: level });
    if (level === task.priority) {
      option.setAttribute("selected", "");
    }
    option.textContent = level;
    taskPriority.appendChild(option);
  });
  if (task.priority === "high") {
    taskPriority.classList.add("high");
  } else if (task.priority === "low") {
    taskPriority.classList.add("low");
  }
  taskContainer.appendChild(taskPriority);
  taskPriority.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  taskPriority.addEventListener("change", (event) => {
    task.priority = event.target.value;
    displayAllTasks(project);
  });
};

const displayTaskDescription = function (task, more) {
  const taskDescription = createDomElement("div", {
    class: "task-description",
  });
  if (task.description) {
    taskDescription.textContent = task.description;
  } else {
    taskDescription.textContent = `add description`;
  }
  more.appendChild(taskDescription);
};

const displayTaskEdit = function (task, index, taskButtons) {
  const taskEditBtn = createDomElement("button", {
    class: "task-edit",
    ["data-id"]: index,
  });
  taskEditBtn.textContent = "edit";
  taskButtons.appendChild(taskEditBtn);
  taskEditBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    taskEntry.classList.toggle("overlay");
    taskEntryForm.setAttribute("action", "edit");
    taskEntryForm.setAttribute("data-id", event.target.getAttribute("data-id"));
    taskEntryForm.querySelector("#title").value = task.title;
    taskEntryForm.querySelector("#description").value = task.description;
    taskEntryForm.querySelector("#dueDate").value = task.dueDate;
    taskEntryForm.querySelector("#priority").value = task.priority;
  });
};

const displayTaskDelete = function (index, taskButtons) {
  const taskDeleteBtn = createDomElement("button", {
    class: "delete-btn",
    ["data-id"]: index,
  });
  taskDeleteBtn.textContent = "delete";
  taskButtons.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    project.deleteTask(taskDeleteBtn.getAttribute("data-id"));
  });
};

// ready app for project(list) additions and edits
const readyForProjects = (function () {
  // listen for "add list" click
  const addProjectLink = main.querySelector(".add-list > a");
  addProjectLink.addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.add("overlay");
  });
  // listen for "edit list" click
  main.querySelector(".edit-list > a").addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.add("overlay");
    projectEntry.classList.add("editing");
    projectEntryForm.setAttribute("action", "edit");
    projectEntryForm.querySelector("#title").value = project.title;
    projectEntryForm.querySelector("label").textContent = "Change Name";
  });
  // get project form submissions
  projectEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectEntryForm.getAttribute("action") === "add") {
      project.createProject(projectEntryForm.elements["title"].value);
    } else if (projectEntryForm.getAttribute("action") === "edit") {
      project.editProject(projectEntryForm.elements["title"].value);
    }
    resetProjectEntry();
    buildProjectView(projects);
  });
  // listen for "delete COMPLETED tasks" button click
  projectEntry
    .querySelector("button.delete-completed-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("completed");
      resetProjectEntry();
    });
  // listen for "delete ALL tasks" button click
  projectEntry
    .querySelector("button.delete-all-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("all");
      resetProjectEntry();
    });
  // close button
  projectEntryForm.querySelector(".close-btn").addEventListener("click", () => {
    resetProjectEntry();
  });
  const resetProjectEntry = function () {
    projectEntryForm.reset();
    projectEntryForm.setAttribute("action", "add");
    projectEntry.classList.remove("overlay");
    projectEntry.classList.remove("editing");
    projectEntryForm.querySelector("label").textContent = "List Name";
  };
})();

// build project selector with current projects
const buildProjectSelector = function () {
  selectProjectSelector.textContent = "";
  // NEED TO SORT BY SELECTED FIRST THEN ALPHA
  projects.forEach((project, index) => {
    const selectOption = createDomElement("option", { value: index });
    if (project.selected === true) {
      selectOption.setAttribute("selected", "");
    }
    selectOption.textContent = project.title;
    selectProjectSelector.appendChild(selectOption);
  });
};

// switch project view
const selectProject = (function () {
  selectProjectSelector.addEventListener("change", (event) => {
    const index = event.target.value;
    project.switchSelectedProject(index);
    buildProjectView(projects);
  });
})();

// ready app for task additions and edits
const readyForTasks = (function () {
  const taskEditLink = main.querySelector(".add-task > a");
  taskEditLink.addEventListener("click", (event) => {
    event.preventDefault();
    taskEntry.classList.toggle("overlay");
  });
  taskEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskInputs = [
      taskEntryForm.elements["title"].value,
      taskEntryForm.elements["description"].value,
      taskEntryForm.elements["dueDate"].value,
      taskEntryForm.elements["priority"].value,
    ];
    const index = event.target.getAttribute("data-id");
    if (taskEntryForm.getAttribute("action") === "add") {
      project.createTask(...taskInputs);
    } else if (taskEntryForm.getAttribute("action") === "edit") {
      project.tasks[index].updateTask(...taskInputs);
      taskEntryForm.setAttribute("action", "add");
      project.listTasks();
    }
    taskEntryForm.reset();
    taskEntry.classList.toggle("overlay");
  });
  // close button
  taskEntryForm.querySelector(".close-btn").addEventListener("click", () => {
    taskEntryForm.reset();
    taskEntry.classList.toggle("overlay");
  });
})();
