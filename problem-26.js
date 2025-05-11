const tasks = [];

const addTasks = (task) => {
  tasks.push(task);
  console.log(`task : ${task} has been added`);
};

addTasks("buy groceries");
addTasks("buy pants");
addTasks("buy computer");

const listTasks = () => {
  if (tasks.length === 0) {
    console.log("No task is found");
  } else {
    console.log("tasks : ");
    tasks.forEach((task, index) => {
      console.log(`${index + 1} . ${task}`);
    });
  }
};

const removeTask = (index) => {
  if (index >= 0 && index <= tasks.length) {
    const remTask = tasks.splice(index, 1)[0];
    console.log(`Task ${remTask} has been removed`);
  } else {
    console(`Invalid task index`);
  }
};

listTasks();
removeTask(0);
