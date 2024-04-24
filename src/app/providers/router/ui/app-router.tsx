import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/route-config';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (<div className="page-wrapper">{route.element}</div>);
    return (
      <Route
        path={route.path}
        element={element}
        key={route.path}
      />
    );
  }, []);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
