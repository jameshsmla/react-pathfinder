import {
      createStore, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const FINDALL = 'FINDALL'

const todoReducer = (state = [], action) => {
      switch (action.type) {
            case FINDALL:
                  return state.concat(action.todos)
            default:
                  return state;
      }
}

const Logger = store => next => action => {
      // your middleware-specific code goes here
      console.log('dispatching LOGGER', action)
      let result = next(action)
      console.log(store.getState())
      return result
};
const middlewareConfig = applyMiddleware(Logger, thunk)

const store = createStore(todoReducer, middlewareConfig);

store.subscribe(function () {
      console.log(store.getState());
})

//sync action creators
/* function findAllTodos(todos) {
      return {
            type: FINDALL,
            todos
      }

} */
/* function findAllTodos(todos) {
      setTimeout(function () {
            return {
                  type: FINDALL,
                  todos
            }
      }, 2000)

} */
//without middleware
/* function findAllTodos() {
      const url = 'https://jsonplaceholder.typicode.com/todos'
      fetch(url).then(res => res.json()).then(todos => {
            return {
                  type: FINDALL,
                  todos
            }
      });
} */

//with middlware 


function findAllTodos() {
      return function (dispatch) {
            const url = 'https://jsonplaceholder.typicode.com/todos'
            fetch(url).then(res => res.json()).then(todos => {
                  //dispatch never be called until async operation is completed
                  dispatch({
                        type: FINDALL,
                        todos
                  })
            });
      }

}

// store.dispatch(findAllTodos({
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
// }))
//this should go inside componentDidMount
store.dispatch(findAllTodos());
