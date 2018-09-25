
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../../actions/users';
import LoginComponent from './LoginComponent';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userLogin,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginComponent);
