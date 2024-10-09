import React, { useContext } from "react";
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ITask, TasksContext } from "../../context/TasksContext";

const TaskList: React.FC = () => {
  const { tasks } = useContext(TasksContext)

  return (
    <FlatList
    data={tasks as unknown as ITask[]}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <TouchableOpacity style={styles.buttonTask}>
        <Text style={styles.titleTask}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )}
  >
  </FlatList>
  )
}

const styles = StyleSheet.create({
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

export default TaskList
