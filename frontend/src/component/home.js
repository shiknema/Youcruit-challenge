import React, {Component} from 'react';
import './home.css';
import BackgroundImage from './lanefinder-youcruit.jpg';


class Home extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            title: 'Lanefinder Truck Driver', //props defined      
        }
    }
    render(){
        return(
            <div className="panel-group">
                <div className="panel panel-primary">
                    <div className="panel-heading">Welcome to Truck Driver Job Portal</div>
                     
                     <img src={BackgroundImage} responsive />
                   
                </div>
                
            </div>
        )
    }
}

export default Home;