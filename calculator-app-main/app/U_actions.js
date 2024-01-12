export class Ui_action {
  constructor () {
    // Initialize properties with references to various elements in the DOM
    this.head = document.querySelector('head').querySelectorAll('link');
    this.head = Array.from(this.head).slice(1, 3);
    this.time = document.querySelector('.time');
    this.cursor = document.querySelector('.cursor');
    this.dispayval = document.querySelector('.input');
    this.dispayans = document.querySelector('.input1');
  }

  // Method to get the current time in 12-hour format with AM/PM
  timeval () {
    const currenttime = new Date();
    let hour = currenttime.getHours();
    let min = currenttime.getMinutes();
    let sec = currenttime.getSeconds();
    let meridiem = 'AM';

    // Convert to 12-hour format
    if (hour > 12) {
      hour -= 12;
      meridiem = 'PM';
    } else if (hour === 0) {
      hour = 12;
    }

    // Ensure single-digit minutes and seconds are displayed with leading zeros
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    const together = `${hour}:${min}:${sec} ${meridiem}`;

    return together;
  }

  // Method to change the theme based on the clicked button
  changeTheme (obj) {
    if (obj.target.classList.contains('bar1')) {
      this.head[0].href = './css/styles1.css';
      this.head[1].href = './css/grid1.css';
    } else if (obj.target.classList.contains('bar2')) {
      this.head[0].href = './css/styles2.css';
      this.head[1].href = './css/grid2.css';
    } else if (obj.target.classList.contains('bar3')) {
      this.head[0].href = './css/styles3.css';
      this.head[1].href = './css/grid3.css';
    }
  }

  // Method to perform calculations based on button clicks
  calculate (e) {
    const btn = e.target;

    if (btn.type === 'button') {
      // Handle different button values to update the display value
      if (btn.value !== 'Del' && btn.value !== '=' && btn.value !== 'C') {
        // Handle numeric and operator buttons
        if (btn.value === 'X') btn.value = '*';

        if (btn.value === '+' || btn.value === '/' || btn.value === '-' || btn.value === '*') {
          this.dispayval.innerHTML += ' ' + btn.value + ' ';
        } else {
          this.dispayval.innerHTML += btn.value;
        }
      } else if (btn.value === '=') {
        // Perform the calculation and display the result
        this.dispayans.innerHTML = eval(this.dispayval.innerHTML);
      } else if (btn.value === 'Del') {
        // Handle deletion of the last input
        let hold = Array.from(this.dispayval.innerHTML);
        // Filtering spaces before popping them off the screen
        hold = hold.filter((val) => val != ' ');
        // Popping the last value
        hold.pop();
        // Adding spaces to the signs before the pop
        hold = hold.map((val) => {
          if (val === '+' || val === '-' || val === '/' || val === '*') {
            val = ` ${val} `;
          }
          return val;
        });
        const value = hold.join('');
        this.dispayval.innerHTML = value;
      } else if (btn.value === 'C') {
        // Clearing the display values
        this.dispayval.innerHTML = '';
        this.dispayans.innerHTML = '';
      }

      // Handle percentage calculation
      if (btn.value === '%') {
        let ans = this.dispayval.innerHTML;
        ans = ans.split('%');
        ans = ans[0] / 100;
        this.dispayans.innerHTML = ans;
        this.dispayval.innerHTML = 0;
      }
    }
  }
}
