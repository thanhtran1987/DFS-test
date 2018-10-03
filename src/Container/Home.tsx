import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileList from '../Component/TileList';
import { getTileList } from '../store/actions/tileListAction';
import { toggleModal } from '../store/actions/pageAction';

function mapStateToProps(state: any) {
  return {
    tileList: !state.tileList.loading ? state.tileList.data : [],
    page: state.page,
  };
}
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      getTileList,
      toggleModal,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TileList);
