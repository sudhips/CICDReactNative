import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [todo, setTodo] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'light-content'}
        backgroundColor={'#083c5d'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>
          ToDo App
        </Text>
        <View style={{flex: 1, marginVertical: 32}}>
          <TextInput
            placeholder="Todo"
            placeholderTextColor={'#D3D3D3'}
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
            style={{
              backgroundColor: '#1d2731',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16,
              borderRadius: 8,
              marginVertical: 16,
            }}>
            <Text style={{color: '#ffbb39'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#083c5d',
  },
  container: {
    margin: 16,
  },
});

export default App;
