import TempCard from "../TempCard";
import CloudyTemp from '../../Assets/Cloudytemp.png';
import ReduxState from "../../Interfaces/ReduxState";
import { useSelector } from "react-redux";
function WeekRow() {
    const dayForecast = useSelector((state: ReduxState) => state.forecast.data.dayForecast);

    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    return (
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">
            {dayForecast && dayForecast.map((forecast) => {
                return <TempCard title={weekdays[(new Date(forecast.date)).getDay()]} temperature={forecast.avgtemp_c.toString()} image={CloudyTemp} />
            })}
        </div>
    )
}

export default WeekRow;