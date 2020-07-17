import landingPageReducer from './landing-page-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedItemReducer from './selected-item-reducer';
import editReducer from './edit-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  landingPageVisible: landingPageReducer,
  formVisibleOnPage: formVisibleReducer,
  editing: editReducer,
  selectedItem: selectedItemReducer,
  firestore: firestoreReducer
});

export default rootReducer;