import React, {useCallback, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetTodo} from '../stores/todo';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

function HomePage() {
  const todoitem = useGetTodo();
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const onClickRouteWithWritePage = () => {
    navigation.navigate('Write');
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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

      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
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
  contentContainer: {
    height: 300,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomePage;
