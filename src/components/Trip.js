import React from 'react'
import store, {removeTrip} from '../store'

const Trip = (props)=>{

    const trip = props.trip
    
    return(
        <div>
            <h1>{trip.name}</h1>
            <h2>Start Point: {trip.startpoint}</h2>
            <h2>End Point: {trip.endpoint}</h2>
            <button onClick={store.removeTrip(trip)}>Delete Trip</button>
        </div>
    )


}

export default Trip