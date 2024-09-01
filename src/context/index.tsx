import { createContext } from 'react';

interface User {
  id: string;
  nombre: string;
  email: string;
  rol: string;
}

export interface AppStateProps {
  user: User | null;
  language: string;
  isLoading: boolean;
}

interface ContextValues {
  //   t: Function;
  toast: any;
  appState: AppStateProps;
  setAppState: React.Dispatch<React.SetStateAction<AppStateProps>>;
}

export const AppContext = createContext<ContextValues>({} as ContextValues);
