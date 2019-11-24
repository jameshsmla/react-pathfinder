import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//
class Profile extends Component {
      render() {
            //this.props = {}
            //props are read only : the compnent never change data
            //this.props.title = 'Hello'
            console.log('', this.props);
            return <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>
      }
}
const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      />
}
render(<App />, document.getElementById('root'));