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

  setNotes(notes) {
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
    this.setName(name);
    this.setNotes(notes);
    this.setDueDate(dueDate);
    this.setPriority(priority);
  }

  get getName() {
    return this.name;
  }

  get getNotes() {
    return this.notes;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getPriority() {
    return this.priority;
  }

  get getComplete() {
    return this.complete;
  }
}
