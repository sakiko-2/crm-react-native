import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = getTheme();

const CompanyItem = (props) => {
  const { company, firstName, lastName } = props.companies;

  return (
    <View style={[theme.cardStyle, styles.card]}>
      <Icon
        name="building-o"
        size={50}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{company}</Text>
        <Text style={styles.subtitle}>
          {firstName} {lastName}
        </Text>
      </View>
    </View>
  );
};

CompanyItem.propTypes = {
  companies: PropTypes.shape({
    company: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
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
    top: 0,
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

export default CompanyItem;
