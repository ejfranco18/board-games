import React from 'react';

import { DropdownStyled, DropdownWrapper } from './Dropdown.styled';
import { DropdownStyledProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownStyledProps> = ({
  options,
//   type,
//   name,
//   placeholder,
//   value,
  onChange,
}) => {
  return (
    <DropdownWrapper onChange={onChange}>
      {options.map((option) => {
        return (
          <DropdownStyled
            key={option}
            value={option}>
              {option}
          </DropdownStyled>
        )
      })}
    </DropdownWrapper>
  );
};

export default Dropdown;
