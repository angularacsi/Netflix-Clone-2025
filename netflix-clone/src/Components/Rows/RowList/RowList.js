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
      />
    </>
  )
}

export default RowList
