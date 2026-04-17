import { useEffect, useMemo, useState } from "react"
import { useFetch } from "./hooks/useFetch"
import { UsersList } from "./UsersList"

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  const [param, setParam] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(data)
  }, [data])

  const filterData = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(param.toLowerCase()) ||
      user.email.toLowerCase().includes(param.toLowerCase())
    )
  }, [users, param])


  if (loading) return <h1>Loading content...</h1>
  if (error) return <h1>{error}</h1>
  return (
    <>
      <h1>Users</h1>
      <input type='search' value={param} onChange={(e) => setParam(e.target.value)} />
      {param !== '' && filterData.length === 0 ? (
        <p>Not results</p>
      ) : (
        <UsersList users={filterData} setUsers={setUsers} />
      )}
    </>
  )
}

export default App
