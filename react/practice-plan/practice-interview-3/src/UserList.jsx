export function UserList({ users, onClickButton }) {
  return (
    <ul>
      {users.length > 0 && users.map((user) => (
        <div key={user.id}>
          <li >{user.name}</li>
          <button onClick={() => onClickButton(user.id)}>Delete user</button>
        </div>
      ))
      }
    </ul>
  )
}
