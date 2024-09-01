import { AppContext } from '@/context';
import { HOME_PAGE } from '@/routes/path';
import { saveTokenAuthentication, setAuthentication } from '@/services/api';
import { login } from '@/services/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';

const initialData = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const { toast, setAppState } = useContext(AppContext);
  const [data, setData] = useState(initialData);

  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login(data);
      const { accessToken, ...user } = response;
      setAuthentication(accessToken);
      saveTokenAuthentication(response.accessToken, user);
      setAppState((prev) => ({
        ...prev,
        user: user,
      }));
      setData(initialData);
      navigate(HOME_PAGE);
    } catch (error: any) {
      setData(initialData);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            value={data.email}
            className={styles.input}
            onChange={(e: any) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña: </label>
          <input
            type="password"
            name="password"
            value={data.password}
            className={styles.input}
            onChange={(e: any) => handleChange(e)}
          />
        </div>
        <button
          className={styles.button}
          type="submit"
          disabled={data.email !== '' && data.password !== '' ? false : true}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
