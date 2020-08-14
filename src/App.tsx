import React, { FC } from 'react';
import { useAuth } from './context/auth-context';
import './App.css';

import { AppProvider } from './context/app-context';

import { AuthenticatedApp } from './view/AuthenticatedApp/AuthenticatedApp';
import { LoginRegister } from './view/LoginRegister/LoginRegister';

const App: FC = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <AppProvider>
      <AuthenticatedApp />
    </AppProvider>
  ) : (
    <LoginRegister />
  );
};

export default App;
