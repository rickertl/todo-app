import Project from "./project";

export { projects };

// generate default project
const tasks = new Project("Tasks", true);
tasks.createTask("Clean room");
tasks.createTask(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa, tristique eu eleifend in, porta ut tortor. Morbi lorem erat, gravida a bibendum eget, suscipit id orci. Vivamus id felis metus. ",
  "",
  "",
  "low"
);
tasks.createTask("Empty dishwasher", "", "", "high");

// create array of projects and add default project
const projects = [];
projects.push(tasks);
