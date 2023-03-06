import { parseCookies } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { UserType } from "../@types/User";

type AuthContextType = {
    user: { [key: string]: string } | UserType;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuhtProvider({ children }: ElementChildren){
    let user = parseCookies(undefined, "auth");

    if(user.auth !== undefined){
        user = JSON.parse(user.auth);
    }

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}