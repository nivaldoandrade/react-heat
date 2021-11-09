import styled from 'styled-components';

export const MessagesListContainer = styled.div`
  > div:first-child {
    margin-top: 146px;
  }

  > div + div {
    margin-top: 50px;
  }

  > div:nth-child(2) {
    margin-left: 80px;
  }
`;
