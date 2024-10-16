export interface ITaskListProps {
  taskList: Task[]
}

export interface Task {
  id: string,
  title: string,
}

export interface ITaskContext {
  tasks: Task[],
  addNewTask: (task: Task) => void,
  removeTask: (id: string) => void
}

export interface ITaskProvider {
  children: React.ReactNode
}
