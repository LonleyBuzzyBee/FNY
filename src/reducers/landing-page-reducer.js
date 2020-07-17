import * as c from './../actions/ActionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case c.SEE_LANDING:
      return !state;
    default:
      return state;
  }
};