import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
    test('renders TodoHeader and TodoList components', () => {
        const {getByTestId} = render(<App />)
        const todoHeader = getByTestId('todo-header')
        const todoList = getByTestId('todo-list')

        expect(todoHeader).toBeTruthy()
        expect(todoList).toBeTruthy()
    })
})