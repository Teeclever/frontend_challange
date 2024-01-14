/**
 * Calculator-app
 * @teeclever - author
 *
 * This script powers a simple calculator web application.
 * It includes features such as theme changing, real-time time display,
 * cursor blinking, and button interaction.
 */

import { Ui_action } from './U_actions.js';

// Instantiate Ui_action class
const action = new Ui_action();

// Event listener for theme change
const themeChange = document.querySelector('.tick').addEventListener('click', (e) => {
  // Call the method from Ui_action that changes the theme color
  action.changeTheme(e);
});

// Time display update everyy second
setInterval(function () {
  action.time.innerHTML = action.timeval();
}, 1000);

// Cursor blinking every 900 millisecondss
setInterval(function () {
  const cursorElement = document.querySelector('.cursor');
  if (cursorElement.textContent === '|') {
    cursorElement.textContent = '';
  } else {
    cursorElement.textContent = '|';
  }
}, 900);

// Event delegation for button clicks in the .row3 element
const button = document.querySelector('.row3').addEventListener('click', (e) => {
  // Call the calculate method from Ui_action on button click
  action.calculate(e);
});
