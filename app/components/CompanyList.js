import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const CompanyList = (props) => (
  <View>
    <Text>Add company screen</Text>
  </View>
);

CompanyList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'archive'} size={50} color={tintColor} />
  )
};

export default connect(null, actions)(CompanyList);
