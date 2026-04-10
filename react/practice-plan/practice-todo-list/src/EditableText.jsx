import { useState, useRef } from "react"

export function EditableText({ text, handleOnChange, handleConfirmEdit }) {
  const [editing, setEditing] = useState(false)
  const currentText = useRef(text)

  return (
    <>
      {!editing ? (
        <p onClick={() => setEditing(!editing)}>{text}</p>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'
        }}>
          <input
            type='text'
            value={text}
            onChange={(e) =>
              handleOnChange(e.target.value)
            }
          />
          <button
            onClick={() => {
              setEditing(!editing)
              handleConfirmEdit()
            }}
          >
            C
          </button>
          <button
            onClick={() => {
              setEditing(!editing)
              handleOnChange(currentText.current)
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  )
}
