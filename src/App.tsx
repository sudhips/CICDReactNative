import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const RootApp = () => {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };


  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={'#083c5d'}/>
      <RootApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#083c5d',
  },
});

export default App;
