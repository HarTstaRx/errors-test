import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import AppContext from './context/AppContext';
import { AppContextInterface } from './shared/interfaces';
import { InterceptorService } from './shared/services';

import './App.scss';

function App() {
  const appContext = useContext<AppContextInterface>(AppContext);
  useEffect(() => {
    InterceptorService(appContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
