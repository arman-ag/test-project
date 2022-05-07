const useAuth = (user: string) => {
  //   const [available, setAvailable] = useState(null);

  //   localStorage.getItem(user) ? setAvailable(true) : setAvailable(false);
  let available = false;
  localStorage.getItem(user) ? (available = true) : (available = false);

  return [available];
};
export default useAuth;
