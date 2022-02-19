import styled from "styled-components";

type SectionWrapperStyleProps = {
  type?: "dark" | "light";
};

export const SectionWrapperStyle = styled.section<SectionWrapperStyleProps>`
  padding: 115px 15px;
  background: ${({ type, theme }) =>
    type === "light" ? theme.background.main : theme.background.secondary};

  .section-heading {
    text-align: center;
    color: ${({ theme }) => theme.colors.gold};
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .section-subheading {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
