import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Link, Switch} from "react-router-dom";
import axios from 'axios'
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import Add from './pages/Add';
import Update from './pages/Update';


function App() {

  
  const [tripList, setTripList] = useState()
  const [tripUpdate, setTripUpdate] = useState()

  useEffect(()=>{
    axios.get('https://finalbackendcls.herokuapp.com/trips/')
      .then(res => {
        setTripList(res.data)
      })
  },[]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(rp) => <Login{...rp}/>}/>
        <Route exact path="/mytrips" render={(rp) => <Trips {...rp} setTripUpdate={setTripUpdate} tripList={tripList} setTripList={setTripList}/>}/>
        <Route exact path="/addtrip" render={(rp) => <Add {...rp} tripList = {tripList} setTripList={setTripList}/>}/>
        <Route exact path="/update" render={(rp) => <Update {...rp} tripUpdate={tripUpdate} tripList = {tripList} setTripList={setTripList}/>}/>
      </Switch>
    </div>
  );
}

export default App;
