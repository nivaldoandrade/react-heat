import styled, { css } from 'styled-components';

interface FormModalProps {
  isOpen: boolean;
}

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 32px;
  background-color: #ff008e;
  border: 0;

  font-size: 14px;
  font-weight: 700;
  color: #ffffff;

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

export const FormModal = styled.div<FormModalProps>`
  display: none;
  visibility: hidden;

  ${props =>
    props.isOpen &&
    css`
      display: block;
      visibility: visible;
    `}

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    background-color: #202024;

    textarea {
      width: 100%;
      height: 140px;
      padding: 24px;
      background-color: transparent;
      border: 0;
      resize: none;
      margin-bottom: 8px;

      font-size: 16px;
      color: #8d8d99;
      line-height: 24px;

      &::placeholder {
        font-size: 16px;
        color: #8d8d99;
      }

      &::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
        background-color: #202024;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #121214;
      }
    }

    button {
      width: 195px;
      padding: 10px 32px;
      background-color: #ff008e;
      border: 0;

      font-size: 14px;
      font-weight: 700;
      color: #ffffff;

      transition: all 200ms ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
