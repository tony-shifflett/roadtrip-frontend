import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import axios from 'axios'

const Trip = (props) => {

    const url ='https://finalbackendcls.herokuapp.com/trips'

    const deleteHandler = (id) =>{
        axios.delete( url, props.trip)

        axios.get(url)
        .then(res => {
          props.setTripList(res.data)
        })
        
    }
    
    
    return (
        <Card style={{width: '18rem', margin:"0 auto 5rem auto"}}>
            <h1>{props.trip.name}</h1>
            <p>From {props.trip.startpoint} to {props.trip.endpoint}</p>
            <ButtonGroup>
                <Button size="sm" style={{marginRight: "5px"}} onClick={()=>{deleteHandler(props.trip.id)}}>Delete</Button>
                <Button size="sm">Edit</Button>
            </ButtonGroup>
        </Card>
    )
}

export default Trip