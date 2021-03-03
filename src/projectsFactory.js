// create a new project
const projectsFactory = (title) => {
    let id = title;
    let tasks = [];
    return { id, tasks };
};

export default projectsFactory;