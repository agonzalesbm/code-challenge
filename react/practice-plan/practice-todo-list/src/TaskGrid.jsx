import { useCallback, useState } from "react";
import { TaskCard } from "./TaskCard";

export function TaskGrid({ data }) {
  const [tasksList, setTasksList] = useState(data)

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
      gridTemplateColumns: 'repeat(3, 1fr)',
      // gridTemplateRows: '40px',
      gridAutoRows: 'min-content',
      gridGap: '8px',
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
    </div>
  )
}
