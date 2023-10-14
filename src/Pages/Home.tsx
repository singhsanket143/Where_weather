import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import NightImage from "../Assets/night.jpg";
import { useEffect } from "react";
import { fetchData } from "../Redux/Slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";
function Home() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className="min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" style={{backgroundSize: 'cover', backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NightImage})`}}>
            <Sidebar />
            <MainData />
        </div>
    )
}

export default Home;