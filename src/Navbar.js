import React from "react";
import {Switch, Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <Switch><Link to="/BuySelectedItems"></Link></Switch>
            <Switch><Link to="/AddtoCart"></Link></Switch>
        </div>
    )
}
export default Navbar