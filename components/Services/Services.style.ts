import styled from "styled-components";
import { ContainerMainStyle } from "../../styles/Common.style";

export const ServicesStyle = styled.div`
  .services-wrapper {
    ${ContainerMainStyle};
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;
    padding-top: 50px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 767px) {
      grid-template-columns: auto;
      justify-items: center;
    }
  }
  .icons-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;
