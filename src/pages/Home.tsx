import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomePage() {
  const navigation = useNavigation();

  const onClickRouteWithWritePage = () => {
    navigation.navigate('Write');
  };

  return (
    <SafeAreaView style={styles.safeArewView}>
      <View style={styles.container}>
        <Text>Hello Home Page</Text>
        <TouchableOpacity onPressOut={onClickRouteWithWritePage}>
          <Text>go to Write Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArewView: {
    flex: 1,
    backgroundColor: 'green',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
