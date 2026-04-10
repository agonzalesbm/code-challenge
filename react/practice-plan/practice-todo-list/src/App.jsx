import { TaskCard } from "./TaskCard"
import { TaskGrid } from "./TaskGrid"

const data = [
  {
    description: 'Task description'
  },
  {
    description: 'Task description'
  },
  {
    description: 'Task description'
  },
  {
    description: 'Task description'
  }
]

function App() {
  return (
    <>
      <TaskGrid data={data} />
    </>
  )
}

export default App
