import "./style.css";
// import { compareAsc, format } from "date-fns";
import { projects } from "./data.js";
import { buildDefaultView } from "./dom.js";

buildDefaultView(projects);
