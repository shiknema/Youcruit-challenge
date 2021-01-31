import React, { useState, useEffect } from "react";
import driverDataService from "./services/ApiServices";

const TruckDrivers = props => {
  const initialdriverState = {
    id: null,
    name: "",
   email: "",
    hasValidDrivingLicense: false
  };
  const [currentdriver, setCurrentdriver] = useState(initialdriverState);
  const [message, setMessage] = useState("");

  const getdriver = id => {
    driverDataService.get(id)
      .then(response => {
        setCurrentdriver(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getdriver(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentdriver({ ...currentdriver, [name]: value });
  };

  const updatehasValidDrivingLicense = status => {
    var data = {
      id: currentdriver.id,
      name: currentdriver.name,
     email: currentdriver.email,
      hasValidDrivingLicense: status
    };

    driverDataService.update(currentdriver.id, data)
      .then(response => {
        setCurrentdriver({ ...currentdriver, hasValidDrivingLicense: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updatedriver = () => {
    driverDataService.update(currentdriver.id, currentdriver)
      .then(response => {
        console.log(response.data);
        setMessage("The driver was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletedriver = () => {
    driverDataService.remove(currentdriver.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/drivers");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentdriver ? (
        <div className="edit-form">
          <h4>driver</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentdriver.name}
                onChange={handleInputChange}
              />
            </div>
           <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentdriver.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Valid Work Visa:</strong>
              </label>
              {currentdriver.hasValidDrivingLicense ? "hasValidDrivingLicense" : "false"}
            </div>
          </form>

      {/**    {currentdriver.hasValidDrivingLicense ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatehasValidDrivingLicense(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatehasValidDrivingLicense(true)}
            >
              Publish
            </button>
          )}
      */} 
          <button className="badge badge-danger mr-2" onClick={deletedriver}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatedriver}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a driver...</p>
        </div>
      )}
    </div>
  );
};

export default TruckDrivers;