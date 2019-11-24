import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


/* const Profile = props => {
      const { title, name, rating, status, address: { city } } = props;
      return <div className="container">
            <h1>{title}</h1>
            <h3>Name {name}</h3>
            <h3>Rating {rating}</h3>
            <h3>Status {status ? 'Active' : 'InActive'}</h3>
            <h3>City {city}</h3>
      </div>;

} */
/* const Profile = ({ title, name, rating, status, address: { city } }) => {
      return <div className="container">
            <h1>{title}</h1>
            <h3>Name {name}</h3>
            <h3>Rating {rating}</h3>
            <h3>Status {status ? 'Active' : 'InActive'}</h3>
            <h3>City {city}</h3>
      </div>;

} */
const Profile = ({ title, name, rating, status, address: { city } }) => <div className="container">
      <h1>{title}</h1>
      <h3>Name {name}</h3>
      <h3>Rating {rating}</h3>
      <h3>Status {status ? 'Active' : 'InActive'}</h3>
      <h3>City {city}</h3>
</div>;


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