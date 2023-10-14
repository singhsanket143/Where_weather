import HighLightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
    return (
        <div className="overflow-y-auto flex flex-col justify-start py-4 items-center basis-9/12 text-black bg-[#f6f6f8] rounded-br-3xl rounded-tr-3xl">
            <TopRow />
            <WeekRow />
            <div className="font-semibold text-2xl mt-8 text-left w-full px-12 py-2">
                Today's Highlights 
            </div>
            <HighLightRow />
        </div>
    )
}

export default MainData;