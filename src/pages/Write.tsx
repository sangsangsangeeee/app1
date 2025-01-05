import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';

function WritePage() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Hello Write Page</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WritePage;
