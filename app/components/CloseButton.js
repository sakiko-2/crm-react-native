import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const CloseButton = (props) => (
  <SimpleLineIcon
    name="close"
    size={30}
    style={styles.closeIcon}
    onPress={props.onPress}
  />
);

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
  },
});

export default connect(null, actions)(CloseButton);
