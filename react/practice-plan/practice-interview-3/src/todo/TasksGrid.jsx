import { useCallback, useState } from "react"
import { TaskCard } from "./TaskCard"
export function TasksGrid() {
  const [taskList, setTaskList] = useState([])

  const handleEditButton = useCallback((index) => {
  }, [])

  const handleDeleteButton = useCallback((index) => {
    setTaskList(taskList.filter((task) => task[index]))
  }, [])

  return (
    <ul>
      {taskList.length > 0 && taskList.map((task) => (
        <TaskCard task={task} />
      ))}
    </ul>
  )
}
