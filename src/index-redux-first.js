
//steps
//1.import createStore function, to create Store object
import { createStore } from 'redux';

//2.store object will have at least one biz logic = reducer function.
//reducer is pure function, which has some syntax.
//1.Reducer function must take two args
//1.1. inital state : === state variable declaration in React
// in react state is object , in reducer state can be anything(primitive,array,object)
//1.2. action object reference
const CounterReducer = (count = 0, action) => {
      console.log(`previous state - action `)
      console.log(`${count} `);
      console.log(action);
      //reducer logic: biz logic
      switch (action.type) {
            case 'INCREMENT':
                  return count + 1;
            case 'DECREMENT':
                  return count - 1;
            default:
                  return count;
      }
}
//3.create store object
const store = createStore(CounterReducer);

//4.Store subscription
store.subscribe(function () {
      //get application data
      console.log(`Current state (New state)`)
      console.log(store.getState());
});

//User interaction without react now.

const incrementAction = {
      type: 'INCREMENT'
}
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

store.dispatch({ type: 'DECREMENT' });