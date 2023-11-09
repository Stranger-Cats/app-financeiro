import React, { useState, useContext } from "react";
import { View, Text, Platform, ActivityIndicator } from "react-native";

import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from "./styles/style";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../../contexts/auth";

export default function Login() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? "padding" : ""}
                enabled
            >
                <Logo source={require("../../../assets/Logo.png")} />

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(Text) => setEmail(Text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(Text) => setPassword(Text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={20} color={"#fff"} />
                    ) : (
                        <SubmitText>Entrar</SubmitText>
                    )}
                </SubmitButton>

                <Link onPress={() => navigation.navigate("Cadastro")}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>
            </Container>
        </Background>
    );
}
