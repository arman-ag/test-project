import TestProvider from 'context/testProvider';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouterWrapper from './Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TestProvider>
          <RouterWrapper />
        </TestProvider>
        <ReactQueryDevtools />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
};

export default App;
