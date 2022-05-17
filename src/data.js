import Project from "./project";

export { projects };

// demo dates
const date1 = new Date();
date1.setHours(10, 0, 0, 0);

const date2 = new Date();
date2.setHours(16, 0, 0, 0);

// generate default project
const tasks = new Project("Tasks", true);
tasks.createTask("Clean room", "", date1.setDate(date1.getDate() + 4));
tasks.createTask(
  "Write thank you note to mom for sending soup when I was sick",
  "",
  "",
  "low"
);
tasks.createTask(
  "Mow lawn",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa,",
  date2.setDate(date2.getDate() - 7),
  "high",
  true
);
tasks.createTask(
  "Empty dishwasher",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa,",
  "",
  "high"
);

// create array of projects and add default project
const projects = [];
projects.push(tasks);
