import { User } from '@/models/user';
import { api } from '../services/Api';
import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

export interface SignInInput {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: User;
}

export interface AuthContextData {
    authState: AuthState;
    user: User;
    signIn(input: SignInInput): Promise<void>;
    signOut(): void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@AppControl:token');
        const user = localStorage.getItem("@AppControl:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async (user: SignInInput) => {
        console.log('user ::', user);
        
        const response = await api({
            method: 'POST',
            url: '/signin',
            headers: { 'content-type': 'application/json' },
            data: { email: user.email, password: user.password },
        });

        
        
        const { token, data } = response.data
        console.log("the data :: ", data);
        
        localStorage.setItem('@AppControl:token', token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        localStorage.setItem("@AppControl:user", JSON.stringify(data));

        setData({ token, user: data });

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@AppControl:token");
        localStorage.removeItem("@AppControl:user");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, authState: data, user: data.user, signOut }}>
            {children}
        </AuthContext.Provider>
    );
    
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
