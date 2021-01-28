// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// Add functionalities to new project button
const projectsButtonTargeter = () => {
    document.getElementById("projectsButton").addEventListener('click', () => {
        let newProject = document.createElement("H2");
        let textProject = document.createTextNode("Hello, World!");
        newProject.appendChild(textProject);
        document.getElementById("projectsList").appendChild(newProject);
    });
};
projectsButtonTargeter();

// Add functionalities to new task button
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {
            let newTask = document.createElement("H2");
            let textTask = document.createTextNode("Hello, World!");
            newTask.appendChild(textTask);
            document.getElementById("tasksList").appendChild(newTask);
    });
};
tasksButtonTargeter();
