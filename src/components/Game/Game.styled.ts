import styled from 'styled-components';

export const GameStyled = styled.div`
  background: ${({ theme }) => theme.colors.transparentWhite};
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateZ( 0 );
  transition: transform .2s ease-out;

  &:hover {
    transform: scale( 1.02 );
  }

  p {
    color: ${({ theme }) => theme.colors.onyx};
  }

  span {
    color: ${({ theme }) => theme.colors.onyx};
    font-weight: bold;
  }

  img {
    border: 3px solid black;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
