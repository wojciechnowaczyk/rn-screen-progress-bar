import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

export function ProgressBar({currentOffset = 0, componentHeight = 0}) {
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
    <View style={styles.progressBar}>
      <Text>Progress Bar {progressPercentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    position: 'absolute',
    top: 60,
    zIndex: 1000001,
  },
});
