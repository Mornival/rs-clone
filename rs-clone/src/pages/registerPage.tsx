import { Link } from 'react-router-dom';
import { SignUp } from 'components/auth/signUp';
import './register.scss';

export const RegisterPage = () => {
    return (
        <section className="register-page container">
            <div className="register-page__inner">
                <h1 className="sr-only">регистрация</h1>

                <SignUp />

                <Link className="register-page__link" to={'/login'}>
                    Войти в аккаунт
                </Link>
            </div>
        </section>
    );
};
