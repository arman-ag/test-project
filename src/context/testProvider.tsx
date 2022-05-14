import { createContext, ReactNode, useEffect, useState } from 'react';

export const TestContext = createContext<boolean>(false);

export const TextSetterContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(
  () => false
);

const TestProvider = ({ children }: { children: ReactNode }) => {
  const [render, setRender] = useState(!!localStorage.getItem('user'));
  useEffect(() => {
    setRender(!!localStorage.getItem('user'));
  }, [localStorage]);

  return (
    <TestContext.Provider value={render}>
      <TextSetterContext.Provider value={setRender}>{children}</TextSetterContext.Provider>
    </TestContext.Provider>
  );
};

export default TestProvider;
