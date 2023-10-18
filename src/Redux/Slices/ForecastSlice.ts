import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ForecastDataState from "../../Interfaces/ForecastDataState";
import axiosInstance from '../../Config/axiosInstance';
const initialState : ForecastDataState = {
    status: 'default',
    data: {
        location: {
            country: '',
            region: '',
            name: '',
            localtime: ''
        },
        dayForecast: [],
        currentData: {
            uv: 0,
            wind_kmph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            sunrise: '',
            sunset: '',
            temp_c: 0,
            temp_f: 0,
            condition: '',
            is_day: false,
            chance_of_rain: 0,
        }
    },
}

export const fetchData = createAsyncThunk('data/fetchdata', async (city: string) => {
    try {
        const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${city}`);
        console.log(response);
        return response;
    } catch(error) {
        console.log(error);
    }
});

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if(!action.payload) return;
            console.log(action.payload)
            state.status = 'success';
            const {location, forecast, current} = action.payload.data;

            // setting location
            state.data.location.country = location?.country;
            state.data.location.region = location?.region;
            state.data.location.name = location?.name;
            state.data.location.localtime = location?.localtime;

            state.data.dayForecast = forecast.forecastday.map((foreCastItem : any) => {
                return {
                    date: foreCastItem.date,
                    avgtemp_c: foreCastItem.day.avgtemp_c,
                    avgtemp_f: foreCastItem.day.avgtemp_f,
                    condition: foreCastItem.day.condition.text,
                }
            });


            // setting currentData

            state.data.currentData.uv = current.uv;
            state.data.currentData.wind_kmph = current.wind_kph;
            state.data.currentData.humidity = current.humidity;
            state.data.currentData.vis_km = current.vis_km;
            state.data.currentData.aqi = current.air_quality.pm2_5;
            state.data.currentData.temp_c = current.temp_c;
            state.data.currentData.temp_f = current.temp_f;
            state.data.currentData.is_day = current.is_day;
            state.data.currentData.condition = current.condition.text;
            state.data.currentData.sunrise = forecast.forecastday[0].astro.sunrise;
            state.data.currentData.sunset = forecast.forecastday[0].astro.sunset;
            state.data.currentData.chance_of_rain = forecast.forecastday[0].day.daily_chance_of_rain;
            
        })
        .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
        })
    }
});


export default forecastSlice.reducer;