import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import SecondScreen from './Screens/SecondScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options= {{headerShown: false}}
        />
        <Stack.Screen 
          name="SecondScreen" 
          component={SecondScreen} 
          options= {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack

