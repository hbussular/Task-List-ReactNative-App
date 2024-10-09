/**
 *
 * @format
 */

import React, { useContext, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import TaskList from '../../components/TaskList/index';
import { TasksContext } from '../../context/TasksContext';

interface TaskObj {
  id: string,
  title: string,
}

const Home: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('')
  // const [tasks, setTasks] = useState<TaskObj[]>([])
  const { addTask } = React.useContext(TasksContext)


  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Empty Task',
    }

    addTask(data)

    // setTasks([...tasks, data])
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Olá cara
        </Text>
        <TextInput
          placeholderTextColor="#555"
          placeholder="Nova Tarefa"
          style={styles.input}
          onChangeText={setNewTask}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewTask}>
          <Text style={styles.buttonText}>
            Adicionar
          </Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default Home;
