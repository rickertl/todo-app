import { project, projectID, Project } from "./project.js";
import { projects, createDefaultData } from "./data.js";
import { format, addMinutes } from "date-fns";

export { buildProjectView, displayAllTasks };

// calc height for consistent mobile experience
//https://medium.com/quick-code/100vh-problem-with-ios-safari-92ab23c852a8
const appHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};
window.onresize = appHeight;
appHeight();

// cache dom
const body = document.querySelector("body");

// reused dom elements
const taskEntryContainer = body.querySelector(".task-entry-container");
const taskEntryForm = taskEntryContainer.querySelector("form#task-entry");
const projectEntryContainer = body.querySelector(".project-entry-container");
const projectEntryForm =
  projectEntryContainer.querySelector("form#project-entry");

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
  body.querySelector(".tasks").textContent = "";
  project.sortTasks().forEach((task, index) => {
    displayTask(task, index);
  });
};

// display one(1) task
const displayTask = function (task, index) {
  const taskContainer = createDomElement("div", { class: "task-container" });
  // always visible task content
  displayTaskName(task, taskContainer); // after above to set "completed" style on newly created name element
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
  body.querySelector(".tasks").appendChild(taskContainer);
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
  if (task.getComplete === true) {
    taskCheckbox.setAttribute("checked", "");
    taskContainer.classList.toggle("complete");
    taskName.classList.toggle("complete");
  }
  taskContainer.appendChild(taskCheckbox);
  taskCheckbox.addEventListener("click", (event) => {
    event.stopPropagation();
    task.getComplete === false
      ? task.setComplete(true)
      : task.setComplete(false);
    project.listTasks();
  });
};

const displayTaskName = function (task, taskContainer) {
  taskName = createDomElement("div", { class: "task-name" });
  const taskNameBox = createDomElement("span"); // need child div for ellipsis to work
  taskNameBox.textContent = task.getName;
  taskContainer.appendChild(taskName);
  taskName.appendChild(taskNameBox);
};

const displayTaskDueDate = function (task) {
  const taskDueDate = createDomElement("span", { class: "task-due-date" });
  //https://stackoverflow.com/a/70296645
  if (task.getDueDate) {
    const date = new Date(task.getDueDate);
    taskDueDate.textContent = format(
      addMinutes(date, date.getTimezoneOffset()),
      "eee, M/d"
    );
  }
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
    if (level === task.getPriority) {
      option.setAttribute("selected", "");
    }
    option.textContent = level;
    taskPriority.appendChild(option);
  });
  if (task.getPriority === "high") {
    taskPriority.classList.add("high");
  } else if (task.getPriority === "low") {
    taskPriority.classList.add("low");
  }
  taskContainer.appendChild(taskPriority);
  taskPriority.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  taskPriority.addEventListener("change", (event) => {
    task.setPriority(event.target.value);
    project.listTasks();
  });
};

const displayTaskNotes = function (task, more) {
  const taskNotes = createDomElement("div", {
    class: "task-notes",
  });
  if (task.getNotes) {
    taskNotes.textContent = task.getNotes;
    more.appendChild(taskNotes);
  }
};

const displayTaskEdit = function (task, index, taskButtons) {
  const taskEditBtn = createDomElement("div", {
    class: "task-edit",
    ["data-id"]: index,
  });
  taskEditBtn.innerHTML = `
  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
  <path d="M19 19V5H5v14h14m0-16c1.097 0 2 .903 2 2v14a2 2 0 0 1-2 2H5c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h14m-2.3 6.35-1 1-2.05-2.05 1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06 2.06 2.06L9.06 17H7v-2.06Z" style="fill-rule:nonzero" transform="translate(-3 -3)"/>
  </svg>
  `;
  taskButtons.appendChild(taskEditBtn);
  taskEditBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    taskEntryContainer.classList.toggle("show");
    taskEntryForm.querySelector("a.show-details").style.display = "none";
    taskEntryForm.querySelector(".details").style.display = "flex";
    taskEntryForm.setAttribute("action", "edit");
    taskEntryForm.setAttribute(
      "data-id",
      event.currentTarget.getAttribute("data-id")
    );
    taskEntryForm.querySelector("#name").value = task.getName;
    taskEntryForm.querySelector("#notes").value = task.getNotes;
    if (task.getDueDate !== "") {
      taskEntryForm.querySelector("#dueDate").value = task.getDueDate;
    }
    taskEntryForm.querySelector("#priority").value = task.getPriority;
  });
};

const displayTaskDelete = function (index, taskButtons) {
  const taskDeleteBtn = createDomElement("div", {
    class: "delete-btn",
    ["data-id"]: index,
  });
  taskDeleteBtn.innerHTML = `
  <svg viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
  <path d="M6 19c0 1.097.903 2 2 2h8c1.097 0 2-.903 2-2V7H6v12M8 9h8v10H8V9m7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5Z" style="fill-rule:nonzero" transform="translate(-5 -3)"/>
  </svg>
  `;
  taskButtons.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    project.deleteTask(taskDeleteBtn.getAttribute("data-id"), true);
  });
};

