import axios from 'axios';
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.API_KEY;
const fetchWeather=async(query)=>{
    const {data}=await await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            appid:API_KEY,
        }
    });
    return data;
}

export default fetchWeather;