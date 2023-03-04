import React,{useState} from 'react';
import fetchWeather from './api/fetchWeather';
import { FaAirbnb } from "react-icons/fa";
import './App.css';
 const App=()=>{
    const [city,setCity]=useState('');
    const [weather, setWeather] = useState({});
    const search=async(e)=>{
            if(e.key=="Enter"){
                const weatherData=await fetchWeather(city);
                setWeather(weatherData);
            }
    }
    return (
      <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="Search weather..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={search}
        />
        {
            weather.main&&(
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                </div>
            )
        }
      </div>
    );
}

export default App;