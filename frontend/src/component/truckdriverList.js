import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


const DriverList = (driverlist) => { //functional component

    const renderList = ({ driverlist }) => { //accepts the driver data passed to this component by driver.js //Custom function

        if (driverlist) { //if the function argument has data , display it
            return driverlist.map((data) => {  //map(), calls this code once for each record inside the driverlist array
                return ( //generate a dynamic route for individual product image the user clicks on (eg: /product/2)

                    <Link key={data.id} to={`/truckdriver/${data.id}`} >
                        <div className="card col-md-12">
                            <div className="row">
                                <span className="topTemp">  {data.name}</span>
                            </div>
                            <div className="card-body">

                                <div className="card-text">
                                    <h4> Email Id : <a >{data.email}</a> </h4>
                                    <h4>Total Experience in months : {data.drivingExperienceMonths}</h4>
                                    <h4> Valid Driving License : {data.hasValidDrivingLicense}</h4>
                                    <h4> Number Of Moving Violations : {data.numberOfMovingViolations}</h4>
                                </div>
                            </div>
                        </div>

                    </Link>
                )
            })
        }
    }
    return ( //calls the custom rendeRList() method above to render the view
        <div className="container">
            <div className="row">
                {renderList(driverlist)}  {/* Passes the accepted driver data to the renderList function for displaying it */}
            </div>
        </div>
    )
}

export default DriverList;