import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const theme = getTheme();

const CompanyItem = (props) => {
  const { company, firstName, lastName } = props.companies;

  return (
    <View style={[theme.cardStyle, styles.card]}>
      <Icon
        name="business"
        size={50}
        style={styles.icon}
      />
      <Text style={[theme.cardTitleStyle, styles.title]}>{company}</Text>
      <Text style={[theme.cardActionStyle, styles.subtitle]}>
        {firstName} {lastName}
      </Text>
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
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1,
  },
  title: {
    fontSize: 20,
    top: 12,
    left: 60,
    width: 310,
  },
  subtitle: {
    color: '#fff',
    backgroundColor: '#000',
  },
  icon: {
    top: 5,
    left: 0,
    paddingTop: 17,
    paddingBottom: 22,
    paddingLeft: 10,
  },
});

export default CompanyItem;
