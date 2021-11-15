import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 2rem auto;

  > img {
    width: 17.5rem;
    height: 1.5rem;
  }

  @media (max-width: 1024px) {
    > img {
      width: 15rem;
      height: auto;
    }
  }

  @media (max-width: 375px) {
    > img {
      width: 12rem;
      height: auto;
    }
  }
`;
