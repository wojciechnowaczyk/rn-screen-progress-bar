import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProgressBar} from './ProgressBar';

export function ContentArea({
  backgroundColor,
  barColor,
  percentage,
  percentageColor,
  children,
}) {
  const [componentHeight, setComponentHeight] = useState();
  const [currentOffset, setCurrentOffset] = useState();
  return (
    <>
      <ProgressBar
        currentOffset={currentOffset}
        componentHeight={componentHeight}
        backgroundColor={backgroundColor}
        barColor={barColor}
        percentage={percentage}
        percentageColor={percentageColor}
      />
      <ScrollView
        onScroll={event => setCurrentOffset(event.nativeEvent.contentOffset.y)}>
        <View
          onLayout={event =>
            setComponentHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </ScrollView>
    </>
  );
}
