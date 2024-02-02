import TopButtons from "./Comonents/TopButtons";
import Input from "./Comonents/Input";
import TimeAndLocation from "./Comonents/TimeAndLocation";
import TempratureAndDetails from "./Comonents/TempratureAndDetails";
import DaysForecast from "./Comonents/DaysForecast";
import getFormattedWeatherData from "./utils/constants";
import { useEffect, useState } from "react";


function App() {

  const[ query , setQuery ] = useState({q: 'berlin'});
  const[ units , setUnits ] = useState('metri');
  const[ weather , setWeather ] = useState('null');

  useEffect(()=>{
     const fetchWeather = async () => {
    const data = getFormattedWeatherData({ ...query, units}).then(
      (data) => {
        setWeather(data);
      });
  }
  fetchWeather();
  } ,[query,units]);


  return (
    <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery } />
      <Input setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
        <div>
        <TimeAndLocation weather={weather} />
      <TempratureAndDetails   weather={weather}/>
      <DaysForecast title="hourly forecast" items={weather.hourly} />
      <DaysForecast title="daily forecast" items={weather.daily} />
      </div>
      )}  
      
    </div>
  );
};

export default App;
