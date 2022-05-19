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

  setName(name) {
    this.name = name;
  }

  setDesc(notes) {
    this.notes = notes;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
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
