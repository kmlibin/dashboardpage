import React, { useState, useEffect, useMemo } from "react";

export default function Weather({ weather}) {
  const [loading, setIsLoading] = useState(false);


  return (
    <div className="font-body w-full flex justify-end ">
      {weather && (
        <div className="text-black flex animate-fade-in bg-grey-rgba rounded-lg mt-[10%] mx-2">
          <img
            className="min-w-[10%]"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div className="flex flex-col justify-center pr-5">
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
