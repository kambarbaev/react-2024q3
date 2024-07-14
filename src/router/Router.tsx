import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { ErrorPage } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
