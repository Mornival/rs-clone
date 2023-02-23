import { Form } from './form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slice/useSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
    const [state, setState] = useState(true);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        const auth = getAuth();

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            dispatch(
                setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                })
            );

            history('/vacancies');
        } catch (error) {
            console.log('error', error);
            setState(false);
        }
    };

    return <Form title="Войти" handleClick={handleLogin} valid={state} />;
};
