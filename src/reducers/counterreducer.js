import {
      INCREMENT,
      DECREMENT
} from '../actioncontants';

export const CounterReducer = (count = 0, action) => {
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
}