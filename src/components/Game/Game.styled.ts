import styled from 'styled-components';

export const GameStyled = styled.div`
  background: ${({ theme }) => theme.colors.platinum};
  border-radius: 8px;
  margin: 15px;
  padding: 10px;
  width: 440px;
  display: flex;
  transform: translateZ( 0 );
  transition: transform .2s ease-out;
  display: flex;
  padding-block: 35px;

  /* &:hover {
    transform: scale( 1.02 );
  } */

  p {
    color: ${({ theme }) => theme.colors.charcoal};
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 25px;
  }

  img {
    border: 3px solid black;
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
  }
`;
