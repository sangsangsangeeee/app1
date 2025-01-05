import React from 'react';
import {Text, View} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //   }}>
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff'}}>Home 됬다리~~~</Text>
    </View>
    // </SafeAreaView>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    // <SafeAreaProvider>
    <Navigation />
    // </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   backgroundStyle: {
//     flex: 1,
//   },
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 20,
//     color: '#fff',
//   },
// });

export default App;
