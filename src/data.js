import Project from "./project";

export { findSelectedProject, projects, project, projectID };

// generate default project
const project1 = new Project("Project 1", true);
project1.createTask("Clean room");
project1.createTask(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa, tristique eu eleifend in, porta ut tortor. Morbi lorem erat, gravida a bibendum eget, suscipit id orci. Vivamus id felis metus. ",
  "",
  "",
  "low"
);
project1.createTask("Empty dishwasher", "", "", "high");

// create array of projects and add default project
const projects = [];
projects.push(project1);

// find currently selected project
let project = "";
let projectID = "";
function findSelectedProject(projects) {
  projects.forEach((item, index) => {
    if (item.selected === true) {
      project = item;
      projectID = index;
    }
  });
}
