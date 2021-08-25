import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

export function ProgressBar({
  currentOffset = 0,
  componentHeight = 0,
  backgroundColor,
  percentageVisibility,
}) {
  const screenHeight = Dimensions.get('window').height || 0;
  const [progressPercentage, setProgressPercentage] = useState(0);
  useEffect(() => {
    const calculatePercentage = () => {
      const currentPercentage =
        ((currentOffset === 0
          ? screenHeight
          : currentOffset + screenHeight + 0.1) *
          100) /
        componentHeight;
      setProgressPercentage(Math.floor(currentPercentage));
    };
    calculatePercentage();
  }, [currentOffset, screenHeight]);
  return (
    <View style={progressBarBox(backgroundColor)}>
      {percentageVisibility && (
        <Text style={styles.percentageText}>{progressPercentage}%</Text>
      )}
      <View
        style={([StyleSheet.absoluteFill], progressBar(progressPercentage))}
      />
    </View>
  );
}

const progressBar = progressPercentage => {
  return {
    backgroundColor: '#8BED4F',
    width: progressPercentage + '%',
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };
};

const progressBarBox = backgroundColor => {
  return {
    position: 'absolute',
    top: 0,
    zIndex: 1000001,
    width: '100%',
    backgroundColor: backgroundColor ? backgroundColor : 'white',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const styles = StyleSheet.create({
  percentageText: {
    zIndex: 100001,
  },
});
