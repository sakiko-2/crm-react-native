import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';

const PeopleList = (props) => {

  const InitialView = () => {
    if (props.detailView) {
      return (
        <PeopleDetail />
      );
    } else {
      return (
        <FlatList
          data={props.people}
          renderItem={({ item }) => <PeopleItem people={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <InitialView />
    </View>
  );
};

PeopleList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'user'} size={50} color={tintColor} />
  )
};

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  }
});

export default connect(mapStateToProps)(PeopleList);
