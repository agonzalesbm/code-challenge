import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { TaskGrid } from "./TaskGrid"
import { ExampleContext } from "./ExampleContext";

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
  const [text, setText] = useState('This is the context');

  return (
    <>
      <ExampleContext.Provider value={{ text, setText }}>
        <TaskGrid data={data} />
      </ExampleContext.Provider>
    </>
  )
}

export default App
