import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ScreenOne from './pages/ScreenOne';
import ScreenTwo from './pages/ScreenTwo';
import ScreenThree from './pages/ScreenThree';
import FlexScreenOne from './pages/flex/ScreenOne';
import FlexScreenTwo from './pages/flex/ScreenTwo';
import FlexScreenThree from './pages/flex/ScreenThree';
import FlexScreenFour from './pages/flex/ScreenFour';
import AssignmentFour from './pages/flex/AssignmentFour';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'MickMaq Screens' }}
        />
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
        <Stack.Screen name="FlexScreenOne" component={FlexScreenOne} />
        <Stack.Screen name="FlexScreenTwo" component={FlexScreenTwo} />
        <Stack.Screen name="FlexScreenThree" component={FlexScreenThree} />
        <Stack.Screen name="FlexScreenFour" component={FlexScreenFour} />
        <Stack.Screen name="AssignmentFour" component={AssignmentFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;