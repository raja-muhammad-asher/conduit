import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import { GlobalStyle } from './globalStyles/index';
import theme from './globalStyles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
