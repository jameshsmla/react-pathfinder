import {
      createStore,
      applyMiddleware
} from 'redux';

const INCREMENT = 'INCRMENT';

const CounterReducer = (state = 0, action) => {
      switch (action.type) {
            case INCREMENT:
                  return state + 1;
            default:
                  return state
      }
}
//Welcome Middleware 
const WelcomeMiddleware = function (store) {
      return function (next) {
            return function (action) {
                  // your middleware-specific code goes here
                  console.info(`Welcome to Redux Custom Middlewares`);
                  return next(action);
            }
      }
};
const Logger = store => next => action => {
      // your middleware-specific code goes here
      console.log('dispatching LOGGER', action)
      let result = next(action)
      console.log('next state', store.getState())
      return result
};

const middlewareConfig = applyMiddleware(WelcomeMiddleware, Logger);

const store = createStore(CounterReducer, middlewareConfig)

store.subscribe(function () {
      console.log(store.getState());
})

store.dispatch({
      type: INCREMENT
})