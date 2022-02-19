import { createGlobalStyle } from "styled-components";

export const BaseStyle = createGlobalStyle`
    html {
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            text-decoration: none;
            list-style: none;
        }

        body {
            margin-top: 105px;
            background: ${({ theme }) => {
              //@ts-ignore
              return theme.background.main;
            }};
        }
    }
`;
