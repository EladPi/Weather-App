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
                    <img src='/componentsIcons/clouds.svg' alt='clouds' />
                    <p>Clouds:</p>
                </div>
                <span>{cloud}%</span>
            </div>

            <div className="currentweatherdata-secondary-div feelslike-div">
                <div>
                    <img src='/componentsIcons/temperature.svg' alt='temperature' />
                    <p>Feels Like:</p>
                </div>
                <span>{feelslike_c}°C</span>
                {temp_c > feelslike_c ? <p>Feels colder because of the wind.</p> : <></>}
            </div>

            <div className="currentweatherdata-secondary-div sunrise-sunset-div">
                <div>
                    <img src='/componentsIcons/sunrise.svg' alt='sunrise' />
                    <p> Sunrise:</p>
                </div>
                <span>{sunrise}</span>

                <div>
                    <img src='/componentsIcons/sunset.svg' alt='sunset' />
                    <p>Sunset:</p>
                </div>
                <span>{sunset}</span>
            </div>

            <div className="currentweatherdata-secondary-div uv-div">
                <div>
                    <img src='/componentsIcons/UV.svg' alt='uv'/>
                    <p>UV:</p>
                </div>
                <span>{uv}</span>
                {uv < 5 ? <p className='uv-p'>Low</p> : <p className='uv-p'>High</p>}
            </div>

            <div className="currentweatherdata-secondary-div humidity-div">
                <div>
                    <img src='/componentsIcons/humidity.svg' alt='humidity' />
                    <p>Humidity:</p>
                </div>
                <span>{humidity}%</span>
            </div>

            <div className="currentweatherdata-secondary-div visual-div">
                <div>
                    <img src='/componentsIcons/visibility.svg' alt='visibility'/>
                    <p>Visibility:</p>
                </div>
                <span>{vis_km}KM</span>
            </div>

            <div className="currentweatherdata-secondary-div wind-direction-div">
                <div>
                    <img src='/componentsIcons/compass.svg' alt='compass'/>
                    <p>Wind Direction:</p>
                </div>
                <span>{wind_dir}</span>
            </div>

            <div className="currentweatherdata-secondary-div wind-kph-div">
                <div>
                    <img src='/componentsIcons/wind.svg' alt='wind'/>
                    <p>Wind Speed:</p>
                </div>
                <span>{wind_kph}KPH</span>
            </div>
        </>
    )
};


export default CurrentWeatherData;