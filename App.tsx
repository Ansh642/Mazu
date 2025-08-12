import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';
import Intro3 from './src/screens/Intro3';
import Intro4 from './src/screens/Intro4';
import LoginScreen from './src/screens/auth/Login';
import SignupScreen from './src/screens/auth/SignUp';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Intro1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro4"
          component={Intro4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;