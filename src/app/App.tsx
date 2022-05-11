import { PrivateLayout } from 'components/Layout';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleUSer from 'views/SingleUser';
import Users from 'views/Users';
const queryClient = new QueryClient();

const App: React.FC = () => {
  const [authenticate] = useAuth('user');
  const AuthCheck = () =>
    authenticate ? (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ) : (
      <Navigate to="/" />
    );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={() => {
                return authenticate ? (
                  <Route path="/user" element={<Users />} />
                ) : (
                  <Navigate to="/" />
                );
              }}
            />
            {/* <Route
                path="/"
                element={
                  <PublicLayout>
                    <Login />
                  </PublicLayout>
                }
              /> */}
            <Route element={<AuthCheck />}>
              <Route path="/user" element={<Users />} />
              <Route path="/single-user" element={<SingleUSer />}>
                <Route path=":id" element={<SingleUSer />} />
                <Route />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
};

export default App;
