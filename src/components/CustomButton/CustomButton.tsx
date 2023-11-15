import React from 'react';

import { CustomButtonStyled } from './CustomButton.styled';
import { CustomButtonStyledProps } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonStyledProps> = ({ text, onClick }) => {
  return (
    <CustomButtonStyled onClick={onClick}>
      {text}
    </CustomButtonStyled>
  );
};

export default CustomButton;
