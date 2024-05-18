import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/taskSlice'; // Assuming you have a rootReducer
import TodoHeader from './TodoHeader';

const store = configureStore({reducer: {rootReducer}});

describe('<TodoHeader />',()=>{
    test('renders correctly and adds task',()=>{
        const {getByPlaceholderText, getByText} = render(
            <Provider store={store}>
                <TodoHeader/>
            </Provider>
        )

        const inputElement = getByPlaceholderText('Enter here')
        fireEvent.changeText(inputElement, 'Test Task')

        const addButton = getByText('Add')
        fireEvent.press(addButton)

        expect(getByText('Task - Test Task added successfully!')).toBeTruthy()
    })

    test('renders correctly and shows alert for empty task', () => {
        const { getByText } = render(
          <Provider store={store}>
            <TodoHeader />
          </Provider>
        );
    
        // Get add button and press it without entering a task
        const addButton = getByText('Add');
        fireEvent.press(addButton);
    
        // Check if alert is shown for empty task
        expect(getByText('Please enter a task')).toBeTruthy();
      });
})