import styled from "styled-components";

import { ContainerMainStyle } from "../../styles/Common.style";

export const HeaderStyle = styled.header`
  padding: 115px 15px;
  background: ${({ theme }) => theme.background.primary};

  .header-wrapper {
    ${ContainerMainStyle};

    display: grid;
    grid-template-columns: minmax(10px, 415px) 1fr;
    align-items: center;
    gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .header-content {
    max-width: 415px;
    width: 100%;

    .header-title {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 40px;
      color: ${({ theme }) => theme.colors.primary};

      span {
        color: ${({ theme }) => theme.colors.gold};
      }
    }

    .header-subtitle {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .header-visual-wrapper {
    .header-visual {
      max-width: 710px;
      width: 100%;
    }
  }
`;
