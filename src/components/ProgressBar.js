import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

export function ProgressBar({
  currentOffset = 0,
  componentHeight = 0,
  backgroundColor,
  barColor,
  percentage,
  percentageColor,
  top,
}) {
  const screenHeight = Dimensions.get('window').height || 0;
  const [progressPercentage, setProgressPercentage] = useState(0);
  const calculatePercentage = () => {
    const currentPercentage =
      componentHeight > 0
        ? ((currentOffset === 0
            ? screenHeight
            : currentOffset + screenHeight + 0.1) *
            100) /
          componentHeight
        : null;
    setProgressPercentage(Math.floor(currentPercentage));
  };
  useEffect(() => {
    calculatePercentage();
  }, [currentOffset, screenHeight]);
  return (
    <View style={progressBarBox(backgroundColor, top)} id="ProgressBarBox">
      {percentage && (
        <Text style={percentageText(percentageColor)} id="ProgressPercentage">
          {progressPercentage > 100 ? 100 : progressPercentage}%
        </Text>
      )}
      <View style={progressBar(progressPercentage, barColor)} />
    </View>
  );
}

const progressBar = (progressPercentage, barColor) => {
  return {
    backgroundColor: barColor ? barColor : '#8BED4F',
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
    zIndex: 0,
  };
};

const progressBarBox = (backgroundColor, top) => {
  return {
    position: 'absolute',
    top: top ? top : 0,
    zIndex: 10001,
    width: '100%',
    backgroundColor: backgroundColor ? backgroundColor : 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  };
};

const percentageText = percentageColor => {
  return {
    zIndex: 1000001,
    color: percentageColor ? percentageColor : 'white',
    fontWeight: 'bold',
    fontSize: 15,
    elevation: 6,
  };
};
