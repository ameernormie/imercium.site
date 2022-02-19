import { rgba } from "polished";
import styled from "styled-components";

type NavbarStyle = {
  isNavSticky: boolean;
};

export const NavbarStyle = styled.nav<NavbarStyle>`
  box-shadow: ${(props) =>
    props.isNavSticky ? "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" : "unset"};
  background: ${({ isNavSticky, theme }) =>
    isNavSticky ? rgba(theme.background.main, 0.9) : theme.background.main};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 200ms linear;
  padding: ${(props) => (props.isNavSticky ? "10px 70px" : "20px 70px")};

  @media (max-width: 767px) {
    padding: 20px;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: -1;

    @media (min-width: 800px) {
      display: none;
    }
  }

  .navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      display: block;
      gap: 30px;
    }
  }

  .nav-items {
    display: flex;
    gap: 20px;
    transition: all 200ms linear;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      max-height: 0;
      overflow: hidden;
      padding: 0;
    }

    &.show-dropdown {
      max-height: 100vh;
      padding: 30px;
    }

    .nav-item {
      a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
      }
    }
  }

  .branding-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      display: block;
    }
  }

  .menu-toggle-button {
    background: none;
    border: 0;
    margin: 0;
    display: inline-flex;
    flex-direction: column;
    outline: none;

    &.active {
      .toggle-menu-bar {
        &:first-child {
          transform: translate(0px, 6px) rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:last-child {
          transform: translateY(-3px) rotate(-45deg);
        }
      }
    }

    .toggle-menu-bar {
      transition: all 300ms linear;
      width: 30px;
      height: 3px;
      border-radius: 1.6px;
      margin-top: 6.4px;
      background: ${({ theme }) => theme.colors.primary};

      &:first-child {
        margin-top: 0;
      }
    }

    @media (min-width: 769px) {
      display: none;
    }
  }
`;
