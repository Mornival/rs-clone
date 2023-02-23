import { Link } from 'react-router-dom';
import { Login } from 'components/auth/login';
import './login.scss';

export const LoginPage = () => {
    return (
        <section className="login-page container">
            <div className="login-page__inner">
                <h1 className="sr-only">Войти</h1>

                <Login />
                <Link className="login-page__link" to={'/register'}>
                    Перейти к регистрации
                </Link>
            </div>
        </section>
    );
};
