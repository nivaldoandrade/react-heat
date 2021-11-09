import styled from 'styled-components';

interface LoginBoxWrapperProps {
  imgUrl: string;
}

export const LoginBoxWrapper = styled.div<LoginBoxWrapperProps>`
  width: 100%;
  max-width: 453px;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat center top;

  text-align: center;
  padding: 537px 84px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  strong {
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    color: #e1e1e6;

    margin-bottom: 50px;
  }

  a {
    width: 100%;
    background-color: #ffcd1e;
    height: 56px;
    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border: 0;
    border-top-left-radius: 16px;
    border-bottom-right-radius: 16px;

    font-size: 14px;
    font-weight: 700;
    color: #09090a;
    transition: all 200ms ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
