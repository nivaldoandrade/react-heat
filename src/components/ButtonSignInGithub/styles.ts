import styled from 'styled-components';

export const Button = styled.a`
  width: 100%;
  background-color: #ffcd1e;
  height: 3.5rem;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border: 0;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  font-size: 0.87rem;
  font-weight: 700;
  color: #09090a;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 27.5rem;
    margin: 4rem auto 1rem;
  }
`;
