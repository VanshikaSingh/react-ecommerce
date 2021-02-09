
import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Main from './pages/Main';
import Main2 from "./pages/Main2";

function App() {
  return (
    <Router>
     <Switch><Link to="/Main">First Page</Link></Switch> 
     <br></br>
     <Switch><Link to="/Main2">Second Page</Link></Switch>
      
    
            <Route path="/Main" component={Main}></Route>
            <Route path="/Main2" component={Main2}></Route>      
        </Router>
  );
}

export default App;
