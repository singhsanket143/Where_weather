import { BsDropletFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

function Lowerhalf() {
    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-between"> 
            <div className="flex flex-col">
                {/* precipitation */}
                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <AiFillCloud />
                    </div>
                    <div>
                        Partially cloudy
                    </div>
                </div>

                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <BsDropletFill />
                    </div>
                    <div>
                        Perc - 10%
                    </div>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                {/* location */}
                <div><MdLocationPin /></div>
                
                <div>Bengaluru, KA, India</div>
            </div>
        </div>
    )

}

export default Lowerhalf;