import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Glyphicon } from 'react-bootstrap';

import { toggleModal } from '../store/actions/pageAction';

class ModalButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Button bsSize="small" onClick={() => this.props.toggleModal(this.props.buttonID)}>
        <Glyphicon glyph="eye-open" />
        View full size
      </Button>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      toggleModal,
    },
    dispatch,
  );
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ModalButton);
