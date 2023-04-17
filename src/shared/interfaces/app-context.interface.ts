import { SnackbarInterface } from './snackbar.interface';

export interface AppContextInterface {
  snackbar?: SnackbarInterface;
  changeSnackbar: (model: SnackbarInterface) => void;
}
