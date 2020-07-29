import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { type, item } = action; 
  switch (action.type) {
    case c.SELECTED_ITEM:    
      return state = action.item;
    default :
      return state; 
  }
};