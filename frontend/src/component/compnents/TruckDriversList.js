import React, { useState, useEffect } from "react";
import DriverServices from "./services/ApiServices";
import Table from "react-bootstrap/Table";

const DriversList = () => {       // Function Component & set states
  const [Drivers, setDrivers] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [currentDriverJobs, setActiveDriverMatchedJobs] = useState(null);
  const [currentDriver, setCurrentDriver] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveDrivers();
    fetch('http://localhost:6700/jobs').then((result) => { //fetch jobs data from json-server 
      result.json().then((json) => {
        setAllJobs(JSON.parse(JSON.stringify(json)));
      })
    });
  }, []);

  const retrieveDrivers = () => {  //fetch drivers data from json server using axios
    DriverServices.getAll()
      .then(response => {
        setDrivers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveDriver = (Driver, index) => {    // setActiveDriver() for select driver from the list 
    setCurrentDriver(Driver);                     //and compare with all the job 
    setCurrentIndex(index);
    setActiveDriverMatchedJobs( // match job data with driver
      AllJobs.filter(value => value.requirements.minDrivingExperienceMonths
        >= Driver.drivingExperienceMonths
        && value.requirements.requireValidDrivingLicense
        === Driver.hasValidDrivingLicense
        && value.requirements.maxNumberOfMovingViolations
        >= Driver.numberOfMovingViolations));
    console.log(currentDriverJobs);
  };
  

  return (
    <div className="list row">
      <div className="col-md-6">
      <h4><strong>Drivers List</strong></h4>
        <ul className="list-group">
          {
           Drivers &&                    //Compare setect driver data with mapped driver data 
            Drivers.map((Driver, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active"
                    : " currentDriver.name")
                }
                onClick={() => setActiveDriver(Driver, index)}
                key={index}
              >
                {Driver.Driver}
                <h5> {Driver.name}</h5>  {/* Display drivers name list*/}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentDriver && currentDriverJobs ? (   //Compare currentDriver data with currentDriverJaob
          <div>
            <h4> <strong>Matched Jobs</strong></h4>
            <Table striped bordered hover variant="dark"> {/**Design table */}
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>PayPerWeek</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentDriverJobs.map((job) => (  //mapping all job json data
                  <tr>
                    <th>{job.title}</th>
                    <th>{job.companyName}</th>
                    <th>{job.payPerWeek}</th>
                    <th>Not Applied</th>
                    <th>
                      <button>Job Details</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
            <div>
              <br/>
              <p>Please click on a Driver Name...!!</p>
            </div>
          )}
      </div>
    </div>
  );
};
export default DriversList;