

// Defining the ui actions

class UI_actions
{

    // selecting all the object from the ui 
    constructor ()
    {
        this.country = document.querySelector('#country');  
        this.date = document.querySelector('#date');
        this.temp = document.querySelector('#temp');
        this.wind = document.querySelector('#wind');
        this.hum = document.querySelector('#hum');
        this.date2 = document.querySelector('#date2');
        this.img = document.querySelector('#val2');
        this.cloud = document.querySelector('#cloud');
        this.location = document.querySelector('#location')
        console.log(this.img)

    }

    printValue(object)
    {
        
        const time = new Date(object.dt * 1000)
        let year = `(${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()})`
        this.country.innerHTML = object.sys.country;
        this.date.innerHTML =  year;
        this.location.innerHTML = object.name;
        this.temp.innerHTML = Math.round((object.main.temp));
        this.wind.innerHTML = object.wind.speed;
        this.hum.innerHTML = object.main.humidity;
        this.cloud.innerHTML = object.weather[0].description;
        this.date2.innerHTML = this.time(object);
        this.img.setAttribute('src', this.imgvalue(object))
        console.log(this.img.src)

       
    
    }
    

    //img icon

    imgvalue(object)
    {
        let value = ''
        let check = object.weather[0].main.toLowerCase()
       
        switch (check)
        {
            case 'clouds':
                value = './images/clouds.png';
                break;
            case 'clear':
                value = './images/clear.png';
                break;
            case 'drizzle':
                value = './images/drizzle.png';
            case 'haze':
                value = './images/drizzle.png';
                break;
            case 'mist':
                value = './images/mist.png';
                break;
            case 'rain':
                value = './images/rain.png';
                break;
            case 'snow':
                value = './images/snow.png';
                break;
        }

        return value;

    }

    //display full date
    time(object)
    {

        const currentDate = new Date(object.dt * 1000);
    // Day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[currentDate.getMonth()];

    // Get date components
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Get time components
    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Display the formatted date and time
    const formattedDateTime = `${day}, ${dayOfWeek} ${month} ${year} ${hours}:${minutes}:${seconds}${ampm}`;

    return formattedDateTime;

    }
    showeer(err)
    {
        let val = document.querySelector('#see');
         val.style.display = "block";
         val.innerHTML = err;
        


        setTimeout(this.remverr, 2000)
    }

    remverr()
    {
        if (  document.querySelector('#see').style.display ==  "block")
        {
        document.querySelector('#see').style.display = "none";
        }
    }
}