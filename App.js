import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import AssignmentOne from './pages/AssigmentOne';
import AssignmentTwo from './pages/AssignmentTwo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'MickMaq Assignments'}}
        />
        <Stack.Screen name="AssignmentOne" component={AssignmentOne} />
        <Stack.Screen name="AssignmentTwo" component={AssignmentTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;