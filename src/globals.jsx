// imports from styled component
import { createGlobalStyle } from 'styled-components';
// Global styles components
export const GlobalStyle = createGlobalStyle`
:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #242424;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}
#root {
	width: 100%;
	height: 90vh;
	/* max-height: 50vh; */
}

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  body,html {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: white;
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: white;
    }
  }
`;
