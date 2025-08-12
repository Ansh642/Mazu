import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './src/components/ErrorFallback.jsx';
import { restoreAuth } from './src/redux/slices/authSlice';

function App() {
  useEffect(() => {
    store.dispatch(restoreAuth());
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppNavigator />
        <Toast position="top" />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;