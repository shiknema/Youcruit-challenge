import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import TruckDrivers from './truckdriver';
import Home from './home';
import JobDetails from './jobdetails';


class Routing extends Component{ //class component for Routing
    render(){
        return(
            <BrowserRouter>
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
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/truckdriver">TruckDrivers</Link></li>
                            <li><Link to="/jobdetails">Job Details</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/truckdriver" component={TruckDrivers}></Route>
                <Route exact path="/jobdetails" component={JobDetails}/>
                 
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;