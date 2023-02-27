import { Form } from './form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slice/useSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { valid_form } from 'types/enum';

export const SignUp = () => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleRegister = async (email: string, password: string) => {
        const auth = getAuth();

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

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
            setState(valid_form.account_is_used);
        }
    };

    return <Form title="Зарегистрироваться" handleClick={handleRegister} valid={state} />;
};
