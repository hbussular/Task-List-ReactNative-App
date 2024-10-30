/**
 *
 * @format
 */

import React, { useContext, useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { homeStyles } from '../../styles/styles';
import { Task } from '../../interfaces';
import TaskList from '../../components/TaskList';
import { getTasks } from '../../services/getTasksService';
import { useTaskContext } from '../../hooks/useTaskContext';


const Home: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  // const arrayOfTasks: Task[] = [
  //   { id: '5421d631-1ab4-4927-b9d1-4d334dcde912', title: 'Task 1' },
  //   { id: '6b3e6d8d-f86d-4d2a-a214-3b47638f1a5a', title: 'Task 2' },
  //   { id: 'bcb3ce8a-136c-406e-a4b1-8c242742e3a7', title: 'Task 3' },
  //   { id: '67c6e8f0-c51c-41e8-97c6-267f81e7e3c6', title: 'Task 4' },
  //   { id: 'f2576967-b1a6-4bcb-acf8-5ba9a1028077', title: 'Task 5' },
  //   { id: '9e251f42-e03f-4910-9290-7e87eb73cf4d', title: 'Task 6' },
  //   { id: '5e2402f8-5098-457f-a2f5-df0d914c91af', title: 'Task 7' },
  //   { id: '5af12e1b-6cf5-420d-933b-85023d3d8477', title: 'Task 8' },
  //   { id: '78f73c3a-7f4f-4dfb-bb0d-b3c18b89fd6a', title: 'Task 9' },
  //   { id: '3e7a9fe2-1d9f-4372-98db-84869f1c47b1', title: 'Task 10' },
  // ];
  const { tasks, addNewTask } = useTaskContext()

  const handleAddTask = () => {
    if (inputText.trim()) {
      const newTask: Task = {
        id: `${Date.now()}`,
        title: inputText
      }

      addNewTask(newTask)
      setInputText('')
    } else {
      console.log('Task title cannot be empty')
    }
  }



  return (
    <>
      <View style={homeStyles.homeView}>
        <Text
          style={homeStyles.text}
        >
          Welcome, Dev!
        </Text>
        <TextInput
          style={homeStyles.textInput}
          placeholder='Add a task here...'
          placeholderTextColor={'#707070'}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
        />
        <TouchableOpacity style={homeStyles.touchableOpacity} activeOpacity={0.7} onPress={handleAddTask}>
          <Text style={homeStyles.opacityText}>Add Task</Text>
        </TouchableOpacity>
        <TaskList taskList={tasks} />
      </View>
    </>
  );
}



export default Home;
