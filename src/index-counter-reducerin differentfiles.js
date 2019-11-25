import {
      createStore
} from 'redux';
import {
      INCREMENT,
      DECREMENT
} from './actioncontants';
import {
      CounterReducer
} from './reducers';


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
      type: INCREMENT
}
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

store.dispatch({
      type: DECREMENT
});