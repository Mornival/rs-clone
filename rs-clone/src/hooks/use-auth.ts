import { useSelector } from 'react-redux';

export const useAuth = () => {
    const { email, token, id } = useSelector((state: {
        user: {
            email: null | string,
            token: null | string,
            id: null | string
        }
    }) => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
