import React, { useState, useEffect } from "react"
import { data } from "../mocks/data";


function App() {
    const [dog, setDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message)
          setDog(data);
          setIsLoaded(true);
        });
    }, []);
  
    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>;

    return <img src={data.message} alt="random dog" />
  }

  export default App