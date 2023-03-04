import { createContext, ReactNode, useState } from "react";
import { UserType } from "../@types/User";

type AuthContextType = {
    user: UserType | null | undefined;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuhtProvider({ children }: ElementChildren){
    const [user, setUser] = useState<UserType | null>();

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}