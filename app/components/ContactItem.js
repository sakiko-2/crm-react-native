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
        <View style={styles.content}>
          <Text style={styles.title}>
            {contacts.firstName} {contacts.lastName}
          </Text>
          <Text style={styles.subtitle}>
            {contacts.company}
          </Text>
        </View>
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
    display: 'flex',
    flexDirection: 'row',
    height: 88,
    marginTop: 8,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    color: '#323232',
    fontSize: 16,
    fontWeight: '400',
  },
  subtitle: {
    color: '#555',
    paddingRight: 10,
    textAlign: 'right',
  },
  icon: {
    alignSelf: 'center',
    color: '#555',
    textAlign: 'center',
    width: 70,
  },
});

export default connect(null, actions)(ContactItem);
