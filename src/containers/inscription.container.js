import { connect } from 'react-redux';
import registerReducer from '../components/NavBarTop/modal.inscription';
import { changeEmail, changePassword, changeName, changeIsCompany, changeVerifPass, apiConnection, restart } from '../actions/modal.inscription.action';

const mapStateToProps = (state) => ({
    email : state.registerReducer.email,
    password : state.registerReducer.password,
    name: state.registerReducer.name,
    verifPass: state.registerReducer.verifPass,
    isCompany: state.registerReducer.isCompany,
    isRegister: state.registerReducer.isRegister
});

const mapDispatchToProps = (dispatch) => ({
    changeEmail: (event) => dispatch(changeEmail(event)),
    changeName: (event) => dispatch(changeName(event)),
    changeIsCompany: (event) => dispatch(changeIsCompany(event)),
    changeVerifPass: (event) => dispatch(changeVerifPass(event)),
    changePassword: (event) => dispatch(changePassword(event)),
    checkApi: () => dispatch(apiConnection()),
    restart: () => dispatch(restart())
});

export default connect(mapStateToProps, mapDispatchToProps)(registerReducer) ;
