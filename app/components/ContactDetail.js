import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UpdateContact from './UpdateContact';
import DetailView from './DetailView';

const ContactDetail = (props) => (
  props.toUpdate ? <UpdateContact /> : <DetailView />
);

const mapStateToProps = (state) => ({
  toUpdate: state.toUpdate,
});

export default connect(mapStateToProps, actions)(ContactDetail);
