import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { FooterStyle } from "./Footer.style";

const FOOTER_LINKS = [
  {
    name: "Privacy Policy",
    url: "/privacy",
  },
];

const Footer = () => {
  const date = new Date();
  const router = useRouter();

  return (
    <FooterStyle>
      <section className="footer-content">
        <article>
          © Copyright {date.getFullYear()}. All Rights Reserved by |{" "}
          <Link href={"/"}>
            <a className="link">imercium</a>
          </Link>
        </article>

        <article>
          <ul>
            {FOOTER_LINKS.map((data, index) => {
              const { name, url } = data;

              return (
                <li key={`footer-link-${index}`}>
                  <Link href={url}>
                    <a
                      className={classNames({
                        link: true,
                        active: router.asPath === url,
                      })}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </FooterStyle>
  );
};

export default Footer;
