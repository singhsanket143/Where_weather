import { BsDropletFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function Lowerhalf() {
    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);
    const location = useSelector((state: ReduxState) => state.forecast.data.location);
    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-between"> 
            <div className="flex flex-col">
                {/* precipitation */}
                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <AiFillCloud />
                    </div>
                    <div>
                        {currentData.condition}
                    </div>
                </div>

                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <BsDropletFill />
                    </div>
                    <div>
                        Perc - {currentData.chance_of_rain}%
                    </div>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                {/* location */}
                <div><MdLocationPin /></div>
                
                <div>{location.region}, {location.name}, {location.country}</div>
            </div>
        </div>
    )

}

export default Lowerhalf;