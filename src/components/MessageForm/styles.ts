import styled from 'styled-components';

export const MessageFormWrapper = styled.div`
  width: 453px;
  background-color: #1b1b1f;
  padding: 24px;

  align-self: flex-start;

  position: relative;
  top: 206px;

  display: flex;
  flex-direction: column;

  > img {
    width: 88px;
    height: 88px;

    position: absolute;
    top: -44px;
    right: 40px;
  }

  > button {
    font-size: 0;
    text-align: left;
    background-color: transparent;
    border: 0;

    svg {
      text-align: left;
      color: #c4c4cc;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;

    > div {
      background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
      border-radius: 50%;
      padding: 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 93.3px;
        height: 93.3px;
        border-radius: 50%;
        border: 5px solid #121214;
      }
    }

    strong {
      font-size: 24px;
      line-height: 30px;
      color: #e1e1e6;
      margin-top: 16px;
    }

    span {
      font-size: 14px;
      color: #c4c4cc;
      margin-top: 8px;

      svg {
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      padding: 18px 24px;
      background-color: #29292e;

      font-size: 20px;
      font-weight: 700;
      color: #e1e1e6;
    }

    > div {
      background-color: #202024;
      height: 212px;

      textarea {
        width: 100%;
        height: 140px;
        padding: 24px;
        background-color: transparent;
        border: 0;
        resize: none;

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
        align-self: flex-end;
        padding: 10px 32px;
        background-color: #ff008e;
        border: 0;

        position: absolute;
        bottom: 48px;
        right: 48px;

        font-size: 14px;
        font-weight: 700;
        color: #ffffff;

        transition: all 200ms ease-in-out;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
