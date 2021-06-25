import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import Trip from '../components/Trip'
import axios from 'axios'



const Trips = (props)=>{

  useEffect(()=>{
    axios.get('https://finalbackendcls.herokuapp.com/trips')
      .then(res => {
        props.setTripList(res.data)
      })
  },[]);

  const displayTrips = ()=>{
    console.log(props.tripList)
    return(
        <>
            <h1>Road Trips</h1>
            { props.tripList.map( (trip)=>{return (<Trip trip={trip} setTripUpdate={props.setTripUpdate} setTripList={props.setTripList}/>)} ) }
            <Link to="/addtrip"> <button>Add a Trip</button> </Link>
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

  return displayTrips()



}
export default Trips