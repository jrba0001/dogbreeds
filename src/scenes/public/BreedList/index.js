import { connect } from 'react-redux';

import { List } from '../../../components';

const mapStateToProps = state => ({
  data: state.publicList.data,
});

export default connect(mapStateToProps)(List);
