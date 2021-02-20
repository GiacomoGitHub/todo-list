// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// Create a new project when pressing the "Add project" button
const projectsButtonTargeter = () => {
    document.getElementById("listsButton").addEventListener('click', () => {
        let newProject = document.createElement("INPUT");
        newProject.placeholder = "New project";
        document.getElementById("leftPanel").appendChild(newProject);
    });
};
projectsButtonTargeter();

// Create a new task when pressing the "Add task" button
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {
            let newTask = document.createElement("INPUT");
            newTask.placeholder = "New task";
            document.getElementById("tasksList").appendChild(newTask);
    });
};
tasksButtonTargeter();

projectsFactory();

