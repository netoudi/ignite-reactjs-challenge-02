import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '@app/components/Header';
import { CartProvider } from '@app/contexts/CartContext';
import { Router } from '@app/routes';
import { GlobalStyle } from '@app/styles/global';
import { defaultTheme } from '@app/styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Router />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
