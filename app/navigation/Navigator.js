import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';
import CompanyList from '../components/CompanyList';

const TabNavigator = createBottomTabNavigator({
  Contact: ContactList,
  Add: AddContact,
  Company: CompanyList,
},
{
  initialRouteName: 'Contact',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#999',
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#333',
    },
  },
});

export default createAppContainer(TabNavigator);
