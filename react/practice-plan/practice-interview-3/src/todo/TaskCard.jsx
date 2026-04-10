import './Todo.css'

export function TaskCard({ task, handleEditButton, handleDeleteButton }) {
  return (
    <div className='taskCard'>
      <p>
        <bold>Task:</bold> {task.id}<br /><bold>Description:</bold> {task.description}
      </p>
      <div>
        <button onClick={handleEditButton}>Edit</button>
        <button onClick={handleDeleteButton}>Delete</button>
      </div>
    </div>
  )
}

// const todoList = [
//   {
//     id: 1,
//     task: 'Some task 1'
//   },
//   {
//     id: 2,
//     task: 'Some task 2'
//   }
// ]
