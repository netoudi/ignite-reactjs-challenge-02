import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from '@app/routes';
import { GlobalStyle } from '@app/styles/global';
import { defaultTheme } from '@app/styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Coffee Delivery</h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
