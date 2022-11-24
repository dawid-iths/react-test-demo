import Roles from "../Enums/Roles";

 export interface UserProps {
  userName : string;
  age? : number;
  children?: React.ReactNode;
  role : Roles
 }