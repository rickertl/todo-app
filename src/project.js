import Task from "./task.js";
import { projects } from "./data.js";
import { buildProjectView, displayAllTasks } from "./display.js";

export { project, projectID, Project };

let project = "";
let projectID = "";

class Project {
  constructor(name, selected = false, tasks = []) {
    this.name = name;
    this.selected = selected;
    this.tasks = tasks;
  }

  static findSelectedProject() {
    projects.forEach((item, index) => {
      if (item.getSelected === true) {
        project = item;
        projectID = index;
      }
    });
  }

  static switchSelectedProject(index) {
    projects.forEach((item) => {
      item.setSelected(false);
    });
    projects[index].setSelected(true);
  }

  static deleteProject(projectID) {
    if (projects.length > 1) {
      if (confirm("ARE YOU SURE? Task List deletion is permanent.") == true) {
        projects[projectID].deleteTasks("all", true);
        projects[projectID] = null; // set to null for garbage collection
        projects.splice(projectID, 1);
        Project.switchSelectedProject(
          // find first project left to switch to
          projects.indexOf(projects.find((el) => el !== undefined))
        );
        buildProjectView();
      }
    } else {
      alert(
        "SORRY! This is your only task list. At least one list is required.\n\nPlease create a new default list and try again."
      );
    }
  }

  setName(name) {
    this.name = name;
  }

  setSelected(selected) {
    this.selected = selected;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  listTasks() {
    displayAllTasks(this);
    localStorage.setItem("localProjects", JSON.stringify(projects));
  }

  editProject(name) {
    this.setName(name);
  }

  createTask(name, notes, dueDate, priority, complete) {
    let task = new Task(name, notes, dueDate, priority, complete);
    this.getTasks.push(task);
    this.listTasks();
  }

  completeTask(index) {
    this.getTasks[index].setComplete(true);
    this.listTasks();
  }

  deleteTask(index) {
    this.getTasks[index] = null; // set to null for garbage collection
    this.getTasks.splice(index, 1);
    this.listTasks();
  }

  deleteTasks(type, projectDelete) {
    if (projectDelete === false) {
      if (confirm("ARE YOU SURE? Task deletion is permanent.") == false) {
        return;
      }
    }
    for (let i = this.getTasks.length - 1; i >= 0; i--) {
      if (type === "completed") {
        if (this.getTasks[i].getComplete) {
          this.deleteTask(i, false);
        }
      } else {
        this.deleteTask(i, false);
      }
    }
  }

  sortTasks() {
    // sort tasks by name function
    const sortByName = function (a, b) {
      const nameA = a.getName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.getName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    };
    // sort by name and split tasks by completeness
    const completedTasks = [];
    const incompleteTasks = [];
    this.getTasks.sort(sortByName).forEach((task) => {
      task.getComplete ? completedTasks.push(task) : incompleteTasks.push(task);
    });
    // sort incomplete tasks by priority
    const sortIncompleteByPriority = incompleteTasks.sort(
      (a, b) => a.getPriority - b.getPriority
    );
    return sortIncompleteByPriority.concat(completedTasks.sort(sortByName));
  }

  get getName() {
    return this.name;
  }

  get getSelected() {
    return this.selected;
  }

  get getTasks() {
    return this.tasks;
  }
}
