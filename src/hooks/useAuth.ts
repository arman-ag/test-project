const useAuth = (user: string) => {
  return [!!localStorage.getItem(user)];
};
export default useAuth;
