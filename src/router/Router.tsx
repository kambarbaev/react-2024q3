import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Main
        <a href={`/test`}>Test error route</a>
      </div>
    ),
    errorElement: <div>404</div>,
  },
]);

export default router;
