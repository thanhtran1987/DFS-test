import * as React from 'react';
import { Button, Grid, Row, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import Tile from './Tile';
import { isLoadMore } from '../Helper/shared';

const SIZE = 3;
const LIMIT = SIZE * 3;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ModalWrapper = styled(Modal)`
  .modal-body {
    padding: 0;
    img {
      width: 100%;
    }
  }
`;

export default class TileList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    if (this.props.tileList) {
      this.props.getTileList();
    }
  }

  doLoadMore() {
    this.setState({
      page: this.state.page + 1,
    });
  }

  renderModal() {
    if (this.props.page.showModal < 0) {
      return null;
    }

    const item = this.props.tileList.find((data: any) => data.id === this.props.page.showModal);

    return (
      <ModalWrapper show={this.props.page.showModal > -1} onHide={this.props.toggleModal}>
        <Modal.Body>
          <img src={item.url} alt="" />
        </Modal.Body>
        <Modal.Footer>{item.title}</Modal.Footer>
      </ModalWrapper>
    );
  }

  render() {
    if (!this.props.tileList || this.props.tileList.length < 1) {
      return null;
    }
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            {this.props.tileList.slice(0, this.state.page * SIZE).map((item: any) => {
              return <Tile data={item} key={item.id} />;
            })}
          </Row>
        </Grid>
        <ButtonWrapper>
          <Button
            bsStyle="info"
            disabled={isLoadMore(this.props.tileList, this.state.page, SIZE)}
            onClick={() => this.doLoadMore()}
          >
            Load more...
          </Button>
        </ButtonWrapper>
        {this.renderModal()}
      </div>
    );
  }
}
