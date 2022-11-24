import React from 'react'
import Select from 'react-select'
import Roles from '../Enums/Roles';

const RoleDropDown = () => {

  interface ISelectProps {
  value: string;
  label: string;
}
  const options: ISelectProps[] = [];
  Object.keys(Roles).forEach(role => options.push({value: role, label: role}));

  return (
    <Select options={options} />
  );
}

export default RoleDropDown;
