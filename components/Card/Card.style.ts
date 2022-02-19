import styled from "styled-components";
import { theme } from "../../theme/theme";

type CardStyleProps = {
  type?: "light" | "dark";
};

export const CardStyle = styled.article<CardStyleProps>`
  max-width: 265px;
  width: 100%;
  padding: 30px;
  background: ${({ type, theme }) =>
    type === "light" ? theme.background.white : theme.colors.gold};
  box-shadow: 0px 0px 9px 2px rgb(0 0 0 / 28%);
  color: ${({ type, theme }) =>
    type === "light" ? theme.colors.black : theme.colors.main};

  .card-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  .card-heading {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .card-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
  }
`;
