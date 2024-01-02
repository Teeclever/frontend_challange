
// store nfo to local storage
class storage
{
    constructor(city)
    {
        this.city = city;
        this.defcity = 'new york';
    }

    set(city)
    {
    
        localStorage.setItem('city', city)
    }
    getlocation()
    {
        let val =''
        if (localStorage.getItem('city') !== null)
        {
           val = localStorage.getItem('city')
        }
        else
        {
            val = this.defcity;
        }


        return val
    }



}