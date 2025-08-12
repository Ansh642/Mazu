import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';
import { styles } from '../../styles/Onboarding.styles';

const Intro4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backgroundShape} />
      
      <View style={styles.contentWrapper}>
        <Image
          source={require('../../assets/images/onboarding4.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Payment Gateway</Text>
          <Text style={styles.description}>
            Choose the preferable options of payment and get best service
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.paginationDotActive]} />
        </View>
        <Pressable onPress={() => navigation.replace('LoginScreen')} hitSlop={8}>
          <Text style={styles.getStartedButton}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Intro4;
