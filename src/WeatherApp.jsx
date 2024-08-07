import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";


export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Odisha",
        feelsLike:35.5,
        humidity:47,
        temp:33.02,
        tempMax:33.02,
        tempMin:33.02,
        weather:"overcast clouds",
    });

    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}