import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { type, user } = action; 
  switch (action.type) {
    case c.UPDATE_USER:    
      return state = action.user;
    default :
      return state; 
  }
};