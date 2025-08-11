import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';
// It uses the same shared stylesheet
import { styles } from '../styles/Onboarding.styles';

const Intro3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backgroundShape} />
      
      <View style={styles.contentWrapper}>
        <Image
          source={require('../assets/images/onboarding3.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Book The Appointment</Text>
          <Text style={styles.description}>
            Book your services on your own time
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.paginationContainer}>
          {/* Manually setting the third dot as active */}
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.paginationDotActive]} />
          <View style={styles.paginationDot} />
        </View>
        <Pressable onPress={() => navigation.navigate('Intro4')} hitSlop={8}>
          <Text style={styles.getStartedButton}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Intro3;
