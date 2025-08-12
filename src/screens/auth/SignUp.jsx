import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/Auth.styles';

const SignupScreen = ({navigation}) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  // This function will be used later for API calls
  const onSignupPress = (data) => {
    console.log('Signup Data:', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.avatarContainer}>
            <Feather name="user" size={40} color="#FFFFFF" />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Hello User !</Text>
            <Text style={styles.subtitle}>Signup For Better Experience</Text>
          </View>

          {/* Full Name Input */}
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>

                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Feather name="user" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          {/* User Name Input */}
          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="User Name"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Feather name="user" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          {/* Email Input */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Feather name="mail" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          {/* Password Input */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={isPasswordSecure}
                />
                {/* <Feather name="lock" size={20} color="#8F8F8F" /> */}
                <TouchableOpacity onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Feather
                    name={isPasswordSecure ? 'eye-off' : 'eye'}
                    size={20}
                    color="#8F8F8F"
                  />
                </TouchableOpacity>
              </View>
            )}
          />

          {/* Contact Number Input */}
          <Controller
            control={control}
            name="contactNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Contact Number"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="phone-pad"
                />
                <Feather name="phone" size={20} color="#8F8F8F" />
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSubmit(onSignupPress)}
          >
            <Text style={styles.loginButtonText}>SIGNUP</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity>
              <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
                <Text style={styles.signupLink}>Sign In</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;
