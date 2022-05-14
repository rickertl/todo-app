import "./style.css";
import { projects } from "./data.js";
import { buildProjectView } from "./display.js";

// display task list for selected project
buildProjectView(projects);
