export const seeLanding = () => ({
  type: 'SEE_LANDING'
});
export const hideLanding = () => ({
  type: 'HIDE_LANDING'
});
export const seeForm = () => ({
  type: 'SEE_FORM'
});
export const isAdmin = () => ({
  type: 'IS_ADMIN'
});
export const updateCurrentUser = user => ({
  type: 'UPDATE_USER',
  user
});
export const selectedItem = item => ({
  type: 'SELECTED_ITEM',
  item
 
});
export const editItem = () => ({
  type: 'EDIT_ITEM'
  
});
