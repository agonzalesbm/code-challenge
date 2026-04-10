export function SearchBar({ value, onValueChange }) {
  return (
    <input value={value} onChange={onValueChange} placeholder="Search..." type="search"/>
  )
}
