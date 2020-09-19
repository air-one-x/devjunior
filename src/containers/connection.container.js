import { connect } from 'react-redux';
import LoginComponent from '../components/Connection/login.modal';

const mapStateToPros = (state) => ({
    email: state.connectionReducer.email,
    password: state.connectionReducer.password
});

const mapDispatchToProps = {};

export default connect(mapStateToPros, mapDispatchToProps)(LoginComponent);