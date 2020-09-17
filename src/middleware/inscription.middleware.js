import { API_CONNECTION, isRegister } from '../actions/modal.inscription.action';
import axios from 'axios';

const inscriptionMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case API_CONNECTION:
            axios({
                method: 'post',
                url: store.getState().modalInscription.isCompany == true ? 'http://localhost:3000/company/register' : 'http://localhost:3000/dev/register',
                withCredentials: false,
                data : {
                    username: store.getState().modalInscription.name,
                    mail: store.getState().modalInscription.email,
                    password: store.getState().modalInscription.password,
                }
            })
            .then( result => {
                store.dispatch(isRegister('oui'));
            })
            .catch( error => {
                store.dispatch(isRegister('non'));
            })    
            
        break;
        default :
        next(action)
    }

}

export default inscriptionMiddleware;