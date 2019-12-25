import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/AntDesign';
import * as actions from '../actions';

const theme = getTheme();

const ContactItem = (props) => {
  const { contacts } = props;

  return (
    <TouchableWithoutFeedback onPress={() => props.selectContact(contacts)}>
      <View style={[theme.cardStyle, styles.card]}>
        <Icon
          name="user"
          size={60}
          style={styles.icon}
        />
        <Text style={[theme.cardTitleStyle, styles.title]}>
          {contacts.firstName} {contacts.lastName}
        </Text>
        <Text style={[theme.cardActionStyle, styles.subtitle]}>
          {contacts.company}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    company: PropTypes.string,
  }),
  selectContact: PropTypes.func,
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginRight: 12,
    marginLeft: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1,
    width: 350,
  },
  title: {
    top: 16,
    left: 75,
    fontSize: 22,
    width: 310,
  },
  subtitle: {
    color: '#fff',
    backgroundColor: '#000',
  },
  icon: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    width: 75,
  },
});

export default connect(null, actions)(ContactItem);
