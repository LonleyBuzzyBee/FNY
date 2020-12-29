import landingPageReducer from './landing-page-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedItemReducer from './selected-item-reducer';
import editReducer from './edit-reducer';
import isAdminReducer from './admin-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import updateCurrentUserReducer from './current-user-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  editing: editReducer,
  selectedItem: selectedItemReducer,
  currentUser: updateCurrentUserReducer,
  admin: isAdminReducer,
  firestore: firestoreReducer
});

export default rootReducer;