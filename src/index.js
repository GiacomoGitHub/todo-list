import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

const project1 = projectsFactory("Create the todo app", "This is an exercise from The Odin Project");
const task1 = tasksFactory("Do this task first", "Description", "Due date", "Priority", "Notes");

