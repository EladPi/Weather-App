import { assentChooser } from "../utils/chooser";

const HourlyWeather = ({ data }) => {
    const now = data.location.localtime;
    const currentTime = now.slice(-5,-3);
    // console.log(data);
    return (
        <>
            {data.forecast.forecastday[0].hour.map(h => (
                <div className='data-div' key={h.time} style={currentTime === h.time.slice(-5,-3) ? {backgroundColor: 'rgb(197, 218, 237)' } : {}}>
                    <p className="data-time">{currentTime == h.time.slice(-5, -3) ? 'Now' : `${h.time.slice(-5, -3)}hr`}</p>
                    <img className='data-img' src={assentChooser(h.condition.text , h.is_day)} alt="Weather icon" />
                    <p className='data-degrees'>{Math.round(h.temp_c)}°C</p>
                </div>
            ))}
        </>
    )
}

export default HourlyWeather;