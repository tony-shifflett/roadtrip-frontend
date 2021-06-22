import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import React, {useEffect, useState} from 'react';

import store, {getTrips} from ./store;

// const URL = "http://localhost:8000"
function App() {
  //state to contain list of trips
  // const [trips, setTrips] = React.useState([])

  // const getTrips = async ()=>{
  //   const response = await fetch(URL + "/Roadtrip/")
  //   const data = await response.json()
  //   console.log(data)
  //   setTrips(data)
  // }
  // useEffect(()=>{getTrips()},[]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(rp) => <Login{...rp} trips={trips} getTrips= {getTrips}/>}/>
        <Route exact path="/mytrips" render={(rp) => <Trips{...rp} trips={trips}/>}/>
      </Switch>
    </div>
  );
}

export default App;
