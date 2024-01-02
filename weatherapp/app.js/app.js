

// from local storage

const store = new storage()

// call weather api
const api = new weather(store.getlocation());


console.log(store.getlocation())
//call an instance if UI actions

const UI = new UI_actions()




// loading loading form dom
document.addEventListener('DOMContentLoaded', show)

// selecting from input field


const search = document.querySelector('#sub');


search.addEventListener('click', () =>
{
    const input = document.querySelector('#val');

    if (input.value != '')
    {

        //savving cityname to localstorage

        store.set(input.value);
        
        api.changelocation(input.value);

        //calling the show function to instaize the ui
        show();
                    //show the ui
        document.querySelector('.part2').style.display = "block"
        input.value = ""
    }
    else
    {
        

        UI.showeer('please enter a value');
    }

    

})
/// A function that load from athe api and also update the UI

function show()
{
    
    api.get().then( (object) =>
    {
        if (object.cod == 404)
        {
       
            
            UI.showeer(object.message);
   
        }
        else
        {
               
            UI.printValue(object);
              
            

            console.log(object); 
        }

    })
}