import Task from "./task.js";
import { taskRows } from "./dom.js";

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  createTask(title, description, duedate, priority) {
    let task = new Task(title, description, duedate, priority);
    this.tasks.push(task);
  }
  deleteTask(index) {
    this.tasks.splice(index, 1);
    // need to set task instance to null somehow. memory leak.
  }
  listTasks() {
    taskRows(this);
  }
}

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class
