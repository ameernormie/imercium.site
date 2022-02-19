import styled from "styled-components";
import { ContainerMainStyle } from "../../styles/Common.style";

export const AboutUsStyle = styled.section`
  padding: 115px 20px;

  .about-us-wrapper {
    ${ContainerMainStyle};

    display: grid;
    grid-template-columns: 1fr minmax(auto, 265px) minmax(auto, 265px);
    grid-gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .cards-wrapper {
    display: grid;
    grid-gap: 20px;
  }

  .about-us-heading {
    font-size: 32px;
    line-height: 48px;
    margin-top: 30px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWithDescriptionStyle = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  .tick-icon {
    width: 27px;
  }

  .description {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
