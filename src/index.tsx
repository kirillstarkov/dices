import { ThemeProvider } from 'app/providers/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'store/ui/store-provider';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);
