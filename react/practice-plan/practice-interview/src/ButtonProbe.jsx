import { useState, useEffect } from 'react'

export function ButtonProbe() {
  const [value, setValue] = useState('')

  const handleClick = () => {
    console.log(value)
  }

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input placeholder='This is the input' value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
}
