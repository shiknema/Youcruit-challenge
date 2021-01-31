import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class JobDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {   // Here we initialize our components state
      jobs: [],
      isLoading: false,
      isError: false,
      showForm: false
    }
    
  }


async componentDidMount() {
  this.setState({ isLoading: true })
  const response = await fetch('http://localhost:6700/jobs')//fetch calls the json-server REST API, hosted db.json file
  if (response.ok) {
    const jobs = await response.json()
    this.setState({ jobs, isLoading: false })
  } else {
    this.setState({ isError: true, isLoading: false })
  }

  

showForm = () => {
   return (
     <div> 
    <form id= "add-app">

         <label>Application Name : </label>
         <input type="text"> </input>

         <label> id : </label>
         <input type="text" ></input>

         <label>Server details : </label>
         <input ></input>

         <button>Create</button>
      </form>
      </div>
     );
   }
  
}

render() {
  const { jobs, isLoading, isError } = this.state

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return jobs.length > 0
    ? (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company Name</th>
            <th>Description</th>
            <th>Pay Per Week</th>
           <th> Apply</th> 
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}

        </tbody>
      </Table>
    ) : (
      <div>
        No jobs.
    </div>
    )
}

renderTableRows = () => {
  return this.state.jobs.map(job => {
    return (
      <tr key={job.id}> 
        <td>{job.title}</td>    
        <td>{job.companyName}</td>
        <td>{job.description}</td>
        <td>{job.payPerWeek}</td>
        <td><button onClick={() => this.setState({showForm: true}) } >
           
            Apply</button></td>
        
      </tr>
    )
  })
}
}

export default JobDetails;