import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: DM Sans, sans-serif;
        box-sizing: border-box;
        text-decoration: none;
    }

    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;

        @media (min-width: 640px) {
            max-width: 640px;
        }
        @media (min-width: 768px) {
            max-width: 768px;
        }
        @media (min-width: 1024px) {
            max-width: 1024px;
        }
        @media (min-width: 1280px) {
            max-width: 1280px;
        }
        @media (min-width: 1536px) {
            max-width: 1536px;
        }
    }
`;
