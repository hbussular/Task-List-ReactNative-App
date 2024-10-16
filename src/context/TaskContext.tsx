import React, { useState, createContext, useEffect, useContext } from 'react'
import { ITaskContext, ITaskProvider, Task } from '../interfaces'
import { getTasks } from '../services/getTasksService'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const TaskContext = createContext<ITaskContext | null>(null)

const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([])

  const includeNewTask = async (task: Task) => {
    try {
      const currTaskList: Task[] = taskList
      const newTaskList: Task[] = [...currTaskList, task]

      setTaskList(newTaskList)

      await AsyncStorage.setItem('myTasks', JSON.stringify(newTaskList))
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const removeTask = async (id: string) => {
    const newTaskList: Task[] = taskList.filter(item => item.id !== id)
    setTaskList(newTaskList)
    await AsyncStorage.setItem('myTasks', JSON.stringify(newTaskList))
  }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let storedTaskList: string | null = await AsyncStorage.getItem('myTasks');

        let parsedTaskList: Task[] = [];
        if (storedTaskList) {
          parsedTaskList = JSON.parse(storedTaskList);
        }

        setTaskList(parsedTaskList);

      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


  return (
    <TaskContext.Provider value={{ tasks: taskList, addNewTask: includeNewTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider

