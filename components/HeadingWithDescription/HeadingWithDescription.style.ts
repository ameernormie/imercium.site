import styled from "styled-components";

export const HeadingWithDescriptionStyle = styled.article`
  .subheading {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .heading {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.gold};

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
