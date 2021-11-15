import styled from 'styled-components';

interface LoginBoxWrapperProps {
  imgUrl: string;
}

export const LoginBoxWrapper = styled.div<LoginBoxWrapperProps>`
  /* width: 100%;
  max-width: 28.3rem; */
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat center top;

  text-align: center;
  padding: 33.56rem 5.25rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  strong {
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.25rem;
    color: #e1e1e6;

    margin-bottom: 3.12rem;
  }

  @media (max-width: 1024px) {
    display: none;
    visibility: hidden;
  }
`;
