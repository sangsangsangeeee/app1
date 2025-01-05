import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetTodo} from '../stores/todo';

function HomePage() {
  const todoitem = useGetTodo();
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
        {todoitem.map(({title}) => (
          <View style={styles.todoItem} key={title}>
            <Text style={styles.todoItemTitle}>{title}</Text>
          </View>
        ))}
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
  todoItem: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  todoItemTitle: {
    fontSize: 14,
    color: '#111',
  },
});

export default HomePage;
