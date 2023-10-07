import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/initial-page" element={<p>Initial Page</p>} />
      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
};

export default AppRoutes;
