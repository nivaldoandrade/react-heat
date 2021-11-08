import styled from 'styled-components';

interface LoginBoxWrapperProps {
  imgUrl: string
}

export const LoginBoxWrapper = styled.div<LoginBoxWrapperProps>`
  width: 100%;
  max-width: 453px;
  height: 100vh;
  background: url(${(props => props.imgUrl)}) no-repeat center top;

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
    color: #E1E1E6;

    margin-bottom: 50px;
  }

  button {
    width: 100%;
    background-color: #FFCD1E;
    height:56px;
    padding: 0 40px;

    border: 0;

    font-size: 14px;
    font-weight: bold;
    color: #09090A;
  }
`
