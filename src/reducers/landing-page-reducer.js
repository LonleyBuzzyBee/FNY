import * as c from './../actions/ActionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case c.SEE_LANDING:
      return true;
      case c.HIDE_LANDING:
        return false;
    default:
      return state;
  }
};