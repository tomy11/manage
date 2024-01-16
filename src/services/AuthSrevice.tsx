import { SignInInput } from '../hooks/auth';
import { api } from '../services/Api';

const signIn = async (user: SignInInput) => {
    const response = await api({
        method: 'POST',
        url: '/signin',
        headers: { 'content-type': 'application/json' },
        data: { email: user.email, password: user.password },
    });

    const { token, data } = response.data
    localStorage.setItem('@AppControl:token', token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    localStorage.setItem("@AppControl:user", JSON.stringify(data));

    return data;
};

export default signIn;