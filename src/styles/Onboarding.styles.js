import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },

  backgroundShape: {
    position: 'absolute',
    top: -110,
    left: 100,
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width,
    backgroundColor: '#E9E9F9',
    alignSelf: 'center',
  },

  slideWrapper: {
    flex: 1, 
  },

  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    width: width,
  },
  imageContainer: {
    flex: 0.5, 
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  image: {
    width: width * 0.80, 
    height: '75%', 
    resizeMode: 'contain',
    marginLeft: 28,
    marginTop: 24,
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    color: '#1C1F34',
    textAlign: 'start',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#8F8F8F',
    fontWeight: '500',
    textAlign: 'start',
    lineHeight: 24,
  },
  footer: {
    height: 90,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    width: '100%',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#5F60B9',
    width: 25,
  },
  getStartedButton: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'medium',
    color: '#5F60B9',
  },
});