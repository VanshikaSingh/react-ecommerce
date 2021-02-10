
import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Main from './pages/BuySelectedItems';
import Main2 from "./pages/AddtoCart";
import Navbar from "./Navbar";
import BuySelectedItems from "./pages/BuySelectedItems";
import AddtoCart from "./pages/AddtoCart";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
    <Router>
      <NavigationBar/>
      <Navbar/>
            <Route path="/BuySelectedItems">
              <BuySelectedItems/>
            </Route>
            <Route path="/AddtoCart">
            <AddtoCart/>  
            </Route> 
            <Route path="/" exact></Route>     
        </Router>
        </div>
  );
}

export default App;
