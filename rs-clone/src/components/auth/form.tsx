import { useState, useEffect } from 'react';
import { stopSubmitFormHandler } from 'utils/stopSubmitForm';
import { valid_form } from 'types/enum';
import './form.scss';

export const Form = (props: {
    title: string;
    handleClick: (email: string, password: string) => void;
    valid: string;
}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { title, handleClick, valid } = props;

    let text = '';

    if (valid === valid_form.no_accaunt) {
        text = 'Неверный email или пароль';
    } else if (valid === valid_form.account_is_used) {
        text = 'Такой аккаунт уже есть';
    }

    useEffect(() => {
        setEmail('');
        setPass('');
    }, [valid]);

    return (
        <>
            <span className="login-page__valid">{text}</span>

            <form className="form" onSubmit={stopSubmitFormHandler}>
                <label className="form__box form__box--email" htmlFor="email">
                    Введите почту:
                    <input
                        className="form__input form__email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        autoComplete="none"
                        required
                    />
                </label>

                <label className="form__box form__box--pass" htmlFor="password">
                    Введите пароль:
                    <input
                        className="form__input form__password"
                        id="password"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="password"
                        minLength={6}
                        required
                    />
                    <span className="form__text-valid">не менее 6 символов</span>
                </label>

                <button className="form__btn" type="submit" onClick={() => handleClick(email, pass)}>
                    {title}
                </button>
            </form>
        </>
    );
};
