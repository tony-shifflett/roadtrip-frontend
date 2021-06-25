import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import Trip from '../components/Trip'
import axios from 'axios'



const Trips = (props)=>{
  const tripsExist=()=>{
    return (
      <>
        <h1>Trips</h1>
      </>
    ) 
  }
      


  const noTripsExist =()=>{
    return (
      <>
        <h1>No Trips To Display</h1>
      </>
    );
  }

  return tripsExist()



}
export default Trips