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
import { getTheme, MKColor } from 'react-native-material-kit';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const theme = getTheme();

class DetailView extends Component {
  update() {
    const { contact, updateContact } = this.props;

    updateContact(contact);
  }

  render() {
    const { contact, deleteContact, noneSelected } = this.props;

    if (!contact) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[theme.cardStyle], styles.card}>
            <EvilIcon name="user" size={100} style={styles.userIcon} />
            <Text style={[theme.cardTitleStyle, styles.title1]}>
              {contact.firstName} {contact.lastName}
            </Text>
            <Text style={[theme.cardTitleStyle, styles.title2]}>
              {contact.company}
            </Text>
            <SimpleLineIcon
              name="close"
              size={30}
              style={styles.closeIcon}
              onPress={() => noneSelected()}
            />
          </View>
          <View style={styles.textArea}>
            <FeatherIcon name="phone" size={40} style={styles.textIcon} />
            <Text>{contact.phone}</Text>
          </View>
          <View style={styles.textArea}>
            <FeatherIcon name="mail" size={40} style={styles.textIcon} />
            <Text>{contact.email}</Text>
          </View>
          <View style={styles.textArea}>
            <FontAwesomeIcon name="building-o" size={38} style={[styles.textIcon, styles.projectIcon]} />
            <Text>{contact.project}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialCommunityIcon name="note-outline" size={42} style={styles.textIcon} />
            <Text>{contact.notes}</Text>
          </View>
          <View>
            <View style={styles.actionArea}>
              <TouchableOpacity>
                <FeatherIcon name="phone-call" size={38} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcon name="mail-outline" size={38} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcon name="sms" size={38} />
              </TouchableOpacity>
            </View>
            <View style={styles.actionArea}>
              <Text>Call</Text>
              <Text>Email</Text>
              <Text>SMS</Text>
            </View>
          </View>
          <View style={styles.editArea}>
            <TouchableOpacity
              style={[styles.button, styles.edit]}
              onPress={() => { this.update(contact); }}
            >
              <FeatherIcon name="edit" size={40} />
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.delete]}
              onPress={() => { deleteContact(contact._id); }}
            >
              <AntDesignIcon name="delete" size={40} />
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactSelected,
  toUpdate: state.toUpdate,
});

DetailView.propTypes = {
  contact: PropTypes.array,
  toUpdate: PropTypes.func,
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    width: 350,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  userIcon: {
    paddingTop: 10,
    marginLeft: -5,
    width: 84,
  },
  title1: {
    top: 8,
    left: 80,
    fontSize: 24,
    justifyContent: 'center',
  },
  title2: {
    top: 42,
    left: 82,
    fontSize: 18,
    justifyContent: 'center',
  },
  closeIcon: {
    paddingRight: 10,
  },
  textArea: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    width: 260,
    alignItems: 'center',
  },
  textIcon: {
    color: '#333',
    paddingRight: 10,
  },
  projectIcon: {
    marginLeft: 4,
  },
  actionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
    marginBottom: -20,
  },
  editArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    borderRadius: 60,
    margin: 5,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 20,
  },
  delete: {
    backgroundColor: MKColor.palette_red_500,
  },
  edit: {
    backgroundColor: MKColor.Cyan,
  },
});

export default connect(mapStateToProps, actions)(DetailView);
