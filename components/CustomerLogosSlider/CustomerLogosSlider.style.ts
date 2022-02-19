import Flickity from "react-flickity-component";
import styled from "styled-components";

import { ContainerMainStyle } from "../../styles/Common.style";

export const CustomerLogosSliderStyle = styled.div`
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 60px 0px 60px 0px;

  .wrapper {
    ${ContainerMainStyle}
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
      padding: 40px 50px;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  .left-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  }
`;

export const ImageCarouselStyle = styled(Flickity)`
  .image {
    width: 200px;
    height: 60px;
    margin-left: 60px;
  }

  .flickity-prev-next-button {
    &.previous {
      left: -20px;
    }

    &.next {
      right: -20px;
    }
  }

  .flickity-button {
    border: none;
    background: none;
    width: 15px;
    cursor: pointer;
  }
`;
