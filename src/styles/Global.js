import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        //primary pallete
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        //gray scale pallete
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        //feedback pallete
        --sucess: #3FE864;
        --negative: #E83F5B;

    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Helvetica, Sans-Serif;

    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
