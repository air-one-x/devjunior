import { connect } from 'react-redux';
import slideHome from '../components/Home/SlideShow/slideShow';

const mapStateToProps = (state) => ({
    items: state.slideHome.items,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(slideHome);