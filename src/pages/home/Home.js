import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import Weather from "../../components/Weather";
import Quote from "../../components/Quote"

export default function Home() {
  const [loading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [quote, setQuote] = useState()

  const coordinateUrl =
    "http://api.openweathermap.org/geo/1.0/zip?zip=80919,US&appid=0a430b4c9cea94f2ec8d3907dec15777";

  const quoteUrl = "https://type.fit/api/quotes"

  // http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

  //weather api 0a430b4c9cea94f2ec8d3907dec15777

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


  useEffect(() => {
    const fetchQuote = async () => {
        try {
            const response = await fetch(quoteUrl);
            if (response.status === 200) {
                const jsonResponse = await response.json()
                setQuote(jsonResponse)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchQuote()
  }, [])


  
  return (
    <main>
      <Weather lat={latitude} lon={longitude} />

      {/* holds search and todos */}
      <div className="font-body flex flex-col items-center my-40">
        <Searchbar />
        {/* holds todos */}
      </div>

      {/* holds quotes ... do as a component?*/}
      {quote && <Quote quote = {quote[Math.floor(Math.random() * quote.length)]}/> }
    </main>
  );
}


