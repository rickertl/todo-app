import "./style.css";
// import { compareAsc, format } from "date-fns";
import { projects } from "./data.js";
import { buildProjectView } from "./display.js";

// display task list for selected project
buildProjectView(projects);
