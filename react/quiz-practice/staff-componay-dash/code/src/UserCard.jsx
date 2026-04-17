import { useState } from 'react'

export function UserCard({ user, handleDeleteButton }) {
  const [moreInfo, setMoreInfo] = useState(false)

  return (
    <div>
      <p>
        <strong onClick={() => setMoreInfo(
          (prev) => !prev
        )}>Name: </strong>{user.name}<br />
        <strong>Email: </strong>{user.email}<br />
        {moreInfo &&
          <>
            <strong>City: </strong>{user.address.city}<br />
            <strong>Company: </strong>{user.company.name}<br />
          </>
        }
        <button onClick={() => handleDeleteButton(user.id)}>Delete</button>
      </p>
    </div>
  )
}
