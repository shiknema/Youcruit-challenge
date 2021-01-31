import React, { Component } from 'react';
import TruckDriverList from './DriverList';

class Drivers extends Component { //class component
    constructor() {
        super()
        this.state = {           //state and insalize Props
            title: 'Truck Drivers',
            truckdriver: ''
        }
    }

    async componentDidMount() { //lifecycle event hook using async function for making a get request. Called automatically once this component is mounted on the view
        this.setState({ isLoading: true })
        const response = await fetch('http://localhost:6700/truckdrivers') //fetch calls the json-server REST API, hosted db.json file
        if (response.ok) { // if response recived 
            const truckDrivers = await response.json()
            this.setState({ truckDrivers, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        console.log(this.state.truckDrivers); //print driver on the console of the browser
        return ( 
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <TruckDriverList driverlist={this.state.truckDrivers} /> {/*storing driver data and storing in DriverList */}
            </div>
        )
    }
}

export default Drivers;