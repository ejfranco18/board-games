import { ChangeEvent } from 'react';

export interface InputStyledProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
