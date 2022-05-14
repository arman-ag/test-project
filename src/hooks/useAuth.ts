import { TestContext, TextSetterContext } from 'context/testProvider';
import { useContext } from 'react';
const useAuth = () => {
  const auth = useContext(TestContext);
  return [auth];
};
export default useAuth;
export const useIsAuth = () => useContext(TextSetterContext);
