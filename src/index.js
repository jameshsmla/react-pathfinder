import {
      createStore
} from 'redux';

const FINDALL = 'FINDALL'

const todoReducer = (state = [], action) => {
      switch (action.type) {
            case FINDALL:
                  return [...state, action.todos];
            default:
                  return state;
      }
}
const store = createStore(todoReducer);

//action creators
function findAllTodos(todos) {
      setTimeout(function () {
            //after 2000ms return action object
            return {
                  type: FINDALL,
                  todos
            }
      }, 2000)

}
store.dispatch(findAllTodos({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
}))
