import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import Home from '../../src/pages/Home';
import TaskProvider from '../../src/context/TaskContext';


describe('Home page test', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<TaskProvider><Home /></TaskProvider>)

    const inputNewText = getByPlaceholderText('Add a task here...')

    expect(inputNewText).toBeDefined()
    expect(inputNewText.props.placeholder).toBeTruthy
  });

});

