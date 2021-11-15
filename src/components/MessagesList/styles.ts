import styled from 'styled-components';

export const MessagesListContainer = styled.div`
  > div:first-child {
    margin-top: 9.12rem;

    transition: all 200ms ease-in-out;

    &:hover {
      margin-left: 3.12rem;
    }
  }

  > div:last-child {
    transition: all 200ms ease-in-out;

    &:hover {
      margin-left: 3.12rem;
    }
  }

  > div + div {
    margin-top: 3.12rem;
  }

  > div:nth-child(2) {
    margin-left: 5rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:first-child {
      margin-top: 5rem;
    }

    > div:first-child,
    > div:last-child {
      &:hover {
        margin-left: inherit;
      }
    }

    > div:nth-child(2) {
      margin-left: inherit;
    }
  }
`;
