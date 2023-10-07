import React, { useContext, useState } from "react";
import { View, Text, Platform } from "react-native";

import styled from "styled-components/native";

import { AreaText } from "./styles/style";

import { AuthContext } from "../../../contexts/auth";

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
} from "../Login/styles/style";

export default function Cadastro() {
    const { signUp } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSingUp() {
        signUp(nome, email, password);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? "padding" : ""}
                enabled
            >
                <AreaText>Register</AreaText>

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    ></Input>
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    ></Input>
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    ></Input>
                </AreaInput>

                <SubmitButton onPress={handleSingUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}
