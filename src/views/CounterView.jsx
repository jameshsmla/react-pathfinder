import React from 'react';


export const CounterView = props => <div>
      <h1>React-Redux : Counter App</h1>
      <h1>Count : {props.count}</h1>
      <button onClick={props.OnIncrement} className="btn btn-success">increment</button>
</div>;
