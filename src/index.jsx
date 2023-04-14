import React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import Movies from './components/Movies';
import Movie from './components/Movie';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/articles",
        element: <Articles />
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id",
            element: <Movie />
          },
        ]
      },

    ]
  },
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
