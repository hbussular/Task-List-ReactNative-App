import React, { useContext } from 'react'
import { ITaskContext } from '../interfaces'
import { TaskContext } from '../context/TaskContext'

export const useTaskContext = (): ITaskContext => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error ('useTaskContext must be used within a TaskProvider')
  }
  return context
}
