import React, { createContext, FC, useState } from 'react';
import { useAuth } from './auth-context';

interface AppData {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  meditations: Meditation[];
  getAllMeditations(): void;
  addMeditation(date: moment.Moment | null): void;
  deleteMeditation(id: number): void;
  appError: Error | null;
}

interface Meditation {
  id: string;
  postingDate: string;
  username: string;
  awarenessPoints: number;
}

const MEDITATION_API_URL =
  'https://mind-tracker-api-v2.herokuapp.com/meditation';
const AppContext = createContext<AppData>({} as AppData);

export const useApp = (): AppData => React.useContext<AppData>(AppContext);

export const AppProvider: FC = ({ children }) => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [appError, setAuthError] = useState(null);

  const [meditations, setMeditations] = useState([]);

  const getAllMeditations = async () => {
    setIsLoading(true);
    try {
      const url = new URL(MEDITATION_API_URL);
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url.toString(), options);
      const json = await response.json();
      if (response.status !== 200) throw new Error(json.message);
      setMeditations(json.data);
      clearAuthError();
    } catch (err) {
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addMeditation = async (date: moment.Moment | null = null) => {
    try {
      const url = new URL(MEDITATION_API_URL);
      const data = { postingDate: date ? date?.format('YYYY-MM-DD') : '' };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url.toString(), options);
      const json = await response.json();
      if (response.status !== 201) throw new Error(json.message);
      clearAuthError();
    } catch (err) {
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMeditation = async (id: number = -1) => {
    try {
      const url = new URL(MEDITATION_API_URL);
      const data = { id };
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url.toString(), options);
      const json = await response.json();
      if (response.status !== 200) throw new Error(json.message);
      clearAuthError();
    } catch (err) {
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAuthError = () => {
    if (appError) setAuthError(null);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        appError,
        setIsLoading,
        meditations,
        getAllMeditations,
        addMeditation,
        deleteMeditation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
