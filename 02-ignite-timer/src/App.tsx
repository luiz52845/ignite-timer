import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./compoments/Router";

import { defaultTheme } from "./compoments/styles/themes/default";
import { GlobalStyle } from "./compoments/styles/global";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>

    </>
  )
}

