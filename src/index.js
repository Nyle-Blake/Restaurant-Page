import './style.css';

import { createMain } from './module_main.js';
// import { createMenu } from './module_menu.js;';
// import { createContacts } from './module_contacts.js';

const mainBtn = document.querySelector('#main');
const menuBtn = document.querySelector('#menu');
const contactsBtn = document.querySelector('#contacts');

mainBtn.addEventListener('click', () => {
  createMain
})

// menuBtn.addEventListener('click', () => {
//   createMenu
// })

// contactsBtn.addEventListener('click', () => {
//   createContacts
// })

createMain;