// import all modules
import css from "./stylesheet.css";

import tasksFactory from "./tasksFactory.js";

import projectsFactory from "./projectsFactory.js";

// When the "Add project" button is pressed, prompt the title from the user
const projectsButtonTargeter = () => {
    document.getElementById("projectsButton").addEventListener('click', () => {

        //create a new project with the id given by the user in the prompt window
        let newProject = projectsFactory(prompt("Project's title"));
        
        // show the project on the page
        let textProject = document.createElement("H3");
        textProject.innerHTML = newProject.id;
        document.getElementById("leftPanel").appendChild(textProject);

        // create a button to remove the project
        let deleteProject = document.createElement("BUTTON");
        deleteProject.innerHTML = "X";
        deleteProject.addEventListener("click", ()=> {
            document.getElementById("leftPanel").removeChild(textProject);
            document.getElementById("leftPanel").removeChild(deleteProject);
        });
        document.getElementById("leftPanel").appendChild(deleteProject);

        
        // show the project in the console to check everything is working
        console.log(newProject);
    });
};
projectsButtonTargeter();

// When the "Add task" button is pressed, create a checkmark button, a new input field for the user to create the task, a deleting button, and a linebreak
const tasksButtonTargeter = () => {
    document.getElementById("tasksButton").addEventListener('click', () => {

            let addCheckButton = document.createElement("BUTTON");
            addCheckButton.innerHTML = " ";
            addCheckButton.classList.add("checkButton");
            document.getElementById("rightPanel").appendChild(addCheckButton);

            let newTask = document.createElement("INPUT");
            newTask.placeholder = "New task";
            newTask.classList.add("taskText");
            document.getElementById("rightPanel").appendChild(newTask);

            let addRemoveButton = document.createElement("BUTTON");
            addRemoveButton.innerHTML = "X";
            addRemoveButton.classList.add("removeButton");
            document.getElementById("rightPanel").appendChild(addRemoveButton);

            let lineBreak = document.createElement("BR");
            document.getElementById("rightPanel").appendChild(lineBreak);
    });
};
tasksButtonTargeter();


// Logic of creating a project and adding tasks in it
// Create a project
let project1 = projectsFactory("Trip to Paris");
project1.tasks.push("Buy ticket");
// Add task in it
let task1 = tasksFactory("Buy souvenir");
project1.tasks.push(task1);
console.log(project1);




// When the "Add project" button is pressed, create a new input field for the user to create the project
// const projectsButtonTargeter = () => {
//     document.getElementById("projectsButton").addEventListener('click', () => {

//         let newProject = document.createElement("INPUT");
//         newProject.placeholder = "New project";
//         document.getElementById("leftPanel").appendChild(newProject);
//     });
// };
// projectsButtonTargeter();