import styled from "styled-components";

export const CardWithIconStyle = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  max-width: 250px;
  gap: 20px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 500px;
  }

  .heading {
    font-size: 1.17em;
    font-weight: 700;
  }

  .description {
    margin-top: 20px;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;
