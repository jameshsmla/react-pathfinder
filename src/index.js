import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Form extends Component {

      leaves = ['Sick', 'Medical', 'Causal', 'others'];
      state = {
            firstName: 'firstName',
            lastName: 'lastName',
            leaveType: this.leaves[1]
      }
      handleChange = evt => {
            const name = evt.target.name;
            const value = evt.target.value;

            this.setState({
                  [name]: value
            });
      }
      onSave = evt => {
            evt.preventDefault();
            alert(JSON.stringify(this.state))
      }

      render() {
            return <div>
                  <h1>User Form</h1>
                  <h2>{JSON.stringify(this.state)}</h2>
                  <form onSubmit={this.onSave}>
                        <div className="form-group">
                              <label htmlFor="userName">First Name</label>
                              <input required onChange={this.handleChange} type="text" className="form-control" id="userName" placeholder="Enter user name" name="firstName" value={this.state.firstName} />
                        </div>
                        <div className="form-group">
                              <label htmlFor="userName">Last Name</label>
                              <input onChange={this.handleChange} type="text" className="form-control" id="userName" placeholder="Enter user name" name="lastName" value={this.state.lastName} />
                        </div>
                        <div className="form-group">
                              <label htmlFor="leaveType">Leave Type</label>
                              <select name="leaveType" className="form-control" value={this.state.leaveType} onChange={this.handleChange}>
                                    {this.leaves.map((leave, index) => {
                                          return <option key={index} value={leave}>{leave}</option>
                                    })};
                                    </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                  </form>
            </div >
      }
}


const App = () => {
      return <div className="container">
            <Form />
      </div>
}

render(<App />, document.getElementById('root'));