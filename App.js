import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentScreen from './screens/ComponentScreen';
import ListScreen from './screens/ListScreen';
import ListScreenExercise from './screens/ListScreenExercise';
import SectionFive from './screens/section-5/Main';

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
        <Stack.Screen name="SectionFive" component={SectionFive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;