import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ContactItem from './ContactItem';
import ContactDetail from './ContactDetail';
import { loadInitialContacts } from '../actions';

class ContactList extends Component {
  componentDidMount() {
    this.props.loadInitialContacts();
  }

  renderInitialView = () => {
    const { contacts, detailView } = this.props;

    if (detailView) {
      return (
        <ContactDetail />
      );
    }

    if (contacts.length === 0) {
      return (
        <Text style={styles.textStyles}>No contacts found.</Text>
      );
    }

    return (
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactItem contacts={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  render() {
    return (
      <View style={styles.containerStyles}>
        {this.renderInitialView()}
      </View>
    );
  }
}

ContactList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <AntIcon name={'contacts'} size={40} color={tintColor} />
  )
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  detailView: state.detailView,
});

ContactList.propTypes = {
  contacts: PropTypes.array,
  detailView: PropTypes.bool,
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 25,
  },
  textStyles: {
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default connect(mapStateToProps, { loadInitialContacts })(ContactList);
