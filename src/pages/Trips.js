import React from 'react'

const Trips = (props)=> {

    const storedTrips =()=>{
        props.trips.map((trip)=>{
            return(
                <div>
                    <h3>{trip.name}</h3>
                    <h3>{trip.numberOfPassengers}</h3>
                </div>
            )
        })
    }

    const noStoredTrips=()=>{
        return (
            <h1>No Trips To Display</h1>
        )
    }

    return (props.trips && props.trips.length > 0 ) ? storedTrips() : noStoredTrips()
}

export default Trips