import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from './readTask.js';

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]"); // tomando la fecha de html
    
    const value = input.value;
    const date = calendar.value;// tomando el valor de la fecha 
    const dateFormat = moment(date).format('DD/MM/YYYY');// dando formato con Moment

    if(value == '' || date == ''){
        return;
    }

    input.value = '';
    calendar.value ='';//se limpian los inputs
    const complete = false
    
    const taskObj ={// constante para almacentar value y date formar
        value,
        dateFormat,
        complete,
        id: uuid.v4() // se le agrega un identificador a cada Item
    };
    list.innerHTML = '';

    const taskList = JSON.parse(localStorage.getItem('tasks')) || []; //lee la informacion almacenada y la carga en la const tasklist
    taskList.push(taskObj);//se agrega los valores de value y DF al Array Tasklist
    localStorage.setItem("tasks", JSON.stringify(taskList)); // se convierte a un formato JSON
    
    displayTask()

    //const task = createTask(taskObj)// se crea la tarea y tiene como valor el Objte
    //list.appendChild(task);// se agrega la tarea a la lista
}


export const createTask = ({value,dateFormat,complete,id}) => {
    const task = document.createElement('li'); // se crea el elemento LI
            task.classList.add('card');// se le agrega la clase 'card'

    const taskContent = document.createElement('div'); // se crea el elemento Div
    const check = checkComplete(id)
    if(complete){ // si existe complete agrega estas clases
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');

    }

    const titleTask = document.createElement('span');// se crea el elemento 'span'
            titleTask.classList.add('task');// se le agrega la clase task
            titleTask.innerText = value;// se le agrega el valor que escribio el usuario
            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);// se agregan los hijos

    task.appendChild(taskContent);
    task.appendChild(deleteIcon(id));
    return task
};