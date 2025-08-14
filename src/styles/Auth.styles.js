import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: 8
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#5F60B9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 4,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40, 
  },
  title: {
    fontSize: 29,
    fontWeight: 'semibold',
    color: '#1C1F34',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: '#8F8F8F',
    textAlign: 'center',
    maxWidth: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7FB',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1C1F34',
    marginLeft: 1,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5F60B9',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#5F60B9',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#1C1F34',
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5F60B9',
    fontStyle : "italic"
  },
  loginButton: {
    backgroundColor: '#5F60B9',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  signupButton: {
    marginTop: 50,
    backgroundColor: '#5F60B9',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop:1,
  },
  signupText: {
    fontSize: 16,
    color: '#8F8F8F',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5F60B9',
    marginLeft: 5,
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 15,
    fontSize: 14,
    color: '#8F8F8F',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F7F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  errorText: {
    color: '#D63031',
    fontSize: 13,
    marginTop: -12,
    marginBottom: 12,
  },
});
