import { SearchBar } from "./SearchBar"
import { UserList } from "./UserList"
import { useMemo, useState } from 'react'
import { useFetch } from './useFetch'

function App() {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [param, setParam] = useState('');

  const filterData = useMemo(() => {
    return users.filter((user) => user.name.toLowerCase().includes(param.toLowerCase()))
  }, [users, param]);

  console.log(filterData)

  if (loading) return <h2>Is loading...</h2>
  if (error) return <h2>Error</h2>
  return (
    <>
      {/* <SearchBar param={param} setParam={setParam} /> */}
      {/* <UserList users={filterData} /> */}
      <input type='text' />
      {/* <input /> */}
      {/* <input /> */}
      {/* <input /> */}
      {/* <input /> */}
    </>
  )
}

export default App
