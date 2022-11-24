import React, { useContext, useEffect, useState } from "react";
import './App.css';
import { SubmitButton } from "./components/buttons/submit/submitButton";
import RoleDropDown from "./components/RoleDropDown";
import {  UserComponent } from "./components/User";
import Roles from "./Enums/Roles";
import { IButtonProps } from "./Interfaces/IButtonProps";
import { UserProps } from "./Interfaces/UserProps";
import { UsersContext } from "./States/Contexts";

function App() {
  const defaultFormState : UserProps = {userName: '', age: 0, role: Roles.User};
  let formState = defaultFormState;
  const usersContext = useContext(UsersContext);
  const [userProps, updateUserProps] = useState<UserProps>({
    userName: "Dawid",
    age: 100,
    role: Roles.User
  })

  const SetUsernameState = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    usersContext.push(formState);
    updateUserProps(formState);
    console.log(usersContext[usersContext.length-1]);
    formState = defaultFormState;
  }

  const OnNameChanged = (e: React.FormEvent<HTMLInputElement>) => {
    formState.userName = e.currentTarget.value;
  }

    const OnAgeChanged = (e: React.FormEvent<HTMLInputElement>) => {
    formState.age = e.currentTarget.valueAsNumber;
  }

  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `userProps` changes
  }, [userProps]);  

  const buttonProps: IButtonProps = {
    border: '4px solid darkgreen',
    color: '#89E8C0',
    radius: '5px',
    height: '150px',
    width: '200px',
    fontSize: '50px',
    onClick: SetUsernameState
  };

    const InputStyle ={
    border: buttonProps.border,
    borderRadius: buttonProps.radius,
    height: buttonProps.height,
    width: buttonProps.width,
    fontSize: buttonProps.fontSize,
  } 

  return (
    <div className="App">
      <header className="App-header">
        <form>
        <label htmlFor="nameField">Name:</label>
        <input id="nameField" style={InputStyle} type="text"  onChange={OnNameChanged} />
        <label htmlFor="ageField">Age (18-100):</label>
        <input id="ageField" style={InputStyle} type="number" min="18" max="100" onChange={OnAgeChanged} />

      </form>
        <RoleDropDown />
        <UserComponent {...userProps} />
        <SubmitButton {...buttonProps}> Add </SubmitButton>
      </header>
    </div>
  );
}

export default App;
