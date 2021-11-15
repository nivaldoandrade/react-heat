import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  max-width: 27.5rem;
  word-wrap: break-word;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #e1e1e6;
  }

  @media (max-width: 375px) {
    max-width: 24rem;
  }

  @media (max-width: 320px) {
    max-width: 20rem;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  span {
    font-size: 1rem;
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
    width: 2.18rem;
    height: 2.18rem;
    border-radius: 50%;
    border: 5px solid #121214;
  }
`;
