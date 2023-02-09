import React, { useEffect, useMemo, useState } from "react";

//components
import Searchbar from "../../components/Searchbar";
import Weather from "../../components/Weather";
import Navbar from "../../components/Navbar";
import Quote from "../../components/Quote";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

//grab background images

const img1 = require("../../images/img1.jpg");
const img2 = require("../../images/img2.jpg");
const img3 = require("../../images/img3.jpg");
const img4 = require("../../images/img4.jpg");
const img5 = require("../../images/img5.jpg");
const img6 = require("../../images/img6.jpg");
const img7 = require("../../images/img7.jpg");
const img8 = require("../../images/img8.jpg");

export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [quote, setQuote] = useState();
  const [zipcode, setZipcode] = useState(99703);
  const [weather, setWeather] = useState();
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
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

  //handle next button click on background image
  const handleRight = (e) => {
    e.preventDefault();
    if (index > images.length - 2) {
      setIndex(0);
      console.log("start over");
    } else {
      setIndex(index + 1);
    }
  };
  //handle previous button click on background image
  const handleLeft = (e) => {
    e.preventDefault();
    if (index === 0) {
      setIndex(7);
      console.log("start over");
    } else {
      setIndex(index - 1);
    }
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
        console.log(weatherUrl);
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
    <main className="flex flex-col bg-cover bg-center sm:min-h-full sm:min-w-full"
    
    style={{backgroundImage:`url(${images[index]})`}}>
    
      
      {documents && <Navbar />}

      <Weather weather={weather} />

      {/* holds search and todos */}
      <div className="font-body flex flex-col items-center my-40">
        <Searchbar handleRight={handleRight} handleLeft={handleLeft} />
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
