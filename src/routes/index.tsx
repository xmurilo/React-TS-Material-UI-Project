import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/context/ThemeContext';

const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path='/initial-page'
        element={
          <Button variant='contained' color='primary' onClick={toggleTheme}>
            Initial Page
          </Button>
        }
      />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  );
};

export default AppRoutes;
