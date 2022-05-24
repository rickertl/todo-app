import "./style.scss";
import { getData } from "./data.js";
import { buildProjectView } from "./display.js";

// get stored or default data
getData();

// display selected project and corresponding tasks
buildProjectView();
