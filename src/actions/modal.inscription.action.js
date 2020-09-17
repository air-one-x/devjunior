export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const NAME = 'NAME';
export const VERIF_PASS = 'VERIF_PASS';
export const IS_COMPANY = 'IS_COMPANY' ;
export const API_CONNECTION = 'API_CONNEXION';
export const IS_REGISTER = 'IS_REGISTER';

export const changeEmail = (payload) => ({
    type: EMAIL,
    payload
});

export const changePassword = (payload) => ({
    type: PASSWORD,
    payload
});

export const changeName = (payload) => ({
    type: NAME,
    payload
});

export const changeVerifPass = (payload) => ({
    type: VERIF_PASS,
    payload
});

export const changeIsCompany = () => ({
    type: IS_COMPANY,
});

export const apiConnection = () => ({
    type: API_CONNECTION
});

export const isRegister = (payload) => ({
    type: IS_REGISTER,
    payload
})

