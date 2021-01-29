// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// Add functionalities to new project button
const projectsButtonTargeter = () => {
    document.getElementById("projectsButton").addEventListener('click', () => {
        let newProject = document.createElement("INPUT");
        newProject.placeholder = "New project";
        document.getElementById("projectsList").appendChild(newProject);
    });
};
projectsButtonTargeter();

// Add functionalities to new task button
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {
            let newTask = document.createElement("INPUT");
            newTask.placeholder = "New task";
            document.getElementById("tasksList").appendChild(newTask);
    });
};
tasksButtonTargeter();

projectsFactory();
