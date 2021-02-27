// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// When the "Add project" button is pressed, create a new input field for the user to create the project
const projectsButtonTargeter = () => {
    document.getElementById("projectsButton").addEventListener('click', () => {

        let newProject = document.createElement("INPUT");
        newProject.placeholder = "New project";
        document.getElementById("leftPanel").appendChild(newProject);
    });
};
projectsButtonTargeter();

// When the "Add task" button is pressed, create a checkmark button, a new input field for the user to create the task, a deleting button, and a linebreak
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {

            let addCheckButton = document.createElement("INPUT");
            addCheckButton.setAttribute("type", "radio");
            addCheckButton.innerHTML = " ";
            addCheckButton.classList.add("roundButton");
            document.getElementById("rightPanel").appendChild(addCheckButton);

            let newTask = document.createElement("INPUT");
            newTask.placeholder = "New task";
            newTask.classList.add("taskText");
            document.getElementById("rightPanel").appendChild(newTask);

            let addRemoveButton = document.createElement("BUTTON");
            addRemoveButton.innerHTML = "X";
            addRemoveButton.classList.add("roundButton");
            document.getElementById("rightPanel").appendChild(addRemoveButton);

            let lineBreak = document.createElement("BR");
            document.getElementById("rightPanel").appendChild(lineBreak);
    });
};
tasksButtonTargeter();

let project1 = projectsFactory("Project 1");
console.log(project1);