import React from "react"
import {Link} from "react-router-dom"

const Login = (props) =>{

    return (
      <div>
        <h1>RoadTrip</h1>
        <p>Plan Your Next adventure!</p>
          <div>
            <Link to="/Trips">
              <button>Sign Up</button>
            </Link>
            <br></br>
            <Link to="/Trips">
              <button>Log In</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span className="cr">
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