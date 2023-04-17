import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const fallBack = <div className="loader">🕷️</div>;

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={fallBack}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <div>&nbsp;</div>,
      },
    ],
  },
]);
