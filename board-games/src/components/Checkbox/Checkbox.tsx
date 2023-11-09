import React from 'react';

import { CheckboxStyled } from './Checkbox.styled';
import { CheckboxStyledProps } from './Checkbox.types';

const CustomCheckbox: React.FC<CheckboxStyledProps> = ({
  checked,
  completeAction,
}) => {
  return (
    <>
      <CheckboxStyled
        type="checkbox"
        checked={checked}
        onChange={completeAction}
      />
    </>
  );
};

export default CustomCheckbox;
