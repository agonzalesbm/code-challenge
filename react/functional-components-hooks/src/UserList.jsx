import { useFetch } from './useFetch';

export function UserList() {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log(data);

  if (error) return <h1>Something went wrong</h1>;
  if (isLoading) return <h1>Loading users...</h1>;

  return (
    <>
      <ul>
        {data && data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {/* <button onClick={fetchData}>Refresh</button> */}
    </>
  );
}
