import { createContext } from 'react';
import { AppContextInterface } from '../shared/interfaces/app-context.interface';
import { SnackbarInterface } from '../shared/interfaces/snackbar.interface';

const AppContext = createContext<AppContextInterface>({
  changeSnackbar: (_model: SnackbarInterface): void => {
    throw new Error('Function not implemented.');
  },
});

export default AppContext;
