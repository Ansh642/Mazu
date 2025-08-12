import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/redux/authContext';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AppNavigator />
      <Toast position="top" />
    </AuthProvider>
  );
}

export default App;