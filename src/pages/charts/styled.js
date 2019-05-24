import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justifyContent: center;
  margin-top: 50px;
`;

export const Block = styled.div`
  width: 100%;
    @media(max-width: 850px) {
      max-width: 900px;
      min-width: 380px;
    }
    @media(max-width: 450px) {
      max-width: 380px;
    }
`;