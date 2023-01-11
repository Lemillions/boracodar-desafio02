import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    min-height: 100%;
    background-color: #F5F5F5;
    font-size: 14px;
    color: #333;
    font-family: 'Roboto', sans-serif;
  } 
`

export default GlobalStyle