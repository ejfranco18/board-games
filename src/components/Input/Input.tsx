import React from 'react';

import { InputStyled, InputWrapper } from './Input.styled';
import { InputStyledProps } from './Input.types';

const Input: React.FC<InputStyledProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
