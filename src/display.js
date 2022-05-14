import Project from "./project.js";
import { findSelectedProject, project, projectID } from "./controller.js";
import { projects } from "./data.js";
import { format } from "date-fns";

export { displayAllTasks, buildProjectView };

// cache dom
const main = document.querySelector("main");

// reused dom elements
const selectProjectForm = document.querySelector("#select-project");
const selectProjectSelector = document.querySelector("#selectProject");

// BUILD DEFAULT VIEW
function buildProjectView(projects) {
  // find currently selected project from data
  findSelectedProject(projects);
  const projectName = main.querySelector(".current-project");
  projectName.textContent = project.title;
  projectName.setAttribute("data-id", projectID);
  if (projects.length > 1) {
    projectName.style.display = "none";
    selectProjectForm.style.display = "flex";
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
  } else {
    projectName.style = "";
    selectProjectForm.style = "";
  }
  project.listTasks();
}

// DISPLAY ALL TASKS
const taskList = main.querySelector(".task-list");
let taskTitle = "";

function displayAllTasks(project) {
  taskList.textContent = "";
  project.sortTasks().forEach((task, index) => {
    displayTask(task, index);
  });
}

// DISPLAY ONE(1) TASK
function displayTask(task, index) {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  // always visible task content
  displayTaskTitle(task, taskContainer);
  displayTaskCheckbox(task, taskContainer, taskTitle); // after taskTitle to get current value
  displayTaskDueDate(task, taskContainer);
  displayTaskPriority(task, taskContainer);
  // expandable task content
  const more = document.createElement("div");
  more.classList.add("more");
  taskContainer.appendChild(more);
  displayTaskDescription(task, more);
  displayTaskDelete(index, more);
  // append taskContainer
  taskList.appendChild(taskContainer);
  // watch taskContainer
  taskContainer.addEventListener("click", () => {
    more.classList.toggle("show-more");
  });
}

function displayTaskTitle(task, taskContainer) {
  taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  const taskTitleBox = document.createElement("span"); // need span for ellipsis to work
  taskTitleBox.textContent = task.title;
  taskContainer.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleBox);
}

function displayTaskCheckbox(task, taskContainer) {
  const taskCheckbox = document.createElement("input");
  taskCheckbox.classList.add("task-checkbox");
  taskCheckbox.setAttribute("type", "checkbox");
  if (task.complete === true) {
    taskCheckbox.setAttribute("checked", "");
    taskContainer.classList.toggle("complete");
    taskTitle.classList.toggle("complete");
  }
  taskContainer.appendChild(taskCheckbox);
  taskCheckbox.addEventListener("click", (event) => {
    event.stopPropagation();
    task.complete === false ? task.setComplete(true) : task.setComplete(false);
    buildProjectView(projects);
  });
}

function displayTaskDueDate(task, taskContainer) {
  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("task-due-date");
  if (task.dueDate) {
    taskDueDate.textContent = format(
      new Date(task.dueDate),
      "eee, h:m bbb (M/d)"
    );
  }
  taskContainer.appendChild(taskDueDate);
}

function displayTaskPriority(task, taskContainer) {
  const taskPriority = document.createElement("select");
  taskPriority.classList.add("task-priority");
  taskPriority.setAttribute("name", "priority");
  taskPriority.setAttribute("id", "priority");
  const priorityOptions = ["high", "normal", "low"];
  priorityOptions.forEach((level) => {
    const option = document.createElement("option");
    option.setAttribute("value", level);
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
    buildProjectView(projects);
  });
}

function displayTaskDescription(task, more) {
  if (task.description) {
    more.textContent = task.description;
  } else {
    more.textContent = `add description`;
  }
}

function displayTaskDelete(index, more) {
  const taskDelete = document.createElement("div");
  taskDelete.classList.add("task-delete");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-id", index);
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "X";
  taskDelete.appendChild(deleteBtn);
  more.appendChild(taskDelete);
  deleteBtn.addEventListener("click", () => {
    const index = deleteBtn.getAttribute("data-id");
    project.deleteTask(index);
  });
}

// ADD TASK
const addTaskToProject = function (event) {
  event.preventDefault();
  const newTask = project.createTask(
    addTaskform.elements["title"].value,
    addTaskform.elements["description"].value,
    addTaskform.elements["dueDate"].value,
    addTaskform.elements["priority"].value
  );
  addTaskform.reset();
  // form.classList.toggle("show-form");
  // project.listTasks();
};

// get add task form submission
const addTaskform = document.querySelector("form#add-task");
addTaskform.onsubmit = addTaskToProject;

// ADD PROJECT
const addProject = function (event) {
  event.preventDefault();
  project.selected = false; // remove selected from current project
  const newProject = new Project(addProjectForm.elements["title"].value, true);
  projects.push(newProject);
  // console.log(projects);
  addProjectForm.reset();
  buildProjectView(projects);
};

// get new project form submission
const addProjectForm = document.querySelector("form#add-project");
addProjectForm.onsubmit = addProject;

// SWITCH PROJECT VIEW
function selectProject() {}
selectProjectSelector.addEventListener("change", (event) => {
  projects.forEach((project) => {
    project.selected = false;
  });
  projects[event.target.value].selected = true;
  buildProjectView(projects);
});
