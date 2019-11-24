import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


export class Profile extends Component {
      render() {
            return <div className="container">
                  {/* <ProfileDisplay title={this.props.title} name={this.props.name} rating={this.props.rating} status={this.props.status} address={this.props.address} /> */}
                  <ProfileDisplay {...this.props} />
            </div>
      }
}
export const ProfileDisplay = props => <Fragment>
      <h1>{props.title}</h1>
      <h3>Name {props.name}</h3>
      <h3>Rating {props.rating}</h3>
      <h3>Status {props.status ? 'Active' : 'InActive'}</h3>
      {/* <Address address={props.address} /> */}
      <Address subtitle="Address Details" {...props} />
</Fragment>

export const Address = ({ subtitle, address: { street, area, city, state, pincode } }) => <Fragment>
      <h2>{subtitle}</h2>
      <h3>Street {street}</h3>
      <h3>Area {area}</h3>
      <h3>City {city}</h3>
      <h3>State {state}</h3>
      <h3>Pincode {pincode}</h3>
</Fragment>

const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai', street: '10th street', area: 'Perumbakkam', pincode: '600100', state: 'TN' }}
      />
}
render(<App />, document.getElementById('root'));