// iOS/mobile show keyboard on input focus
// https://stackoverflow.com/a/55425845
function focusAndOpenKeyboard(el, timeout) {
  if (!timeout) {
    timeout = 100;
  }
  if (el) {
    // Align temp input element approximately where the input element is
    // so the cursor doesn't jump around
    var __tempEl__ = document.createElement("input");
    __tempEl__.style.position = "absolute";
    __tempEl__.style.top = el.offsetTop + 7 + "px";
    __tempEl__.style.left = el.offsetLeft + "px";
    __tempEl__.style.height = 0;
    __tempEl__.style.opacity = 0;
    // Put this temp element as a child of the page <body> and focus on it
    document.body.appendChild(__tempEl__);
    __tempEl__.focus();
    // The keyboard is open. Now do a delayed focus on the target element
    setTimeout(function () {
      el.focus();
      el.click();
      // Remove the temp element
      document.body.removeChild(__tempEl__);
    }, timeout);
  }
}

// ready app for project(list) additions and edits
const readyForProjects = (function () {
  const taskListOptions = body.querySelector(".task-list-options");

  // listen for "options-btn" click
  body
    .querySelector(".task-list-nav > .options-btn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      taskListOptions.classList.toggle("show");
    });

  // listen for "add list" btn click
  taskListOptions
    .querySelector(".add-list")
    .addEventListener("click", (event) => {
      event.preventDefault();
      projectEntryContainer.classList.add("show");
      focusAndOpenKeyboard(projectEntryForm.querySelector("#name"), 300);
    });

  // listen for "edit list" btn click
  taskListOptions
    .querySelector(".edit-list")
    .addEventListener("click", (event) => {
      event.preventDefault();
      projectEntryContainer.classList.add("show");
      projectEntryContainer.classList.add("editing");
      projectEntryForm.setAttribute("action", "edit");
      projectEntryForm.querySelector("#name").value = project.getName;
    });

  // get project form submissions
  projectEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectEntryForm.getAttribute("action") === "add") {
      project.setSelected(false); // remove "selected" from current project
      projects.push(new Project(projectEntryForm.elements["name"].value, true));
    } else if (projectEntryForm.getAttribute("action") === "edit") {
      project.editProject(projectEntryForm.elements["name"].value);
    }
    resetProjectEntry();
    buildProjectView();
  });

  // listen for "delete COMPLETED tasks" btn click
  projectEntryContainer
    .querySelector("button.delete-completed-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("completed", false);
      resetProjectEntry();
    });

  // listen for "delete ALL tasks" btn click
  projectEntryContainer
    .querySelector("button.delete-all-tasks")
    .addEventListener("click", (event) => {
      event.preventDefault();
      project.deleteTasks("all", false);
      resetProjectEntry();
    });

  // listen for "delete list" btn click
  projectEntryContainer
    .querySelector("button.delete-project")
    .addEventListener("click", (event) => {
      event.preventDefault();
      Project.deleteProject(projectID);
      resetProjectEntry();
      buildProjectView();
    });

  // listen for "close" btn click
  projectEntryContainer
    .querySelector(".close-btn")
    .addEventListener("click", () => {
      resetProjectEntry();
    });
  const resetProjectEntry = function () {
    projectEntryForm.reset();
    projectEntryForm.setAttribute("action", "add");
    taskListOptions.classList.remove("show");
    projectEntryContainer.classList.remove("show");
    projectEntryContainer.classList.remove("editing");
    projectEntryForm.querySelector("#name").blur();
  };
})();

// build project selector with current projects
const buildProjectSelector = function () {
  body.querySelector("#selectProject").textContent = "";
  projects.forEach((project, index) => {
    const selectOption = createDomElement("option", { value: index });
    if (project.getSelected === true) {
      selectOption.setAttribute("selected", "");
    }
    selectOption.textContent = project.getName;
    body.querySelector("#selectProject").appendChild(selectOption);
  });
};

// listen for project selector change
const selectProject = (function () {
  body.querySelector("#selectProject").addEventListener("change", (event) => {
    Project.switchSelectedProject(event.target.value);
    buildProjectView();
  });
})();

// ready app for task additions and edits
const readyForTasks = (function () {
  // listen for "add task" btn click
  body.querySelector("button.add-task").addEventListener("click", (event) => {
    event.preventDefault();
    taskEntryContainer.classList.toggle("show");
    focusAndOpenKeyboard(taskEntryForm.querySelector("#name"), 300);
  });

  // listen for "task details" link click
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
      project.getTasks[index].updateTask(...taskInputs);
      taskEntryForm.setAttribute("action", "add");
      project.listTasks();
    }
    resetTaskEntry();
  });

  // listen for "close" btn
  taskEntryContainer
    .querySelector(".close-btn")
    .addEventListener("click", () => {
      resetTaskEntry();
    });
  const resetTaskEntry = function () {
    taskEntryForm.reset();
    taskEntryContainer.classList.toggle("show");
    taskEntryForm.querySelector("a.show-details").style.display = "block";
    taskEntryForm.querySelector(".details").style.display = "none";
    taskEntryForm.querySelector("#name").blur();
  };
})();

// ready app for info box
const readyInfoBox = (function () {
  // listen for "info" btn click
  body.querySelector("svg.info").addEventListener("click", (event) => {
    event.preventDefault();
    body.querySelector(".info-box-container").classList.toggle("show");
  });
  body.querySelector(".info-box > .close-btn").addEventListener("click", () => {
    body.querySelector(".info-box-container").classList.toggle("show");
  });

  // listen for "reset data" btn click
  body.querySelector(".reset-data").addEventListener("click", (event) => {
    event.preventDefault();
    createDefaultData();
    buildProjectView();
    body.querySelector(".info-box-container").classList.toggle("show");
  });
})();
