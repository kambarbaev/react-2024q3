import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { Details, ErrorPage } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/people/:id',
        element: <Details />,
      },
      {
        path: '/search/',
        children: [
          {
            path: ':keyword',
          },
        ],
      },
    ],
  },
]);

export default router;
