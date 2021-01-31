import React, { useState, useEffect } from "react";
import DriverServices from "./services/ApiServices";

const DriversList = () => {
  const [Drivers, setDrivers] = useState([]);
  const [currentDriver, setCurrentDriver] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveDrivers();
  }, []);

  

  const retrieveDrivers = () => {
    DriverServices.getAll()
      .then(response => {
        setDrivers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  

  const setActiveDriver = (Driver, index) => {
    setCurrentDriver(Driver);
    setCurrentIndex(index);
  };

  
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Drivers List</h4>

        <ul className="list-group">
          {Drivers &&
            Drivers.map((Driver, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : " currentDriver.name")
                } 
                onClick={() => setActiveDriver(Driver, index)}
                key={index}
              >
                {Driver.Driver}
                <h5> {Driver.name}</h5>
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentDriver ? (
          <div>
            <h4>Driver Profile</h4>
            <div>
              <label>
                <strong>Driver Name:</strong>
              </label>{" "}
              {currentDriver.name}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentDriver.email}
            </div>
            <div>
              <label>
                <strong>Diving Experience in Months:</strong>
              </label>{" "}
              {currentDriver.drivingExperienceMonths}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentDriver.hasValidDrivingLicense ? "True" : "false"}
            </div>
          <div>  <label>
                <strong>Number Of Moving Violations:</strong>
              </label>{" "}
              {currentDriver.numberOfMovingViolations}
            </div>
           
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Driver...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriversList;