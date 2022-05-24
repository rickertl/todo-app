export default class Task {
  constructor(
    name,
    notes = "",
    dueDate = false,
    priority = "normal",
    complete = false
  ) {
    this.name = name;
    this.notes = notes;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  setComplete(complete) {
    this.complete = complete;
  }

  updateTask(name, notes, dueDate, priority) {
    this.name = name;
    this.notes = notes;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
