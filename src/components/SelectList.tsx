
import React from 'react'
import { UserProps } from '../Interfaces/UserProps';


const SelectList = (users: UserProps[]) => {
    return (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.userName}>{user.userName}</li>
            ))}
          </ul>
        </div>
      );
    }

export default SelectList;
