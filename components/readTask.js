import { createTask } from "./addtask.js"
import dateElement from "./dateElement.js";
import { uniqueDates,orderDates} from "../services/date.js";

export const displayTask =() =>{ // se crea la funcion read task
    const list = document.querySelector("[data-list]"); //se selecciona la lista para agregar las tareas que ya tenemos
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [] //se obtiene la informacion almacenada el en local storage
    const dates = uniqueDates(taskList);
    orderDates(dates)

    dates.forEach(date =>{
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date))
        taskList.forEach((task)=>{ // se recorre el arreglo
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate)
            
            if (diff == 0 ){
                list.appendChild(createTask(task)); // se crean las tareas de cada array
            }
        })

    })
}

