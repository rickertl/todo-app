import { Project, project, projectID } from "./project.js";
import { projects, createDefaultData } from "./data.js";
import { format } from "date-fns";

export { buildProjectView, displayAllTasks };

// cache dom
const main = document.querySelector("main");

// dynamic height for mobile
// const appHeight = () => {
//   main.style.height = `${window.innerHeight}px`;
// };
// window.addEventListener("resize", appHeight);
// appHeight();

// reused dom elements
const taskList = main.querySelector(".task-list");
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
const buildProjectView = function () {
  Project.findSelectedProject();
  buildProjectSelector();
  project.listTasks();
};

// display all tasks
let taskName = "";
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
  displayTaskName(task, taskContainer);
  // after above to set "completed" style on newly created name element
  displayTaskCheckbox(task, taskContainer);
  displayTaskDueDate(task, taskContainer);
  displayTaskPriority(task, taskContainer);
  // expandable task content
  const more = createDomElement("div", { class: "more" });
  taskContainer.appendChild(more);
  displayTaskNotes(task, more);
  const taskButtons = createDomElement("div", { class: "task-buttons" });
  displayTaskEdit(task, index, taskButtons);
  displayTaskDelete(index, taskButtons);
  more.appendChild(taskButtons);
  // append taskContainer
  taskList.appendChild(taskContainer);
  // watch taskContainer
  taskContainer.addEventListener("click", () => {
    taskContainer.classList.toggle("expanded");
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
    taskName.classList.toggle("complete");
  }
  taskContainer.appendChild(taskCheckbox);
  taskCheckbox.addEventListener("click", (event) => {
    event.stopPropagation();
    task.complete === false ? task.setComplete(true) : task.setComplete(false);
    project.listTasks();
  });
};

const displayTaskName = function (task, taskContainer) {
  taskName = createDomElement("div", { class: "task-name" });
  const taskNameBox = createDomElement("span"); // need child div for ellipsis to work
  taskNameBox.textContent = task.name;
  taskContainer.appendChild(taskName);
  taskName.appendChild(taskNameBox);
};

const displayTaskDueDate = function (task) {
  const taskDueDate = createDomElement("span", { class: "task-due-date" });
  // console.log(task.dueDate.toLocalString());
  // console.log(task.dueDate);
  if (task.dueDate) {
    taskDueDate.textContent = format(new Date(task.dueDate), "eee, M/d");
  }
  // const space = document.createTextNode("\u00A0");
  // taskName.appendChild(space);
  taskName.querySelector("span").appendChild(taskDueDate);
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
    project.listTasks();
  });
};

const displayTaskNotes = function (task, more) {
  const taskNotes = createDomElement("div", {
    class: "task-notes",
  });
  if (task.notes) {
    taskNotes.textContent = task.notes;
    more.appendChild(taskNotes);
  }
};

const displayTaskEdit = function (task, index, taskButtons) {
  const taskEditBtn = createDomElement("div", {
    class: "task-edit",
    ["data-id"]: index,
  });
  taskEditBtn.innerHTML = `
  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z" />
  </svg>
  `;
  taskButtons.appendChild(taskEditBtn);
  taskEditBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    taskEntry.classList.toggle("overlay");
    taskEntryForm.querySelector("a.show-details").style.display = "none";
    taskEntryForm.querySelector(".details").style.display = "flex";
    taskEntryForm.setAttribute("action", "edit");
    taskEntryForm.setAttribute(
      "data-id",
      event.currentTarget.getAttribute("data-id")
    );
    taskEntryForm.querySelector("#name").value = task.name;
    taskEntryForm.querySelector("#notes").value = task.notes;
    if (task.dueDate !== "") {
      // get first element of split ISO date string without time
      // const [date] = new Date(task.dueDate).toISOString().split("T");
      taskEntryForm.querySelector("#dueDate").value = format(
        new Date(task.dueDate),
        "yyyy-MM-dd"
      );
    }
    taskEntryForm.querySelector("#priority").value = task.priority;
  });
};

