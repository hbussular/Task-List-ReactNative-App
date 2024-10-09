import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'



export interface ITask {
  id: string,
  title: string,
}

export interface ITasksContext {
  tasks: ITask[]
  addTask: (task: ITask) => void;
}

interface IProps {
  children: React.ReactElement
}

const tasksData = '@MyTasks:Tasks' //chave

export const TasksContext = React.createContext<ITasksContext>({} as ITasksContext)

export const TasksProvider: React.FC<IProps> = ({ children }) => {
  const [data, setData] = useState<ITask[]>([])

  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData);
      if (taskList) {
        setData(JSON.parse(taskList))
      }
    }

    loadTasks()
  }, [data])

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task]
      setData(newTaskList)
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return (
    <TasksContext.Provider value={{tasks: data, addTask}}>
      {children}
    </TasksContext.Provider>
  )
}
