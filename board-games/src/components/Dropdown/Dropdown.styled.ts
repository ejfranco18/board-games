import styled from 'styled-components';

export const DropdownWrapper = styled.select`
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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 15px;
`;

export const DropdownStyled = styled.option`

`;
