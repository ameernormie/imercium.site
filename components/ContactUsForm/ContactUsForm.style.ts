import styled from "styled-components";

export const ContactUsFormStyle = styled.div`
  .form-wrapper {
    display: grid;
    gap: 10px;
    max-width: 700px;
    width: 100%;
    margin: auto;
    padding-top: 40px;
  }

  .input-feild {
    background: ${({ theme }) => theme.background.input};
    color: ${({ theme }) => theme.colors.black};
    border: none;
    padding: 15px;
    border-radius: 12px;
    outline: none;
    width: 100%;

    &:focus {
      border: 0;
    }
  }

  .text-area {
    background: ${({ theme }) => theme.background.input};
    color: ${({ theme }) => theme.colors.black};
    border: none;
    padding: 20px 15px;
    border-radius: 12px;
    resize: none;

    &:focus {
      border: 0;
    }
  }

  .send-message-button {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.main};
    width: 187px;
    font-weight: 600;
    margin-top: 15px;
    padding: 15px 36px 15px 36px;
    text-transform: uppercase;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    border: none;
    transition: all 200ms linear;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .error {
    color: red;
  }
`;
