import { useSelector } from "react-redux";
import HighlightCard from "../HighlightCards";
import ReduxState from "../../Interfaces/ReduxState";

function HighLightRow() {
    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

    function uvRange() : string {
        if(currentData.uv <= 5) return "low";
        else if(currentData.uv > 5 && currentData.uv < 8) return "moderate";
        else return "high";
    }

    return (
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighlightCard title="UV Index"  data={currentData.uv.toString()} footer={uvRange()}/>
            <HighlightCard title="Wind Status"  data={currentData.wind_kmph.toString()} footer="km/h"/>
            <HighlightCard title="Humidity"  data={currentData.humidity.toString() + "%"} footer="Low"/>
            <HighlightCard title="Visibility"  data={currentData.vis_km.toString()} footer="Low"/>
            <HighlightCard title="Sunrise & Sunset"  data={currentData.sunrise} footer={currentData.sunset}/>
            <HighlightCard title="Air quality"  data={currentData.aqi.toString()} footer="Low"/>
        </div>
    )
}

export default HighLightRow;