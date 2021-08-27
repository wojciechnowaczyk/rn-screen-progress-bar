/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ContentArea} from './components/ContentArea';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar />
      <ContentArea
        backgroundColor="#a8dadc"
        barColor="#457b9d"
        percentage
        percentageColor="#ffffff"
        top={40}>
        <Text style={{marginTop: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          suscipit, eros non suscipit scelerisque, purus dolor interdum quam,
          non pulvinar ex ante at metus. Fusce et erat malesuada, convallis
          purus id, gravida enim. In felis velit, porta vitae tempus a,
          sollicitudin vitae nibh. Nunc pellentesque scelerisque tellus vitae
          mattis. Suspendisse vel nisi ac dui consequat feugiat. Fusce
          vestibulum hendrerit lobortis. Proin a maximus nibh, in cursus felis.
          Sed nisl nunc, consectetur at posuere ut, consequat quis justo. In
          eget aliquam arcu, nec mollis ligula. Curabitur risus odio, elementum
          a diam at, suscipit eleifend diam. Nullam consequat accumsan lacus,
          quis hendrerit nisi convallis ut. Donec sagittis ante vitae lacus
          blandit aliquam. Quisque lacinia nibh sed ante mattis, eget euismod
          libero tincidunt. Quisque commodo metus non purus fringilla, eget
          varius mauris molestie. Mauris interdum placerat tortor ac luctus.
          Morbi mollis dapibus est a pulvinar. Quisque ut felis ut nibh blandit
          ultricies sit amet et neque. Etiam at nisl vel eros egestas suscipit.
          Integer vel diam vitae magna imperdiet efficitur eu in ante. Cras sed
          orci ac diam luctus dictum. Donec tincidunt turpis vel enim mattis
          scelerisque eu ut dui. Mauris sed nunc massa. Nullam a turpis
          sollicitudin mauris tempor accumsan eget sit amet elit. Integer vitae
          tincidunt mi. Integer nec fringilla dui. Cras mollis varius est sit
          amet porta. Quisque posuere purus magna, laoreet bibendum est
          convallis eu. Curabitur eget velit eget magna laoreet facilisis. Fusce
          euismod ac arcu sed tempus. Donec bibendum nunc ac lacus gravida, in
          consequat sem molestie. Maecenas ullamcorper ornare magna vitae
          bibendum. Phasellus scelerisque purus vitae sem placerat, et interdum
          ex ultricies. Fusce eget lacus quis tellus iaculis rhoncus. Sed velit
          ligula, maximus et nisi sit amet, scelerisque consectetur metus. Sed
          sodales vel neque ut ornare. Nunc placerat orci lorem, nec luctus
          turpis ultrices ut. Donec quis porttitor nisi. Phasellus ullamcorper
          mattis iaculis. Praesent mattis tempor odio. Nulla sagittis tristique
          leo, eu viverra metus tincidunt eu. Praesent et mi arcu. Fusce varius
          a est nec dictum. Quisque et posuere magna. Vivamus eleifend, ipsum in
          malesuada laoreet, nulla risus placerat ex, in tristique justo ligula
          imperdiet mi. Aenean a purus a ligula sollicitudin ultrices et eu
          nunc. Proin tempor, erat non tempus tempus, orci neque dictum elit, et
          tincidunt felis nibh vitae nunc. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam suscipit, eros non suscipit
          scelerisque, purus dolor interdum quam, non pulvinar ex ante at metus.
          Fusce et erat malesuada, convallis purus id, gravida enim. In felis
          velit, porta vitae tempus a, sollicitudin vitae nibh. Nunc
          pellentesque scelerisque tellus vitae mattis. Suspendisse vel nisi ac
          dui consequat feugiat. Fusce vestibulum hendrerit lobortis. Proin a
          maximus nibh, in cursus felis. Sed nisl nunc, consectetur at posuere
          ut, consequat quis justo. In eget aliquam arcu, nec mollis ligula.
          Curabitur risus odio, elementum a diam at, suscipit eleifend diam.
          Nullam consequat accumsan lacus, quis hendrerit nisi convallis ut.
          Donec sagittis ante vitae lacus blandit aliquam. Quisque lacinia nibh
          sed ante mattis, eget euismod libero tincidunt. Quisque commodo metus
          non purus fringilla, eget varius mauris molestie. Mauris interdum
          placerat tortor ac luctus. Morbi mollis dapibus est a pulvinar.
          Quisque ut felis ut nibh blandit ultricies sit amet et neque. Etiam at
          nisl vel eros egestas suscipit. Integer vel diam vitae magna imperdiet
          efficitur eu in ante. Cras sed orci ac diam luctus dictum. Donec
          tincidunt turpis vel enim mattis scelerisque eu ut dui. Mauris sed
          nunc massa. Nullam a turpis sollicitudin mauris tempor accumsan eget
          sit amet elit. Integer vitae tincidunt mi. Integer nec fringilla dui.
          Cras mollis varius est sit amet porta. Quisque posuere purus magna,
          laoreet bibendum est convallis eu. Curabitur eget velit eget magna
          laoreet facilisis. Fusce euismod ac arcu sed tempus. Donec bibendum
          nunc ac lacus gravida, in consequat sem molestie. Maecenas ullamcorper
          ornare magna vitae bibendum. Phasellus scelerisque purus vitae sem
          placerat, et interdum ex ultricies. Fusce eget lacus quis tellus
          iaculis rhoncus. Sed velit ligula, maximus et nisi sit amet,
          scelerisque consectetur metus. Sed sodales vel neque ut ornare. Nunc
          placerat orci lorem, nec luctus turpis ultrices ut. Donec quis
          porttitor nisi. Phasellus ullamcorper mattis iaculis. Praesent mattis
          tempor odio. Nulla sagittis tristique leo, eu viverra metus tincidunt
          eu. Praesent et mi arcu. Fusce varius a est nec dictum. Quisque et
          posuere magna. Vivamus eleifend, ipsum in malesuada laoreet, nulla
          risus placerat ex, in tristique justo ligula imperdiet mi. Aenean a
          purus a ligula sollicitudin ultrices et eu nunc. Proin tempor, erat
          non tempus tempus, orci neque dictum elit, et tincidunt felis nibh
          vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam suscipit, eros non suscipit scelerisque, purus dolor interdum
          quam, non pulvinar ex ante at metus. Fusce et erat malesuada,
          convallis purus id, gravida enim. In felis velit, porta vitae tempus
          a, sollicitudin vitae nibh. Nunc pellentesque scelerisque tellus vitae
          mattis. Suspendisse vel nisi ac dui consequat feugiat. Fusce
          vestibulum hendrerit lobortis. Proin a maximus nibh, in cursus felis.
          Sed nisl nunc, consectetur at posuere ut, consequat quis justo. In
          eget aliquam arcu, nec mollis ligula. Curabitur risus odio, elementum
          a diam at, suscipit eleifend diam. Nullam consequat accumsan lacus,
          quis hendrerit nisi convallis ut. Donec sagittis ante vitae lacus
          blandit aliquam. Quisque lacinia nibh sed ante mattis, eget euismod
          libero tincidunt. Quisque commodo metus non purus fringilla, eget
          varius mauris molestie. Mauris interdum placerat tortor ac luctus.
          Morbi mollis dapibus est a pulvinar. Quisque ut felis ut nibh blandit
          ultricies sit amet et neque. Etiam at nisl vel eros egestas suscipit.
          Integer vel diam vitae magna imperdiet efficitur eu in ante. Cras sed
          orci ac diam luctus dictum. Donec tincidunt turpis vel enim mattis
          scelerisque eu ut dui. Mauris sed nunc massa. Nullam a turpis
          sollicitudin mauris tempor accumsan eget sit amet elit. Integer vitae
          tincidunt mi. Integer nec fringilla dui. Cras mollis varius est sit
          amet porta. Quisque posuere purus magna, laoreet bibendum est
          convallis eu. Curabitur eget velit eget magna laoreet facilisis. Fusce
          euismod ac arcu sed tempus. Donec bibendum nunc ac lacus gravida, in
          consequat sem molestie. Maecenas ullamcorper ornare magna vitae
          bibendum. Phasellus scelerisque purus vitae sem placerat, et interdum
          ex ultricies. Fusce eget lacus quis tellus iaculis rhoncus. Sed velit
          ligula, maximus et nisi sit amet, scelerisque consectetur metus. Sed
          sodales vel neque ut ornare. Nunc placerat orci lorem, nec luctus
          turpis ultrices ut. Donec quis porttitor nisi. Phasellus ullamcorper
          mattis iaculis. Praesent mattis tempor odio. Nulla sagittis tristique
          leo, eu viverra metus tincidunt eu. Praesent et mi arcu. Fusce varius
          a est nec dictum. Quisque et posuere magna. Vivamus eleifend, ipsum in
          malesuada laoreet, nulla risus placerat ex, in tristique justo ligula
          imperdiet mi. Aenean a purus a ligula sollicitudin ultrices et eu
          nunc. Proin tempor, erat non tempus tempus, orci neque dictum elit, et
          tincidunt felis nibh vitae nunc.
        </Text>
      </ContentArea>
    </SafeAreaView>
  );
};

export default App;
