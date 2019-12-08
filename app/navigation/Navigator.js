import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PeopleList from '../components/PeopleList';
import AddContact from '../components/AddContact';
import CompanyList from '../components/CompanyList';

const TabNavigator = createBottomTabNavigator({
  People: PeopleList,
  Add: AddContact,
  Company: CompanyList,
},
{
  initialRouteName: 'People',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#999',
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#333',
    }
  }
});

export default createAppContainer(TabNavigator);
