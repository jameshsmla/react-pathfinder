import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


const clockStyle = {
      backgroundColor: 'yellow',
      border: "thick solid #0000FF"
}

class Clock extends Component {
      state = {
            date: new Date()
      };


      tick = () => {
            this.setState({
                  date: new Date()
            });

      }
      componentDidMount() {
            console.log('Clock : DOM is ready!');
            setInterval(
                  () => this.tick(),
                  1000
            );
      }
      componentDidUpdate() {
            console.log('Clock : Component didUpdate is called')
      }


      render() {
            return <div className="container">
                  <h1>Clock Application</h1>
                  <h2 style={clockStyle}>
                        Time {this.state.date.toLocaleTimeString()}</h2>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('C constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Clock />
      }

}

render(<App />, document.getElementById('root'));