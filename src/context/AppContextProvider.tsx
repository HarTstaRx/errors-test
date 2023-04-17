/* eslint-disable @typescript-eslint/no-use-before-define */
import { ReactNode, useMemo, useState } from 'react';

import AppContext from './AppContext';
import { AppContextInterface } from '../shared/interfaces/app-context.interface';
import { SnackbarInterface } from '../shared/interfaces/snackbar.interface';

interface AppContextProviderProps {
  children: ReactNode;
}
export default function AppContextProvider(props: AppContextProviderProps): JSX.Element {
  const { children } = props;
  const changeSnackbar = (snackbar: SnackbarInterface) => {
    setContext((oldContext) => ({
      ...oldContext,
      snackbar,
    }));
  };
  const [context, setContext] = useState<AppContextInterface>({
    changeSnackbar,
  });
  const contextValue: AppContextInterface = useMemo(
    () => ({
      ...context,
      changeSnackbar,
    }),
    [context],
  );
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
