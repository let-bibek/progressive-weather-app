import axios from 'axios';
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '09af124a27b2d94afa413b3729579669';
const fetchWeather=async(query)=>{
    const {weather_data}=await await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            appid:API_KEY
        }
    });
    return weather_data;
}

export default fetchWeather;