import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import axios from 'axios'
import {Link} from 'react-router-dom'

const Trip = (props) => {

    const url ='https://finalbackendcls.herokuapp.com/trips'

    const deleteHandler = (name) =>{
        axios.delete( url +`/${name}`)

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
                <Button size="sm" style={{marginRight: "5px"}} onClick={()=>{deleteHandler(props.trip.name)}}>Delete</Button>
                <Link to="/update"><Button size="sm" onClick={()=>{props.setTripUpdate(props.trip)}}>Edit</Button></Link>
            </ButtonGroup>
        </Card>
    )
}

export default Trip