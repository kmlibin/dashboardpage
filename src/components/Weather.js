import React, { useState, useEffect } from "react";

export default function Weather({ lat, lon }) {
  const [loading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState();

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0a430b4c9cea94f2ec8d3907dec15777&units=imperial`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(weatherUrl);
        if (response.status === 200) {
          const jsonResponse = await response.json();

          console.log(jsonResponse);
          setIsLoading(false);

          setWeather(jsonResponse);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [weatherUrl]);

  //   const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="font-body w-full">
      {weather && (
        <div className="flex animate-fade-in">
          <img
            className="min-w-[10%]"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div className="flex flex-col justify-center">
            <p className="text-3xl">
              {weather.main.temp.toFixed(1)}
              <i className=" pl-1 fa-regular fas fa-temperature-three-quarters"></i>
            </p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
