import React from 'react';
import ReactDOM from 'react-dom';

//create component : variable pattern
//const Welcome = <h1>Welcome!</h1>;

//Using function : ES 5
//the funciton return object/component
/* function Welcome() {
      return <h1>Welcome To React!</h1>;
} */

//const Welcome = () => <h1>Welcome To React!</h1>;

//using e6 class
class Welcome extends React.Component {
      render() {
            return <h1>Welcome To React!</h1>;
      }
}
//new Welcome() 

//Flush the component into Render engine
//imperative
//ReactDOM.render(Welcome(), document.getElementById('root'))
ReactDOM.render(<Welcome></Welcome>, document.getElementById('root'));