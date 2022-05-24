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
    projects.forEach((project) => {
      project.setSelected(false);
    });
    projects[index].setSelected(true);
  }

  static deleteProject(projectID) {
    if (projects.length > 1) {
      if (confirm("ARE YOU SURE? Task List deletion is permanent.") == true) {
        projects[projectID].deleteTasks("all", true);
        // let projectIndex = projects.indexOf(this);
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

  deleteTask(index, oneTask) {
    // if (oneTask === true) {
    //   if (confirm("WARNING!!! Task deletion is permanent.") == false) {
    //     return;
    //   }
    // }
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
    //https://serveanswer.com/questions/js-sort-array-object-by-custom-key-and-value
    const priority = {
      high: 1,
      normal: 2,
      low: 3,
    };
    const sortedByPriority = this.getTasks.sort(
      (a, b) => priority[a.getPriority] - priority[b.getPriority]
    );
    // https://bobbyhadz.com/blog/javascript-sort-array-of-objects-by-boolean-property
    const sortedByComplete = sortedByPriority.sort(
      (a, b) => Number(a.getComplete) - Number(b.getComplete)
    );
    return sortedByComplete;
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

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class
