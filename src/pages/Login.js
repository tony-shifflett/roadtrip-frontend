import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Login = (props) =>{

      //state to contain list of trips

    return (
      <div>
        <h1>RoadTrip</h1>
        <p>Plan Your Next Adventure!</p>
          <div>
            <Link to="/mytrips">
              <button>Sign Up</button>
            </Link>
            <br></br>
            <Link to="/mytrips">
              <button>Log In</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              © 2021
              <Link to="/about">
                RoadTrip
              </Link>
            </span>
          </div>
     </div>
    )
}

export default Login