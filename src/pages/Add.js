import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Add = (props)=>{

    const tripList = props.tripList
    const [name, setName] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')
    

    const addHandler = () => {
      
        axios.post('https://finalbackendcls.herokuapp.com/trips/', {'name': name, 'startpoint': startpoint,'endpoint': endpoint})
        .then(res => console.log(res))

        axios.get('https://finalbackendcls.herokuapp.com/trips/')
        .then(res => {
          props.setTripList(res.data)
        })
      };

    return (
        <>
            <h1>Add A Trip</h1>
            <input onChange={event => setName(event.target.value)} placeholder="Name" />
            <input onChange={event => setStartpoint(event.target.value)} placeholder="Start Point"/>
            <input onChange={event => setEndpoint(event.target.value)} placeholder="End Point"/>
            <Link to="/mytrips"><button onClick={addHandler}>Add</button></Link>
        </>
    )
}

export default Add 