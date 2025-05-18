import React from 'react'
import axios from "../../../Utils/Axios"  
import requests from '../../../Utils/Requests'
import { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer'
import ReactYoutube from 'react-youtube'
 import './row.css'

const Row = ({title,fetchUrl,isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      console.log(fetchUrl)
      const request = await axios.get(fetchUrl)
      console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])


  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }


  

  return (
    <>
      <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
            onClick={() => {handleClick(movie) }}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))}
        </div>
      </div>
      <div>
      {trailerUrl && <ReactYoutube videoId={trailerUrl} opts={{
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      }} />}
      </div>
       

      


    </>
   
  )
}

export default Row
