import { createContext, useState } from "react";
import { IUser } from "../models/user";
import { useNavigate } from "react-router-dom";
export const INITIAL_USER = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
}

type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }){
    const navigate = useNavigate();
    const [ user, setUser ] = useState<IUser>(INITIAL_USER);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const checkAuthUser = async () => {
        setIsLoading(true);

        try {
            //const checkCurren = await
        } catch (error) {
           console.error(error);
           return false; 
        } finally {
            setIsLoading(false);
        }
    }
}