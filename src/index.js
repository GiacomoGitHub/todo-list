// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// When the "Add project" button is pressed, create a new input field and "Add" button for the user to create the project
const projectsButtonTargeter = () => {
    document.getElementById("projectsButton").addEventListener('click', () => {

        let newProject = document.createElement("INPUT");
        newProject.placeholder = "New project";
        document.getElementById("leftPanel").appendChild(newProject);

        let addTaskButton = document.createElement("BUTTON");
        addTaskButton.innerHTML = "Add";
        addTaskButton.classList.add("roundButton");
        document.getElementById("leftPanel").appendChild(addTaskButton);
    });
};
projectsButtonTargeter();

// When the "Add task" button is pressed, create a checkmark button, a new input field for the user to create the task, and a deleting button
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {

            let addCheckButton = document.createElement("BUTTON");
            addCheckButton.innerHTML = " ";
            addCheckButton.classList.add("roundButton");
            document.getElementById("rightPanel").appendChild(addCheckButton);

            let newTask = document.createElement("INPUT");
            newTask.placeholder = "New task";
            document.getElementById("rightPanel").appendChild(newTask);

            let addRemoveButton = document.createElement("BUTTON");
            addRemoveButton.innerHTML = "X";
            addRemoveButton.classList.add("roundButton");
            document.getElementById("rightPanel").appendChild(addRemoveButton);
    });
};
tasksButtonTargeter();

let project1 = projectsFactory("Project 1");
console.log(project1);