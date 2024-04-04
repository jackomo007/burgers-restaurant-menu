import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import { theme } from '../src/styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;