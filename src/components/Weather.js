import React from "react";

export default function Weather({ weather }) {

  return (
    <div className="font-body w-full flex justify-end ">
      {weather && (
        <div className="flex animate-fade-in bg-grey-rgba rounded-lg mt-[10%] mx-2 shadow-equal">
          <img
            className="min-w-[10%]"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div className="flex flex-col justify-center pr-5">
            <p className="text-3xl">
              {weather.main.temp.toFixed(1)}
              <i className=" pl-1 text-red-200 fa-regular fas fa-temperature-three-quarters"></i>
            </p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
