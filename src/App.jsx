import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children: [{
      path : '/',
      element : <Body />
    },
    {
      path : '/contact',
      element : <Contact />
    },
    {
      path : '/about',
      element : <About />
    },
    {
      path: '/restaurants/:id',
      element: <RestaurantMenu />
    }
    ],
    errorElement: <Error />
  },
])

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;