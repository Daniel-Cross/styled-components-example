import styled, { createGlobalStyle } from "styled-components";

export const StyledTextInput = styled.input`
  border-radius: 4px;
  font-size: 16px;
  padding: 15px;
  margin: 30px;
`;

export const StyledHeader = styled.h1`
  color: ${({ colour }) => colour || "black"};
  border-color: ${({ nightMode }) => (nightMode ? "black" : "white")};
  font-size: 35px;
  text-decoration: underline;
  border-width: 5px;
  border-style: solid;
`;

export const darkTheme = {
  body: "#282c34",
  text: "#f2f2f2",
};

export const lightTheme = {
  body: "#f2f2f2",
  text: "#282c34",
};

export const GlobalStyles = createGlobalStyle`
body, html {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  scroll-behavior: smooth;
}`;
