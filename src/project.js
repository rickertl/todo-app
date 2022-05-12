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
  sortTasks() {
    //https://serveanswer.com/questions/js-sort-array-object-by-custom-key-and-value
    const priority = {
      high: 1,
      normal: 2,
      low: 3,
    };
    const sorted = this.tasks.sort(
      (a, b) => priority[a.priority] - priority[b.priority]
    );
    return sorted;
  }
}

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class
