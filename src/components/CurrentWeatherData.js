import '../styles/CurrentWeatherData.css';

const CurrentWeatherData = ({ data }) => {
    const {
        cloud,
        uv,
        vis_km,
        feelslike_c,
        temp_c,
        humidity,
        wind_dir,
        wind_kph
    } = data.current;

    const {
        sunrise,
        sunset
    } = data.forecast.forecastday[0].astro;

    return (
        <>
            <div className="currentweatherdata-secondary-div cloud-div">
                <div>
                    <img src='/componentsIcons/clouds.svg' />
                    <p>Clouds:</p>
                </div>
                <span>{cloud}%</span>
            </div>

            <div className="currentweatherdata-secondary-div feelslike-div">
                <div>
                    <img src='/componentsIcons/temperature.svg' />
                    <p>Feels Like:</p>
                </div>
                <span>{feelslike_c}°C</span>
                {temp_c > feelslike_c ? <p>Feels colder because of the wind.</p> : <></>}
            </div>

            <div className="currentweatherdata-secondary-div sunrise-sunset-div">
                <div>
                    <img src='/componentsIcons/sunrise.svg' />
                    <p> Sunrise:</p>
                </div>
                <span>{sunrise}</span>

                <div>
                    <img src='/componentsIcons/sunset.svg' />
                    <p>Sunset:</p>
                </div>
                <span>{sunset}</span>
            </div>

            <div className="currentweatherdata-secondary-div uv-div">
                <div>
                    <img src='/componentsIcons/UV.svg' />
                    <p>UV:</p>
                </div>
                <span>{uv}</span>
                {uv < 5 ? <p className='uv-p'>Low</p> : <p className='uv-p'>High</p>}
            </div>

            <div className="currentweatherdata-secondary-div humidity-div">
                <div>
                    <img src='/componentsIcons/humidity.svg' />
                    <p>Humidity:</p>
                </div>
                <span>{humidity}%</span>
            </div>

            <div className="currentweatherdata-secondary-div visual-div">
                <div>
                    <img src='/componentsIcons/visibility.svg' />
                    <p>Visibility:</p>
                </div>
                <span>{vis_km}KM</span>
            </div>

            <div className="currentweatherdata-secondary-div wind-direction-div">
                <div>
                    <img src='/componentsIcons/compass.svg' />
                    <p>Wind Direction:</p>
                </div>
                <span>{wind_dir}</span>
            </div>

            <div className="currentweatherdata-secondary-div wind-kph-div">
                <div>
                    <img src='/componentsIcons/wind.svg' />
                    <p>Wind Speed:</p>
                </div>
                <span>{wind_kph}KPH</span>
            </div>
        </>
    )
};


export default CurrentWeatherData;