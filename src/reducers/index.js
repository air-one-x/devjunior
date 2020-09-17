import { combineReducers } from 'redux';
import slideHome from './slideHome.reducer';
import modalInscription from './modal.inscription.reducer';

export default combineReducers({
  slideHome, modalInscription
});
