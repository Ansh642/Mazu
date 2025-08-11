import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: width * 0.4,
    height: width * 0.3,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F60B9', 
    borderRadius: 28,
    padding: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#1F2937',
    marginTop: 24,
  },
});