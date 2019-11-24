import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends Component {

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
//property rules
Profile.propTypes = {
      id: PropTypes.number.isRequired,
      rating: PropTypes.number
}

Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      // id: 1,
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
      }
}

const App = () => {

      const firstName = 'Karthik';

      return <Profile id={1} name={firstName} rating={10} />
}
render(<App />, document.getElementById('root'));