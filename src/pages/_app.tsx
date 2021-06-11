import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {   
  background-color: #ecf0f1;
  font-family: "Roboto", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

*, button, input{
  border: 0;
  outline: 0;
}

button {
  cursor: pointer;
}
`

const theme = {
  colors: {
    primary: '#0a3d62',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
