import { addTask } from "./addtask.js";
import { displayTask } from "./readTask.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click',() => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li =document.querySelector("[data-list");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id == id);
  const newTasks = tasks.splice(index,1);// elimina la tarea del arreglo
  li.innerHTML = "" // limpia la lista de tareas
  localStorage.setItem("tasks",JSON.stringify(tasks));
  displayTask()
};

export default deleteIcon;
