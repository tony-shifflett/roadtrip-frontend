import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import React, {useEffect, useState} from 'react';



function App() {

const url = 'https://finalbackendcls.herokuapp.com'

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(rp) => <Login{...rp}/>}/>
        <Route exact path="/mytrips" render={(rp) => <Trips{...rp}/>}/>
      </Switch>
    </div>
  );
}

export default App;
