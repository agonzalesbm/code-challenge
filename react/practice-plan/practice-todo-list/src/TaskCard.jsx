import { useContext, useEffect, useState } from "react"
import { EditableText } from "./EditableText"
import { ExampleContext } from "./ExampleContext"
export function TaskCard({
  task,
  index,
  handleEditButton,
  handleDeleteButton
}) {
  const [isChecked, setIsChecked] = useState(false)
  const [currentText, setCurrentText] = useState(task.description)
  const { text, setText } = useContext(ExampleContext)

  useEffect(() => {
    console.log(text);
  }, [text])

  useEffect(() => {
    console.log(currentText)
  }, [currentText])

  return (
    <div style={{
      // gridRow: '1/3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '6px',
      border: '4px solid',
      borderRadius: '4px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>
        <input
          type='checkbox'
          style={{ marginRight: '0.8rem' }}
          value={isChecked}
          onClick={() =>
            setIsChecked(!isChecked)
          }
        />
        <p><strong>Task #{index + 1}</strong></p>
      </div>
      <EditableText text={currentText} handleOnChange={setCurrentText} handleConfirmEdit={() => {
        handleEditButton(index, currentText)
      }} />
      <div>
        <button onClick={() =>
          handleDeleteButton(index)
        }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
