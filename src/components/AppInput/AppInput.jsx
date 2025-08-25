import React from 'react';
import './AppInput.css'

export const AppInput = ({ InputType, InputPlaceHolder, }) => {
  return (
   <input  type={InputType} placeholder={InputPlaceHolder}/>
  );
};