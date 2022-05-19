import { Project } from "./project.js";

export { projects, createDefaultData };

const projects = [];

const createDefaultData = function () {
  // clear projects array
  projects.length = 0;

  // create default project
  const defaultProject = new Project("Tasks", true);

  // demo dates
  const date1 = new Date();
  const date2 = new Date();

  // create demo tasks
  defaultProject.createTask(
    "Clean room",
    "",
    date1.setDate(date1.getDate() + 4)
  );
  defaultProject.createTask(
    "Write thank you note to mom for sending soup when I was sick",
    "",
    "",
    "low"
  );
  defaultProject.createTask(
    "Mow lawn",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa,",
    date2.setDate(date2.getDate() - 7),
    "high",
    true
  );
  defaultProject.createTask(
    "Empty dishwasher",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa,",
    "",
    "high"
  );

  // add default project to projects array
  projects.push(defaultProject);
};

if (localStorage.getItem("localProjects")) {
  const storedProjects = JSON.parse(localStorage.getItem("localProjects"));
  storedProjects.forEach((project) => {
    // creates instances of Project class
    const newProject = new Project(project.title, project.selected);
    projects.push(newProject);
    // creates instances of new project's Task class
    project.tasks.forEach((task) => {
      newProject.createTask(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.complete
      );
    });
  });
} else {
  createDefaultData();
}
