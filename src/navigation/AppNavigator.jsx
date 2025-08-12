import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Intro1 from '../screens/onboarding/Intro1';
import Intro2 from '../screens/onboarding/Intro2';
import Intro3 from '../screens/onboarding/Intro3';
import Intro4 from '../screens/onboarding/Intro4';
import LoginScreen from '../screens/auth/Login';
import SignupScreen from '../screens/auth/SignUp';
import DashboardScreen from '../screens/dashboard/Dashboard';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Intro1} options={{ headerShown: false }} />
      <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }} />
      <Stack.Screen name="Intro3" component={Intro3} options={{ headerShown: false }} />
      <Stack.Screen name="Intro4" component={Intro4} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const user = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


