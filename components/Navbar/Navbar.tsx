import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";
import isMobile from "is-mobile";

import classNames from "classnames";
import { NavItemType } from "../../types/NavItems";
import { NavbarStyle } from "./Navbar.style";
import { ThemeToggle } from "..";
import Link from "next/link";
import { useThemeContext } from "../../theme/StyledThemeProvider";

type NavbarProps = {
  navItems: NavItemType[];
};

export default function Navbar(props: NavbarProps) {
  const { themeType } = useThemeContext();
  const { navItems = [] } = props;

  const [isNavSticky, setStickyNav] = useState(false);
  const [isShowDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const navTop = nav?.offsetTop || "";
      setStickyNav(window.scrollY > navTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  const toggle = () => {
    if (window.innerWidth < 769) {
      setShowDropdown(!isShowDropdown);
    }
  };

  return (
    <NavbarStyle isNavSticky={isNavSticky}>
      <section className="navbar-wrapper">
        <article className="branding-wrapper">
          <Link href="/">
            <a>
              <span className="logo">
                <img
                  height={75}
                  width={240}
                  src={
                    themeType === "light"
                      ? "/images/logo.png"
                      : "/images/logo-dark.png"
                  }
                  alt="logo"
                  className="logo-image"
                />
              </span>
            </a>
          </Link>

          <button
            className={classNames({
              "menu-toggle-button": true,
              active: isShowDropdown,
            })}
            onClick={toggle}
          >
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
          </button>
        </article>

        <ul
          className={classNames({
            "nav-items": true,
            "show-dropdown": isShowDropdown,
          })}
        >
          {navItems.map((data: NavItemType, index: number) => {
            const { name, url } = data;

            return (
              <li key={`nav-item-${index}`} className="nav-item">
                {router.asPath === "/" || router.asPath.includes("/#") ? (
                  <AnchorLink
                    offset={() => (isMobile() ? 0 : 100)}
                    href={`#${url}`}
                  >
                    <a>{name}</a>
                  </AnchorLink>
                ) : (
                  <Link href={`/#${url}`}>
                    <a>{name}</a>
                  </Link>
                )}
              </li>
            );
          })}

          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="overlay" onClick={() => setShowDropdown(false)} />
      </section>
    </NavbarStyle>
  );
}
