import { combineReducers } from 'redux';
import slideHome from './slideHome.reducer';
import registerReducer from './inscription.reducer';
import connectionReducer from './login.reducer';

export default combineReducers({
  slideHome, registerReducer, connectionReducer
});
