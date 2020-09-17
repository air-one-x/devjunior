import { connect } from 'react-redux';
import ModalInscription from '../components/NavBarTop/modal.inscription';
import { changeEmail, changePassword, changeName, changeIsCompany, changeVerifPass, apiConnection } from '../actions/modal.inscription.action';

const mapStateToProps = (state) => ({
    email : state.modalInscription.email,
    password : state.modalInscription.password,
    name: state.modalInscription.name,
    verifPass: state.modalInscription.verifPass,
    isCompany: state.modalInscription.isCompany,
    isRegister: state.modalInscription.isRegister
});

const mapDispatchToProps = (dispatch) => ({
    changeEmail: (event) => dispatch(changeEmail(event)),
    changeName: (event) => dispatch(changeName(event)),
    changeIsCompany: (event) => dispatch(changeIsCompany(event)),
    changeVerifPass: (event) => dispatch(changeVerifPass(event)),
    changePassword: (event) => dispatch(changePassword(event)),
    checkApi: () => dispatch(apiConnection())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalInscription) ;
