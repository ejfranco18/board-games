import styled from 'styled-components';

export const GameDetailStyled = styled.div`
  width: 90%;
  margin: 40px auto;
  padding: 40px;
  background: rgba(255,255,255,0.2);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  .details {
    display: flex;
  }

  img {
    border: 3px solid black;
    min-width: 360px;
    min-height: 360px;
    max-width: 360px;
    max-height: 360px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
  }
`;
