import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Auth/Login";
import Cadastro from "../pages/Auth/Cadastro";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerStyle: {
                        backgroundColor: "#001d3d",
                        borderBottomWith: 1,
                        borderBottomColor: "#00b9a",
                    },
                    headerTintColor: "#FFF",
                    headerTitle: "Voltar",
                    headerBackTitleVisible: false,
                }}
            />
        </AuthStack.Navigator>
    );
}
