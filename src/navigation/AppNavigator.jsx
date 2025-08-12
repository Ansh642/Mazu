import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Intro1 from '../screens/Intro1';
import Intro2 from '../screens/Intro2';
import Intro3 from '../screens/Intro3';
import Intro4 from '../screens/Intro4';
import LoginScreen from '../screens/auth/Login';
import SignupScreen from '../screens/auth/SignUp';
import DashboardScreen from '../screens/dashboard/Dashboard';
import { useAuth } from '../redux/authContext';

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
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


