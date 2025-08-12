import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';
// It uses the same shared stylesheet
import { styles } from '../../styles/Onboarding.styles';

const Intro2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backgroundShape} />
      
      <View style={styles.contentWrapper}>
        <Image
          source={require('../../assets/images/onboarding2.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Find Your Service</Text>
          <Text style={styles.description}>
            Find your service as per your preferences
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.paginationContainer}>
         
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.paginationDotActive]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <Pressable onPress={() => navigation.navigate('Intro3')} hitSlop={8}>
          <Text style={styles.getStartedButton}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Intro2;
