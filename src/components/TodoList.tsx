//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {deleteTask} from '../redux/taskSlice';

// create a component
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.tasks);

  const itemDelete = (id: string) => {
    dispatch(deleteTask({id: id}));
    Alert.alert(`Task ${id} deleted successfully!`)
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.buttonDelet}
          onPress={() => itemDelete(item.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const emptyItem = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 16,
        }}>
        <Text style={{color: '#C0C0C0'}}>No items</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}} testID="todo-list">
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'center',
          marginVertical: 8,
        }}>
        List of Tasks
      </Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={emptyItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#C0C0C0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  title: {
    flexShrink: 1,
    fontSize: 24,
    color: '#000000',
  },
  buttonDelet: {},
  delete: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default TodoList;
