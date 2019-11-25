import {
      createStore
} from 'redux';
import {
      ADDTOCART,
      REMOVEFROMCART
} from './actioncontants';

import {
      CartReducer
} from './reducers';

//3.create store object
const store = createStore(CartReducer);

//4.Store subscription
store.subscribe(function () {
      //get application data
      console.log(`Current state (New state)`)
      console.log(store.getState());
});

//send cart items.

/* store.dispatch({ type: ADDTOCART, newItem: { id: 1, name: 'Iphone', price: 100000, model: '11' } })
store.dispatch({ type: ADDTOCART, newItem: { id: 2, name: 'Iphone', price: 80000, model: '10' } })
store.dispatch({ type: ADDTOCART, newItem: { id: 3, name: 'Iphone', price: 28000, model: '7' } }) */

//Action creators
/* const addItem = newItem => {
      return {
            type: ADDTOCART,
            newItem: newItem
      }
} */
const addItem = newItem => ({
      type: ADDTOCART,
      newItem
});

store.dispatch(addItem({ id: 1, name: 'Iphone', price: 100000, model: '11' }))
store.dispatch(addItem({ id: 2, name: 'Iphone', price: 80000, model: '10' }))
store.dispatch(addItem({ id: 3, name: 'Iphone', price: 28000, model: '7' }))


console.log('Remove items:')
//action creators
const removeItem = id => ({ type: REMOVEFROMCART, id });
store.dispatch(removeItem(2));
// Update item : object to be updated , price
// find item from the cart by id
