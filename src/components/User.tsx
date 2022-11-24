import * as React from 'react';
import { UserProps } from '../Interfaces/UserProps';

export const UserComponent: React.FC<UserProps> = (props) => {
  return (
    <>
      <h2>user: { props.userName } Age {props.age }</h2>
      <h3>Role: { props.role }</h3>
      <p>{ props.children }</p>
    </>
  )
}