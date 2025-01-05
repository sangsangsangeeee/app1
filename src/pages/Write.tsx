import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function WritePage() {
  const navigation = useNavigation();

  const [todo, setTodo] = useState({
    exp: '',
    title: '',
    description: '',
  });

  const onChangeWithTodoData = (key: keyof typeof todo) => (value: string) => {
    setTodo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Hello Write Page</Text>
        <TextInput
          style={styles.textField}
          placeholder="제목"
          value={todo.title}
          onChangeText={onChangeWithTodoData('title')}
        />
        <TextInput
          style={styles.textField}
          placeholder="경험치"
          value={todo.exp}
          onChangeText={onChangeWithTodoData('exp')}
        />
        <TextInput
          style={styles.textField}
          placeholder="(선택) 설명"
          value={todo.description}
          onChangeText={onChangeWithTodoData('description')}
        />
      </View>
      <TouchableOpacity style={styles.bottomButton} onPressOut={goBack}>
        <Text style={styles.bottomButtonText}>저장</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'blue',
    rowGap: 60,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bottomButton: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  textField: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    width: '80%',
    marginBottom: 12,
    height: 50,
  },
});

export default WritePage;
