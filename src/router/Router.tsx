import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { Details, DetailsTemplate, ErrorPage } from '@components/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DetailsTemplate /> },
      {
        path: 'people/page/:page/:id',
        element: <Details />,
      },
      {
        path: 'people/page/:page',
        element: <DetailsTemplate />,
      },
      {
        path: 'search/:keyword/page/:page/:id',
        element: <Details />,
      },
      {
        path: 'search/:keyword/page/:page',
        element: <DetailsTemplate />,
      },
    ],
  },
]);

export default router;
