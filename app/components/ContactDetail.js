import PropTypes from 'prop-types';
import React from 'react';
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

const ContactDetail = (props) => {
  const { contact, deleteContact } = props;

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
            onPress={() => props.noneSelected()}
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
          <FontAwesomeIcon name="building-o" size={40} style={styles.textIcon} />
          <Text>{contact.project}</Text>
        </View>
        <View style={styles.textArea}>
          <MaterialCommunityIcon name="note-outline" size={40} style={styles.textIcon} />
          <Text>{contact.notes}</Text>
        </View>
       
        <View>
          <View style={styles.actionArea}>
            <TouchableOpacity style={styles.button}>
              <FeatherIcon name="phone-call" size={38} style={styles.actionImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcon name="mail-outline" size={38} style={styles.actionImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcon name="sms" size={38} style={styles.actionImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>Email</Text>
            <Text>SMS</Text>
          </View>
        </View>
        <View style={styles.editArea}>
          <TouchableOpacity style={[styles.button, styles.edit]}>
            <FeatherIcon name="edit" size={40} />
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.delete]}
            onPress={() => { deleteContact(contact._id) }}
          >
            <AntDesignIcon name="delete" size={40} />
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contactSelected,
});

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    company: PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    propTypes: PropTypes.string,
    notes: PropTypes.string,
  }),
  deleteContact: PropTypes.func,
};

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
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
  },
  delete: {
    backgroundColor: MKColor.palette_red_500
  },
  edit: {
    backgroundColor: MKColor.Cyan
  },
});

export default connect(mapStateToProps, actions)(ContactDetail);
