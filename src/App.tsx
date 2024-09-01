import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { AppContext, AppStateProps } from './context';
import router from './routes';

const AppInitialState = {
  user: null,
  isLoading: false,
  language: localStorage.getItem('LANGUAGE') || 'en',
};

function App() {
  const [appState, setAppState] = useState<AppStateProps>({
    ...AppInitialState,
  });

  return (
    <AppContext.Provider
      value={{
        // t,
        toast,
        appState,
        setAppState,
      }}
    >
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </AppContext.Provider>
  );
}

export default App;
