import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// Navigators
import Home from '../components/screens/Home/Home';
import Reservations from'../components/screens/Reservations/Reservations';

const RootStack =  createStackNavigator(
  {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Hilton Reservation App',
        }
    },
    Reservations: {
        screen: Reservations,
        navigationOptions: {
            title: 'Reservations',
        }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const RootStackApp = createAppContainer(RootStack);

export default RootStackApp;