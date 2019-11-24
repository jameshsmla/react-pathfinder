import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Profile = ({ title, name, rating, status, address: { city } }) => <div className="container">
      <h1>{title}</h1>
      <h3>Name {name}</h3>
      <h3>Rating {rating}</h3>
      <h3>Status {status ? 'Active' : 'InActive'}</h3>
      <h3>City {city}</h3>
</div>;

//default Props
Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
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