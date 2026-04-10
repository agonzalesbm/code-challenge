export function SearchBar({ param, setParam }) {

  return (
    <input type='search' placeholder='Search...' value={param} onChange={(e) => setParam(e.target.value)} />
  );
};
