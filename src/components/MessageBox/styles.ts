import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 440px;

  p {
    font-size: 20px;
    line-height: 28px;
    color: #e1e1e6;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 24px;

  span {
    font-size: 16px;
    color: #e1e1e6;
  }
`;

export const ImageBorder = styled.div`
  background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  padding: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 5px solid #121214;
  }
`;
