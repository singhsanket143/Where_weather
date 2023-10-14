import HighlightCard from "../HighlightCards";

function HighLightRow() {
    return (
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>
            <HighlightCard title="UV Index"  data="3.8" footer="Low"/>


        </div>
    )
}

export default HighLightRow;