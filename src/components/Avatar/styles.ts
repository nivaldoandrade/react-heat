import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  button {
    border: none;
    background: transparent;

    color: #e1e1e6;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const ImageBorder = styled.div`
  background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  padding: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
  }

  img {
    width: 3.12rem;
    height: 3.12rem;
    border-radius: 50%;
    border: 5px solid #121214;
    background: #121214;
  }
`;
