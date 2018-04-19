import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List } from '../../../components';

import { publicListDelete } from '../../../actions';

class BreedListAdmin extends Component {
  handleDelete = (e) => {
    if (e.target) {
      const breedName = e.target.value;
      this.props.publicListDelete(breedName);
    }
  };
  render() {
    return <List isAdmin data={this.props.data} handleDelete={this.handleDelete} />;
  }
}

const mapStateToProps = state => ({
  data: state.publicList.data,
});

const mapDispatchToProps = {
  publicListDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedListAdmin);
