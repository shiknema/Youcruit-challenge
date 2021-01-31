import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//import all componets with paths
import Home from './home';
import Drivers from './Drivers';
import JobDetails from './Jobs/jobdetails';
import TruckDriversList from "./compnents/TruckDriversList";

class Routing extends Component { //class component for Routing
    render() {
        return (
            <BrowserRouter> {/** BrowserRouter for browsing */}
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle"
                                data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">{/** Links for Navigation */}
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/driver">All TruckDrivers</Link></li>
                                <li><Link to="/jobdetails">Job Details</Link></li>
                                <li><Link to="/truckDriversList"> DriversList </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>{/** Routes for all componets */}
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/driver" component={Drivers}></Route>
                    <Route exact path="/jobdetails" component={JobDetails} />
                    <Route exact path={"/truckDriversList"} component={TruckDriversList} />

                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;