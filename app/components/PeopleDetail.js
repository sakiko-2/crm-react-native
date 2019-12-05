import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import PeopleItem from './PeopleItem';
import * as actions from '../actions';

const theme = getTheme();

const PeopleDetail = (props) => (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={[theme.cardStyle], styles.card}>
        <EvilIcon name={'user'} size={100} style={styles.userIcon} />
        <Text style={[theme.cardTitleStyle, styles.title1]}>
          {props.person.firstName} {props.person.lastName}
        </Text>
        <Text style={[theme.cardTitleStyle, styles.title2]}>
          from {props.person.company} 
        </Text>
        <SimpleLineIcon
        name={'close'}
        size={30}
        style={styles.closeIcon}
        onPress={() => props.noneSelected()}
      />
      </View>
      <View style={styles.textArea}>
        <MaterialIcon name={'phone'} size={40} style={styles.textIcon}/>
        <Text>{props.person.phone}</Text>
      </View>
      <View style={styles.textArea}>
        <MaterialIcon name={'email'} size={40} style={styles.textIcon}/>
        <Text>{props.person.email}</Text>
      </View>
      <View style={styles.textArea}>
        <MaterialIcon name={'assignment'} size={40} style={styles.textIcon}/>
        <Text>{props.person.project}</Text>
      </View>
      <View style={styles.textArea}>
        <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcon}/>
        <Text>{props.person.notes}</Text>
      </View>
      <View>
        <View style={styles.actionArea}>
          <TouchableOpacity>
            <FeatherIcon name={'phone-call'} size={38} style={styles.actionImage}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon name={'mail-outline'} size={38} style={styles.actionImage}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon name={'sms'} size={38} style={styles.actionImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.actionArea}>
          <Text>Call</Text>
          <Text>Email</Text>
          <Text>SMS</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

const mapStateToProps = state => {
  return {
    person: state.personSelected
  }
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
});

export default connect(mapStateToProps, actions)(PeopleDetail);
