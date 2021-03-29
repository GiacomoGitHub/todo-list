// import all modules
import css from "./stylesheet.css";
import tasksFactory from "./tasksFactory.js";
import projectsFactory from "./projectsFactory.js";

// projects button functionality and project management
const projectsButtonTargeter = () => { // listen to the click on the projects button
    document.getElementById("projectsButton").addEventListener('click', () => {

        let newProject = projectsFactory(prompt("Project's title")); //create a new project with the id given by the user in the prompt window

        if (newProject.id !== "") { // show the project on the page if the user titled it
            let textProject = document.createElement("H3");
            textProject.innerHTML = newProject.id + " " + newProject.tasks;
            textProject.classList.add("projectTextStyle");
            document.getElementById("leftPanel").appendChild(textProject);

            // create a button to remove the project and the remove button itself when pressed
            let deleteProject = document.createElement("BUTTON");
            deleteProject.innerHTML = "X";
            deleteProject.classList.add("removeButton");
            deleteProject.addEventListener("click", ()=> {
                document.getElementById("leftPanel").removeChild(textProject);
                document.getElementById("leftPanel").removeChild(deleteProject);
        });

        // create a button to add tasks to this project 
        let addTasksButton = document.createElement("BUTTON");
        addTasksButton.classList.add("tasksButton");
        addTasksButton.innerHTML = "+"
        addTasksButton.setAttribute("id", newProject.id);

        // append button to right panel
        document.getElementById("rightPanel").appendChild(addTasksButton);


        // tasks button functionality
        document.getElementById(newProject.id).addEventListener('click', ()=> { // listen to click on the button to add tasks
            let task = tasksFactory(prompt("Task's title")); // prompt the user to enter the title of the task
            let taskText = document.createElement("H3"); // create an h3 element
            taskText.innerHTML = task.title; // set the text of the h3 element to be the title of the task
            newProject.tasks.push(task); // push the newly created task in the project's array
            console.log(newProject); // show the project in the console to make sure all works properly
            document.getElementById("rightPanel").appendChild(taskText); // append to the right panel the newly created task

            // create a button to remove the task and the remove button itself when pressed
            let deleteTask = document.createElement("BUTTON");
            deleteTask.innerHTML = "X";
            deleteTask.classList.add("removeButton");
            // document.getElementById("rightPanel").appendChild(deleteTask);
            taskText.appendChild(deleteTask);
            deleteTask.addEventListener("click", ()=> {
                document.getElementById("rightPanel").removeChild(taskText);
                document.getElementById("rightPanel").removeChild(deleteTask);
            });
        });
        
        // add the remove button next to the name of the project
        textProject.insertAdjacentElement("beforeend", deleteProject);
        

        // show the project in the console to check that everything is working
        console.log(newProject);
        
        // don't show it on the page if the user didn't title the project in the prompt
        } else {
            alert("Can't create a project without a title");
        }
    });
};
projectsButtonTargeter();









// // Logic of creating a project and adding tasks in it
// // Create a project
// let project1 = projectsFactory("Trip to Paris");
// project1.tasks.push("Buy ticket");
// // Add task in it
// let task1 = tasksFactory("Buy souvenir");
// project1.tasks.push(task1);
// console.log(project1);


// Todos
// Push the tasks in the relative project
    // First you need the project, then you can push tasks in it
    // You have to target the project with a button and push in it the tasks (the adding button targets the relative project!)
// Show the tasks when clicking on a project

// When the "Add task" button is pressed, create a check button, prompt the task's title from the user, and add a remove button
// const tasksButtonTargeter = () => {
//     document.getElementById("tasksButton").addEventListener('click', () => {

//         // // create a check button
//         let checkButton = document.createElement("BUTTON");
//         checkButton.innerHTML = " ";
//         checkButton.classList.add("checkButton");
//         document.getElementById("rightPanel").appendChild(checkButton);

//         // create the task's text
//         let newTask = tasksFactory(prompt("Task's description"));
//         let newTaskText = document.createElement("H3");
//         newTaskText.innerHTML = newTask.title;
//         document.getElementById("rightPanel").appendChild(newTaskText);

//         // append the task's text next to the check button
//         checkButton.insertAdjacentElement("afterend", newTaskText);

//         // add a line break
//         let lineBreak = document.createElement("BR");
//         document.getElementById("rightPanel").appendChild(lineBreak);
//     });
// };
// tasksButtonTargeter();
