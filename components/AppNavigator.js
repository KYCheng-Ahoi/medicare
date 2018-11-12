import { createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import EditPlanScreen from '../screens/EditPlanScreen'
import ViewPlanScreen from '../screens/ViewPlanScreen'

// Create a stack navigator
const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ViewPlan: { screen: ViewPlanScreen },
  EditPlan: { screen: EditPlanScreen }
});

export default AppNavigator;
