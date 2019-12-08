import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import { loadInitialContacts } from '../actions';

class PeopleList extends Component {

  componentDidMount() {
    this.props.loadInitialContacts();
  }

  renderInitialView = () => {
    if (this.props.detailView) {
      return (
        <PeopleDetail />
      );
    } else if (this.props.people.length === 0) {
      return (
        <Text style={styles.textStyles}>No contacts found.</Text>
      );
    } else {
      return (
        <FlatList
          data={this.props.people}
          renderItem={({ item }) => <PeopleItem people={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  render() {
    return (
      <View style={styles.containerStyles}>
        {this.renderInitialView()}
      </View>
    );
  };
};

PeopleList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <EvilIcon name={'user'} size={50} color={tintColor} />
  )
};

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView,
  }
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    width: 350,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
  textStyles: {
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  }
});

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);
