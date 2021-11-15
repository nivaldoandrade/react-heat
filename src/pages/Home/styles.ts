import styled, { css } from 'styled-components';

interface HomeContainerProps {
  user: boolean;
  imgUrl: string;
}

export const HomeContainer = styled.main<HomeContainerProps>`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr 453px;
  gap: 9.18rem;

  ${props =>
    props.user &&
    css`
      &::before {
        content: '';
        width: 33vw;
        height: 100vh;
        background: url(${props.imgUrl}) no-repeat;
        background-size: cover;
        background-position: center;

        position: absolute;
        right: 0;
      }

      @media (max-width: 1024px) {
        &::before {
          display: none;
          visibility: hidden;
        }
      }
    `}

  @media(max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeWrapper = styled.div``;
