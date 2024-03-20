import './style.css';

import { createMain } from './module_main.js';
import { createMenu } from './module_menu.js';
import { createContacts } from './module_contacts.js';

createMain();

const mainBtn = document.querySelector('#main');
const menuBtn = document.querySelector('#menu');
const contactsBtn = document.querySelector('#contacts');

if (mainBtn == null) {
  console.log('IT IS NULL')
}

mainBtn.addEventListener("click", () => {
  document.body.innerHTML = '';
  createMain()
})

menuBtn.addEventListener('click', () => {
  document.body.innerHTML = '';
  createMenu()
})

contactsBtn.addEventListener('click', () => {
  document.body.innerHTML = '';
  createContacts()
})