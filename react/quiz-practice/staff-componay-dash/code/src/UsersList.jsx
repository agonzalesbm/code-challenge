import { UserCard } from "./UserCard";
import { useCallback } from "react";

export function UsersList({ users, setUsers }) {
  const handleDeleteButton = useCallback((id) => {
    setUsers((prev) => prev.filter((user) =>
      user.id !== id
    ))
  }, [setUsers])

  return (
    <>
      {users.length > 0 && users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </>
  )
}
