import { createContext, ReactNode, useEffect, useState } from "react";

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({});

export function AuhtProvider({ children }: ElementChildren){
    return(
        <AuthContext.Provider value={'teste'}>
            {children}
        </AuthContext.Provider>
    )
}