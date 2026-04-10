import { useMemo, useState } from "react"
import { UserList } from "./UserList"
import { useFetch } from './useFetch'
import { SearchBar } from "./SearchBar";
import { ButtonProbe } from "./ButtonProbe";

function App() {
  const { data: users, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const [searchParam, setSearchParam] = useState('')

  const filterList = useMemo(() => {
    if (searchParam.length === 0) return users
    return users.filter((user) => {
      console.log(user.name)
      return user.name.toLowerCase().includes(searchParam.toLowerCase())
    })
  }, [searchParam, users])

  if (error) return <h1>Something went error...</h1>
  if (isLoading) return <h1>Content loading...</h1>

  return (
    <>
      {/* <input type='search' onChange={(e) => setSearchParam(e.target.value)} placeholder='Search...' value={searchParam} /> */}
      <SearchBar value={searchParam} onValueChange={(e) => setSearchParam(e.target.value)} />
      <UserList users={filterList} />
      <ButtonProbe />
    </>
  )
}

export default App
