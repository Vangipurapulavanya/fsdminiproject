import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Mumbai",
        feelsLike: 301.29,
        humidity:61,
        temp:300.14,
        tempMax:300.14,
        tempMin:300.14,
        weather:"haze",
    });

    let updateInfo = (newinfo) => {
      setWeatherInfo(newinfo);
    }

    return(
        <div>
            <h2>Weather App </h2>
            <SearchBox updateInfo = {updateInfo}/>
            <br></br>

            <InfoBox info = {weatherInfo}/>
        </div>
    )
}