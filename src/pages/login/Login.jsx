import { useEffect, useState, useContext } from "react";
import { MyContext } from "../../context/Context";

const Login = () => {
  const [access_token, setAccess_token] = useState(null);
  const { setAccessToken } = useContext(MyContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('access_token');
    if (token) {
      localStorage.setItem('access_token', token);
      window.location.href = '/dashboard';
    }
  }, [setAccessToken]);

  return (
    <div>
      <h1>Authenticating</h1>
    </div>
  );
};

export default Login;