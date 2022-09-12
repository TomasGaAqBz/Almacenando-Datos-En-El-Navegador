import { addTask } from './components/addtask.js';

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
