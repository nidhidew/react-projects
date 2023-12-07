import React, { useEffect,useState } from 'react'

export default function Weather() {
    const [weather,setWeather] = useState(null);
    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9f999af6deda5392d0a936f84fc145df`)
                .then((response) => response.json())
                .then((data) => setWeather(data));
            })
        }
    },[])
  return (
    <div>
       {weather ? (
        <div>
            <h2> Current Weather </h2>
            <p>Tempreature : {weather.main.temp}</p>
            <p>Conditions : {weather.weather[0].description}</p>
        </div>
       ) : (
        <p>
            Loading . . .
        </p>
       )}
    </div>
  )
}
