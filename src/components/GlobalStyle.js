import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// E7ECF2;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #2C5364;
    color: #212121;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  h1, h2, h3, h4, p, ul {
    margin: 0;
    padding: 0;
  }

  nav a,
  nav a:visited {
  color: #949494;
  text-decoration: none;
  font-style: normal;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
  color: #3498db;
  text-decoration: underline;
  }

  &.active {
  color: #F13906;
  position: relative;
  }
}
`;
