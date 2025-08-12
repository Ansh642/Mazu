import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from '../styles/ErrorFallback.styles';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message} numberOfLines={3}>
        {error?.message || 'An unexpected error occurred.'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={resetErrorBoundary}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}
