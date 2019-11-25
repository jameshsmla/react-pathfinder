import { connect } from 'react-redux';
import React, { Component } from 'react';
import { INCREMENT } from '../actioncontants';
import { CounterView } from '../views/CounterView';
import { CounterReducer } from '../reducers';


class Counter extends Component {

      increment = () => {
            //dispatch an action
            this.props.dispatch({ type: INCREMENT })
      }

      render() {
            console.log(this.props);
            return <CounterView OnIncrement={this.increment} {...this.props} />
      }
}
//mapper function : it is function which converts state into prop.
function mapStateToProp(state) {
      //It returns configuration Object
      //let count = state.count;
      //let count = state.reducer.reducerdata
      let count = state.CounterReducer.count;
      //key would be react prop,value would be redux state
      return {
            //key:value
            count
      }
}
//connect Component with mapstatetop function:
const CounterContainer = connect(mapStateToProp)(Counter);

export { CounterContainer };

