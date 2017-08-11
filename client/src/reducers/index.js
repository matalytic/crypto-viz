import { combineReducers } from 'redux';
import { fromPairs, takeRight } from 'lodash';

const prices = (state = {}, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  prices
});

export default rootReducer;