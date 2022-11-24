import React from 'react';
import { IButtonProps } from '../../../Interfaces/IButtonProps';

const CancelButton: React.FC<IButtonProps> = (props) => {
  const style ={
        backgroundColor: props.color,
        border: props.border,
        borderRadius: props.radius,
        height: props.height,
        width: props.width
  } 
  return (
    <button style={style}>
      {props.children || 'Cancel'}
    </button>
  );
}

export default CancelButton;
