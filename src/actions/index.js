import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    // axios return a promise 
    // console.log('Request:',request);
    // payload is the data for the action 
    // we return the promise as the payload 
    return {
        type : FETCH_WEATHER,
        payload : request
    };
}
// redux-promise is a middleware receives a promise
// it stops the action waits until the promise resolves
// and then sends the answer received from the server as a payload to the reducer
