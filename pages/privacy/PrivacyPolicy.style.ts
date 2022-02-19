import styled from "styled-components";
import { HeadingWithDescriptionStyle } from "../../components/HeadingWithDescription/HeadingWithDescription.style";

const PrivacyPolicyStyle = styled.main`
  .privacy-content {
    padding: 30px 20px;
    max-width: 70%;
    margin: auto;
    width: 100%;

    @media (max-width: 600px) {
      max-width: 100%;
    }

    .description {
      line-height: 1.3;
      font-size: 15px;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .privacy-list {
    margin-bottom: 50px;
    margin-left: 1em;

    li {
      list-style-type: disc;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${HeadingWithDescriptionStyle} {
    margin-bottom: 50px;

    .heading {
      line-height: 1.3;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default PrivacyPolicyStyle;
