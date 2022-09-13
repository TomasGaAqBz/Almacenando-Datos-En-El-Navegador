import { createTask } from "./addtask.js"
export const readTask =() =>{ // se crea la funcion read task
    const list = document.querySelector("[data-list]"); //se selecciona la lista para agregar las tareas que ya tenemos
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [] //se obtiene la informacion almacenada el en local storage


    taskList.forEach((task)=>{ // se recorre el arreglo
        list.appendChild(createTask(task)); // se crean las tareas de cada array
    })
}