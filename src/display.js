import Task from "./task.js";
import Project from "./project.js";
import { findSelectedProject, project, projectID } from "./controller.js";
import { projects } from "./data.js";
import { format } from "date-fns";

export { displayAllTasks, buildProjectView };

// cache dom
const main = document.querySelector("main");

// reused dom elements
const selectProjectForm = document.querySelector("form#select-project");
const selectProjectSelector = document.querySelector("#selectProject");
const taskEntry = document.querySelector(".task-entry");
const taskEntryForm = document.querySelector("form#task-entry");
const projectEntry = document.querySelector(".project-entry");
const projectEntryForm = document.querySelector("form#project-entry");
const editProjectLink = document.querySelector(".edit-list > a");

//  BUG if you edit list, back out, then try to add list

// ready task form
const getTaskFormSubmissions = (function () {
  const taskEditLink = document.querySelector(".add-task > a");
  taskEditLink.addEventListener("click", (event) => {
    event.preventDefault();
    taskEntry.classList.toggle("overlay");
  });
  const closeTaskEntryForm = document.querySelector(
    "form#task-entry .close-btn"
  );
  closeTaskEntryForm.addEventListener("click", () => {
    taskEntryForm.reset();
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
})();

// ready project form
const listenForProjectFormRequests = (function () {
  // get "add list" click
  const addProjectLink = document.querySelector(".add-list > a");
  addProjectLink.addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.toggle("overlay");
  });
  // get "edit list" click
  editProjectLink.addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.toggle("overlay");
    projectEntry.classList.toggle("editing");
    projectEntryForm.setAttribute("action", "edit");
    projectEntryForm.querySelector("#title").value = project.title;
    projectEntryForm.querySelector("label").textContent = "Change Name";
  });
  projectEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectEntryForm.getAttribute("action") === "add") {
      project.selected = false; // remove selected from current project
      const newProject = new Project(
        projectEntryForm.elements["title"].value,
        true
      );
      projects.push(newProject);
    } else if (projectEntryForm.getAttribute("action") === "edit") {
      project.title = projectEntryForm.elements["title"].value;
      projectEntryForm.setAttribute("action", "add");
    }
    projectEntryForm.reset();
    projectEntry.classList.toggle("overlay");
    projectEntry.classList.remove("editing");
    projectEntryForm.querySelector("label").textContent = "List Name";
    buildProjectView(projects);
  });
  const closeProjectEntryForm = document.querySelector(
    "form#project-entry .close-btn"
  );
  closeProjectEntryForm.addEventListener("click", () => {
    projectEntryForm.reset();
    projectEntry.classList.toggle("overlay");
    projectEntry.classList.remove("editing");
    projectEntryForm.querySelector("label").textContent = "List Name";
  });
})();

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
  // find currently selected project from data
  findSelectedProject(projects);
  editProjectLink.setAttribute("data-id", projectID);
  selectProjectSelector.textContent = "";
  // NEED TO SORT BY SELECTED FIRST THEN ALPHA
  projects.forEach((project, index) => {
    const selectOption = document.createElement("option");
    selectOption.setAttribute("value", index);
    if (project.selected === true) {
      selectOption.setAttribute("selected", "");
    }
    selectOption.textContent = project.title;
    selectProjectSelector.appendChild(selectOption);
  });
  selectProject();
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
  displayTaskCheckbox(task, taskContainer, taskTitle); // after taskTitle to get current value
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

const displayTaskTitle = function (task, taskContainer) {
  taskTitle = createDomElement("div", { class: "task-title" });
  const taskTitleBox = createDomElement("span"); // need span for ellipsis to work
  taskTitleBox.textContent = task.title;
  taskContainer.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleBox);
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

const displayTaskDueDate = function (task, taskContainer) {
  const taskDueDate = createDomElement("div", { class: "task-due-date" });
  if (task.dueDate) {
    taskDueDate.textContent = format(
      new Date(task.dueDate),
      "eee, h:m bbb (M/d)"
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
  taskDeleteBtn.textContent = "X";
  taskButtons.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const index = taskDeleteBtn.getAttribute("data-id");
    project.deleteTask(index);
  });
};

// switch project view
const selectProject = function () {
  selectProjectSelector.addEventListener("change", (event) => {
    projects.forEach((project) => {
      project.selected = false;
    });
    projects[event.target.value].selected = true;
    buildProjectView(projects);
  });
};
