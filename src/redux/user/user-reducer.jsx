//setting an intial state for this reducer as we do in our react class
import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

//ES6 feature of assigning a default value for state
const userReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
          ...state,
          currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;