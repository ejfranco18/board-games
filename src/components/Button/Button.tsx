import React from 'react';

import { ButtonStyled } from './Button.styled';
import { ButtonStyledProps } from './Button.types';

const Button: React.FC<ButtonStyledProps> = ({ text, disabled, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
