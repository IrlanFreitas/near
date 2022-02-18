// import App from "next/app";

import GlobalStyle from "../src/theme/GlobalStyle";

//* Primeiro arquivo acessado para quando for acessar qualquer página 

function MyApp({ Component, pageProps }) {
    return (<>
        <GlobalStyle />
        <Component {...pageProps} />
    </>)
}

export default MyApp;