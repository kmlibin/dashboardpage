import React, { useEffect, useMemo, useState } from "react";

//components
import Searchbar from "../../components/Searchbar";
import Weather from "../../components/Weather";
import Navbar from "../../components/Navbar";
import Quote from "../../components/Quote";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [quote, setQuote] = useState();
  const [zipcode, setZipcode] = useState(99703);
  const [weather, setWeather] = useState();
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState( [
    { path: require("../../images/img1.jpg") },
    { path: require("../../images/img2.jpg") },
    { path: require("../../images/img3.jpg") },
    { path: require("../../images/img4.jpg") },
    { path: require("../../images/img5.jpg") },
    { path: require("../../images/img6.jpg") },
    { path: require("../../images/img7.jpg") },
    { path: require("../../images/img8.jpg") },
    
  ]);
  const { user } = useAuthContext();
  const { documents } = useCollection("users", ["uid", "==", user.uid]);
  const { documents: weatherKey } = useCollection("api");


  // update zipcode; check for documents and make sure that documents doesn't return as "undefined"
  useMemo(() => {
    const newZip = documents && documents[0].zip ? documents[0].zip : null;
    setZipcode(newZip);
  }, [documents, user]);

  let api = weatherKey && weatherKey[0].key ? weatherKey[0].key : null;


//handle previous slide
  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };
  //handle next button click on background image
  const nextSlide = () => {
    const isLastSlide = index === images.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      //api endpoint to use zip to get lat and lon
      const coordinateUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${api}`;

      //fetch lat and lon for zipcode conversion
      try {
        const response = await fetch(coordinateUrl);
        if (response.status === 200) {
          const jsonResponse = await response.json();

          setLatitude(jsonResponse.lat);
          setLongitude(jsonResponse.lon);
        }
      } catch (error) {
        console.log(error);
      }
      //use latitude and longitude to get weather
      try {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0a430b4c9cea94f2ec8d3907dec15777&units=imperial`;
        const response = await fetch(weatherUrl);
        if (response.status === 200) {
          const jsonResponse = await response.json();

          setWeather(jsonResponse);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoordinates();
  }, [zipcode, latitude, longitude]);

  //fetch quotes
  useEffect(() => {
    const fetchQuote = async () => {
      //endpoint for quote API
      const quoteUrl = "https://type.fit/api/quotes";
      try {
        const response = await fetch(quoteUrl);
        if (response.status === 200) {
          const jsonResponse = await response.json();
          setQuote(jsonResponse);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, []);



  return (
    <main
      className=" slide flex flex-col bg-cover bg-center sm:min-h-full sm:min-w-full w-full h-full duration-500"

      style={{ backgroundImage: `url(${images[index].path})` }}
    >
      {documents && <Navbar />}

      <Weather weather={weather} />

      {/* holds search and todos */}
      <div className="font-body flex flex-col items-center my-40">
        <Searchbar handleRight={nextSlide} handleLeft={prevSlide} />
      </div>

      {/* holds quotes*/}
      <div className="flex justify-center">
        {quote && (
          <Quote quote={quote[Math.floor(Math.random() * quote.length)]} />
        )}
      </div>
    </main>
  );
}
