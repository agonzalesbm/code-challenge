import { useCallback, useContext, useState } from "react";
import { TaskCard } from "./TaskCard";
import { use } from "react";
import { ExampleContext } from "./ExampleContext";

export function TaskGrid({ data }) {
  const [tasksList, setTasksList] = useState(data)
  const { text, setText } = useContext(ExampleContext);

  const handleEditButton = useCallback((index, description) => {
    setTasksList((prev) => prev.map((task, i) =>
      index === i ? { ...task, description } : task
    ))
  }, [])

  const handleDeleteButton = useCallback((index) => {
    setTasksList((prev) => prev.filter((_, i) => {
      if (i !== index) {
        console.log(`Deleted: ${index}`)
      }
      return i !== index
    }))
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(min(100%, 300px), 1fr)',
      gridAutoRows: 'min-content',
      gridGap: '8px',
      alignItems: 'start',
    }}>
      {tasksList.length > 0 && tasksList.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          index={index}
          handleEditButton={handleEditButton}
          handleDeleteButton={handleDeleteButton}
        />
      ))}

      <button
        onClick={() => {
          setText('This is the new text of the context')
        }}
      >
        Click!
      </button>
    </div>
  )
}
