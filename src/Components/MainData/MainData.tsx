import HighLightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
    return (
        <div className="flex flex-col justify-between py-4 items-center basis-9/12 text-black h-full bg-[#f6f6f8] rounded-br-3xl rounded-tr-3xl">
            <TopRow />
            <WeekRow />
            <div>
                Today's Highlights 
            </div>
            <HighLightRow />
        </div>
    )
}

export default MainData;