import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]"); // tomando la fecha de html
    const value = input.value;
    const date = calendar.value;// tomando el valor de la fecha 
    const dateFormat = moment(date).format('DD/MM/YYYY');// dando formato con Moment


    input.value = '';
    calendar.value ='';//se limpian los inputs
    const taskObj ={// constante para almacentar value y date formar
        value,
        dateFormat
    };
    
    const taskList = JSON.parse(localStorage.getItem('tasks')) || []; //lee la informacion almacenada y la carga en la const tasklist
    taskList.push({value,dateFormat});//se agrega los valores de value y DF al Array Tasklist
    localStorage.setItem("tasks", JSON.stringify(taskList)); // se convierte a un formato JSON
    const task = createTask(taskObj)// se crea la tarea y tiene como valor el Objte
    list.appendChild(task);// se agrega la tarea a la lista
}


export const createTask = ({value,dateFormat}) => {
    const task = document.createElement('li'); // se crea el elemento LI
            task.classList.add('card');// se le agrega la clase 'card'

    const taskContent = document.createElement('div'); // se crea el elemento Div

    const titleTask = document.createElement('span');// se crea el elemento 'span'
            titleTask.classList.add('task');// se le agrega la clase task
            titleTask.innerText = value;// se le agrega el valor que escribio el usuario
            taskContent.appendChild(checkComplete());
            taskContent.appendChild(titleTask);// se agregan los hijos

    const dateElement = document.createElement("span"); // se crea el 'span' para poner la fecha
            dateElement.innerHTML= dateFormat;
            task.appendChild(taskContent);
            task.appendChild(dateElement);
            task.appendChild(deleteIcon());
    return task
};