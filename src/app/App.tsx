import React from 'react';
import cn from 'classnames';
import { useTheme } from 'app/providers/theme-provider';
import 'app/styles/index.scss';
import { Navbar } from 'widgets/sidebar';
import { AppRouter } from 'app/providers/router';

const App = () => {
  const { theme } = useTheme();
  // const dispatch = useDispatch();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
