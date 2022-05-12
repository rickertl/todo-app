import "./style.css";
// import { compareAsc, format } from "date-fns";
import { findSelectedProject, projects, project, projectID } from "./data.js";
import { buildProjectView } from "./dom.js";

// find currently selected project from data
findSelectedProject(projects);

// display task list for selected project
buildProjectView(project, projectID);
