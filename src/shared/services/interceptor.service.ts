import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';

import { AppContextInterface, SnackbarInterface } from '../interfaces';

export function InterceptorService(storeContext: AppContextInterface): void {
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return {
        ...config,
        baseURL: import.meta.env.VITE_API,
      };
    },
    (error: Record<string, unknown>) => error,
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error && error.response) {
        const snackbar: SnackbarInterface = {
          type: 'error',
          isVisible: true,
          title: error.response.status.toString(),
          message: error.response.statusText,
        };

        if ([500].includes(error.response.status)) {
          snackbar.title = 'Error en el servidor';
        }

        if ([400].includes(error.response.status)) {
          snackbar.title = 'Error de validación';
        }

        if ([403].includes(error.response.status)) {
          snackbar.message = 'Error de permisos';
        }

        if (![401].includes(error.response.status)) {
          storeContext.changeSnackbar(snackbar);
        }
      }
      if (error.response && [401].includes(error.response.status)) {
        // logout
      }

      // eslint-disable-next-line no-console
      if (import.meta.env.VITE_ENV === 'DEV') console.log(error);

      return Promise.reject(error);
    },
  );
}
