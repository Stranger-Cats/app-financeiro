import React from "react";
import { View, Text } from "react-native";

import { Background } from './styles/style'

export default function Login(){
    return(
        <Background>
            <Container>
                <Logo
                    source={require('../../../assets/Logo.png')}                
                />

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}