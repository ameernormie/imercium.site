import styled from "styled-components";

type InnerPageHeaderStyleProps = {
  image: string;
};

export const InnerPageHeaderStyle = styled.header<InnerPageHeaderStyleProps>`
  background-image: url(${({ image }) => image});
  min-height: 300px;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  .slogan {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 35px;
    font-weight: 400;
    text-align: right;
  }
`;
