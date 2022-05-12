import Task from "./task.js";
import { taskRows } from "./dom.js";

export default class Project {
  constructor(title, selected = false, tasks = []) {
    this.title = title;
    this.selected = selected;
    this.tasks = tasks;
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
