// create a new task
const tasksFactory = (title, description, dueDate, priority, notes) => {
    return { title, description, dueDate, priority, notes};
};

export default tasksFactory;