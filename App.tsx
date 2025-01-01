/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.container}>
          <Text style={styles.title}>된건가?? pod-install 안되던데?</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    color: '#fff',
  },
});

export default App;
