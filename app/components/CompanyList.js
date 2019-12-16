import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

const CompanyList = (props) => (
  <View style={styles.containerStyles}>
    <FlatList
      data={props.contacts.map((value, key) => ({
        company: value.company,
        firstName: value.firstName,
        lastName: value.lastName,
      })).sort((a, b) => a.company - b.company)}
      renderItem={({ item }) => <CompanyItem companies={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

CompanyList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'archive'} size={50} color={tintColor} />
  )
};

CompanyList.propTypes = {
  contacts: PropTypes.array,
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingTop: 25,
  },
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(CompanyList);
