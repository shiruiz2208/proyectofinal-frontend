import { AppContext } from '@/context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const {
    appState: { user },
    setAppState,
  } = useContext(AppContext);

  const logout = () => {
    setAppState((prev) => ({
      ...prev,
      user: null,
    }));
    sessionStorage.clear();
  };

  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.box2}>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Productos</Link>
        <Link to={'/services'}>Servicios</Link>
        <Link to={'/contact'}>Contacto</Link>
      </div>
      {!user ? (
        <div className={styles.box3}>
          <Link to={'/login'}>Iniciar Sesión</Link>
          <Link to={'/register'}>Registrarse</Link>
        </div>
      ) : (
        <div className={styles.box4}>
          <p>Usuario: {user.nombre}</p>
          <button className={styles.logout} onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
