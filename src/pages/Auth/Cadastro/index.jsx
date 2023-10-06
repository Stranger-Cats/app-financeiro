import React from "react";
import { View, Text, Platform } from "react-native";

import styled from "styled-components/native";

import { AreaText } from "./styles/style";

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
} from "../Login/styles/style";

export default function Cadastro() {
    return (
        <Background>
            <Container
                behavior={Platform.OS === "ios" ? "padding" : ""}
                enabled
            >
                <AreaText>Register</AreaText>

                <AreaInput>
                    <Input placeholder="Email"></Input>
                </AreaInput>

                <AreaInput>
                    <Input placeholder="Senha"></Input>
                </AreaInput>

                <AreaInput>
                    <Input placeholder="Confirmar senha"></Input>
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}
