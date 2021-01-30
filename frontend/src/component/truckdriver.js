import React, {Component} from 'react';
import TruckDriverList from './truckdriverList'; 

class TruckDriver extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            title: 'Truck Drivers', //props defined
            truckdriver: ''
        }
    }
   

    async componentDidMount() { //lifecycle event hook using async function for making a get request. Called automatically once this component is mounted on the view
        this.setState({ isLoading: true }) // for loding perpose
        const response = await fetch('http://localhost:6700/truckdrivers') //fetch calls the json-server REST API, hosted db.json file
        if (response.ok) { // if response recived 
          const truckDrivers = await response.json() //await used because returned from API take some time, //data is auto populated by the fetch method with data from the REST service
          this.setState({ truckDrivers, isLoading: false })//if success, retuns an async Promise with the data from the service as response obj
        } else {                                            //sets the data retreived from the service to the local props via the state
          this.setState({ isError: true, isLoading: false })// otherwise it retun Error
        }
      }
    render(){ //display this component in the view
        console.log(this.state.truckDrivers); //print driver on the console of the browser
        return( //display title and inject driverList component here by passing the driver data to it
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <TruckDriverList driverlist={this.state.truckDrivers}/>
            </div>
        )
    }
}

export default TruckDriver;