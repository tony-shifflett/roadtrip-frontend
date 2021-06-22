import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" render={(rp) => <Login{...rp}/>}/>
    </div>
  );
}

export default App;
