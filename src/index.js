import {
      createStore,
      combineReducers
} from 'redux';
import {
      ADDTOCART,
      REMOVEFROMCART,
      INCREMENT,
      DECREMENT
} from './actioncontants';

import {
      CartReducer,
      CounterReducer
} from './reducers';
import {
      strict
} from 'assert';


/* const rootReducer = combineReducers({
      CartReducer: CartReducer,
      CounterReducer: CounterReducer
}); */
//TODO: write in a separte file called rootreducers.js
export const rootReducer = combineReducers({
      CartReducer,
      CounterReducer
});
//3.create store object
const store = createStore(rootReducer);

//4.Store subscription
store.subscribe(function () {
      //get application data
      console.log(`Current state (New state)`)
      console.log(store.getState());
});
store.dispatch({
      type: INCREMENT
});

store.dispatch({
      type: INCREMENT
});

const addItem = newItem => ({
      type: ADDTOCART,
      newItem
});

store.dispatch(addItem({
      id: 1,
      name: 'Iphone',
      price: 100000,
      model: '11'
}))
store.dispatch(addItem({
      id: 2,
      name: 'Iphone',
      price: 80000,
      model: '10'
}))
store.dispatch(addItem({
      id: 3,
      name: 'Iphone',
      price: 28000,
      model: '7'
}))

console.log('Remove items:')
//action creators
const removeItem = id => ({
      type: REMOVEFROMCART,
      id
});
store.dispatch(removeItem(2));