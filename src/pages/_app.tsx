import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from '../contexts/GlobalContext'

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
    sidebar: '#0a3d62',
    sidebarHover: '#012c4d',
    sidebarActiveColor: '#0ab4df'
  },
  sidebar: {
    width: '260px'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </ThemeProvider>
    </>
  )
}
