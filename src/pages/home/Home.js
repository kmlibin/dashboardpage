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
  const [loading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [quote, setQuote] = useState();
  const [zipcode, setZipcode] = useState(99703)
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
 const { user } = useAuthContext()
 const { documents, zip } =  useCollection(
    'users',
    ['uid', '==', user.uid]
    )


// let newZip = documents.map(document => document.zip)

  const coordinateUrl =
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=0a430b4c9cea94f2ec8d3907dec15777`;

  const quoteUrl = "https://type.fit/api/quotes";

  //weather api 0a430b4c9cea94f2ec8d3907dec15777

 

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

 //fetch lat and lon for zipcode conversion
  useEffect(() => {
    const fetchCoordinates = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(coordinateUrl);
        if (response.status === 200) {
          const jsonResponse = await response.json();
          console.log(jsonResponse.lat);
          setLatitude(jsonResponse.lat);
          setLongitude(jsonResponse.lon);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchCoordinates();
  }, []);

  //fetch quotes
  useEffect(() => {
    const fetchQuote = async () => {
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
    <main className="min-h-full min-w-full">
      <img
        className="-z-10 absolute min-w-full min-h-full"
        src={images[index]}
      />
      <Navbar />
      <Weather 
        lat={latitude} 
        lon={longitude} 
        />

      {/* holds search and todos */}
      <div className="font-body flex flex-col items-center my-40">
        <Searchbar 
          handleRight={handleRight} 
          handleLeft={handleLeft} 
          />
      </div>

      {/* holds quotes ... do as a component?*/}
      {quote && (
        <Quote 
          quote={quote[Math.floor(Math.random() * quote.length)]} 
          />
      )}
    </main>
  );
}
