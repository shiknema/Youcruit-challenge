import axios from "axios";

export default axios.create({                   //Call API using axios
    baseURL: "http://localhost:6700/truckDrivers",
    headers: {
        "Content-type": "application/json"
      }
});