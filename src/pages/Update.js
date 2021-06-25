import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Update = (props)=>{

    // const tripList = props.tripList
    // const [name, setName] = useState('')
    const name = props.tripUpdate.name
    const [startpoint, setStartpoint] = useState(props.tripUpdate.startpoint)
    const [endpoint, setEndpoint] = useState(props.tripUpdate.endpoint)
    const [newTrip, setNewTrip] = useState(props.tripUpdate)

    const updateHandler = () => {

        axios.delete( `https://finalbackendcls.herokuapp.com/trips/${props.tripUpdate.name}`)

        axios.post('https://finalbackendcls.herokuapp.com/trips/', {'name': name, 'startpoint': startpoint,'endpoint': endpoint})
        .then(res => console.log(res))

        axios.get('https://finalbackendcls.herokuapp.com/trips/')
        .then(res => {
          props.setTripList(res.data)
        })
      };

    return (
        <>
            <h1>{props.tripUpdate.name}</h1>
            <input onChange={event => setStartpoint(event.target.value)} placeholder="Start Point" defaultValue={props.tripUpdate.startpoint}/>
            <input onChange={event => setEndpoint(event.target.value)} defaultValue={props.tripUpdate.endpoint}placeholder="End Point"/>
            <Link to="/mytrips"><button onClick={updateHandler}>Edit</button></Link>
            <Link to="/mytrips"><button>Home</button></Link>
        </>
    )
}

export default Update