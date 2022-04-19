import { PrivateLayout, PublicLayout } from 'components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from 'views/Login';
import Users from 'views/Users';
const queryClient = new QueryClient();

const App: React.FC = () => {
  const AuthCheck = () => {
    return localStorage.getItem('user') ? (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ) : (
      <Navigate to="/" />
    );
  };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Login />
                </PublicLayout>
              }
            />
            <Route element={<AuthCheck />}>
              <Route path="/user" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
