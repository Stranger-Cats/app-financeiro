import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Auth/Login";
import Cadastro from "../pages/Auth/Cadastro";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={Login}
            />

            <AuthStack.Screen
                name="Cadastro"
                component={Cadastro}
            />
        </AuthStack.Navigator>
    )
}