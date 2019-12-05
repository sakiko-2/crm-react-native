import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const PeopleItem = (props) => (
  <TouchableWithoutFeedback
    onPress={() => props.selectPerson(props.people)}
  >
    <View style={[theme.cardStyle, styles.card]}>
      <Icon 
        name={'user'}
        size={100}
        style={styles.icon}
      />
      <Text style={[theme.cardTitleStyle, styles.title]}>
        {props.people.firstName} {props.people.lastName}
      </Text>
      <Text style={[theme.cardActionStyle, styles.action]}>
        {props.people.company}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 16,
    left: 80,
    fontSize: 22,
  },
  action: {
    color: '#fff',
    backgroundColor: '#000',
  },
  icon: {
    top: 5,
    left: 0,
  }
})

export default connect(null, actions)(PeopleItem);
