import React, { useState } from 'react';
import { View,Text,SafeAreaView,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform,StatusBar,TextInput,Pressable} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/Auth.styles';

const LoginScreen = ({navigation}) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [rememberMe, setRememberMe] = useState(true);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  
  const onLoginPress = (data) => {
    console.log('Login Data:', { ...data, rememberMe });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Hello Sara!</Text>
            <Text style={styles.subtitle}>
              Welcome Back, You Have Been Missed For Long Time
            </Text>
          </View>

          {/* Email Input */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Feather name="mail" size={20} color="#8F8F8F" />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            )}
          />

          {/* Password Input */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Feather name="lock" size={20} color="#8F8F8F" />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#8F8F8F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={isPasswordSecure}
                />
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

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.rememberMeContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Feather name="check" size={14} color="#FFF" />}
              </View>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit(onLoginPress)}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity>
              <Pressable onPress={()=>{navigation.navigate('SignupScreen')}}>
              <Text style={styles.signupLink}>Sign Up</Text>
              </Pressable>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or Continue With</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Feather name="chrome" size={24} color="#1C1F34" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Feather name="phone" size={24} color="#1C1F34" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
