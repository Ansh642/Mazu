import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';
// It now uses the corrected, shared stylesheet
import { styles } from '../styles/Onboarding.styles';

const Intro1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backgroundShape} />
      
      <View style={styles.contentWrapper}>
        <Image
          source={require('../assets/images/onboarding1.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome To Houseman</Text>
          <Text style={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.paginationContainer}>
          
          <View style={[styles.paginationDot, styles.paginationDotActive]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <Pressable onPress={() => navigation.navigate('Intro2')} hitSlop={8}>
          <Text style={styles.getStartedButton}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Intro1;
