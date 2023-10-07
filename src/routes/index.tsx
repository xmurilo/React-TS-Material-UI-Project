import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/initial-page"
        element={
          <Button variant="contained" color="primary">
            Initial Page
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
};

export default AppRoutes;
