import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {

      constructor() {
            super();
            console.log('Counter constructor is called!');
      }

      state = {
            count: 0
      };
      // Arrow function
      //setState(oldState)=>newState
      increment = () => {
            //pure function
            /*   this.setState(function (previousState) {
                    console.log(`Previous State ${previousState.count}`)
                    let count = previousState.count + 1;
                    return { ...previousState, count: count };
              }) */
            //Arrow version
            /*  this.setState(previousState => {
                   console.log(`Previous State ${previousState.count}`)
                   let count = previousState.count + 1;
                   return { ...previousState, count: count };
             }) */
            //With destructuring
            /*    this.setState(previousState => {
                     console.log(`Previous State ${previousState.count}`)
                     let count = previousState.count + 1;
                     //if objectkey:local variable is same : make it one
                     return { ...previousState, count };
               }) */
            // no more extra statement, only return
            let count = this.state.count + 1;
            this.setState(({ count }));

      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }


      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.state.count}</h2>
                  <button onClick={this.increment} className="btn btn-success">Increment</button>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));