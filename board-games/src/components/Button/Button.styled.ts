import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: block;
  width: 280px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: solid 1px transparent;
  color: ${({ theme }) => theme.colors.onyx};
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  margin: 10px auto;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.cambrigeBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightMing};
    cursor: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
