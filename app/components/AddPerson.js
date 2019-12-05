import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const AddPerson = (props) => (
  <View>
    <Text>Add person screen</Text>
  </View>
);

AddPerson.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'plus'} size={50} color={tintColor} />
  )
};

export default connect(null, actions)(AddPerson);
