import { createGlobalStyle } from 'styled-components'

const MainStyles = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 2px;
    background:${(p) => p.theme.base};
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: ${(p) => p.theme.contrast};
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  }
  *:after, *:before {
    box-sizing: inherit;
  }
  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }

  input, textarea, button{
    font-family: 'SF Pro Display';
    outline: none;
    border:none;
    background:none;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'SF Pro Display';
    font-size:${(p) => p.theme.h5};
    color:${(p) => p.theme.text};
    min-width: 320px;
    overflow-x: hidden;
    background: ${(p) => p.theme.base};
    line-height: normal;
  }



  
  @media (min-width: 1921px) {
  html {
    font-size: 100%;
  }
}
`
export default MainStyles
