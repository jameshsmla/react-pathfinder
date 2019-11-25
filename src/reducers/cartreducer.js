import {
      REMOVEFROMCART,
      ADDTOCART
} from '../actioncontants';

const initState = [];
export const CartReducer = (state = initState, action) => {
      switch (action.type) {
            case ADDTOCART:
                  return state.concat(action.newItem);
            case REMOVEFROMCART:
                  return state.filter(item => item.id !== action.id)

            default:
                  return state;
      }
}