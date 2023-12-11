// Variable declaration
let val;

// Selecting necessary elements from the DOM
const form = document.querySelector("form"),
      inputField = document.querySelector('#input1'),
      filter1 = document.querySelector('#input2'),
      ul = document.querySelector('ul'),
      clearALL = document.querySelector('.btn2');


// Load all events
loadEvent();

// Function to load all events
function loadEvent() {
    // Load from local storage
    document.addEventListener('DOMContentLoaded', Fromstorage);

    // Event to add a task to the list
    form.addEventListener('submit', Onclick);

    // Event to remove items from the list using event delegation (triggered from parent to child)
    ul.addEventListener('click', Ondeligation);

    // Event to remove all list items
    clearALL.addEventListener('click', Onremove);

    // Event to filter tasks
    filter1.addEventListener('keyup', Onfilter);

     // Event for checkbox
  ul.addEventListener('click', OnCheckboxClick);
}




inputField.val = ""
// Function to add a task to the list
function Onclick(e) {
    // Create a node element to add to the list items
    let valueInput = inputField.value;
    

// saving all the data information on an object
    let dict =
    {
        value:valueInput,
        date: datevalue(),
        completed:false,
    }


    // Create an HTML element to add to the ul list
    let li = document.createElement("li");
    li.className = "item";

    /// section for create the list items and adding class name them

    // creating the first div items that will be append to the li

   let  div = document.createElement("div");
   let span1 = document.createElement("span");
   let span2 = document.createElement("span");
   let span3 = document.createElement("span")
   div.className = "edit";
    span1.className = "edit1"
    span2.className = "edit2";
    div.appendChild(span1);
  
    span1.innerHTML = '<input type="checkbox" id="tick">'
    span1.appendChild(document.createTextNode(dict.value));
   
   span2.innerHTML = '<i class="fa-solid fa-thin fa-clock"></i>';

   span3.textContent = dict.date;
    span2.appendChild(span3)
  div.appendChild(span2);
    li.appendChild(div)


    // Create an 'a' tag that will act as the seconf flex iteam also be append to the li
    let a = document.createElement('a');
    a.innerHTML = "<i class='fa fa-remove'></i>";
    a.className = "del";
    a.setAttribute("href", "#");


    // Append 'a' tag as a child node to the li list
    li.appendChild(a);


      // Check if the task is completed and apply the 'done' class
//   if (dict.completed) {
//     li.firstElementChild.classList.add('add');
//   }
    // Append the list item to the ul when submitted, checking before appending
    if (dict.value !== "") {

        ul.insertBefore(li, ul.firstElementChild);

        // Add tasks to local storage
        storage(dict);
        alert("List has been added successfully");
    }

    // Clear the input field value
    inputField.value = "";
}



// Function to store a value in local storage
function storage(dict) {

    // for values 
    let array;
    if (localStorage.getItem("tasks") !== null) {
        // Load the list from local storage if available
        array = JSON.parse(localStorage.getItem("tasks"));
    } else {
        // If not available, create a new array
        array = [];
    }

    array.unshift(dict)
    
       // Restore the list back to local storage
    localStorage.setItem("tasks", JSON.stringify(array));
}


// Function to remove an item from the list
function Ondeligation(e) {
    // Target the cross icon button and traverse the node to check the parent node, then remove it if clicked
    if (e.target.parentNode.classList.contains('del')) {
        // if (confirm(`Are you sure you want to remove: "${e.target.parentNode.parentNode.textContent}" from the list?`)) {
        //     console.log()


            e.target.parentNode.parentNode.remove();
           

            // Remove item from local storage
            let array = JSON.parse(localStorage.getItem('tasks'));



            // Get the index of an item that is clicked
            valueOfnode = e.target.parentNode.parentNode.textContent.trim()
 

            //find bothwrk and date for it to match
            let number = array.findIndex(array => array.value + array.date == valueOfnode);
            
            //then romving the object in the array
            array.splice(number, 1);

            //then save

            localStorage.setItem("tasks", JSON.stringify(array))

        // }
    }
}

// Function to remove all list items
function Onremove(e) {

        //first method

        // ul.innerHTML = ""
    //or

    // Confirm before clearing all list items
    if (confirm("Are you sure you want to clear all list?")) {
        // Clear all list items by removing every first child (fastest way to remove)
        while (ul.firstElementChild) {
            ul.firstElementChild.remove();
        }

        // Clear all from local storage
        localStorage.clear();
    }
}

// Event to filter tasks
function Onfilter(e) {
    // Get the value and convert to lowercase for case-insensitive comparison
    let value = e.target.value.toLowerCase();

    // Get all list items
    let arr = document.querySelectorAll('li');

    arr.forEach((task) => {
        const item = task.textContent;

        // Check if the value typed matches any part of the text content of the list items
        if (item.toLowerCase().indexOf(value) !== -1) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
    console.log(value);
}


// Function to handle checkbox click
function OnCheckboxClick(e) {
    // Check if the clicked element is a checkbox
    if (e.target.type === 'checkbox') {
      // Get the parent li element
      tee = e.target.parentNode.parentNode
  

    if (e.target.value == "on")
    {
        tee.classList.toggle("add");
      
    }
    

    /// updating this event on local storage


    array = JSON.parse(localStorage.getItem("tasks"));

  // Get the index of an item that is clicked
     valueOfnode = e.target.parentNode.parentNode.textContent.trim()
        


     //find bothwrk and date for it to match
   

     let number = array.findIndex(array => array.value + array.date == valueOfnode);
     if (number != -1 && array[number].completed == true)
     {

        console.log(e.target.value)
        array[number].completed = false;
       
     }
     else
     
     {
        array[number].completed = true;
     }

     localStorage.setItem("tasks", JSON.stringify(array))
        


    }
  }
  



