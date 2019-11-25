import {
      INCREMENT,
      DECREMENT
} from '../actioncontants';

/* export const CounterReducer = (count = 0, action) => {
      console.log(`previous state - action `)
      console.log(`${count} `);
      console.log(action);
      //reducer logic: biz logic
      switch (action.type) {
            case INCREMENT:
                  return count + 1;
            case DECREMENT:
                  return count - 1;
            default:
                  return count;
      }
} */
//literal object
const initState = {
      count: 10
}
export const CounterReducer = (state = initState, action) => {
      console.log(`previous state - action `)
      console.log(`${state.count} `);
      console.log(action);
      //reducer logic: biz logic
      switch (action.type) {
            case INCREMENT:
                  let inccount = state.count + 1;
                  return {
                        ...state, count: inccount
                  }
                  case DECREMENT:
                        let deccount = state.count - 1;

                        return {
                              ...state, count: deccount
                        }

                        default:
                              return state;
      }
}