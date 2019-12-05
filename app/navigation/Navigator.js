import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PeopleList from '../components/PeopleList';
import AddPerson from '../components/AddPerson';
import CompanyList from '../components/CompanyList';

const TabNavigator = createBottomTabNavigator({
  People: PeopleList,
  Add: AddPerson,
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
