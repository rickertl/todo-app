import Task from "./task.js";
import { projects } from "./data.js";
import { buildProjectView, displayAllTasks } from "./display.js";

export default class Project {
  constructor(title, selected = false, tasks = []) {
    this.title = title;
    this.selected = selected;
    this.tasks = tasks;
  }

  listTasks() {
    displayAllTasks(this);
    localStorage.setItem("localProjects", JSON.stringify(projects));
  }

  editProject(title) {
    this.title = title;
  }

  switchSelectedProject(index) {
    projects.forEach((project) => {
      project.selected = false;
    });
    projects[index].selected = true;
  }

  createTask(title, description, dueDate, priority, complete) {
    let task = new Task(title, description, dueDate, priority, complete);
    this.tasks.push(task);
    this.listTasks();
  }

  completeTask(index) {
    this.tasks[index].complete = true;
    this.listTasks();
  }

  deleteTask(index, oneTask) {
    if (oneTask === true) {
      if (confirm("WARNING!!! Task deletion is permanent.") == false) {
        return;
      }
    }
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

  deleteProject(projectID) {
    if (projects.length > 1) {
      if (confirm("WARNING!!! Task List deletion is permanent.") == true) {
        this.deleteTasks("all", true);
        // let projectIndex = projects.indexOf(this);
        projects[projectID] = null; // set to null for garbage collection
        projects.splice(projectID, 1);
        this.switchSelectedProject(
          // find first project left to switch to
          projects.indexOf(projects.find((el) => el !== undefined))
        );
        buildProjectView(projects);
      }
    } else {
      alert(
        "SORRY! This is your only task list. At least one list is required.\n\nPlease create a new default list and try again."
      );
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
