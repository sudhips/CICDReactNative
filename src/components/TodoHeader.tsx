//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'

import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Analytics.trackEvent('add_task_with_empty_content')
      Alert.alert('Please enter a task');
      setTodo('');
      return;
    }
    Analytics.trackEvent('add_task_success')
    dispatch(addTask({task: todo}));
    setTodo('');

    Alert.alert(`Task - ${todo} added successfully!`);
  };

  return (
    <View style={styles.container} testID="todo-header">
      <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>
        What's your plan for today?
      </Text>
      <View style={{ marginVertical: 32}}>
        <TextInput
          placeholder="Enter here"
          placeholderTextColor={'#C0C0C0'}
          value={todo}
          onChangeText={setTodo}
          multiline
          style={{
            borderWidth: 1,
            borderColor: '#f0f0f0',
            borderRadius: 8,
            padding: 16,
            color: '#FFFFFF',
          }}
        />
        <TouchableOpacity
          onPress={onSubmitTask}
          style={{
            backgroundColor: '#1d2731',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderRadius: 8,
            marginTop: 16,
          }}>
          <Text style={{color: '#ffbb39'}}>Add</Text>
        </TouchableOpacity>
        <Button 
          title='Crash'
          onPress={()=>{
            Analytics.trackEvent('test_crash')
            Crashes.generateTestCrash()
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

//make this component available to the app
export default TodoHeader;
