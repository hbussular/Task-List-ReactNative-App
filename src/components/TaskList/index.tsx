import { Alert, FlatList, Text, TouchableOpacity } from "react-native"
import { ITaskListProps } from "../../interfaces"
import { componentStyles, homeStyles } from "../../styles/styles"
import { useTaskContext } from "../../hooks/useTaskContext"

const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  const { removeTask } = useTaskContext()

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza que deseja excluir?', 'O item será deletado permanentemente.', [
      {
        text: 'Cancelar',
        onPress: () => {}
      },
      {
        text: 'Excluir Tarefa',
        onPress: () => removeTask(id)
      }
    ])
  }

  return (
    <FlatList
      data={taskList}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={componentStyles.listItem} onPress={() => handleRemoveTask(item.id)}>
          <Text style={componentStyles.componentOpacityText}>{item.title}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={{ marginTop: 20,}}

    />

  )
}

export default TaskList
