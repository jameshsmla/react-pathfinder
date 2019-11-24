import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//
const Profile = props => {
      console.log('', props);
      return <div className="container">
            <h1>{props.title}</h1>
            <h3>Name {props.name}</h3>
            <h3>Rating {props.rating}</h3>
            <h3>Status {props.status ? 'Active' : 'InActive'}</h3>
            <h3>City {props.address.city}</h3>
      </div>;

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