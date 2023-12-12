import { useState, useEffect } from 'react';
import { getHourlyForecast, getWeeklyForecast } from '../api/api';
import HourlyWeather from './HourlyWeather';
import WeeklyWeather from './WeeklyWeather';
import { fetchCityName } from '../api/api';
import { assentChooser } from '../utils/chooser';
import '../styles/WeatherComponent.css'
import CurrentWeatherData from './CurrentWeatherData';

function WeatherComponent() {
    const [city, setCity] = useState('');
    const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
    const [weeklyWeatherData, setWeeklyWeatherData] = useState(null);
    const [error, setError] = useState(null);


    //To get the device's location.
    useEffect(() => {
        const fetchInitialWeatherData = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const cityName = await fetchCityName(lat, lon);
                    if (cityName) {
                        setCity(cityName);
                        const hourlyData = await getHourlyForecast(cityName);
                        const weeklyData = await getWeeklyForecast(cityName);
                        if (hourlyData && weeklyData) {
                            setHourlyWeatherData(hourlyData);
                            setWeeklyWeatherData(weeklyData);
                        } else {
                            setError('Failed to fetch weather data');
                        }
                    } else {
                        setError('Failed to fetch city name from coordinates');
                    }
                }, error => {
                    console.error("Error obtaining location: ", error);
                    setError('Failed to obtain location');
                });
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        fetchInitialWeatherData();
    }, []);


    const handleFetchWeather = async () => {
        setError(null);
        const hourlyData = await getHourlyForecast(city);
        const weeklyData = await getWeeklyForecast(city);
        if (hourlyData && weeklyData) {
            setHourlyWeatherData(hourlyData);
            setWeeklyWeatherData(weeklyData);
        } else {
            setError('Failed to fetch weather data');
        }
    };


    return (
        <div className='general-div' style={{
            backgroundImage: `url( ${hourlyWeatherData && hourlyWeatherData.current ? assentChooser(hourlyWeatherData.current.condition.text, hourlyWeatherData.current.is_day, 'background') : <></>})`,
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }}>
            <div className='input-submit-div'>
            <input
                className='city-input'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button className='submit-button' onClick={handleFetchWeather}>Get Weather</button>
            {error && <p className="error">{error}</p>}
            </div>

            <div className='default-current-hour-data' >
                {hourlyWeatherData && hourlyWeatherData.current && (
                    <>
                        <p className='current-weather-city-p'>{hourlyWeatherData.location.name}</p>
                        <p className='current-weather-temp-p'>{hourlyWeatherData.current.temp_c}°C</p>
                        <p className='current-weather-text-p'>{hourlyWeatherData.current.condition.text}</p>
                        <p className='current-weather-feelslike-p'>H:{Math.round(hourlyWeatherData.forecast.forecastday[0].day.maxtemp_c)} , L:{Math.round(hourlyWeatherData.forecast.forecastday[0].day.mintemp_c)}</p>
                    </>
                )}
            </div>
            <div className='scrollable-data-main-div'>
                <div className='daily-hourly-data-outer-div'>
                    <div className='outer-div weathercomponent-outer-hourly-div'>
                        {hourlyWeatherData && hourlyWeatherData.current && (
                            <HourlyWeather data={hourlyWeatherData} />
                        )}
                    </div>

                    <div className='outer-div weathercomponent-outer-weekly-div'>
                        {weeklyWeatherData && weeklyWeatherData.current && (
                            <WeeklyWeather data={weeklyWeatherData} />
                        )}
                    </div>
                </div>
                <div className='currentweatherdata-main-div'>
                    {hourlyWeatherData && hourlyWeatherData.current && (
                        <CurrentWeatherData data={hourlyWeatherData} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherComponent;
