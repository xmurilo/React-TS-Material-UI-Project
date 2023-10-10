import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { AppThemeProvider } from './shared/context/ThemeContext';
import { SideBar } from './shared/components';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideBar>
          <AppRoutes />
        </SideBar>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
