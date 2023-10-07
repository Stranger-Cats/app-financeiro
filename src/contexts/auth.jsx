import React, { Children, createContext, useState } from "react";

import api from "../services/api.jsx";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        nome: "Raphael Teste",
    });

    const navigation = useNavigation();

    async function signUp(email, password, nome) {
        try {
            const response = await api.post("/users", {
                name: nome,
                password: password,
                email: email,
            });
            navigation.goBack();
        } catch (error) {
            console.log("Error Cadastrar!", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
