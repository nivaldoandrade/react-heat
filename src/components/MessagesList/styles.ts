import styled from 'styled-components';

export const MessagesListContainer = styled.div`
  > div:first-child {
    margin-top: 146px;
  }

  > div:first-child {
    transition: all 200ms ease-in-out;

    &:hover {
      margin-left: 50px;
    }
  }

  > div:last-child {
    transition: all 200ms ease-in-out;

    &:hover {
      margin-left: 50px;
    }
  }

  > div + div {
    margin-top: 50px;
  }

  > div:nth-child(2) {
    margin-left: 80px;
  }
`;
