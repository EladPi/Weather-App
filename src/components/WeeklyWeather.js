import { assentChooser } from "../utils/chooser";

const nameOfDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


const WeeklyWeather = ({ data }) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    //console.log(currentDay);
    return  (
        <>
            {data.forecast.forecastday.map(d => {
                const dateObject = new Date(d.date);
                const dayOfWeek = dateObject.getUTCDay();

                return (
                    <div className='data-div' key={d.date}>
                        <p className="data-time">{currentDay == dayOfWeek ? 'Today' : nameOfDays[dayOfWeek]}</p>
                        <img className='data-img' src={assentChooser(d.day.condition.text)} alt="Weather Icon" />
                        <p className='data-degrees'>{Math.round(d.day.avgtemp_c)}°C</p>
                    </div>
                );
            })}
        </>
    )
}

export default WeeklyWeather;