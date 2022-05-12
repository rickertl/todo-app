import Project from "./project";

export { project1 };

const project1 = new Project("Project 1");
project1.createTask("Clean room");
project1.createTask("Wash car");
project1.createTask("Empty dishwasher");

const projects = [];
projects.push(project1);
