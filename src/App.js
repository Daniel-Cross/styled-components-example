import React from "react";
import TextInput from "./components/TextInput";
import themeToggle from "./hooks/themeToggle";
import { GlobalStyles, lightTheme, darkTheme } from "./constants/styles";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = themeToggle();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={() => setTheme()}>
        {theme === "light" ? "light" : "dark"}
      </button>
      <TextInput />
    </ThemeProvider>
  );
}

export default App;
