import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { styles } from '../styles/Splash.styles';
import { Svg, Path, Circle } from 'react-native-svg';


const BackgroundPattern = () => (
  <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
    <Path d="M-200 0 Q-100 100 0 0 T200 0 T400 0 T600 0 T800 0 T1000 0 V1000 H-200 Z" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.9" transform="rotate(45)"/>
    <Path d="M-200 50 Q-100 150 0 50 T200 50 T400 50 T600 50 T800 50 T1000 50 V1050 H-200 Z" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.9" transform="rotate(45)"/>
    <Path d="M-200 100 Q-100 200 0 100 T200 100 T400 100 T600 100 T800 100 T1000 100 V1100 H-200 Z" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.9" transform="rotate(45)"/>
  </Svg>
);


const Logo = ({ width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 233 207" fill="none">
        <Path d="M182 69.6421V141.113C182 146.636 177.523 151.113 172 151.113H61C55.4772 151.113 51 146.636 51 141.113V69.6421C51 66.99 52.0536 64.4464 53.9289 62.5711L109.429 7.07107C113.334 3.16582 119.666 3.16582 123.571 7.07106L179.071 62.5711C180.946 64.4464 182 66.99 182 69.6421Z" fill="#5F60B9" stroke="#5F60BA"/>
        <Path d="M141.333 108.486C141.333 112.415 140.954 115.862 140.196 118.826C139.437 121.756 138.386 124.289 137.042 126.426C135.698 128.563 134.112 130.32 132.286 131.699C130.459 133.078 128.46 134.181 126.288 135.008C124.152 135.835 121.877 136.404 119.464 136.714C117.086 137.058 114.673 137.231 112.226 137.231C109.883 137.231 107.539 137.076 105.195 136.766C102.886 136.49 100.68 135.973 98.5777 135.215C96.5097 134.456 94.5796 133.405 92.7873 132.061C90.9951 130.717 89.4441 128.976 88.1344 126.839C86.8247 124.702 85.7907 122.135 85.0325 119.136C84.3087 116.138 83.9468 112.588 83.9468 108.486V68.2124C83.9468 67.0061 84.0502 65.9548 84.257 65.0587C84.4638 64.1626 84.8601 63.4216 85.4461 62.8357C86.032 62.2153 86.8419 61.75 87.8759 61.4398C88.9099 61.1296 90.2541 60.9745 91.9085 60.9745H114.966C116.965 60.9745 118.482 61.2674 119.516 61.8534C120.584 62.4393 121.325 63.1803 121.739 64.0764C122.187 64.9381 122.428 65.8687 122.463 66.8682C122.497 67.8332 122.514 68.7294 122.514 69.5566V127.511C125.616 126.891 127.857 125.461 129.235 123.22C130.614 120.98 131.303 117.654 131.303 113.242V63.4044C131.303 62.8184 131.424 62.267 131.665 61.75C131.941 61.233 132.527 60.9745 133.423 60.9745H138.8C139.11 60.9745 139.42 60.9917 139.73 61.0262C140.04 61.0607 140.316 61.1641 140.557 61.3364C140.799 61.4742 140.988 61.7155 141.126 62.0602C141.264 62.3704 141.333 62.8184 141.333 63.4044V108.486ZM118.12 68.626C118.12 67.8677 118.068 67.2646 117.965 66.8165C117.861 66.3684 117.655 66.041 117.344 65.8342C117.034 65.593 116.621 65.4551 116.104 65.4206C115.587 65.3517 114.915 65.3172 114.087 65.3172V128.08H118.12V68.626Z" fill="white"/>
        <Circle cx="101.196" cy="43.7249" r="11.3685" fill="white"/>
    </Svg>
);

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      // In the new navigator, Splash sits only in the AuthStack.
      // If user stays in AuthStack, go to onboarding.
      navigation.replace('Onboarding');
    }, 1500);

    return () => clearTimeout(timerId);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <BackgroundPattern />
      <View style={styles.logoContainer}>
        <Logo width="330%" height="350%" />
      </View>
      <Text style={styles.title}>Houseman User</Text>
    </View>
  );
};

export default Splash;