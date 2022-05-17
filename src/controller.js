import { projects } from "./data.js";

export { findSelectedProject, project, projectID };

// find currently selected project
let project = "";
let projectID = "";
function findSelectedProject() {
  projects.forEach((item, index) => {
    if (item.selected === true) {
      project = item;
      projectID = index;
    }
  });
}
