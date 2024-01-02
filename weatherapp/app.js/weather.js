
// weather api


class weather
{
    // adding property to the construstor
    constructor(city)
    {
        this.key = "57670c04f841368ecd7cf9f998601964"
        this.city = city
    }
    async get ()
    {
        
        const respon = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`);

        const data = await respon.json();

        return data;
    }
    changelocation(city)
    {
        this.city = city;
    }
}
