export const getTasks = async () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch the task list.')
    }
    return response.json()
  })
  .catch((error) => {
    console.error('Error fetching task list', error)
    throw new Error(error)
  })
}
