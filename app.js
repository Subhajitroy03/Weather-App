
async function fetchWeather() {
    cityname=document.querySelector("#cityInput").value;
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+cityname;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3cec9a4984mshc2dfcb3bdd08ba8p13c03fjsn58b43683b84e',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

	try {
		const response = await fetch(url, options);
		const result = await response.json();

        //cityname
        city=document.querySelector("#cityName");
        city.innerHTML=(result.location.name)+","+(result.location.region)+","+(result.location.country);
        //TEMP
        temp=document.querySelector("#temperature");
        temp.innerHTML="Temperature: "+(result.current.temp_c)+"°C";
        //lastupdate
        lastupdate=document.querySelector("#lastupdated");
        lastupdate.innerHTML="Last Updated: "+(result.current.last_updated);
        //Humidity
        humidity=document.querySelector("#humidity");
        humidity.innerHTML="Humidity: "+(result.current.humidity)+"%";
        //feelslike
        feels=document.querySelector("#feelslike");
        feels.innerHTML="Feels Like: "+(result.current.feelslike_c)+"°C";
        //prep
        prep=document.querySelector("#precipitation");
        prep.innerHTML="Precipitation: "+(result.current.precip_mm)+"mm";
        //windspeed
        ws=document.querySelector("#windspeed");
        ws.innerHTML="Windspeed: "+(result.current.wind_kph)+" km/hr";
        //condition
        con=document.querySelector("#conditions");
        con.innerHTML="Conditions: "+(result.current.condition.text);

	} catch (error) {
		throw new Error("This Location is not found!!");
	}
}


