import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    footer {
        background: ${({ theme }) => theme.body};
    }
    footer span {
        color: ${({ theme }) => theme.text};
    }
    .bg-dark {
        background: ${({ theme }) => theme.body} !important;
    }
    .nav-link {
        color: ${({ theme }) => theme.text} !important;
    }
`;