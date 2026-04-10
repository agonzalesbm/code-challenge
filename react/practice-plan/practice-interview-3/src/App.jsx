import { useCallback, useMemo, useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { UserList } from './UserList'
import { SearchBar } from './SearchBar'
import { TaskCard } from './todo/TaskCard'

function App() {
  // const { data: users, setData, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  // const [searchParam, setSearchParam] = useState('')
  //
  // const filterData = useMemo(() => {
  //   if (searchParam.length === 0) return users
  //   return users.filter((user) => user.name.toLowerCase().includes(searchParam.toLowerCase()))
  // }, [searchParam, users])
  //
  // const onClickButton = useCallback((id) => {
  //   setData(filterData.filter((user) => user.id !== id))
  // }, [filterData, setData])
  //
  // if (loading) return <h2>Loading content...</h2>
  // if (error) return <h2>Something went error...</h2>

  return (
    <>
      {/* <SearchBar value={searchParam} setValue={(e) => setSearchParam(e.target.value)} /> */}
      {/* <UserList users={filterData} onClickButton={onClickButton} /> */}
      <TaskCard task={
        { id: 1, description: 'Some task' }
      } />
      <TaskCard task={
        { id: 1, description: 'Some task' }
      } />
      <TaskCard task={
        { id: 1, description: 'Some task' }
      } />
    </>
  )
}

export default App
