import React, { FC } from 'react';
import { useAuth } from './context/auth-context';
import './App.css';

import { AuthenticatedApp } from './view/AuthenticatedApp/AuthenticatedApp';

const App: FC = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn() ? <AuthenticatedApp /> : <h2> not logged in </h2>;
};

export default App;
