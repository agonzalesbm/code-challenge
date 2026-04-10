export function SearchBar({ value, setValue }) {
  return (
    <input type='search' value={value} onChange={setValue} placeholder='Search...'/>
  )
}
