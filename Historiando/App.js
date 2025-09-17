import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShow: true, title: ' ', headerStyle :{backgroundColor: 'rgba(7, 43, 89, 1)', height: 0}}}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

