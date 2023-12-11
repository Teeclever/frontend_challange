

// Function to load tasks from local storage
function Fromstorage() {

    // loadvalue from storage 
    let arr;
    if (localStorage.getItem("tasks") !== null) {
        // Load the list from local storage if available
        arr = JSON.parse(localStorage.getItem("tasks"));
    } else {
        // If not available, create a new array
        arr = [];
    }

    
    //loading from array of objects
    arr.forEach((dic) => {

    // Create an HTML element to add to the ul list
    let li = document.createElement("li");
    li.className = "item";
    // Append text node to the li with the value given by the user from the input field
    // li.appendChild(document.createTextNode(value));
   let  div = document.createElement("div");
   let span1 = document.createElement("span");
   let span2 = document.createElement("span");
   let span3 = document.createElement("span")
   div.className = "edit";
    span1.className = "edit1"
    span2.className = "edit2";
    span1.innerHTML = '<input type="checkbox" id="tick">'
    span1.appendChild(document.createTextNode(dic.value));
   div.appendChild(span1);
   span2.innerHTML = '<i class="fa-solid fa-thin fa-clock"></i>';

   span3.textContent = dic.date;
    span2.appendChild(span3)
  div.appendChild(span2);
    li.appendChild(div)

    // Create an 'a' tag
    let a = document.createElement('a');
    a.innerHTML = "<i class='fa fa-remove'></i>";
    a.className = "del";
    a.setAttribute("href", "#");


    // Append 'a' tag as a child node to the li list
    li.appendChild(a);
if (dic.completed == true)
{
  span1.firstElementChild.checked  =  !span1.firstElementChild.checked
}
    
// Check if the task is completed and apply the 'done' class
  if (dic.completed) {
    span1.parentElement.classList.toggle("add")
  }


    // Append the list item to the ul
        ul.appendChild(li);


    });
    

}
