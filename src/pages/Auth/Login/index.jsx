import React from "react";
import { View, Text, Platform } from "react-native";

import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText,
    Link,
    LinkText
} from './styles/style'

import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();

    return(
        <Background>
            <Container 
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
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

                <Link onPress={() => navigation.navigate('Cadastro')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}