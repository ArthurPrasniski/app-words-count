import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import { HomeScreen } from './screens/home/Index';
import { ShowWord } from './screens/showWord/Index';

const Route = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator>
        <Route.Screen name="Home" component={HomeScreen} />
        <Route.Screen name="ShowWord" component={ShowWord} />
      </Route.Navigator>
    </NavigationContainer>
  );
}

