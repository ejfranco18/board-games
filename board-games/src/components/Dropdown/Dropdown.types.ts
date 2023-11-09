import { ChangeEvent } from 'react';

export interface DropdownStyledProps {
  options: string[]
  // type: string;
  // name: string;
  // placeholder?: string;
  // value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
