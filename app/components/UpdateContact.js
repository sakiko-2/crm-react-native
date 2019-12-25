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
import FeatherIcon from 'react-native-vector-icons/Feather';
import { MKTextField } from 'react-native-material-kit';

import * as actions from '../actions';
import CloseButton from './CloseButton';


class UpdateContact extends Component {
  onUpdatePress = () => {
    const { firstName, lastName, phone, email, company, project, notes, _id, saveContact } = this.props;

    saveContact({
      firstName, lastName, phone, email, company, project, notes, _id,
    });
  };

  render() {
    const { firstName, lastName, phone, email, company, project, notes, formUpdate, cancelUpdateContact } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formStyles}>
          <CloseButton onPress={() => cancelUpdateContact()} />
          <Text style={styles.title}>Edit Contact</Text>
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
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onUpdatePress}>
            <FeatherIcon name="save" size={22} style={styles.buttonIconStyles} />
            <Text style={styles.buttonTextStyles}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstName, lastName, phone, email, company, project, notes, _id, navigation } = state;
  return { firstName, lastName, phone, email, company, project, notes, _id, navigation };
};

UpdateContact.propTypes = {
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
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
});

export default connect(mapStateToProps, actions)(UpdateContact);
