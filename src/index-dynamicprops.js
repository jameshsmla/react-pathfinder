import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {
      state = {
            count: 0
      };

      increment = () => {
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
            return <Fragment>
                  <CounterView onIncrement={this.increment}  {...this.state} />
            </Fragment>;
      }
}
//Presentational Component
class CounterView extends Component {
      constructor() {
            super();
            console.log('Counterview : constructor is called!');
      }
      componentDidMount() {
            console.log('Counterview : DOM is ready!');

      }
      render() {
            console.log('Counterview : render is called')
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.props.count}</h2>
                  <button onClick={this.props.onIncrement} className="btn btn-success">Increment</button>
            </div>
      }
      componentDidUpdate() {
            console.log('Counterview : componentDidUpdate is called!');

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