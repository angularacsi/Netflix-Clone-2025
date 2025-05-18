import React from 'react'
import axios from "../../../Utils/Axios"  
import requests from '../../../Utils/Requests'
 

import './rowlist.css'
import Row from '../Row/Row'




const RowList = () => {
  return (
    <>
    <Row  
   title="NETFLIX ORIGINALS"
   fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}

      />
    <Row
   title="Trending Now"
    fetchUrl={requests.fetchTrending}
    isLargeRow={false}
    />
    <Row
   title="Top Rated"
    fetchUrl={requests.fetchTopRated}
    isLargeRow={false}
    />
    <Row  
    title="Action Movies"
    fetchUrl={requests.fetchActionMovies}
    isLargeRow={false}
    />
    <Row  
    title="Comedy Movies"
    fetchUrl={requests.fetchComedyMovies}
    isLargeRow={false}
    />
    <Row
    title="Horror Movies"
    fetchUrl={requests.fetchHorrorMovies}
    isLargeRow={false}
    />
    <Row
    title="Romance Movies"
    fetchUrl={requests.fetchRomanceMovies}
    isLargeRow={false}
    />
    <Row
    title="Documentaries"
    fetchUrl={requests.fetchDocumentaries}
    isLargeRow={false}
    />
    {/* <Row
    title="Science Fiction Movies"
    fetchUrl={requests.fetchScienceFictionMovies} 
    isLargeRow={false}
    />
    <Row
    title="Fantasy Movies"
    fetchUrl={requests.fetchFantasyMovies}
    isLargeRow={false}
    />
    <Row
    title="Mystery Movies"
    fetchUrl={requests.fetchMysteryMovies}
    isLargeRow={false}
    />
    <Row
    title="Western Movies"
    fetchUrl={requests.fetchWesternMovies}
    isLargeRow={false}
    />
    <Row
    title="War Movies"
    fetchUrl={requests.fetchWarMovies}
    isLargeRow={false}
    />
    <Row
    title="History Movies"
    fetchUrl={requests.fetchHistoryMovies}
    isLargeRow={false}
    />
    <Row
    title="Crime Movies"
    fetchUrl={requests.fetchCrimeMovies}
    isLargeRow={false}
    />
    <Row
    title="Family Movies"
    fetchUrl={requests.fetchFamilyMovies}
    isLargeRow={false}
    />
    <Row
    title="TV Shows"
    fetchUrl={requests.fetchTvShows}
    isLargeRow={false}
    />
    <Row
    title="Anime Movies"
    fetchUrl={requests.fetchAnimeMovies}
    isLargeRow={false}
    />
    <Row  
    title="Kids Movies"
    fetchUrl={requests.fetchKidsMovies}
    isLargeRow={false}
    />
    <Row
    title="Documentary Series"
    fetchUrl={requests.fetchDocumentarySeries}
    isLargeRow={false}
    />
    <Row
    title="Short Movies"
    fetchUrl={requests.fetchShortMovies}
    isLargeRow={false}
    />
    <Row
    title="Music Movies"
    fetchUrl={requests.fetchMusicMovies}
    isLargeRow={false}
    /> */}
    
    </>
  )
}

export default RowList
