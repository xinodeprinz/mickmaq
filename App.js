import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './pages/Todo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo"
          component={Todo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;