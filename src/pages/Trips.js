import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import Trip from '../components/Trip'

//store import
import store, {getTrips} from  '../store'

const Trips = (props)=>{
    

    const tripsExist =()=>{
        return (
           store.getState().map((trip) => {<Trip trip={trip}/>}) 
        )
    }

    const noTripsExist =()=>{
        // store.dispatch(getPlants)
        //returns no plants screen while waiting for load
        return (
          <>
            <h1>No Trips To Display</h1>
          </>
        );
    }
    // useEffect(()=>{store.dispatch(getPlants)},[])
    return store.getState().length > 0 ? tripsExist() : noTripsExist()


}
export default Trips