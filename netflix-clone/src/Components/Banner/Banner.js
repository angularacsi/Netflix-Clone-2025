 import axios from '../../Utils/Axios'
import React, { useEffect, useState } from 'react'
import requests from '../../Utils/Requests';
import './banner.css'

const Banner = () => {
const [movie,setMovie] = useState({})
useEffect( () => {
    ( async ()=>{
        const request = await axios.get(requests.fetchNetflixOriginals)
 
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        
    })()

},[]);
const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
    }}>
        <div className="banner_contents">
            <h2 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h2>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="banner--fadeBottom"></div>
    </header>

   )
}

export default Banner
