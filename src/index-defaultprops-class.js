import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends Component {
      static defaultProps = {
            title: 'Path finder Profile Manager',
            name: 'default Name',
            rating: 0,
            status: false,
            address: {
                  city: 'default City'
            }
      }

      render() {

            return <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>
      }
}
/* Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
      }
} */

const App = () => {

      const firstName = 'Karthik';

      return <Profile name={firstName} />
}
render(<App />, document.getElementById('root'));