import styled from "styled-components";

export const ThemeToggleStyle = styled.div`
  position: relative;

  .checkbox {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: pointer;
  }

  .label {
    cursor: pointer;
    width: 35px;
    height: unset;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    position: relative;
    transform: scale(1.5);
  }

  .ball {
    width: 13px;
    height: 13px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball {
    transform: translateX(16px);
  }

  .icon {
    max-width: 10px;
    width: 100%;
    cursor: pointer;
  }
`;
