import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from 'views/Login';
import Users from 'views/Users';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const AuthCheck = () => {
    return localStorage.getItem('user') ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AuthCheck />}>
              <Route path="/user" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
