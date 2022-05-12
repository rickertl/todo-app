import "./style.css";
// import { compareAsc, format } from "date-fns";
import { projects } from "./data.js";
import { buildDefaultView } from "./dom.js";

let project = "";

// find currently selected project
function findSelectedProject(projects) {
  projects.forEach((index) => {
    if (index.selected === true) {
      project = index;
    }
  });
}
findSelectedProject(projects);

buildDefaultView(project);
