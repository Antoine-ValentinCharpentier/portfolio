import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --first-bg: #262626;
    --second-bg: #1E1E1E;
    --text: white;
    --title: white;
    --details: #363636;
    --header-title: white;
    --blue : #81ADC8; 
  }

  .light-mode {
    --first-bg: #FFF;
    --second-bg: #F8F8F8;
    --text: black;
    --title: white;
    --details: black;
    --header-title: black;
    --blue : #81ADC8;    
  }

  .light-mode, .dark-mode {
    background-color: var(--first-bg);
    position: absolute;
    width: 100%;
    min-height: 100%;
  }

  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  p,a,h1,h2,h3,h4{
    word-wrap: break-word;       
    overflow-wrap: break-word;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0rem auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--details);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--second-bg);
      .scrollbar-thumb-y {
        background: var(--det);
      }
    }
  }
`;
export default GlobalStyles;