const displayTaskDelete = function (index, taskButtons) {
  const taskDeleteBtn = createDomElement("div", {
    class: "delete-btn",
    ["data-id"]: index,
  });
  taskDeleteBtn.innerHTML = `
  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
  </svg>
  `;
  taskButtons.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    project.deleteTask(taskDeleteBtn.getAttribute("data-id"), true);
  });
};

// ready app for project(list) additions and edits
const readyForProjects = (function () {
  // listen for "hamburger" click
  const topNav = main.querySelector(".top-nav");
  topNav.querySelector(".hamburger").addEventListener("click", (event) => {
    event.preventDefault();
    // topNav.querySelector(".hamburger").classList.toggle("open");
    topNav.querySelector(".list-actions").classList.toggle("open");
  });
  topNav.querySelector(".close-btn").addEventListener("click", () => {
    // topNav.querySelector(".hamburger").classList.toggle("open");
    topNav.querySelector(".list-actions").classList.toggle("open");
  });
  // listen for "add list" click
  const addProjectLink = topNav.querySelector(".add-list");
  addProjectLink.addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.add("overlay");
  });
  // listen for "edit list" click
  topNav.querySelector(".edit-list").addEventListener("click", (event) => {
    event.preventDefault();
    projectEntry.classList.add("overlay");
    projectEntry.classList.add("editing");
    projectEntryForm.setAttribute("action", "edit");
    projectEntryForm.querySelector("#name").value = project.name;
    projectEntryForm.querySelector("label").textContent = "Change Name";
  });
  // reset data
  topNav.querySelector(".reset-data").addEventListener("click", (event) => {
    event.preventDefault();
    topNav.querySelector(".hamburger").classList.toggle("open");
    topNav.querySelector(".list-actions").classList.toggle("open");
    createDefaultData();
    resetProjectEntry();
    buildProjectView();
  });
  // get project form submissions
  projectEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectEntryForm.getAttribute("action") === "add") {
      project.selected = false; // remove "selected" from current project
      projects.push(new Project(projectEntryForm.elements["name"].value, true));
    } else if (projectEntryForm.getAttribute("action") === "edit") {
      project.editProject(projectEntryForm.elements["name"].value);
    }
    resetProjectEntry();
    buildProjectView();
  });
  // listen for "delete COMPLETED tasks" button click
  projectEntry
    .querySelector("button.delete-completed-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("completed", false);
      resetProjectEntry();
    });
  // listen for "delete ALL tasks" button click
  projectEntry
    .querySelector("button.delete-all-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("all", false);
      resetProjectEntry();
    });
  // listen for "delete list" button click
  projectEntry
    .querySelector("button.delete-project")
    .addEventListener("click", (event) => {
      event.preventDefault();
      Project.deleteProject(projectID);
      resetProjectEntry();
      buildProjectView();
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
    selectOption.textContent = project.name;
    selectProjectSelector.appendChild(selectOption);
  });
};

// switch project view
const selectProject = (function () {
  selectProjectSelector.addEventListener("change", (event) => {
    const index = event.target.value;
    Project.switchSelectedProject(index);
    buildProjectView();
  });
})();

// ready app for task additions and edits
const readyForTasks = (function () {
  // add task button
  main.querySelector("button.add-task").addEventListener("click", (event) => {
    event.preventDefault();
    taskEntry.classList.toggle("overlay");
  });
  // task details link
  taskEntryForm
    .querySelector("a.show-details")
    .addEventListener("click", (event) => {
      event.preventDefault();
      taskEntryForm.querySelector("a.show-details").style.display = "none";
      taskEntryForm.querySelector(".details").style.display = "flex";
    });
  taskEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskInputs = [
      taskEntryForm.elements["name"].value,
      taskEntryForm.elements["notes"].value,
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
    resetTaskEntry();
  });
  // close button
  taskEntryForm.querySelector(".close-btn").addEventListener("click", () => {
    resetTaskEntry();
  });
  const resetTaskEntry = function () {
    taskEntryForm.reset();
    taskEntry.classList.toggle("overlay");
    taskEntryForm.querySelector("a.show-details").style.display = "block";
    taskEntryForm.querySelector(".details").style.display = "none";
  };
})();
