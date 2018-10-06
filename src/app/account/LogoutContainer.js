import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../../actions/users';
import LogoutComponent from './LogoutComponent';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userLogout,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LogoutComponent);
