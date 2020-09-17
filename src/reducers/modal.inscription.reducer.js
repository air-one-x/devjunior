import { EMAIL, PASSWORD, VERIF_PASS, IS_COMPANY, NAME, IS_REGISTER } from '../actions/modal.inscription.action';

const initialState = {
    name: '',
    email: '',
    password: '',
    verifPass: '',
    isCompany: false,
    isRegister: ''
};

export default (state= initialState, action={}) => {
    switch(action.type) {
        case NAME : 
        return {
            ...state,
            name: action.payload
        };
        case EMAIL : 
        return {
            ...state,
            email: action.payload
        };
        case PASSWORD : 
        return {
            ...state,
            password: action.payload
        };
        case VERIF_PASS : 
        return {
            ...state,
            verifPass: action.payload
        };
        case IS_COMPANY : 
        return {
            ...state,
            isCompany: !state.isCompany
        };
        case IS_REGISTER : 
        return {
            ...state,
            isRegister: action.payload
        }
        default:
            return state; 
    }
}