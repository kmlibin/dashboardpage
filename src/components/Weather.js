import React from "react";

export default function Weather({ weather }) {
  return (
    <div className="font-body w-full flex justify-start sm:justify-end ">
      {weather && (
        <div className="flex animate-fade-in bg-grey-rgba rounded-lg  sm:mt-[9%] mx-1 sm:mx-2 shadow-equal">
          <img
            className="min-w-[10%]"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div className="flex flex-col justify-center pr-5">
            <p className="text-3xl">
              {weather.main.temp.toFixed(1)}
              <i className=" pl-1 text-red-500 fa-regular fas fa-temperature-three-quarters opacity-75"></i>
            </p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
