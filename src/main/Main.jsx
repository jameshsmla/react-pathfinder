import React from 'react';

const name = 'Karthik';
const age = 18;
const isActive = false;
const address = {
      city: 'Chennai'
};
const salary = 10000;
const noofdays = 5;
function getDepartment() {
      return 'Learning and Development';
}
export const Main = () => <div>
      <section className="col-md-12">
            <h3>Employee information</h3>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Status : {isActive ? 'Active' : 'In Active'}</h2>
            <h2>City : {address.city}</h2>
            <h2>Salary : {salary * noofdays}</h2>
            <h2>Department : {getDepartment()}</h2>
      </section>
</div>;