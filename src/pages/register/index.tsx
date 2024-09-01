import { AppContext } from '@/context';
import { LOGIN_PAGE } from '@/routes/path';
import { register } from '@/services/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.scss';

const initialData = {
  nombre: '',
  email: '',
  password: '',
};

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useContext(AppContext);
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
      const response = await register(data);
      toast.success(response.msg);
      setData(initialData);
      navigate(LOGIN_PAGE);
    } catch (error: any) {
      setData(initialData);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Registrarse</h1>
        <div>
          <label htmlFor="">Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={data.nombre}
            className={styles.input}
            onChange={(e: any) => handleChange(e)}
          />
        </div>
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
          disabled={
            data.nombre !== '' && data.email !== '' && data.password !== ''
              ? false
              : true
          }
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
