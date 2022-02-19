import { darken } from "polished";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 100px 20px;
  background: ${({ theme }) => theme.background.primary};

  .footer-content {
    max-width: 90%;
    width: 100%;
    margin: auto;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    .link {
      color: ${({ theme }) => theme.colors.gold};
      font-weight: 500;
      transition: all 200ms linear;
      position: relative;

      &:hover {
        color: ${({ theme }) => darken(0.2, theme.colors.secondary)};
      }

      &.active {
        &:before {
          content: "";
          width: 100%;
          position: absolute;
          bottom: -4px;
          left: 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;
