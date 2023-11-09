import styled from 'styled-components';

export const NavbarStyled = styled.div`
  background: ${({ theme }) => theme.colors.transparentWhite};
  position: fixed;
  top: 0;
  left: 0;

  ul {
    list-style-type: none;
    padding-inline: 10px;
  }

  .navbar-item {
    color: ${({ theme }) => theme.colors.onyx};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.platinum};
    }
  }
`;
