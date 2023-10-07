import React, { Children, createContext, useState } from "react";

import api from "../services/api.jsx";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation();

    async function signUp(email, password, nome) {
        setLoadingAuth(true);
        try {
            const response = await api.post("/users", {
                name: nome,
                password: password,
                email: email,
            });
            setLoadingAuth(false);
            navigation.goBack();
        } catch (error) {
            console.log("Error Cadastrar!", error);
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, signUp, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
