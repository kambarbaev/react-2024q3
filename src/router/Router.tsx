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
        path: 'people/page/:page/:id',
        element: <Details />,
      },
      {
        path: 'people/page/:page',
      },
      {
        path: 'search/:keyword/page/:page/:id',
        element: <Details />,
      },
      {
        path: 'search/:keyword/page/:page',
      },
    ],
  },
]);

export default router;
