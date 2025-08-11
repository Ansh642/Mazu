import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import { styles } from '../styles/Onboarding.styles';

const OnboardingSlide = ({ imageSource, title, description }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.slideContainer, { width }]}>
      {/* The background shape is now part of the main screen */}
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;