import { createContext, useEffect, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token && window.location.pathname == '/') {
      window.location.href = '/dashboard';
    } else if (!token && window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };