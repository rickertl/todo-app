import Project from "./project.js";
import { findSelectedProject, project, projectID } from "./controller.js";
import { projects } from "./data.js";

export { taskRows, buildProjectView };

// cache dom
const body = document.querySelector("body");

// reused dom elements
const selectProjectForm = document.querySelector("#select-project");
const selectProjectSelector = document.querySelector("#selectProject");

// BUILD DEFAULT VIEW
function buildProjectView(projects) {
  // find currently selected project from data
  findSelectedProject(projects);
  const projectName = body.querySelector(".current-project");
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
const taskList = body.querySelector(".task-list");

function taskRows(project) {
  taskList.textContent = "";
  project.sortTasks().forEach((task, index) => {
    taskRow(task, index);
  });
  // listenForDelete(project);
}

function taskRow(task, index) {
  // create DOM elements
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  const taskTitleBox = document.createElement("span"); // need this for ellipsis to work
  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("task-due-date");
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("task-priority");
  if (task.priority === "high") {
    taskPriority.classList.add("high");
  } else if (task.priority === "low") {
    taskPriority.classList.add("low");
  }
  const more = document.createElement("div");
  more.classList.add("more");
  const taskDelete = document.createElement("div");
  taskDelete.classList.add("task-delete");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-id", index);
  deleteBtn.classList.add("delete-btn");
  // add content to elements
  taskTitleBox.textContent = task.title;
  if (task.dueDate) {
    taskDueDate.textContent = task.dueDate;
  }
  taskPriority.textContent = task.priority;
  deleteBtn.textContent = "X";
  if (task.description) {
    more.textContent = task.description;
  } else {
    more.textContent = `add description`;
  }
  // append elements to parents
  taskContainer.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleBox);
  taskContainer.appendChild(taskDueDate);
  taskContainer.appendChild(taskPriority);
  taskContainer.appendChild(more);
  more.appendChild(taskDelete);
  taskDelete.appendChild(deleteBtn);
  taskList.appendChild(taskContainer);
  // add listeners to elements
  taskContainer.addEventListener("click", () => {
    more.classList.toggle("show-more");
  });
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
  console.log(projects);
  addProjectForm.reset();
  buildProjectView(projects);
};

// get new project form submission
const addProjectForm = document.querySelector("form#add-project");
addProjectForm.onsubmit = addProject;

// SWITCH PROJECT VIEW
function selectProject() {}
selectProjectSelector.addEventListener("change", (event) => {
  console.log("change");
  projects.forEach((project) => {
    project.selected = false;
  });
  projects[event.target.value].selected = true;
  buildProjectView(projects);
});
