import TempCard from "../TempCard";
import CloudyTemp from '../../Assets/Cloudytemp.png';
function WeekRow() {
    return (
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
            <TempCard title="Friday" temperature="25.3°C" image={CloudyTemp} />
        </div>
    )
}

export default WeekRow;