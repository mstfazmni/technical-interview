let listOfItems = [];

const addTask = (title, id) => {
    return listOfItems.push({title, id, isCompleted: false});
}

const listAllTasks = () => {
    console.log(listOfItems);
}

const completeTask = (id) => {
    const chosenTask = listOfItems.find((task) => task.id === id);
    if (!chosenTask)  throw new Error("task does not exist!");
    chosenTask.isCompleted = true;
    console.log(chosenTask);
    return chosenTask;
}

const deleteTask = (id) => {
    const idx = listOfItems.findIndex((task) => task.id === id);
    if (idx === -1) {
        console.log("Task not found");
        return;
    }
    const deletedTask = listOfItems.splice(idx, 1);
    console.log("Deleted Task: ", deletedTask);
}

const listCompletedTasks = () => {
    console.log(listOfItems.filter((task) => task.isCompleted !== false));
}

const listNotCompletedTasks = () => {
    console.log(listOfItems.filter((task) => task.isCompleted === false));
}

addTask("going to gym", 1);
addTask("sleeping", 2);
addTask("take a shower", 3);

completeTask(2);

// deleteTask(1);

// listCompletedTasks();
listNotCompletedTasks()
listAllTasks();