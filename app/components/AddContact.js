import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { MKTextField } from 'react-native-material-kit';

import * as actions from '../actions';


class AddContact extends Component {
  componentDidMount() {
    this.props.newContact();
  }

  onAddPress = () => {
    const { firstName, lastName, phone, email, company, project, notes, createNewContact, navigation } = this.props;

    createNewContact({
      firstName, lastName, phone, email, company, project, notes,
    });

    navigation.navigate('Contact');
  };

  render() {
    const { firstName, lastName, phone, email, company, project, notes, formUpdate } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formStyles}>
          <Text style={styles.title}>New Contact</Text>
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Firstname"
            onChangeText={(value) => formUpdate({ prop: 'firstName', value })}
            value={firstName}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Lastname"
            value={lastName}
            onChangeText={(value) => formUpdate({ prop: 'lastName', value })}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Phone"
            value={phone}
            onChangeText={(value) => formUpdate({ prop: 'phone', value })}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Email"
            value={email}
            onChangeText={(value) => formUpdate({ prop: 'email', value })}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Company"
            value={company}
            onChangeText={(value) => formUpdate({ prop: 'company', value })}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Project"
            value={project}
            onChangeText={(value) => formUpdate({ prop: 'project', value })}
          />
          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder="Notes"
            value={notes}
            onChangeText={(value) => formUpdate({ prop: 'notes', value })}
          />
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onAddPress}>
            <AntIcon name="plus" size={22} style={styles.buttonIconStyles} />
            <Text style={styles.buttonTextStyles}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

AddContact.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <AntIcon name={'adduser'} size={40} color={tintColor} />
  )
};

const mapStateToProps = (state) => {
  const { firstName, lastName, phone, email, company, project, notes } = state;
  return { firstName, lastName, phone, email, company, project, notes };
};

AddContact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  project: PropTypes.string,
  notes: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2bad78',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    marginTop: 16,
    padding: 8,
  },
  buttonIconStyles: {
    color: '#fff',
    marginRight: 5,
  },
  buttonTextStyles: {
    color: '#fff',
    fontSize: 22,
  },
  fieldStyles: {
    height: 40,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  formStyles: {
    flex: 1,
    paddingTop: 74,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
});

export default connect(mapStateToProps, actions)(AddContact);
