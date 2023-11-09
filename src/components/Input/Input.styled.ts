import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-block: 20px;
`;

export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: block;
  font-family: Poppins-Medium;
  font-size: 15px;
  height: 50px;
  line-height: 1.5;
  padding: 0 25px;
  width: 100%;
  box-sizing: border-box;

  &:focus-visible {
    outline: thick double ${({ theme }) => theme.colors.blue};;
  }
`;
