// create a new project
const projectsFactory = (title) => {
    let tasks = [];
    let id = Date.now();
    return { title, tasks, id };
};

export default projectsFactory;