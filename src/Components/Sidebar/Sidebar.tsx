import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./UpperHalf";

function Sidebar() {
    return (
        <div className="basis-3/12 flex flex-col items-center justify-center text-black h-full rounded-tl-3xl rounded-bl-3xl" style={{background: 'rgba(255,255,255,0.81'}}>
            <Upperhalf />
            <Lowerhalf />
        </div>
    )
}

export default Sidebar;