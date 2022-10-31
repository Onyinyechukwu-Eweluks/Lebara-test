import React, { useState, useEffect } from 'react'

export default function Cats() {
  const [catWithBreeds, setCatWithBreed] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState(null);


  const BaseURL = "https://api.thecatapi.com/v1/";
  const API_KEY = "live_fokcsnSdC2P3ooF8BU55WjLz26abTpq9XXxQyxNdLbYUd1bHvSuaI4gM76pHt4Rq";

  useEffect(() => {
    fetchCatBreeds();
  }, [])

  const onRequestImage = () => {
    let rnd = Math.floor(Math.random() * (catWithBreeds.length - 1) + 1)
    setCat(catWithBreeds[rnd])
  }

  const fetchCatBreeds = () => {
    setIsLoading(true);
    fetch(BaseURL + "breeds", {
      method: "GET",
      headers: {
        'x-api-key': API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((data) => data.json())
      .then((response) => {
        response && setCatWithBreed(response);
        setIsLoading(false);
      }).catch(error => {
        console.log(error);
        setIsLoading(false);
      })
  }


  return (
    <div>
      <div>
        <h2>Cat Details</h2>
        <button className='primary' onClick={onRequestImage}>Fetch Images</button>
        {isLoading
          ? <p>Fetching image...</p> : (
            cat && (<div>
              <p>{cat.name}</p>
              <p>{cat.description}</p>
              <img src={cat.image.url} alt="" height='800px' width='90%' />
            </div>)
          )}
      </div>
    </div>
  )
}
