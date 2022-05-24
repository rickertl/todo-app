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
      if (item.selected === true) {
        project = item;
        projectID = index;
      }
    });
  }

  static switchSelectedProject(index) {
    projects.forEach((project) => {
      project.selected = false;
    });
    projects[index].selected = true;
  }

  static deleteProject(projectID) {
    if (projects.length > 1) {
      if (confirm("WARNING!!! Task List deletion is permanent.") == true) {
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

  listTasks() {
    displayAllTasks(this);
    localStorage.setItem("localProjects", JSON.stringify(projects));
  }

  editProject(name) {
    this.name = name;
  }

  createTask(name, notes, dueDate, priority, complete) {
    let task = new Task(name, notes, dueDate, priority, complete);
    this.tasks.push(task);
    this.listTasks();
  }

  completeTask(index) {
    this.tasks[index].complete = true;
    this.listTasks();
  }

  deleteTask(index, oneTask) {
    // if (oneTask === true) {
    //   if (confirm("WARNING!!! Task deletion is permanent.") == false) {
    //     return;
    //   }
    // }
    this.tasks[index] = null; // set to null for garbage collection
    this.tasks.splice(index, 1);
    this.listTasks();
  }

  deleteTasks(type, projectDelete) {
    if (projectDelete === false) {
      if (confirm("WARNING!!! Task deletion is permanent.") == false) {
        return;
      }
    }
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      if (type === "completed") {
        if (this.tasks[i].complete) {
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
    const sortedByPriority = this.tasks.sort(
      (a, b) => priority[a.priority] - priority[b.priority]
    );
    // https://bobbyhadz.com/blog/javascript-sort-array-of-objects-by-boolean-property
    const sortedByComplete = sortedByPriority.sort(
      (a, b) => Number(a.complete) - Number(b.complete)
    );
    return sortedByComplete;
  }
}

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class
