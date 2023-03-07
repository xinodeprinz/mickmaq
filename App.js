import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentScreen from './screens/ComponentScreen';
import ListScreen from './screens/ListScreen';
import ListScreenExercise from './screens/ListScreenExercise';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="ComponentScreen" component={ComponentScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ListScreenExercise" component={ListScreenExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;