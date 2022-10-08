import { PrivateLayout, PublicLayout } from 'components/Layout';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from 'views/Login';
import NotFound from 'views/NotFound';
import SingleUSer from 'views/SingleUser';
import Users from 'views/Users';

const AuthCheck = ({ authenticate }: { authenticate: boolean }) => {
  console.log('render duidsvgiusgvi');
  return authenticate ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/" />
  );
};

const Home = ({ authenticate }: { authenticate: boolean }) => {
  return authenticate ? <Navigate to="/user" /> : <Outlet />;
};
const RouterWrapper = () => {
  const [authenticate] = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          }
        />
        <Route element={<Home authenticate={authenticate} />}>
          <Route
            path="/"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
        </Route>
        <Route element={<AuthCheck authenticate={authenticate} />}>
          <Route path="/user" element={<Users />} />
          <Route path="/single-user" element={<SingleUSer />}>
            <Route path=":id" element={<SingleUSer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterWrapper;
